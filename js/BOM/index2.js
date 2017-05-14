/**
 * Created by asus on 2017/5/6.

//location位置操作
setTimeout(function(){
    location.assign("www.9thnet.com")
})
//更加常用的是location.href("")
 //这样的位置操作会使历史记录新增一项新的记录，这样就可以“后退”到之前的页面

//使用replace()方法则不会后退到之前的界面
setTimeout(function(){
    location.replace("https://www.baidu.com/")
},1000)
//reload()重新加载当前显示的界面
location.reload()//没有参数可能从当前的缓存中加载
location.reload(ture)//带有参数从服务器中加载


// navigator对象

    //  检测插件(不支持ie)
function hasPlugin(name){
    name = name.toLowerCase();
    for(i=0;i<navigator.plugins.length;i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
            return true;
        }
    }
}

alert(hasPlugin("Flash"))
alert(hasPlugin("QuickTime"))
 */
//screen对象









































































