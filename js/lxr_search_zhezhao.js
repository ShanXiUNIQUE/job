$(function () {

	$(".hnz-search-btn").click(function(){
		$(".lxr_zhezhao").fadeIn();
	})

	$("#lxr_zhezhao_close").click(function(){
		$(".lxr_zhezhao").fadeOut();
	})

	$(".lxr_zhezhao_tab>div").click(function(){
		$(".lxr_zhezhao_min>input").val($(this).text());
	})

	$(".lxr_zhezhao_min>input").focus(function(){
		if((!$(".lxr_zhezhao_min>input").val())||($(".lxr_zhezhao_min>input").val()=="Search"))
			$(".lxr_zhezhao_min>input").val("");
	})
	
	$(".lxr_zhezhao_min>input").blur(function(){
		if(!$(".lxr_zhezhao_min>input").val())
			$(".lxr_zhezhao_min>input").val("Search");
	})
	

})