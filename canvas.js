$(document).ready(function () {
	const canvas = document.getElementById("tictactoe");
	const ctx = canvas.getContext('2d');
	const width = canvas.getAttribute("width");
	const height = canvas.getAttribute("height");
	var sayfa = 1;
	var oyunSirasi = 1;
	var oyunBitti=false;
	var kazanan="";
	var tiles = [[0,0,0],[0,0,0],[0,0,0]];

	const mouse = {x:0,y:0};
	function mouseEvents(e){
		const bounds = canvas.getBoundingClientRect();
		mouse.x = e.pageX - bounds.left - scrollX;
		mouse.y = e.pageY - bounds.top - scrollY;
	}
	document.addEventListener("mousemove", mouseEvents);
	function ButonOlustur(buton){
		ctx.drawImage(buton.src,buton.x,buton.y,buton.w,buton.h);
	}
	
		const oyna_butonu_Image = new Image();
		oyna_butonu_Image.src = "img/oyna_butonu_deactive.png";
		const hakkimda_butonu_Image = new Image();
		hakkimda_butonu_Image.src = "img/hakkimda_butonu_deactive.png";
			const geridon_butonu_Image = new Image();
		geridon_butonu_Image.src = "img/geridon_butonu_deactive.png";
const oyna_butonu = {x:336,y:250,w:128,h:32,src:oyna_butonu_Image};
const hakkimda_butonu = {x:336,y:300,w:128,h:32,src:hakkimda_butonu_Image};
const geridon_butonu = {x:336,y:175,w:128,h:32,src:geridon_butonu_Image};

	function temizle() {
		ctx.clearRect(0,0,width,height);
	}

	function hoverButton(sayfa){
		if(sayfa == 1){ // Ana Menü
	if(mouse.x>oyna_butonu.x&&mouse.x<oyna_butonu.x+oyna_butonu.w&&mouse.y>oyna_butonu.y&&mouse.y<oyna_butonu.y+oyna_butonu.h){
			oyna_butonu.src.src = "img/oyna_butonu_active.png"; 
			ButonOlustur(oyna_butonu);
		}else{
			oyna_butonu.src.src = "img/oyna_butonu_deactive.png";
			ButonOlustur(oyna_butonu);
		}
		if(mouse.x>hakkimda_butonu.x&&mouse.x<hakkimda_butonu.x+hakkimda_butonu.w&&mouse.y>hakkimda_butonu.y&&mouse.y<hakkimda_butonu.y+hakkimda_butonu.h){
			hakkimda_butonu.src.src = "img/hakkimda_butonu_active.png"; 
			ButonOlustur(hakkimda_butonu);
		}else{
			hakkimda_butonu.src.src = "img/hakkimda_butonu_deactive.png";
			ButonOlustur(hakkimda_butonu);
		}

		}else if(sayfa == 2){ // Hakkımda
			ctx.font = 'bold 25px calibri';
			ctx.fillStyle = 'red'; 
			ctx.fillText(`Tic-Tac-Toe Nedir?`,300,50);
				ctx.font = '15px calibri';
			ctx.fillStyle = 'black'; 
			ctx.fillText(`Oyun X/O'larını çapraz,dikey ya da yatay olarak üçlemeye çalışmaktır.`,50,75,750);
			ctx.fillText(`Üçlerseniz oyunu kazanmış oluruz. 9 tane kareye ayrılır.`,50,100,750)
						ctx.font = 'bold 25px calibri';
			ctx.fillStyle = 'red'; 
			ctx.fillText(`Oyun Nasıl Oynanır?`,290,125);
			ctx.font = '15px calibri';
			ctx.fillStyle = 'black'; 
			ctx.fillText(`Oyunda belirtilen karelere basarak çapraz/dikey/yatay olarak üçlemeye çalışın.`,50,150,750);
		if(mouse.x>geridon_butonu.x&&mouse.x<geridon_butonu.x+geridon_butonu.w&&mouse.y>geridon_butonu.y&&mouse.y<geridon_butonu.y+geridon_butonu.h){
			geridon_butonu.src.src = "img/geridon_butonu_active.png"; 
			ButonOlustur(geridon_butonu);
		}else{
			geridon_butonu.src.src = "img/geridon_butonu_deactive.png";
			ButonOlustur(geridon_butonu);
		}
		}else if(sayfa == 3){ // Oyun
		ctx.beginPath(); // Çizgileri Koy
		ctx.strokeStyle = "black";
		ctx.moveTo(265,0);
		ctx.lineTo(265,600);
		ctx.stroke();
		ctx.closePath();
			ctx.beginPath();
		ctx.moveTo(530,0);
		ctx.lineTo(530,600);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.moveTo(0,200);
		ctx.lineTo(800,200);
		ctx.stroke(); 
		ctx.closePath();
		ctx.beginPath();
		ctx.moveTo(0,400);
		ctx.lineTo(800,400);
		ctx.stroke();
		ctx.closePath();
		
		}else if(sayfa == 4){
				ctx.font = 'bold 25px calibri';
			ctx.fillStyle = 'red'; 
			ctx.fillText(`Oyun Bitmiştir!`,300,50);
			ctx.font = 'bold 15px calibri';
			ctx.fillStyle = 'black'; 
			ctx.fillText(`Kazanan! => `+kazanan,300,75);
			ctx.fillText(`Dipnot : Oyuna yeniden başlamak için R tuşuna basın.`,50,100)
		}

	}
	function sayfa_no(sayfa){
		if(sayfa == 1){
			hoverButton(1);
		}else if(sayfa == 2){
			hoverButton(2);
		}else if(sayfa == 3){
			hoverButton(3);
		}else if(sayfa == 4){
			hoverButton(4);
		}
	}
	function guncelle(){
		temizle();
		sayfa_no(sayfa);
		if(sayfa == 3){
tictactoe_guncelle();
				IsWin();
			if(oyunSirasi == 2){
		bot();
	}
		}
		requestAnimationFrame(guncelle);
	}

	guncelle();
function IsWin(){ // X'in kazaabilme koordinatları
if(JSON.stringify(tiles[0]) == "[1,1,1]" || JSON.stringify(tiles[1]) == "[1,1,1]" || JSON.stringify(tiles[2]) == "[1,1,1]" ||
	(tiles[0][0] == 1 && JSON.stringify(tiles[1][0]) == 1 && JSON.stringify(tiles[2][0]) == 1) ||
	(tiles[0][1] == 1 && JSON.stringify(tiles[1][1]) == 1 && JSON.stringify(tiles[2][1]) == 1) ||
	(tiles[0][2] == 1 && JSON.stringify(tiles[1][2]) == 1 && JSON.stringify(tiles[2][2]) == 1) ||
	(tiles[0][0] == 1 && JSON.stringify(tiles[1][1]) == 1 && JSON.stringify(tiles[2][2]) == 1) ||
	(tiles[0][2] == 1 && JSON.stringify(tiles[1][1]) == 1 && JSON.stringify(tiles[2][0]) == 1)
	){
	oyunBitti = true;
	kazanan = "X";
	if(oyunBitti == true){
	sayfa = 4;
	}

}else if(JSON.stringify(tiles[0]) == "[2,2,2]" || JSON.stringify(tiles[1]) == "[2,2,2]" || JSON.stringify(tiles[2]) == "[2,2,2]" ||
	(tiles[0][0] == 2 && JSON.stringify(tiles[1][0]) == 2 && JSON.stringify(tiles[2][0]) == 2) ||
	(tiles[0][1] == 2 && JSON.stringify(tiles[1][1]) == 2 && JSON.stringify(tiles[2][1]) == 2) ||
	(tiles[0][2] == 2 && JSON.stringify(tiles[1][2]) == 2 && JSON.stringify(tiles[2][2]) == 2) ||
	(tiles[0][0] == 2 && JSON.stringify(tiles[1][1]) == 2 && JSON.stringify(tiles[2][2]) == 2) ||
	(tiles[0][2] == 2 && JSON.stringify(tiles[1][1]) == 2 && JSON.stringify(tiles[2][0]) == 2)){
	oyunBitti = true;
	kazanan = "O";
	if(oyunBitti == true){
	sayfa = 4;
	}

}

}
function tictactoe_guncelle(){
	if(sayfa == 3 && oyunBitti == false){
		if(tiles[0][0] == 1){ // tiles_1
			ctx.beginPath();ctx.moveTo(15,15);ctx.lineTo(250,185);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
			ctx.beginPath();ctx.moveTo(250,15);ctx.lineTo(15,185);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
		}else if(tiles[0][0] == 2){
			ctx.beginPath();ctx.arc(135,100,90,0*Math.PI,2*Math.PI);ctx.strokeStyle = "blue";ctx.stroke();ctx.closePath();
		}
		if(tiles[0][1] == 1){ // tiles_2
			ctx.beginPath();ctx.moveTo(280,15);ctx.lineTo(515,185);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
			ctx.beginPath();ctx.moveTo(515,15);ctx.lineTo(280,185);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
		}else if(tiles[0][1] == 2){
			ctx.beginPath();ctx.arc(400,100,90,0*Math.PI,2*Math.PI);ctx.strokeStyle = "blue";ctx.stroke();ctx.closePath();
		}
		if(tiles[0][2] == 1){ // tiles_3
			ctx.beginPath();ctx.moveTo(545,15);ctx.lineTo(780,185);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
			ctx.beginPath();ctx.moveTo(780,15);ctx.lineTo(545,185);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
		}else if(tiles[0][2] == 2){
			ctx.beginPath();ctx.arc(665,100,90,0*Math.PI,2*Math.PI);ctx.strokeStyle = "blue";ctx.stroke();ctx.closePath();
		}
		if(tiles[1][0] == 1){ // tiles_4
			ctx.beginPath();ctx.moveTo(15,215);ctx.lineTo(250,385);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
			ctx.beginPath();ctx.moveTo(250,215);ctx.lineTo(15,385);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
		}else if(tiles[1][0] == 2){
			ctx.beginPath();ctx.arc(135,300,90,0*Math.PI,2*Math.PI);ctx.strokeStyle = "blue";ctx.stroke();ctx.closePath();
		}
		if(tiles[1][1] == 1){ // tiles_5
			ctx.beginPath();ctx.moveTo(280,215);ctx.lineTo(515,385);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
			ctx.beginPath();ctx.moveTo(515,215);ctx.lineTo(280,385);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
		}else if(tiles[1][1] == 2){
			ctx.beginPath();ctx.arc(400,300,90,0*Math.PI,2*Math.PI);ctx.strokeStyle = "blue";ctx.stroke();ctx.closePath();
		}
		if(tiles[1][2] == 1){ // tiles_6
			ctx.beginPath();ctx.moveTo(545,215);ctx.lineTo(780,385);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
			ctx.beginPath();ctx.moveTo(780,215);ctx.lineTo(545,385);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
		}else if(tiles[1][2] == 2){
			ctx.beginPath();ctx.arc(665,300,90,0*Math.PI,2*Math.PI);ctx.strokeStyle = "blue";ctx.stroke();ctx.closePath();
		}
		if(tiles[2][0] == 1){ // tiles_7
			ctx.beginPath();ctx.moveTo(15,415);ctx.lineTo(250,585);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
			ctx.beginPath();ctx.moveTo(250,415);ctx.lineTo(15,585);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
		}else if(tiles[2][0] == 2){
			ctx.beginPath();ctx.arc(135,500,90,0*Math.PI,2*Math.PI);ctx.strokeStyle = "blue";ctx.stroke();ctx.closePath();
		}
		if(tiles[2][1] == 1){ // tiles_8
			ctx.beginPath();ctx.moveTo(280,415);ctx.lineTo(515,585);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
			ctx.beginPath();ctx.moveTo(515,415);ctx.lineTo(280,585);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
		}else if(tiles[2][1] == 2){
			ctx.beginPath();ctx.arc(400,500,90,0*Math.PI,2*Math.PI);ctx.strokeStyle = "blue";ctx.stroke();ctx.closePath();
		}
		if(tiles[2][2] == 1){ // tiles_9
			ctx.beginPath();ctx.moveTo(545,415);ctx.lineTo(780,585);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
			ctx.beginPath();ctx.moveTo(780,415);ctx.lineTo(545,585);ctx.strokeStyle = "red";ctx.stroke();ctx.closePath();
		}else if(tiles[2][2] == 2){
			ctx.beginPath();ctx.arc(665,500,90,0*Math.PI,2*Math.PI);ctx.strokeStyle = "blue";ctx.stroke();ctx.closePath();
		}
	}
}
function koy(){
	if(oyunSirasi == 2){
		if(tiles[0][0] != 0 && tiles[0][1] != 0 && tiles[0][2] != 0 && tiles[1][0] != 0 && tiles[1][1] != 0 && tiles[1][2] != 0 && tiles[2][0] != 0 && tiles[2][1] != 0 && tiles[2][2] != 0){
			kazanan = "Berabere";
			sayfa = 4;
		}else{
	var sutun = Math.floor(Math.random()*3);
	var satir = Math.floor(Math.random()*3);
	for(var i = 0;tiles[satir][sutun] == 1 || tiles[satir][sutun] == 2;i++){
	sutun = Math.floor(Math.random()*2);
	satir = Math.floor(Math.random()*2);
	}
	tiles[satir][sutun] = 2;
	oyunSirasi = 1;
}
}
}
function bot(){
	if(sayfa == 3 && oyunBitti == false){
	if(tiles[0][0] == 2 && tiles[0][1] == 2 && tiles[0][2] == 0){tiles[0][2] = 2;oyunSirasi = 1;/* XXO 1.Satır OK!*/}
	else if(tiles[0][0] == 2 && tiles[0][2] == 2 && tiles[0][1] == 0){tiles[0][1] = 2;oyunSirasi = 1;/* XOX 1.SatırOK! */}
	else if(tiles[0][1] == 2 && tiles[0][2] == 2 && tiles[0][0] == 0){tiles[0][0] = 2;oyunSirasi = 1; /*OXX 1.SatırOK!*/}
	else if(tiles[1][0] == 2 && tiles[1][1] == 2 && tiles[1][2] == 0){tiles[1][2] = 2;oyunSirasi = 1;/* XXO 2.SatırOK! */}
	else if(tiles[1][0] == 2 && tiles[1][2] == 2 && tiles[1][1] == 0){tiles[1][1] = 2;oyunSirasi = 1; /* XOX 2.SatırOK!*/}
	else if(tiles[1][1] == 2 && tiles[1][2] == 2 && tiles[1][0] == 0){tiles[1][0] = 2;oyunSirasi = 1; /*OXX* 2.SatırOK!*/}
	else if(tiles[2][0] == 2 && tiles[2][1] == 2 && tiles[2][2] == 0){tiles[2][2] = 2;oyunSirasi = 1;/* XXO  3.SatırOK!*/}
	else if(tiles[2][0] == 2 && tiles[2][2] == 2 && tiles[2][1] == 0){tiles[2][1] = 2;oyunSirasi = 1; /* XOX 3.SatırOK!*/}
	else if(tiles[2][1] == 2 && tiles[2][2] == 2 && tiles[2][0] == 0){tiles[2][0] = 2;oyunSirasi = 1; /*OXX 3.SatırOK!*/}
	else if(tiles[0][0] == 2 && tiles[1][0] == 2 && tiles[2][0] == 0){tiles[2][0] = 2;oyunSirasi = 1;/* X|X|O 1.OK!*/}
	else if(tiles[0][0] == 2 && tiles[2][0] == 2 && tiles[1][0] == 0){tiles[1][0] = 2;oyunSirasi = 1; /* X|O|X 1.OK!*/}
	else if(tiles[1][0] == 2 && tiles[2][0] == 2 && tiles[0][0] == 0){tiles[0][0] = 2;oyunSirasi = 1; /*O|X|X* 1.OK!*/}
	else if(tiles[0][1] == 2 && tiles[1][1] == 2 && tiles[2][1] == 0){tiles[2][1] = 2;oyunSirasi = 1;/* X|X|O 2.OK!*/}
	else if(tiles[0][1] == 2 && tiles[2][1] == 2 && tiles[1][1] == 0){tiles[1][1] = 2;oyunSirasi = 1; /* X|O|X 2.OK!*/}
	else if(tiles[1][1] == 2 && tiles[2][1] == 2 && tiles[0][1] == 0){tiles[0][1] = 2;oyunSirasi = 1; /*O|X|X 2.OK!*/}
	else if(tiles[0][2] == 2 && tiles[1][2] == 2 && tiles[2][2] == 0){tiles[2][2] = 2;oyunSirasi = 1;/* X|X|O 3.OK!*/}
	else if(tiles[0][2] == 2 && tiles[2][2] == 2 && tiles[1][2] == 0){tiles[1][2] = 2;oyunSirasi = 1;/* X|O|X 3.OK! */}
	else if(tiles[1][2] == 2 && tiles[2][2] == 2 && tiles[0][2] == 0){tiles[0][2] = 2;oyunSirasi = 1;/*O|X|X 3.OK!*/}
	else if(tiles[0][0] == 2 && tiles[1][1] == 2 && tiles[2][2] == 0){tiles[2][2] = 2;oyunSirasi = 1; /* X|X|O Çarpraz*/}
	else if(tiles[0][0] == 2 && tiles[2][2] == 2 && tiles[1][1] == 0){tiles[1][1] = 2;oyunSirasi = 1;/* X|O|X Çarpraz */}
	else if(tiles[1][1] == 2 && tiles[2][2] == 2 && tiles[0][0] == 0){tiles[0][0] = 2;oyunSirasi = 1; /*O|X|X Çarpraz*/}
	else if(tiles[0][2] == 2 && tiles[1][1] == 2 && tiles[2][0] == 0){tiles[2][0] = 2;oyunSirasi = 1;/* X|X|O Ters Çarpraz*/}
	else if(tiles[0][2] == 2 && tiles[2][0] == 2 && tiles[1][1] == 0){tiles[1][1] = 2;oyunSirasi = 1; /* X|O|X Ters Çarpraz */}
	else if(tiles[1][1] == 2 && tiles[2][0] == 2 && tiles[0][2] == 0){tiles[0][2] = 2;oyunSirasi = 1; /*O|X|X Ters Çarpraz*/}
	else if(tiles[0][0] == 1 && tiles[0][1] == 1 && tiles[0][2] != 2){tiles[0][2] = 2;oyunSirasi = 1;/* XXO 1.Satır OK!*/}
	else if(tiles[0][0] == 1 && tiles[0][2] == 1 && tiles[0][1] != 2){tiles[0][1] = 2;oyunSirasi = 1;/* XOX 1.SatırOK! */}
	else if(tiles[0][1] == 1 && tiles[0][2] == 1 && tiles[0][0] != 2){tiles[0][0] = 2;oyunSirasi = 1; /*OXX 1.SatırOK!*/}
	else if(tiles[1][0] == 1 && tiles[1][1] == 1 && tiles[1][2] != 2){tiles[1][2] = 2;oyunSirasi = 1;/* XXO 2.SatırOK! */}
	else if(tiles[1][0] == 1 && tiles[1][2] == 1 && tiles[1][1] != 2){tiles[1][1] = 2;oyunSirasi = 1; /* XOX 2.SatırOK!*/}
	else if(tiles[1][1] == 1 && tiles[1][2] == 1 && tiles[1][0] != 2){tiles[1][0] = 2;oyunSirasi = 1; /*OXX* 2.SatırOK!*/}
	else if(tiles[2][0] == 1 && tiles[2][1] == 1 && tiles[2][2] != 2){tiles[2][2] = 2;oyunSirasi = 1;/* XXO  3.SatırOK!*/}
	else if(tiles[2][0] == 1 && tiles[2][2] == 1 && tiles[2][1] != 2){tiles[2][1] = 2;oyunSirasi = 1; /* XOX 3.SatırOK!*/}
	else if(tiles[2][1] == 1 && tiles[2][2] == 1 && tiles[2][0] != 2){tiles[2][0] = 2;oyunSirasi = 1; /*OXX 3.SatırOK!*/}
	else if(tiles[0][0] == 1 && tiles[1][0] == 1 && tiles[2][0] != 2){tiles[2][0] = 2;oyunSirasi = 1;/* X|X|O 1.OK!*/}
	else if(tiles[0][0] == 1 && tiles[2][0] == 1 && tiles[1][0] != 2){tiles[1][0] = 2;oyunSirasi = 1; /* X|O|X 1.OK!*/}
	else if(tiles[1][0] == 1 && tiles[2][0] == 1 && tiles[0][0] != 2){tiles[0][0] = 2;oyunSirasi = 1; /*O|X|X* 1.OK!*/}
	else if(tiles[0][1] == 1 && tiles[1][1] == 1 && tiles[2][1] != 2){tiles[2][1] = 2;oyunSirasi = 1;/* X|X|O 2.OK!*/}
	else if(tiles[0][1] == 1 && tiles[2][1] == 1 && tiles[1][1] != 2){tiles[1][1] = 2;oyunSirasi = 1; /* X|O|X 2.OK!*/}
	else if(tiles[1][1] == 1 && tiles[2][1] == 1 && tiles[0][1] != 2){tiles[0][1] = 2;oyunSirasi = 1; /*O|X|X 2.OK!*/}
	else if(tiles[0][2] == 1 && tiles[1][2] == 1 && tiles[2][2] != 2){tiles[2][2] = 2;oyunSirasi = 1;/* X|X|O 3.OK!*/}
	else if(tiles[0][2] == 1 && tiles[2][2] == 1 && tiles[1][2] != 2){tiles[1][2] = 2;oyunSirasi = 1;/* X|O|X 3.OK! */}
	else if(tiles[1][2] == 1 && tiles[2][2] == 1 && tiles[0][2] != 2){tiles[0][2] = 2;oyunSirasi = 1;/*O|X|X 3.OK!*/}
	else if(tiles[0][0] == 1 && tiles[1][1] == 1 && tiles[2][2] != 2){tiles[2][2] = 2;oyunSirasi = 1; /* X|X|O Çarpraz*/}
	else if(tiles[0][0] == 1 && tiles[2][2] == 1 && tiles[1][1] != 2){tiles[1][1] = 2;oyunSirasi = 1;/* X|O|X Çarpraz */}
	else if(tiles[1][1] == 1 && tiles[2][2] == 1 && tiles[0][0] != 2){tiles[0][0] = 2;oyunSirasi = 1; /*O|X|X Çarpraz*/}
	else if(tiles[0][2] == 1 && tiles[1][1] == 1 && tiles[2][0] != 2){tiles[2][0] = 2;oyunSirasi = 1;/* X|X|O Ters Çarpraz*/}
	else if(tiles[0][2] == 1 && tiles[2][0] == 1 && tiles[1][1] != 2){tiles[1][1] = 2;oyunSirasi = 1; /* X|O|X Ters Çarpraz */}
	else if(tiles[1][1] == 1 && tiles[2][0] == 1 && tiles[0][2] != 2){tiles[0][2] = 2;oyunSirasi = 1; /*O|X|X Ters Çarpraz*/}
	else{koy();}
}}

function tiklanma(e) { 
if(sayfa == 1 && mouse.x>hakkimda_butonu.x&&mouse.x<hakkimda_butonu.x+hakkimda_butonu.w&&mouse.y>hakkimda_butonu.y&&mouse.y<hakkimda_butonu.y+hakkimda_butonu.h){
	sayfa = 2;
}else if(sayfa == 2 && mouse.x>geridon_butonu.x&&mouse.x<geridon_butonu.x+geridon_butonu.w&&mouse.y>geridon_butonu.y&&mouse.y<geridon_butonu.y+geridon_butonu.h){
	sayfa = 1;
}else if(sayfa == 1 && mouse.x>oyna_butonu.x&&mouse.x<oyna_butonu.x+oyna_butonu.w&&mouse.y>oyna_butonu.y&&mouse.y<oyna_butonu.y+oyna_butonu.h){
	sayfa = 3;
}else if(sayfa == 3 && oyunBitti == false){
		if(mouse.x>0&&mouse.x<265&&mouse.y>0&&mouse.y<200&&tiles[0][0] == 0){ //tile_1
		if(oyunSirasi == 1){ // X'in sırası / Sende
			tiles[0][0] = 1;
		oyunSirasi = 2;
		}
	}
	if(mouse.x>265&&mouse.x<530&&mouse.y>0&&mouse.y<200&&tiles[0][1] == 0){ //tile_2
		if(oyunSirasi == 1){ // X'in sırası / Sende
			tiles[0][1] = 1;
		oyunSirasi = 2;
		}
	}
	if(mouse.x>530&&mouse.x<795&&mouse.y>0&&mouse.y<200 && tiles[0][2] == 0){ //tile_3
		if(oyunSirasi == 1){ // X'in sırası / Sende
			tiles[0][2] = 1;
		oyunSirasi = 2;
		}
	}
	if(mouse.x>0&&mouse.x<265&&mouse.y>200&&mouse.y<400&&tiles[1][0] == 0){ //tile_4
		if(oyunSirasi == 1){ // X'in sırası / Sende
			tiles[1][0] = 1;
		oyunSirasi = 2;
		}
	}
	if(mouse.x>265&&mouse.x<530&&mouse.y>200&&mouse.y<400&&tiles[1][1] == 0){ //tile_5
		if(oyunSirasi == 1){ // X'in sırası / Sende
			tiles[1][1] = 1;
		oyunSirasi = 2;
		}
	}
	if(mouse.x>530&&mouse.x<795&&mouse.y>200&&mouse.y<400&&tiles[1][2] == 0){ //tile_6
		if(oyunSirasi == 1){ // X'in sırası / Sende
			tiles[1][2] = 1;
		oyunSirasi = 2;
		}
	}
	if(mouse.x>0&&mouse.x<265&&mouse.y>400&&mouse.y<600&&tiles[2][0]==0){ //tile_7
		if(oyunSirasi == 1){ // X'in sırası / Sende
			tiles[2][0] = 1;
		oyunSirasi = 2;
		}
	}
	if(mouse.x>265&&mouse.x<530&&mouse.y>400&&mouse.y<600&&tiles[2][1]==0){ //tile_8
		if(oyunSirasi == 1){ // X'in sırası / Sende
			tiles[2][1] = 1;
		oyunSirasi = 2;
		}
	}
	if(mouse.x>530&&mouse.x<795&&mouse.y>400&&mouse.y<600&&tiles[2][2]==0){ //tile_9
		if(oyunSirasi == 1){ // X'in sırası / Sende
			tiles[2][2] = 1;
		oyunSirasi = 2;
		}
	}
	
}
}
function yeniden_baslat(e){
	if(e.key == "r"){
				tiles = [[0,0,0],[0,0,0],[0,0,0]];
			oyunSirasi = 1;
			oyunBitti=false;
			kazanan="";
				sayfa=3;
	};
}
	document.addEventListener("click", tiklanma)
	document.addEventListener("keyup", yeniden_baslat);
})