# 部署问题

根目录仍显示旧站点，因为Nginx配置中 `index index.html index.htm index.php` 虽然index.html优先，
但旧站点的PHP框架可能通过index.php做了路由劫持。
而且根目录下同时存在旧站点的index.php和新站点的index.html。

解决方案：
1. 将旧站点的index.php重命名为index_old.php
2. 或者在Nginx location / 中明确指定只用index.html
3. 需要确保旧站点的PHP文件不会干扰新站点
