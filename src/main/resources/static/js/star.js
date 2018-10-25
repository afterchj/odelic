

$(function () {
    var i = 0;
    //克隆第一张图片
    // var clone = $(".ad .slider li").first().clone();
    // $(".ad .slider").append(clone);//复制到列表最后
    var size = $(".ad .slider li").size();
    // for (var j = 0; j < size-1; j++) {
    //     $(".ad .num").append("<li></li>");
    // }
    // $(".ad .num li").first().addClass("on");

    /*自动轮播*/
    // var t = setInterval(function () { i++; move();},2000);

    /*鼠标悬停事件*/
    // $(".ad").hover(function () {
    //     clearInterval(t);//鼠标悬停时清除定时器
    // }, function () {
    //     t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
    // });

    /*鼠标滑入原点事件*/
    // $(".ad .num li").hover(function () {
    //     var index = $(this).index();//获取当前索引值
    //     i = index;
    //     $(".ad .slider").stop().animate({ left: -index * 1200 }, 500);
    //     $(this).addClass("on").siblings().removeClass("on");
    // });

    /*向左按钮*/
    $(".ad .btn_l").click(function () {
        i++;
        move();
    })

    /*向右按钮*/
    $(".ad .btn_r").click(function () {
        i--;
        move();
    })

    /*移动事件*/
    function move() {
        if (i == size) {
            $(".ad .slider").css({ left: 0 });
            i = 1;
        }
        if (i == -1) {
            $(".ad .slider").css({ left: -(size - 1) * 1200 });
            i = size - 2;
        }
        $(".ad .slider").stop().animate({ left: -i * 1200 }, 500);

        if (i == size - 1) {
            $(".ad .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".ad .num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    };
});
