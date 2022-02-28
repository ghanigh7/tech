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




var dx = -8;//-8
var dsx = -20;//25
var TURB = 0;
var dy = 3;//1
var dy1 = -4;
var TRH=0;
var MOTTO=2;

var MOTO,MOTO2,MOTO3,EXPLOS;
var MOTOY;
var ACCELR;
var UP;
var eat, eat1;
var Xeat;
var START;
var HAUT;
//var STOPANIMT;var STOPANIMB;
var OPACITYTOUCH = 1;
var ROT=36;

var BACKX=0;
var BACKXB=0;
var DBACKX=0;
var STAGE=1;
var STOPicon;var STARTicon;


var bomb;

var score;
var scorelose;
var RANDS,RANDS1, RANDSS;

var FR1,FR2,FR3,FR4, FR5, FR6, FR7, FR8, FR9,FR10;
var FR01,FR02,FR03,FR04, FR05, FR06, FR07, FR08, FR09,FR010;
var S1,S1a,S2,S2a,S3,S3a,S4,S4a,S5,S5a,S6,S7,S8;
var STR1,STR2,STR3;
var STR1a,STR1b,STR1c;
var STR2a,STR2b,STR2c;
// For internal use
var bombX, bombY; // x and y positions of bomb
var bombX1, bombY1; 
var SX;// SY;

var iID; // To store ID of set interval used to clear it when required


var audioSTART = new Audio('sounds/START.mp3');
var audioBOUTTON = new Audio('sounds/BOUTTON.mp3');
var audioCHANGE = new Audio('sounds/CHANGE.mp3');

var audioSOG = new Audio('sounds/SOG.mp3');
var audioKBIR = new Audio('sounds/KBIR.mp3'); 
var audioSAFAR = new Audio('sounds/SAFAR.mp3');
var audioFAGAR = new Audio('sounds/FAGAR.mp3');

var audioWINFRUIT = new Audio('sounds/WINFRUIT.mp3');
var audioLOSEBOMB = new Audio('sounds/LOSEBOMB.mp3');
var audioLOSE = new Audio('sounds/LOSE.mp3');

var audioPOLICE = new Audio('sounds/POLICE.mp3');  
var audioMOTOACC = new Audio('sounds/MOTO2.mp3'); 
var audioMOTORUN = new Audio('sounds/MOTO1.mp3');  
var audioKLAXON = new Audio('sounds/KLAXON.mp3');

var audioTRAIN1 = new Audio('sounds/TRAIN1.mp3');
var audioTRAIN2 = new Audio('sounds/TRAIN2.mp3');



// Attach a function to onLoad event
window.onload = doWave(0); 
window.onload = Init;
// INITIALIZE GAME OBJECTS


   
   
function Init()
{          
//START=1;
//iID = setInterval('GameLoop()', 30);//30 Call 'GameLoop()' function every 10 milliseconds

iID = setInterval('BEGINGameLoop()', 30);

   
           /* document.getElementById("loading").style.display = "none";
			document.getElementById("loading2").style.display = "none";
            document.getElementById("loadingcontent").style.display = "block";*/
   //  OBJECTS INITIALISATION
   MOTO = document.getElementById('MOTO');
   MOTO2 = document.getElementById('MOTO2');
   MOTO3 = document.getElementById('MOTO3');
   document.getElementById("MOTO").style.opacity = document.getElementById("MOTO3").style.opacity = 0;
   EXPLOS = document.getElementById('EXPLOS');
   document.getElementById("EXPLOS").style.opacity=0;
 
   ACCELR = document.getElementById('ACCELR');
   eat = document.getElementById('eat');
   eat1 = document.getElementById('eat1');
   Xeat = document.getElementById('Xeat');
   
   
   bomb = document.getElementById('bomb');
   document.getElementById("bomb").style.opacity=0;
   
   
   FR1 = document.getElementById('FR1');FR2 = document.getElementById('FR2');
   FR3 = document.getElementById('FR3');FR4 = document.getElementById('FR4');
   FR5 = document.getElementById('FR5');FR6 = document.getElementById('FR6');
   FR7 = document.getElementById('FR7');FR8 = document.getElementById('FR8');
   FR9 = document.getElementById('FR9');FR10 = document.getElementById('FR10');
   
   FR01 = document.getElementById('FR01');FR02 = document.getElementById('FR02');
   FR03 = document.getElementById('FR03');FR04 = document.getElementById('FR04');
   FR05 = document.getElementById('FR05');FR06 = document.getElementById('FR06');
   FR07 = document.getElementById('FR07');FR08 = document.getElementById('FR08');

   
   document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
   document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
   document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
   document.getElementById("FR7").style.opacity = document.getElementById("FR8").style.opacity = 
   document.getElementById("FR9").style.opacity = document.getElementById("FR10").style.opacity = 0;
   
   document.getElementById("FR01").style.opacity = document.getElementById("FR02").style.opacity =
   document.getElementById("FR03").style.opacity = document.getElementById("FR04").style.opacity =
   document.getElementById("FR05").style.opacity = document.getElementById("FR06").style.opacity =
   document.getElementById("FR07").style.opacity = document.getElementById("FR08").style.opacity = 0;

   S1 = document.getElementById('S1');S1a = document.getElementById('S1a');
   S2 = document.getElementById('S2');S2a = document.getElementById('S2a');
   S3 = document.getElementById('S3');S3a = document.getElementById('S3a');
   S4 = document.getElementById('S4');S4a = document.getElementById('S4a');
   S5 = document.getElementById('S5');S5a = document.getElementById('S5a');
   S6 = document.getElementById('S6');S7  = document.getElementById('S7');
   S8 = document.getElementById('S8');
   
   STR1 = document.getElementById('STR1');STR1a = document.getElementById('STR1a');
   STR1b = document.getElementById('STR1b');STR1c = document.getElementById('STR1c');
   
   STR2  = document.getElementById('STR2');STR2a  = document.getElementById('STR2a');
   STR2b  = document.getElementById('STR2b');STR2c  = document.getElementById('STR2c');   
   
   STR3 = document.getElementById('STR3');
   
   
         document.getElementById("S1").style.opacity = document.getElementById("S1a").style.opacity = 
         document.getElementById("S2").style.opacity = document.getElementById("S2a").style.opacity = 
         document.getElementById("S3").style.opacity = document.getElementById("S3a").style.opacity = 
		 document.getElementById("S4").style.opacity = document.getElementById("S4a").style.opacity = 
         document.getElementById("S5").style.opacity = document.getElementById("S5a").style.opacity = 
		 document.getElementById("S6").style.opacity = document.getElementById("S7").style.opacity  = 
         document.getElementById("S8").style.opacity =  0;
		 
	   	 
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
   

   // Initial values
   bombX =  840 ;// (boxgame.offsetWidth / 2) - (bomb.offsetWidth / 2);boxgame.offsetWidth - (canon.offsetWidth + 90) ;
   bombY = 310;//(boxgame.offsetHeight / 2) - (bomb.offsetHeight / 2)-70;
   bombX1 =  990 ;// (boxgame.offsetWidth / 2) - (bomb.offsetWidth / 2);boxgame.offsetWidth - (canon.offsetWidth + 90) ;
   bombY1 = 100;
   SX=1000;
   MOTOY=300;
   ACCELR = 0;
   UP=0;
   MOTO.style.left = MOTO2.style.left = MOTO3.style.left =  EXPLOS.style.left = 150 + 'px';
   MOTO.style.top = MOTO2.style.top = MOTO3.style.top = EXPLOS.style.top = MOTOY + 'px';
   
   STOPicon= document.getElementById('STOPicon');STARTicon= document.getElementById('STARTicon');
   STOPicon.style.width = STOPicon.style.height = 0 + 'px';STARTicon.style.width = STARTicon.style.height = 60 + 'px';
   
    
   
   eat=0;
   eat1=0;
   Xeat=0;
   
   BACKX = document.getElementById('BACKX');BACKXB = document.getElementById('BACKXB');
   BACKX = 0;BACKXB = 0;
   
   SLIDERBACK1 = document.getElementById('SLIDERBACK1');SLIDERBACK2 = document.getElementById('SLIDERBACK2');
   SLIDERBACK3 = document.getElementById('SLIDERBACK3');SLIDERBACKB = document.getElementById('SLIDERBACKB');
   document.getElementById("SLIDERBACK1").style.opacity = 1; document.getElementById("SLIDERBACK2").style.opacity=document.getElementById("SLIDERBACK3").style.opacity=0;

   SLIDERBACK1.style.left = SLIDERBACK2.style.left = SLIDERBACK3.style.left = SLIDERBACKB.style.left = -3 + 'px';
   SLIDERBACK1.style.top = SLIDERBACK2.style.top = SLIDERBACK3.style.top = 0 + 'px';
   SLIDERBACKB.style.top = 448 + 'px';
   

   
   bomb.style.left  = bombX + 'px';
   bomb.style.top  = bombY + 'px';

   FR1.style.left = FR2.style.left  = FR3.style.left  = FR4.style.left  = FR5.style.left = FR6.style.left  = FR7.style.left  =FR8.style.left = FR9.style.left  = FR10.style.left  = bombX + 'px';
   FR1.style.top  = FR2.style.top  =  FR3.style.top  = FR4.style.top  = FR5.style.top  = FR6.style.top  =  FR7.style.top  =FR8.style.top  = FR9.style.top  =  FR10.style.top  = bombY + 'px';
 
   FR01.style.left = FR02.style.left  = FR03.style.left  = FR04.style.left  = FR05.style.left = FR06.style.left  = FR07.style.left  = FR08.style.left  = bombX1 + 'px';
   FR01.style.top  = FR02.style.top  =  FR03.style.top   = FR04.style.top   = FR05.style.top  = FR06.style.top   = FR07.style.top   = FR08.style.top   =   bombY1 + 'px';
   

   S1.style.left = S1a.style.left = S2.style.left = S2a.style.left = S3.style.left  = S3a.style.left  = S4.style.left  = S4a.style.left  = S5.style.left  = S5a.style.left  =S6.style.left  = S7.style.left  = S8.style.left  = 1000 + 'px'; 
  
   STR1.style.left = STR1a.style.left = STR1b.style.left = STR1c.style.left =1000 + 'px'; 
   STR2.style.left = STR2a.style.left = STR2b.style.left = STR2c.style.left = STR3.style.left = 1000 + 'px'; 
   STR1.style.top  = STR1a.style.top  = STR1b.style.top  = STR1c.style.top  =  345 + 'px';
   STR2.style.top = STR2a.style.top = STR2b.style.top = STR2c.style.top =  STR3.style.top = 350+ 'px'; 
   
   S1.style.top  =  S1a.style.top  = 360+ 'px'; 
   S2.style.top  =  S2a.style.top  = 370+ 'px'; /////////////
   S3.style.top  =  S3a.style.top  = 370+ 'px'; 
   S4.style.top  =  S4a.style.top  = 370+ 'px';
   S5.style.top  =  S5a.style.top  = 320+ 'px';
   
   S6.style.top  = 320+ 'px';
   S7.style.top  = 350+ 'px'; 
   S8.style.top  = 370+ 'px';
   

   // Show score
  // ROT= document.getElementById('ROT');
  // ROT.innerHTML=360;
   HAUT = document.getElementById('HAUT');
   START = document.getElementById('START');
   score = document.getElementById('score');
   scorelose = document.getElementById('scorelose');
   scorelose.innerHTML=10;
   score.innerHTML=0;
   HAUT.innerHTML=0;
   
  
   
 //  START=0;

   	RANDSS.innerHTML = Math.floor((Math.random() * 10) + 1);
            if(RANDSS.innerHTML ==1){document.getElementById("S1").style.opacity=1;}	
          	if(RANDSS.innerHTML ==2){document.getElementById("S2").style.opacity=1;}	
         	if(RANDSS.innerHTML ==3){document.getElementById("S3").style.opacity=1;}	
	        if(RANDSS.innerHTML ==4){document.getElementById("S4").style.opacity=1;} 
			if(RANDSS.innerHTML ==5){document.getElementById("S6").style.opacity=1;}
          	if(RANDSS.innerHTML ==6){document.getElementById("S7").style.opacity=1;}	
         	if(RANDSS.innerHTML ==7){document.getElementById("S8").style.opacity=1;}	
	        if ( (RANDSS.innerHTML >=8)  &&  (RANDSS.innerHTML <=10) ){document.getElementById("S5").style.opacity=1;}
			
           	if(RANDSS.innerHTML ==11)
			{document.getElementById("STR1").style.opacity = document.getElementById("STR1a").style.opacity = 1;
			//document.getElementById("STR1b").style.opacity = document.getElementById("STR1c").style.opacity = 1;
			}	
			
         	if(RANDSS.innerHTML ==12){
			document.getElementById("STR2").style.opacity=document.getElementById("STR2a").style.opacity=
			document.getElementById("STR2b").style.opacity=document.getElementById("STR2c").style.opacity=1;}	
			
			
	        if(RANDSS.innerHTML ==13){document.getElementById("STR3").style.opacity=1;}  
   
    RANDS.innerHTML = Math.floor((Math.random() * 10) + 1);
    if(RANDS.innerHTML ==1){document.getElementById("FR1").style.opacity=1;}	
	if(RANDS.innerHTML ==2){document.getElementById("FR2").style.opacity=1;}	
	if(RANDS.innerHTML ==3){document.getElementById("FR3").style.opacity=1;}	
	if(RANDS.innerHTML ==4){document.getElementById("FR4").style.opacity=1;} 
	if(RANDS.innerHTML ==5){document.getElementById("FR5").style.opacity=1;}	
	if(RANDS.innerHTML ==6){document.getElementById("FR6").style.opacity=1;}	
	if(RANDS.innerHTML ==7){document.getElementById("FR7").style.opacity=1;}
	if(RANDS.innerHTML ==8){document.getElementById("FR8").style.opacity=1;}	
	if(RANDS.innerHTML ==9){document.getElementById("FR9").style.opacity=1;}	
	if(RANDS.innerHTML ==10){document.getElementById("FR10").style.opacity=1;}

	RANDS1.innerHTML=Math.floor((Math.random() * 8) + 1);
    if(RANDS1.innerHTML ==1){document.getElementById("FR01").style.opacity=1;}	
	if(RANDS1.innerHTML ==2){document.getElementById("FR02").style.opacity=1;}	
	if(RANDS1.innerHTML ==3){document.getElementById("FR03").style.opacity=1;}	
	if(RANDS1.innerHTML ==4){document.getElementById("FR04").style.opacity=1;} 
	if(RANDS1.innerHTML ==5){document.getElementById("FR05").style.opacity=1;}	
	if(RANDS1.innerHTML ==6){document.getElementById("FR06").style.opacity=1;}	
	if(RANDS1.innerHTML ==7){document.getElementById("FR07").style.opacity=1;}
	if(RANDS1.innerHTML ==8){document.getElementById("FR08").style.opacity=1;}	}

function STAGE1(){  STAGE=1;audioBOUTTON.play();}
function STAGE2(){  STAGE=2;audioBOUTTON.play();}
function STAGE3(){  STAGE=3;audioBOUTTON.play();}

function MOTTO1(){  MOTTO=1;audioBOUTTON.play();}
function MOTTO2(){  MOTTO=2;audioBOUTTON.play();}
function MOTTO3(){  MOTTO=3;audioBOUTTON.play();}

	
	

	// START & RESET GAME
function Startt()
{   START+=1;
    audioBOUTTON.play();
    if(START>1)
        {START=0;}
 if(START==1)
   {boxgame.onmousedown = moveMOTO;STOPicon.style.width = STOPicon.style.height = 60 + 'px';STARTicon.style.width = STARTicon.style.height = 0 + 'px';
   iID = setInterval('GameLoop()', 30);//30 Call 'GameLoop()' function every 10 milliseconds
   audioSTART.play();//msg.innerHTML = ''; 
   audioMOTORUN.play();
   audioMOTORUN.loop= true;
 //  document.getElementById("STOPANIMT").style.opacity=0;document.getElementById("STOPANIMB").style.opacity=0;
   }   
  if(START==0)
   { clearInterval(iID);
      STOPicon.style.width = STOPicon.style.height = 0 + 'px';STARTicon.style.width = STARTicon.style.height = 60 + 'px';
      Init();
      boxgame.onmousedown = '';
	  audioMOTORUN.pause();
	  OPACITYTOUCH=1;
	  if(MOTTO==1){document.getElementById("MOTO").style.opacity = 1;document.getElementById("MOTO").style.transform = "rotate(0deg)";}
	  if(MOTTO==2){document.getElementById("MOTO2").style.opacity = 1;document.getElementById("MOTO2").style.transform = "rotate(0deg)";}
	  if(MOTTO==3){document.getElementById("MOTO3").style.opacity = 1;document.getElementById("MOTO3").style.transform = "rotate(0deg)";}
	  
	  }}  
	/*
function Startt(){
if(START==0)
{iID = setInterval('GameLoop()', 30);}//30 Call 'GameLoop()' function every 10 milliseconds
  }  */
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
function moveMOTO(e2)
       {var y2 = (e2.clientY - (boxgame.offsetTop + 60 - document.documentElement.scrollTop));
       document.getElementById("MOTO").style.transform = "rotate(-40deg)"; 
	   document.getElementById("MOTO2").style.transform = "rotate(-40deg)"; 
	   document.getElementById("MOTO3").style.transform = "rotate(-40deg)"; 

	  if(ACCELR==2)
           {ACCELR=ACCELR+1; 
		   audioLOSEBOMB.play();
		   ROT=0;
		   UP=-10 ;} 
      if(ACCELR==1)
           {ACCELR=ACCELR+1; 
           audioKBIR.play();
           UP=-10 ;} 
   
      if(ACCELR==0)
          {ACCELR=ACCELR+1; 
          audioMOTOACC.play();
         if(MOTTO==2){MOTOY=280+TRH;}		  		  
          UP=-10 ;}}  
   
   
function BEGINGameLoop()
  {
  //   STOPicon.style.left = 550 + 'px';
 //  STOPicon.style.top = 90 + 'px';
   
   
  if (STAGE ==1)   
   {document.getElementById("SLIDERBACK1").style.opacity=1;
   document.getElementById("SLIDERBACK2").style.opacity = document.getElementById("SLIDERBACK3").style.opacity=0;}
  if (STAGE ==2)   
   {document.getElementById("SLIDERBACK2").style.opacity=1;
   document.getElementById("SLIDERBACK1").style.opacity = document.getElementById("SLIDERBACK3").style.opacity=0;}
  if (STAGE ==3)   
   {document.getElementById("SLIDERBACK3").style.opacity=1;
   document.getElementById("SLIDERBACK1").style.opacity = document.getElementById("SLIDERBACK2").style.opacity=0;}

   
   if(MOTTO==1){document.getElementById("MOTO").style.opacity = 1;document.getElementById("MOTO2").style.opacity =document.getElementById("MOTO3").style.opacity =0;}
   if(MOTTO==2){document.getElementById("MOTO2").style.opacity = 1;document.getElementById("MOTO").style.opacity =document.getElementById("MOTO3").style.opacity =0;}
   if(MOTTO==3){document.getElementById("MOTO3").style.opacity = 1;document.getElementById("MOTO").style.opacity =document.getElementById("MOTO2").style.opacity =0;}}

function GameLoop()
{
  BACKX=BACKX-20; //20
   if(BACKX<=-3800+DBACKX){BACKX=0}//if(BACKX<=-3800){BACKX=0}
   
   if (score.innerHTML==40) {STAGE=2;DBACKX=0;}
   if (score.innerHTML==80) {STAGE=3;DBACKX=2850;}
   
   if(  (score.innerHTML<40)   ||  (STAGE ==1)   ||     ((score.innerHTML>40)&&(STAGE ==1))            )
   {document.getElementById("SLIDERBACK1").style.opacity=1;
   document.getElementById("SLIDERBACK2").style.opacity = document.getElementById("SLIDERBACK3").style.opacity=0;
   SLIDERBACK1.style.left = BACKX +'px';DBACKX=0;}
   
   if(  ((score.innerHTML>40)&&(score.innerHTML<80)&&(STAGE ==2))   ||   (STAGE ==2)  ||   (score.innerHTML==40)  )
   {document.getElementById("SLIDERBACK2").style.opacity=1;
   document.getElementById("SLIDERBACK1").style.opacity = document.getElementById("SLIDERBACK3").style.opacity=0;
   SLIDERBACK2.style.left = BACKX +'px';DBACKX=0;}
   
   
    if(  ((score.innerHTML>80)&&(STAGE ==3))   ||   (STAGE ==3)  ||   (score.innerHTML==80)  )
   {document.getElementById("SLIDERBACK3").style.opacity=1;
   document.getElementById("SLIDERBACK1").style.opacity = document.getElementById("SLIDERBACK2").style.opacity=0;
   DBACKX=1900;
   SLIDERBACK3.style.left = BACKX +'px';}
   

   
   
    BACKXB+=-30;
   if(BACKXB<=-950){BACKXB=0}
   SLIDERBACKB.style.left = BACKXB +'px';
   
   /*
  	  if(MOTTO==1){document.getElementById("MOTO").style.opacity = 1;document.getElementById("MOTO2").style.opacity = document.getElementById("MOTO3").style.opacity = 0;}
	  if(MOTTO==2){document.getElementById("MOTO2").style.opacity = 1;document.getElementById("MOTO").style.opacity = document.getElementById("MOTO3").style.opacity = 0;}
	  if(MOTTO==3){document.getElementById("MOTO3").style.opacity = 1;document.getElementById("MOTO2").style.opacity = document.getElementById("MOTO").style.opacity = 0;}
	  */ 
   
   
   bombX += -14; //dx;
   bombY += dy;
   bombX1 += -13 //(dx+1);
   bombY1 += dy1;
   SX += dsx+TURB;
   UP+=0.5;
   MOTOY=MOTOY+UP;
  
if(ROT < 34)
    {ROT++  ;
    document.getElementById("MOTO").style.transform = document.getElementById("MOTO2").style.transform =
	document.getElementById("MOTO3").style.transform = " rotate(" + (-10*ROT-40) + "deg)"  ;}


if(MOTOY>=300+TRH)
      {MOTOY=300+TRH;
      document.getElementById("MOTO").style.transform = document.getElementById("MOTO2").style.transform =
   	  document.getElementById("MOTO3").style.transform = "rotate(0deg)";
	  document.getElementById("EXPLOS").style.opacity = 0;
	  ACCELR=0;}
	  
if (  (MOTOY>=280)&& (MOTTO==2) && (UP>=0) )
      {document.getElementById("MOTO2").style.transform = "rotate(0deg)";ACCELR=0;}
	  
	  
if(MOTOY<=50)
     {MOTOY=51;}


MOTO.style.top = MOTO2.style.top = MOTO3.style.top = EXPLOS.style.top = MOTOY + 'px';

HAUT.innerHTML=Math.trunc(  -(0.4*MOTOY)+120  );
 

 
 //############################################ GAME OVER ###################################################################
//############################################# GAME OVER ###################################################################
//############################################## GAME OVER ###################################################################
//############################################### GAME OVER ################################################################## 

  if (scorelose.innerHTML <=0)
     {   
      clearInterval(iID);
      Init();
      boxgame.onmousemove = '';
	  START=0;
      audioSAFAR.play();
	  audioMOTORUN.pause();
	  
	  if(MOTTO==1){document.getElementById("MOTO").style.opacity = 1;}
	  if(MOTTO==2){document.getElementById("MOTO2").style.opacity = 1;}
	  if(MOTTO==3){document.getElementById("MOTO3").style.opacity = 1;}
	   }  
//############################################ GAME OVER ###############################################################################
//############################################# GAME OVER ###################################################################
//############################################## GAME OVER ###################################################################
//############################################### GAME OVER ##################################################################
//###########################################################################################################################
   
   
//########################################################################################################################### 
   // COLLISION DETECTION
   // If bomb hits upper or lower wall
   if(bombY < 90 || ((bombY + bomb.offsetHeight) > boxgame.offsetHeight))
       {dy = -dy;}
   
   if(bombY1 < 90 || ((bombY1 + bomb.offsetHeight) > boxgame.offsetHeight))
        {dy1 = -dy1;}	  
	  
	  
 if (  (score.innerHTML % 10 === 0) && (score.innerHTML>=1)  )
 {score.innerHTML++;
 scorelose.innerHTML++;}
//################################################# EAT FRUIT
//################################################# EAT FRUIT
 
 if (   ( dx<0)  && ( bombX<300)  && (bombX>100) && (eat==0)     &&  ( (bombY + bomb.offsetHeight) > MOTOY)           )   
    { 	  
      if     ( bombY< (MOTOY + (bomb.offsetHeight))  )    
	   {score.innerHTML++;
		eat=1;
		 audioWINFRUIT.play();
		 
	//	document.getElementById("MOTO").style.width = 300;
	//	MOTO.offsetTop = MOTO.offsetHeight = 300+ 'px';
		
	    document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
        document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
        document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
        document.getElementById("FR7").style.opacity = document.getElementById("FR8").style.opacity = 
        document.getElementById("FR9").style.opacity = document.getElementById("FR10").style.opacity = 0;}}		

	
//################################################# EAT FRUIT1
//################################################# EAT FRUIT1
 if (   ( bombX1<300)  && (bombX1>100) && (eat1==0)     &&  ( (bombY1 + bomb.offsetHeight) > MOTOY)       )   
    { 	  
      if     ( bombY1< (MOTOY + (bomb.offsetHeight))  )    
	   {score.innerHTML++;
		eat1=1;
		 audioWINFRUIT.play();
	    document.getElementById("FR01").style.opacity = document.getElementById("FR02").style.opacity =
        document.getElementById("FR03").style.opacity = document.getElementById("FR04").style.opacity =
        document.getElementById("FR05").style.opacity = document.getElementById("FR06").style.opacity =
        document.getElementById("FR07").style.opacity = document.getElementById("FR08").style.opacity = 0;}}		


//################################################# CAR && SAW  && TRAIN TOUCH
//################################################# CAR && SAW  && TRAIN TOUCH 
 if (    ( SX<300)  && (SX>200)  && (Xeat==0)  &&     (   ((MOTOY >= 250)&&(RANDSS.innerHTML <=10))  ||   (( MOTOY >= 200)&& (RANDSS.innerHTML >10))    )             )   
    { 	  
        scorelose.innerHTML--;
		Xeat=1;
		UP=-10;
		//if(MOTTO==2){UP=-15;}
		OPACITYTOUCH=-30;
		document.getElementById("MOTO").style.transform = document.getElementById("MOTO2").style.transform = 
		document.getElementById("MOTO3").style.transform = "rotate(-180deg)";
		document.getElementById("EXPLOS").style.opacity = 1;
		audioCHANGE.play();
		audioSAFAR.play();
		
		
		}  
		
 
     /*   
     if(OPACITYTOUCH<1)
	    {OPACITYTOUCH+=1;
		
		if   (OPACITYTOUCH % 2 === 0) 
		      {document.getElementById("MOTO").style.opacity =  1;}
		if   (OPACITYTOUCH % 3 === 0) 
		      {document.getElementById("MOTO").style.opacity = 0.5;}}
	if(OPACITYTOUCH >=1)
	          {document.getElementById("MOTO").style.opacity = 1;}  */
 
//################################################# CAR up
//################################################# CAR up
if (   ( SX==700) &&  (RANDSS.innerHTML >=8)  &&  (RANDSS.innerHTML <=10)   )    
      { audioPOLICE.play();
	  TURB=-10;} 
	 
if (   ( SX==560) &&  (RANDSS.innerHTML <5)   )    
      { audioKLAXON.play();} 
		 		
if (   ( SX<350)  && (SX>-100)  && (Xeat==0)  &&  ( MOTOY >= 210)&&( MOTOY < 295)  && (UP>=0) && ( ((RANDSS.innerHTML >=8)&&(RANDSS.innerHTML <=10))  || (RANDSS.innerHTML <5) )          )   
      { Xeat=1;
		audioLOSE.play();
	    if(RANDSS.innerHTML ==1) 
	        {document.getElementById("S1").style.opacity = 0;
		    document.getElementById("S1a").style.opacity = 1;}  
	    if(RANDSS.innerHTML ==2) 
	        {document.getElementById("S2").style.opacity = 0;
		    document.getElementById("S2a").style.opacity = 1;}  
	    if(RANDSS.innerHTML ==3) 
	        {document.getElementById("S3").style.opacity = 0;
		    document.getElementById("S3a").style.opacity = 1;}  
	    if(RANDSS.innerHTML ==4) 
	        {document.getElementById("S4").style.opacity = 0;
		    document.getElementById("S4a").style.opacity = 1;}  
	    if( (RANDSS.innerHTML >=8)&&(RANDSS.innerHTML <=10)  ) 
	        {score.innerHTML++;
			document.getElementById("S5").style.opacity = 0;
		    document.getElementById("S5a").style.opacity = 1;
			audioSOG.play();} 
		if(RANDSS.innerHTML <=4) 
	        {audioFAGAR.play();}}

// #################################### TRAIN UP ################################
// #################################### TRAIN UP ################################
// #################################### TRAIN UP ################################
// #################################### TRAIN UP ################################
	 
if (   ( SX<350)  && (SX>-400)  && (Xeat==0)  &&  ( MOTOY <= 200)&&  (RANDSS.innerHTML >=11)    )   
      { Xeat=1; 
	  TRH=-100;} 

	 if(  ((RANDSS.innerHTML ==11)||(RANDSS.innerHTML ==12))   && (SX<= -1250)  )
	 {TRH=0;}
	 
	 if(  ((RANDSS.innerHTML ==13)|| (RANDSS.innerHTML ==14))   && (SX<= -1500)  )
	 {TRH=0;}
	 
	 if(  ((RANDSS.innerHTML ==15)|| (RANDSS.innerHTML ==16))    && (SX<= -400)  )
	 {TRH=0;}
	 
	 
	 
//################################################# BOMB FRUIT LIMIT CANON SIDE          
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 

    if(score.innerHTML<=0){score.innerHTML=0;}
	
	if (  ((RANDSS.innerHTML <=10)&&(SX < -500))  ||  ((RANDSS.innerHTML >10)&&(SX < -1500))   )                  
        {document.getElementById("S1").style.opacity = document.getElementById("S1a").style.opacity = 
         document.getElementById("S2").style.opacity = document.getElementById("S2a").style.opacity = 
         document.getElementById("S3").style.opacity = document.getElementById("S3a").style.opacity = 
		 document.getElementById("S4").style.opacity = document.getElementById("S4a").style.opacity = 
         document.getElementById("S5").style.opacity = document.getElementById("S5a").style.opacity = 
		 document.getElementById("S6").style.opacity = document.getElementById("S7").style.opacity  = 
         document.getElementById("S8").style.opacity = 0; 
		 
		 document.getElementById("STR1").style.opacity = document.getElementById("STR1a").style.opacity = 
		 document.getElementById("STR1b").style.opacity = document.getElementById("STR1c").style.opacity = 
		 
		 document.getElementById("STR2").style.opacity  = document.getElementById("STR2a").style.opacity  = 
		 document.getElementById("STR2b").style.opacity  = document.getElementById("STR2c").style.opacity  = 
		 
		 document.getElementById("STR3").style.opacity = 0;
		 SX=1000; //890
		 Xeat=0;
		 TURB=0;
		 
	
		RANDSS.innerHTML = Math.floor((Math.random() * 16) + 1);
            if(RANDSS.innerHTML ==1){document.getElementById("S1").style.opacity=1;}	
          	if(RANDSS.innerHTML ==2){document.getElementById("S2").style.opacity=1;}	
         	if(RANDSS.innerHTML ==3){document.getElementById("S3").style.opacity=1;}	
	        if(RANDSS.innerHTML ==4){document.getElementById("S4").style.opacity=1;} 
			if(RANDSS.innerHTML ==5){document.getElementById("S6").style.opacity=1;}
          	if(RANDSS.innerHTML ==6){document.getElementById("S7").style.opacity=1;}	
         	if(RANDSS.innerHTML ==7){document.getElementById("S8").style.opacity=1;}	
	        if ( (RANDSS.innerHTML >=8)  &&  (RANDSS.innerHTML <=10) ){document.getElementById("S5").style.opacity=1;}
			
          	if (  (RANDSS.innerHTML ==11) || (RANDSS.innerHTML ==12)  )
			{
			audioTRAIN1.play();
			document.getElementById("STR1").style.opacity = document.getElementById("STR1a").style.opacity= 
			document.getElementById("STR1b").style.opacity = document.getElementById("STR1c").style.opacity=1;}	
			
			
         	if (  (RANDSS.innerHTML ==13) || (RANDSS.innerHTML ==14)  )
			{
			audioTRAIN1.play();
			document.getElementById("STR2").style.opacity=document.getElementById("STR2a").style.opacity=
			document.getElementById("STR2b").style.opacity=document.getElementById("STR2c").style.opacity=1;}
			
	        if (  (RANDSS.innerHTML ==15) || (RANDSS.innerHTML ==16)  )
			{audioTRAIN2.play();
			document.getElementById("STR3").style.opacity=1;TURB=-10;}      
			}   	
	
	
	
   S1.style.left = S1a.style.left = S2.style.left = S2a.style.left = S3.style.left  = S3a.style.left  = S4.style.left  = S4a.style.left  = S5.style.left  = S5a.style.left  = S6.style.left = S7.style.left = S8.style.left =   SX + 'px'; 
   
    STR1.style.left = STR2.style.left = STR3.style.left = SX + 'px'; 
 
    STR1a.style.left = SX + 380 + 'px';
	STR1b.style.left = SX + 760 + 'px';
	STR1c.style.left = SX +1140 + 'px';
	
	STR2a.style.left = SX + 500 + 'px';
	STR2b.style.left = SX + 1000 + 'px';
	STR2c.style.left = SX + 1500 + 'px';
   
       
   

	
   if (bombX <0)
         {bombX=860;}
         
   if (bombX > 850)
         {eat=0;
		
           document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
           document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
           document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
           document.getElementById("FR7").style.opacity = document.getElementById("FR8").style.opacity = 
           document.getElementById("FR9").style.opacity = document.getElementById("FR10").style.opacity = 0;

	
	    RANDS.innerHTML=Math.floor((Math.random() * 10) + 1);
		
    if(RANDS.innerHTML ==1){document.getElementById("FR1").style.opacity=1;}	
	if(RANDS.innerHTML ==2){document.getElementById("FR2").style.opacity=1;}	
	if(RANDS.innerHTML ==3){document.getElementById("FR3").style.opacity=1;}	
	if(RANDS.innerHTML ==4){document.getElementById("FR4").style.opacity=1;} 
	if(RANDS.innerHTML ==5){document.getElementById("FR5").style.opacity=1;}	
	if(RANDS.innerHTML ==6){document.getElementById("FR6").style.opacity=1;}	
	if(RANDS.innerHTML ==7){document.getElementById("FR7").style.opacity=1;}
	if(RANDS.innerHTML ==8){document.getElementById("FR8").style.opacity=1;}	
	if(RANDS.innerHTML ==9){document.getElementById("FR9").style.opacity=1;}	
	if(RANDS.innerHTML ==10){document.getElementById("FR10").style.opacity=1;}}
	
	
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

   bomb.style.left = FR1.style.left = FR2.style.left  = FR3.style.left  = FR4.style.left  = FR5.style.left = FR6.style.left  = FR7.style.left  =FR8.style.left = FR9.style.left  = FR10.style.left  = bombX + 'px';
   bomb.style.top  = FR1.style.top  = FR2.style.top  =  FR3.style.top  = FR4.style.top  = FR5.style.top  = FR6.style.top  =  FR7.style.top  =FR8.style.top  = FR9.style.top  =  FR10.style.top  =   bombY + 'px';
   
   FR01.style.left = FR02.style.left  = FR03.style.left  = FR04.style.left  = FR05.style.left = FR06.style.left  = FR07.style.left  = FR08.style.left  = bombX1 + 'px';
   FR01.style.top  = FR02.style.top  =  FR03.style.top   = FR04.style.top   = FR05.style.top  = FR06.style.top   = FR07.style.top   = FR08.style.top   =   bombY1 + 'px';
   
 
 } 
