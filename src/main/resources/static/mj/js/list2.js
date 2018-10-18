/**
 * 分页
 * Created by nannan.li on 2018/9/29.
 */
var list = {};
$(function () {

    //点击类型
    list.cate();
    //点击风格
    list.son();
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
    $("li[id^='categoryId']>a").on('click',function(){
        $("li[id^='categoryId']").removeClass('active');
        //点击列表处于选中状态
        $(this).parent().addClass('active');
        $("#category_hide").val($(this).parent().prop("id"));
        var category = $("#category_hide").val();
        var sonCategory = $("#sonCategory_hide").val();
        //清空图片列表
        $("#face").empty();
        $("#spanPages").empty();
        $(".pagenums").removeClass("actives");
        var a='';
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        $.post('/mySpringBoot2X/listType',
            {category:category,sonCategory:sonCategory},function (data) {
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
                        var ul='<ul id="faceul" ></ul>';
                        var li="";
                        var id="";
                        $.each(values, function (i, value) {
                            id='id'+value.id;
                            li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' +
                                '<br><span>类型:'+value.category+'</span><br>' +
                                '<span>风格:'+value.sonCategory+'</span></li>';
                        });
                        $("#face").append($(ul));
                        $("#faceul").append($(li));
                    }
                });
                //重新加载分页
                // console.log(pageNum+":"+totalPage);
                if (pageNum-4>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-4)+'</a>';
                }
                if (pageNum-3>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-3)+'</a>';
                }
                if (pageNum-2>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-2)+'</a>';
                }
                if (pageNum-1>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-1)+'</a>';
                }
                a+='<a class="pagenums actives" href="#">'+(pageNum)+'</a>';
                if(pageNum+1<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+1)+'</a>';
                }
                if(pageNum+2<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+2)+'</a>';
                }
                if(pageNum+3<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+3)+'</a>';
                }
                if(pageNum+4<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+4)+'</a>';
                }
                // if(pageNum+5<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                // }
                // if(pageNum+6<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                // }
                // console.log(a);
                $("#spanPages").append($(a));
            },"json");
    });
};

list.son= function () {
    $("li[id^='sonCategoryId']>a").click(function () {
        $("li[id^='sonCategoryId']").removeClass('active');
        //点击列表处于选中状态
        $(this).parent().addClass('active');
        $("#sonCategory_hide").val($(this).parent().prop("id"));
        var category = $("#category_hide").val();
        var sonCategory = $("#sonCategory_hide").val();
        //清空图片列表
        $("#face").empty();
        $("#spanPages").empty();
        $(".pagenums").removeClass("actives");
        var a='';
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        $.post("/mySpringBoot2X/listType",
            {category:category,sonCategory:sonCategory},function (data) {
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
                        var ul='<ul id="faceul"></ul>';
                        var li="";
                        var id="";
                        $.each(values, function (i, value) {
                            id='id'+value.id;
                            li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' +
                                '<br><span>类型:'+value.category+'</span><br>' +
                                '<span>风格:'+value.sonCategory+'</span></li>';
                        });

                        $("#face").append($(ul));
                        $("#faceul").append($(li));
                    }
                });
                //重新加载分页
                // console.log(pageNum+":"+totalPage);
                if (pageNum-4>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-4)+'</a>';
                }
                if (pageNum-3>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-3)+'</a>';
                }
                if (pageNum-2>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-2)+'</a>';
                }
                if (pageNum-1>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-1)+'</a>';
                }
                a+='<a class="pagenums actives" href="#">'+(pageNum)+'</a>';
                if(pageNum+1<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+1)+'</a>';
                }
                if(pageNum+2<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+2)+'</a>';
                }
                if(pageNum+3<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+3)+'</a>';
                }
                if(pageNum+4<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+4)+'</a>';
                }
                // if(pageNum+5<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                // }
                // if(pageNum+6<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                // }
                // console.log(a);
                $("#spanPages").append($(a));
            },"json");
    });
}

list.next = function () {
    $(".page3").on("click",function () {
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        //判断是否是最后一页
        if (parseInt(pageNum)<parseInt(totalPage)){
            pageNum=parseInt(pageNum)+1;//下一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#face").empty();
            $("#spanPages").empty();
            $(".pagenums").removeClass("actives");
            var a='';
            $.post("/mySpringBoot2X/listType",
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
                            var ul='<ul id="faceul"></ul>';
                            var li="";
                            var id="";
                            $.each(values, function (i, value) {
                                id='id'+value.id;
                                li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' +
                                    '<br><span>类型:'+value.category+'</span><br>' +
                                    '<span>风格:'+value.sonCategory+'</span></li>';
                            });

                            $("#face").append($(ul));
                            $("#faceul").append($(li));
                        }
                    });
                    //重新加载分页
                    // console.log(pageNum+":"+totalPage);
                    if (pageNum-4>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-4)+'</a>';
                    }
                    if (pageNum-3>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-3)+'</a>';
                    }
                    if (pageNum-2>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-2)+'</a>';
                    }
                    if (pageNum-1>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-1)+'</a>';
                    }
                    a+='<a class="pagenums actives" href="#">'+(pageNum)+'</a>';
                    if(pageNum+1<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+1)+'</a>';
                    }
                    if(pageNum+2<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+2)+'</a>';
                    }
                    if(pageNum+3<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+3)+'</a>';
                    }
                    if(pageNum+4<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+4)+'</a>';
                    }
                    // if(pageNum+5<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                    // }
                    // if(pageNum+6<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                    // }
                    // console.log(a);
                    $("#spanPages").append($(a));
                },"json");
        }
    });
}

list.previous = function () {
    $(".page2").on("click",function () {
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        //判断是否是第一页
        if (parseInt(pageNum)>1){
            pageNum=parseInt(pageNum)-1;//上一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#face").empty();
            $("#spanPages").empty();
            $(".pagenums").removeClass("actives");
            var a='';
            $.post("/mySpringBoot2X/listType",
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
                            var ul='<ul id="faceul"></ul>';
                            var li="";
                            var id="";
                            $.each(values, function (i, value) {
                                id='id'+value.id;
                                li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' + '<br><span>类型:'+value.category+'</span><br>' + '<span>风格:'+value.sonCategory+'</span></li>';
                            });

                            $("#face").append($(ul));
                            $("#faceul").append($(li));
                        }
                    });
                    //重新加载分页
                    // console.log(pageNum+":"+totalPage);
                    if (pageNum-4>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-4)+'</a>';
                    }
                    if (pageNum-3>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-3)+'</a>';
                    }
                    if (pageNum-2>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-2)+'</a>';
                    }
                    if (pageNum-1>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-1)+'</a>';
                    }
                    a+='<a class="pagenums actives" href="#">'+(pageNum)+'</a>';
                    if(pageNum+1<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+1)+'</a>';
                    }
                    if(pageNum+2<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+2)+'</a>';
                    }
                    if(pageNum+3<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+3)+'</a>';
                    }
                    if(pageNum+4<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+4)+'</a>';
                    }
                    // if(pageNum+5<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                    // }
                    // if(pageNum+6<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                    // }
                    // console.log(a);
                    $("#spanPages").append($(a));
                },"json");
        }
    });

}

list.first = function () {
    $(".page1").on("click",function () {
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        //判断是否是第一页
        if (parseInt(pageNum)>1){
            pageNum=1;//最后一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#face").empty();
            $("#spanPages").empty();
            $(".pagenums").removeClass("actives");
            var a='';
            $.post("/mySpringBoot2X/listType",
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
                            var ul='<ul id="faceul"></ul>';
                            var li="";
                            var id="";
                            $.each(values, function (i, value) {
                                id='id'+value.id;
                                li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' + '<br><span>类型:'+value.category+'</span><br>' + '<span>风格:'+value.sonCategory+'</span></li>';
                            });

                            $("#face").append($(ul));
                            $("#faceul").append($(li));
                        }
                    });
                    //重新加载分页
                    // console.log(pageNum+":"+totalPage);
                    if (pageNum-4>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-4)+'</a>';
                    }
                    if (pageNum-3>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-3)+'</a>';
                    }
                    if (pageNum-2>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-2)+'</a>';
                    }
                    if (pageNum-1>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-1)+'</a>';
                    }
                    a+='<a class="pagenums actives" href="#">'+(pageNum)+'</a>';
                    if(pageNum+1<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+1)+'</a>';
                    }
                    if(pageNum+2<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+2)+'</a>';
                    }
                    if(pageNum+3<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+3)+'</a>';
                    }
                    if(pageNum+4<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+4)+'</a>';
                    }
                    // if(pageNum+5<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                    // }
                    // if(pageNum+6<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                    // }
                    // console.log(a);
                    $("#spanPages").append($(a));
                },"json");
        }
    });

}

list.last = function () {
    $(".page4").on("click",function () {
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数
        //判断是否是最后一页
        if (parseInt(pageNum)<parseInt(totalPage)){
            pageNum=totalPage;//最后一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#face").empty();
            $("#spanPages").empty();
            $(".pagenums").removeClass("actives");
            var a='';
            $.post("/mySpringBoot2X/listType",
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
                            var ul='<ul id="faceul"></ul>';
                            var li="";
                            var id="";
                            $.each(values, function (i, value) {
                                id='id'+value.id;
                                li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' + '<br><span>类型:'+value.category+'</span><br>' + '<span>风格:'+value.sonCategory+'</span></li>';
                            });

                            $("#face").append($(ul));
                            $("#faceul").append($(li));
                        }
                    });
                    //重新加载分页
                    // console.log(pageNum+":"+totalPage);
                    if (pageNum-4>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-4)+'</a>';
                    }
                    if (pageNum-3>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-3)+'</a>';
                    }
                    if (pageNum-2>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-2)+'</a>';
                    }
                    if (pageNum-1>=1){
                        a+='<a class="pagenums" href="#">'+(pageNum-1)+'</a>';
                    }
                    a+='<a class="pagenums actives" href="#">'+(pageNum)+'</a>';
                    if(pageNum+1<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+1)+'</a>';
                    }
                    if(pageNum+2<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+2)+'</a>';
                    }
                    if(pageNum+3<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+3)+'</a>';
                    }
                    if(pageNum+4<=totalPage){
                        a+='<a class="pagenums" href="#">'+(pageNum+4)+'</a>';
                    }
                    // if(pageNum+5<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                    // }
                    // if(pageNum+6<=totalPage){
                    //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                    // }
                    // console.log(a);
                    $("#spanPages").append($(a));
                },"json");
        }
    });

}
list.page = function(){
    //动态生成的元素要通过事件委托来处理
    $("#spanPages").on('click',".pagenums",function(){
        $(".pagenums").removeClass("actives");
        // $(this).addClass("actives");
        $("#num").val($(this).text());//更新当前页
        var pageNum = $("#num").val();//当前页
        var totalPage = $("#total").val();//总页数

        var category = $("#category_hide").val();
        var sonCategory = $("#sonCategory_hide").val();
        //清空图片列表
        $("#face").empty();
        $("#spanPages").empty();

        var a='';
        $.post("/mySpringBoot2X/listType",
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
                        var ul='<ul id="faceul"></ul>';
                        var li="";
                        var id="";
                        $.each(values, function (i, value) {
                            id='id'+value.id;
                            li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' + '<br><span>类型:'+value.category+'</span><br>' + '<span>风格:'+value.sonCategory+'</span></li>';
                        });

                        $("#face").append($(ul));
                        $("#faceul").append($(li));
                    }
                });
                //重新加载分页
                // console.log(pageNum+":"+totalPage);
                if (pageNum-4>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-4)+'</a>';
                }
                if (pageNum-3>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-3)+'</a>';
                }
                if (pageNum-2>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-2)+'</a>';
                }
                if (pageNum-1>=1){
                    a+='<a class="pagenums" href="#">'+(pageNum-1)+'</a>';
                }
                a+='<a class="pagenums actives" href="#">'+(pageNum)+'</a>';
                if(pageNum+1<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+1)+'</a>';
                }
                if(pageNum+2<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+2)+'</a>';
                }
                if(pageNum+3<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+3)+'</a>';
                }
                if(pageNum+4<=totalPage){
                    a+='<a class="pagenums" href="#">'+(pageNum+4)+'</a>';
                }
                // if(pageNum+5<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+5)+'</a>';
                // }
                // if(pageNum+6<=totalPage){
                //     a+='<a class="pagenums" href="#">'+(pageNum+6)+'</a>';
                // }
                // console.log(a);
                $("#spanPages").append($(a));
            },"json");
    });
}
