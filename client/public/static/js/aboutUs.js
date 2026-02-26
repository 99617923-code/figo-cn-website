$(document).ready(function(){
    $('.figo-join').hide()
    $('.al-box ul li').click(function(){
        var menuTop = window.screen.width >= 760 ? 60 : 40
        var alIndex = $(this).index()
        $(this).addClass('alb-active').siblings("li").removeClass('alb-active')
        console.log('as',alIndex)
        if(alIndex == 0){
            $('.figo-join').hide()
            $('.figoIntroduction').show()
            $('.figoTeam').show()
            $('.figoEnvironment').show()
            $('.figoDevelop').show()
            $('.figo-honour').show()
            $('.figo-certificate').show()
            $('.figo-success').show()
            $('.figo-Desc').show()
            $('.figo-Contact').show()
            let fITop = $('.figoIntroduction').offset().top - menuTop
            $('html,body').animate({scrollTop: fITop + 'px' },500)     
        }
        if(alIndex == 1){
            $('.figo-join').hide()
            $('.figoIntroduction').show()
            $('.figoTeam').show()
            $('.figoEnvironment').show()
            $('.figoDevelop').show()
            $('.figo-honour').show()
            $('.figo-certificate').show()
            $('.figo-success').show()
            $('.figo-Desc').show()
            $('.figo-Contact').show()
            let fTTop = $('.figoTeam').offset().top - menuTop
            $('html,body').animate({scrollTop: fTTop + 'px' },600)
        }
        if(alIndex == 2){
            $('.figo-join').hide()
            $('.figoIntroduction').show()
            $('.figoTeam').show()
            $('.figoEnvironment').show()
            $('.figoDevelop').show()
            $('.figo-honour').show()
            $('.figo-certificate').show()
            $('.figo-success').show()
            $('.figo-Desc').show()
            $('.figo-Contact').show()
            let fETop = $('.figoEnvironment').offset().top - menuTop
            $('html,body').animate({scrollTop: fETop + 'px' },700)
        }
        if(alIndex == 3){
            $('.figo-join').hide()
            $('.figoIntroduction').show()
            $('.figoTeam').show()
            $('.figoEnvironment').show()
            $('.figoDevelop').show()
            $('.figo-honour').show()
            $('.figo-certificate').show()
            $('.figo-success').show()
            $('.figo-Desc').show()
            $('.figo-Contact').show()
            let fDTop = $('.figoDevelop').offset().top - menuTop
            $('html,body').animate({scrollTop: fDTop + 'px' },800)
        }
        if(alIndex == 4){
            $('.figo-join').hide()
            $('.figoIntroduction').show()
            $('.figoTeam').show()
            $('.figoEnvironment').show()
            $('.figoDevelop').show()
            $('.figo-honour').show()
            $('.figo-certificate').show()
            $('.figo-success').show()
            $('.figo-Desc').show()
            $('.figo-Contact').show()
            let fhTop = $('.figo-honour').offset().top - menuTop
            $('html,body').animate({scrollTop: fhTop + 'px' },900)
        }
        if(alIndex == 5){
            $('.figo-join').hide()
            $('.figoIntroduction').show()
            $('.figoTeam').show()
            $('.figoEnvironment').show()
            $('.figoDevelop').show()
            $('.figo-honour').show()
            $('.figo-certificate').show()
            $('.figo-success').show()
            $('.figo-Desc').show()
            $('.figo-Contact').show()
            let fcTop = $('.figo-certificate').offset().top - menuTop
            $('html,body').animate({scrollTop: fcTop + 'px' },1000)
        }
        if(alIndex == 6){
            $('.figo-join').hide()
            $('.figoIntroduction').show()
            $('.figoTeam').show()
            $('.figoEnvironment').show()
            $('.figoDevelop').show()
            $('.figo-honour').show()
            $('.figo-certificate').show()
            $('.figo-success').show()
            $('.figo-Desc').show()
            $('.figo-Contact').show()
            let fsTop = $('.figo-success').offset().top - menuTop
            $('html,body').animate({scrollTop: fsTop + 'px' },1000)
        }
        if(alIndex == 7){
            $('.figoIntroduction').hide()
            $('.figoTeam').hide()
            $('.figoEnvironment').hide()
            $('.figoDevelop').hide()
            $('.figo-honour').hide()
            $('.figo-certificate').hide()
            $('.figo-success').hide()
            $('.figo-Desc').hide()
            $('.figo-Contact').hide()
            $('.figo-join').show()
            let fjTop = $('.figo-join').offset().top - menuTop
            $('html,body').animate({scrollTop: fjTop + 'px' },500)
        }
        if(alIndex == 8){
            $('.figo-join').hide()
            $('.figoIntroduction').show()
            $('.figoTeam').show()
            $('.figoEnvironment').show()
            $('.figoDevelop').show()
            $('.figo-honour').show()
            $('.figo-certificate').show()
            $('.figo-success').show()
            $('.figo-Desc').show()
            $('.figo-Contact').show()
            let fCTop = $('.figo-Contact').offset().top - menuTop
            $('html,body').animate({scrollTop: fCTop + 'px' },1100)
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

    // 导航点击
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

})
