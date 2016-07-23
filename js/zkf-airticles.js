$(function(){
	// 文章列表背景色
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
	// 三个下拉导航设置样式
	// arr 导航背景图片的位置
  	var arr=['0 -48px','0 0','0 -97px'];
  	// arrPath导航下拉按钮的背景图片  arrBtnPos背景图片位置
  	var arrPath=['url(images/zkf/kf_a3.png) center no-repeat',
  	'url(images/small_img.png)','url(images/small_img.png)'];
  	var arrBtnPos=['',' -657px 0','-632px 0']
	for(var i=0;i<3;i++)
	{
		$('.kf_zplb').eq(i).css({
			backgroundPosition: arr[i]
		})
		$('.kf_zplb .tb').eq(i).css({
			background:arrPath[i],
			backgroundPosition:arrBtnPos[i]
		})
		xiala($('.kf_zplb').eq(i),$('.kf_smallbox').eq(i),$('.boxOpacity').eq(i));
	}
	// 下拉
	function xiala(btn,box,opBox){
		var flag=true;
		var t;
		btn.eq(0).hover(function(e){
			    $(opBox).stop(true,true);
			    $(box).stop(true,true);
			    t=setTimeout(function(){
			    opBox.eq(0).css({height:175})
				box.eq(0).css({height:0}).animate({height:175,paddingTop:20});
				},300)
				
			},function(e){
				$(opBox).stop(true,false);
				$(box).stop(true,false);
				opBox.eq(0).css({height:0})
				box.eq(0).animate({height:0,paddingTop:0});
				clearTimeout(t)
			})
		}
    /*
		进度条 
		num 企业关注的数量
		max 企业关注最大值
		bar 控制进度条进度的标签
		
    */    
    function proBar(num,max,bar){
    	 var w=num/max*100;
    	 $(bar).eq(0).css({
    	 	width:w
    	 })
    }
   

 })