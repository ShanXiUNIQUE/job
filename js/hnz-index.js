$(function(){
	//侧栏高度
	$('.hnz-slide').height($(window).height());
	//返回页面顶部
	$('.hnz-back').click(function(){
		$({t:$(window).scrollTop()}).animate({t:0},{
			duration:1000,
			step:function(){
				$(window).scrollTop(this.t)
			}
		})
	})
})