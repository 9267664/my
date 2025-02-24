// JavaScript Document
var T_up,T_down;
var P_left,P_right;
var T_round;
demo2.innerHTML=demo1.innerHTML;
function up(){
	function scr_up(){
		if(demo.scrollTop>=demo1.offsetHeight){
		demo.scrollTop-=demo1.offsetHeight;}
		else{
			demo.scrollTop++;}
		
	}
	clearInterval(T_up);
	clearInterval(T_down);
	T_up=setInterval(scr_up,20);
	demo.onmouseover=function(){clearInterval(T_up)}
	demo.onmouseout=function(){T_up=setInterval(scr_up,20);}
}

function down(){
	demo.offsetTop=demo2.offsetTop;
	function scr_down(){
		if(demo.scrollTop<=0){
		demo.scrollTop+=demo1.offsetHeight;}
		else{
			demo.scrollTop--;}
	}
	clearInterval(T_up);
	clearInterval(T_down);
	T_down=setInterval(scr_down,20);
	demo.onmouseover=function(){clearInterval(T_down)}
	demo.onmouseout=function(){T_up=setInterval(scr_down,20);}
}
pic2.innerHTML=pic1.innerHTML;

function left(){
	function scr_left(){
		if(pic.scrollLeft>=pic1.offsetWidth){
		pic.scrollLeft-=pic1.offsetWidth;}
		else{
			pic.scrollLeft++;}
	}
	clearInterval(P_left);
	clearInterval(P_right);
	clearInterval(T_round);
	P_left=setInterval(scr_left,30);
	pic.onmouseover=function(){clearInterval(P_left)}
	pic.onmouseout=function(){P_left=setInterval(scr_left,30);}
	}
pic2.innerHTML=pic1.innerHTML;
function right(){
	function scr_right(){
		pic.offsetLeft=pic2.offsetLeft;
		if(pic.scrollLeft<=0){
		pic.scrollLeft+=pic1.offsetWidth;}
		else{
			pic.scrollLeft--;}
	}
	clearInterval(P_left);
	clearInterval(P_right);
	clearInterval(T_round);
	P_right=setInterval(scr_right,30);
	pic.onmouseover=function(){clearInterval(P_right)}
	pic.onmouseout=function(){P_right=setInterval(scr_right,30);}
}

function round(){
	angle=0;
	clearInterval(P_left);
	clearInterval(P_right);
	clearInterval(T_round);
	T_round=setInterval(function(){
		pic.style.transform="roate("+(angle--)+"deg)";
	},20);
}
function normal(){
	clearInterval(P_left);
	clearInterval(P_right);
	clearInterval(T_round);
	pic.style.transform="roate(0deg)";
	right();
}