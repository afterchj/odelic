/**
 * 产品中心
 * Created by nannan.li on 2018/10/22.
 */
$(function () {
    //返回顶部
    // var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //operaFix
    // $(".totop").hide();
    // $(".totop").click(function () {
    //     $body.animate({scrollTop: 0});
    // });
    // window.onscroll = function () {
    //     if ((document.documentElement.scrollTop + document.body.scrollTop) > 200) {
    //         $(".totop").show();
    //     } else {
    //         $(".totop").hide();
    //     }
    // };

    //排序
    $('.pro-paix a').click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
    });

    //筛选选中
    $('.pro-shaix .li_select a').click(function () {
        if ($(this).hasClass('all')) {
            $(this).addClass('cur').siblings("a").removeClass('cur')
        }
        else if ($(this).hasClass('cur')) {
            $(this).removeClass('cur');
        }
        else {
            $(this).addClass('cur').siblings(".all").removeClass('cur');
        }
    });

    $('#btn_search').click(function () {
        var key = $('#txt_key');
        if (key.val() == '') {
            key.focus();
            return false;
        }
        // location.href = '/newpro/prolist/?classid=79&key=' + key.val();
    });
    // var url = '/newpro/prolist/?classid=79';
    // document.onkeydown = function (e) {
    //     var ev = document.all ? window.event : e;
    //     if (ev.keyCode == 13) {
    //         var key = $('#txt_key');
    //         if (key.val() == '') {
    //             key.focus();
    //             return false;
    //         }
    //         url += '&key=' + key.val();
    //         //alert(url);
    //         window.location.href = url;
    //     }
    // }

    //选中
    $('.new_pro_screen_ul li dd').click(function () {
        if ($(this).hasClass('cur')) {
            $(this).removeClass('cur')
        }
        else {
            $(this).addClass('cur').siblings().removeClass('cur');
        }
    });
    //筛选出现
    $(".shaixBtn").click(function () {
        $('.black').fadeIn();
        $('.new_pro_screen_ul').animate({
            "right": "0",
            "opacity": 1
        });
        $('.new_pro_screen_ul li').addClass('on')
    });
    //筛选关闭
    $('.black').click(function () {
        $('.black').fadeOut();
        $('.new_pro_screen_ul').animate({
            "right": "-100%",
            "opacity": 0
        });
        $('.new_pro_screen_ul li').removeClass('on')
    });
    //重置
    $('.new_pro_screen_btn .cz').click(function () {
        $('.new_pro_screen_ul li dd').removeClass('cur');
    });
    $(".new_pro_screen_ul li h3").click(function () {
        $(this).siblings(".sub").slideToggle();
    });

    var width = $(window).width();
    var height = $(window).height();
    if (width <= 400 && height <= 700) {
        $(".pagination").addClass("pagination-sm");
        $(".divPages").css({
            position: 'absolute',
            left: 10
//                top: ($(window).height() - $('.divPages').outerHeight())/2 + $(document).scrollTop()
        });
    } else if (width > 1100 && height > 900) {
        $(".pagination").addClass("pagination-lg");
        $(".divPages").css({
            position: 'absolute',
            left: ($(window).width() - $(".pagination").width()) / 2
//                top: ($(window).height() - $('.divPages').outerHeight())/2 + $(document).scrollTop()
        });
    } else {
        $(".divPages").css({
            position: 'absolute',
            left: ($(window).width() - $(".pagination").width()) / 2
//                top: ($(window).height() - $('.divPages').outerHeight())/2 + $(document).scrollTop()
        });
    }
    //监听 浏览器窗口大小的变化事件
    $(window).resize(function () {
        width = $(window).width();
        height = $(window).height();
        //随着窗口的变化改变分页大小
        if (width <= 400 && height <= 700) {
            $(".pagination").removeClass("pagination-lg");
            $(".pagination").addClass("pagination-sm");
            $(".divPages").removeAttr('style');
            $(".divPages").css({
                position: 'absolute',
                left: 10
//                top: ($(window).height() - $('.divPages').outerHeight())/2 + $(document).scrollTop()
            });
        } else if (width > 1100 && height > 900) {
            $(".pagination").removeClass("pagination-sm");
            $(".pagination").addClass("pagination-lg");
            $(".divPages").removeAttr('style');
            $(".divPages").css({
                position: 'absolute',
                left: ($(window).width() - $(".pagination").width()) / 2
//                    top: ($(window).height() - $('.divPages').outerHeight())/2 + $(document).scrollTop()
            });

        } else {
            $(".pagination").removeClass("pagination-lg");
            $(".pagination").removeClass("pagination-sm");
            $(".divPages").removeAttr('style');
            $(".divPages").css({
                position: 'absolute',
                left: ($(window).width() - $(".pagination").width()) / 2
//                    top: ($(window).height() - $('.divPages').outerHeight())/2 + $(document).scrollTop()
            });

        }
    });
    $("#phon_cate dd").on('click', function () {
        $("#phon_cate dd").removeClass('cur');
        $(this).addClass('cur');
    });
    $("#phon_son dd").on('click', function () {
        $("#phon_son dd").removeClass('cur');
        $(this).addClass('cur');
    });
    //重置
    $('.new_pro_screen_btn .cz').click(function () {
        $("#phon_cate dd").removeClass('cur');
        $("#phon_son dd").removeClass('cur');
    });
    $("[id^='categoryId']").on('click',function(){
        $("[id^='categoryId']").removeClass('cur');
        $(this).addClass('cur');
    });
    $("[id^='sonCategoryId']").click(function () {
        $("[id^='sonCategoryId']").removeClass('cur');
        $(this).addClass('cur');
    });
})
