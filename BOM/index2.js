/**
 * Created by asus on 2017/5/6.

//locationλ�ò���
setTimeout(function(){
    location.assign("www.9thnet.com")
})
//���ӳ��õ���location.href("")
 //������λ�ò�����ʹ��ʷ��¼����һ���µļ�¼�������Ϳ��ԡ����ˡ���֮ǰ��ҳ��

//ʹ��replace()�����򲻻���˵�֮ǰ�Ľ���
setTimeout(function(){
    location.replace("https://www.baidu.com/")
},1000)
//reload()���¼��ص�ǰ��ʾ�Ľ���
location.reload()//û�в������ܴӵ�ǰ�Ļ����м���
location.reload(ture)//���в����ӷ������м���


// navigator����

    //  �����(��֧��ie)
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
//screen����









































































