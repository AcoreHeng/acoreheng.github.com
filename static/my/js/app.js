var tab;
layui.define(['element',"utils"], function(exports) {
	    //输出test接口
	var utils=layui.utils;
	console.log(utils);
	var app;
	var r=utils.loadHtml("./ajax/page.html");
	console.log(r);
    exports('app', app);
});