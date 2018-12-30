
  window.onload=function(){
  	var tou=document.getElementsByClassName('tou')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>128){
			tou.style.position='fixed';
			
		}
		else{
			tou.style.position='static';
		}
	 }
    var p1=document.getElementById('p1');
    p1.style.backgroundImage="url(../任务所需小图/img/duigou.png)";
    p1.style.border="1px solid #fe0d4a";
    var cca4v=document.getElementById('cca4v');
    cca4v.innerHTML+='"150ml"';
    out();
  
  }
  var img1=document.getElementById('img1');
  var img2=document.getElementById('img2');
  var slider=document.getElementById('slider');
  var img3=document.getElementById('Bimg');
  function out(){
  	var cca5c2=document.getElementsByClassName('cca5c2');
  	cca5c2[0].style.background='white';
  	var cca5c1=document.getElementsByClassName('cca5c1');
  	cca5c1[0].style.background='#ff9003';
  	 var uuu=document.getElementById('uuu');
    uuu.src="../任务所需小图/img/pp0.jpeg";
    var img3=document.getElementById('Bimg');
      img3.src="../任务所需小图/img/pp0.jpeg";
       img1.onmouseover=function()
    {
      var slider=document.getElementById('slider');
       slider.style.display='block';
       img2.style.display='block';
        var img3=document.getElementById('Bimg');
       img3.src="../任务所需小图/img/pp0.jpeg";
       img1.style.cursor='crosshair';
     }
    
     img1.onmousemove=function(ev)
     {
      
        var ol=ev.clientX-(box.offsetLeft-document.documentElement.scrollLeft)-slider.offsetWidth/2;
        var ot=ev.clientY-(box.offsetTop-document.documentElement.scrollTop)-slider.offsetHeight/2;
        var oMaxw=img1.offsetWidth-slider.offsetWidth;
        var oMaxh=img1.offsetHeight-slider.offsetHeight;
        ol=ol>oMaxw?oMaxw:ol<0?0:ol;
        ot=ot>oMaxh?oMaxh:ot<0?0:ot;
        slider.style.left=ol+'px';
        slider.style.top=ot+'px';

        var scale=img3.offsetHeight/img1.offsetHeight;
        img3.style.left=-ol*scale+'px';
        img3.style.top=-ot*scale+'px';
     }
     img1.onmouseout=function()
     {
       slider.style.display='none';
       img2.style.display='none';
     }
  
      }
   
  
  function out1(){
  	var cca5c1=document.getElementsByClassName('cca5c1');
  	cca5c1[0].style.background='white';
  	var cca5c2=document.getElementsByClassName('cca5c2');
  	cca5c2[0].style.background='#ff9003';
  	var uuu=document.getElementById('uuu');
    uuu.src="../任务所需小图/img/pp1.jpeg";
    var img3=document.getElementById('Bimg');
    img3.src="../任务所需小图/img/pp1.jpeg";
    img1.onmouseover=function()
    {
    slider.style.display='block';
    img2.style.display='block';  
   }
    img1.onmousemove=function(ev)
     {
      
        var ol=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
        var ot=ev.clientY-box.offsetTop-slider.offsetHeight/2+100;
        var oMaxw=img1.offsetWidth-slider.offsetWidth;
        var oMaxh=img1.offsetHeight-slider.offsetHeight;
        ol=ol>oMaxw?oMaxw:ol<0?0:ol;
        ot=ot>oMaxh?oMaxh:ot<0?0:ot;
        slider.style.left=ol+'px';
        slider.style.top=ot+'px';
        var scale=Bimg.offsetHeight/img1.offsetHeight;
        Bimg.style.left=-ol*scale+40+'px';
        Bimg.style.top=-ot*scale+40+'px';
     }
   img1.onmouseout=function()
   {
    slider.style.display='none';
    img2.style.display='none';
   }
  }
  

  var cca4v=document.getElementById('cca4v');
  var p1=document.getElementById('p1');
  p1.onclick=function()
  {
    p2.style.backgroundImage="";
    p2.style.border="";
    cca4v.innerHTML='';
    p1.style.backgroundImage="url(../任务所需小图/img/duigou.png)";
    p1.style.border="1px solid #fe0d4a";
    cca4v.innerHTML+='"150ml"';
   
  }
  var p2=document.getElementById('p2');
  p2.onclick=function()
  {
    p1.style.backgroundImage="";
    p1.style.border="";
    cca4v.innerHTML='';
    p2.style.backgroundImage="url(../任务所需小图/img/duigou.png)";
    p2.style.border="1px solid #fe0d4a";
    cca4v.innerHTML+='"200ml"';
  }
  var pp2=document.getElementById('pp2');
  var cover=document.getElementById('cover');
  var tanchuang=document.getElementById('tanchuang');
  var hh=document.getElementById('hh');
  var hh1=document.getElementById('hh1');
  pp2.onclick=function()
  {
       cover.style.display="block";
       tanchuang.style.display='block';
  }
  hh.onclick=function()
  {
    cover.style.display="none";
    tanchuang.style.display='none';
  }
  hh1.onclick=function()
  {
    cover.style.display="none";
    tanchuang.style.display='none';
  }

  var u1=document.getElementById('u1');
  var u2=document.getElementById('u2');
  var u3=document.getElementById('u3');
  u1.onclick=function(){
    if(u2.value>1)

    {
      u2.value--;
    }
    else
    {
      u1.style.cursor='not-allowed';
    }
  }
  u3.onclick=function(){
    if(u2.value<5)
    {
      u2.value++;
    }
    else
    {
      u3.style.cursor='not-allowed';
    }
  }
  u1.onmouseover=function()
  {
    if(u2.value>1)
    {
       u1.style.cursor='pointer';
    }
    else
    {
      u1.style.cursor='not-allowed';
    }
  }
  u3.onmouseover=function()
  {
    if(u2.value<5)
    {
       u3.style.cursor='pointer';
    }
    else
    {
      u3.style.cursor='not-allowed';
    }
   
  }

  
