$(function(){

	// 下拉
	$(".lxr_hastitle_right").click(function(){
		$(".lxr_search_xiala>ul").fadeIn();

		$(".lxr_search_xiala>ul>li").click(function(){
			$(".lxr_hastitle_right").text($(this).text()+" >");
			$(".lxr_search_xiala>ul").fadeOut();
		})
	})

	// 选项卡
	$(".lxr_title_center div").click(function(){
		$(".lxr_title_center div").eq($(this).index()).addClass("lxr_change").siblings().removeClass("lxr_change");
		$(".lxr_has_content ul").hide().eq($(this).index()).show();
	})

})
