 ;layui.define(["layer"],function(exports){
 	var jquery = layui.jquery;

 	var utils={
 		getBodyContent : function(html) {
			var result = /<body[^>]*>([\s\S]*)<\/body>/.exec(html);
			return result && 2 === result.length ? result[1] : html;
		},
		loadHtml : function(url, callback) {
			var html;
			return jquery.ajax({
				url : url,
				async : !1,
				dataType : "html",
				error : function() {
					layui.hint().error("utils.loadHtml:发生错误了.")
				},
				success : function(r_data) {
					html = r_data, "function" == typeof callback && callback();
				}
			}), html;
		}
 	}
 	exports("utils",utils);
 })