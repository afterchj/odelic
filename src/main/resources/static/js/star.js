$(function () {

    $("#aqua1").removeClass("aqua");
    $(".mystar li").click(function () {
        $(this).siblings('li').removeClass('spect');  // 删除其他兄弟元素的样式
        $(this).addClass('spect');  // 添加当前元素的样式
    });

    var i = 0;
    var clone = $(".ad .slider li").first().clone();//克隆第一张图片
    $(".ad .slider").append(clone);//复制到列表最后
    var size = 4;// $(".ad .slider li").size();
    // console.log("size=" + size);

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
            $(".ad .slider").css({left: 0});
            i = 1;
        }
        if (i == -1) {
            $(".ad .slider").css({left: -(size - 1) * 1200});
            i = size - 2;
        }
        $(".ad .slider").stop().animate({left: -i * 1200}, 500);
    };
});

function showAu(id) {
    for (var i = 1; i < 4; i++) {
        if (id == i) {
            $("#aqua" + id).removeClass("aqua");
        } else {
            $("#aqua" + i).addClass("aqua");
        }
    }
}
