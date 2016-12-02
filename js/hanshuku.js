/*getClass(classname)获取指定类名的元素
classname 指定要获取的类名
range     指定要获取的范围，具体的一个Dom对象
思路：
1、判断浏览器
    docment.getElementsByClassName
2、获取所有元素
3、元素的类名是否等于指定的类名
4、符合条件的存储到数组
5、返回数组*/

 function getClass(classname,range) {
 	range=range||document;
 	// range=range?range:document;
 	// range=range===undefined?document:range;
 	if(document.getElementsByClassName)
 	  {
 	  	// w3c
 	  	// alert(range)
 	  	return range.getElementsByClassName(classname);
 	  }
 	else{
 		// ie6-8
 		 var arr=[];
         var all=range.getElementsByTagName("*");
         for(i=0;i<all.length;i++)
            {
            	if(panduan(arr[i].className,classname));
            	  {
            	  	arr.push(all[i]);
            	  }
            }
        return arr
 	  }
 	  function panduan(ss,aa){
 	    var sss=ss.split(" ")
 	    for(var i=0;i<ss.length;i++){
 		    if(sss[i]===aa){
 			return true;
 		    }
 		    return false;
 	     }
    }
 }

 
/*$(selecter,range)获取元素
  $(".one")获取指定类名的元素
  $("#one")获取指定id元素
  $("div")获取指定标签名的元素
1、初始化参数range
2、selecter 去空
3、判断第一个字符
4、获取元素
  */



 function $(selecter,range) {
  if(typeof selecter=="function"){
     window.onload=function(){
      selecter();
     }
  }else if(typeof selecter=="string"){
     range=range||document;
    // range=range?range:document;
    // range=range===undefined?document:range;
    // 去空  不兼容
    // selecter=selecter.trim();
    if(selecter.charAt(0)=="."){
        return getClass(selecter.substring(1),range);
    }else if(selecter.charAt(0)=="#"){
        return range.getElementById(selecter.substring(1),range);
    }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
        return range.getElementsByTagName(selecter,range);
    }else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(selecter)){
        return document.createElement(selecter.slice(1,-1));
    }
  }
   
}



/*
getContent(obj,value)
获取或设置obj的文本
obj 指定对象
value 要设置的文本
1、判断获取、设置
2、获取
   判断浏览器是否支持属性
   return obj.innerText
   return obj.textContent
3、设置
   判断浏览器是否支持属性
   obj.innerText=value
   obj.textContent=value
*/


function getContent(obj,value){
    if(value){
        // 设置
        if(obj.innerText){
           return obj.innerText=value;
        }
        else{
            return obj.innerContent=value;
        }
    }
    else{
        if(obj.innerText){
           return obj.innerText;
        }
        else{
            return obj.innerContent;
        }
    }
}






/*
getStyle(obj,attr)  获取指定元素样式
obj   指定对象
attr  样式属性
1、判断浏览器是否支持
2、返回属性值
*/



function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }
    else{
        return obj.currentStyle[attr];
    }
}





/*
getChilds(obj,type)    获取指定对象子元素集合
obj   指定的对象
type  指定获取子元素节点的类型
       true元素节点
       false元素节点和有意义的文本
1、获取获取所有子元素
2、节点类型
*/



function getChilds(obj,type){
  type=type==undefined?true:type;
  var arr=[];
  var childs=obj.childNodes;
  if(type){
    for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1){
      arr.push(childs[i]);
      }
     }
    }
    else{
      for(var i=0;i<childs.length;i++){
       if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
       arr.push(childs[i]);
        }
      }
    }
  return arr;
}














function getll(obj,aa){
    var bb=aa.nextSibling;
    while(!bb.nodeType==1||undefined){
       bb=bb.nextSibling;
    }
    if(bb==undefined){
      document.body.appendChild(obj);
    }
    document.body.insertBefore(obj,bb);
}


// 第一个元素
function firstChild(obj){
  return getChilds(obj)[0];
}

// 最后一个元素
function lastChild(obj){
  var childs=getChilds(obj);
  return childs[childs.length-1]
}


// 任意一个元素
function numChild(obj,num){
  var childs=getChilds(obj);
  return childs[num]
}




/*
getNext(obj)  获取obj的元素节点
1、先获取兄弟节点
  没有  false
2、有
  判断兄弟节点  nodeType !=1
  next=nex.nextSibling
  nodeType==null  false
  重复 步骤2
  nodeType==1
  返回next
*/


function getNext(obj,type){
  type=type==undefined?true:type;
  if(type){
    var next=obj.nextSibling;
    if(next==null){
      return false;
    }
    while(next.nodeType==3||next.nodeType==8){
      next=next.nextSibling;
      if(next==null){
        return false;
      }
    }
    return next;
  }else if(type==false){
    var next=obj.nextSibling;
    if(next==null){
      return false;
    }
    while(!(next.nodeType==1||(next.nodeType==3&&next.nodeValue.replace(/^\s*|\s*$/g,"")))){
      next=next.nextSibling;
      if(next==null){
        return false;
      }
    }
    return next;
  }
    
}




function getPrevious(obj,type){
  type=type==undefined?true:type;
  if(type){
    var next=obj.previousSibling;
    if(next==null){
      return false;
    }
    while(next.nodeType==3||next.nodeType==8){
      next=next.previousSibling;
      if(next==null){
        return false;
      }
    }
    return next;
  }else if(type==false){
    var next=obj.previousSibling;
    if(next==null){
      return false;
    }
    while(!(next.nodeType==1||(next.nodeType==3&&next.nodeValue.replace(/^\s*|\s*$/g,"")))){
      next=next.previousSibling;
      if(next==null){
        return false;
      }
    }
    return next;
  }
    
}






/*
insertAfter(newobj,obj,type)
将newobj插入到obj后面
obj  插入的位置
type  类型
      true  元素节点
      false元素节点和有意义的文本
1、获取obj的下一个兄弟元素next
2、获取obj的父元素 parent
3、next false
   parent。appendChild（newobj）
4、parent。insertBefore（newobj，next）

*/
function insertBefore(obj,newobj){
  var parent=beforeObj.parentNode;
  parent.insertBefore(obj,beforeObj);
}


function insertAfter(newobj,obj,type){
  var next=getNext(obj,type);
  var parent=obj.parentNode;
  if(next){
    parent.insertBefore(newobj,next);
  }else{
    parent.appendChild(newobj);
  }
}

/*操作轮播图*/
  function nodeLunbo(obj,left,right,imgBox,imgone){
    var lunbo=obj;
    var left=left;
    var right=right;
    var imgBox=imgBox;
    var width=parseInt(getStyle(imgone,"width"));
    var t=setInterval(move,1500);
    var n=2;
    function move(){
      animate(imgBox,{left:-width*n},600,function(){
        for(var i=1;i<n;i++){
          var imgFirst=getFirst(imgBox);
          imgBox.appendChild(imgFirst);
        }
        imgBox.style.left="0px";
      });
    }
    lunbo.onmouseover=function(){
      clearInterval(t);
    }
    lunbo.onmouseout=function(){
      t=setInterval(move,1500);
    }
    left.onclick=function(){
      for(var i=1;i<=n;i++){
        var last=getLast(imgBox);
        var First=getFirst(imgBox);
        insertBefore(last,First);
      }
      imgBox.style.left=-width*n+"px";
      animate(imgBox,{left:0},600)
    }
    right.onclick=function(){
      move();
    }
  }
  var obj=$(".lunbo");
  for(var i=0;i<obj.length;i++){
    nodeLunbo(obj[i]);
  }


function addEvent(event,type,fun){
  if(obj.attachEvent){
    obj.attachEvent("on"+event,fun);
  }else{
    obj.addEventListener(event,fun,false)
  }
}


function removeEvent(obj,event,fun){
  if(obj.attachEvent){
    return obj.attachEvent("on"+event,fun);
  }else{
    return obj.removeEventListener(event,fun,false)
  }
}

function mouseWheel(obj,down,up){
  if(obj.attachEvent){
    obj.attachEvent("onmouseWheel",scrollFun);
  }else{
    obj.addEventListener("mousewheel",scrollFun,false);
    obj.addEventListener("DOMMouseScroll",scrollFun,false);
  }
  
function scrollFun(){
  var e=e||window.event;
  if(e.preventDefault){
    e.preventDefault()
  }else{
    e.returnValue=false;
  }
  var nub=e.wheelDelta||e.detail;
  if(nub==120||nub==-3){
    //改变this值，让this指向obj；
    up.call(obj);
  }else if(nub==-120||nub==-3){
    down.call(obj);
  }
 }
}
//15.hover
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
  if(parent.contains){
    return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
  if(getEvent(e).type=="mouseover"){
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
  }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
  }
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
