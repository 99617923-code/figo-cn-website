$(document).ready(function () {
    // 我们能为你做切换
    var ghcclContent = document.querySelectorAll('.we-tap-item')
    $(ghcclContent[0]).addClass('we-tap-select').siblings('.we-tap-item').removeClass('we-tap-select')
    $(ghcclContent[0]).children('.ghcclc-box2').show()
    $(ghcclContent[0]).siblings('.we-tap-item').children('.ghcclc-box2').hide()
    var ghccrImg = document.querySelectorAll('.we-content')
    $(ghccrImg[0]).show().siblings('.we-content').hide()
    $('.we-tap-item').click(function () {
        var acIndex = $(this).index()
        $(ghcclContent[acIndex]).addClass('we-tap-select').siblings('.we-tap-item').removeClass('we-tap-select')
        $(ghcclContent[acIndex]).children('.ghcclc-box2').show()
        $(ghcclContent[acIndex]).siblings('.we-tap-item').children('.ghcclc-box2').hide()
        $(ghccrImg[acIndex]).show().siblings('.we-content').hide()
    })
    //轮播图

    var timer = null;
    var index = 0;
    var $maodians = $('.da-content-i')

    var $lis = $('.da-content');
    $('.da-content').hide();
    $('.da-content:eq(0)').show();

    //锚点添加事件
    $maodians.hover(function () {
        clearInterval(timer)
        //旧的淡出，并给锚点取消背景
        $lis.eq(index).hide();
        $maodians.eq(index).removeClass('da-content-i-s');

        //index()方法返回当前节点在兄弟节点中的序号，从0开始计算。
        index = $(this).index();

        //console.log(index);

        //新的淡入，并给锚点添加背景
        $lis.eq(index).show();
        $maodians.eq(index).addClass('da-content-i-s');
    }, function () {
        timer = setInterval(function () {
            $lis.eq(index).hide();
            $maodians.eq(index).removeClass('da-content-i-s');

            index++;
            if (index == 4) {

                index = 0;
            }
            $lis.eq(index).show();
            $maodians.eq(index).addClass('da-content-i-s');
        }, 5000);
    });
    $lis.hover(function () {
        clearInterval(timer)
    }, function () {
        timer = setInterval(function () {
            $lis.eq(index).hide();
            $maodians.eq(index).removeClass('da-content-i-s');

            index++;
            if (index == 4) {

                index = 0;
            }
            $lis.eq(index).show();
            $maodians.eq(index).addClass('da-content-i-s');
        }, 5000);
    });
    //自动播放(定时器)
    timer = setInterval(function () {
        //防止动画积累的方法：只要jq对象在执行动画，就忽略任何的触发
        // if ($lis.is(':animated')) {
        //     return;
        // }

        //旧的怎么样，新的怎么样
        $lis.eq(index).hide();
        $maodians.eq(index).removeClass('da-content-i-s');

        index++;
        // $maodians.eq(index).addClass('da-content-i-s');
        //当已经时最后一张时，点击切换到第一张
        if (index == 4) {
            // $maodians.eq(index).removeClass('da-content-i-s');
            index = 0;
        }

        $lis.eq(index).show();
        $maodians.eq(index).addClass('da-content-i-s');
    }, 5000);

    // 滑动切换图
    const scrollWrapper = $(".ne-content");
    $('#next').on('click', function () {
        let newPosition = scrollWrapper.scrollLeft() - 258;

        // 平滑地滚动到新位置
        scrollWrapper.animate({ scrollLeft: newPosition }, 800);
    });

    //点击prev按钮
    $('#prev').on('click', function () {
        let newPosition = scrollWrapper.scrollLeft() + 258;

        // 平滑地滚动到新位置
        scrollWrapper.animate({ scrollLeft: newPosition }, 800);
    });
    // 每3秒钟水平滚动一次
    // let time1 = setInterval(function () {
    //     // 计算要滚动的距离
    //     const newPosition = scrollWrapper.scrollLeft() + 200;

    //     // 平滑地滚动到新位置
    //     scrollWrapper.animate({ scrollLeft: newPosition }, 800);
    //     if (newPosition > 800) {
    //         clearInterval(time1);
    //     }
    // }, 3000);

})