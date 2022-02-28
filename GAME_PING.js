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


var dx = -8;//-5
var dy = 3;//2

// Short references to objects
var player1,player1a;
var player2,player2a;
var player3,player3a;
var playerPONG,playerPONGa;
var STAGE =2;
var XSTG=0;
var XSTG1=0;
var canon;
var canon2;
var BOXBOMB;
var bomb;
//var bomb2;
var smoke,smokeP;
var score;
var scoreD;
var scoreB;
var scorelose;
var RANDS;//1:7=FRUITS    8:14:BOMBS  //Math.floor((Math.random() * 14) + 1);
var RANDSPLAYER;//1=MAKLA    2:NET
var FR1,FR2,FR3,FR4, FR5, FR6, FR7;
var B1, B2, B3, B4, B5, B6, B7;
var D1, D2, D3, D4, D5, D6, D7;


var START;




// For internal use
var bombX, bombY; // x and y positions of bomb
var playerY; // y position of player (x fixed)
var canonY; // y position of CPU paddle (x fixed)
var iID; // To store ID of set interval used to clear it when required

var audioSTART = new Audio('DATASECRYGH11/sounds/START.mp3');
var audioCAN = new Audio('DATASECRYGH11/sounds/CANON.mp3');
var audioCHANGE = new Audio('DATASECRYGH11/sounds/CHANGE.mp3');

var audioKBIR = new Audio('DATASECRYGH11/sounds/KBIR.mp3'); 
var audioSAFAR = new Audio('DATASECRYGH11/sounds/SAFAR.mp3');

var audioWINFRUIT = new Audio('DATASECRYGH11/sounds/WINFRUIT.mp3');
var audioWINFOOD = new Audio('DATASECRYGH11/sounds/WINFOOD.mp3');
//var audioWINBOMB = new Audio('DATASECRYGH11/sounds/WINBOMB.mp3');

var audioLOSEBOMB = new Audio('DATASECRYGH11/sounds/LOSEBOMB.mp3');
var audioLOSE = new Audio('DATASECRYGH11/sounds/LOSE.mp3');  

// Attach a function to onLoad event
window.onload = Init;
// INITIALIZE GAME OBJECTS
function Init()
{ 
    iID = setInterval('BEGINGameLoop()', 30);
          /*  document.getElementById("loading").style.display = "none";
			document.getElementById("loading2").style.display = "none";
            document.getElementById("loadingcontent").style.display = "block";*/
   //  OBJECTS INITIALISATION
   player1 = document.getElementById('player1');
   player1a = document.getElementById('player1a');
   player2 = document.getElementById('player2');
   player2a = document.getElementById('player2a');
   player3 = document.getElementById('player3');
   player3a = document.getElementById('player3a');
    
   document.getElementById("player1").style.opacity=document.getElementById("player1a").style.opacity=document.getElementById("player2").style.opacity=
   document.getElementById("player2a").style.opacity=document.getElementById("player3").style.opacity=document.getElementById("player3a").style.opacity=0;
   
   canon = document.getElementById('canon');
   canon2 = document.getElementById('canon2');
   BOXBOMB = document.getElementById('BOXBOMB');
   
   playerPONG= document.getElementById('playerPONG');playerPONGa= document.getElementById('playerPONGa');
   document.getElementById("playerPONG").style.opacity=1;document.getElementById("playerPONGa").style.opacity=0;
   
   
   bomb = document.getElementById('bomb');
   document.getElementById("bomb").style.opacity=0;
   smoke = document.getElementById('smoke');
   smokeP = document.getElementById('smokeP');
   document.getElementById("smokeP").style.opacity=0;
   
   FR1 = document.getElementById('FR1');FR2 = document.getElementById('FR2');
   FR3 = document.getElementById('FR3');FR4 = document.getElementById('FR4');
   FR5 = document.getElementById('FR5');FR6 = document.getElementById('FR6');
   FR7 = document.getElementById('FR7');
   
   document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
   document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
   document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
   document.getElementById("FR7").style.opacity = 0;
   /* *///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   B1 = document.getElementById('B1');B2 = document.getElementById('B2');
   B3 = document.getElementById('B3');B4 = document.getElementById('B4');
   B5 = document.getElementById('B5');B6 = document.getElementById('B6');
   B7 = document.getElementById('B7');
   document.getElementById("B1").style.opacity = document.getElementById("B2").style.opacity =
   document.getElementById("B3").style.opacity = document.getElementById("B4").style.opacity = 
   document.getElementById("B5").style.opacity = document.getElementById("B6").style.opacity =
   document.getElementById("B7").style.opacity = 0; 
   
   
   D1 = document.getElementById('D1');D2 = document.getElementById('D2');
   D3 = document.getElementById('D3');D4 = document.getElementById('D4');
   D5 = document.getElementById('D5');D6 = document.getElementById('D6');
   D7 = document.getElementById('D7');
   document.getElementById("D1").style.opacity = document.getElementById("D2").style.opacity =
   document.getElementById("D3").style.opacity = document.getElementById("D4").style.opacity = 
   document.getElementById("D5").style.opacity = document.getElementById("D6").style.opacity =
   document.getElementById("D7").style.opacity = 0; 
   
   
   
   //document.getElementById("bomb2").style.opacity=0;
   //document.getElementById("player1s").style.opacity=0;
   document.getElementById("player1").style.opacity = document.getElementById("player1a").style.opacity =
   document.getElementById("player2").style.opacity = document.getElementById("player2a").style.opacity =0;
   
   document.getElementById("smoke").style.opacity=0;
   document.getElementById("canon2").style.opacity=0;

   RANDS = document.getElementById('RANDS');
   RANDSPLAYER = document.getElementById('RANDSPLAYER');
   
   document.getElementById("RANDS").style.opacity = document.getElementById("RANDSPLAYER").style.opacity =0;
   


   // Initial values
   bombX =  700 ;// (boxgame.offsetWidth / 2) - (bomb.offsetWidth / 2);boxgame.offsetWidth - (canon.offsetWidth + 90) ;
   bombY = 110;//(boxgame.offsetHeight / 2) - (bomb.offsetHeight / 2)-70;
   canonY = (boxgame.offsetHeight / 2) - (canon.offsetHeight / 2) -20;
   playerY = (boxgame.offsetHeight / 2) - (player1.offsetHeight / 2);
 
   player1.style.left = player1a.style.left = player2.style.left = player2a.style.left  = player3.style.left = player3a.style.left = 10 + 'px';
   player1.style.top = player1a.style.top = player2.style.top = player2a.style.top = player3.style.top = player3a.style.top =  playerY + 'px';
   canon.style.left =  boxgame.offsetWidth - (canon.offsetWidth +27) + 'px';
   canon2.style.left = boxgame.offsetWidth - (canon2.offsetWidth +27) + 'px';
   canon.style.top = canon2.style.top =  canonY + 'px';
   
   playerPONG.style.top = playerPONGa.style.top = 160 + 'px';
   playerPONG.style.left = playerPONGa.style.left = 900+ 'px';
   
   
   	BOXBOMB.style.top = 5+ 'px';
    BOXBOMB.style.left = 822+ 'px';
	
	

   
   

   smoke.style.top  =  canonY-88 + 'px';//canon.style.top + 70;
   smoke.style.left = boxgame.offsetWidth - (smoke.offsetWidth +45) + 'px';
   bomb.style.left  = bombX + 'px';
   bomb.style.top  = bombY + 'px';
   
   smokeP.style.top  =  150 + 'px';//canon.style.top + 70;
   smokeP.style.left = 10 + 'px';
   
 
   
   FR1.style.left = FR2.style.left  = FR3.style.left  = FR4.style.left  = FR5.style.left = FR6.style.left  = FR7.style.left  = bombX + 'px';
   FR1.style.top  = FR2.style.top  =  FR3.style.top  = FR4.style.top  = FR5.style.top  = FR6.style.top  =  FR7.style.top  =  bombY + 'px';
   
   B1.style.left = B2.style.left  = B3.style.left  = B4.style.left  = B5.style.left = B6.style.left  = B7.style.left  = bombX + 'px';
   B1.style.top  = B2.style.top  =  B3.style.top  = B4.style.top  = B5.style.top  = B6.style.top  =  B7.style.top  = bombY + 'px';
   
   D1.style.left = D2.style.left  = D3.style.left  = D4.style.left  = D5.style.left = D6.style.left  = D7.style.left  = bombX + 'px';
   D1.style.top  = D2.style.top  =  D3.style.top  = D4.style.top  = D5.style.top  = D6.style.top  =  D7.style.top  = bombY + 'px';
   
    START=0;
   // Show score
   score = document.getElementById('score');
   scoreD = document.getElementById('scoreD');
   scoreB = document.getElementById('scoreB');
   scorelose = document.getElementById('scorelose');
   scorelose.innerHTML=5;
   score.innerHTML=0;
   scoreD.innerHTML=0;
   scoreB.innerHTML=0;
   
   var backP,backB;
   backB = document.getElementById('backB');document.getElementById("backB").style.opacity = 1;
   backP = document.getElementById('backP');document.getElementById("backP").style.opacity = 0;
   //back.style.top  =  10 + 'px';back.style.left = 6 + 'px';
   
   if(STAGE==2){ // CANON STG
    dx = -8;dy = 3;
	//document.getElementById("back").style.opacity = 0;
	//back.style.width  =  950 + 'px';back.style.height = 460 + 'px';
	document.getElementById("playerPONG").style.opacity= document.getElementById("playerPONGa").style.opacity=0;
    RANDS.innerHTML = Math.floor((Math.random() * 21) + 1);
    if(RANDS.innerHTML ==1){document.getElementById("FR1").style.opacity=1;}	
	if(RANDS.innerHTML ==2){document.getElementById("FR2").style.opacity=1;}	
	if(RANDS.innerHTML ==3){document.getElementById("FR3").style.opacity=1;}	
	if(RANDS.innerHTML ==4){document.getElementById("FR4").style.opacity=1;} 
	if(RANDS.innerHTML ==5){document.getElementById("FR5").style.opacity=1;}	
	if(RANDS.innerHTML ==6){document.getElementById("FR6").style.opacity=1;}	
	if(RANDS.innerHTML ==7){document.getElementById("FR7").style.opacity=1;}
	
	
    if(RANDS.innerHTML ==8){document.getElementById("B1").style.opacity=1;}	
	if(RANDS.innerHTML ==9){document.getElementById("B2").style.opacity=1;}	
	if(RANDS.innerHTML ==10){document.getElementById("B3").style.opacity=1;}	
	if(RANDS.innerHTML ==11){document.getElementById("B4").style.opacity=1;}	
	if(RANDS.innerHTML ==12){document.getElementById("B5").style.opacity=1;}	
	if(RANDS.innerHTML ==13){document.getElementById("B6").style.opacity=1;}	
	if(RANDS.innerHTML ==14){document.getElementById("B7").style.opacity=1;}	
	
	if(RANDS.innerHTML ==15){document.getElementById("D1").style.opacity=1;}	
	if(RANDS.innerHTML ==16){document.getElementById("D2").style.opacity=1;}	
	if(RANDS.innerHTML ==17){document.getElementById("D3").style.opacity=1;}	
	if(RANDS.innerHTML ==18){document.getElementById("D4").style.opacity=1;}	
	if(RANDS.innerHTML ==19){document.getElementById("D5").style.opacity=1;}	
	if(RANDS.innerHTML ==20){document.getElementById("D6").style.opacity=1;}	
	if(RANDS.innerHTML ==21){document.getElementById("D7").style.opacity=1;}	
   
    RANDSPLAYER.innerHTML =1;
	document.getElementById("player1").style.opacity=1;}
	
	
	if(STAGE==1){
	   
	   //back.style.width  =  0 + 'px';back.style.height = 0 + 'px';
	   document.getElementById("playerPONG").style.opacity=1;
	   document.getElementById("B1").style.opacity =document.getElementById("player3").style.opacity=1;}
  
}

function STAGE1(){  STAGE=1;audioCHANGE.play();document.getElementById("playerPONG").style.opacity=1;}
function STAGE2(){  STAGE=2;audioCHANGE.play();}
  

// START GAME

function Start()
{ //START+=1;
if(START==1)
   {clearInterval(iID);
    Init();
    boxgame.onmousemove = '';
	clearInterval(iID);
   START=2;
   }

   

   
  if(START==0)
   {
    boxgame.onmousemove = MOVEplayer;// Attach a function to onmousemove event of the boxgamegame MOVEplayer
    boxgame.onmousedown = CHANGEplayer;
   iID = setInterval('GameLoop()', 10);// Call 'GameLoop()' function every 10 milliseconds
   audioSTART.play();//msg.innerHTML = ''; 
   audioCAN.play(); 
   BOXBOMB.style.top = 15+ 'px';   
   START=1;
   }}   
   
function STOP()
{clearInterval(iID);
    Init();
    boxgame.onmousemove = '';
	clearInterval(iID);
   START=0;
   //STAGE=1;
   }

   



   // TO MOVE PLAYER ON MOUSE MOVE EVENT
function MOVEplayer(e)
   {
   var y = (e.clientY - (boxgame.offsetTop + 60 - document.documentElement.scrollTop));
   playerY = y;
   player1.style.top = player1a.style.top = player2.style.top = player2a.style.top = player3.style.top = player3a.style.top =  y + 'px';}
 
function CHANGEplayer()
   {if (STAGE ==2)
   {
   RANDSPLAYER.innerHTML++;
   audioCHANGE.play();
      if(RANDSPLAYER.innerHTML>3){RANDSPLAYER.innerHTML=1;}
   	  if(RANDSPLAYER.innerHTML ==1){document.getElementById("player1").style.opacity=1;
	                               document.getElementById("player2").style.opacity=0;
								   document.getElementById("player3").style.opacity=0;}	
	  if(RANDSPLAYER.innerHTML ==2){document.getElementById("player2").style.opacity=1;
	                               document.getElementById("player1").style.opacity=0;
								   document.getElementById("player3").style.opacity=0;}		  
	  if(RANDSPLAYER.innerHTML ==3){document.getElementById("player3").style.opacity=1;
	                               document.getElementById("player1").style.opacity=0;
								   document.getElementById("player2").style.opacity=0;}} }
								   
function BEGINGameLoop()
  {								   
  if ((STAGE ==1) && (XSTG1==0)  )   
   { XSTG=0;XSTG1=1;document.getElementById("backB").style.opacity = 0;document.getElementById("backP").style.opacity = 1;
   document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
   document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
   document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
   document.getElementById("FR7").style.opacity = 0;
   document.getElementById("B1").style.opacity = document.getElementById("B2").style.opacity =
   document.getElementById("B3").style.opacity = document.getElementById("B4").style.opacity = 
   document.getElementById("B5").style.opacity = document.getElementById("B6").style.opacity =
   document.getElementById("B7").style.opacity = 0; 
   document.getElementById("D1").style.opacity = document.getElementById("D2").style.opacity =
   document.getElementById("D3").style.opacity = document.getElementById("D4").style.opacity = 
   document.getElementById("D5").style.opacity = document.getElementById("D6").style.opacity =
   document.getElementById("D7").style.opacity = 0; 
   document.getElementById("smoke").style.opacity=document.getElementById("canon2").style.opacity=document.getElementById("canon").style.opacity=0;
   document.getElementById("B1").style.opacity =1;
   
   document.getElementById("player3").style.opacity=1;
   document.getElementById("playerPONG").style.opacity=1;
 //  bombX=870+'px';
	document.getElementById("player1").style.opacity=document.getElementById("player2").style.opacity=0;}
  if ((STAGE ==2)&&(XSTG==0) ){
  XSTG=1;XSTG1=0;document.getElementById("backB").style.opacity = 1;document.getElementById("backP").style.opacity = 0;
  document.getElementById("playerPONG").style.opacity=0;
  document.getElementById("canon").style.opacity=1;document.getElementById("player1").style.opacity=1;
  document.getElementById("player3").style.opacity=document.getElementById("player2").style.opacity=0;
  }
  }
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
//############################################ MAIN GAME LOOP ###################################################################
function GameLoop()
{

   // MOVE bomb
   bombX += dx;
   bombY += dy;
   

 
 //############################################ GAME OVER ###################################################################
//############################################# GAME OVER ###################################################################
//############################################## GAME OVER ###################################################################
//############################################### GAME OVER ################################################################## 
   if (scorelose.innerHTML <=0)
     {   
      clearInterval(iID);
      Init();
      boxgame.onmousemove = '';
      audioSAFAR.play();
	  START=0;} 
//############################################ GAME OVER ###############################################################################
//############################################# GAME OVER ###################################################################
//############################################## GAME OVER ###################################################################
//############################################### GAME OVER ##################################################################
//###########################################################################################################################
   
   
//########################################################################################################################### 
   // COLLISION DETECTION
   // If bomb hits upper or lower wall
   if(bombY < 0 || ((bombY + bomb.offsetHeight) > boxgame.offsetHeight))
   {
      dy = -dy; // Make x direction opposite
	  //document.getElementById("bomb2").style.opacity=0;
	  }
	  
 
//################################################# BOMB FRUIT LIMIT PLAYER SIDE          
//################################################# BOMB FRUIT LIMIT PLAYER SIDE 
//################################################# BOMB FRUIT LIMIT PLAYER SIDE 
//################################################# BOMB FRUIT LIMIT PLAYER SIDE 
//################################################# BOMB FRUIT LIMIT PLAYER SIDE 
//################################################# BOMB FRUIT LIMIT PLAYER SIDE 
   if (STAGE ==1) 
  { bomb.style.left =  B1.style.left = bombX + 'px';
    bomb.style.top  = B1.style.top  = bombY + 'px';
	
 playerPONG.style.top = playerPONGa.style.top =  (bombY+3) + 'px';
 //document.getElementById("playerPONG").style.opacity=1;	
	}
  

  if  ( (bombX > 850) &&  (STAGE ==1)   )   
         {dx = -dx;
		 document.getElementById("playerPONGa").style.opacity=1;
		 document.getElementById("playerPONG").style.opacity=0;}
		 
  if  ( (bombX < 650) &&  (STAGE ==1)   )   
         {document.getElementById("playerPONGa").style.opacity=0;
		 document.getElementById("playerPONG").style.opacity=1;}
//################################################# PING PONG LOSE
//################################################# PING PONG LOSE
   if ( (bombX < 50)   &&  (STAGE==1) )       
    {if(  ( dx<0)    &&   ( bombY > (playerY + (player1.offsetHeight)/2) )   ) 	  
        {clearInterval(iID);
        Init();
        boxgame.onmousemove = '';
        audioSAFAR.play();audioLOSE.play();
	   // START=0;
		}}
		
	if( (bombX < 50) &&  (STAGE ==1)   )       
    {if(  ( dx<0)    &&   (playerY > (bombY + (bomb.offsetHeight)/2) )     )   
        {clearInterval(iID);
        Init();
        boxgame.onmousemove = '';
        audioSAFAR.play();audioLOSE.play();
	  //  START=0;
		}}
 
//################################################# PING PONG EAT BOMB
//################################################# PING PONG EAT BOMB
   if ( (bombX <= 50) &&  (STAGE ==1)   )    
    { 	  
      if(  ( dx<0)  &&    ( (bombY + (bomb.offsetHeight)/2) > playerY)   &&    ( bombY < (playerY + (player1.offsetHeight)/2) )   ) 	  
        {score.innerHTML++;
		audioWINFRUIT.play();
		 //audioWINBOMB.play();
		 dx = -dx;
		 dx+=0.1;dy+=0.05;
        document.getElementById("player3").style.opacity=0;
        document.getElementById("player3a").style.opacity=1;}}  	


   if  (   ( bombX > 200) &&  (dx>0) &&(STAGE ==1)   ) 
      { document.getElementById("player3a").style.opacity=0;
        document.getElementById("player3").style.opacity=1; }	













		
//################################################# EAT FRUIT
//################################################# EAT FRUIT
   if ( (bombX <= 10) &&  (STAGE ==2)   )  
    { 	  
      if(  ( dx<0)  &&    ( (bombY + (bomb.offsetHeight)/2) > playerY)   &&    ( bombY < (playerY + (player1.offsetHeight)/2) )   &&   (RANDS.innerHTML<=7)  && (RANDSPLAYER.innerHTML == 1) ) 	  
        {score.innerHTML++;
		 audioWINFRUIT.play();
		 dx = -dx;
		 dx+=0.05;
		 dy+=0.05;
		 
	    document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
        document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
        document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
        document.getElementById("FR7").style.opacity = 0;

        document.getElementById("player1").style.opacity=0;
        document.getElementById("player1a").style.opacity=1;

	    }
	}  	
//################################################# EAT BOMB
//################################################# EAT BOMB
   if ( (bombX <= 10) &&  (STAGE ==2)   )    
    { 	  
      if(  ( dx<0)  &&    ( (bombY + (bomb.offsetHeight)/2) > playerY)   &&    ( bombY < (playerY + (player1.offsetHeight)/2) )   &&(RANDS.innerHTML>7)&&(RANDS.innerHTML<=14)  && (RANDSPLAYER.innerHTML == 2) ) 	  
        {scoreB.innerHTML++;
		audioWINFRUIT.play();
		 //audioWINBOMB.play();
		 dx = -dx;
		// dx+=0.05;dy+=0.05;

        document.getElementById("player2").style.opacity=0;
        document.getElementById("player2a").style.opacity=1;

	    }
	}  	
//################################################# EAT MEAT
//################################################# EAT MEAT
   if ( (bombX <= 10) &&  (STAGE ==2)   )    
    { 	  
      if(  ( dx<0)  &&    ( (bombY + (bomb.offsetHeight)/2) > playerY)   &&    ( bombY < (playerY + (player1.offsetHeight)/2) )   && (RANDS.innerHTML>14)  && (RANDSPLAYER.innerHTML == 3) ) 	  
        {scoreD.innerHTML++;
		audioWINFRUIT.play();
		 audioWINFOOD.play();
		 dx = -dx;
		// dx+=0.05;dy+=0.05;

		 document.getElementById("D1").style.opacity = document.getElementById("D2").style.opacity =
         document.getElementById("D3").style.opacity = document.getElementById("D4").style.opacity = 
         document.getElementById("D5").style.opacity = document.getElementById("D6").style.opacity =
         document.getElementById("D7").style.opacity = 0; 
   
        document.getElementById("player3").style.opacity=0;
        document.getElementById("player3a").style.opacity=1;

	    }
	}  	
//################################################# LOSE FRUIT
//################################################# LOSE FRUIT 
   if( (bombX <= 10)  &&  (STAGE ==2)   )         
    {if(  ( dx<0)    &&   ( bombY > (playerY + (player1.offsetHeight)/2) )  &&   (RANDS.innerHTML<=7)    && (RANDSPLAYER.innerHTML == 1)   ) 	  
        {score.innerHTML--;
		 audioLOSE.play();
		 dx = -dx;
	    document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
        document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
        document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
        document.getElementById("FR7").style.opacity = 0;}}
	
	if( (bombX <= 10) &&  (STAGE ==2)   )       
    {if(  ( dx<0)    &&   (playerY > (bombY + (bomb.offsetHeight)/2) )   &&   (RANDS.innerHTML<=7)   && (RANDSPLAYER.innerHTML == 1)   )   
        {score.innerHTML--;
		 audioLOSE.play();
		 dx = -dx;
	    document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
        document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
        document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
        document.getElementById("FR7").style.opacity = 0;}}
//################################################# MAKLA LOSE BOMB
//################################################# MAKLA LOSE BOMB
   if( (bombX <= 10) &&  (STAGE ==2)   )         
    {if(  ( dx<0)    &&   ( bombY > (playerY + (player1.offsetHeight)/2) )  &&   (RANDS.innerHTML>7)&&(RANDS.innerHTML<=14) && (RANDSPLAYER.innerHTML==2)    ) 	  
        {scoreB.innerHTML--;
		 audioLOSE.play();
		 dx = -dx;
        document.getElementById("B1").style.opacity = document.getElementById("B2").style.opacity =
        document.getElementById("B3").style.opacity = document.getElementById("B4").style.opacity = 
        document.getElementById("B5").style.opacity = document.getElementById("B6").style.opacity =
        document.getElementById("B7").style.opacity = 0; }}
	
	if( (bombX <= 10) &&  (STAGE ==2)   )       
    {if(  ( dx<0)    &&   (playerY > (bombY + (bomb.offsetHeight)/2) )   &&   (RANDS.innerHTML>7)&&(RANDS.innerHTML<=14)   &&(RANDSPLAYER.innerHTML==2) ) 	  
        {scoreB.innerHTML--;
		 audioLOSE.play();
		 dx = -dx;
        document.getElementById("B1").style.opacity = document.getElementById("B2").style.opacity =
        document.getElementById("B3").style.opacity = document.getElementById("B4").style.opacity = 
        document.getElementById("B5").style.opacity = document.getElementById("B6").style.opacity =
        document.getElementById("B7").style.opacity = 0; }}
//################################################# LOSE MEAT
//################################################# LOSE MEAT 
   if( (bombX <= 10) &&  (STAGE ==2)   )           
    {if(  ( dx<0)    &&   ( bombY > (playerY + (player1.offsetHeight)/2) )  &&   (RANDS.innerHTML>14)    && (RANDSPLAYER.innerHTML == 3)   ) 	  
        {scoreD.innerHTML--;
		 audioLOSE.play();
		 dx = -dx;
		 document.getElementById("D1").style.opacity = document.getElementById("D2").style.opacity =
         document.getElementById("D3").style.opacity = document.getElementById("D4").style.opacity = 
         document.getElementById("D5").style.opacity = document.getElementById("D6").style.opacity =
         document.getElementById("D7").style.opacity = 0; }}
	
	if( (bombX <= 10) &&  (STAGE ==2)   )         
    {if(  ( dx<0)    &&   (playerY > (bombY + (bomb.offsetHeight)/2) )   &&   (RANDS.innerHTML>14)    && (RANDSPLAYER.innerHTML == 3)   )   
        {scoreD.innerHTML--;
		 audioLOSE.play();
		 dx = -dx;
		 document.getElementById("D1").style.opacity = document.getElementById("D2").style.opacity =
         document.getElementById("D3").style.opacity = document.getElementById("D4").style.opacity = 
         document.getElementById("D5").style.opacity = document.getElementById("D6").style.opacity =
         document.getElementById("D7").style.opacity = 0; }}	
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
//################################################# EXP FRUIT
//################################################# EXP FRUIT
   if( (bombX <= 10) &&  (STAGE ==2)   )      
    { 	  
      if(  ( dx<0)  &&    ( (bombY + (bomb.offsetHeight)/2) > playerY)   &&    ( bombY < (playerY + (player1.offsetHeight)/2) )   &&   (RANDS.innerHTML<=7)  && (RANDSPLAYER.innerHTML != 1) ) 	  
        {score.innerHTML--;
		audioLOSE.play();
		 audioSAFAR.play();
		 dx = -dx;
		// dx+=0.05;dy+=0.05;
		 
	    document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
        document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
        document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
        document.getElementById("FR7").style.opacity = 0;
	    }
	}  	
//#################################################  BOMB EXPL
//#################################################  BOMB EXPL
   if( (bombX <= 10) &&  (STAGE ==2)   )     
    { 	  
      if(  ( dx<0)  &&  ((bombY + (bomb.offsetHeight)/2) > playerY)  &&  (bombY < (playerY +(player1.offsetHeight)/2))  &&(RANDS.innerHTML>7)&&(RANDS.innerHTML<=14) && (RANDSPLAYER.innerHTML !=2)   ) 	  
        {scorelose.innerHTML--;
		 scoreB.innerHTML--;
		 audioLOSE.play();
		 audioLOSEBOMB.play();
		 dx = -dx;
        document.getElementById("B1").style.opacity = document.getElementById("B2").style.opacity =
        document.getElementById("B3").style.opacity = document.getElementById("B4").style.opacity = 
        document.getElementById("B5").style.opacity = document.getElementById("B6").style.opacity =
        document.getElementById("B7").style.opacity = 0; 
		document.getElementById("smokeP").style.opacity=1;
	    }
	}  		 
//#################################################  MEAT EXPL
//#################################################  MEAT EXPL
   if( (bombX <= 10) &&  (STAGE ==2)   )     
    { 	  
      if(  ( dx<0)  &&  ((bombY + (bomb.offsetHeight)/2) > playerY)  &&  (bombY < (playerY +(player1.offsetHeight)/2))  &&(RANDS.innerHTML>14) && (RANDSPLAYER.innerHTML !=3)   ) 	  
        {scoreD.innerHTML--;
		audioLOSE.play();
		 audioKBIR.play();
		 dx = -dx;
 		 document.getElementById("D1").style.opacity = document.getElementById("D2").style.opacity =
         document.getElementById("D3").style.opacity = document.getElementById("D4").style.opacity = 
         document.getElementById("D5").style.opacity = document.getElementById("D6").style.opacity =
         document.getElementById("D7").style.opacity = 0; 
	    }
	} 

	

//#################################################  AVOID 
//#################################################  AVOID 
   if( (bombX <= 10) &&  (STAGE ==2)   )           
    {if(  ( dx<0)    &&   ( bombY > (playerY + (player1.offsetHeight)/2) )    &&   (RANDS.innerHTML>7)&&(RANDS.innerHTML<=14) ) 	  
        {dx = -dx;
		
        document.getElementById("B1").style.opacity = document.getElementById("B2").style.opacity =
        document.getElementById("B3").style.opacity = document.getElementById("B4").style.opacity = 
        document.getElementById("B5").style.opacity = document.getElementById("B6").style.opacity =
        document.getElementById("B7").style.opacity = 0;  }}
	
	if( (bombX <= 10) &&  (STAGE ==2)   )         
    {if(  ( dx<0)    &&   (playerY > (bombY + (bomb.offsetHeight)/2) )   &&   (RANDS.innerHTML>7)&&(RANDS.innerHTML<=14) ) 	  
        {dx = -dx;
        document.getElementById("B1").style.opacity = document.getElementById("B2").style.opacity =
        document.getElementById("B3").style.opacity = document.getElementById("B4").style.opacity = 
        document.getElementById("B5").style.opacity = document.getElementById("B6").style.opacity =
        document.getElementById("B7").style.opacity = 0; }}	 

		
//#################################################  ELSE AVOID 
//#################################################  ELSE AVOID 
   if( (bombX <= 10) &&  (STAGE ==2)   )          
    {if(  ( dx<0)    &&   ( bombY > (playerY + (player1.offsetHeight)/2) )   ) 	  
        {dx = -dx;
		
	    document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
        document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
        document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
        document.getElementById("FR7").style.opacity =

		document.getElementById("D1").style.opacity = document.getElementById("D2").style.opacity =
        document.getElementById("D3").style.opacity = document.getElementById("D4").style.opacity = 
        document.getElementById("D5").style.opacity = document.getElementById("D6").style.opacity =
        document.getElementById("D7").style.opacity = 0; 
		
		}}
	
	if( (bombX <= 10) &&  (STAGE ==2)   )    
    {if(  ( dx<0)    &&   (playerY > (bombY + (bomb.offsetHeight)/2)  )   )
        {dx = -dx;
	    document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
        document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
        document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
        document.getElementById("FR7").style.opacity =

		document.getElementById("D1").style.opacity = document.getElementById("D2").style.opacity =
        document.getElementById("D3").style.opacity = document.getElementById("D4").style.opacity = 
        document.getElementById("D5").style.opacity = document.getElementById("D6").style.opacity =
        document.getElementById("D7").style.opacity = 0; 
		
		}}	 

//################################################# BOMB FRUIT LIMIT CANON SIDE          
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 
//################################################# BOMB FRUIT LIMIT CANON SIDE 
    if(score.innerHTML<=0){score.innerHTML=0;}
	if(scoreB.innerHTML<=0){scoreB.innerHTML=0;}
	if(scoreD.innerHTML<=0){scoreD.innerHTML=0;}
   if  ( (bombX > 750) &&  (STAGE ==2)   )   
         {dx = -dx;
		 audioCAN.play();
		 BOXBOMB.style.top = 15+ 'px';
		 document.getElementById("smoke").style.opacity=1;
		 document.getElementById("canon").style.opacity=0;
		 document.getElementById("canon2").style.opacity=1;
		 document.getElementById("smokeP").style.opacity=0;
		
	    document.getElementById("FR1").style.opacity = document.getElementById("FR2").style.opacity =
        document.getElementById("FR3").style.opacity = document.getElementById("FR4").style.opacity =
        document.getElementById("FR5").style.opacity = document.getElementById("FR6").style.opacity =
        document.getElementById("FR7").style.opacity =

        document.getElementById("B1").style.opacity = document.getElementById("B2").style.opacity =
        document.getElementById("B3").style.opacity = document.getElementById("B4").style.opacity = 
        document.getElementById("B5").style.opacity = document.getElementById("B6").style.opacity =
        document.getElementById("B7").style.opacity = 
		
		document.getElementById("D1").style.opacity = document.getElementById("D2").style.opacity =
        document.getElementById("D3").style.opacity = document.getElementById("D4").style.opacity = 
        document.getElementById("D5").style.opacity = document.getElementById("D6").style.opacity =
        document.getElementById("D7").style.opacity = 0; 
	
	    RANDS.innerHTML=Math.floor((Math.random() * 21) + 1);
		
       if(RANDS.innerHTML ==1){document.getElementById("FR1").style.opacity=1;}	
	   if(RANDS.innerHTML ==2){document.getElementById("FR2").style.opacity=1;}	
	   if(RANDS.innerHTML ==3){document.getElementById("FR3").style.opacity=1;}	
	   if(RANDS.innerHTML ==4){document.getElementById("FR4").style.opacity=1;}
	   if(RANDS.innerHTML ==5){document.getElementById("FR5").style.opacity=1;}	
	   if(RANDS.innerHTML ==6){document.getElementById("FR6").style.opacity=1;}	
	   if(RANDS.innerHTML ==7){document.getElementById("FR7").style.opacity=1;}

       if(RANDS.innerHTML ==8){document.getElementById("B1").style.opacity=1;}	
	   if(RANDS.innerHTML ==9){document.getElementById("B2").style.opacity=1;}	
	   if(RANDS.innerHTML ==10){document.getElementById("B3").style.opacity=1;}	
	   if(RANDS.innerHTML ==11){document.getElementById("B4").style.opacity=1;}	
	   if(RANDS.innerHTML ==12){document.getElementById("B5").style.opacity=1;}	
	   if(RANDS.innerHTML ==13){document.getElementById("B6").style.opacity=1;}	
	   if(RANDS.innerHTML ==14){document.getElementById("B7").style.opacity=1;}
	   
	   	if(RANDS.innerHTML ==15){document.getElementById("D1").style.opacity=1;}	
	    if(RANDS.innerHTML ==16){document.getElementById("D2").style.opacity=1;}	
	    if(RANDS.innerHTML ==17){document.getElementById("D3").style.opacity=1;}	
	    if(RANDS.innerHTML ==18){document.getElementById("D4").style.opacity=1;}	
	    if(RANDS.innerHTML ==19){document.getElementById("D5").style.opacity=1;}	
	    if(RANDS.innerHTML ==20){document.getElementById("D6").style.opacity=1;}	
	    if(RANDS.innerHTML ==21){document.getElementById("D7").style.opacity=1;}	
	   
	}
//################################################### BOMB FRUIT MOVE ######################################################################## 
//################################################### BOMB FRUIT MOVE ######################################################################## 
//################################################### BOMB FRUIT MOVE ######################################################################## 
//################################################### BOMB FRUIT MOVE ######################################################################## 

   // Place bomb at calculated positions
   if (STAGE ==2)  {  
   bomb.style.left = FR1.style.left = FR2.style.left  = FR3.style.left  = FR4.style.left  = FR5.style.left = FR6.style.left  = FR7.style.left  = bombX + 'px';
   bomb.style.top  = FR1.style.top  = FR2.style.top  =  FR3.style.top  = FR4.style.top  = FR5.style.top  = FR6.style.top  =  FR7.style.top  =  bombY + 'px';
   
   bomb.style.left =  B1.style.left = B2.style.left  = B3.style.left  = B4.style.left  = B5.style.left = B6.style.left  = B7.style.left  = bombX + 'px';
   bomb.style.top  = B1.style.top  = B2.style.top  =  B3.style.top  = B4.style.top  = B5.style.top  = B6.style.top  =  B7.style.top  = bombY + 'px';
  
   D1.style.left = D2.style.left  = D3.style.left  = D4.style.left  = D5.style.left = D6.style.left  = D7.style.left  = bombX + 'px';
   D1.style.top  = D2.style.top  =  D3.style.top  = D4.style.top  = D5.style.top  = D6.style.top  =  D7.style.top  = bombY + 'px';  

   smokeP.style.top = playerY+'px';
   
   if( bombX <= 600)
   {document.getElementById("canon2").style.opacity=0;
   document.getElementById("canon").style.opacity=1;
   BOXBOMB.style.top = 5+ 'px';}
   
   
   if( bombX <= 300)
   {document.getElementById("smoke").style.opacity=0;}
   
   
    if (   ( bombX > 200) && (RANDSPLAYER.innerHTML == 1)    )
   {document.getElementById("player1").style.opacity=1;}
   
    if  ( ( bombX > 200) && (RANDSPLAYER.innerHTML == 2)   )
   {document.getElementById("player2").style.opacity=1;} 
   
     if  ( ( bombX > 200) && (RANDSPLAYER.innerHTML == 3)   )
   {document.getElementById("player3").style.opacity=1;} 
   
   if  (   ( bombX > 200) &&  (dx>0)    ) 
      { document.getElementById("player1a").style.opacity=
        document.getElementById("player2a").style.opacity=
		document.getElementById("player3a").style.opacity=0; }
		
   
   if  (   ( bombX > 300) &&  (dx>0)    ) 
      { document.getElementById("B1").style.opacity = document.getElementById("B2").style.opacity =
        document.getElementById("B3").style.opacity = document.getElementById("B4").style.opacity = 
        document.getElementById("B5").style.opacity = document.getElementById("B6").style.opacity =
        document.getElementById("B7").style.opacity = 0; }
   
 
   //MOVE CANON
   if (bombX < 750) 
   { canon.style.top = canon2.style.top =  (bombY+3) + 'px';
    smoke.style.top = (canon.style.top-50) + 'px';}
   }	
 
 }