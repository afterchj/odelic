/**
 * 关于我们
 * Created by nannan.li on 2018/10/22.
 */
$(function () {
    //返回顶部
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //operaFix
    $(".totop").hide();
    $(".totop").click(function () {
        $body.animate({scrollTop: 0});
    });
    window.onscroll = function () {
        if ((document.documentElement.scrollTop + document.body.scrollTop) > 200) {
            $(".totop").show();
        } else {
            $(".totop").hide();
        }
    };
})
