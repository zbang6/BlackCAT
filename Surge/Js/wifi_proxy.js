
event network-changed debug=1,script-path=wifi_proxy.js
PS:记得自己修改WIFI名称
虽然设置SSID可以达到基本相同功能
使用脚本,Surge不会被suspend
Rewrite和Scripting依然有效

*/

var wifiname = $network.wifi.ssid;
var proxywifi = "zhang_5G";
if (wifiname == proxywifi){
	$surge.setOutboundMode("direct");
	//$notification.post("Meeta_Remind","您目前处于WIFI-Proxy","Surge已自动变为直连模式");
	
}
else{
	$surge.setOutboundMode("rule");
	//$notification.post("Meeta_Remind","Surge已自动变为规则模式","");
}
$done();

