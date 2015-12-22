define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/ylapplication/baas");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!org.apache.cordova.device");
	require("cordova!com.justep.cordova.plugin.weixin.v3");

	var Model = function() {
		this.callParent();
		// this._deviceType = "wx"; // pc || wx || app
		// this._picture = "";
		// this._userID = "user";
		// this._userDefaultName = "新用户";
		// this._userDefaultAddress = "";
		// this._userPhotoURL = "";
		this._deviceType = "wx";
		this._picture = "";
		this._userID = "user";
		this._userDefaultName = "新用户";
		this._userDefaultAddress = "";
		this._userPhotoURL = "";
	};

	// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf7e99c474fcc59f7&redirect_uri=http%3A%2F%2Fbingkuaix3.imwork.net%2Fx5%2FUI2%2Fylapplication%2Fcustomer.w&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
	// http%3A%2F%2Fbingkuaix3.imwork.net%2Fx5%2FUI2%2Fylapplication%2Fcustomer.w
	Model.prototype.photoBtnClick = function(event) {
		// var self = this;
		// if (this.wxApi) {
		// this.wxApi.exec().done(function(wx) {
		// wx.chooseImage({
		// count : 1, // 默认9
		// sizeType : [ 'original', 'compressed' ], // 可以指定是原图还是压缩图，默认二者都有
		// sourceType : [ 'album', 'camera' ], // 可以指定来源是相册还是相机，默认二者都有
		// success : function(res) {
		// var localIds = res.localIds; //
		// 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
		// self._picture = localIds;
		// $("#photo").attr("src", localIds);
		// $("#photo").show();
		// }
		// });
		// })
		// }
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {

				wx.chooseImage({
					count : 1,
					sizeType : [ 'original', 'compressed' ],
					sourceType : [ 'album', 'camera' ],
					success : function(res) {

						var localIds = res.localIds;
						self._picture = localIds;
						$("#photo").attr("src", localIds);
						$("#photo").show();
					}
				});

			})

		}
	};
	Model.prototype.modelLoad = function(event) {
		// var self = this;
		// // 获取url上的code参数 - 微信授权code，用于获取微信用户信息
		// var weixinCode = this.getContext().getRequestParameter("code");
		//
		// if (justep.Browser.isWeChat) {
		// this.wxApi = new navigator.WxApi("wxf7e99c474fcc59f7");
		// }
		// $.getJSON("/baas/weixin/userinfo?code=" + weixinCode,
		// function(weixinUser) {
		// self._userID = weixinUser.openid;
		// self._userDefaultName = weixinUser.nickname + "（来自微信的用户）";
		// self._userDefaultAddress = weixinUser.country + weixinUser.province +
		// weixinUser.city;
		// self._userPhotoURL = weixinUser.headimgurl;
		//			
		// });
		var self = this;
		var weixinCode = this.getContext().getRequestParameter("code");

		if (justep.Browser.isWeChat) {
			this.wxApi = new navigator.WxApi("wxf7e99c474fcc59f7");

		}
		$.getJSON("/ylbaas/weixin/userinfo?code=" + weixinCode, function(weixinUser) {
			self._userID = weixinUser.openid;
			self._userDefaultName = weixinUser.nickname + "(来自微信的用户)";
			self._userDefaultAddress = weixinUser.country + weixinUser.province + weixinUser.city;
			self._userPhotoURL = weixinUser.headimgurl;

		});

	};
	Model.prototype.uploadBtnClick = function(event) {
		// var self = this;
		// if (this.wxApi) {
		// this.wxApi.exec().done(function(wx) {
		//
		// wx.uploadImage({
		// localId : self._picture[0], // 需要上传的图片的本地ID，由chooseImage接口获得
		// isShowProgressTips : 1, // 默认为1，显示进度提示
		// success : function(res) {
		// var serverId = res.serverId;
		// var demo = self.comp("picturedata");
		// var newdemo = demo.newData({
		// defaultValues : [ {
		// "id" : justep.UUID.createUUID(),
		// "username" : self._userDefaultName,
		// "picture" : serverId,
		// "userid": self._userID,
		// "order_status" : "未处理",
		// "useraddress": self._userDefaultAddress
		// } ]
		// });
		// baas.sendRequest({
		// "url" : "/film",
		// "action" : "savefilm",
		// "async" : false,
		// "params" : {
		// "picturedata" : demo.toJson(true)
		// },
		// "success" : function(resultData, xhr) {
		// }
		// });
		// }
		// });
		// }) }
		var self = this;
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.uploadImage({
					localId : self._picture[0],
					isShowProgressTips : 1,
					success : function(res) {
						var serverId = res.serverId;
						var data = self.comp("orderdata");
						var newdata = data.newData({
							defaultValues : [ {
								"orderid" : justep.UUID.createUUID(),
								"userid" : self._userID,
								"username" : self._userDefaultName,
								"useraddress" : self._userDefaultAddress,
								"picture_media_id" : serverId,
								"order_status" : "未处理",
							} ]
						});
						baas.sendRequest({
							"url" : "/yl",
							"action" : "saveorder",
							"async" : false,
							"params" : {
								"orderdata" : data.toJson(true)
							},
							"success" : function(resultData, xhr) {
								alert("上传成功");
							}
						})
					}
				});
			})
		}
	};
	return Model;
});