
	var dsb1=abc("ccjjtt")
	var dianji=abc("dianji")[0]
	var dianji1=dianji.getElementsByTagName("li")
	var num=0
  var jiantou=$(".jiantou")[0]
  var jiantou1=$(".jiantou1")[0]
  var jiantou2=$(".jiantou2")[0]
	function change(){
       num++
       if(num>=dsb1.length){
       	num=0
       }
       for (var i = 0; i < dsb1.length; i++) {
       	dsb1[i].style.zIndex=0
       	dianji1[i].id=""
       };
        dsb1[num].style.zIndex=5
        dianji1[num].id="ddd"
	}
    var t=setInterval(change,2000)
    
    var banner=abc("banner")[0]
    banner.onmouseover=function(){
    	clearInterval(t)
     
    }
    banner.onmouseout=function(){
    	t=setInterval(change,2000)
      
    }
jiantou.onmouseover=function(){
     
      jiantou1.style.display="block"
      jiantou2.style.display="block"
    }
    jiantou.onmouseout=function(){
     
      jiantou1.style.display="none"
      jiantou2.style.display="none"
    }
jiantou2.onclick=function(){
  change()
}
jiantou1.onclick=function(){
  num--
       if(num<=-1){
        num=3
       }
       for (var i = 0; i < dsb1.length; i++) {
        dsb1[i].style.zIndex=0
        dianji1[i].id=""
       };
        dsb1[num].style.zIndex=5
        dianji1[num].id="ddd"
}

jiantou1.onmouseover=function(){
  jiantou1.style.background="#e41359"
}
jiantou1.onmouseout=function(){
  jiantou1.style.background=""
}
jiantou2.onmouseover=function(){
  jiantou2.style.background="#e41359"
}
jiantou2.onmouseout=function(){
  jiantou2.style.background=""
}

    for (var k = 0; k < dianji1.length; k++) {
	dianji1[k].aa=k//记录元素下标
	dianji1[k].onclick=function(){
       //this.aa当前元素下标
       for(var j=0;j<dsb1.length;j++){
        dianji1[j].id=""
       	dsb1[j].style.zIndex=0
       }
        this.id="ddd"
	    dsb1[this.aa].style.zIndex=5
	    num=this.aa
      }
};




//搜索框value
  var text=abc("sousuo4")[0]
  text.onfocus=function(){
    if(text.value=="夏季美裙趴"){
      text.value=""
    }
  }
   text.onblur=function(){
    if(text.value==""){
    text.value="夏季美裙趴"
    }
   } 



   //线动效 
var kuang=$(".kuan")
var tops=$(".top")
var left=$(".left")
var right=$(".right")
var bottom=$(".bottom")
for (var i = 0; i < kuang.length; i++) {
  kuang[i].aa=i
  kuang[i].onmouseover=function  () {
    var ow=this.offsetWidth
    var oh=this.offsetHeight
    animate(tops[this.aa],{width:ow},500)
    animate(bottom[this.aa],{width:ow},500)
    animate(left[this.aa],{height:oh},500)
    animate(right[this.aa],{height:oh},500)
  }
  kuang[i].onmouseout=function  () {
    var ow=this.offsetWidth
    var oh=this.offsetHeight
    animate(tops[this.aa],{width:0},500)
    animate(bottom[this.aa],{width:0},500)
    animate(left[this.aa],{height:0},500)
    animate(right[this.aa],{height:0},500)
  }
};



var chaozhi2=$(".chaozhi2")
var chaozhi3=$(".chaozhi-3")
    for (var k = 0; k < chaozhi2.length; k++) {
  chaozhi2[k].aa=k//记录元素下标
  chaozhi2[k].onmouseover=function(){
       //this.aa当前元素下标
       for(var j=0;j<chaozhi3.length;j++){
        chaozhi2[j].id=""
        chaozhi3[j].style.zIndex=0
       }
        this.id="dd"
      chaozhi3[this.aa].style.zIndex=2
      // num=this.aa
      }
};


var baihuo5=$(".baihuo-5")
var baihuo3=$(".baihuo-2")
    for (var k = 0; k < baihuo5.length; k++) {
  baihuo5[k].aa=k//记录元素下标
  baihuo5[k].onmouseover=function(){
       //this.aa当前元素下标
       for(var j=0;j<baihuo3.length;j++){
        baihuo5[j].id=""
        baihuo3[j].style.zIndex=0
       }
        this.id="d"
      baihuo3[this.aa].style.zIndex=2
      num=this.aa
      }
};


var chaozhi4=$(".chaozhi-61")
for (var i = 0; i < chaozhi4.length; i++) {
  chaozhi4[i].aa=i
  chaozhi4[i].onmouseover=function(){
    chaozhi4[this.aa].style.opacity=0.7
  }
  chaozhi4[i].onmouseout=function(){
    chaozhi4[this.aa].style.opacity=1
  }
};



var shishang1=$(".shishang-1")
var leftbtn=$(".shishang10")[0]
var rightbtn=$(".shishang13")[0]
for (var i = 1; i < shishang1.length; i++) {
  shishang1[i].style.left="158px"
};
var now=0
  var next=0
  function moveLeft(){
    next++
    if(next>=3){
      next=0
    }
    animate(shishang1[now],{left:-158},500)
    shishang1[next].style.left="158px"
    animate(shishang1[next],{left:0},500)
    shishang1[now].style.zIndex=0
      shishang1[next].style.zIndex=2
    now=next
  } 
   leftbtn.onclick=function(){
      moveLeft()
    }
    rightbtn.onclick=function(){
      next--
    if(next<=-1){
      next=2
    }
    animate(shishang1[now],{left:158},500)
    shishang1[next].style.left="-158px"
    animate(shishang1[next],{left:0},500)
 
    shishang1[now].style.zIndex=0
      shishang1[next].style.zIndex=2
    now=next
    }

//22222222222
var bb=$(".bb")
var leftbtn1=$(".shishang10")[1]
var rightbtn1=$(".shishang13")[1] 
for (var i = 1; i < bb.length; i++) {
  bb[i].style.left="158px"
};
var now=0
  var next=0
  function moveLeft1(){
    next++
    if(next>=3){
      next=0
    }
    animate(bb[now],{left:-158},500)
    bb[next].style.left="158px"
    animate(bb[next],{left:0},500)
    bb[now].style.zIndex=0
      bb[next].style.zIndex=2
    now=next
  } 
   leftbtn1.onclick=function(){
      moveLeft1()
    }
    rightbtn1.onclick=function(){
      next--
    if(next<=-1){
      next=2
    }
    animate(bb[now],{left:158},500)
    bb[next].style.left="-158px"
    animate(bb[next],{left:0},500)
 
    bb[now].style.zIndex=0
      bb[next].style.zIndex=2
    now=next
    }



    //33333
    var dd=$(".dd")
var leftbtn2=$(".shishang10")[2]
var rightbtn2=$(".shishang13")[2] 
for (var i = 1; i < dd.length; i++) {
  dd[i].style.left="158px"
};
var now=0
  var next=0
  function moveLeft2(){
    next++
    if(next>=3){
      next=0
    }
    animate(dd[now],{left:-158},500)
    dd[next].style.left="158px"
    animate(dd[next],{left:0},500)
    dd[now].style.zIndex=0
      dd[next].style.zIndex=2
    now=next
  } 
   leftbtn2.onclick=function(){
      moveLeft2()
    }
    rightbtn2.onclick=function(){
      next--
    if(next<=-1){
      next=2
    }
    animate(dd[now],{left:158},500)
    dd[next].style.left="-158px"
    animate(dd[next],{left:0},500)
 
    dd[now].style.zIndex=0
      dd[next].style.zIndex=2
    now=next
    } 


       //444444444
    var ff=$(".ff")
var leftbtn3=$(".shishang10")[3]
var rightbtn3=$(".shishang13")[3] 
for (var i = 1; i < ff.length; i++) {
  ff[i].style.left="158px"
};
var now=0
  var next=0
  function moveLeft3(){
    next++
    if(next>=3){
      next=0
    }
    animate(ff[now],{left:-158},500)
    ff[next].style.left="158px"
    animate(ff[next],{left:0},500)
    ff[now].style.zIndex=0
      ff[next].style.zIndex=2
    now=next
  } 
   leftbtn3.onclick=function(){
      moveLeft3()
    }
    rightbtn3.onclick=function(){
      next--
    if(next<=-1){
      next=2
    }
    animate(ff[now],{left:158},500)
    ff[next].style.left="-158px"
    animate(ff[next],{left:0},500)
 
    ff[now].style.zIndex=0
      ff[next].style.zIndex=2
    now=next
    }    

    //55555555555555
    var ee=$(".ee")
var leftbtn4=$(".shishang10")[4]
var rightbtn4=$(".shishang13")[4] 
for (var i = 1; i < ee.length; i++) {
  ee[i].style.left="158px"
};
var now=0
  var next=0
  function moveLeft4(){
    next++
    if(next>=3){
      next=0
    }
    animate(ee[now],{left:-158},500)
    ee[next].style.left="158px"
    animate(ee[next],{left:0},500)
    ee[now].style.zIndex=0
      ee[next].style.zIndex=2
    now=next
  } 
   leftbtn4.onclick=function(){
      moveLeft4()
    }
    rightbtn4.onclick=function(){
      next--
    if(next<=-1){
      next=2
    }
    animate(ee[now],{left:158},500)
    ee[next].style.left="-158px"
    animate(ee[next],{left:0},500)
 
    ee[now].style.zIndex=0
      ee[next].style.zIndex=2
    now=next
    }
//666666666666666666666
    var jj=$(".jj")
var leftbtn5=$(".shishang10")[5]
var rightbtn5=$(".shishang13")[5] 
for (var i = 1; i < jj.length; i++) {
  jj[i].style.left="158px"
};
var now=0
  var next=0
  function moveLeft5(){
    next++
    if(next>=3){
      next=0
    }
    animate(jj[now],{left:-158},500)
    jj[next].style.left="158px"
    animate(jj[next],{left:0},500)
    jj[now].style.zIndex=0
      jj[next].style.zIndex=2
    now=next
  } 
   leftbtn5.onclick=function(){
      moveLeft5()
    }
    rightbtn5.onclick=function(){
      next--
    if(next<=-1){
      next=2
    }
    animate(jj[now],{left:158},500)
    jj[next].style.left="-158px"
    animate(jj[next],{left:0},500)
 
    jj[now].style.zIndex=0
      jj[next].style.zIndex=2
    now=next
    }
    //7777777777777777777777
    var ll=$(".ll")
var leftbtn6=$(".shishang10")[6]
var rightbtn6=$(".shishang13")[6] 
for (var i = 1; i < ll.length; i++) {
  ll[i].style.left="158px"
};
var now=0
  var next=0
  function moveLeft6(){
    next++
    if(next>=3){
      next=0
    }
    animate(ll[now],{left:-158},500)
    ll[next].style.left="158px"
    animate(ll[next],{left:0},500)
    ll[now].style.zIndex=0
      ll[next].style.zIndex=2
    now=next
  } 
   leftbtn6.onclick=function(){
      moveLeft6()
    }
    rightbtn6.onclick=function(){
      next--
    if(next<=-1){
      next=2
    }
    animate(ll[now],{left:158},500)
    ll[next].style.left="-158px"
    animate(ll[next],{left:0},500)
 
    ll[now].style.zIndex=0
      ll[next].style.zIndex=2
    now=next
    }
    //88888888888888888888888
    var nn=$(".nn")
var leftbtn7=$(".shishang10")[7]
var rightbtn7=$(".shishang13")[7] 
for (var i = 1; i < nn.length; i++) {
  nn[i].style.left="158px"
};
var now=0
  var next=0
  function moveLeft7(){
    next++
    if(next>=3){
      next=0
    }
    animate(nn[now],{left:-158},500)
    nn[next].style.left="158px"
    animate(nn[next],{left:0},500)
    nn[now].style.zIndex=0
      nn[next].style.zIndex=2
    now=next
  } 
   leftbtn7.onclick=function(){
      moveLeft7()
    }
    rightbtn7.onclick=function(){
      next--
    if(next<=-1){
      next=2
    }
    animate(nn[now],{left:158},500)
    nn[next].style.left="-158px"
    animate(nn[next],{left:0},500)
 
    nn[now].style.zIndex=0
      nn[next].style.zIndex=2
    now=next
    }

    //9999999999999999999999999
    var pp=$(".pp")
var leftbtn8=$(".shishang10")[8]
var rightbtn8=$(".shishang13")[8] 
for (var i = 1; i < pp.length; i++) {
  pp[i].style.left="158px"
};
var now=0
  var next=0
  function moveLeft8(){
    next++
    if(next>=3){
      next=0
    }
    animate(pp[now],{left:-158},500)
    pp[next].style.left="158px"
    animate(pp[next],{left:0},500)
    pp[now].style.zIndex=0
      pp[next].style.zIndex=2
    now=next
  } 
   leftbtn8.onclick=function(){
      moveLeft8()
    }
    rightbtn8.onclick=function(){
      next--
    if(next<=-1){
      next=2
    }
    animate(pp[now],{left:158},500)
    pp[next].style.left="-158px"
    animate(pp[next],{left:0},500)
 
    pp[now].style.zIndex=0
      pp[next].style.zIndex=2
    now=next
    }


var banner10=$(".banner10")[0]
banner10.onmouseover=function(){
  animate(banner10,{right:10},300)
} 
banner10.onmouseout=function(){
  animate(banner10,{right:0},300)
} 



var shishang101=$(".shishang-101") 
var shishang102=$(".shishang-100")[0]
var shishang100=shishang102.getElementsByTagName("li")

 

  shishang100[0].onclick=function(){

       
       animate(shishang101[0],{left:0},500)
       animate(shishang101[1],{left:-390},500)
       shishang100[1].id=""
     shishang100[0].id="xiaodian"

   }    
 shishang100[1].onclick=function(){
       animate(shishang101[0],{left:390},500)
       animate(shishang101[1],{left:0},500)
       shishang100[0].id=""
     shishang100[1].id="xiaodian"

   }

var shishang14=$(".shishang14")[0]
var jian1=$(".jian1")[0]
var jian2=$(".jian2")[0]
shishang14.onmouseover=function(){
  jian1.style.display="block"
  jian2.style.display="block"
}
shishang14.onmouseout=function(){
  jian1.style.display="none"
  jian2.style.display="none"
}
 

   jian1.onclick=function(){
      

       
       animate(shishang101[0],{left:0},500)
       animate(shishang101[1],{left:-390},500)
       shishang100[1].id=""
     shishang100[0].id="xiaodian"

   
    }
    jian2.onclick=function(){
     // shishang101[1].style.left="-390px"
       animate(shishang101[0],{left:390},500)
       animate(shishang101[1],{left:0},500)
       shishang100[0].id=""
     shishang100[1].id="xiaodian"
    }
//11111111111111111111111111111111
var shishang1011=$(".shishang-1012") 
var shishang1021=$(".shishang-1001")[0]
var shishang1001=shishang1021.getElementsByTagName("li")

  
var shishang142=$(".shishang14")[3]
var jian11=$(".jian11")[0]
var jian21=$(".jian21")[0]
shishang142.onmouseover=function(){
  jian11.style.display="block"
  jian21.style.display="block"
}
shishang142.onmouseout=function(){
  jian11.style.display="none"
  jian21.style.display="none"
}
jian11.onclick=shishang1001[0].onclick=function(){
        animate(shishang1011[0],{left:0},500)
       animate(shishang1011[1],{left:-390},500)
       shishang1001[1].id=""
     shishang1001[0].id="xiaodian"
   }    
jian21.onclick=shishang1001[1].onclick=function(){
       animate(shishang1011[0],{left:390},500)
       animate(shishang1011[1],{left:0},500)
       shishang1001[0].id=""
     shishang1001[1].id="xiaodian"

   }
   // 1111111111111111111111111111111111
   var shishang1013=$(".shishang-1013") 
var shishang10219=$(".shishang-1001")[1]
var shishang10013=shishang10219.getElementsByTagName("li")

  
var shishang1423=$(".shishang14")[4]
var jian1111=$(".jian1111")[0]
var jian2111=$(".jian2111")[0]
shishang1423.onmouseover=function(){
  jian1111.style.display="block"
  jian2111.style.display="block"
}
shishang1423.onmouseout=function(){
  jian1111.style.display="none"
  jian2111.style.display="none"
}
jian1111.onclick=shishang10013[0].onclick=function(){
        animate(shishang1013[0],{left:0},500)
       animate(shishang1013[1],{left:-390},500)
       shishang10013[1].id=""
     shishang10013[0].id="xiaodian"
   }    
jian2111.onclick=shishang10013[1].onclick=function(){
       animate(shishang1013[0],{left:390},500)
       animate(shishang1013[1],{left:0},500)
       shishang10013[0].id=""
     shishang10013[1].id="xiaodian"

   }
   // 333333333333333333333333333
   var shishang10131=$(".shishang-10131") 
var shishang102191=$(".shishang-1001")[2]
var shishang100131=shishang102191.getElementsByTagName("li")

  
var shishang14231=$(".shishang14")[5]
var jian11111=$(".jian11111")[0]
var jian21111=$(".jian21111")[0]
shishang14231.onmouseover=function(){
  jian11111.style.display="block"
  jian21111.style.display="block"
}
shishang14231.onmouseout=function(){
  jian11111.style.display="none"
  jian21111.style.display="none"
}
jian11111.onclick=shishang100131[0].onclick=function(){
        animate(shishang10131[0],{left:0},500)
       animate(shishang10131[1],{left:-390},500)
       shishang100131[1].id=""
     shishang100131[0].id="xiaodian"
   }    
jian21111.onclick=shishang100131[1].onclick=function(){
       animate(shishang10131[0],{left:390},500)
       animate(shishang10131[1],{left:0},500)
       shishang100131[0].id=""
     shishang100131[1].id="xiaodian"

   }
 // 44444444444444444444444444444444444
var shishang101311=$(".shishang-101311") 
var shishang1021911=$(".shishang-1001")[3]
var shishang1001311=shishang1021911.getElementsByTagName("li")

  
var shishang142311=$(".shishang14")[6]
var jian111111=$(".jian111111")[0]
var jian211111=$(".jian211111")[0]
shishang142311.onmouseover=function(){
  jian111111.style.display="block"
  jian211111.style.display="block"
}
shishang142311.onmouseout=function(){
  jian111111.style.display="none"
  jian211111.style.display="none"
}
jian111111.onclick=shishang1001311[0].onclick=function(){
        animate(shishang101311[0],{left:0},500)
       animate(shishang101311[1],{left:-390},500)
       shishang1001311[1].id=""
     shishang1001311[0].id="xiaodian"
   }    
jian211111.onclick=shishang1001311[1].onclick=function(){
       animate(shishang101311[0],{left:390},500)
       animate(shishang101311[1],{left:0},500)
       shishang1001311[0].id=""
     shishang1001311[1].id="xiaodian"

   }
    // 2222222222222222222222222222
var shishang10111=$(".shishang-10111") 
var shishang10211=$(".shishang-10011")[0]
var shishang10011=shishang10211.getElementsByTagName("li")

  
var shishang141=$(".shishang14")[7]
var jian111=$(".jian111")[0]
var jian211=$(".jian211")[0]
shishang141.onmouseover=function(){
  jian111.style.display="block"
  jian211.style.display="block"
}
shishang141.onmouseout=function(){
  jian111.style.display="none"
  jian211.style.display="none"
}
 jian111.onclick=shishang10011[0].onclick=function(){
        animate(shishang10111[0],{left:0},500)
       animate(shishang10111[1],{left:-390},500)
       shishang10011[1].id=""
     shishang10011[0].id="xiaodian"
   }    
jian211.onclick=shishang10011[1].onclick=function(){
       animate(shishang10111[0],{left:390},500)
       animate(shishang10111[1],{left:0},500)
       shishang10011[0].id=""
     shishang10011[1].id="xiaodian"

   }


    // 侧导
    var cedao1=$(".cedao-2")
    var cedao2=$(".cedao-1")
    var cedao3=$(".cedao-3")
    var cedao=$(".cedao")[0]
    var now1=0
    for(var i=0;i<cedao1.length;i++){
  cedao1[i].aa=i
  cedao1[i].onmouseover=function(){
    cedao2[this.aa].style.display="block"
  }
  cedao1[i].onmouseout=function(){
    cedao2[this.aa].style.display="none"
  }
}
document.documentElement.scrollTop=1
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
 window.onscroll=function(){
    
    for (var i = 0; i < cedao3.length; i++) {
      if(cedao3[i].offsetTop<=obj.scrollTop+100){
        for(var j=0;j<cedao2.length;j++){
          cedao2[j].style.display="none"
        }
        cedao2[i].style.display="block"
        now1=i
      }
    };
    if(obj.scrollTop>=1100){
       cedao.style.display="block"
    }else{
      cedao.style.display="none"
    }
  } 

  for (var i = 0; i < cedao2.length; i++) {
    cedao2[i].aa=i

    cedao2[i].onclick=function(){

          now1=this.aa
      //obj.scrollTop=dsb[this.aa].offsetTop
      animate(obj,{scrollTop:cedao3[this.aa].offsetTop},600)
          cedao2[this.aa].style.display="block"
    }
  }



  var wenzi=$(".wenzi1")[0]
 var wenzi1=$(".wenzizi")[0]
 var xxx=$(".xxx")
 var yyy=$(".yyy")
 var zzz=$(".zzz1")[0]
 var dsd=$(".xxx")[1]
 var dsd1=$(".xxx")[3]
 var dsd2=$(".xxx")[5]
 var dsd3=$(".xxx")[7]
 var dsd4=$(".xxx")[9]
 addEvent(wenzi1,"mouseover",function(){
     
      wenzi.style.display="block"
      zzz.style.display="block"
    })
addEvent(wenzi1,"mouseout",function(){
     
      wenzi.style.display="none"
      zzz.style.display="none"
    })   
for(var i=0;i<xxx.length;i++){
   xxx[i].bb=i
   addEvent(xxx[i],"mouseover",function(){
     yyy[this.bb].style.cssText="width:0px;height:0px;"
     // zzz[this.bb].style.display="block"
     wenzi.style.display="block"
   })
  addEvent(xxx[i],"mouseout",function(){
     yyy[this.bb].style.cssText="width:9px;height:14px;"
     // zzz[this.bb].style.display="none"
     wenzi.style.display="none"
   })

 }
addEvent(dsd,"mouseover",function(){
  wenzi.style.cssText="height:385px;"
})
addEvent(dsd,"mouseout",function(){
  wenzi.style.cssText="height:435px;"
})
addEvent(dsd1,"mouseover",function(){
  wenzi.style.cssText="top:42px;height:385px;"
})
addEvent(dsd1,"mouseout",function(){
  wenzi.style.cssText="top:0px;height:435px;"
})
addEvent(dsd2,"mouseover",function(){
  wenzi.style.cssText="height:385px;"
})
addEvent(dsd2,"mouseout",function(){
  wenzi.style.cssText="height:435px;"
})
addEvent(dsd3,"mouseover",function(){
  wenzi.style.cssText="top:42px;height:385px;"
})
addEvent(dsd3,"mouseout",function(){
  wenzi.style.cssText="top:0px;height:435px;"
})
addEvent(dsd4,"mouseover",function(){
  wenzi.style.cssText="top:84px;height:385px;"
})
addEvent(dsd4,"mouseout",function(){
  wenzi.style.cssText="top:0px;height:435px;"
})
//上面微信图
 var daohang5=$(".daohang5")[0]
 var img1=$(".img1")[0]
 var daohang4=$(".daohang4")[0]
 var daohang51=$(".daohang5")[1]
 var img2=$(".img2")[0]
 var daohang41=$(".daohang4")[1]
 var img3=$(".img3")[0]
 var daohang511=$(".daohang5")[2]
 var daohang411=$(".daohang4")[2]
 addEvent(daohang5,"mouseover",function(){
  img1.style.display="block"
 })
 addEvent(daohang5,"mouseout",function(){
  img1.style.display="none"
 })
  addEvent(daohang4,"mouseover",function(){
  img1.style.display="block"
 })
 addEvent(daohang4,"mouseout",function(){
  img1.style.display="none"
 })

 addEvent(daohang51,"mouseover",function(){
  img2.style.display="block"
 })
 addEvent(daohang51,"mouseout",function(){
  img2.style.display="none"
 })
  addEvent(daohang41,"mouseover",function(){
  img2.style.display="block"
 })
 addEvent(daohang41,"mouseout",function(){
  img2.style.display="none"
 })


 addEvent(daohang511,"mouseover",function(){
  img3.style.display="block"
 })
 addEvent(daohang511,"mouseout",function(){
  img3.style.display="none"
 })
   addEvent(daohang411,"mouseover",function(){
  img3.style.display="block"
 })
 addEvent(daohang411,"mouseout",function(){
  img3.style.display="none"
 })

 var banner4=$(".banner4")
 var lmcjt=$(".lmcjt1")
 for(var i=0;i<banner4.length;i++){
  banner4[i].aa=i
  banner4[i].onmouseover=function(){
    
      lmcjt[this.aa].style.display="block"
    
  }
   banner4[i].onmouseout=function(){
    
      lmcjt[this.aa].style.display="none"
    
  }
 }
