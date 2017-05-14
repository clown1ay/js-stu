/* 对象的赋值变量值
    var obj1 = new Object();
    var obj2 = obj1;
    obj1.name = "zhailaing";
    alert(obj2.name);   //zhailiang

//普通的数据类型复制值
    var num1 = 5;
    var num2 = num1;
    alert(num2);    //5
    num1 = num1+2;
    alert(num1);    //7
    alert(num2);    //5


var scope = "globe";
function t(){
    alert(scope);
    var scope = "local";  //内部定义变量将提前
    alert(scope);
};
t();//输出undefined local




var scope = "globe";
if(true)
{
    var scope = "local";
    alert(scope);
}
alert(scope);    //输出两个值均为local  js没有块作用域 从而局部变量local的申明改变了全局变量globe



function t(canshu){
    if(canshu){
        var s = "isscope"
        for(i=0;i<2;i++)
            ;
    }
        alert(i);
}
t(true);
alert(s);//不使用var定义变量，则定义为全局变量














