$.fn.smartFloat = function() {
    var position = function(element) {
        var top = 0, pos = element.css("position");

        $(window).scroll(function() {
            var scrolls = $(this).scrollTop();
            if (scrolls > top) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度
                if (window.XMLHttpRequest) { //如果不是ie6
                    element.css({
                        position: "fixed",
                        top: 0
                    }).addClass("shadow");  
                } else { //如果是ie6
                    element.css({
                        top: scrolls
                    }); 
                }
            }else {
                element.css({
                    position: pos,
                    top: top
                }).removeClass("shadow");   
            }
        });
    };

    return $(this).each(function() {
        position($(this));                       
    });
};
$(function(){
    $("#fix").smartFloat();
  });   


(function(doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange': 'resize',
    recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

(function(){
    var mySwiper = new Swiper ('#swiper1', {
        pagination: '.banner .swiper-pagination',
        paginationClickable :true,
        autoplay:3500,
        loop:true,
        autoplayDisableOnInteraction: false
    });
    $('.s_list ul li').mouseover(function() {
        var index = $(".s_list ul li").index(this);
        $(this).addClass("on").siblings("li").removeClass("on");
    });
     $(".nav_m").click(function(){
      $(".nav_ul").toggle();
      $(".sj_menu").css("visibility","hidden");
      });

    $(".js-nav > li").hover(function() {
       
        var t = $(".js-nav").parent().offset().left
            , i = 15
            , n = $(this)
            , e = n.offset().left - t + i;
        $(".js-menu-act").css({
            left: e,
            width: n.width() - 2 * i,
            opacity: 1
        })
    }, function() {
        $(".js-menu-act").css({
            opacity: 0
        })
    })
    $(".btn_top").hide();
        $(".btn_top").live("click",function(){
            $('html, body').animate({scrollTop: 0},300);return false;
        })
        $(window).bind('scroll resize',function(){
            if($(window).scrollTop()<=300){
                $(".btn_top").hide();
            }else{
                $(".btn_top").show();
            }
    })
  /* 联系我们视频弹框*/       
    $('.play').on('click',function (event) {
        $(".video_alert_bg").show();
        event.stopPropagation();//阻止事件冒泡
         var flag = true;
         var tag = $('.video_alert_bg');
        $(document).bind("click",function(e){//点击空白处，设置的弹框消失
            var target = $(e.target);
            if(flag == true){
                $(tag).hide();
                flag = false;
            }
            $('video').trigger('pause');

        });

    });
 /*首页解决方案切换*/   
if($(document).width() < 760){
    $('.case_ul').width($(document).width()*$('.cast_k').length+'px');
    $('.cast_k').css("width",$(document).width() - 20);
    $('.ep-pages a').eq(0).hide();
    $('.ep-pages a').eq(1).hide();
    $('.ep-pages a').eq(3).hide();
    $('.ep-pages a').eq(4).hide();
    $('.ep-pages a').eq(5).hide();
    $('.ep-pages a').eq(6).hide();
    $('.ep-pages a').eq(8).hide();
    $('.ep-pages span').hide();
}else{
   $('.case_ul').width(1200*$('.cast_k').length+'px');

}
$(".case_title ul li").mouseover(function(){
        $(this).addClass('case_cur').siblings().removeClass('case_cur');
         var index = $(".case_title ul li").index(this);
        number = index;
       if($(document).width() < 760){
           var index = $(".case_title ul li").index(this);
           if(index==2 ){
             $('.cast_list').css("height","565");
           }
          if(index==3){
             $('.cast_list').css("height","590");
           }
            var kuan=$(document).width() - 20;
            var distance1 = - kuan * index;
            $('.case_ul').stop().animate({
                left:distance1
            }); 
       }else{
          var distance = -1200*index;
            $('.case_ul').stop().animate({
                left:distance
            });
       }
       
    });
  $('.about_class ul li').mouseover(function() {
        var index = $(".about_class ul li").index(this);
        $(this).addClass("fl_cur").siblings("li").removeClass("fl_cur");
        $(".about_tab").hide();
        $(".about_tab").eq(index).show();
    });
    $('.ys_tab ul li').mouseover(function() {
        var index = $(".ys_tab ul li").index(this);
        $(this).addClass("ys_cur").siblings("li").removeClass("ys_cur");
        $(".ys_list").hide();
        $(".ys_list").eq(index).show();
    });

     $('.hover_m').click(function() {
       $(".sj_menu").css("visibility","visible");
    });
     $('.hover_s').click(function() {
       $(".sj_menu").css("visibility","hidden");

    });
     $('.video_list em').click(function() {
        $('.video_alert_bg').hide();
        $('video').trigger('pause');
    });
})();

