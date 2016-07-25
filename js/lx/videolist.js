$(function(){
    var personCon=$(".lx_personCon");
    var bannerList=$(".lx_bannerList");
    var lis=$(".lx_btn li");
    var bw=$(".lx_bannerList").width();

    var num=0;
    var next=0;
    var flag=true;
    bannerList.each(function(index,obj){
         $(obj).css("left",bw);
         if(index==0){
             $(obj).css("left",0);
         }
    });

    var t=setInterval(moveL,3000);
    personCon.hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(moveL,3000);
    })

    lis.each(function(i,obj){
        if(!flag) return;
       $(obj).click(function(){
           flag=false;
           var index=$(this).index();
           console.log(num,index)
           if(index==num){
               return ;
           }
           if(index>num){
               bannerList.eq(index).css("left",bw);
               bannerList.eq(num).animate({"left":-bw});
               bannerList.eq(index).animate({"left":0},function(){flag=true;});
               lis.eq(num).removeClass("lx_btnHot");
               lis.eq(index).addClass("lx_btnHot");
               num=index;
               next=index;
           }
           if(index<num){
               bannerList.eq(index).css("left",-bw);
               bannerList.eq(num).animate({"left":bw});
               bannerList.eq(index).animate({"left":0},function(){flag=true;});
               lis.eq(num).removeClass("lx_btnHot");
               lis.eq(index).addClass("lx_btnHot");
               num=index;
               next=index;
           }
       })
    })

    function moveL(){
        next++;
        if(next==bannerList.length){
            next=0;
        }
        lis.eq(num).removeClass("lx_btnHot");
        lis.eq(next).addClass("lx_btnHot");
        bannerList.eq(next).css("left",bw);
        bannerList.eq(num).animate({"left":-bw});
        bannerList.eq(next).animate({"left":0})
        num=next;
    }


//   轮播

    $(".lx_person .lx_personUncheck ").hover(function(){
        $(this).addClass("lx_personCheck");
    },function(){
        $(this).removeClass("lx_personCheck");
    })


//    视屏列表

    $('.lx_listItem').each(function(i,obj){
        $(obj).hover(function(){
            $(obj).find(".lx_photoMask").css("display","block");
            $(obj).find(".lx_itemIntro").css("background","none");
            $(obj).find(".lx_itemInfo").css("background","none");
            $(obj).find(".lx_introMask").addClass("lx_introMaskhot");
        },function(){
            $(obj).find(".lx_photoMask").css("display","none");
            $(obj).find(".lx_itemIntro").css("background","#fff");
            $(obj).find(".lx_itemInfo").css("background","#fff");
            $(obj).find(".lx_introMask").removeClass("lx_introMaskhot");
        })
    })
})