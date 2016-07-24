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
	$('.hnz-list>li:last').css("border",0)

	//�Ƽ���Ʒ
	$(".wlh-zpshow-tjxj-right").hover(function(){
		$(".wlh-zpshow-tjxj-right>.wlh-tjxj-zhezhao").stop(true,true);
		$(".wlh-zpshow-tjxj-right>.wlh-tjxj-video").stop(true,true);
	    var wlh_index=$(this).index(".wlh-zpshow-tjxj-right");
	    $(".wlh-zpshow-tjxj-right>.wlh-tjxj-zhezhao").eq(wlh_index).fadeIn(200);
	    $(".wlh-zpshow-tjxj-right>.wlh-tjxj-video").eq(wlh_index).animate({bottom:0},200);
	},function(){
		$(".wlh-zpshow-tjxj-right>.wlh-tjxj-zhezhao").stop(true,false);
		$(".wlh-zpshow-tjxj-right>.wlh-tjxj-video").stop(true,false);
	    var wlh_index=$(this).index(".wlh-zpshow-tjxj-right");
	    $(".wlh-zpshow-tjxj-right>.wlh-tjxj-zhezhao").eq(wlh_index).fadeOut(200);
	    $(".wlh-zpshow-tjxj-right>.wlh-tjxj-video").eq(wlh_index).animate({bottom:-25},200);

	})
	$(".wlh-zpshow-tjimg").hover(function(){
		$(".wlh-zpshow-tjimg>img").stop(true,true);
		var wlh_index=$(this).index(".wlh-zpshow-tjimg");
		$(".wlh-zpshow-tjimg>img").eq(wlh_index).animate({width:420,height:310})
	},function(){
		$(".wlh-zpshow-tjimg>img").stop(true,false);		
		var wlh_index=$(this).index(".wlh-zpshow-tjimg");
		$(".wlh-zpshow-tjimg>img").eq(wlh_index).animate({width:380,height:267})
	})

	$(".wlh-zp-conimg").hover(function(){
		$(".wlh-zp-conimg>img").stop(true,true);
		var wlh_index=$(this).index(".wlh-zp-conimg");
		$(".wlh-zp-conimg>img").eq(wlh_index).animate({width:420,height:310})
	},function(){
		$(".wlh-zp-conimg>img").stop(true,false);		
		var wlh_index=$(this).index(".wlh-zp-conimg");
		$(".wlh-zp-conimg>img").eq(wlh_index).animate({width:380,height:267})
	})
})
