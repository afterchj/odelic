/**
 * Created by nannan.li on 2018/9/29.
 */
$(function () {

    //点击类型
    // cate;
    $("li[id^='categoryId']>a").on('click',function(){
        $("li[id^='categoryId']").removeClass('active');
        //点击列表处于选中状态
        $(this).parent().addClass('active');
        $("#category_hide").val($(this).parent().prop("id"));
        var category = $("#category_hide").val();
        var sonCategory = $("#sonCategory_hide").val();
        //清空图片列表
        $("#face").empty();
        $.post('/mySpringBoot2X/listType',
            {category:category,sonCategory:sonCategory},function (data) {
                $.each(data, function (key,values) {
                    if (key=="getPageNum"){
                        // $("#pageNum").val(values);
                        $("#num").text(values);
                    }
                    if(key=="getPages"){
                        // $("#totalPage").val(values);
                        $("#total").text(values);
                    }
                    if (key=="list"){
                        var ul='<ul id="faceul" ></ul>';
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
            },"json");
    });
    //点击风格
    // son;
    $("li[id^='sonCategoryId']>a").click(function () {
        $("li[id^='sonCategoryId']").removeClass('active');
        //点击列表处于选中状态
        $(this).parent().addClass('active');
        $("#sonCategory_hide").val($(this).parent().prop("id"));
        var category = $("#category_hide").val();
        var sonCategory = $("#sonCategory_hide").val();
        //清空图片列表
        $("#face").empty();
        $.post("/mySpringBoot2X/listType",
            {category:category,sonCategory:sonCategory},function (data) {
                $.each(data, function (key,values) {
                    if (key=="getPageNum"){
                        // $("#pageNum").val(values);
                        $("#num").text(values);
                    }
                    if(key=="getPages"){
                        // $("#totalPage").val(values);
                        $("#total").text(values);
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
            },"json");
    });
    //下一页
    // next;
    $(".page3").on("click",function () {
        var pageNum = $("#num").text();//当前页
        var totalPage = $("#total").text();//总页数
        //判断是否是最后一页
        if (parseInt(pageNum)<parseInt(totalPage)){
            pageNum=parseInt(pageNum)+1;//下一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#face").empty();
            $.post("/mySpringBoot2X/listType",
                {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
                function (data) {
                    $.each(data, function (key,values) {
                        if (key=="getPageNum"){
                            // $("#pageNum").val(values);
                            $("#num").text(values);
                        }
                        if(key=="getPages"){
                            // $("#totalPage").val(values);
                            $("#total").text(values);
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
                },"json");
        }
        // $('html,body').animate({scrollTop:$('.bottom').offset().top}, "fast");
    });

    //上一页
    // previous;
    $(".page2").on("click",function () {
        var pageNum = $("#num").text();//当前页
        var totalPage = $("#total").text();//总页数
        //判断是否是第一页
        if (parseInt(pageNum)>1){
            pageNum=parseInt(pageNum)-1;//上一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#face").empty();
            $.post("/mySpringBoot2X/listType",
                {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
                function (data) {
                    $.each(data, function (key,values) {
                        if (key=="getPageNum"){
                            // $("#pageNum").val(values);
                            $("#num").text(values);
                        }
                        if(key=="getPages"){
                            // $("#totalPage").val(values);
                            $("#total").text(values);
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
                },"json");
        }
    });

    //尾页
    // last;
    $(".page4").on("click",function () {
        var pageNum = $("#num").text();//当前页
        var totalPage = $("#total").text();//总页数
        //判断是否是最后一页
        if (parseInt(pageNum)<parseInt(totalPage)){
            pageNum=totalPage;//最后一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#face").empty();
            $.post("/mySpringBoot2X/listType",
                {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
                function (data) {
                    $.each(data, function (key,values) {
                        if (key=="getPageNum"){
                            // $("#pageNum").val(values);
                            $("#num").text(values);
                        }
                        if(key=="getPages"){
                            // $("#totalPage").val(values);
                            $("#total").text(values);
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
                },"json");
        }
    });

    //首页
    // first;
    $(".page1").on("click",function () {
        var pageNum = $("#num").text();//当前页
        var totalPage = $("#total").text();//总页数
        //判断是否是第一页
        if (parseInt(pageNum)>1){
            pageNum=1;//最后一页
            var category = $("#category_hide").val();
            var sonCategory = $("#sonCategory_hide").val();
            //清空图片列表
            $("#face").empty();
            $.post("/mySpringBoot2X/listType",
                {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
                function (data) {
                    $.each(data, function (key,values) {
                        if (key=="getPageNum"){
                            // $("#pageNum").val(values);
                            $("#num").text(values);
                        }
                        if(key=="getPages"){
                            // $("#totalPage").val(values);
                            $("#total").text(values);
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
                },"json");
        }
    });
    // $('html,body').animate({scrollTop:$('.bottom').offset().top}, "fast");
});

// var cate = $("li[id^='categoryId']>a").on('click',function(){
//     $("li[id^='categoryId']").removeClass('active');
//     //点击列表处于选中状态
//     $(this).parent().addClass('active');
//     $("#category_hide").val($(this).parent().prop("id"));
//     var category = $("#category_hide").val();
//     var sonCategory = $("#sonCategory_hide").val();
//     //清空图片列表
//     $("#face").empty();
//     $.post('/mySpringBoot2X/listType',
//         {category:category,sonCategory:sonCategory},function (data) {
//             $.each(data, function (key,values) {
//                 if (key=="getPageNum"){
//                     $("#pageNum").val(values);
//                 }
//                 if(key=="getPages"){
//                     $("#totalPage").val(values);
//                 }
//                 if (key=="list"){
//                     var ul='<ul id="faceul" ></ul>';
//                     var li="";
//                     var id="";
//                     $.each(values, function (i, value) {
//                         id='id'+value.id;
//                         li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' + '<br><span>类型:'+value.category+'</span><br>' + '<span>风格:'+value.sonCategory+'</span></li>';
//                     });
//                     $("#face").append($(ul));
//                     $("#faceul").append($(li));
//                 }
//             });
//         },"json");
// });
// var son= $("li[id^='sonCategoryId']>a").click(function () {
//     $("li[id^='sonCategoryId']").removeClass('active');
//     //点击列表处于选中状态
//     $(this).parent().addClass('active');
//     $("#sonCategory_hide").val($(this).parent().prop("id"));
//     var category = $("#category_hide").val();
//     var sonCategory = $("#sonCategory_hide").val();
//     //清空图片列表
//     $("#face").empty();
//     $.post("/mySpringBoot2X/listType",
//         {category:category,sonCategory:sonCategory},function (data) {
//             $.each(data, function (key,values) {
//                 if (key=="getPageNum"){
//                     $("#pageNum").val(values);
//                 }
//                 if(key=="getPages"){
//                     $("#totalPage").val(values);
//                 }
//                 if (key=="list"){
//                     var ul='<ul id="faceul"></ul>';
//                     var li="";
//                     var id="";
//                     $.each(values, function (i, value) {
//                         id='id'+value.id;
//                         li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' + '<br><span>类型:'+value.category+'</span><br>' + '<span>风格:'+value.sonCategory+'</span></li>';
//                     });
//
//                     $("#face").append($(ul));
//                     $("#faceul").append($(li));
//                 }
//             });
//         },"json");
// });
// var next = $(".page3").on("click",function () {
//     var pageNum = $("#pageNum").val();//当前页
//     var totalPage = $("#totalPage").val();//总页数
//     //判断是否是最后一页
//     if (parseInt(pageNum)<parseInt(totalPage)){
//         pageNum=parseInt(pageNum)+1;//下一页
//         var category = $("#category_hide").val();
//         var sonCategory = $("#sonCategory_hide").val();
//         //清空图片列表
//         $("#face").empty();
//         $.post("/mySpringBoot2X/listType",
//             {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
//             function (data) {
//                 $.each(data, function (key,values) {
//                     if (key=="getPageNum"){
//                         $("#pageNum").val(values);
//                     }
//                     if(key=="getPages"){
//                         $("#totalPage").val(values);
//                     }
//                     if (key=="list"){
//                         var ul='<ul id="faceul"></ul>';
//                         var li="";
//                         var id="";
//                         $.each(values, function (i, value) {
//                             id='id'+value.id;
//                             li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' + '<br><span>类型:'+value.category+'</span><br>' + '<span>风格:'+value.sonCategory+'</span></li>';
//                         });
//
//                         $("#face").append($(ul));
//                         $("#faceul").append($(li));
//                     }
//                 });
//             },"json");
//     }
// });
// var previous = $(".page2").on("click",function () {
//     var pageNum = $("#pageNum").val();//当前页
//     var totalPage = $("#totalPage").val();//总页数
//     //判断是否是第一页
//     if (parseInt(pageNum)>1){
//         pageNum=parseInt(pageNum)-1;//上一页
//         var category = $("#category_hide").val();
//         var sonCategory = $("#sonCategory_hide").val();
//         //清空图片列表
//         $("#face").empty();
//         $.post("/mySpringBoot2X/listType",
//             {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
//             function (data) {
//                 $.each(data, function (key,values) {
//                     if (key=="getPageNum"){
//                         $("#pageNum").val(values);
//                     }
//                     if(key=="getPages"){
//                         $("#totalPage").val(values);
//                     }
//                     if (key=="list"){
//                         var ul='<ul id="faceul"></ul>';
//                         var li="";
//                         var id="";
//                         $.each(values, function (i, value) {
//                             id='id'+value.id;
//                             li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' + '<br><span>类型:'+value.category+'</span><br>' + '<span>风格:'+value.sonCategory+'</span></li>';
//                         });
//
//                         $("#face").append($(ul));
//                         $("#faceul").append($(li));
//                     }
//                 });
//             },"json");
//     }
// });
// var first = $(".page1").on("click",function () {
//     var pageNum = $("#pageNum").val();//当前页
//     var totalPage = $("#totalPage").val();//总页数
//     //判断是否是第一页
//     if (parseInt(pageNum)>1){
//         pageNum=1;//最后一页
//         var category = $("#category_hide").val();
//         var sonCategory = $("#sonCategory_hide").val();
//         //清空图片列表
//         $("#face").empty();
//         $.post("/mySpringBoot2X/listType",
//             {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
//             function (data) {
//                 $.each(data, function (key,values) {
//                     if (key=="getPageNum"){
//                         $("#pageNum").val(values);
//                     }
//                     if(key=="getPages"){
//                         $("#totalPage").val(values);
//                     }
//                     if (key=="list"){
//                         var ul='<ul id="faceul"></ul>';
//                         var li="";
//                         var id="";
//                         $.each(values, function (i, value) {
//                             id='id'+value.id;
//                             li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' + '<br><span>类型:'+value.category+'</span><br>' + '<span>风格:'+value.sonCategory+'</span></li>';
//                         });
//
//                         $("#face").append($(ul));
//                         $("#faceul").append($(li));
//                     }
//                 });
//             },"json");
//     }
// });
// var last = $(".page4").on("click",function () {
//     var pageNum = $("#pageNum").val();//当前页
//     var totalPage = $("#totalPage").val();//总页数
//     //判断是否是最后一页
//     if (parseInt(pageNum)<parseInt(totalPage)){
//         pageNum=totalPage;//最后一页
//         var category = $("#category_hide").val();
//         var sonCategory = $("#sonCategory_hide").val();
//         //清空图片列表
//         $("#face").empty();
//         $.post("/mySpringBoot2X/listType",
//             {pageNum:pageNum,totalPage:totalPage, category:category,sonCategory:sonCategory},
//             function (data) {
//                 $.each(data, function (key,values) {
//                     if (key=="getPageNum"){
//                         $("#pageNum").val(values);
//                     }
//                     if(key=="getPages"){
//                         $("#totalPage").val(values);
//                     }
//                     if (key=="list"){
//                         var ul='<ul id="faceul"></ul>';
//                         var li="";
//                         var id="";
//                         $.each(values, function (i, value) {
//                             id='id'+value.id;
//                             li+='<li id="'+id+'"><a href="#"><img src=".'+value.url+'">' + '<br><span>类型:'+value.category+'</span><br>' + '<span>风格:'+value.sonCategory+'</span></li>';
//                         });
//
//                         $("#face").append($(ul));
//                         $("#faceul").append($(li));
//                     }
//                 });
//             },"json");
//     }
// });