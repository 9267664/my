// JavaScript Document
var T_img,T_adv;

$(".div_all .nav li").hover(
     function(){
		 $(this).children("ul").show() },
	 function(){
		 $(this).children("ul").hide() },
);
pic2.innerHTML=pic1.innerHTML;
pic.offsetLeft=pic2.offsetLeft;
function img_right(){
	if(pic.scrollLeft<=0){
		pic.scrollLeft+=pic1.offsetWidth;}
		else{
			pic.scrollLeft--;}
	}
T_img=setInterval(img_right,30);



var x=357,y=257;
var L=all.offsetLeft,T=all.offsetTop;
var R=all.offsetWidth;
var B=all.offsetHeight;
var xin=true,yin=true;
function float1(){
	x+=(xin?1:-1);
	if(x>R){x=R,xin=false}
	if(x<L){x=L,xin=true}
	y+=(yin?1:-1);
	if(y>B){y=B,yin=false}
	if(y<T){y=T,yin=true}
	adv.style.left=x+"px";
	adv.style.top=y+"px";
}
T_adv=setInterval(float1,20);


dhbt.innerText="首页";
dhnr.innerHTML='<iframe src="text/红色文化.txt" style="width:100%;height:100%;border:0;"</idrame>';
$("#p1").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/红色文化.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p3").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/辛亥革命.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})

$("#p5").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/共产党宣言.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
	
$("#p7").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/陈独秀与新青年.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p8").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/李大钊和我的马克思主义观.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p9").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/陈望道与《共产党宣言》.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p10").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/新民主主义运动.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p11").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/五四运动.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p12").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/红船起锚.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p13").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/安源路矿罢工.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p14").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/东征北伐.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p17").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/一根灯芯.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p18").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/朱德的扁担.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p19").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/练兵与御寒.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p22").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/蒋毛斗法.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#ls").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/辽沈战役.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#pj").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/平津战役.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#hh").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/淮海战役.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p26").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/改革开放.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p27").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/伟大复兴.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p40").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/一国两制.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p41").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/土地改革.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p42").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/大跃进.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p43").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/七七事变.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p44").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/九一八事变.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
$("#p45").click(function(){
	dhbt.innerText=$(this).text();
    dhnr.innerHTML='<iframe src="text/西安事变.txt" style="width:100%;height:100%;border:0;"</idrame>';
	})
/*视频*/
/*kgdd_ctrl.onclick=function(){
	if(kgdd.pause){
		kgdd.play();
	kgdd_ctrl.innerText="暂停";
	}
	else{
		kgdd.pause();
		kgdd_ctrl.innerText="播放";
	}
}
*/

