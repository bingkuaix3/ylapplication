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
      <div class="x-contents x-full" xid="contents" id="contents" style="width:85%;margin-left:15%"> 
        <div id="a" style="margin-left:5%;margin-top:2%"/>  
        <div id="b" style="margin-left:5%;margin-top:2%"/>  
        <div id="c" style="margin-left:5%;margin-top:2%"/>  
        <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control"
          xid="textarea1" id="textarea1" style="margin:5% 5% 0 40%;width:565px;height:149px;position: absolute;top: -5%"
          placeholder="病情分析："/>  
        <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control"
          xid="textarea2" id="textarea2" style="margin:10% 5% 0 40%;width:566px;height:150px;" placeholder="理疗方案："/>  
        <input component="$UI/system/components/justep/input/input" class="form-control"
          xid="input1" id="input1" style="margin:5% 5% 0 40%;height:27px;width:107px;" placeholder="合计金额："/> 
      </div>  
      <img src="" alt="" xid="image2" id="img" style="height:410px;width:481px;margin-top:13%;display:none"/>  
      <div class="" xid="bottom1" style="width:10%;height:100%;float:left;background:gray"> 
        <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-lg btn-group-vertical"
          tabbed="true" xid="buttonGroup1" style="width:100%;"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-lg"
            label="下载图片" xid="downloadimgBtn" onClick="downloadimgBtnClick"> 
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
