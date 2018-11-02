/**
 * 关于我们
 * Created by nannan.li on 2018/10/22.
 */
$(function(){
    var start=$(".p_start").offset().top;
    var end=$(".p_end").offset().top;
    var line=(end-start);
    var style='';
    var width=$(window).width();
    var id;
    if(width>1170){
        $(".cd-timeline-block").each(function () {
           id = $(this).prop("id");
            if (id%2!=0){
            //左侧时间轴


            }
        });
    }
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
        width=$(window).width();
        line=((end-start));
        $(".myStyle").html('#cd-timeline::before{height: '+line+'px;}');
        if(width>1170){
            $(".cd-timeline-block").each(function () {
                id = $(this).prop("id");
                console.log("id:"+id);
                if (id%2!=0){
                    //左侧时间轴
                    $(this).children(".cd-timeline-content").children("h2").css(
                        {"marginLeft":75+'%',"text-align":"right"});
                    $(this).children(".cd-timeline-content").children("p").css("text-align","right");
                }
            });
        }else {
            $(".cd-timeline-block").each(function () {
                id = $(this).prop("id");
                if (id%2!=0){
                    //移除左侧时间轴效果
                    $(this).children(".cd-timeline-content").children("h2").css({"marginLeft":"","text-align":""});
                    $(this).children(".cd-timeline-content").children("p").css("text-align","");
                }
            });
        }
    });
});