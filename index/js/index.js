function animate1(obj,json,callback){		
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){	
		var isStop = true;
		for (var attr in json){
			if(attr=='opacity'){
				var now = parseInt(getStyle(obj,attr)*100);
			}else{
				var now = parseInt(getStyle(obj,attr));
			}
			
			var speed = (json[attr]-now)/5;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if (attr=='opacity') {
				obj.style[attr]=(now+speed)/100;
			}else{
				obj.style[attr]=now+speed+'px';
			}
			
			var current = now+speed;
			if(json[attr]!==current){
				isStop = false;
			}
		}					
		if(isStop){
			clearInterval(obj.timer)
			callback&&callback();
		}
 	},10);
	
}
function getStyle(obj,style){
	if(getComputedStyle(obj)){
		return getComputedStyle(obj)[style];
	}else{
		obj.currentStyle[style];
	}		
}
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

}
var a=['10','30','50','100'];
function change(){

	var cccc2e=document.getElementById('cccc2e').value;
	var p=document.getElementById('p');
	p.innerHTML='';
	if(cccc2e==-1)
	{
		p.innerHTML+='请选择';
	}
	else
	{
		var c=a[cccc2e];
	    p.innerHTML+='￥'+c;

	}
}
    var speed=25;
   	var cccc2k2=document.getElementById("cccc2k2");
	var cccc2k1=document.getElementById("cccc2k1");
    var cccc2k=document.getElementById("cccc2k");
    cccc2k2.innerHTML=cccc2k1.innerHTML;
    function Marquee1(){
	   if(cccc2k2.offsetTop-cccc2k.scrollTop<=0)
       {
	     cccc2k.scrollTop-=cccc2k1.offsetHeight;
       }
      else
      {
	     cccc2k.scrollTop++;
      }
	}
	var MyMar1=setInterval(Marquee1,speed);
    cccc2k.onmouseover=function()
    {
       clearInterval(MyMar1)
    }
    cccc2k.onmouseout=function()
    {
      MyMar1=setInterval(Marquee1,speed)
    }		
     






       var you1=document.getElementById('you1');
       you1.onmouseover=function()
       {
       	you1.style.marginLeft="1225px";
       }
       you1.onmouseout=function()
       {
          you1.style.marginLeft="1310px";
       }


        var you2=document.getElementById('you2');
       you2.onmouseover=function()
       {
       	you2.style.marginLeft="1225px";
       }
       you2.onmouseout=function()
       {
          you2.style.marginLeft="1310px";
       }


       var you3=document.getElementById('you3');
       var yyy=document.getElementById('yyy');
       you3.onmouseover=function()
       {
       	yyy.style.display="block";

       	you3.style.marginLeft="1225px";
       }
       you3.onmouseout=function()
       {
       	 yyy.style.display="none";
          you3.style.marginLeft="1310px";
       }

        var you4=document.getElementById('you4');
       you4.onmouseover=function()
       {
       	you4.style.marginLeft="1225px";
       }
       you4.onmouseout=function()
       {
          you4.style.marginLeft="1310px";
       }


       	var slider = document.getElementById('slider');
   var box = document.getElementById('box');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var oNavlist=document.getElementById('nav').children;
    var index = 1;
    box.onmouseover=function(){
        clearInterval(timer);
        animate1(left,{opacity:80});
        animate1(right,{opacity:80});
	}
	box.onmouseout=function(){
		animate1(left,{opacity:0});
		animate1(right,{opacity:0});
        timer=setInterval(next,3000);
	}
	function next(){
	   index++;
	   console.log('index='+index);
	   animate1(slider,{left:-809*index},function(){
	   	if(index==7)
	   	{
	   		slider.style.left="-809px";
	   		index=1;
	   	}
	   })
	navChange();
}
	function prev(){
	
	index--;
	animate1(slider,{left:-809*index},function()
	{
		if(index==0){
			slider.style.left='-4854px';
			index=6;
		}
	});
	navChange();
}
	var timer=setInterval(next,3000);
	
	right.onclick=next;
	left.onclick=prev;
	for(var i=0;i<oNavlist.length;i++){
	oNavlist[i].idx = i;
	oNavlist[i].onclick=function(){
		index=this.idx+1;
		animate1(slider,{left:-809*index});
		navChange();
	}
}
	function navChange(){
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].className='';
	}
	if(index==7){
		oNavlist[0].className='active';
	}else if(index==0){
		oNavlist[5].className='active';
	}else{
		oNavlist[index-1].className ="active";
		// console.log(index);
	}
}
