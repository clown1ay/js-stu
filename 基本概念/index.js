/**
 * Created by asus on 2017/4/11.

var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;

//使用with
//with 用来简化多次编写同一个对象的工作
//"use strict"在严格模式下无法使用with将抛出错误
with (location){
    var qs = search.substring(1);
    var hostName = hostname;
    var url = href;
}
alert(qs)
alert(hostName)
alert(url)



//lable 可以在代码中添加标签

//ECMAScript不在意传进来的参数的多少，也不在意其类型
//可以通过其接受任意参数从而分别实现适当的功能,算是完成了重载吧，但不是完全的重载
function doAdd(){
    if(arguments.length == 1)
    {
        alert(arguments[0] + 10);
    }
    else if(arguments.length == 2)
    {
        alert(arguments[0] + arguments[1])
    }
}

doAdd(10);  //20
doAdd(20,30)//50


//arguments对象可以和参数一起使用
function doAdd(num1,num2){
    if(arguments.length == 1)
    {
        alert(arguments[0] + num1);
    }
    else if(arguments.length == 2)
    {
        alert(arguments[0] + num2)
    }
}

doAdd(10);//10+10
doAdd(20,30)//20+30



//还有一点arguments对象的值永远和它所对应的参数的值相同

function doAdd(num1,num2){
    arguments[1] = 10;//赋值之后，对应的参数的值也改变，只是值改变，其在不同的内存。反之，改变参数无法改变对应arguments的值
    alert(arguments[0] + num2)
}

doAdd(20,30)//20+10//严格模式之下arguments赋值代码不会执行



 */

//ECMAScript无法想传统意义上实现重载，ECMAScript函数没有签名，无法做到重载，只能像上例一样
//函数的签名————接受的参数的类型和数量
function add(num){
    alert(num + 100)
}

function add(num){
    alert(num + 200)
}

add(100) //300  add函数被定义了两次，后定义的函数便会覆盖之前的函数定义
















































































