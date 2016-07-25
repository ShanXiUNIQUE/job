/**
 * Created by lixing on 2016/7/25.
 */
$(function(){
    //右侧
    $(".lx_slideCon").slideUp();
    $(".lx_videoSlide").each(function(i,obj){
        $(obj).hover(function(){

             $(obj).find(".lx_slideCon").finish().slideDown();
        },function(){
            $(obj).find(".lx_slideCon").finish().slideUp();
        })
    })

//    左边 推荐视屏加背景
    $(".lx_listImg").each(function(i,obj){
         $(obj).hover(function(){
             $(obj).addClass("lx_listImgHot");
         },function(){
             $(obj).removeClass("lx_listImgHot");
         })
    })
})