/* ����ĸ�ֵ����ֵ
    var obj1 = new Object();
    var obj2 = obj1;
    obj1.name = "zhailaing";
    alert(obj2.name);   //zhailiang

//��ͨ���������͸���ֵ
    var num1 = 5;
    var num2 = num1;
    alert(num2);    //5
    num1 = num1+2;
    alert(num1);    //7
    alert(num2);    //5


var scope = "globe";
function t(){
    alert(scope);
    var scope = "local";  //�ڲ������������ǰ
    alert(scope);
};
t();//���undefined local




var scope = "globe";
if(true)
{
    var scope = "local";
    alert(scope);
}
alert(scope);    //�������ֵ��Ϊlocal  jsû�п������� �Ӷ��ֲ�����local�������ı���ȫ�ֱ���globe



function t(canshu){
    if(canshu){
        var s = "isscope"
        for(i=0;i<2;i++)
            ;
    }
        alert(i);
}
t(true);
alert(s);//��ʹ��var�������������Ϊȫ�ֱ���














