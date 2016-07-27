$(function () {

	$(".hnz-search-btn").click(function(){
		$(".lxr_zhezhao").fadeIn();
	})

	$("#lxr_zhezhao_close").click(function(){
		$(".lxr_zhezhao").fadeOut();
	})

	$(".lxr_zhezhao_tab>div").click(function(){
		$(".lxr_input").val($(this).text());
		$(".lxr_input").focus();
	})

	$(".lxr_input").focus(function(){
		if((!$(".lxr_input").val())||($(".lxr_input").val()=="Search"))
			$(".lxr_input").val("");
		$("#lxr_xx").css("display","block");
	})
	
	$(".lxr_input").blur(function(){
		if(!$(".lxr_input").val())
			$(".lxr_input").val("Search");
		$("#lxr_xx").css("display","none");
	})

	$(".lxr_input").keypress(function(e){
		if (e.keyCode == 13) {
			$(".lxr_zhezhao_min>form").submit();
		};
	})

	$("#lxr_xx").click(function(e){
		e.preventDefault();
		$(".lxr_input").val("");
		$(".lxr_input").blur();
		$("#lxr_xx").css("display","none");
	})
	
})