# QFRemote 官方网站

QFRemote 官网源码，托管于 GitHub Pages。本站为纯静态站，所有相对路径引用，方便将来整体迁移到自有域名。

## 产品数据集中驱动（重要规矩）

全站的产品信息只维护一处：根目录 **`product.json`**。

页面上的当前版本号、发布日期、下载链接、安装包大小、SHA-256、截图列表、更新日志，全部由 `assets/app.js` 读取 `product.json` 渲染，页面里不散写这些信息。

**软件每次发版，本站同步三步：**

1. 新安装包传到 `qfremote-app` 仓库的 Releases（正式版，非草稿、非预发布）；
2. 更新服务端软件内更新的版本清单；
3. 更新本站 `product.json`：版本号、下载链接、大小、SHA-256、更新日志一版一段、新截图（如有界面变化），然后推送——全站自动同步。

## 留言通道

联系区的留言表单走 QFRemote 自家留言通道（提交到自家服务器的 `/api/feedback`，接口地址只写在 `product.json` 的 `web.feedbackUrl` 一处；先入库再转发站长邮箱），留言的 `source` 标记为 `qfremote-website` 以便区分来源。

## 本地预览

任意静态服务器均可，例如：

```sh
python3 -m http.server 8000
# 打开 http://localhost:8000/
```
