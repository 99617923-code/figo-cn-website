/**
 * 预渲染脚本 — 火鹰科技 GEO 优化
 * 
 * 在 vite build 之后运行，使用 Puppeteer 访问每个路由，
 * 将渲染好的完整 HTML 保存为静态文件。
 * 
 * 这样 AI 爬虫（豆包、元宝、DeepSeek、通义千问、GPTBot 等）
 * 即使不执行 JavaScript 也能获取到完整的页面内容。
 */

import { execSync } from 'child_process';
import fs from 'fs';
import http from 'http';
import path from 'path';
import puppeteer from 'puppeteer-core';

const DIST_DIR = path.resolve('dist/public');
const PORT = 4173;

// 需要预渲染的路由列表
const ROUTES = [
  '/',
  '/FigoAgent',
  '/services',
  '/products/figo-engine',
  '/products/salespark',
  '/products/moss',
  '/products/reviewhub',
  '/products/ring-ai',
  '/products/farui-chat',
  '/products/figo-ai',
  '/solutions/ai-quote',
];

/**
 * 简单的静态文件服务器，用于在预渲染时提供构建产物
 */
function createServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
      
      // SPA fallback: 如果文件不存在且不是静态资源，返回 index.html
      if (!fs.existsSync(filePath) && !path.extname(filePath)) {
        filePath = path.join(DIST_DIR, 'index.html');
      }
      
      if (!fs.existsSync(filePath)) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.woff2': 'font/woff2',
        '.woff': 'font/woff',
        '.ttf': 'font/ttf',
      };

      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(PORT, () => {
      console.log(`📦 Preview server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

/**
 * 清理 HTML：移除开发环境专用的脚本和调试代码
 */
function cleanHTML(html) {
  // 移除 manus debug collector 脚本标签
  html = html.replace(/<script[^>]*debug-collector[^>]*><\/script>/gi, '');
  // 移除空的 prerender-data 脚本
  html = html.replace(/<script[^>]*prerender-data[^>]*>\s*<\/script>/gi, '');
  return html;
}

async function prerender() {
  console.log('🚀 开始预渲染...\n');

  // 1. 构建（如果没有 --skip-build 参数）
  const skipBuild = process.argv.includes('--skip-build');
  if (!skipBuild) {
    console.log('📦 正在构建项目...');
    try {
      execSync('pnpm run build', { stdio: 'inherit' });
    } catch (e) {
      console.error('❌ 构建失败');
      process.exit(1);
    }
  } else {
    console.log('⏭️  跳过构建（使用已有的 dist 目录）');
  }

  // 2. 启动预览服务器
  const server = await createServer();

  // 3. 启动 Puppeteer
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  const results = [];

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;
    
    console.log(`  🔄 预渲染: ${route}`);
    
    try {
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // 等待 React 渲染完成
      await page.waitForSelector('#root > *', { timeout: 10000 });
      
      // 额外等待确保动画和懒加载内容完成
      await new Promise(r => setTimeout(r, 2000));

      // 获取完整的渲染后 HTML
      let html = await page.content();
      html = cleanHTML(html);

      // 确定输出路径
      let outputPath;
      if (route === '/') {
        outputPath = path.join(DIST_DIR, 'index.html');
      } else {
        // 创建目录结构: /products/moss -> dist/public/products/moss/index.html
        const dir = path.join(DIST_DIR, route);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        outputPath = path.join(dir, 'index.html');
      }

      fs.writeFileSync(outputPath, html, 'utf-8');
      
      // 统计内容量
      const textContent = await page.evaluate(() => document.body?.innerText?.length || 0);
      results.push({ route, status: '✅', chars: textContent });
      
    } catch (err) {
      console.error(`  ❌ 预渲染失败: ${route} - ${err.message}`);
      results.push({ route, status: '❌', chars: 0 });
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  // 4. 输出结果报告
  console.log('\n📊 预渲染结果:');
  console.log('─'.repeat(60));
  console.log(`${'路由'.padEnd(35)}${'状态'.padEnd(5)}${'文本字符数'}`);
  console.log('─'.repeat(60));
  for (const r of results) {
    console.log(`${r.route.padEnd(35)}${r.status.padEnd(5)}${r.chars.toLocaleString()}`);
  }
  console.log('─'.repeat(60));
  
  const success = results.filter(r => r.status === '✅').length;
  const total = results.length;
  console.log(`\n✨ 预渲染完成: ${success}/${total} 页面成功`);
  
  if (success < total) {
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error('预渲染脚本出错:', err);
  process.exit(1);
});
