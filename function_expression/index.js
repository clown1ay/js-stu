/**
//函数声明方法创建函数
function fn(){
    alert("123")
};
fn();
alert(fn.name)//在firefox,safari,chrome,opera中可以访问到function  name


//函数的变量提升
sayHi();
function sayHi(){
    alert("hello")
}



//使用函数表达式创建函数
//使用函数表达式创建函数时变量无法提升
sayHi();  //抛出错误
var sayHi = function () {
    alert("hello")
}



//函数声明的方式
//运行正常，js高级程序设计176页有问题
if(false)
{
    function sayHi(){
        alert("hello");
    };
}
else
{
    function sayHi(){
        alert("hi");
    };
}
sayHi()
//函数表达式
//根据condition  //true or false
var sayhi;
if(false)
{
    sayHi = function(){
        alert("hello");
    };
}
else
{
    sayHi = function(){
        alert("hi");
    };
}
sayHi();



//将函数当做其他函数的返回值
function Person(name,age){
    var o = new Object();
    o.name = name;
    o.age = age;
    return o;
};
//闭包
//闭包是一种有权访问另一个函数作用域变量的函数
function comparion(age){
    return function (Object1,Object2) {
        var value1 = Object1.age;
        var value2 = Object2.age;
        if(value1 < value2) {
            alert("-1");
        }else if(value1 > value2){
            alert("1");
        }else if(value1 = value2){
            alert("0");
        }
    };
};

var fn = comparion();


var person1 = new Person("zhailiang",19);
alert(person1.age)
var person2 = new Person("hulingling",18);
alert(person2.age)
fn(person1,person2);



//js函数的递归
function factorial(num){
    if(num <= 1){
        return 1;
    }
    else{
        return num*factorial(num - 1)
    }
}
alert(factorial(4))
//更好的方式
on factorial(num){
    if(num <= 1){
        return 1;
    }
    else{
        return num*arguments.callee(num - 1)
    }
}
alert(factorial(4))

//严格模式下arguments.callee会报错、
 //故使用命名函数表达式

var factorial = (function f(num){
    if(num <= 1){
        return 1;
    }
    else{
        return num*f(num - 1)
    }
});
alert(factorial(4))


//闭包函数this访问其所在作用域
var name = "window";
var object = {
    name : "zhailiang",
    sayName : function(){
        var that = this;
        return that.name
    }
}
alert(object.sayName())
*/
//js没有块及作用域 使用匿名函数模仿块及作用域
(function(){
    for(var i=0;i<2;i++)
    {
        alert(i)
    }
})();
alert(i)




















































































