/**
//��������������������
function fn(){
    alert("123")
};
fn();
alert(fn.name)//��firefox,safari,chrome,opera�п��Է��ʵ�function  name


//�����ı�������
sayHi();
function sayHi(){
    alert("hello")
}



//ʹ�ú������ʽ��������
//ʹ�ú������ʽ��������ʱ�����޷�����
sayHi();  //�׳�����
var sayHi = function () {
    alert("hello")
}



//���������ķ�ʽ
//����������js�߼��������176ҳ������
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
//�������ʽ
//����condition  //true or false
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



//�������������������ķ���ֵ
function Person(name,age){
    var o = new Object();
    o.name = name;
    o.age = age;
    return o;
};
//�հ�
//�հ���һ����Ȩ������һ����������������ĺ���
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



//js�����ĵݹ�
function factorial(num){
    if(num <= 1){
        return 1;
    }
    else{
        return num*factorial(num - 1)
    }
}
alert(factorial(4))
//���õķ�ʽ
on factorial(num){
    if(num <= 1){
        return 1;
    }
    else{
        return num*arguments.callee(num - 1)
    }
}
alert(factorial(4))

//�ϸ�ģʽ��arguments.callee�ᱨ��
 //��ʹ�������������ʽ

var factorial = (function f(num){
    if(num <= 1){
        return 1;
    }
    else{
        return num*f(num - 1)
    }
});
alert(factorial(4))


//�հ�����this����������������
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
//jsû�п鼰������ ʹ����������ģ�¿鼰������
(function(){
    for(var i=0;i<2;i++)
    {
        alert(i)
    }
})();
alert(i)




















































































