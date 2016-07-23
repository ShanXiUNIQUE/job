$(function(){
	$(".lxr_hastitle_right").click(function(){
		$(".lxr_search_xiala>ul").fadeIn();

		$(".lxr_search_xiala>ul>li").click(function(){
			$(".lxr_hastitle_right").text($(this).text()+" >");
			$(".lxr_search_xiala>ul").fadeOut();
		})
	})
})
