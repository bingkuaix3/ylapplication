<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:274px;top:-9px;"
    onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="orderdata" idColumn="orderid"> 
      <column label="订单ID" name="orderid" type="String" xid="xid1"></column>
  <column label="用户ID" name="userid" type="String" xid="xid2"></column>
  <column label="用户名" name="username" type="String" xid="xid3"></column>
  <column label="用户地址" name="useraddress" type="String" xid="xid4"></column>
  <column label="图片媒体ID" name="picture_media_id" type="String" xid="xid5"></column>
  <column label="专家分析" name="doctors_analysis" type="String" xid="xid6"></column>
  <column label="医生建议" name="doctors_recommend" type="String" xid="xid7"></column>
  <column label="价格" name="price" type="Double" xid="xid8"></column>
  <column label="订单状态" name="order_status" type="String" xid="xid9"></column>
  <column label="交易ID" name="deal_id" type="String" xid="xid10"></column>
  <column label="顾客反馈" name="customer_feedback" type="String" xid="xid11"></column>
  <column label="物流单号" name="logistics_order" type="String" xid="xid12"></column></div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar" title="见好无忧"> 
        <div class="x-titlebar-left" xid="div1"/>  
        <div class="x-titlebar-title" xid="div2">见好无忧</div>  
        <div class="x-titlebar-right reverse" xid="div3"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1"> 
      <div xid="div4" style="font-weight:bold;font-style:italic;font-size:x-large;">使用方法</div>  
      <div>1 点击拍照按钮将舌头的照片清晰的拍摄下来。</div>  
      <div>2 点击上传按钮将照片上传到服务端。</div>  
      <div>3 看到上传成功提示后请耐心等待，在医师查验后会将理疗方案推送给您。</div>  
      <img src="" alt="" xid="image3" id="photo" style="width:400px;display:none"/>
    </div>  
    <div class="x-panel-bottom" xid="bottom1">
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified"
        tabbed="true" xid="buttonGroup1">
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top"
          xid="photoBtn" label="拍照" icon="icon-camera" onClick="photoBtnClick"> 
          <i xid="i1" class="icon-camera"/>  
          <span xid="span1">拍照</span>
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-icon-top"
          label="上传" xid="uploadBtn" icon="icon-ios7-cloud-upload" onClick="uploadBtnClick"> 
          <i xid="i2" class="icon-ios7-cloud-upload"/>  
          <span xid="span2">上传</span>
        </a>
      </div>
    </div> 
  </div> 
</div>
