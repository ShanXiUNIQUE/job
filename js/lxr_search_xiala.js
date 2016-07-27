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
	$(".lxr_has_content ul").hide().eq(0).show();
	$(".lxr_title_center div").click(function(){
		$(".lxr_title_center div").eq($(this).index()).addClass("lxr_change").siblings().removeClass("lxr_change");
		$(".lxr_has_content ul").hide().eq($(this).index()).show();
	})


	//选项卡 文章列表js
	$('.kf_wbiCon').mouseover(function(){
		$(this).css({
			background:'#fff',
			boxShadow:'1px 7px 20px #DDDDDD'
		})
	})
	$('.kf_wbiCon').mouseout(function(){
		$(this).css({
			background:'',
			boxShadow:''
		})
	})

	  /*
		进度条 
		num 
		max 企业关注最大值
		bar 控制进度条进度的标签
		arrNum 保存(企业关注的数量)进度条的值
    */    
    var arrNum=[10,100,60];
    var max=120;
    var bar=$('.progressBar div')
    proBar(arrNum,max,bar);
   
    function proBar(arrNum,max,bar){
    	for(var i=0;i<3;i++)
    	{
	    	 var w=arrNum[i]/max*100;
	    	 $(bar).eq(i).css({
	    	 	width:w
	    	 }) 
    	}
    }

})
