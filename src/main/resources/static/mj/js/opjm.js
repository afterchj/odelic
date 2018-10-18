/**
 *
 * Created by nannan.li on 2018/9/29.
 */
var list = {};
$(function () {


    //点击类型
    list.cate();
    //点击风格
    list.son();
    //手机筛选分类
    list.phon();
    //下一页
    list.next();
    //上一页
    list.previous();
    //尾页
    list.last();
    //首页
    list.first();
    //点击页数
    list.page();
});

list.cate = function () {
    $("[id^='categoryId']").on('click',function(){
        $("[id^='categoryId']").removeClass('cur');
        //点击列表处于选中状态
        $(this).addClass('cur');
        $("#category_hide").val($(this).prop("id"));
        var category = $("#category_hide").val();
        var sonCategory = $("#sonCategory_hide").val();
        //清空图片列表
        $("#wind_cate").empty();
        $(".pagination").empty();//清空分页
        $(".pagenums").parent().removeClass("active");
        var a='';
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        $.post('/odelic/listType',
            {category:category,sonCategory:sonCategory},function (data) {
                // console.log(data);
                $.each(data, function (key,values) {
                    if (key=="getPageNum"){
                        $("#num").val(values);
                        pageNum=values;
                    }
                    if(key=="getPages"){
                        $("#total").val(values);
                        totalPage=values;
                    }
                    if (key=="list"){
                        var li="";
                        $.each(values, function (i, value) {
                            li+='<li><div class="box" style="background-color: rgb(246, 244, 236);"><div class="img"><a href="#"><img src="'+value.url+'"></a></div><div class="wenz"><h3><a href="#">MB1212-D0.2×5+1×2-悠彩壁灯-2700K4000K</a></h3><p class="fontp">功率（W）：3.5W<br>规格尺寸(mm)：120*120*65mm<br>' +value.category+'=='+value.sonCategory+'</p></div></div></li>';
                        });

                        $("#wind_cate").append($(li));
                    }
                });
                //重新加载分页
                a+='<li><a href="#" class="page1">首页</a></li><li><a href="#" class="page2">上一页</a></li>';
                if (pageNum-4>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-4)+'</a></li>';
                }
                if (pageNum-3>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-3)+'</a></li>';
                }
                if (pageNum-2>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-2)+'</a></li>';
                }
                if (pageNum-1>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-1)+'</a></li>';
                }
                a+='<li class="active"><a class="pagenums" href="#">'+(pageNum)+'</a></li>';
                if(pageNum+1<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+1)+'</a></li>';
                }
                if(pageNum+2<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+2)+'</a></li>';
                }
                if(pageNum+3<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+3)+'</a></li>';
                }
                if(pageNum+4<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+4)+'</a></li>';
                }
                // if(pageNum+5<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                // }
                // if(pageNum+6<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                // }
                a+='<li><a href="#" class="page3">下一页</a></li><li><a href="#" class="page4">尾页</a></li>';
                $(".pagination").append($(a));
            },"json");
    });
};

list.son= function () {
    $("[id^='sonCategoryId']").click(function () {
        $("[id^='sonCategoryId']").removeClass('cur');
        //点击列表处于选中状态
        $(this).addClass('cur');
        $("#sonCategory_hide").val($(this).prop("id"));
        var category = $("#category_hide").val();
        var sonCategory = $("#sonCategory_hide").val();
        //清空图片列表
        $("#wind_cate").empty();
        $(".pagination").empty();//清空分页
        $(".pagenums").parent().removeClass("active");
        var a='';
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        $.post('/odelic/listType',
            {category:category,sonCategory:sonCategory},function (data) {
                // console.log(data);
                $.each(data, function (key,values) {
                    if (key=="getPageNum"){
                        $("#num").val(values);
                        pageNum=values;
                    }
                    if(key=="getPages"){
                        $("#total").val(values);
                        totalPage=values;
                    }
                    if (key=="list"){
                        var li="";
                        $.each(values, function (i, value) {
                            li+='<li><div class="box" style="background-color: rgb(246, 244, 236);"><div class="img"><a href="#"><img src="'+value.url+'"></a></div><div class="wenz"><h3><a href="#">MB1212-D0.2×5+1×2-悠彩壁灯-2700K4000K</a></h3><p class="fontp">功率（W）：3.5W<br>规格尺寸(mm)：120*120*65mm<br>' +value.category+'=='+value.sonCategory+'</p></div></div></li>';
                        });

                        $("#wind_cate").append($(li));
                    }
                });
                //重新加载分页
                a+='<li><a href="#" class="page1">首页</a></li><li><a href="#" class="page2">上一页</a></li>';
                if (pageNum-4>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-4)+'</a></li>';
                }
                if (pageNum-3>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-3)+'</a></li>';
                }
                if (pageNum-2>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-2)+'</a></li>';
                }
                if (pageNum-1>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-1)+'</a></li>';
                }
                a+='<li class="active"><a class="pagenums" href="#">'+(pageNum)+'</a></li>';
                if(pageNum+1<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+1)+'</a></li>';
                }
                if(pageNum+2<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+2)+'</a></li>';
                }
                if(pageNum+3<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+3)+'</a></li>';
                }
                if(pageNum+4<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+4)+'</a></li>';
                }
                // if(pageNum+5<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                // }
                // if(pageNum+6<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                // }
                a+='<li><a href="#" class="page3">下一页</a></li><li><a href="#" class="page4">尾页</a></li>';
                $(".pagination").append($(a));
            },"json");
    });
}

list.phon = function(){
    $('.new_pro_screen_btn .qd').click(function () {
        var category = null;
        var sonCategory = null;
        $("#phon_cate dd").each(function(){
            if ($(this).hasClass('cur')){
                category = $(this).attr('data-val');
                // alert("cur:"+$(this).attr('data-val'));
                $("#category_hide").val(category);
                return;
            }
        });
        $("#phon_son dd").each(function(){
            if ($(this).hasClass('cur')){
                // alert("cur:"+$(this).attr('data-val'));
                sonCategory = $(this).attr('data-val');
                $("#sonCategory_hide").val(sonCategory);
                return;
            }
        });
        if (category==null){
            category = "categoryId1";
            $("#category_hide").val(category);
        }

        if (sonCategory==null){
            sonCategory = "sonCategoryId1";
            $("#sonCategory_hide").val(sonCategory);
        }
        // alert("null:"+category);
        // alert("null:"+sonCategory);

        //清空图片列表
        $("#wind_cate").empty();
        $(".pagination").empty();//清空分页
        $(".pagenums").parent().removeClass("active");
        var a='';
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        $.post('/odelic/listType',
            {category:category,sonCategory:sonCategory},function (data) {
                console.log(data);
                $.each(data, function (key,values) {
                    if (key=="getPageNum"){
                        $("#num").val(values);
                        pageNum=values;
                    }
                    if(key=="getPages"){
                        $("#total").val(values);
                        totalPage=values;
                    }
                    if (key=="list"){
                        var li="";
                        $.each(values, function (i, value) {
                            li+='<li><div class="box" style="background-color: rgb(246, 244, 236);"><div class="img"><a href="#"><img src="'+value.url+'"></a></div><div class="wenz"><h3><a href="#">MB1212-D0.2×5+1×2-悠彩壁灯-2700K4000K</a></h3><p class="fontp">功率（W）：3.5W<br>规格尺寸(mm)：120*120*65mm<br>' +value.category+'=='+value.sonCategory+'</p></div></div></li>';
                        });

                        $("#wind_cate").append($(li));
                    }
                });
                //重新加载分页
                a+='<li><a href="#" class="page1">首页</a></li><li><a href="#" class="page2">上一页</a></li>';
                if (pageNum-4>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-4)+'</a></li>';
                }
                if (pageNum-3>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-3)+'</a></li>';
                }
                if (pageNum-2>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-2)+'</a></li>';
                }
                if (pageNum-1>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-1)+'</a></li>';
                }
                a+='<li class="active"><a class="pagenums" href="#">'+(pageNum)+'</a></li>';
                if(pageNum+1<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+1)+'</a></li>';
                }
                if(pageNum+2<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+2)+'</a></li>';
                }
                if(pageNum+3<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+3)+'</a></li>';
                }
                if(pageNum+4<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+4)+'</a></li>';
                }
                // if(pageNum+5<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                // }
                // if(pageNum+6<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                // }
                a+='<li><a href="#" class="page3">下一页</a></li><li><a href="#" class="page4">尾页</a></li>';
                $(".pagination").append($(a));
            },"json");
    });
};

list.next = function () {
    $(".pagination").on("click",".page3",function () {
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        //判断是否是最后一页
        if (parseInt(pageNum)<parseInt(totalPage)){
            pageNum=parseInt(pageNum)+1;//下一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#wind_cate").empty();
            $(".pagination").empty();//清空分页
            $(".pagenums").parent().removeClass("active");
            var a='';
            $.post("/odelic/listType",
                {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
                function (data) {
                    $.each(data, function (key,values) {
                        if (key=="getPageNum"){
                            $("#num").val(values);
                            pageNum=values;
                        }
                        if(key=="getPages"){
                            $("#total").val(values);
                            totalPage=values;
                        }
                        if (key=="list"){
                            var li="";
                            $.each(values, function (i, value) {
                                li+='<li><div class="box" style="background-color: rgb(246, 244, 236);"><div class="img"><a href="#"><img src="'+value.url+'"></a></div><div class="wenz"><h3><a href="#">MB1212-D0.2×5+1×2-悠彩壁灯-2700K4000K</a></h3><p class="fontp">功率（W）：3.5W<br>规格尺寸(mm)：120*120*65mm<br>' +value.category+'=='+value.sonCategory+'</p></div></div></li>';
                            });

                            $("#wind_cate").append($(li));
                        }
                    });
                    //重新加载分页
                    a+='<li><a href="#" class="page1">首页</a></li><li><a href="#" class="page2">上一页</a></li>';
                    if (pageNum-4>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-4)+'</a></li>';
                    }
                    if (pageNum-3>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-3)+'</a></li>';
                    }
                    if (pageNum-2>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-2)+'</a></li>';
                    }
                    if (pageNum-1>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-1)+'</a></li>';
                    }
                    a+='<li class="active"><a class="pagenums" href="#">'+(pageNum)+'</a></li>';
                    if(pageNum+1<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+1)+'</a></li>';
                    }
                    if(pageNum+2<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+2)+'</a></li>';
                    }
                    if(pageNum+3<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+3)+'</a></li>';
                    }
                    if(pageNum+4<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+4)+'</a></li>';
                    }
                    // if(pageNum+5<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                    // }
                    // if(pageNum+6<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                    // }
                    a+='<li><a href="#" class="page3">下一页</a></li><li><a href="#" class="page4">尾页</a></li>';
                    $(".pagination").append($(a));
                },"json");
        }else {
            $(".page3").parent().addClass("disabled");//禁止点击下一页
        }
    });
}

list.previous = function () {
    $(".pagination").on("click",".page2",function () {
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        //判断是否是第一页
        if (parseInt(pageNum)>1){
            pageNum=parseInt(pageNum)-1;//上一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#wind_cate").empty();
            $(".pagination").empty();//清空分页
            $(".pagenums").parent().removeClass("active");
            var a='';
            $.post("/odelic/listType",
                {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
                function (data) {
                    $.each(data, function (key,values) {
                        if (key=="getPageNum"){
                            // $("#pageNum").val(values);
                            $("#num").val(values);
                            pageNum=values;
                        }
                        if(key=="getPages"){
                            // $("#totalPage").val(values);
                            $("#total").val(values);
                            totalPage=values;
                        }
                        if (key=="list"){
                            var li="";
                            $.each(values, function (i, value) {
                                li+='<li><div class="box" style="background-color: rgb(246, 244, 236);"><div class="img"><a href="#"><img src="'+value.url+'"></a></div><div class="wenz"><h3><a href="#">MB1212-D0.2×5+1×2-悠彩壁灯-2700K4000K</a></h3><p class="fontp">功率（W）：3.5W<br>规格尺寸(mm)：120*120*65mm<br>' +value.category+'=='+value.sonCategory+'</p></div></div></li>';
                            });

                            $("#wind_cate").append($(li));
                        }
                    });
                    //重新加载分页
                    a+='<li><a href="#" class="page1">首页</a></li><li><a href="#" class="page2">上一页</a></li>';
                    if (pageNum-4>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-4)+'</a></li>';
                    }
                    if (pageNum-3>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-3)+'</a></li>';
                    }
                    if (pageNum-2>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-2)+'</a></li>';
                    }
                    if (pageNum-1>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-1)+'</a></li>';
                    }
                    a+='<li class="active"><a class="pagenums" href="#">'+(pageNum)+'</a></li>';
                    if(pageNum+1<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+1)+'</a></li>';
                    }
                    if(pageNum+2<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+2)+'</a></li>';
                    }
                    if(pageNum+3<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+3)+'</a></li>';
                    }
                    if(pageNum+4<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+4)+'</a></li>';
                    }
                    // if(pageNum+5<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                    // }
                    // if(pageNum+6<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                    // }
                    a+='<li><a href="#" class="page3">下一页</a></li><li><a href="#" class="page4">尾页</a></li>';
                    $(".pagination").append($(a));
                },"json");
        }else {
            $(".page2").parent().addClass("disabled");//禁止点击上一页
        }
    });

}

list.first = function () {
    $(".pagination").on("click",".page1",function () {
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        //判断是否是第一页
        if (parseInt(pageNum)>1){
            pageNum=1;//最后一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#wind_cate").empty();
            $(".pagination").empty();//清空分页
            $(".pagenums").parent().removeClass("active");
            var a='';
            $.post("/odelic/listType",
                {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
                function (data) {
                    $.each(data, function (key,values) {
                        if (key=="getPageNum"){
                            // $("#pageNum").val(values);
                            $("#num").val(values);
                            pageNum=values;
                        }
                        if(key=="getPages"){
                            // $("#totalPage").val(values);
                            $("#total").val(values);
                            totalPage=values;
                        }
                        if (key=="list"){
                            var li="";
                            $.each(values, function (i, value) {
                                li+='<li><div class="box" style="background-color: rgb(246, 244, 236);"><div class="img"><a href="#"><img src="'+value.url+'"></a></div><div class="wenz"><h3><a href="#">MB1212-D0.2×5+1×2-悠彩壁灯-2700K4000K</a></h3><p class="fontp">功率（W）：3.5W<br>规格尺寸(mm)：120*120*65mm<br>' +value.category+'=='+value.sonCategory+'</p></div></div></li>';
                            });

                            $("#wind_cate").append($(li));
                        }
                    });
                    //重新加载分页
                    a+='<li><a href="#" class="page1">首页</a></li><li><a href="#" class="page2">上一页</a></li>';
                    if (pageNum-4>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-4)+'</a></li>';
                    }
                    if (pageNum-3>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-3)+'</a></li>';
                    }
                    if (pageNum-2>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-2)+'</a></li>';
                    }
                    if (pageNum-1>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-1)+'</a></li>';
                    }
                    a+='<li class="active"><a class="pagenums" href="#">'+(pageNum)+'</a></li>';
                    if(pageNum+1<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+1)+'</a></li>';
                    }
                    if(pageNum+2<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+2)+'</a></li>';
                    }
                    if(pageNum+3<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+3)+'</a></li>';
                    }
                    if(pageNum+4<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+4)+'</a></li>';
                    }
                    // if(pageNum+5<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                    // }
                    // if(pageNum+6<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                    // }
                    a+='<li><a href="#" class="page3">下一页</a></li><li><a href="#" class="page4">尾页</a></li>';
                    $(".pagination").append($(a));
                },"json");
        }else {
            $(".page1").parent().addClass("disabled");//禁止点击首页
        }
    });

}

list.last = function () {
    $(".pagination").on("click",".page4",function () {
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        //判断是否是最后一页
        if (parseInt(pageNum)<parseInt(totalPage)){
            pageNum=totalPage;//最后一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#wind_cate").empty();
            $(".pagination").empty();//清空分页
            $(".pagenums").parent().removeClass("active");
            var a='';
            $.post("/odelic/listType",
                {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
                function (data) {
                    $.each(data, function (key,values) {
                        if (key=="getPageNum"){
                            // $("#pageNum").val(values);
                            $("#num").val(values);
                            pageNum=values;
                        }
                        if(key=="getPages"){
                            // $("#totalPage").val(values);
                            $("#total").val(values);
                            totalPage=values;
                        }
                        if (key=="list"){
                            var li="";
                            $.each(values, function (i, value) {
                                li+='<li><div class="box" style="background-color: rgb(246, 244, 236);"><div class="img"><a href="#"><img src="'+value.url+'"></a></div><div class="wenz"><h3><a href="#">MB1212-D0.2×5+1×2-悠彩壁灯-2700K4000K</a></h3><p class="fontp">功率（W）：3.5W<br>规格尺寸(mm)：120*120*65mm<br>' +value.category+'=='+value.sonCategory+'</p></div></div></li>';
                            });

                            $("#wind_cate").append($(li));
                        }
                    });
                    //重新加载分页
                    a+='<li><a href="#" class="page1">首页</a></li><li><a href="#" class="page2">上一页</a></li>';
                    if (pageNum-4>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-4)+'</a></li>';
                    }
                    if (pageNum-3>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-3)+'</a></li>';
                    }
                    if (pageNum-2>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-2)+'</a></li>';
                    }
                    if (pageNum-1>=1){
                        a+='<li><a class="pagenums" href="#">'+(pageNum-1)+'</a></li>';
                    }
                    a+='<li class="active"><a class="pagenums" href="#">'+(pageNum)+'</a></li>';
                    if(pageNum+1<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+1)+'</a></li>';
                    }
                    if(pageNum+2<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+2)+'</a></li>';
                    }
                    if(pageNum+3<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+3)+'</a></li>';
                    }
                    if(pageNum+4<=totalPage){
                        a+='<li><a class="pagenums" href="#">'+(pageNum+4)+'</a></li>';
                    }
                    // if(pageNum+5<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                    // }
                    // if(pageNum+6<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                    // }
                    a+='<li><a href="#" class="page3">下一页</a></li><li><a href="#" class="page4">尾页</a></li>';
                    $(".pagination").append($(a));
                },"json");
        }else {
            $(".page4").parent().addClass("disabled");//禁止点击尾页
        }
    });

}
list.page = function(){
    //动态生成的元素要通过事件委托来处理
    $(".pagination").on('click',".pagenums",function(){
        $(".pagenums").parent().removeClass("active");
        $(this).parent().addClass("active");
        $("#num").val($(this).text());//更新当前页
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数

        var category = $("#category_hide").val();
        var sonCategory = $("#sonCategory_hide").val();
        //清空图片列表
        $("#wind_cate").empty();
        $(".pagination").empty();//清空分页
        $(".pagenums").parent().removeClass("active");

        var a='';
        $.post("/odelic/listType",
            {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
            function (data) {
                $.each(data, function (key,values) {
                    if (key=="getPageNum"){
                        $("#num").val(values);
                        pageNum=values;
                    }
                    if(key=="getPages"){
                        $("#total").val(values);
                        totalPage=values;
                    }
                    if (key=="list"){
                        var li="";
                        $.each(values, function (i, value) {
                            li+='<li><div class="box" style="background-color: rgb(246, 244, 236);"><div class="img"><a href="#"><img src="'+value.url+'"></a></div><div class="wenz"><h3><a href="#">MB1212-D0.2×5+1×2-悠彩壁灯-2700K4000K</a></h3><p class="fontp">功率（W）：3.5W<br>规格尺寸(mm)：120*120*65mm<br>' +value.category+'=='+value.sonCategory+'</p></div></div></li>';
                        });
                        $("#wind_cate").append($(li));
                    }
                });
                //重新加载分页
                a+='<li><a href="#" class="page1">首页</a></li><li><a href="#" class="page2">上一页</a></li>';
                if (pageNum-4>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-4)+'</a></li>';
                }
                if (pageNum-3>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-3)+'</a></li>';
                }
                if (pageNum-2>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-2)+'</a></li>';
                }
                if (pageNum-1>=1){
                    a+='<li><a class="pagenums" href="#">'+(pageNum-1)+'</a></li>';
                }
                a+='<li class="active"><a class="pagenums" href="#">'+(pageNum)+'</a></li>';
                if(pageNum+1<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+1)+'</a></li>';
                }
                if(pageNum+2<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+2)+'</a></li>';
                }
                if(pageNum+3<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+3)+'</a></li>';
                }
                if(pageNum+4<=totalPage){
                    a+='<li><a class="pagenums" href="#">'+(pageNum+4)+'</a></li>';
                }
                // if(pageNum+5<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                // }
                // if(pageNum+6<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                // }
                a+='<li><a href="#" class="page3">下一页</a></li><li><a href="#" class="page4">尾页</a></li>';
                $(".pagination").append($(a));
            },"json");
    });
}
