<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:mobile" sysParam="false">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"
    style="height:auto;left:275px;top:25px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="orderdata" idColumn="orderid" onCustomRefresh="orderdataCustomRefresh"> 
      <column label="订单ID" name="orderid" type="String" xid="xid1"></column>
  <column label="用户ID " name="userid" type="String" xid="xid2"></column>
  <column label="用户名" name="username" type="String" xid="xid3"></column>
  <column label="用户地址" name="useraddress" type="String" xid="xid4"></column>
  <column label="图片媒体ID" name="picture_media_id" type="String" xid="xid5"></column>
  <column label="专家分析" name="doctors_analysis" type="String" xid="xid6"></column>
  <column label="医生建议" name="doctors_recommend" type="String" xid="xid7"></column>
  <column label="价格" name="price" type="Double" xid="xid8"></column>
  <column label="订单状态" name="order_status" type="String" xid="xid9"></column>
  <column label="交易ID" name="deal_id" type="String" xid="xid10"></column>
  <column label="用户反馈" name="customer_feedback" type="String" xid="xid11"></column>
  <column label="物流单号" name="logistics_order" type="String" xid="xid12"></column></div> 
  </div>  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
    active="0" xid="pages" wrap="false" slidable="false" swipe="false"> 
    <div class="x-contents-content" xid="main"/> 
  </div> 
</div>
