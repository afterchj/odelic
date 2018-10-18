/**
 * Created by nannan.li on 2018/10/8.
 * banner自适应
 */
$(function(){

    function resize() {
        //获取屏幕宽度
        var windowWidth = $(window).width();
        //判断屏幕的大小
        var isSmallScreen = windowWidth < 768;
        //根据大小为界面上的每一张轮播图设置背景
        $('.banner').each(function (i,item) {
            //因为获取的是dom对象，要把DOM对象转换成jquery对象
            var $item = $(item);
            //根据屏幕的大小来获取不同的图片 data()函数就是专门获取data属性的
            var imgSrc =
                isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            //获得data属性后，给div设置背景图片
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            // 针对移动端，尺寸需要等比例变化，所以小屏幕使用img方式 ，在div中添加img标签
            if (isSmallScreen){
                $item.html('<img src="'+imgSrc+'" alt="小图"/>')
            } else{
                // 当屏幕由小到大切换时，清空div中的img标签
                $item.empty();
            }
        });
    }

    $(window).on('resize', resize).trigger('resize');


});
