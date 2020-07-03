const SSID = $network.wifi.ssid;
const proxywifi = ["zhang_5G","zhang"];
let res = proxywifi.some(val => val === SSID);
let directNoti = debounce(() => notify(1), 2);
let ruleNoti = debounce(() => notify(0),2);
if (res) {
$surge.setOutboundMode("direct");
directNoti();
} else {
$surge.setOutboundMode("rule");
ruleNoti();
}

function notify(mode) {
!!mode ? $notification.post("Wi-Fi助手","切换到直连模式",`your SSID is ${SSID}`) : $notification.post("Wi-Fi助手","切换到规则模式", `${!!SSID ?  "your SSID is " + SSID : "正在使用蜂窝网络"}`)
}

function debounce(fn, wait) {
    let callback = fn;    
    let timerId = null;

    function debounced() {
        let context = this;
        let args = arguments;        
        timerId = null;
        //clearTimeout && clearTimeout(timerId);        
        timerId = setTimeout(function() {            
            callback.apply(context, args);
        }, wait*1000);
    }
    return debounced;         
}
$done();
