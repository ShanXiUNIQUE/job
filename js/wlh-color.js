function colorClass(ele,classname){
	var wlh_num1=0;
    $(ele).each(function(i,obj){
		if(wlh_num1%3==0){
			wlh_num1=0;
		}
        $(obj).addClass(classname+(wlh_num1+1));
        wlh_num1++;
	})
}

$(document).ready(function(){
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

