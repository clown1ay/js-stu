/**
 * Created by asus on 2017/4/9.

//����λ��(���ڵ����Ͻ�λ�ã�
 //����д������firefox�в�֧��window.screenLeft,window.screenTop����ʹ�ö�Ԫѡ���
 //�����ж��Ƿ���������������ѡ��
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
alert("(" + leftPos + "." + topPos +  ")");


//���ڵ��ƶ�(һ�㱻��ֹ)8j8
//window.moveTo(para,para) window.moveBy(para,para)


//���ڴ�С
    //�ƶ����Ƽ����� http://t.cn/zOZs0Tz
var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;

if(typeof pageWidth != "number")
{
    if(document.compatMode = "CSS1Compat" )//�ж��Ƿ�Ϊ��׼ģʽ
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


//���ڴ�С�ĵ���
//resizeTo(para,para


//�����ʹ򿪴���window.open
//�ִ�������������˵���_blank�������γ����佫window.open()��ֵnull
//firefox chrome���ǽ�window.open()��ֵ��null
var awin = window.open("https://www.baidu.com/","_blank",
            "height=40,width=300,top=10,left=10,resizable=yes")
if(awin == null)
{
    alert("���ڱ�����")
}


//��Ъ���úͳ�ʱ����
//�����һ������Ϊ������������Ϊ�ַ���������������ʧ
setTimeout(function(){
    alert("a")
},1000)
//����serTimeout��������һ��Id,����ͨ�����Id��������ʱ����
var timeoutId = setTimeout(function(){
    alert("a")
},1000);//a
clearTimeout(timeoutId);
timeoutId();//undefined

 */
//��Ъ����
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

















































