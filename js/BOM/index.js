/**
 * Created by asus on 2017/4/9.

//窗口位置(窗口的右上角位置）
 //兼容写法。在firefox中不支持window.screenLeft,window.screenTop属性使用二元选择符
 //首先判断是否存在这个方法，再选择
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
alert("(" + leftPos + "." + topPos +  ")");


//窗口的移动(一般被禁止)8j8
//window.moveTo(para,para) window.moveBy(para,para)


//窗口大小
    //移动端推荐文章 http://t.cn/zOZs0Tz
var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;

if(typeof pageWidth != "number")
{
    if(document.compatMode = "CSS1Compat" )//判断是否为标准模式
    {
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    }else
    {
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
};
alert("the window width:" + pageWidth);
alert("the window height:" + pageHeight);


//窗口大小的调节
//resizeTo(para,para


//导航和打开窗口window.open
//现代浏览器均内置了弹出_blank窗口屏蔽程序，其将window.open()赋值null
//firefox chrome均是将window.open()赋值了null
var awin = window.open("https://www.baidu.com/","_blank",
            "height=40,width=300,top=10,left=10,resizable=yes")
if(awin == null)
{
    alert("窗口被屏蔽")
}


//间歇调用和超时调用
//建议第一个参数为函数，不建议为字符串，导致性能损失
setTimeout(function(){
    alert("a")
},1000)
//调用serTimeout函数返回一个Id,可以通过这个Id清除这个超时调用
var timeoutId = setTimeout(function(){
    alert("a")
},1000);//a
clearTimeout(timeoutId);
timeoutId();//undefined

 */
//间歇调用
var a = 0;
var max = 5;
var intervalId = null;
function add(){
    a++;
    if(a == max)
    {
        clearInterval(intervalId)
        alert(a)//5
    }
}
intervalId = setInterval(add,1000)

















































