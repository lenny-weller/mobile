window.onload=function(){
     var dl=$(".dl");
	 var divl=$(".divl");
	 for(i=0;i<divl.length;i++){
	 	dl[i].index=i;
	 	dl[i].onmouseover=function(){
	 		divl[this.index].style.display="block";
	 	}
	 	dl[i].onmouseout=function(){
	 		divl[this.index].style.display="none";
	 	}
	 }

     var sjyyt=$(".sjyyt");
	 var divr=$(".divr");
	 for(i=0;i<divr.length;i++){
	 	sjyyt[i].index=i;
	 	sjyyt[i].onmouseover=function(){
	 		divr[this.index].style.display="block";
	 	}
	 	sjyyt[i].onmouseout=function(){
	 		divr[this.index].style.display="none";
	 	}
	 }



// 城市
var city=$(".city")[0];
var cs=$(".cs",city)[0];
var citynr=$(".citynr",city)[0];
var body=$("body")[0];
cs.onclick=function(){
	citynr.style.display="block"
}
body.onclick=function(e){
    var e=e||window.event;
    var obj=e.target||e.srcElement;
    if(obj.className!="cs"){
    	$(".citynr")[0].style.display="none";
    }
}





	 var item=$(".item");
	 var list=$(".list");
	 for(i=0;i<item.length;i++){
	 	item[i].index=i;
	 	item[i].onmouseover=function(){
	 		list[this.index].style.display="block";
	 	}
	 	item[i].onmouseout=function(){
	 		list[this.index].style.display="none";
	 	}
	 }



	var middle=$(".bannermid")[0];
	var imgs=$("a",$(".imgbox")[0]);
	var lis=$("li",$(".imglist")[0]);
	var btnr=$(".btnr")[0];
	var btnl=$(".btnl")[0];
	//页面初始化
	// imgs[0].style.zIndex=10;
	// lis[0].style.background="#0085d0";
	// //自动轮播
	// //记录当前图片下标
	// var now=0;
	// var t=setInterval(move,2000);
	// //鼠标移入停  移出轮播
	// middle.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// middle.onmouseout=function(){
	// 	t=setInterval(move,2000);
	// }


	// for(var i=0;i<lis.length;i++){
 //        lis[i].index=i;
 //        lis[i].onclick=function(){
 //        	for(var i=0;i<imgs.length;i++){
 //        		// imgs[i].style.zIndex=5;
 //                animate(imgs[i],{opacity:0});
 //        		lis[i].style.background="";
 //        	}
 //        lis[this.index].style.background="#0085d0";
	// 	// imgs[this.index].style.zIndex=10;
 //        animate(imgs[this.index],{opacity:1});
	// 	now=this.index;
 //        }
	// }
	

	// function move(){
	// 	now++;
	// 	if(now==imgs.length){
	// 		now=0;
	// 	}
	// 	for(var i=0;i<imgs.length;i++){
	// 		// imgs[i].style.zIndex=5;
 //            animate(imgs[i],{opacity:0});
	// 		lis[i].style.background="";
	// 	}
	// 	lis[now].style.background="#0085d0";
	// 	// imgs[now].style.zIndex=10;
 //        animate(imgs[now],{opacity:1});
	// }

 //    function movel(){
	// 	now--;
	// 	if(now<0){
	// 		now=imgs.length-1;
	// 	}
	// 	for(var i=0;i<imgs.length;i++){
	// 		// imgs[i].style.zIndex=5;
 //            animate(imgs[i],{opacity:0});
	// 		lis[i].style.background="";
	// 	}
	// 	lis[now].style.background="#0085d0";
	// 	// imgs[now].style.zIndex=10;
 //        animate(imgs[now],{opacity:1});
	// }

 // btnr.onclick=function(){
 //  	move()
 //  }
 //  btnl.onclick=function(){
 //  	movel()
 //  }



//无缝轮播
var mw=parseInt(getStyle(middle,"width"));
for(var i=0;i<imgs.length;i++){
    if(i==0){
        continue;
    }
    imgs[i].style.left=mw+"px";  
    
}

lis[0].style.background="#0085d0"; 

var now=0;
var next=0;
var t=setInterval(move,3000);


 middle.onmouseover=function(){
		clearInterval(t);
	}
 middle.onmouseout=function(){
		t=setInterval(move,3000);
	}


for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
	if(now>this.index){
		imgs[this.index].style.left=-mw+"px";	    
        animate(imgs[now],{left:mw});
        animate(imgs[this.index],{left:0});
    }else if(now<this.index){
        imgs[this.index].style.left=mw+"px";	    
        animate(imgs[now],{left:-mw});
        animate(imgs[this.index],{left:0});
    }else{
    	return;
    }
        lis[now].style.background="";
	    lis[this.index].style.background="#0085d0";
        now=this.index;
        next=this.index;
	}
}


function move(){
	next++;
	if(next==imgs.length){
		next=0;
		}

	imgs[next].style.left=mw+"px";
	lis[now].style.background="";
	lis[next].style.background="#0085d0";
    animate(imgs[now],{left:-mw});
    animate(imgs[next],{left:0},function(){flag=true});
    now=next;
}



function movel(){
	next--;
	if(next<0){
		next=imgs.length-1;
		}
	imgs[next].style.left=-mw+"px";
	lis[now].style.background="";
	lis[next].style.background="#0085d0";
    animate(imgs[now],{left:mw});
    animate(imgs[next],{left:0},function(){flag=true});
    now=next;
}

// btnr.onclick=function(){
// 	move();
// }
// btnl.onclick=function(){
// 	movel();
// }


var flag=true;
btnr.onclick=function(){
	if(flag){
		move();
		flag=false;
	}
}
btnl.onclick=function(){
	if(flag){
		movel();
		flag=false;
	}
}






















// 节点轮播
var lunbo=$("#gd");
var imgbx=$(".imgbx")[0];
var imgz=$("img",imgbx);
var as=$("a",imgbx);
var aw=parseInt(getStyle(imgz[0],"width"))+parseInt(getStyle(as[0],"border-right"));
var btr=$(".btr")[0];
var btl=$(".btl")[0];
imgbx.style.width=aw*imgz.length+"px";
var r=setInterval(move1,2000);
function move1(){
    animate(imgbx,{left:-aw},600,function(){
    	var first=firstChild(imgbx);
    	imgbx.appendChild(first);
    	imgbx.style.left="0px";
    })
}

function move1l(){
	var first=firstChild(imgbx);
	var last=lastChild(imgbx);
	imgbx.insertBefore(last,first);
	imgbx.style.left=-aw+"px";
	animate(imgbx,{left:0},600);

}


lunbo.onmouseover=function(){
		clearInterval(r);
	}
lunbo.onmouseout=function(){
		r=setInterval(move1,2000);
	}

btr.onclick=function(){
	move1();
}
btl.onclick=function(){
	move1l();
}






// 公告轮播

var gglb=$(".gglb");
var ggnr=$(".ggnr")[0];
var liz=$("li",ggnr);
// var as=$("a",ggnr);
var flag3=true;
var liw=parseInt(getStyle(liz[0],"width"));
var ggleft=$(".ggleft")[0];
var ggright=$(".ggright")[0];
ggnr.style.width=liw*liz.length+"px";
var e=setInterval(moves,3000);
function moves(){
    animate(ggnr,{left:-liw},600,function(){
    	var first=firstChild(ggnr);
    	ggnr.appendChild(first);
    	ggnr.style.left="0px";
    	flag3=true;
    })
}

function move1s(){
	var first=firstChild(ggnr);
	var last=lastChild(ggnr);
	ggnr.insertBefore(last,first);
	ggnr.style.left=-liw+"px";
	animate(ggnr,{left:0},600);

}


gglb.onmouseover=function(){
		clearInterval(e);
	}
gglb.onmouseout=function(){
		e=setInterval(moves,3000);
	}

ggleft.onclick=function(){
	moves();
}
ggright.onclick=function(){
	move1s();
}







// 边界
var zxkf=$(".zxkf")[0];
var zxzx=$(".zxzx",zxkf)[0];
var cjwt=$(".cjwt",zxkf)[0];
var tsyj=$(".tsyj",zxkf)[0];

zxzx.onmouseover=function(){
	animate(zxzx,{left:-84},500);
}
zxzx.onmouseout=function(){
	animate(zxzx,{left:-22},500);
}
cjwt.onmouseover=function(){
	animate(cjwt,{left:-84},500);
}
cjwt.onmouseout=function(){
	animate(cjwt,{left:-22},500);
}
tsyj.onmouseover=function(){
	animate(tsyj,{left:-84},500);
}
tsyj.onmouseout=function(){
	animate(tsyj,{left:-22},500);
}


// 图片晃动
var bot=$(".bot")[0];
var ywbot=$(".ywbot")[0];
var pic=$(".picture",bot);
var pict=$(".picture",ywbot);
pic[0].onmouseover=function(){
	animate(pic[0],{left:73},250);
}
pic[0].onmouseout=function(){
	animate(pic[0],{left:78},250);
}
pic[1].onmouseover=function(){
	animate(pic[1],{left:73},250);
}
pic[1].onmouseout=function(){
	animate(pic[1],{left:78},250);
}
pic[2].onmouseover=function(){
	animate(pic[2],{left:73},250);
}
pic[2].onmouseout=function(){
	animate(pic[2],{left:78},250);
}
pic[3].onmouseover=function(){
	animate(pic[3],{left:73},250);
}
pic[3].onmouseout=function(){
	animate(pic[3],{left:78},250);
}
pic[4].onmouseover=function(){
	animate(pic[4],{left:73},250);
}
pic[4].onmouseout=function(){
	animate(pic[4],{left:78},250);
}
pic[5].onmouseover=function(){
	animate(pic[5],{left:73},250);
}
pic[5].onmouseout=function(){
	animate(pic[5],{left:78},250);
}
pict[0].onmouseover=function(){
	animate(pict[0],{left:73},250);
}
pict[0].onmouseout=function(){
	animate(pict[0],{left:78},250);
}
pict[1].onmouseover=function(){
	animate(pict[1],{left:73},250);
}
pict[1].onmouseout=function(){
	animate(pict[1],{left:78},250);
}
pict[2].onmouseover=function(){
	animate(pict[2],{left:73},250);
}
pict[2].onmouseout=function(){
	animate(pict[2],{left:78},250);
}
pict[3].onmouseover=function(){
	animate(pict[3],{left:73},250);
}
pict[3].onmouseout=function(){
	animate(pict[3],{left:78},250);
}
pict[4].onmouseover=function(){
	animate(pict[4],{left:73},250);
}
pict[4].onmouseout=function(){
	animate(pict[4],{left:78},250);
}
pict[5].onmouseover=function(){
	animate(pict[5],{left:73},250);
}
pict[5].onmouseout=function(){
	animate(pict[5],{left:78},250);
}





$(document).ready(function(){
           console.log($("img.lazy").length)
            $("img.lazy").lazyload({
          threshold : -100
                });
          })


}

 