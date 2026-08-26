# Loon 远程资源（公开仓库）

供 Loon 远程订阅使用的插件与规则列表。

本仓库为**公开仓库，不含任何敏感信息**（无节点、无证书、无订阅 token），可放心匿名订阅。

## 订阅地址

| 资源 | 订阅类型 | URL |
|---|---|---|
| AdsCore（广告核心） | `[Plugin]` | `https://raw.githubusercontent.com/9uantum/loon-resources/main/modules/ads-core/AdsCore.plugin` |

后续模块将陆续加入：AdsHttpDns（HTTPDNS 拦截）、MapsDirect（地图直连）、rules/theater.list（Theater 远程规则）。

## 在 Loon 中添加

手动添加订阅：只粘贴上面的 URL（不要带 `tag=` / `enabled=`，那是配置文件 `[Plugin]` 段的写法）。

配置文件写法示例：

```
[Plugin]
https://raw.githubusercontent.com/9uantum/loon-resources/main/modules/ads-core/AdsCore.plugin, tag=AdsCore, enabled=true
```

## 维护方式

个性化去广告需求 → 直接修改本仓库对应模块 → commit → Loon 刷新订阅即生效。
