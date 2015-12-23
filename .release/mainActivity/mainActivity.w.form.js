define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/contents/contents');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ylapplication/mainActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='false';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this.__cid='cvEvyYb';
	this._flag_='7c39ba5387655af3ab252b4a1918a41e';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"customer_feedback":{"define":"customer_feedback","label":"用户反馈","name":"customer_feedback","relation":"customer_feedback","type":"String"},"deal_id":{"define":"deal_id","label":"交易ID","name":"deal_id","relation":"deal_id","type":"String"},"doctors_analysis":{"define":"doctors_analysis","label":"专家分析","name":"doctors_analysis","relation":"doctors_analysis","type":"String"},"doctors_recommend":{"define":"doctors_recommend","label":"医生建议","name":"doctors_recommend","relation":"doctors_recommend","type":"String"},"logistics_order":{"define":"logistics_order","label":"物流单号","name":"logistics_order","relation":"logistics_order","type":"String"},"order_status":{"define":"order_status","label":"订单状态","name":"order_status","relation":"order_status","type":"String"},"orderid":{"define":"orderid","label":"订单ID","name":"orderid","relation":"orderid","type":"String"},"picture_media_id":{"define":"picture_media_id","label":"图片媒体ID","name":"picture_media_id","relation":"picture_media_id","type":"String"},"price":{"define":"price","label":"价格","name":"price","relation":"price","rules":{"number":true},"type":"Double"},"useraddress":{"define":"useraddress","label":"用户地址","name":"useraddress","relation":"useraddress","type":"String"},"userid":{"define":"userid","label":"用户ID ","name":"userid","relation":"userid","type":"String"},"username":{"define":"username","label":"用户名","name":"username","relation":"username","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"orderdataCustomRefresh"},"idColumn":"orderdata","limit":20,"xid":"orderdata"});
}}); 
return __result;});