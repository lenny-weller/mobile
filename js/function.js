 /*
 getClass(classname) 获取指定类名的元素
 classname  指定要获取元素的classname
 思路：
 1.判断浏览器
 2.获取所有的元素
 3.元素的类名是否为指定的类名
 4.符合条件的储存到数组
 5.返回数组

*/
   function gc(classname){
      if(document.getElementsByClassName){
        return document.getElementsByClassName(classname);
      }else{
        var cn=document.getElementsByTagName("*");
        var arr=[];
        for(var i=0;i<cn.length;i++){
          if(cn[i]==classname){
            arr.push(cn[i]);
          }
        }
        return arr;
      }
   }



 /*$函数*/
function $(selecter,range){
  if(typeof selecter=="function"){
    window.onload=function(){
      selecter()
    }
  }else if(typeof selecter=="string"){
    range=range||document;
    //selecter=selecter.trim()不兼容
    if(selecter.charAt(0)=="."){
      return gc(selecter.substring(1),range);
    }else if(selecter.charAt(0)=="#"){
      return range.getElementById(selecter.substring(1));
    }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
      return range.getElementsByTagName(selecter);
    }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
      return document.createElement(selecter,slice(1,-1));
    }
  }
}


  /*
  getContent(obj,value)
  获取或者这只obj的文本
  obj   指定对象
  value   颜色指定的文本
  1、判断获取还是设置
     参数个数
     value
  2、判断浏览器是否支持属性
     return obj.innertext=value
     return obj.textContent=value

  */
  function getContent(obj,value){
    if(value){
    if(obj.innerText){
      obj.innerText=value;
    }else{
      obj.textContent=value;
    }
  }else{
      if(obj.innerText){
        return obj.innerText;
      }else{
        return obj.textContent;
      }
    }
  }


/*
getStyle(obj,attr)
1、判断浏览器是否支持属性
2、返回属性值
*/
function getStyle(obj,attr){
  if(window.getComputedStyle){
    return getComputedStyle(obj,null)[attr];
  }else{
    return obj.currentStyle[attr];
  }
}


/*
getChilds(obj)   获取指定对象的子元素集合
obj 指定的对象
type 指定获取子元素的类型
     true  元素节点
     false 元素节点和有意义的文本
1、获取子元素
2、节点类型  1
*/
function getChilds(obj,type){
  type=type===undefined?true:type;
  var arr=[];
  var childs=obj.childNodes;  
  if(type){
  for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1){
      arr.push(childs[i]);
    }
  }
}else{
  for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
      arr.push(childs[i]);
  }
}
}
return arr
}

 // 获取第一个元素
         function firstChild(obj){
            return getChilds(obj)[0];
         }

// 获取最后一个元素
         function lastChild(obj){
          var a=getChilds(obj)
          return getChilds(obj)[a.length-1];
          
         }

// 随机获取元素
         function randomChild(obj,i){
          return getChilds(obj)[i];
         }

// 在下一个元素插入
/*getNext(obj) 获取obj的元素节点
1、先获取下一个兄弟节点next
2、没有   false
   有     判断兄弟节点 nodeType！=1
          next=next.nextSibling
          next==null  false
          重复  步骤2
          nodeType==1
          返回next
*/
         function getNext(obj){
          var next=obj.nextSibling;
          if(next==null){ 
            return next=false;
          }
          while(next.nodeType==3||next.nodeType==8){            
            next=next.nextSibling;
            if(next==null){
              return false;
            }
          }
          return next;
         }


/*
  insertAfter(newobj,obj,type)
  将newobj插到obj后面
  newobj  要插入的元素
  obj     要插入的位置
  type    类型
          true  元素节点
          false 元素节点和有意义的文本
  1、获取下一个兄弟元素next
  2、获取obj的父元素parent
  3、next  false
     parent.appendChild(newobj)
  4、parent.insertBefore(newobj,next)

*/
function insertAfter(newobj,obj,type){
  var next=getNext(obj,type);
  var parent=obj.parentNode;
  if(next){
    parent.insertBefore(newobj,next);
  }else{
    parent.appendChild(newobj);
  }
}



function getPrevious(obj){
          var previous=obj.previousSibling;
          if(previous==null){ 
            return next=false;
          }
          while(previous.nodeType==3||previous.nodeType==8){            
            previous=previous.previousSibling;
            if(previous==null){
              return false;
            }
          }
          return previous;
         }


//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
  if(overfun){
    obj.onmouseover=function  (e) {
      if(checkHover(e,obj)){
        overfun.call(obj,[e]);
      }
    }
  }
  if(outfun){
    obj.onmouseout=function  (e) {
      if(checkHover(e,obj)){
        outfun.call(obj,[e]);
      }
    }
  }
}
function getEvent (e) {
  return e||window.event;
}




