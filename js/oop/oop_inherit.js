/*

//ʵ��ԭ������һ�ֻ���ģʽ
//����ԭ����ʵ�ּ̳�ʱ������
function SuperType(){
    this.property = true;
};

SuperType.prototype.getSuperValue=function(){
    return this.property
};

function SubType(){
    SubType.property = false;
};

SubType.prototype = new SuperType();//�̳���SuperType  SubType��ԭ����SuperType��ʵ��

SubType.prototype.getSubValue=function(){
    return this.property
};

var instance = new SubType();
alert(instance.getSuperValue());//true  ��SuperType��property


//ȷ��ԭ�ͺ�ʵ���Ĺ�ϵ
//instance��Object��SuperType��SubType��ԭ��
alert(instance instanceof Object);      //true
alert(instance instanceof SuperType);   //true
alert(instance instanceof SubType);     //true
//ֻҪ������ԭ�����е�ԭ�Ͷ��Ǹ�ԭ������������ʵ����ԭ��
alert(Object.prototype.isPrototypeOf(instance)); //true
alert(SuperType.prototype.isPrototypeOf(instance)); //true
alert(SubType.prototype.isPrototypeOf(instance)); //true




//��������������µĶ��巽�����·���������ԭ���ķ�����
//��Ҫע����Ǳ�������SuperType��ʵ���滻��ԭ��֮����
function SuperType(){
    this.property = true;
};

SuperType.prototype.getSuperValue=function(){
    return this.property
};

function SubType(){
    SubType.property = false;
};

SubType.prototype = new SuperType();//�̳���SuperType  SubType��ԭ����SuperType��ʵ��

//������·���
SubType.prototype.getSubValue=function(){
    return this.property
};

//��д�������еķ���
SuperType.prototype.getSuperValue = function () {
    return false;
}

var instance = new SubType();
alert(instance.getSuperValue());//true  ��SuperType��property
 */


//���ù��캯���̳У�α�������߾���̳У�
function SuperType(){
    this.color = ["red","green"];
}

function SubType() {
    //ʹ��call�̳г�����
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.color.push("black");
alert(instance1.color);

var instance2 = new SubType();
alert(instance2.color);












































