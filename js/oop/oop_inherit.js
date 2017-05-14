/*

//实现原型链的一种基本模式
//在用原型链实现继承时，不能
function SuperType(){
    this.property = true;
};

SuperType.prototype.getSuperValue=function(){
    return this.property
};

function SubType(){
    SubType.property = false;
};

SubType.prototype = new SuperType();//继承了SuperType  SubType的原型是SuperType的实例

SubType.prototype.getSubValue=function(){
    return this.property
};

var instance = new SubType();
alert(instance.getSuperValue());//true  是SuperType的property


//确定原型和实例的关系
//instance是Object，SuperType，SubType的原型
alert(instance instanceof Object);      //true
alert(instance instanceof SuperType);   //true
alert(instance instanceof SubType);     //true
//只要出现在原型链中的原型都是该原型链所派生的实例的原型
alert(Object.prototype.isPrototypeOf(instance)); //true
alert(SuperType.prototype.isPrototypeOf(instance)); //true
alert(SubType.prototype.isPrototypeOf(instance)); //true




//在子类型中添加新的定义方法，新方法将屏蔽原来的方法，
//需要注意的是必须在用SuperType的实例替换了原型之后定义
function SuperType(){
    this.property = true;
};

SuperType.prototype.getSuperValue=function(){
    return this.property
};

function SubType(){
    SubType.property = false;
};

SubType.prototype = new SuperType();//继承了SuperType  SubType的原型是SuperType的实例

//添加了新方法
SubType.prototype.getSubValue=function(){
    return this.property
};

//重写超类型中的方法
SuperType.prototype.getSuperValue = function () {
    return false;
}

var instance = new SubType();
alert(instance.getSuperValue());//true  是SuperType的property
 */


//借用构造函数继承（伪造对象或者经典继承）
function SuperType(){
    this.color = ["red","green"];
}

function SubType() {
    //使用call继承超类型
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.color.push("black");
alert(instance1.color);

var instance2 = new SubType();
alert(instance2.color);












































