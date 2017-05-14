/*
//工厂模式创建对象
function createPerson(name,age,job){
    var o = new Object();  //实例化一个o对象
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name)
    }
    return o;//返回对象
}

var person1 = createPerson("zhailiang",19,"student"); //函数返回一个实例化对象
var person2 = createPerson("hulingling",19,"student")
alert(typeof(person1));
person1.sayName();



//构造函数模式创建对象
function Person(name,age,job){  //Person 为构造函数
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name)
    }
}

var person1 = new Person("zhailiang",19,"student");   //new操作符不能忘记
var person2 = new Person("hulingling",19,"student");
alert(person1 instanceof Object);  //person1既是Object又是Person的实例  其继承与Object
alert(person1 instanceof Person);



 //原型对象的问题，在原型中使用引用类型，实例中的修改会被反映到所有的实例中，这就是原型创建对象的问题
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


 //构造函数和原型相结合
 //对于引用类型只修改其实例的属性
 //用于解决原型对象所产生的上个代码问题问题
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
 alert(person1.frends);  //hulingling，goudan
 alert(person2.frends)   //hulingling
 */
//稳妥对象，安全性
//除了调用对象内部的函数无法访问对象的数据成员，没有this没有new,提供了安全性
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







































































