/**
 * 火鹰科技 - 多模态AI聊天演示窗口
 * 展示6大产品的AI能力：技术方案、报价、视频生成、合同、英语教练、销售话术评分
 */

class AIChatDemo {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentSceneIndex = 0;
    this.isAutoPlay = true;
    this.autoPlayInterval = null;
    this.init();
  }

  init() {
    this.createHTML();
    this.bindEvents();
    this.startAutoPlay();
  }

  createHTML() {
    const html = `
      <div class="ai-chat-container">
        <div class="ai-chat-header">
          <h3>🤖 火鹰AI智能助手</h3>
          <p>体验6大产品的AI能力</p>
        </div>
        
        <div class="ai-chat-main">
          <!-- 左侧：聊天窗口 -->
          <div class="ai-chat-left">
            <div class="ai-messages">
              <div class="ai-message ai-message-bot">
                <p>你好！我是火鹰AI助手。请告诉我你需要什么帮助？</p>
              </div>
            </div>
            <div class="ai-input-area">
              <input type="text" class="ai-input" placeholder="输入你的需求..." readonly>
              <button class="ai-send-btn">发送</button>
            </div>
          </div>

          <!-- 右侧：响应展示区 -->
          <div class="ai-chat-right">
            <div class="ai-response-container">
              <div class="ai-response-placeholder">
                <p>👉 在左侧输入需求，我会立即响应</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 场景控制 -->
        <div class="ai-chat-controls">
          <button class="ai-prev-btn">⬅ 上一个</button>
          <span class="ai-scene-indicator"><span class="ai-current">1</span>/<span class="ai-total">6</span></span>
          <button class="ai-next-btn">下一个 ➡</button>
          <button class="ai-autoplay-btn">▶ 自动演示</button>
        </div>
      </div>
    `;
    
    this.container.innerHTML = html;
    this.createStyles();
  }

  createStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .ai-chat-container {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 16px;
        padding: 24px;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        max-width: 900px;
        margin: 0 auto;
      }

      .ai-chat-header {
        text-align: center;
        margin-bottom: 24px;
      }

      .ai-chat-header h3 {
        margin: 0 0 8px 0;
        font-size: 24px;
        font-weight: 600;
      }

      .ai-chat-header p {
        margin: 0;
        font-size: 14px;
        opacity: 0.9;
      }

      .ai-chat-main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
        min-height: 400px;
      }

      .ai-chat-left {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(10px);
      }

      .ai-messages {
        flex: 1;
        overflow-y: auto;
        margin-bottom: 16px;
        padding-right: 8px;
      }

      .ai-message {
        margin-bottom: 12px;
        animation: slideIn 0.3s ease-out;
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .ai-message-bot {
        text-align: left;
      }

      .ai-message-bot p {
        background: rgba(255, 255, 255, 0.2);
        padding: 10px 14px;
        border-radius: 8px;
        margin: 0;
        font-size: 14px;
        max-width: 85%;
      }

      .ai-message-user {
        text-align: right;
      }

      .ai-message-user p {
        background: rgba(255, 255, 255, 0.3);
        padding: 10px 14px;
        border-radius: 8px;
        margin: 0;
        font-size: 14px;
        max-width: 85%;
        margin-left: auto;
      }

      .ai-input-area {
        display: flex;
        gap: 8px;
      }

      .ai-input {
        flex: 1;
        padding: 10px 14px;
        border: none;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.15);
        color: #fff;
        font-size: 14px;
      }

      .ai-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }

      .ai-send-btn {
        padding: 10px 20px;
        background: #ff6b6b;
        border: none;
        border-radius: 8px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
      }

      .ai-send-btn:hover {
        background: #ff5252;
        transform: translateY(-2px);
      }

      .ai-chat-right {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 16px;
        overflow-y: auto;
        backdrop-filter: blur(10px);
      }

      .ai-response-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-align: center;
        opacity: 0.7;
      }

      .ai-response-placeholder p {
        margin: 0;
        font-size: 16px;
      }

      .ai-response-content {
        animation: fadeIn 0.5s ease-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      /* 响应内容样式 */
      .ai-response-document {
        background: rgba(255, 255, 255, 0.15);
        padding: 16px;
        border-radius: 8px;
        font-size: 13px;
        line-height: 1.6;
      }

      .ai-response-document h4 {
        margin: 0 0 12px 0;
        font-size: 16px;
        color: #fff;
      }

      .ai-response-document p {
        margin: 0 0 8px 0;
        opacity: 0.9;
      }

      .ai-response-quote {
        background: rgba(255, 255, 255, 0.1);
        border-left: 3px solid #ffd700;
        padding: 12px;
        margin: 8px 0;
        border-radius: 4px;
      }

      .ai-response-progress {
        margin: 20px 0;
      }

      .ai-progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 8px;
      }

      .ai-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #ffd700, #ff6b6b);
        width: 0%;
        animation: progressFill 3s ease-out forwards;
      }

      @keyframes progressFill {
        to {
          width: 100%;
        }
      }

      .ai-progress-text {
        text-align: center;
        font-size: 13px;
        opacity: 0.8;
      }

      .ai-video-preview {
        background: #000;
        border-radius: 8px;
        aspect-ratio: 16/9;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 12px 0;
        font-size: 48px;
      }

      .ai-score-card {
        background: rgba(255, 255, 255, 0.1);
        padding: 12px;
        border-radius: 8px;
        margin: 8px 0;
      }

      .ai-score-label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6px;
        font-size: 13px;
      }

      .ai-score-bar {
        width: 100%;
        height: 6px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        overflow: hidden;
      }

      .ai-score-fill {
        height: 100%;
        background: linear-gradient(90deg, #4ade80, #ffd700);
        animation: scoreAnimation 1s ease-out forwards;
      }

      @keyframes scoreAnimation {
        from {
          width: 0%;
        }
      }

      .ai-chat-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        padding-top: 16px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
      }

      .ai-prev-btn, .ai-next-btn, .ai-autoplay-btn {
        padding: 10px 16px;
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
      }

      .ai-prev-btn:hover, .ai-next-btn:hover, .ai-autoplay-btn:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
      }

      .ai-autoplay-btn.active {
        background: #ff6b6b;
        border-color: #ff6b6b;
      }

      .ai-scene-indicator {
        font-size: 14px;
        font-weight: 600;
        min-width: 40px;
        text-align: center;
      }

      @media (max-width: 768px) {
        .ai-chat-main {
          grid-template-columns: 1fr;
          min-height: auto;
        }
      }
    `;
    document.head.appendChild(style);
  }

  bindEvents() {
    const nextBtn = this.container.querySelector('.ai-next-btn');
    const prevBtn = this.container.querySelector('.ai-prev-btn');
    const autoplayBtn = this.container.querySelector('.ai-autoplay-btn');

    nextBtn.addEventListener('click', () => this.nextScene());
    prevBtn.addEventListener('click', () => this.prevScene());
    autoplayBtn.addEventListener('click', () => this.toggleAutoPlay());

    this.showScene(0);
  }

  getScenes() {
    return [
      {
        title: '技术方案生成',
        userInput: '帮我出一份技术方案',
        response: this.renderTechPlan()
      },
      {
        title: '报价单生成',
        userInput: '给我报个价',
        response: this.renderQuote()
      },
      {
        title: '视频生成',
        userInput: '帮我做个短视频',
        response: this.renderVideoGeneration()
      },
      {
        title: '合同生成',
        userInput: '出一份专业合同',
        response: this.renderContract()
      },
      {
        title: '英语AI教练',
        userInput: '我要学英语',
        response: this.renderEnglishCoach()
      },
      {
        title: '销售话术评分',
        userInput: '评估我的销售话术',
        response: this.renderSalesEvaluation()
      }
    ];
  }

  renderTechPlan() {
    return `
      <div class="ai-response-content">
        <div class="ai-response-document">
          <h4>📋 技术方案</h4>
          <p><strong>项目名称：</strong>电商平台系统</p>
          <p><strong>技术栈：</strong>React + Node.js + MySQL</p>
          <div class="ai-response-quote">
            <strong>核心功能：</strong><br>
            ✓ 用户认证与授权<br>
            ✓ 商品管理系统<br>
            ✓ 订单处理流程<br>
            ✓ 支付集成
          </div>
          <p><strong>预计周期：</strong>12周</p>
          <p><strong>团队规模：</strong>8人</p>
        </div>
      </div>
    `;
  }

  renderQuote() {
    return `
      <div class="ai-response-content">
        <div class="ai-response-document">
          <h4>💰 报价单</h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
              <td style="padding: 8px;">需求分析</td>
              <td style="text-align: right;">¥8,000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
              <td style="padding: 8px;">UI/UX设计</td>
              <td style="text-align: right;">¥15,000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
              <td style="padding: 8px;">前端开发</td>
              <td style="text-align: right;">¥35,000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
              <td style="padding: 8px;">后端开发</td>
              <td style="text-align: right;">¥45,000</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
              <td style="padding: 8px;">测试与部署</td>
              <td style="text-align: right;">¥12,000</td>
            </tr>
            <tr style="background: rgba(255,255,255,0.1); font-weight: 600;">
              <td style="padding: 8px;">总计</td>
              <td style="text-align: right;">¥115,000</td>
            </tr>
          </table>
        </div>
      </div>
    `;
  }

  renderVideoGeneration() {
    return `
      <div class="ai-response-content">
        <div class="ai-response-document">
          <h4>🎬 视频生成中...</h4>
          <div class="ai-response-progress">
            <div class="ai-progress-bar">
              <div class="ai-progress-fill"></div>
            </div>
            <div class="ai-progress-text">生成进度: 0% → 100%</div>
          </div>
          <div class="ai-video-preview">🎥</div>
          <p style="text-align: center; margin-top: 12px; opacity: 0.8;">
            视频已生成完毕！点击下载或分享
          </p>
        </div>
      </div>
    `;
  }

  renderContract() {
    return `
      <div class="ai-response-content">
        <div class="ai-response-document">
          <h4>📄 软件开发合同</h4>
          <div class="ai-response-quote">
            <strong>甲方：</strong>贵公司<br>
            <strong>乙方：</strong>火鹰科技<br>
            <strong>项目名称：</strong>电商平台系统开发
          </div>
          <p><strong>一、项目范围</strong></p>
          <p style="margin-left: 12px; opacity: 0.9;">
            乙方将为甲方提供完整的电商平台系统开发服务，包括需求分析、设计、开发、测试、部署等全流程。
          </p>
          <p><strong>二、合同金额</strong></p>
          <p style="margin-left: 12px; opacity: 0.9;">
            总计：¥115,000（含税）
          </p>
          <p><strong>三、支付方式</strong></p>
          <p style="margin-left: 12px; opacity: 0.9;">
            签约时支付30%，中期支付40%，验收时支付30%
          </p>
        </div>
      </div>
    `;
  }

  renderEnglishCoach() {
    return `
      <div class="ai-response-content">
        <div class="ai-response-document">
          <h4>🎓 英语AI教练</h4>
          <p><strong>你的表达：</strong>"I want to discuss about the project"</p>
          <div class="ai-response-quote">
            <strong>❌ 错误分析：</strong><br>
            "discuss about" 是常见错误，应该用 "discuss" 而不加 "about"
          </div>
          <p><strong>✅ 正确表达：</strong></p>
          <p style="margin-left: 12px; background: rgba(76, 175, 80, 0.2); padding: 8px; border-radius: 4px;">
            "I want to discuss the project" 或 "I want to talk about the project"
          </p>
          <p><strong>📚 相关表达：</strong></p>
          <p style="margin-left: 12px; opacity: 0.9;">
            • Discuss + 名词<br>
            • Talk about + 名词<br>
            • Have a discussion about...
          </p>
        </div>
      </div>
    `;
  }

  renderSalesEvaluation() {
    return `
      <div class="ai-response-content">
        <div class="ai-response-document">
          <h4>📊 销售话术评分</h4>
          <p style="margin-bottom: 16px;"><strong>你的话术：</strong>"我们的产品很好，你要不要买？"</p>
          
          <div class="ai-score-card">
            <div class="ai-score-label">
              <span>清晰度</span>
              <span>45/100</span>
            </div>
            <div class="ai-score-bar">
              <div class="ai-score-fill" style="width: 45%; animation-delay: 0s;"></div>
            </div>
          </div>

          <div class="ai-score-card">
            <div class="ai-score-label">
              <span>说服力</span>
              <span>38/100</span>
            </div>
            <div class="ai-score-bar">
              <div class="ai-score-fill" style="width: 38%; animation-delay: 0.2s;"></div>
            </div>
          </div>

          <div class="ai-score-card">
            <div class="ai-score-label">
              <span>专业度</span>
              <span>52/100</span>
            </div>
            <div class="ai-score-bar">
              <div class="ai-score-fill" style="width: 52%; animation-delay: 0.4s;"></div>
            </div>
          </div>

          <div class="ai-response-quote" style="margin-top: 16px;">
            <strong>💡 建议：</strong><br>
            突出产品的具体价值，而不是笼统地说"很好"。用数据和案例支撑你的观点。
          </div>
        </div>
      </div>
    `;
  }

  showScene(index) {
    const scenes = this.getScenes();
    const scene = scenes[index];

    // 更新消息
    const messagesContainer = this.container.querySelector('.ai-messages');
    messagesContainer.innerHTML = `
      <div class="ai-message ai-message-bot">
        <p>你好！我是火鹰AI助手。请告诉我你需要什么帮助？</p>
      </div>
      <div class="ai-message ai-message-user">
        <p>${scene.userInput}</p>
      </div>
      <div class="ai-message ai-message-bot">
        <p>正在为您生成${scene.title}...</p>
      </div>
    `;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 更新响应
    const responseContainer = this.container.querySelector('.ai-response-container');
    responseContainer.innerHTML = scene.response;

    // 更新指示器
    this.container.querySelector('.ai-current').textContent = index + 1;
    this.container.querySelector('.ai-total').textContent = scenes.length;

    this.currentSceneIndex = index;
  }

  nextScene() {
    const scenes = this.getScenes();
    const nextIndex = (this.currentSceneIndex + 1) % scenes.length;
    this.showScene(nextIndex);
  }

  prevScene() {
    const scenes = this.getScenes();
    const prevIndex = (this.currentSceneIndex - 1 + scenes.length) % scenes.length;
    this.showScene(prevIndex);
  }

  toggleAutoPlay() {
    this.isAutoPlay = !this.isAutoPlay;
    const btn = this.container.querySelector('.ai-autoplay-btn');
    
    if (this.isAutoPlay) {
      btn.classList.add('active');
      this.startAutoPlay();
    } else {
      btn.classList.remove('active');
      this.stopAutoPlay();
    }
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.nextScene();
    }, 8000); // 每8秒切换一个场景
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 查找太阳图案所在的容器并替换
  const bannerElement = document.querySelector('.banner_con');
  if (bannerElement) {
    // 创建新容器
    const aiChatContainer = document.createElement('div');
    aiChatContainer.id = 'ai-chat-demo';
    aiChatContainer.style.cssText = 'padding: 40px 20px; background: transparent;';
    
    // 替换太阳图案
    const bannerLeft = bannerElement.querySelector('.banner_left');
    if (bannerLeft) {
      bannerLeft.innerHTML = '';
      bannerLeft.appendChild(aiChatContainer);
      new AIChatDemo('ai-chat-demo');
    }
  }
});
