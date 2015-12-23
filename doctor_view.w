<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:pc">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:302px;top:124px;"
    onLoad="modelLoad"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel4"> 
    <div class="x-panel-top" xid="top2"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="见好无忧（处理端）"> 
        <div class="x-titlebar-left" xid="div1"/>  
        <div class="x-titlebar-title" xid="div2" style="">见好无忧（处理端）</div>  
        <div class="x-titlebar-right reverse" xid="div3"/> 
      </div> 
    </div>  
    <div class="x-panel-content"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents" id="contents" style="width:85%;margin-left:15%"></div>
       
      <div class="" xid="bottom1" style="width:10%;height:100%;float:left;background:gray"> 
        <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-lg btn-group-vertical"
          tabbed="true" xid="buttonGroup1" style="width:100%;"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-lg"
            label="下载图片" xid="downloadimgBtn"> 
            <i xid="i1"/>  
            <span xid="span1">下载图片</span> 
          </a>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-default"
            label="发送消息" xid="sendmessageBtn" onClick="sendmessageBtnClick"> 
            <i xid="i2"/>  
            <span xid="span2">发送消息</span> 
          </a> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
