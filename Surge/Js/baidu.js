/*
仅更改手机端百度全站的 User-Agent。
[Script]
# 百度（全站替换为手机百度 Quark 的 User-Agent）
BaiduChangeUA = type=http-request,pattern=^https?:\/\/(?!d\.pcs).*(?<!map)\.baidu\.com,script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/asset/BaiduChangeUA.js
hostname = *.baidu.com
 */

let url = $request.url;
let headers = $request.headers;
if (url.indexOf("baidu.com") !== -1) {
	if (headers["User-Agent"].indexOf("iPhone") !== -1)
		headers["User-Agent"] =
			"Mozilla/5.0 (Linux; Android 8.0; MI 6 Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.116 Mobile Safari/537.36 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)";
}
$done({ headers });