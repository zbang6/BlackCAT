// http://api.live.bilibili.com/ip_service/v1/ip_service/get_ip_addr
if ($response.statusCode != 200) {
  $done(null);
}

var isp0 = "Hello is best";

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
  
function Area_check(para) {
  if(para==".*"){
  return "Quantumult X"
  } else
  {
  return para
  }
}

var body = $response.body;
var obj = JSON.parse(body)["data"];
var title = City_ValidCheck(obj['province']);//+Area_check(obj['country']);
var subtitle = ISP_ValidCheck(obj['isp']) + " ➠ "+ obj['country'];
var ip = obj['addr']; 
var description = '🗣'+obj['isp'] ;
$done({title, subtitle, ip, description});