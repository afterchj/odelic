/**
 * 关于我们
 * Created by nannan.li on 2018/10/22.
 */
$(function(){
    var start=$(".p_start").offset().top;
    var end=$(".p_end").offset().top;
    var line=(end-start);
    var style='';
    if ($("style").hasClass("myStyle")){
        $(".myStyle").html('#cd-timeline::before{height: '+line+'px;}');
    }else {
        style = '<style class="myStyle">#cd-timeline::before{height: '+line+'px;}</style>';
        $("head").append(style);
    }
    //监听 浏览器窗口大小的变化事件
    $(window).resize(function () {
        start=$(".p_start").offset().top;
        end=$(".p_end").offset().top;
        line=((end-start));
        $(".myStyle").html('#cd-timeline::before{height: '+line+'px;}');
    });

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
});