/* wifi_proxy change (Made by Meeta)
文本编辑模式下复制粘贴,TG频道已发操作教程视频
event network-changed debug=1,script-path=wifi_proxy.js
PS:记得自己修改WIFI名称
虽然设置SSID可以达到基本相同功能
使用脚本,Surge不会被suspend
Rewrite和Scripting依然有效
https://meetagit.github.io/MeetaRules/Surge/Scripting/wifi_proxy.js
TG频道:@meetashare
*/

var wifiname = $network.wifi.ssid;
var proxywifi = "OpenWrt";
if (wifiname == proxywifi){
	$surge.setOutboundMode("direct");
	//$notification.post("🔆Connected WiFi : OpenWrt","🤖Surge Outbound Mode : Direct",);
	
}
else{
	$surge.setOutboundMode("rule");
	//$notification.post("🗣您目前处于Direct Mode","🤖Surge已自动变为规则模式");
}
$done();

