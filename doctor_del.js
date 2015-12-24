define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/ylapplication/baas")
	var Model = function() {
		this.callParent();
		this.orderdata;
		this._delorderdata;
		var a;
	};

	Model.prototype.orderdataCustomRefresh = function(event) {
		// var data = event.source;
		// var params = {};
		// var success = function(resultData) {
		// var append = event.options && event.options.append;
		// data.loadData(resultData, append);
		// };
		// baas.sendRequest({
		// "url" : "/film",
		// "action" : "queryfilm",
		// "params" : params,
		// "success" : success
		// });
		var data = event.source;
		var params = {};
		var success = function(red) {
			var append = event.options && event.append;
			data.loadData(red, append);
		}
		baas.sendRequest({
			"url" : "/yl",
			"action" : "queryorder",
			"params" : params,
			"success" : success
		})
	};

	Model.prototype.delBtnClick = function(event) {
		this.comp("contents").to("delcontent");
		var data = this.comp("orderdata");

		var params = {
			"orderid" : data.val("orderid")
		};
		alert(data.val("orderid"))
		var success = function(red) {

			data.loadData(red, false);

		}
		baas.sendRequest({
			"url" : "/yl",
			"action" : "queryorder",
			"params" : params,
			"success" : success
		});
	};

	Model.prototype.sendmessageBtnClick = function(event) {
		// var self = this;
		// var demo = this.comp("picturedata");
		// var updateDemo = demo.find([ 'id' ], [ demo.val("id") ]);
		// if (updateDemo.length > 0) {
		// updateDemo[0].val('doctor_suggestion',
		// demo.val("doctor_suggestion"));
		// updateDemo[0].val('price', demo.val("price"));
		// updateDemo[0].val('order_status', '已处理');
		// var doctor_suggestion = demo.val("doctor_suggestion");
		// baas.sendRequest({
		// "url" : "/film",
		// "action" : "savefilm",
		// "async" : false,
		// "params" : {
		// "picturedata" : demo.toJson(true),
		// "doctor_suggestion" : demo.val("doctor_suggestion")
		// },
		// "success" : function(resultData, xhr) {
		// alert("已经保存成功");
		// baas.sendRequest({
		// "url" : "/film",
		// "action" : "message",
		// "async" : false,
		// "params" : {
		// "userid" : demo.val("userid"),
		// "doctor_suggestion" : demo.val("doctor_suggestion"),
		// "price" : demo.val("price"),
		// },
		// "success" : function(resultData, xhr) {
		// }
		// });
		// }
		// });
		// }
		var self = this;
		this._delorderdata[0].val("doctors_analysis", $("#textarea2").val());
		this._delorderdata[0].val("doctors_recommend", $("#textarea1").val());
		this._delorderdata[0].val("price", $("#input1").val());
		this._delorderdata[0].val("order_status", '已处理');
		baas.sendRequest({
			"url" : "/yl",
			"action" : "saveorder",
			"async" : false,
			"params" : {
				"orderdata" : orderdata.toJson(true)
			},
			"success" : function(resultData, xhr) {
				alert("已经保存成功");
				baas.sendRequest({
					"url" : "/ylwx",
					"action" : "sendmessage",
					"async" : false,
					"params" : {
						"userid" : self._delorderdata[0].val("userid"),
						"doctors_analysis" : self._delorderdata[0].val("doctors_analysis"),
						"doctors_recommend" : self._delorderdata[0].val("doctors_recommend"),
						"price" : self._delorderdata[0].val("price"),
					},
					"success" : function(resultData, xhr) {
						alert("发送成功")
						justep.Portal.openWindow("$UI/ylapplication/mainActivity.w");
					}
				});
			}
		});

	};

	Model.prototype.modelLoad = function() {
		orderdata = this.getParent().comp("orderdata");
		a = this.getContext().getRequestParameter("id")
		this._delorderdata = orderdata.find([ 'orderid' ], [ a ]);
		$("#a").html(this._delorderdata[0].val("useraddress"))
		$("#b").html(this._delorderdata[0].val("username"))
		$("#c").html(this._delorderdata[0].val("orderid"))

	};
	// <a class="btn btn-default" label="发送消息" xid="sendmessageBtn"
	// onClick="sendmessageBtnClick"><i xid="i2"/><span
	// xid="span2">发送消息</span></a>
	Model.prototype.downloadimgBtnClick = function(event) {
		// var data = this.comp("picturedata");
		// var params = {
		// "picturedata" : data.val("picture"),
		// "doctor_suggestion" : data.val("doctor_suggestion")
		// };
		// var success = function(resultData) {
		// setTimeout(function() {
		// $("#img").attr("src", "http://bingkuaix3.imwork.net/img/" +
		// data.val("picture") + ".jpg");
		// $("#img").show();
		// }, 3000);
		// };
		// baas.sendRequest({
		// "url" : "/weixin/downloadpicture",
		// "action" : "downloadpicture",
		// "params" : params,
		// "success" : success
		// });
		var self = this;
		var params = {
			"picture_media_id" : self._delorderdata[0].val("picture_media_id")
		}
		var success = function(rs) {
			setTimeout(function() {
				$("#img").attr("src", "http://bingkuaix3.imwork.net/img/" + self._delorderdata[0].val("picture_media_id") + ".jpg");
				$("#img").show();
			}, 1000)
		};
		baas.sendRequest({
			"url" : "/ylwx",
			"action" : "downloadmedia",
			"params" : params,
			"success" : success
		})
	};
	return Model;
});