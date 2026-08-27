// 12306 开屏秒跳（自托管健壮版，替代 kelee 同名脚本）
// 2026-08-28：kelee 版脚本在 Loon 上拿不到请求体，JSON.parse 抛错后请求原样放行，
// 开屏位收到真实"无广告"响应，App 按默认时长倒计时。
// 本脚本策略：已知 banner 位（G0054）返回空列表；其余一律返回开屏 skipTime:1，
// 即使请求体不可用或广告位编号变化，也能保证 1 秒跳过，不再出现长倒计时。

const SPLASH = '{"code":"00","materialsList":[{"billMaterialsId":"255","filePath":"h","creativeType":1}],"advertParam":{"skipTime":1}}';
const BANNER_EMPTY = '{"code":"00","materialsList":[]}';

let body = SPLASH;
try {
  const obj = JSON.parse($request.body || "{}");
  if (obj.placementNo === "G0054") {
    body = BANNER_EMPTY;
  }
} catch (e) {}

$done({ response: { status: 200, headers: { "Content-Type": "application/json;charset=UTF-8" }, body } });
