/**
 * Created by asus on 2017/4/11.

var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;

//ʹ��with
//with �����򻯶�α�дͬһ������Ĺ���
//"use strict"���ϸ�ģʽ���޷�ʹ��with���׳�����
with (location){
    var qs = search.substring(1);
    var hostName = hostname;
    var url = href;
}
alert(qs)
alert(hostName)
alert(url)



//lable �����ڴ�������ӱ�ǩ

//ECMAScript�����⴫�����Ĳ����Ķ��٣�Ҳ������������
//����ͨ���������������Ӷ��ֱ�ʵ���ʵ��Ĺ���,������������ذɣ���������ȫ������
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


//arguments������ԺͲ���һ��ʹ��
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



//����һ��arguments�����ֵ��Զ��������Ӧ�Ĳ�����ֵ��ͬ

function doAdd(num1,num2){
    arguments[1] = 10;//��ֵ֮�󣬶�Ӧ�Ĳ�����ֵҲ�ı䣬ֻ��ֵ�ı䣬���ڲ�ͬ���ڴ档��֮���ı�����޷��ı��Ӧarguments��ֵ
    alert(arguments[0] + num2)
}

doAdd(20,30)//20+10//�ϸ�ģʽ֮��arguments��ֵ���벻��ִ��



 */

//ECMAScript�޷��봫ͳ������ʵ�����أ�ECMAScript����û��ǩ�����޷��������أ�ֻ��������һ��
//������ǩ�������������ܵĲ��������ͺ�����
function add(num){
    alert(num + 100)
}

function add(num){
    alert(num + 200)
}

add(100) //300  add���������������Σ�����ĺ�����Ḳ��֮ǰ�ĺ�������
















































































