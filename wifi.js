
const SSID = $network.wifi.ssid;
const proxywifi = !$persistentStore.read("lkWifiSsids")?["zhang_5G","zhang"]:JSON.parse($persistentStore.read("lkWifiSsids"));
let res = proxywifi.some(val => val === SSID);
let lkWifiLast = !$persistentStore.read("lkWifiLast")?"abcdefghijklmnopqrstuvwxyz":$persistentStore.read("lkWifiLast");
if (lkWifiLast!=(!!SSID ? SSID : "cellular")){
    !$persistentStore.write((!!SSID ? SSID : "cellular"), "lkWifiLast")
    if (res) {
        $surge.setOutboundMode("direct");
        notify(1);
    } else {
        $surge.setOutboundMode("rule");
        notify(0);
    }
}

function notify(mode) {
    setTimeout(function () {
        !!mode ? $notification.post("Wi-Fi助手","切换直连模式", `WIFI:${SSID}`) : $notification.post("Wi-Fi助手","切换规则模式", `${!!SSID ? "your SSID is " + SSID : "正在使用蜂窝网络"}`)
    })
}

$done();
