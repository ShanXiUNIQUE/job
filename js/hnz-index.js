$(function(){
	//渚ф爮楂樺害
	$('.hnz-slide').height($(window).height());
	//杩斿洖椤甸潰椤堕儴
	$('.hnz-back').click(function(){
		$({t:$(window).scrollTop()}).animate({t:0},{
			duration:1000,
			step:function(){
				$(window).scrollTop(this.t)
			}
		})
	})
	$('.hnz-list>li:last').css("border",0)

	//推荐作品
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

	//推荐设计师
	var designerList = $('.hnz-designer-list');
	var l1=$('.hnz-designer-one:nth-child(3n-2)',designerList);
	l1.find('.hnz-bg-1').addClass("hnz-blue");
	l1.find('.hnz-bg-2').addClass("hnz-yellow");
	var l2=$('.hnz-designer-one:nth-child(3n-1)',designerList);
	l2.find('.hnz-bg-1').addClass("hnz-orange");
	l2.find('.hnz-bg-2').addClass("hnz-green");
	var l3=$('.hnz-designer-one:nth-child(3n)',designerList);
	l3.find('.hnz-bg-1').addClass("hnz-blues");
	l3.find('.hnz-bg-2').addClass("hnz-yellows");
})
