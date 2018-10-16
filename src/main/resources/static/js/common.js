var title = new Array();
var start = 1;
var end = 4;
function show(dl) {
    if (Number(dl)) {
        //clearTimeout(theTimer);
        start = dl;
    }
    for (var i = 1; i < (end + 1); i++) {
        if (i == start) {
            document.getElementById("alter").src = "./img/home_" + i + ".jpg";
            document.getElementById("img" + i).className = "numOver";
        }
        else {
            document.getElementById("img" + i).className = "num1";
        }
    }
    if (start == end) {   //设置下一个显示的图片
        start = 1;
    }
    else {
        start++;
    }
}
var theTimer = setInterval(show, 3000);   //设置定时器，显示下一张图片
//页面加载时运行函数show()