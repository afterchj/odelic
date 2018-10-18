/**
 * Created by nannan.li on 2018/10/10.
 * 时间轴
 */

$(function(){
    initData();
});

//加载初始化数据
function initData(){

    $.ajax({
        type:"POST",
        dataType:"json",
        url:"/mySpringBoot2X/findAll",
        success:function(data){
            alert("加载数据");
            var years = '';
            var ul = '<ul></ul>';
            var li='';
            var div = '<div class="year"></div>';
            $.each(data, function(key,value){
                var day='';
                if (value.day==null){
                    day = value.month+"月";
                }else {
                    day = value.month+"月"+value.day+"日";
                }
                li='<li class="cls">' +
                    '<p class="date">+day+</p>' +
                    '<p class="intro">'+value.intro+'</p>' +
                    '<p class="version">&nbsp;</p>' +
                    '<div class="more"><p>'+value.more+'</p></div>' +
                    '</li>';
                if(years==''||value.year==years){
                    //当前年份和上一年份一致
                    years = value.year;
                    var year = '<h2><a href="#">'+years+'<i></i></a></h2>';
                    var list = '<div class="list"></div>';
                    $(div).append($(year)).append($(list));
                    $(list).append($(ul));
                    $(ul).append($(li));
                    li='';

                }else {
                    //其它年份
                    years = value.year;
                    ul='<ul></ul>';
                    div = '<div class="year"></div>';
                    li='';

                }

            });
        }
    });
};
