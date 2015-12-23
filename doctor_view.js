define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/ylapplication/baas")
	var Model = function() {
		this.callParent();
		this.orderdata;
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
		this.comp("contents").to("listcontent");

	};

	Model.prototype.modelLoad = function() {
		var orderdata = this.getParent().comp("orderdata");
		
		$("#aa").val(orderdata.val("username"))
		orderdata.each(function(param) {
			var $a = "<div><span style='margin-left:20px '>" + param.row.val("username") + "</span><span style='margin-left:20px'>" + param.row.val("useraddress")
					+ "</span><span style='margin-left:20px'>" + param.row.val("orderid") + "</span></div>"
			$("#contents").append($a)

		});

	};

	return Model;
});