var theText="Bism ALLAH Arahman Arahim ";
function nextSize(i,incMethod,textLength)
{if(incMethod==1)return(72*Math.abs(Math.sin(i/(textLength/3.14))));
if(incMethod==2)return(255*Math.abs(Math.cos(i/(textLength/3.14))))}

function sizeCycle(text,method,dis){output="";
for(i=0;i<text.length;i++){size=parseInt(nextSize(i+dis,method,text.length));
output+="<font style='font-size: "+0.5*size+"pt'>"+text.substring(i,i+1)+"</font>"}
theDiv.innerHTML=output}
function doWave(n){sizeCycle(theText,1,n);
if(n>theText.length){n=0}setTimeout("doWave("+(n+1)+")",50)}

var dx = -8;//-3
var dsx = -12;
var TURB = 0;
var dy = 3;//1
var dy1 = -4;
var dy2 = -1;
var ROT=100;
var ROT1=100;
var BACKX=0;
var BACKXB=0;
var DBACKX=0;

var STAGE=3;
var AUTOfire=1;

var STOPicon;var STARTicon;

var PLANE,PLANEa,PLANEb;
var TIRER=0;
var PLANEtype=1;
var PLANEY;
var XbombPlane=150;
var ACCELR;
var UP;
var eat, eat1;
var PLANESCORE;
var Xeat,Xeat2,Xeat3;
var Xeat4=0;
var OPACITYTOUCH = 1;
var START;
var HAUT;
//var STOPANIMT;
//var STOPANIMB;
//var bombcharge;
var BOMBPLANE,BOMBPLANE2,BOMBPLANE3;

var SLIDERBACK1,SLIDERBACK2,SLIDERBACK3,SLIDERBACKB;


var bomb;

var score;
var scorelose;
var RANDS,RANDS1,RANDSS,RANDP;

var FR1,FR2,FR3,FR4, FR5, FR6, FR7, FR8;
var FR01,FR02,FR03,FR04, FR05, FR06, FR07, FR08;
var S1,S2,S3,S4,S5;

var STR1,STR2,STR3;
var STR1a,STR1b,STR1c;
var STR2a,STR2b,STR2c;

// For internal use
var bombX, bombY; // x and y positions of bomb
var bombX1, bombY1; 
var SX;// SY;
var ROT3=111;

var PLANE2,PLANE3,PLANE4,PLANE5,PLANE6,PLANE7,PLANE8,PLANE2X,PLANE2Y,EXPLOS,EXPLOSwind;
var iID; // To store ID of set interval used to clear it when required

var audioSTART = new Audio('DATASECRYGH11/sounds/START.mp3');
var audioBOUTTON = new Audio('DATASECRYGH11/sounds/BOUTTON.mp3');

var audioKBIR = new Audio('DATASECRYGH11/sounds/KBIR.mp3'); 
var audioSAFAR = new Audio('DATASECRYGH11/sounds/SAFAR.mp3');
var audioFAGAR = new Audio('DATASECRYGH11/sounds/FAGAR.mp3');


var audioWINFRUIT = new Audio('DATASECRYGH11/sounds/WINFRUIT.mp3');
var audioLOSEBOMB = new Audio('DATASECRYGH11/sounds/LOSEBOMB.mp3');
var audioLOSE = new Audio('DATASECRYGH11/sounds/LOSE.mp3');
var audioEXP = new Audio('DATASECRYGH11/sounds/CHANGE.mp3');
var audioCANON = new Audio('DATASECRYGH11/sounds/CANON.mp3');
 
var audioPLANERUN = new Audio('DATASECRYGH11/sounds/PLANE1.mp3'); 

var audioTRAIN1 = new Audio('DATASECRYGH11/sounds/TRAIN1.mp3');
var audioTRAIN2 = new Audio('DATASECRYGH11/sounds/TRAIN2.mp3');
var audioTIRER1 = new Audio('DATASECRYGH11/sounds/TIRER1.mp3');
var audioHAHA = new Audio('DATASECRYGH11/sounds/HAHA.mp3');
 
var TIR=0;
// Attach a function to onLoad event
window.onload = doWave(0); 
window.onload = Init;

// INITIALIZE GAME OBJECTS
function Init()
{          
   iID = setInterval('BEGINGameLoop()', 30);
           /* document.getElementById("loading").style.display = "none";
			document.getElementById("loading2").style.display = "none";
            document.getElementById("loadingcontent").style.display = "block";*/
   //  OBJECTS INITIALISATION
   
   /*
   STOPANIMT = document.getElementById('STOPANIMT');
   document.getElementById("STOPANIMT").style.opacity=1;
   STOPANIMT.style.left = 8 + 'px';
   STOPANIMT.style.top = 8 + 'px';

   STOPANIMB = document.getElementById('STOPANIMB');
   document.getElementById("STOPANIMB").style.opacity=1;
   STOPANIMB.style.left = 8 + 'px';
   STOPANIMB.style.top = 455 + 'px'; */
   STOPicon= document.getElementById('STOPicon');STARTicon= document.getElementById('STARTicon');
   STOPicon.style.width = STOPicon.style.height = 0 + 'px';STARTicon.style.width = STARTicon.style.height = 60 + 'px';
   PLANE = document.getElementById('PLANE');PLANEa = document.getElementById('PLANEa');PLANEb = document.getElementById('PLANEb');
   document.getElementById("PLANEa").style.opacity = document.getElementById("PLANEb").style.opacity = 0;
  // XbombPlane = document.getElementById('XbombPlane');
   
   PLANE2 = document.getElementById('PLANE2');PLANE3 = document.getElementById('PLANE3');
   PLANE4 = document.getElementById('PLANE4');PLANE5 = document.getElementById('PLANE5');
   PLANE6 = document.getElementById('PLANE6');PLANE7 = document.getElementById('PLANE7');PLANE8 = document.getElementById('PLANE8');
   
   document.getElementById("PLANE2").style.opacity = document.getElementById("PLANE3").style.opacity =
   document.getElementById("PLANE4").style.opacity = document.getElementById("PLANE5").style.opacity =
   document.getElementById("PLANE6").style.opacity = document.getElementById("PLANE7").style.opacity = document.getElementById("PLANE8").style.opacity = 0;
   
   ACCELR = document.getElementById('ACCELR');
   eat = document.getElementById('eat');
   eat1 = document.getElementById('eat1');
   Xeat = document.getElementById('Xeat');
   Xeat2 = document.getElementById('Xeat2');
   Xeat3 = document.getElementById('Xeat3');
   
   
   bomb = document.getElementById('bomb');
   document.getElementById("bomb").style.opacity=0;
   
   EXPLOS = document.getElementById('EXPLOS');
   document.getElementById("EXPLOS").style.opacity=0;
   
   EXPLOSwind = document.getElementById('EXPLOSwind');
   document.getElementById("EXPLOSwind").style.opacity=1;
   
 
   

   FR1 = document.getElementById('FR1');FR2 = document.getElementById('FR2');
   FR3 = document.getElementById('FR3');FR4 = document.getElementById('FR4');
   FR5 = document.getElementById('FR5');FR6 = document.getElementById('FR6');
   FR7 = document.getElementById('FR7');FR8 = document.getElementById('FR8');
   
   FR01 = document.getElementById('FR01');FR02 = document.getElementById('FR02');
   FR03 = document.getElementById('FR03');FR04 = document.getElementById('FR04');
   FR05 = document.getElementById('FR05');FR06 = document.getElementById('FR06');
   FR07 = document.getElementById('FR07');FR08 = document.getElementById('FR08');
   
   
   document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
   document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
   document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
   document.getElementById("FR7").style.opacity = document.getElementById("FR8").style.opacity = 0;
   
   document.getElementById("FR01").style.opacity = document.getElementById("FR02").style.opacity =
   document.getElementById("FR03").style.opacity = document.getElementById("FR04").style.opacity =
   document.getElementById("FR05").style.opacity = document.getElementById("FR06").style.opacity =
   document.getElementById("FR07").style.opacity = document.getElementById("FR08").style.opacity = 0;

   S1 = document.getElementById('S1');
   S2 = document.getElementById('S2');S3 = document.getElementById('S3');
   S4 = document.getElementById('S4');S5 = document.getElementById('S5');
   
   document.getElementById("S1").style.opacity = 0;
   document.getElementById("S2").style.opacity = document.getElementById("S3").style.opacity = 
   document.getElementById("S4").style.opacity = document.getElementById("S5").style.opacity = 0;
   
   
   STR1 = document.getElementById('STR1');STR1a = document.getElementById('STR1a');
   STR1b = document.getElementById('STR1b');STR1c = document.getElementById('STR1c');
   STR2  = document.getElementById('STR2');STR2a  = document.getElementById('STR2a');
   STR2b  = document.getElementById('STR2b');STR2c  = document.getElementById('STR2c');   
   STR3 = document.getElementById('STR3');  

	    document.getElementById("STR1").style.opacity = document.getElementById("STR1a").style.opacity =
		document.getElementById("STR1b").style.opacity =document.getElementById("STR1c").style.opacity = 
		document.getElementById("STR2").style.opacity  = document.getElementById("STR2a").style.opacity  = 
		document.getElementById("STR2b").style.opacity  = document.getElementById("STR2c").style.opacity  = 
		document.getElementById("STR3").style.opacity =  0;   
   
   
   
   
   RANDSS = document.getElementById('RANDSS'); 
   document.getElementById("RANDSS").style.opacity =0;

   RANDS = document.getElementById('RANDS'); 
   document.getElementById("RANDS").style.opacity =0;
   
   RANDS1 = document.getElementById('RANDS1'); 
   document.getElementById("RANDS1").style.opacity =0;
   
   RANDP = document.getElementById('RANDP'); 
   document.getElementById("RANDP").style.opacity =0;
    
	
   
   

   // Initial values
   bombX =  840 ;// (boxgame.offsetWidth / 2) - (bomb.offsetWidth / 2);boxgame.offsetWidth - (canon.offsetWidth + 90) ;
   bombY = 200;//(boxgame.offsetHeight / 2) - (bomb.offsetHeight / 2)-70;
   bombX1 =  990 ;// (boxgame.offsetWidth / 2) - (bomb.offsetWidth / 2);boxgame.offsetWidth - (canon.offsetWidth + 90) ;
   bombY1 = 100;
   SX=1000;
   PLANEY=280;
   XbombPlane=1050;
   ACCELR = 0;
   UP=0;
   
   PLANE2Y=10;
   PLANE2X=1280;
   
   PLANE.style.left = PLANEa.style.left = PLANEb.style.left = 150 + 'px';
   PLANE.style.top = PLANEa.style.top = PLANEb.style.top = PLANEY + 'px';
   
   BOMBPLANE  = document.getElementById('BOMBPLANE');BOMBPLANE2  = document.getElementById('BOMBPLANE2');BOMBPLANE3 = document.getElementById('BOMBPLANE3');
   document.getElementById("BOMBPLANE").style.opacity=document.getElementById("BOMBPLANE2").style.opacity=document.getElementById("BOMBPLANE3").style.opacity=0;
   BOMBPLANE.style.top  = BOMBPLANE2.style.top  =BOMBPLANE3.style.top  =PLANEY + 'px';
   BOMBPLANE.style.left  = 150+ 'px'; 
   BOMBPLANE.style.left  = 150+ 'px'; 
   BOMBPLANE.style.left  = 150+ 'px'; 
   
   PLANE2.style.left = PLANE3.style.left = PLANE4.style.left = PLANE5.style.left =PLANE6.style.left = PLANE7.style.left = PLANE8.style.left = EXPLOS.style.left = 1280 + 'px';
   PLANE2.style.top  = PLANE3.style.top  = PLANE4.style.top  = PLANE5.style.top  =PLANE6.style.top  = PLANE7.style.top  = PLANE8.style.top = EXPLOS.style.top  = 10 + 'px';
   
   
   BACKX = document.getElementById('BACKX');BACKXB = document.getElementById('BACKXB');
   BACKX = 0;BACKXB = 0;
   
   
   SLIDERBACK1 = document.getElementById('SLIDERBACK1');SLIDERBACK2 = document.getElementById('SLIDERBACK2');
   SLIDERBACK3 = document.getElementById('SLIDERBACK3');SLIDERBACKB = document.getElementById('SLIDERBACKB');
   
   document.getElementById("SLIDERBACK1").style.opacity = 1; document.getElementById("SLIDERBACK2").style.opacity=document.getElementById("SLIDERBACK3").style.opacity=0;
   SLIDERBACK1.style.left = SLIDERBACK2.style.left = SLIDERBACK3.style.left = SLIDERBACKB.style.left = 0 + 'px';
   SLIDERBACK1.style.top = SLIDERBACK2.style.top = SLIDERBACK3.style.top = 0 + 'px';
   SLIDERBACKB.style.top = 448 + 'px';
   
   
   
   eat=0;
   eat1=0;
   Xeat=0;
   Xeat2=0;
   Xeat3=0;
   
 

   
   bomb.style.left  = bombX + 'px';
   bomb.style.top  = bombY + 'px';

   FR1.style.left = FR2.style.left  = FR3.style.left  = FR4.style.left  = FR5.style.left = FR6.style.left  = FR7.style.left  =FR8.style.left = bombX + 'px';
   FR1.style.top  = FR2.style.top  =  FR3.style.top  = FR4.style.top  = FR5.style.top  = FR6.style.top  =  FR7.style.top  =FR8.style.top   = bombY + 'px';
    
   FR01.style.left = FR02.style.left  = FR03.style.left  = FR04.style.left  = FR05.style.left = FR06.style.left  = FR07.style.left  = FR08.style.left  = bombX1 + 'px';
   FR01.style.top  = FR02.style.top  =  FR03.style.top   = FR04.style.top   = FR05.style.top  = FR06.style.top   = FR07.style.top   = FR08.style.top   =   bombY1 + 'px';
   
 
 
   S1.style.left = S2.style.left = S3.style.left  = S4.style.left  = S5.style.left  = EXPLOSwind.style.left  = 1000 + 'px'; 
   S1.style.top  = 250+ 'px'; 
   S2.style.top  = 250+ 'px';
   S3.style.top  = 250+ 'px'; 
   S4.style.top  = 250+ 'px';
   S5.style.top  = 250+ 'px';
   
   EXPLOSwind.style.top  = 250 + 'px'; 
   
   
   
   STR1.style.left = STR1a.style.left = STR1b.style.left = STR1c.style.left =1000 + 'px'; 
   STR2.style.left = STR2a.style.left = STR2b.style.left = STR2c.style.left = STR3.style.left = 1000 + 'px'; 
   STR1.style.top  = STR1a.style.top  = STR1b.style.top  = STR1c.style.top  =  345 + 'px';
   STR2.style.top = STR2a.style.top = STR2b.style.top = STR2c.style.top =  STR3.style.top = 350+ 'px'; 
 
   // Show score
   HAUT = document.getElementById('HAUT');
   START = document.getElementById('START');
   score = document.getElementById('score');
   scorelose = document.getElementById('scorelose');
   scorelose.innerHTML=20;
   score.innerHTML=0;
   HAUT.innerHTML=0;
   
   PLANESCORE = document.getElementById('PLANESCORE');
   PLANESCORE.innerHTML=0;
   
 /*  bombcharge = document.getElementById('bombcharge'); 
   bombcharge.innerHTML=0; */
  
//   START.innerHTML=0;
   
//   START=0;

 		RANDSS.innerHTML = Math.floor((Math.random() * 5) + 1);
            if(RANDSS.innerHTML ==1){document.getElementById("S1").style.opacity=1;}	
          	if(RANDSS.innerHTML ==2){document.getElementById("S2").style.opacity=1;}	
         	if(RANDSS.innerHTML ==3){document.getElementById("S3").style.opacity=1;}	
	        if(RANDSS.innerHTML ==4){document.getElementById("S4").style.opacity=1;} 
			if(RANDSS.innerHTML ==5){document.getElementById("S5").style.opacity=1;}
			
    RANDP.innerHTML = Math.floor((Math.random() * 7) + 1);
            if(RANDP.innerHTML ==1){document.getElementById("PLANE2").style.opacity=1;}	
	        if(RANDP.innerHTML ==2){document.getElementById("PLANE3").style.opacity=1;}	
            if(RANDP.innerHTML ==3){document.getElementById("PLANE4").style.opacity=1;}	
	        if(RANDP.innerHTML ==4){document.getElementById("PLANE5").style.opacity=1;}	
			if(RANDP.innerHTML ==5){document.getElementById("PLANE6").style.opacity=1;}	
	        if(RANDP.innerHTML ==6){document.getElementById("PLANE7").style.opacity=1;}	
			if(RANDP.innerHTML ==7){document.getElementById("PLANE8").style.opacity=1;}	
   
    RANDS.innerHTML = Math.floor((Math.random() * 8) + 1);
    if(RANDS.innerHTML ==1){document.getElementById("FR1").style.opacity=1;}	
	if(RANDS.innerHTML ==2){document.getElementById("FR2").style.opacity=1;}	
	if(RANDS.innerHTML ==3){document.getElementById("FR3").style.opacity=1;}	
	if(RANDS.innerHTML ==4){document.getElementById("FR4").style.opacity=1;} 
	if(RANDS.innerHTML ==5){document.getElementById("FR5").style.opacity=1;}	
	if(RANDS.innerHTML ==6){document.getElementById("FR6").style.opacity=1;}	
	if(RANDS.innerHTML ==7){document.getElementById("FR7").style.opacity=1;}
	if(RANDS.innerHTML ==8){document.getElementById("FR8").style.opacity=1;}


	RANDS1.innerHTML=Math.floor((Math.random() * 8) + 1);
    if(RANDS1.innerHTML ==1){document.getElementById("FR01").style.opacity=1;}	
	if(RANDS1.innerHTML ==2){document.getElementById("FR02").style.opacity=1;}	
	if(RANDS1.innerHTML ==3){document.getElementById("FR03").style.opacity=1;}	
	if(RANDS1.innerHTML ==4){document.getElementById("FR04").style.opacity=1;} 
	if(RANDS1.innerHTML ==5){document.getElementById("FR05").style.opacity=1;}	
	if(RANDS1.innerHTML ==6){document.getElementById("FR06").style.opacity=1;}	
	if(RANDS1.innerHTML ==7){document.getElementById("FR07").style.opacity=1;}
	if(RANDS1.innerHTML ==8){document.getElementById("FR08").style.opacity=1;}}

	
	
function STAGE1(){STAGE=1;audioBOUTTON.play();}
function STAGE2(){STAGE=2;audioBOUTTON.play();}
function STAGE3(){STAGE=3;audioBOUTTON.play();}	
	
function PLANNE1(){  PLANEtype=1;audioBOUTTON.play();}
function PLANNE2(){  PLANEtype=2;audioBOUTTON.play();}
function PLANNE3(){  PLANEtype=3;audioBOUTTON.play();}

function AUTO(){ AUTOfire=1;audioBOUTTON.play();}
function NAUTO(){ AUTOfire=0;audioBOUTTON.play();}
// START & RESET GAME
function Startt()
{   START+=1;
    audioBOUTTON.play();
    if(START>1)
        {START=0;
		audioPLANERUN.pause();}
 if(START==1)
   {boxgame.onmousedown = movePLANE;
   STOPicon.style.width = STOPicon.style.height = 60 + 'px';STARTicon.style.width = STARTicon.style.height = 0 + 'px';
   //onmousedown  ondblclick
   boxgame.ondblclick = tirerPLANE;
   iID = setInterval('GameLoop()', 30);// Call 'GameLoop()' function every 10 milliseconds
   audioSTART.play();//msg.innerHTML = ''; 
   audioPLANERUN.play();
   audioPLANERUN.loop= true;
 //  document.getElementById("STOPANIMT").style.opacity=0;
 //  document.getElementById("STOPANIMB").style.opacity=0;
   document.getElementById("PLANE").style.transform = document.getElementById("PLANEa").style.transform =document.getElementById("PLANEb").style.transform  = "rotate(-40deg)"; 
   UP=-15 ;
   //DBACKX=10;
   }   
  if(START==0)
   {clearInterval(iID);
      Init();STOPicon.style.width = STOPicon.style.height = 0 + 'px';STARTicon.style.width = STARTicon.style.height = 60 + 'px';
      boxgame.onmousemove = '';
	  boxgame.ondblclick = '';
	  audioPLANERUN.pause();
	  OPACITYTOUCH=1;
	 // document.getElementById("PLANE").style.opacity = 1;
	  document.getElementById("PLANE").style.transform = document.getElementById("PLANEa").style.transform =document.getElementById("PLANEb").style.transform = "rotate(0deg)";}}

//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
function movePLANE(e2)
       {var y2 = (e2.clientY - (boxgame.offsetTop + 60 - document.documentElement.scrollTop));
	  if(PLANEY>=10){
	  
	   document.getElementById("PLANE").style.transform = document.getElementById("PLANEa").style.transform =document.getElementById("PLANEb").style.transform = "rotate(-40deg)"; 
	   ACCELR=ACCELR+1; 
	   UP=-10 ; 
	   }}
	   
/*  */
function tirerPLANE()
       {TIRER=1;audioTIRER1.play();
	   document.getElementById("BOMBPLANE").style.opacity=document.getElementById("BOMBPLANE2").style.opacity=document.getElementById("BOMBPLANE3").style.opacity=1;}	   
   
 function BEGINGameLoop()
  {
 
  if (STAGE ==1)   
   {document.getElementById("SLIDERBACK1").style.opacity=1;
   document.getElementById("SLIDERBACK2").style.opacity = document.getElementById("SLIDERBACK3").style.opacity=0;}
  if (STAGE ==2)   
   {document.getElementById("SLIDERBACK2").style.opacity=1;
   document.getElementById("SLIDERBACK1").style.opacity = document.getElementById("SLIDERBACK3").style.opacity=0;}
  if (STAGE ==3)   
   {document.getElementById("SLIDERBACK3").style.opacity=1;
   document.getElementById("SLIDERBACK1").style.opacity = document.getElementById("SLIDERBACK2").style.opacity=0;}

   

   if(PLANEtype==1){document.getElementById("PLANE").style.opacity = 1;document.getElementById("PLANEa").style.opacity =document.getElementById("PLANEb").style.opacity =0;}
   if(PLANEtype==2){document.getElementById("PLANEa").style.opacity = 1;document.getElementById("PLANE").style.opacity =document.getElementById("PLANEb").style.opacity =0;}
   if(PLANEtype==3){document.getElementById("PLANEb").style.opacity = 1;document.getElementById("PLANE").style.opacity =document.getElementById("PLANEa").style.opacity =0;}}

   
function GameLoop()
{
 
  BACKX=BACKX-20;
   if(BACKX<=-3800+DBACKX){BACKX=0}//if(BACKX<=-3800){BACKX=0}
   
   
   if (PLANESCORE.innerHTML==15) {STAGE=2;DBACKX=0;}
   if (PLANESCORE.innerHTML==30) {STAGE=1;DBACKX=0;}//{STAGE=3;DBACKX=2850;}
   
   if(   (STAGE ==1)   ||     ((PLANESCORE.innerHTML>15)&&(STAGE ==1))            )  //(PLANESCORE.innerHTML<15)   || 
   {document.getElementById("SLIDERBACK1").style.opacity=1;
   document.getElementById("SLIDERBACK2").style.opacity = document.getElementById("SLIDERBACK3").style.opacity=0;
   SLIDERBACK1.style.left = BACKX +'px';DBACKX=0;}
   
   if(  ((PLANESCORE.innerHTML>15)&&(PLANESCORE.innerHTML<30)&&(STAGE ==2))   ||   (STAGE ==2)  ||   (PLANESCORE.innerHTML==15)  )
   {document.getElementById("SLIDERBACK2").style.opacity=1;
   document.getElementById("SLIDERBACK1").style.opacity = document.getElementById("SLIDERBACK3").style.opacity=0;
   SLIDERBACK2.style.left = BACKX +'px';DBACKX=0;}
   
   
    if(  ((PLANESCORE.innerHTML>30)&&(STAGE ==3))   ||   (STAGE ==3)   ) //||   (PLANESCORE.innerHTML==30) 
   {document.getElementById("SLIDERBACK3").style.opacity=1;
   document.getElementById("SLIDERBACK1").style.opacity = document.getElementById("SLIDERBACK2").style.opacity=0;
   DBACKX=2850;
   SLIDERBACK3.style.left = BACKX +'px';}









  
   
    BACKXB+=-30;
   if(BACKXB<=-950){BACKXB=0}
   SLIDERBACKB.style.left = BACKXB +'px';
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   bombX += dx;
   bombY += dy;
   bombX1 += (dx+1);
   bombY1 += dy1;
  // SX += dsx;
   SX += dsx+TURB;
 
   UP+=0.5;
   PLANEY=PLANEY+UP;
  
	  
    if(PLANEY<=-30)
        {PLANEY=-29;
        audioKBIR.play();
	   // document.getElementById("PLANE").style.transform = "rotate(0deg)"; 
		}
	 
    if(UP>0)	 
	   { document.getElementById("PLANE").style.transform = document.getElementById("PLANEa").style.transform =document.getElementById("PLANEb").style.transform = "rotate(0deg)"; }
	


    if (AUTOfire==0)	
	        {
             	if(TIRER==1)
                     {XbombPlane+=30;
	                  document.getElementById("BOMBPLANE").style.opacity=document.getElementById("BOMBPLANE2").style.opacity=document.getElementById("BOMBPLANE3").style.opacity=1;}	
                if(XbombPlane>=800)
	                 {XbombPlane=200;
	                 TIRER=0;
	                 document.getElementById("BOMBPLANE").style.opacity=document.getElementById("BOMBPLANE2").style.opacity=document.getElementById("BOMBPLANE3").style.opacity=0;}
            }
	  
	 if (AUTOfire==1)
	        {
	            if( XbombPlane<1000){XbombPlane+=25;}
  
               if(  (XbombPlane>=PLANE2X+100)  &&  (Xeat3==1)   )
    	             { XbombPlane=150;Xeat3=0;
	                  document.getElementById("BOMBPLANE").style.opacity=document.getElementById("BOMBPLANE2").style.opacity=document.getElementById("BOMBPLANE3").style.opacity=0;}
	
               if (  (XbombPlane>=SX+100)  && (TIR==1)  )
	                 {XbombPlane=150;TIR=0;
	                 document.getElementById("BOMBPLANE").style.opacity=document.getElementById("BOMBPLANE2").style.opacity=document.getElementById("BOMBPLANE3").style.opacity=0;}
	        }
	
	//if (SX < -50) {Xeat4=0;}	
	
	
	
   
	PLANE.style.top = PLANEa.style.top = PLANEb.style.top = PLANEY + 'px';
	//BOMBPLANE.style.top  = BOMBPLANE2.style.top  = BOMBPLANE3.style.top  = PLANEY +60+ 'px';
	BOMBPLANE3.style.top  = PLANEY +60+ 'px';
	BOMBPLANE2.style.top  = PLANEY +80+ 'px';
	BOMBPLANE.style.top   = PLANEY +50+ 'px';
	
	BOMBPLANE.style.left = XbombPlane + 'px';
	BOMBPLANE2.style.left = XbombPlane+88 + 'px';
	BOMBPLANE3.style.left = XbombPlane +180+ 'px';
    HAUT.innerHTML=Math.trunc(  -(0.4*PLANEY)+120  );
 

 	if( PLANE2Y > 270 || PLANE2Y < -10 )
       {dy2 = -dy2;}   
    PLANE2X += - 20; //20
    PLANE2Y += dy2; 
	
  //  BOMBPLANE.style.top  =  PLANEY  + 'px';
  //  BOMBPLANE.style.left =  PLANEX + 133 + 'px'; 
	
   PLANE2.style.left = PLANE3.style.left = PLANE4.style.left = PLANE5.style.left =PLANE6.style.left = PLANE7.style.left = PLANE8.style.left = EXPLOS.style.left = PLANE2X + 'px'; 
   PLANE2.style.top  = PLANE3.style.top  = PLANE4.style.top  = PLANE5.style.top  =PLANE6.style.top  = PLANE7.style.top  = PLANE8.style.top  = EXPLOS.style.top =  PLANE2Y + 'px'; 
   
    if (PLANE2X < -1300)
        {PLANE2X=900;
		 ROT=100;
		// bombcharge.innerHTML = Math.floor((Math.random() * 6) + 1);
		// if(bombcharge.innerHTML<=4){document.getElementById("BOMBMONSTER").style.opacity = 1;}
		// if(bombcharge.innerHTML>5){document.getElementById("BOMBMONSTER").style.opacity = 0;}
		 document.getElementById("EXPLOS").style.opacity = 0;
		 PLANE2Y = Math.floor((Math.random() * 200) + 30);
		 document.getElementById("PLANE2").style.transform =document.getElementById("PLANE3").style.transform =
         document.getElementById("PLANE4").style.transform =document.getElementById("PLANE5").style.transform = 
         document.getElementById("PLANE6").style.transform =document.getElementById("PLANE7").style.transform =
         document.getElementById("PLANE8").style.transform = "rotate(0deg)";	
		 
		 document.getElementById("PLANE2").style.opacity = document.getElementById("PLANE3").style.opacity =
         document.getElementById("PLANE4").style.opacity = document.getElementById("PLANE5").style.opacity =
         document.getElementById("PLANE6").style.opacity = document.getElementById("PLANE7").style.opacity =
         document.getElementById("PLANE8").style.opacity =		 0;
         RANDP.innerHTML = Math.floor((Math.random() * 7) + 1);
            if(RANDP.innerHTML ==1){document.getElementById("PLANE2").style.opacity=1;audioHAHA.play();}	
	        if(RANDP.innerHTML ==2){document.getElementById("PLANE3").style.opacity=1;}	
            if(RANDP.innerHTML ==3){document.getElementById("PLANE4").style.opacity=1;}	
	        if(RANDP.innerHTML ==4){document.getElementById("PLANE5").style.opacity=1;}	
			if(RANDP.innerHTML ==5){document.getElementById("PLANE6").style.opacity=1;}	
	        if(RANDP.innerHTML ==6){document.getElementById("PLANE7").style.opacity=1;}	
			if(RANDP.innerHTML ==7){document.getElementById("PLANE8").style.opacity=1;}	
			
		 Xeat3=0;}	

 
 //############################################ GAME OVER ###################################################################
//############################################# GAME OVER ###################################################################
//############################################## GAME OVER ###################################################################
//############################################### GAME OVER ################################################################## 
   if (scorelose.innerHTML <=0)
     {   
      clearInterval(iID);
      Init();
      boxgame.onmousemove = '';
	  boxgame.ondblclick = '';
      audioSAFAR.play();
	  audioPLANERUN.pause();
	  OPACITYTOUCH=1;
	  if(PLANEtype==1){document.getElementById("PLANE").style.opacity = 1;}
	  if(PLANEtype==2){document.getElementById("PLANEa").style.opacity = 1;}
	  if(PLANEtype==3){document.getElementById("PLANEb").style.opacity = 1;}
	  } 
//############################################ GAME OVER ###############################################################################
//############################################# GAME OVER ###################################################################
//############################################## GAME OVER ###################################################################
//############################################### GAME OVER ##################################################################
//###########################################################################################################################
   
   
//########################################################################################################################### 
   // COLLISION DETECTION
   // If bomb hits upper or lower wall
   if(bombY < 10 || ((bombY + bomb.offsetHeight) > boxgame.offsetHeight))
       {dy = -dy;}


   if(bombY1 < 10 || ((bombY1 + bomb.offsetHeight) > boxgame.offsetHeight))
      {dy1 = -dy1;}	  
 
 if (  (score.innerHTML % 10 === 0) && (score.innerHTML>=1)  )
 {score.innerHTML++;
 scorelose.innerHTML++;}
//################################################# EAT FRUIT
//################################################# EAT FRUIT
 if (   ( dx<0)  && ( bombX<300)  && (bombX>100) && (eat==0)     &&  ( (bombY + bomb.offsetHeight) > PLANEY)           )   
    { 	  
      if     ( bombY< (PLANEY + (bomb.offsetHeight))  )    
	   {score.innerHTML++;
		eat=1;
		 audioWINFRUIT.play();
	    document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
        document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
        document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
        document.getElementById("FR7").style.opacity = document.getElementById("FR8").style.opacity = 0;}}		

//################################################# EAT FRUIT1
//################################################# EAT FRUIT1
 if (   ( bombX1<300)  && (bombX1>100) && (eat1==0)     &&  ( (bombY1 + bomb.offsetHeight) > PLANEY)  && (RANDS1.innerHTML<=8)           )   
    { 	  
      if     ( bombY1< (PLANEY + (bomb.offsetHeight))  )    
	   {score.innerHTML++;
		eat1=1;
		 audioWINFRUIT.play();
	    document.getElementById("FR01").style.opacity = document.getElementById("FR02").style.opacity =
        document.getElementById("FR03").style.opacity = document.getElementById("FR04").style.opacity =
        document.getElementById("FR05").style.opacity = document.getElementById("FR06").style.opacity =
        document.getElementById("FR07").style.opacity = document.getElementById("FR08").style.opacity = 0;}}		


//################################################# MONSTER TOUCH
//################################################# MONSTER TOUCH

 if (   ( PLANE2X<300)  && (PLANE2X>50) && (Xeat3==0)  &&  ( (PLANE2Y + bomb.offsetHeight) > PLANEY)  &&  (RANDP.innerHTML>=1)   &&  (TIRER==0)  && (AUTOfire==0)    )   
    { 	  
      if     ( PLANE2Y< (PLANEY + (bomb.offsetHeight))  )    
		{scorelose.innerHTML--;
		Xeat3=1;
		ROT1=0;
		OPACITYTOUCH=-30;
		document.getElementById("PLANE").style.opacity =document.getElementById("PLANEa").style.opacity =document.getElementById("PLANEb").style.opacity = 0.5;
		audioEXP.play();
		audioLOSEBOMB.play();}}	 
	if(ROT1 < 34)
       {  ROT1++  ;
	   	     if(PLANEtype==1){document.getElementById("PLANE").style.opacity = 0.5;}
	         if(PLANEtype==2){document.getElementById("PLANEa").style.opacity = 0.5;}
	         if(PLANEtype==3){document.getElementById("PLANEb").style.opacity = 0.5;}
        document.getElementById("PLANE").style.transform =document.getElementById("PLANEa").style.transform =document.getElementById("PLANEb").style.transform =  " rotate(" + (10*ROT1) + "deg)"  ;}	
    if(ROT1 == 33)
	    {	 if(PLANEtype==1){document.getElementById("PLANE").style.opacity = 1;}
	         if(PLANEtype==2){document.getElementById("PLANEa").style.opacity = 1;}
	         if(PLANEtype==3){document.getElementById("PLANEb").style.opacity = 1;} }

if (   ( PLANE2X<600)  && (PLANE2X>250) && (Xeat3==0)     &&  ( (PLANE2Y + bomb.offsetHeight) > PLANEY)  &&  (RANDP.innerHTML >=1)  &&  ((TIRER==1)|| (AUTOfire==1))      )   
    { 	  
      if  ( PLANE2Y< (PLANEY + (bomb.offsetHeight))  )  	  
		      {PLANESCORE.innerHTML++;
		      Xeat3=1;
              ROT=0;
		      PLANE2Y += 10;
		     document.getElementById("EXPLOS").style.opacity = 1;
		if(AUTOfire==1){
		     XbombPlane=200;audioTIRER1.play();
			 document.getElementById("BOMBPLANE").style.opacity=document.getElementById("BOMBPLANE2").style.opacity=document.getElementById("BOMBPLANE3").style.opacity=1;}
		if (RANDP.innerHTML ==1){audioFAGAR.play();}

		   }
    }
		
	if(ROT < 30)
       {  ROT++  ;
	       if(ROT== 10)
               {audioLOSE.play();}	
       document.getElementById("PLANE2").style.transform =document.getElementById("PLANE3").style.transform =
       document.getElementById("PLANE4").style.transform =document.getElementById("PLANE5").style.transform =
       document.getElementById("PLANE6").style.transform =document.getElementById("PLANE7").style.transform =
       document.getElementById("PLANE8").style.transform =	 " rotate(" + (10*ROT) + "deg)"  ;}			
	  
//################################################# EARTH FALL
//################################################# EARTH FALL   

 if (   (Xeat2==0)  &&  ( PLANEY >= 360)           )   
    { 	  
        scorelose.innerHTML--;
		Xeat2=1;
		UP=-10;
		OPACITYTOUCH=-30;
		//document.getElementById("PLANE").style.opacity = 0.2;
		document.getElementById("PLANE").style.transform = document.getElementById("PLANEa").style.transform =document.getElementById("PLANEb").style.transform = "rotate(-180deg)";
		audioLOSEBOMB.play();
		audioLOSE.play();}  

 if    ( PLANEY < 300)            
           {Xeat2=0;}   		
 
 if    ( PLANEY < 200)            
           {Xeat=0;}  
	
//################################################# WINDMILE TOUCH
//################################################# WINDMILE TOUCH   
 if (   ( SX<300)  && (SX>200)  && (Xeat==0)  &&  ( PLANEY >= 190)  && ( Xeat4==0)  &&  (TIRER==0) && (AUTOfire==0)       )   
    { 	  
        scorelose.innerHTML--;
		Xeat=1;
		UP=-10;
		OPACITYTOUCH=-30;
		document.getElementById("PLANE").style.opacity = 0.2;
		document.getElementById("PLANE").style.transform = "rotate(-180deg)";
		audioLOSEBOMB.play();
		audioLOSE.play();}    	
//################################################# WINDMILE EXP
//################################################# WINDMILE EXP   
 if (   ( SX<700)  && (SX>=200)  && (TIR==0)  &&  ( PLANEY >= 150)  &&    ((TIRER==1) || (AUTOfire==1))           )   
    { 	  
       // document.getElementById("BOMBPLANE").style.opacity=document.getElementById("BOMBPLANE2").style.opacity=document.getElementById("BOMBPLANE3").style.opacity=1;
		//Xeat4=1;
		ROT3=0;
		TIR=1;
		//XbombPlane=200;
		document.getElementById("EXPLOSwind").style.opacity=1;
		//audioTIRER1.play();
		} 

    if(ROT3<30)
	{ ROT3++;
		document.getElementById("S1").style.transform = document.getElementById("S2").style.transform = 
		document.getElementById("S3").style.transform = document.getElementById("S4").style.transform =
		document.getElementById("S5").style.transform =   " rotate(" + (10*ROT3) + "deg)"  ;}
   if(ROT3>25)
	{ TIR=0;}

 
 
    if( (OPACITYTOUCH<1)  && (PLANEtype==1)  )
	    {OPACITYTOUCH+=1;
		if   (OPACITYTOUCH % 2 === 0) 
		      {document.getElementById("PLANE").style.opacity = 0.8;}
		if   (OPACITYTOUCH % 3 === 0) 
		      {document.getElementById("PLANE").style.opacity = 0.2;}}
	if( (OPACITYTOUCH >=1)  && (PLANEtype==1)  )
	          {document.getElementById("PLANE").style.opacity = 1;
			  Xeat=0;}
			  
			  
    if( (OPACITYTOUCH<1)  && (PLANEtype==2)  )
	    {OPACITYTOUCH+=1;
		if   (OPACITYTOUCH % 2 === 0) 
		      {document.getElementById("PLANEa").style.opacity = 0.8;}
		if   (OPACITYTOUCH % 3 === 0) 
		      {document.getElementById("PLANEa").style.opacity = 0.2;}}
	if( (OPACITYTOUCH >=1)  && (PLANEtype==2)  )
	          {document.getElementById("PLANEa").style.opacity = 1;
			  Xeat=0;}
			  
    if( (OPACITYTOUCH<1)  && (PLANEtype==3)  )
	    {OPACITYTOUCH+=1;
		if   (OPACITYTOUCH % 2 === 0) 
		      {document.getElementById("PLANEb").style.opacity = 0.8;}
		if   (OPACITYTOUCH % 3 === 0) 
		      {document.getElementById("PLANEb").style.opacity = 0.2;}}
	if( (OPACITYTOUCH >=1)  && (PLANEtype==3)  )
	          {document.getElementById("PLANEb").style.opacity = 1;
			  Xeat=0;}			  
   	    
   	 
//################################################# BOMB FRUIT LIMIT CANON SIDE          
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 

    if(score.innerHTML<=0){score.innerHTML=0;}
	
	if (SX < -1500)                
        {document.getElementById("S1").style.opacity =  document.getElementById("S2").style.opacity = 
		 document.getElementById("S3").style.opacity = document.getElementById("S4").style.opacity = 
		 document.getElementById("S5").style.opacity = 
		 
		 document.getElementById("STR1").style.opacity = document.getElementById("STR1a").style.opacity = 
		 document.getElementById("STR1b").style.opacity = document.getElementById("STR1c").style.opacity = 
		 document.getElementById("STR2").style.opacity  = document.getElementById("STR2a").style.opacity  = 
		 document.getElementById("STR2b").style.opacity  = document.getElementById("STR2c").style.opacity  = 
		 document.getElementById("STR3").style.opacity = 0;
		 SX=1000; //890
		 Xeat=0;
		 Xeat4=0;
		 TURB=0;
		 document.getElementById("S1").style.transform = document.getElementById("S2").style.transform = 
		 document.getElementById("S3").style.transform = document.getElementById("S4").style.transform =
		 document.getElementById("S5").style.transform =   " rotate(0deg)"  ;
		 
		 document.getElementById("EXPLOSwind").style.opacity=0;
		 
	
		RANDSS.innerHTML = Math.floor((Math.random() * 10) + 1);
            if(RANDSS.innerHTML ==1){document.getElementById("S1").style.opacity=1;}	
          	if(RANDSS.innerHTML ==2){document.getElementById("S2").style.opacity=1;}	
         	if(RANDSS.innerHTML ==3){document.getElementById("S3").style.opacity=1;}	
	        if(RANDSS.innerHTML ==4){document.getElementById("S4").style.opacity=1;} 
			if(RANDSS.innerHTML ==5){document.getElementById("S5").style.opacity=1;}
       	
          	if (  (RANDSS.innerHTML ==6) || (RANDSS.innerHTML ==7) )
			{audioTRAIN1.play();
			document.getElementById("STR1").style.opacity = document.getElementById("STR1a").style.opacity= 
			document.getElementById("STR1b").style.opacity = document.getElementById("STR1c").style.opacity=1;}	
			
			
         	if   (RANDSS.innerHTML ==8)
			{audioTRAIN1.play();
			document.getElementById("STR2").style.opacity=document.getElementById("STR2a").style.opacity=
			document.getElementById("STR2b").style.opacity=document.getElementById("STR2c").style.opacity=1;}
	        if (  (RANDSS.innerHTML ==9) || (RANDSS.innerHTML ==10)  )
			{audioTRAIN2.play();
			document.getElementById("STR3").style.opacity=1;TURB=-10;}             }   	
		
   S1.style.left = S2.style.left  = S3.style.left  = S4.style.left  = S5.style.left  =  EXPLOSwind.style.left  = SX + 'px';
   	
	STR1.style.left = STR2.style.left = STR3.style.left = SX + 'px'; 
	STR1a.style.left = SX + 380 + 'px';
	STR1b.style.left = SX + 760 + 'px';
	STR1c.style.left = SX +1140 + 'px';
	
	STR2a.style.left = SX + 500 + 'px';
	STR2b.style.left = SX + 1000 + 'px';
	STR2c.style.left = SX + 1500 + 'px';
	
	
	
	
//################################################# TRAIN TOUCH
//################################################# TRAIN TOUCH  
	
 if (     (SX>-1200)&&(SX<350)  &&(Xeat==0)&&(PLANEY >= 250)&&(RANDSS.innerHTML >=6)&&(RANDSS.innerHTML <=11)     )  
    { 	scorelose.innerHTML--;
		Xeat=1;
		UP=-10;
		OPACITYTOUCH=-30;
		//document.getElementById("PLANE").style.opacity = 0.2;
		
		document.getElementById("PLANE").style.transform = document.getElementById("PLANEa").style.transform =document.getElementById("PLANEb").style.transform =  "rotate(-180deg)";
		audioEXP.play();
		audioSAFAR.play();}  
 	

 if (     (SX>-0)&&(SX<350)  &&(Xeat==0)&&(PLANEY >= 250)&&(RANDSS.innerHTML >=12)     )  
    { 	scorelose.innerHTML--;
		Xeat=1;
		UP=-10;
		OPACITYTOUCH=-30;
	//	document.getElementById("PLANE").style.opacity = 0.2;
		document.getElementById("PLANE").style.transform = document.getElementById("PLANEa").style.transform =document.getElementById("PLANEb").style.transform  = "rotate(-180deg)";
		audioEXP.play();
		audioSAFAR.play();}  	
	
	
	
	
	
	
   if (bombX < 0)
         {bombX=860;}
   if (bombX > 850)
         {eat=0;
           document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
           document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
           document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
           document.getElementById("FR7").style.opacity = document.getElementById("FR8").style.opacity = 0;

	
	    RANDS.innerHTML=Math.floor((Math.random() * 8) + 1);
		
    if(RANDS.innerHTML ==1){document.getElementById("FR1").style.opacity=1;}	
	if(RANDS.innerHTML ==2){document.getElementById("FR2").style.opacity=1;}	
	if(RANDS.innerHTML ==3){document.getElementById("FR3").style.opacity=1;}	
	if(RANDS.innerHTML ==4){document.getElementById("FR4").style.opacity=1;} 
	if(RANDS.innerHTML ==5){document.getElementById("FR5").style.opacity=1;}	
	if(RANDS.innerHTML ==6){document.getElementById("FR6").style.opacity=1;}	
	if(RANDS.innerHTML ==7){document.getElementById("FR7").style.opacity=1;}
	if(RANDS.innerHTML ==8){document.getElementById("FR8").style.opacity=1;}}
	
   if (bombX1 < 0)
         {bombX1=860;}
   if (bombX1 > 850)
         {eat1=0;
           document.getElementById("FR01").style.opacity = document.getElementById("FR02").style.opacity =
           document.getElementById("FR03").style.opacity = document.getElementById("FR04").style.opacity =
           document.getElementById("FR05").style.opacity = document.getElementById("FR06").style.opacity =
           document.getElementById("FR07").style.opacity = document.getElementById("FR08").style.opacity = 0;

	
	    RANDS1.innerHTML=Math.floor((Math.random() * 8) + 1);
		
    if(RANDS1.innerHTML ==1){document.getElementById("FR01").style.opacity=1;}	
	if(RANDS1.innerHTML ==2){document.getElementById("FR02").style.opacity=1;}	
	if(RANDS1.innerHTML ==3){document.getElementById("FR03").style.opacity=1;}	
	if(RANDS1.innerHTML ==4){document.getElementById("FR04").style.opacity=1;} 
	if(RANDS1.innerHTML ==5){document.getElementById("FR05").style.opacity=1;}	
	if(RANDS1.innerHTML ==6){document.getElementById("FR06").style.opacity=1;}	
	if(RANDS1.innerHTML ==7){document.getElementById("FR07").style.opacity=1;}
	if(RANDS1.innerHTML ==8){document.getElementById("FR08").style.opacity=1;}}
//################################################### BOMB FRUIT MOVE ######################################################################## 
//################################################### BOMB FRUIT MOVE ######################################################################## 
//################################################### BOMB FRUIT MOVE ######################################################################## 
//################################################### BOMB FRUIT MOVE ######################################################################## 

   // Place bomb at calculated positions

   bomb.style.left = FR1.style.left = FR2.style.left  = FR3.style.left  = FR4.style.left  = FR5.style.left = FR6.style.left  = FR7.style.left  = FR8.style.left  = bombX + 'px';
   bomb.style.top  = FR1.style.top  = FR2.style.top  =  FR3.style.top   = FR4.style.top   = FR5.style.top  = FR6.style.top   = FR7.style.top   = FR8.style.top   =   bombY + 'px';
   
   FR01.style.left = FR02.style.left  = FR03.style.left  = FR04.style.left  = FR05.style.left = FR06.style.left  = FR07.style.left  = FR08.style.left  = bombX1 + 'px';
   FR01.style.top  = FR02.style.top  =  FR03.style.top   = FR04.style.top   = FR05.style.top  = FR06.style.top   = FR07.style.top   = FR08.style.top   =   bombY1 + 'px';
   
 
 } 
