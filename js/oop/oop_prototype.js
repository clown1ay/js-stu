/*
//����ģʽ��������
function createPerson(name,age,job){
    var o = new Object();  //ʵ����һ��o����
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name)
    }
    return o;//���ض���
}

var person1 = createPerson("zhailiang",19,"student"); //��������һ��ʵ��������
var person2 = createPerson("hulingling",19,"student")
alert(typeof(person1));
person1.sayName();



//���캯��ģʽ��������
function Person(name,age,job){  //Person Ϊ���캯��
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name)
    }
}

var person1 = new Person("zhailiang",19,"student");   //new��������������
var person2 = new Person("hulingling",19,"student");
alert(person1 instanceof Object);  //person1����Object����Person��ʵ��  ��̳���Object
alert(person1 instanceof Person);



 //ԭ�Ͷ�������⣬��ԭ����ʹ���������ͣ�ʵ���е��޸Ļᱻ��ӳ�����е�ʵ���У������ԭ�ʹ������������
 function Person() {
    this.name = "zhailiang";
    this.age = 19;
 }
 Person.prototype= {
    constructor: Person,
    frends : ["hulingling"],
    sayName: function () {
        alert(this.name)
    }
 }

 var person1 = new Person();
 var person2 = new Person();
 person1.frends.push("goudan");
 alert(person2.frends);//hulingling,goudan
 alert(person1.frends);//hulingling,goudan
 alert(person1.frends == person2.frends);//true


 //���캯����ԭ������
 //������������ֻ�޸���ʵ��������
 //���ڽ��ԭ�Ͷ������������ϸ�������������
 function Person(){
    this.frends = ["hulingling"]
 };

 Person.prototype={
    name : "zhailiang",
    job : "student",
 };

 var person1 = new Person();
 var person2 = new Person();
 person1.frends.push("goudan");
 alert(person1.frends);  //hulingling��goudan
 alert(person2.frends)   //hulingling
 */
//���׶��󣬰�ȫ��
//���˵��ö����ڲ��ĺ����޷����ʶ�������ݳ�Ա��û��thisû��new,�ṩ�˰�ȫ��
function Person(name,age){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function(){
       alert(name);
    }
    return o;
}

var person1 = Person("zhailiang",19);
person1.sayName();//zhailiang
alert(person1.name)//zhailiang







































































