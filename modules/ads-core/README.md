# AdsCore 插件

功能：广告核心精准拦截。规则 + 重写 + MITM hostname 一体，独立开关。

覆盖（来源：2026-08-26 基线 `[Rule]` / `[Rewrite]` 广告段）：

- 穿山甲/Pangle（pangolin-sdk-toutiao\*、pangle.io、snssdk 精确子域）
- 腾讯 GDT（gdt.qq.com、gdtimg、ugdtimg、sdk.e.qq.com、ad.qq.com）
- 京东（jzt/img-x/du/c-nfa/cm/jddebug/policy/kepler/mapi.m.jd/ad.3.cn/mars 等 + 重写 getWidgetV1052）
- 基线中的 `sh.jd.com/d`（0 字节 gif 曝光像素）与 `im-x.jd.com/dsp/np`（服务端已 404）经评估后**删除**：
  两条重写原无对应 MITM hostname，HTTPS 下本就不生效；补 hostname 需额外解密开销而收益可忽略，故不迁移。
- 豆瓣（ad.doubanio.com、at3、frodo 重写）
- Soul、Parallels、sentry.io 等杂项
- 内部兜底放行（snssdk.com DIRECT 等）随模块整体迁移，保证广告拦截不失效

注意：插件 `[Rule]` 仅支持 DIRECT/REJECT/PROXY；引用自定义组（Final/Theater/US）的规则不进本插件。
