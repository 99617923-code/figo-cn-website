$(document).ready(function(){
    // 肥狗Ai高级功能切换
    var ghcclContent = document.querySelectorAll('.ghccl-content')
    $(ghcclContent[0]).addClass('ghccl-active').siblings('.ghccl-content').removeClass('ghccl-active')
    $(ghcclContent[0]).children('.ghcclc-box2').show()
    $(ghcclContent[0]).siblings('.ghccl-content').children('.ghcclc-box2').hide()
    var ghccrImg = document.querySelectorAll('.ghccr-img')
    $(ghccrImg[0]).show().siblings('.ghccr-img').hide()
    $('.ghccl-content').click(function(){
        var acIndex = $(this).index()
        $(ghcclContent[acIndex]).addClass('ghccl-active').siblings('.ghccl-content').removeClass('ghccl-active')
        $(ghcclContent[acIndex]).children('.ghcclc-box2').show()
        $(ghcclContent[acIndex]).siblings('.ghccl-content').children('.ghcclc-box2').hide()
        $(ghccrImg[acIndex]).show().siblings('.ghccr-img').hide()
    })

    // 肥狗AI使用效果
    var gutbItem = document.querySelectorAll('.gutb-item')
    $(gutbItem[0]).addClass('gutb-active').siblings('.gutb-item').removeClass('gutb-active')
    var gutcItem = document.querySelectorAll('.gutc-item')
    $(gutcItem[0]).show().siblings('.gutc-item').hide()
    $('.gutb-item').click(function(){
        var acIndex2 = $(this).index()
        $(gutbItem[acIndex2]).addClass('gutb-active').siblings('.gutb-item').removeClass('gutb-active')
        $(gutcItem[acIndex2]).show().siblings('.gutc-item').hide()
    })

    // 立即试用点击事件
    $('.gbtbl-btn').click(function(){
        let top = $('.gfc-aiCode').offset().top - 150
        $('html,body').animate({scrollTop: top + 'px' },1200)
    })

    // 导航点击
    $(".nav_m").click(function(){
        $(".nav_ul").toggle();
        $(".sj_menu").css("visibility","hidden");
    });
})