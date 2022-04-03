var url = $request.url.replace(/language=zh-Hans-HK/g, 'language=zh');

$done({url: url, headers: $request.headers });