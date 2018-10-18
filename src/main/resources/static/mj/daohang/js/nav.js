$(function () {
    //头页登录

    $("#aaa>li").hover(function () {
        // window.onerror=function(){return true;}
        $(this).children("ul").show();
        $(this).children("a").css("background", "#ed8232");
    }, function () {
        $(this).children("ul").hide();
        $(this).children("a").css("background", "");
    });


    var position = $(window).scrollTop();
    var el = $('.header_b');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll == 0 || scroll > position) {
            el
                .removeClass("head-fix")
                .css("left", 0);
        } else {
            el
                .addClass("head-fix")
                .css("left", -$(window).scrollLeft());
        }
        position = scroll;
    });

});

