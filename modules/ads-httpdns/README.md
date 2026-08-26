# AdsHttpDns 插件

功能：HTTPDNS 拦截（替代已禁用的 Block_HTTPDNS.lpx 精确版）。

- 各厂商 HTTPDNS 域名 + IP-CIDR + URL-REGEX
- 豆瓣 macOS 端点 119.29.29.90 显式放行（必须先于 REJECT）
- 修复基线笔误：`182.256.116.116`（非法 IP，删除）
