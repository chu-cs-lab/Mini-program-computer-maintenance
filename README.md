一个用于处理电脑维修的微信小程序。

# 开发说明

运行步骤：
1. 项目根目录运行 `npm i` 安装依赖。
1. 使用微信开发者工具“构建 npm”。
1. 编译小程序。

出现错误请优先尝试清除缓存并重新编译。

编译的自动热重载是启用的，如需关闭，请在 `project.private.config.json` 中设置：

```json
  "setting": {
    "compileHotReLoad": false
  }
```
