/**
 * Created by asus on 2017/4/10.



var allElement = document.getElementsByTagName("*");
alert(allElement)
for(i=0;i<allElement.length;i++)
{
    document.writeln(allElement[i])
} */

var _div = document.getElementById("myDiv");
alert("123")
alert(_div.tagName)
alert(_div.tagName == _div.nodeName)