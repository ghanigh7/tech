'use strict';  //    
//var AFFICHE;AFFICHE = document.getElementById('AFFICHE');AFFICHE.innerHTML=0;
var score;var score1=0;var speed;
score = document.getElementById('score');
score.innerHTML=99;

var TOPmenu2;TOPmenu2 = document.getElementById('TOPmenu2');
TOPmenu2.style.width = 0 + 'px';
TOPmenu2.style.height = 0 + 'px';//300
TOPmenu2.style.opacity = 0;


var sundegree=9;
var sunchange=0;
//var range3=0;
function showValue(newValue)
{sundegree=document.getElementById("range").innerHTML=newValue;//range2=newValue;
sunchange=1;
//range3 = document.getElementById("range3");range3.innerHTML=newValue;
}

var KEYNUMBER;
KEYNUMBER = document.getElementById('KEYNUMBER');
KEYNUMBER.innerHTML=0;

var SUN=0;
function SUN1(){SUN=1;sunchange=1;}
function SUN0(){SUN=0;sunchange=1;}
var SUNicon,MOONicon;
SUNicon= document.getElementById('SUNicon');SUNicon.style.width = SUNicon.style.height = 0 + 'px';
MOONicon= document.getElementById('MOONicon');MOONicon.style.width = MOONicon.style.height = 45 + 'px';


speed = document.getElementById('speed');
speed.innerHTML=0;

var FIRSTANM=0;

var ROT3D=1;

var DELTAY0=0;var DELTAY1=0;var DELTAY11=0;var DELTAY12=0;	
var CAMDELTAY=0; 
var CAMDELTAY1=0;	

var KEY = 1;
var ACTION=0;
var BONKAVE=0;
var KAVETYPE=0;
var KAVETYPE2=1;
var BONKAVEOUT=0;
var STOPKAVE=0;
var SMALKAVE=0;

var MONSTX1 = 0;var MONSTZ1 = 0;var MONSTY1 =0; 
var GRASSE=0;//GRASS LEVELE
//var CABR1=0;var cab=0; //CABRER ACCELERATION
/*
TEST1 = document.getElementById('TEST1');
TEST1.innerHTML=0;
TEST2 = document.getElementById('TEST2');
TEST2.innerHTML=0;
TEST3 = document.getElementById('TEST3');
TEST3.innerHTML=0;*/

var SS=0;var SS0=0;var SS1=0;var SS2=0;// SOUND FOR BRAKE
var s=0;
//var ROU = 0;
var WALK=0;
//var PANM=0; // LIGHT PANAL START ENTRANCE ANIMATION 

var root=0;//light cligneton
var root1=0;
var ROTS = 0;
var RROTATION=0;
var LEVELS=2;

var START=0;var OFFF=0;var RESTART=0;var ANIMR=0;var anim=0;var RET=0;//
var STOPicon,RESTARTicon,STARTicon;
STOPicon= document.getElementById('STOPicon');STOPicon.style.width = STOPicon.style.height = 0 + 'px';
RESTARTicon= document.getElementById('RESTARTicon');RESTARTicon.style.width = RESTARTicon.style.height = 0 + 'px';
STARTicon= document.getElementById('STARTicon');

START = document.getElementById('START');
var ENERGicon;ENERGicon= document.getElementById('ENERGicon');
ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
ENERGicon.style.left = 153 + 'px';ENERGicon.style.top = 369 + 'px';


var KEYicon1;var KEYicon2;var KEYicon3;var KEYicon4;
KEYicon1 = document.getElementById('KEYicon1');
KEYicon2 = document.getElementById('KEYicon2');
KEYicon3 = document.getElementById('KEYicon3');
KEYicon4 = document.getElementById('KEYicon4');

KEYicon1.style.opacity=KEYicon2.style.opacity=KEYicon3.style.opacity=KEYicon4.style.opacity=0.4;
var LEVELS1,LEVELS2,LEVELS3,LEVELS4;
LEVELS1=LEVELS2=LEVELS3=LEVELS4=0;

var ALRTn=0;var ALRTf=0;

var CAMX,CAMY,playerPOS,BOUSL,RAKAS,RAKAS2,RAKASGAS,ENERG;var ENERGIE=300;var SPEEDC=1;var SPEEDC0=12;var SPEEDCM=0;var LOADENERGS=0;
CAMX = document.getElementById('CAMX');CAMY = document.getElementById('CAMY');
CAMX.innerHTML=0;CAMY.innerHTML=0; 
playerPOS = document.getElementById('playerPOS');//document.getElementById("playerPOS").style.opacity=1;
BOUSL = document.getElementById('BOUSL');RAKAS = document.getElementById('RAKS');
ENERG = document.getElementById('ENERG');RAKAS2 = document.getElementById('RAKS2');
RAKASGAS  = document.getElementById('RAKASGAS');
document.getElementById("RAKAS2").style.transform = "rotate(-142deg)";
document.getElementById("RAKASGAS").style.transform = "rotate(110deg)";
var BON=0;var BON1=0;
var BONT=0;var BONT1=0;
var BONW=0;var BONW1=0;
var BONKAVE=0; var BONK1=0;
var ZZm1=0;


//var FRT =0;var KEY=0;var KEYSS=0;

//var PIRATESWIN=0;PIRATESWIN = document.getElementById('PIRATESWIN');PIRATESWIN.innerHTML=0;


/*var DIRX,DIRY,DIRZ;
DIRX = document.getElementById('DIRX');DIRY = document.getElementById('DIRY');DIRZ = document.getElementById('DIRZ');
DIRX.innerHTML=0;DIRY.innerHTML=0;DIRZ.innerHTML=0;*/

//DIRXZ = document.getElementById('DIRXZ');//rotation degree
var DIRXZ=0;
//DIRXZ.innerHTML=0;

//DIRXX = document.getElementById('DIRXX');//rotation degreeDIRXX.innerHTML=0;

//HAUT = document.getElementById('HAUT');HAUT.innerHTML=0;
//var CAMRX;CAMRX = document.getElementById('CAMRX');CAMRX.innerHTML=0;

var monsterWTOUCHED=0;var mT=0;
var monsterKILLED=0;var mT1=0;
var planeUPER=0;var UPER=0;var UPRR=0;var UPRR1=0;var planeDOWN=-1;var DOWN=0;
var SUPER=0; var planeSUPER=0;var SUPERyy = 0;

var treesTOUCH=0;var TT=0;var TT1=0;
var treesTOUCH2=0;var TT0=0;var TT2=0;

var boombTOUCH=0;var bb=0;
var buildingsTOUCH = 0;var STOPbuilding=0;var STOPbuilding2=0;var BUILDING=0;

var XX,YY,ZZ;
XX=0;YY=0;ZZ=-1;




var MX,MY,monsterPOS,monsterPOS2,monsterPOS3,monsterPOS4;
var DXXm,DYYm,DZZm;
DXXm=0.1;DYYm=0.1;DZZm=0.1;

MX = document.getElementById('MX');MY = document.getElementById('MY');
MX=0;MY=0;
monsterPOS  =  document.getElementById('monsterPOS');monsterPOS.style.opacity=0;
monsterPOS2 = document.getElementById('monsterPOS2');monsterPOS2.style.opacity=0;
monsterPOS3 = document.getElementById('monsterPOS3');monsterPOS3.style.opacity=0;
monsterPOS4 = document.getElementById('monsterPOS4');monsterPOS4.style.opacity=0;
 monsterPOS3.style.top  = 90+ 'px';monsterPOS3.style.left =200+ 'px';
/*
var DELTAXm=3;
var DELTAYm=1;
var DELTAZm=3;

var DELTAXm=16;
var DELTAYm=13;
var DELTAZm=16;
*/

var DELTAXm=-3;
var DELTAYm=-3;
var DELTAZm=16;

var XXm,YYm,ZZm;
XXm=23;YYm=444;ZZm=3;


//monsterPOS = document.getElementById('monsterPOS');


//var BOXEXPLOSE=0;
//var bx=0;
//var EXPx=0;var EXPy=0;var EXPz=0; 

//var BOXEXPLOSE1=0;var bx1=0;


//var EXPx1=0;var EXPz1=0;
//var BOMBED=0;
//var SDOOR=0;var d=0;  

//var INSIDBOX;//INSIDBOX = document.getElementById('INSIDBOX');INSIDBOX.innerHTML=0;


var CAR = new Audio('DATASECRYGH11/sounds/CAR.mp3');//CAR2
//var CARBRAKE = new Audio('DATASECRYGH11/sounds/ALERTSTART.mp3');//CARBRAKE

var CARACCE = new Audio('DATASECRYGH11/sounds/CAR.ACCELR.mp3');
var CARSTOP = new Audio('DATASECRYGH11/sounds/ALERT1.mp3');
var CARBRAKE = new Audio('DATASECRYGH11/sounds/CARBRAKE.mp3');
var CARCRASH = new Audio('DATASECRYGH11/sounds/CARCRASH.mp3');
var CARMENU = new Audio('DATASECRYGH11/sounds/CAR.ACELR.MEN2.mp3');

var BOUTTON = new Audio('DATASECRYGH11/sounds/BONUS.mp3');//BOUTTON
var BOUTTON1 = new Audio('DATASECRYGH11/sounds/BOUTTON1.mp3');

//var WINFRUIT = new Audio('DATASECRYGH11/sounds/WINFRUIT.mp3');
var HAHA = new Audio('DATASECRYGH11/sounds/HAHA.mp3');	
var CHANGE = new Audio('DATASECRYGH11/sounds/CHANGE.mp3');
var YEHAW = new Audio('DATASECRYGH11/sounds/YEHAW.mp3');
var PLANESUPER1= new Audio('DATASECRYGH11/sounds/PLANESUPER1.mp3');//PLANESUPER1
//var PLANESTOP= new Audio('DATASECRYGH11/sounds/PLANESTOP.mp3');
var EXPLOS1= new Audio('DATASECRYGH11/sounds/EXPLOS1.mp3');	
//var LOSE= new Audio('DATASECRYGH11/sounds/LOSE.mp3');	
//var OFF= new Audio('DATASECRYGH11/sounds/OFF.mp3');
var ALERT= new Audio('DATASECRYGH11/sounds/ALERT.mp3');
//var BONUS= new Audio('DATASECRYGH11/sounds/BONUS.mp3');
var BONUS3= new Audio('DATASECRYGH11/sounds/BONUS3.mp3');



//var MONSTERFIRE=0;var MONS=0;
//var MNX=0;var MNY=-30;var MNZ=0;

//var BEGINFOG=0;

var VIBR=0;
/*
var MONSTERFIRE=0;var MONS=0;
var MNX=0;var MNY=-30;var MNZ=0;


var BEGINFOG=0;*/
var DROT=0;// direct rotatin tree touch
var UPRR2=0;// up for rotatin
var UPRR3=0;// up for BOMB

//################################# KEY BOARD CONTROL ############################
//################################# KEY BOARD CONTROL ############################
//################################# KEY BOARD CONTROL ############################
//################################# KEY BOARD CONTROL ############################
//################################# KEY BOARD CONTROL ############################
//################################# KEY BOARD CONTROL ############################
var keys={letft:0,right:0,forward:0,back:0};
window.addEventListener("keydown", handleKeyDown, false);
window.addEventListener("keyup", handleKeyUp, false);

function handleKeyDown(evt){
    if (evt.keyCode==37){keys.left=1;} //  Q   
    if (evt.keyCode==39){keys.right=1;}//  D     
    if (evt.keyCode==38){keys.forward=1;}//Z      
    if (evt.keyCode==40){keys.back=1;}     }//S
	
function handleKeyUp(evt){
    if (evt.keyCode==37){keys.left=0;}
    if (evt.keyCode==39){keys.right=0;}
    if (evt.keyCode==38){keys.forward=0;}
    if (evt.keyCode==40){keys.back=0;}   }



var HANDCONTROL=0;	
function HAND1(){  HANDCONTROL=1;BOUTTON1.play();}
function HAND2(){  HANDCONTROL=0;BOUTTON1.play();}
	
 function loadXMLDoc(filename)
{ 
if (window.XMLHttpRequest)
  {var xhttp=new XMLHttpRequest();}
else // code for IE5 and IE6
  {var xhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xhttp.open("GET",filename,false);
xhttp.send();
return xhttp.responseXML;
}

 

/*
var TIMS=300;
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
	display.textContent = "05 : 00";
    setInterval(function () {
	  if(START==1){
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {timer = duration;}
		}

    }, 1000);
}
startTimer(TIMS, document.querySelector('#time')); */


var EXPL=0;
/*
var HEIGHT=0;
HEIGHT = document.getElementById('HEIGHT');
HEIGHT.innerHTML =0;

var HEIGH=0;
HEIGH = document.getElementById('HEIGH');
HEIGH.innerHTML =0;

var HEIGHT2=0;
HEIGHT2 = document.getElementById('HEIGHT2');
HEIGHT2.innerHTML =0;
*/
var INCLIN=1;
var INCLINUP=0;
var INCLINDN=0;

var timer2 =0;
var minutes2,seconds2;
minutes2 = document.getElementById('minutes2');
seconds2 = document.getElementById('seconds2');
minutes2.innerHTML = seconds2.innerHTML = "00";
function starttimer2() {
    setInterval(function () {
	if(RESTART==1){timer2 =0;minutes2.innerHTML =seconds2.innerHTML = 0;}
	  if(START==1){timer2++;
        minutes2.innerHTML = parseInt(timer2 / 60, 10);
        seconds2.innerHTML = parseInt(timer2 % 60, 10);
		minutes2.innerHTML = minutes2.innerHTML < 10 ? "0" + minutes2.innerHTML : minutes2.innerHTML;
        seconds2.innerHTML = seconds2.innerHTML < 10 ? "0" + seconds2.innerHTML : seconds2.innerHTML;}
    }, 1000);
}
starttimer2(document.querySelector('#time2'));


var MOTTO=0; 
function MOTTO1(){  MOTTO=1;CARMENU.play();}
function MOTTO2(){  MOTTO=2;CARMENU.play();}
function MOTTO3(){  MOTTO=3;CARMENU.play();}


/*var CARRR=3;var chang=1; 

function CARR1(){  CARRR=1;chang=1;CARMENU.play();}
function CARR2(){  CARRR=2;chang=1;CARMENU.play();}	
*/

function Startt()

{   BOUTTON.play();
    START+=1;ROT3D=0;
    if(START>1){START=0;}
  if(START==1){//&&(anim==0))
	           if(FIRSTANM==3){STOPicon.style.width = STOPicon.style.height = 60 + 'px';CAR.play();CAR.loop = true;CAR.volume=0.5;
			                   STARTicon.style.width = STARTicon.style.height = 0 + 'px';OFFF=0;RESTART=0;
							   RESTARTicon.style.width = RESTARTicon.style.height = 60 + 'px';
							   
		
							   }
			   if(FIRSTANM==0){FIRSTANM=1;}
			   
			   }   
  if(START==0){STOPicon.style.width = STOPicon.style.height = 0 + 'px';CARACCE.volume=0.0;
               STARTicon.style.width = STARTicon.style.height = 60 + 'px';}//audioMOTORUN.pause();
	




	}
	  

	  
function restartt()    {RESTART=1;timer2 =0;minutes2.innerHTML = seconds2.innerHTML = "00";}



//startTimer(TIMS, document.querySelector('#time'));

var SMALLSCREEN=1;var BIGSCREEN=0;
var DISTANCE =23.4;

function SmallScreen(){DISTANCE =23.4;}
function BigScreen(){DISTANCE =26.4;}
 


	  
function runDemo(canvasId) {
	var canvas = document.getElementById(canvasId);
	var engine = new BABYLON.Engine(canvas, true);
	
	// Création de la scène
	var scene = new BABYLON.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -0.1981, 0);
	scene.collisionsEnabled = true;
	
	// Ajout d'une caméra et de son contrôleur
//#################################################### CAM CONTROLER ########################################################################################
 //#################################################### CAM CONTROLER ########################################################################################
  //#################################################### CAM CONTROLER ########################################################################################
 //#################################################### CAM CONTROLER ########################################################################################
  //#################################################### CAM CONTROLER ######################################################################################## 
  //#################################################### CAM CONTROLER ########################################################################################
  
  var camera = new BABYLON.FreeCamera("MainCamera", new BABYLON.Vector3(21, 8, -4) , scene);//(104, 7.5, 543)
  //camera.position = new BABYLON.Vector3(21, 8, -4);//(104, 7.5, 543);	
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);//######################################
	//camera.applyGravity = true;
    camera.checkCollisions = true;

	
	camera.speed = 0.5;
	camera.angularSensibility = 1000;
	camera.rotation.y=-Math.PI/2;
	camera.rotation.y= -Math.PI/2.06;
	camera.rotation.x= 0.1;

   //scene.activeCamera.attachControl(canvas);



	
		// create sensor mesh  - parent to  camera
	/*var camSensor = new BABYLON.Mesh.CreateBox("sensor", 1, scene);
	camSensor.material = new BABYLON.StandardMaterial("camMat", scene);
	camSensor.isVisible = false;
	camSensor.material.wireframe = true;
	camSensor.scaling = new BABYLON.Vector3(.01, .01, .01);
	camSensor.position = new BABYLON.Vector3(0, .005, 0);
	camSensor.parent = camera;*/
//###################### LIGHT  #############################################
//###################### LIGHT  #############################################
//###################### LIGHT  #############################################

	
	var LIGHTmov = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(300, 50, 0), scene);
	LIGHTmov.diffuse = new BABYLON.Color3(1, 1, 1);
	LIGHTmov.specular = new BABYLON.Color3(0.0, 0.0, 0.0);
	LIGHTmov.intensity = 2.2;//2.2  0.17
	
	
	
        	// light1
 
       	var light1 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(-1, -2, -1), scene);//(-1, -2, -1)
        	light1.position = new BABYLON.Vector3(160,2,460);//160,12,460);  (0,7,0);
        	light1.intensity = 2.005;//8.5;
			
/*
	var LIGHTmovUP = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(300, 50, 0), scene);
	LIGHTmovUP.diffuse = new BABYLON.Color3(1, 1, 1);
	LIGHTmovUP.specular = new BABYLON.Color3(0.0, 0.0, 0.0);
	LIGHTmovUP.intensity = 0.00002;	*/
	
	//document.addEventListener("contextmenu", function (e) { e.preventDefault();	}); // STARS
	

	createSkybox(scene);
	createDemoScene(scene);


//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
		/*    var boxkey = BABYLON.Mesh.CreateBox("box1", 5, scene);
			boxkey.visibility = 0;
            // Create a particle system
            var particleSystem = new BABYLON.ParticleSystem("particles", 20000, scene);
            particleSystem.particleTexture = new BABYLON.Texture("img_game/flare.png", scene);//flare.png
        
            // Where the particles come from
            particleSystem.emitter = boxkey; // the starting object, the emitter
            particleSystem.minEmitBox = new BABYLON.Vector3(-5, 0, 0); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(5, 5, 0); // To...
        
            // Colors of all particles
            particleSystem.color1 = new BABYLON.Color4(0.0, 1.0, 0.0, 1.0);
            particleSystem.color2 = new BABYLON.Color4(0.0, 1.0, 0.0, 1.0);
            particleSystem.colorDead = new BABYLON.Color4(0.0, 1.0, 0.0, 1.0);
        
            // Size of each particle (random between...
            particleSystem.minSize = 0.1;
            particleSystem.maxSize = 0.1;
        
            // Life time of each particle (random between...
            particleSystem.minLifeTime = 0.1;
            particleSystem.maxLifeTime = 3.0;
        
            // Emission rate
            particleSystem.emitRate = 20000000;
        
            // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        
            // Set the gravity of all particles
            particleSystem.gravity = new BABYLON.Vector3(0, -981, 0);
        
            // Direction of each particle after it has been emitted
            particleSystem.direction1 = new BABYLON.Vector3(3, 1, 10);
            particleSystem.direction2 = new BABYLON.Vector3(-3, -3, -30);
        
            // Angular speed, in radians
            particleSystem.minAngularSpeed = 0;
            particleSystem.maxAngularSpeed = Math.PI;
        
            // Speed
            particleSystem.minEmitPower = 1;
            particleSystem.maxEmitPower = 1;
            particleSystem.updateSpeed = 0.0005;
        
            // Start the particle system
		    //particleSystem.start();
			//particleSystem.stop();
			
			//boxkey.position =  new BABYLON.Vector3(-16, 3, 10);
			*/

    //####################################### THE BOXS GAME
	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAMe

	
		 	var BARELM = new BABYLON.StandardMaterial("BAREl", scene);
	BARELM.diffuseTexture = new BABYLON.Texture("img_game/BA1.jpg", scene);
	BARELM.bumpTexture = new BABYLON.Texture("img_game/BA1N.jpg", scene);
	BARELM.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	
	
		 	var BARELBK = new BABYLON.StandardMaterial("BAREl", scene);
	BARELBK.diffuseTexture = new BABYLON.Texture("img_game/A00.jpg", scene);
	BARELBK.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
		
	
	var BAREL2 = new BABYLON.StandardMaterial("BAREl", scene);
	BAREL2.diffuseTexture = new BABYLON.Texture("img_game/BA2.jpg", scene);
    BAREL2.bumpTexture = new BABYLON.Texture("img_game/BA2N.jpg", scene);	
	BAREL2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	
	var boxMaterial = new BABYLON.StandardMaterial("bMaterial", scene);
	boxMaterial.diffuseTexture = new BABYLON.Texture("img_game/box.jpg", scene);
	boxMaterial.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0); //box.BARELBOMBS = "BOMB";
	
	//var boxC1 = BABYLON.Mesh.CreateCylinder("BAREL", 8, 0.1, 1, 6, scene);boxC1.material = BARELBK;boxC1.position.y=4;
	
	/*var box = BABYLON.Mesh.CreateBox("box1", 5, scene);box.material = boxMaterial;
	var boxC1 = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene);boxC1.material = BAREL2;
	var boxC2 = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene);boxC2.material = BARELM;
	
	box.position = boxC1.position = boxC2.position = new BABYLON.Vector3(77, 3 , 400);
	
		var xxx;var yyy;//130;570:130;380               -130:380     -130:570
	for (var i = 0; i < 90; i++) {
		yyy = random(-800, 800); 
		
		if(i<=30) {    
		xxx = random(-1200, -130);
		if(i<=10){var box1 = box.clone(box);box1.position = new BABYLON.Vector3(xxx, 3 , yyy);}   
	    if((i<20)&&(i>10)){var box2 = boxC1.clone(boxC1);box2.position = new BABYLON.Vector3(xxx, 3 , yyy);}
		if(i>=20){var box3 = boxC2.clone(boxC2);box3.position = new BABYLON.Vector3(xxx, 3 , yyy);}
	if   ( (i % 3 == 0)&&(i>10)) {box2.rotation.x=Math.PI/2;box2.position.y =2.1; }       }
	

		if(i>30) {
		xxx = random(130, 1200);
		if(i<=50){var box4 = box.clone(box);box4.position = new BABYLON.Vector3(xxx, 3 , yyy);}
		if(i>=70){var box5 = boxC1.clone(boxC1);box5.position = new BABYLON.Vector3(xxx, 3 , yyy);}
		if((i<70)&&(i>50)){var box6 = boxC1.clone(boxC1);box6.position = new BABYLON.Vector3(xxx, 3 , yyy);}
		box.position = new BABYLON.Vector3(xxx, 2.6 , yyy);
	   if   ( (i % 3 == 0)&&(i>50)) {box6.rotation.x=Math.PI/2;box6.position.y =2.5; } 	}		

		box.BARELBOMBS = "BOMB";
        boxC1.BARELBOMBS = "BOMB";	
		boxC2.BARELBOMBS = "BOMB";
		box.checkCollisions=true;} 
		*/
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	

		


//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	

  
			
       	// Ground
    	
	/*var groundGRBIG = BABYLON.Mesh.CreatePlane("groundGRoutBOG", 4010, scene);
	groundGRBIG.rotation.x = Math.PI / 2;
	groundGRBIG.material = new BABYLON.StandardMaterial("gMaterial", scene);
	groundGRBIG.material.diffuseTexture = new BABYLON.Texture("img_game/WATER1.jpg", scene);//S1 W2  STREET  ground1,ground2;street2:W2;
	//groundGRBIG.material.bumpTexture = new BABYLON.Texture("img_game/WATER1B.jpg", scene);
	groundGRBIG.material.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);//(1.0, 1.0, 1.0);
	//groundGRBIG.material.specularColor = new BABYLON.Color3(0, 0, 0);
	groundGRBIG.material.diffuseTexture.uScale = 100;
	groundGRBIG.material.diffuseTexture.vScale = 100;
	groundGRBIG.position = new BABYLON.Vector3(0,1.4,0);//(0,1,0);
	groundGRBIG.checkCollisions = true;




            var groundMaterialWATER = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialWATER.diffuseTexture = new BABYLON.Texture("img_game/WATER1.jpg", scene);//WATER1  snow ground4,snow.
			groundMaterialWATER.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER.diffuseTexture.uScale = 46;//36
            groundMaterialWATER.diffuseTexture.vScale = 50;//20
			
            var groundMaterialROCK = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK.diffuseTexture = new BABYLON.Texture("img_game/rock.jpg", scene);// ground1 snow ground4,snow.
			groundMaterialROCK.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK.diffuseTexture.uScale = 46;//36
            groundMaterialROCK.diffuseTexture.vScale = 50;//20			

            var groundMaterialGRASS = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialGRASS.diffuseTexture = new BABYLON.Texture("img_game/ground.jpg", scene);// snow ground4,snow.
			groundMaterialGRASS.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialGRASS.diffuseTexture.uScale = 46;//36
            groundMaterialGRASS.diffuseTexture.vScale = 50;//20
			
            var groundMaterialTINE = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialTINE.diffuseTexture = new BABYLON.Texture("img_game/ground1.jpg", scene);// snow ground4,snow.
			groundMaterialTINE.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialTINE.diffuseTexture.uScale = 46;//36
            groundMaterialTINE.diffuseTexture.vScale = 50;//20*/	
	


			
            var groundMaterialROCK = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK.diffuseTexture = new BABYLON.Texture("img_game/rock4.jpg", scene);// ground1 snow ground4,snow.
			groundMaterialROCK.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK.diffuseTexture.uScale = 86;//36
            groundMaterialROCK.diffuseTexture.vScale = 100;//20	
            var groundMaterialROCK2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK2.diffuseTexture = new BABYLON.Texture("img_game/rock.jpg", scene);// ground1 snow ground4,snow.
			groundMaterialROCK2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK2.diffuseTexture.uScale = 86;//36
            groundMaterialROCK2.diffuseTexture.vScale = 100;//20	
            var groundMaterialROCK3 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK3.diffuseTexture = new BABYLON.Texture("img_game/snow.jpg", scene);// ground1 snow ground4,snow.
			groundMaterialROCK3.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK3.diffuseTexture.uScale = 86;//36
            groundMaterialROCK3.diffuseTexture.vScale = 100;//20				

   
            var groundMaterialSNOW = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSNOW.diffuseTexture = new BABYLON.Texture("img_game/snow.jpg", scene);//ground1
			groundMaterialSNOW.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSNOW.diffuseTexture.uScale = 496;//36
            groundMaterialSNOW.diffuseTexture.vScale = 490;//20
			
         
            var groundMaterialFIRE1 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialFIRE1.diffuseTexture = new BABYLON.Texture("img_game/Z7.jpg", scene);//ground1
			groundMaterialFIRE1.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialFIRE1.diffuseTexture.uScale = 96;//36
            groundMaterialFIRE1.diffuseTexture.vScale = 90;//20
            var groundMaterialFIRE2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialFIRE2.diffuseTexture = new BABYLON.Texture("img_game/rock9.jpg", scene);//ground1
			groundMaterialFIRE2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialFIRE2.diffuseTexture.uScale = 96;//36
            groundMaterialFIRE2.diffuseTexture.vScale = 90;//20
            var groundMaterialFIRE3 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialFIRE3.diffuseTexture = new BABYLON.Texture("img_game/rock12.jpg", scene);//ground1
			groundMaterialFIRE3.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialFIRE3.diffuseTexture.uScale = 96;//36
            groundMaterialFIRE3.diffuseTexture.vScale = 90;//20
			
		

			
			var groundMaterialWATER = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialWATER.diffuseTexture = new BABYLON.Texture("img_game/WATER.jpg", scene);//water snow 
			groundMaterialWATER.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER.diffuseTexture.uScale = 146;//36   146
            groundMaterialWATER.diffuseTexture.vScale = 150;//20   150
			
			var groundMaterialWATER1 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialWATER1.diffuseTexture = new BABYLON.Texture("img_game/WATER1.jpg", scene);//water snow 
			groundMaterialWATER1.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER1.diffuseTexture.uScale = 146;//36   146
            groundMaterialWATER1.diffuseTexture.vScale = 150;//20   150
			
            var groundMaterialWATER2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialWATER2.diffuseTexture = new BABYLON.Texture("img_game/WATER3.jpg", scene);//WATER1  snow ground4,snow.
			groundMaterialWATER2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER2.diffuseTexture.uScale = 146;//36
            groundMaterialWATER2.diffuseTexture.vScale = 150;//20

		
		
	var FIREM = new BABYLON.StandardMaterial("texture1", scene);
     FIREM.diffuseTexture = new BABYLON.Texture("img_game/Z3.jpg", scene); //PIRATE
	 //FIREM.bumpTexture = new BABYLON.Texture("img_game/Z3.BUMP.jpg", scene);
	 FIREM.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 FIREM.diffuseTexture.uScale = 2;
	 //FIREM.diffuseTexture.vScale = 10;
	 
	 var FIREM2 = new BABYLON.StandardMaterial("texture1", scene);
     FIREM2.diffuseTexture = new BABYLON.Texture("img_game/Z4.jpg", scene); 
	 FIREM2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 FIREM2.diffuseTexture.uScale = 2;
	 
	 var FIREM3 = new BABYLON.StandardMaterial("texture1", scene);
     FIREM3.diffuseTexture = new BABYLON.Texture("img_game/Z5.jpg", scene); 
	 FIREM3.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 FIREM3.diffuseTexture.uScale = 2;
	 
	 var FIREM4 = new BABYLON.StandardMaterial("texture1", scene);
     FIREM4.diffuseTexture = new BABYLON.Texture("img_game/BA.jpg", scene); 
	 FIREM4.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 FIREM4.diffuseTexture.uScale = 2;
	 
	   
   
	   
	   
	
	      var groundMEGAF = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPVALEY4.jpg", 15000, 15000, 100, 0, 450.5, scene, false);
            groundMEGAF.material = groundMaterialFIRE1;
			groundMEGAF.position = new BABYLON.Vector3(7500,-14.5,7500);

	      var groundMEGAR = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPVALEY4.jpg", 15000, 15000, 100, 0, 450.5, scene, false);
            groundMEGAR.position = new BABYLON.Vector3(7500,-14.5,-7500);
			groundMEGAR.material = groundMaterialROCK;
			
	       var groundMEGA = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPVALEY1.jpg", 30000, 30000, 100, 0, 
		   21, scene, false);//51
			groundMEGA.position = new BABYLON.Vector3(0,-2,0);//0,-1.5,0);
			groundMEGA.visibility=1;
            groundMEGA.material = groundMaterialSNOW;	
			
		var groundMEGAWATER = BABYLON.Mesh.CreatePlane("groundGRASS",30000, scene, false);//1,MAPGARDEN
		      groundMEGAWATER.rotation.x = Math.PI / 2;
              groundMEGAWATER.position = new BABYLON.Vector3(0,-1.5,0);//-1(0,5.0,0);
			  groundMEGAWATER.material = groundMaterialWATER;
			  groundMEGAWATER.visibility=1;	

/*	var groundRIVER = BABYLON.Mesh.CreateGroundFromHeightMap("gr", "img_game/MAPVALEY5.jpg", 30000, 30000, 100, 0, 2.5, scene, false);
            groundRIVER.position = new BABYLON.Vector3(0,-10.1,0);
            groundRIVER.material = groundMaterialWATER; */  			  
			
	
			var sun = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(60, 100, 10), scene);
// Water
          BABYLON.Engine.ShadersRepository = ""; 
		 //BABYLON.Engine.ShadersRepository = "/Babylon/Shaders/";
		 // BABYLON.Engine.ShadersRepository = "";
         //var water = BABYLON.Mesh.CreateGround("water", 30000, 30000, 1, scene, false);
		 var water = BABYLON.Mesh.CreatePlane("water", 30000, scene, false);
		 water.rotation.x = Math.PI / 2;
		 //var water = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPRIVER2.jpg", 30000, 30000, 300, 2, 4.5, scene, false);
		 water.position = new BABYLON.Vector3(0,-1,0);
         var waterMaterial = new WaterMaterial("water", scene, sun);
         waterMaterial.refractionTexture.renderList.push(groundMEGAWATER);
		 //waterMaterial.refractionTexture.renderList.push(groundRIVER);
		 waterMaterial.refractionTexture.renderList.push(groundMEGAR);
		 waterMaterial.refractionTexture.renderList.push(groundMEGAF);
		 waterMaterial.refractionTexture.renderList.push(groundMEGA);
		 waterMaterial.reflectionTexture.renderList.push(groundMEGAWATER);
		 //waterMaterial.reflectionTexture.renderList.push(groundRIVER);
         water.material = waterMaterial;
         water.visibility=1;		 	

	
	
	
			var groundMaterialROCKAVE = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCKAVE.diffuseTexture = new BABYLON.Texture("img_game/BA.jpg", scene);//BA A00 rockF2 
			groundMaterialROCKAVE.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCKAVE.diffuseTexture.uScale = 6;//36   146
            groundMaterialROCKAVE.diffuseTexture.vScale = 226;//20   150
		    /*var groundMaterialROCKAVE2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCKAVE2.diffuseTexture = new BABYLON.Texture("img_game/rockF2.jpg", scene);
			groundMaterialROCKAVE2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCKAVE2.diffuseTexture.uScale = 6;//36   146
            groundMaterialROCKAVE2.diffuseTexture.vScale = 226;//226   150
		    var groundMaterialROCKAVE3 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCKAVE3.diffuseTexture = new BABYLON.Texture("img_game/A00.jpg", scene);
			groundMaterialROCKAVE3.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCKAVE3.diffuseTexture.uScale = 6;//36   146
            groundMaterialROCKAVE3.diffuseTexture.vScale = 226;//20   150*/
		    


	var KAVE = BABYLON.Mesh.CreateTorus("torus", 199, 75, 9, scene, false); // QUAWSSA ENTRANCE ROCK  STREET STAGE
		 KAVE.material = groundMaterialROCKAVE;
		 KAVE.scaling = new BABYLON.Vector3(1, 225, 1);
		 KAVE.rotation.x = Math.PI/2;//KAVE.rotation.y = Math.PI/2;
		 KAVE.position = new BABYLON.Vector3(550, -266, -750);  //((550, -266, -750); 
         KAVE.KAVETOUCH = "BOMB";
         KAVE.checkCollisions = true;
		 KAVE.visibility=0;
	var KAVES = BABYLON.Mesh.CreateBox("torus", 75, scene, false); 
		 KAVES.material = groundMaterialSNOW;
		 KAVES.scaling = new BABYLON.Vector3(0.3, 223, 1.9);
		 KAVES.rotation.x = Math.PI/2;
		 KAVES.position = new BABYLON.Vector3(610, -256, -750);
         KAVES.checkCollisions = true;KAVES.visibility=0;		 
	 var KAVES2 = KAVES.clone(KAVES);
	     KAVES2.position = new BABYLON.Vector3(490, -266, -750);
	var KAVES3 = BABYLON.Mesh.CreateBox("torus", 175, scene, false); 
		 KAVES3.material = FIREM3;
		 KAVES3.scaling = new BABYLON.Vector3(1, 1, 1);
		 KAVES3.position = new BABYLON.Vector3(550, -266, -8990);
         KAVES3.checkCollisions = true;
         KAVES3.visibility=0;			 

	   
	   
	var KAVEOUT = BABYLON.Mesh.CreateBox("torus", 175, scene, false); 
		 KAVEOUT.material = groundMaterialSNOW;
         KAVEOUT.checkCollisions = true;
         KAVEOUT.visibility=0;	;
	     KAVEOUT.position = new BABYLON.Vector3(550, -266, 6990);
	   
	   


		var PLANE = BABYLON.Mesh.CreateSphere("torus", 11, 1, scene, false);// BIG BODY
		 PLANE.visibility=0;
		 PLANE.position = new BABYLON.Vector3(0, 2.0, -1); //(83, 2.0, 540);
         PLANE.rotation.z = Math.PI/30;PLANE.rotation.y=Math.PI/1.15;	
		 //PLANE.position.y = groundUP.getHeightAtCoordinates(0, 0); // Getting height from ground object
		 PLANE.checkCollisions = true;
		 
		 
		 
		 var PLANEBOX = BABYLON.Mesh.CreateBox("torus", 16, scene, false);// BIG BODY
		 PLANEBOX.visibility=0;
		 PLANEBOX.scaling = new BABYLON.Vector3(1.1, 0.2, 0.6);
		 PLANEBOX.position = new BABYLON.Vector3(0, 2.0, 0);//(0, 2.0, 0);
         PLANE.rotation.z = Math.PI/30;PLANE.rotation.y=Math.PI/1.15;	
		 PLANEBOX.checkCollisions = true;
		 PLANEBOX.parent = PLANE;
		
	 
	 

	
	
	
			

  	var materialRAWW1 = new BABYLON.StandardMaterial("ARROW", scene);
    materialRAWW1.diffuseTexture = new BABYLON.Texture("img_game/ROU1.jpg", scene);//F2
	materialRAWW1.bumpTexture = new BABYLON.Texture("img_game/NORM1.jpg", scene);
   // materialRAWW1.diffuseTexture.hasAlpha = true;
    // materialRAWW1.emissiveColor = new BABYLON.Color3(0, 1, 1);
   // materialRAWW1.backFaceCulling = false; 	
    var RAWDL1 = BABYLON.Mesh.CreateTorus("torus", 4, 1.5, 30, scene, false);//("torus", 3, 1.1, 30, scene, false);
	     RAWDL1.rotation.x = Math.PI/2;
		 RAWDL1.material = materialRAWW1;//rawmat;
		 RAWDL1.position = new BABYLON.Vector3(-6.2, 1.1, -3.4);
         RAWDL1.scaling = new BABYLON.Vector3(0.65, 2.3, 0.65);//0.65, 1.8, 0.65  (0.5, 0.5, 0.5);		 
         RAWDL1.parent = PLANE; 
		 
	var RAWDL3 = RAWDL1.clone(RAWDL1);	
		 RAWDL3.position = new BABYLON.Vector3(-6.2, 1.1, 3.3); 
         RAWDL3.parent = PLANE;	
		 
	var RAWDL2 = RAWDL1.clone(RAWDL1);	
		 RAWDL2.position = new BABYLON.Vector3(3.9, 0.4, -2.9); 	 
         RAWDL2.parent = PLANE;			 
	var RAWDL4 = RAWDL1.clone(RAWDL1);	
		 RAWDL4.position = new BABYLON.Vector3(3.9, 0.4, 2.9);	
         RAWDL4.parent = PLANE;

		 
	var materialRAW = new BABYLON.StandardMaterial("ARROW", scene);
    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW0.png", scene);//
    materialRAW.diffuseTexture.hasAlpha = true;//materialRAW.emissiveColor = new BABYLON.Color3(0, 0, 0);
    materialRAW.backFaceCulling = false; 		 		  

	var RAWD1 = BABYLON.Mesh.CreatePlane("ARROW.UP", 9, scene);
		 RAWD1.material = materialRAW;
		 RAWD1.scaling = new BABYLON.Vector3(0.3, 0.3, 0.04);
		 RAWD1.position = new BABYLON.Vector3(3.9, 0.4, 4.5);	 
         RAWD1.parent = PLANE;			 
	var RAWD2 = RAWD1.clone(RAWD1);	
		 RAWD2.position = new BABYLON.Vector3(3.9, 0.4, -4.5);		 
         RAWD2.parent = PLANE;		 
	var RAWD3 = RAWD1.clone(RAWD1);	
		 RAWD3.position = new BABYLON.Vector3(-6.2, 1.1, 4.9);	 
         RAWD3.parent = PLANE;	
		 RAWD3.rotation.y = -Math.PI;	 
	var RAWD4 = RAWD1.clone(RAWD1);	
		 RAWD4.position = new BABYLON.Vector3(-6.2, 1.1, -5.0);	
         RAWD4.parent = PLANE;	
	 
	RAWD1.rotation.y = -Math.PI;
	
	
		


	//####################  LIGHT CAR #####################################
	//####################  LIGHT CAR #####################################
	//####################  LIGHT CAR #####################################
	var dawmatYF = new BABYLON.StandardMaterial("texture1", scene);//YELLOW
	dawmatYF.diffuseTexture = new BABYLON.Texture("img_game/LIYF.jpg", scene);
	
	var dawmat2N = new BABYLON.StandardMaterial("texture1", scene);//BLUE
	dawmat2N.diffuseTexture = new BABYLON.Texture("img_game/LIBF.jpg", scene);//LIBF  A17.png   LIBF.jpg
	var dawmat2F = new BABYLON.StandardMaterial("texture1", scene);//BLUE
	dawmat2F.diffuseTexture = new BABYLON.Texture("img_game/LIBN.jpg", scene);//LIBN
	
	var materialDAW = new BABYLON.StandardMaterial("ARROW", scene);
    materialDAW.diffuseTexture = new BABYLON.Texture("img_game/F3.jpg", scene);//F2
	var materialDAW2 = new BABYLON.StandardMaterial("ARROW", scene);
    materialDAW2.diffuseTexture = new BABYLON.Texture("img_game/A17.png", scene);//F2
	
	
			
	var dawmatR = new BABYLON.StandardMaterial("texture1", scene);//RED
	dawmatR.diffuseTexture = new BABYLON.Texture("img_game/LIR.jpg", scene);
	


	var DAW = BABYLON.Mesh.CreateBox("torus",0.4, scene, false);// TROFISR RIGHT CARCACA OUT BLACK
		 DAW.material = materialDAW;
		 DAW.position = new BABYLON.Vector3(2.53, 3.85, -4.28);
		 DAW.scaling = new BABYLON.Vector3(1.0, 1.1, 2.6);
         DAW.parent = PLANE;		 
	var DAW1 = BABYLON.Mesh.CreateBox("torus",0.4, scene, false);// TROFISR RIGHT CARCACA INSD WHITE
		 DAW1.material = materialDAW2;
		 DAW1.position = new BABYLON.Vector3(2.5, 3.85, -4.31);
		 DAW1.scaling = new BABYLON.Vector3(1.0, 1.0, 2.4);
         DAW1.parent = PLANE;

   	var DAWOSUP= DAW.clone(DAW);
	DAWOSUP.position = new BABYLON.Vector3(2.53, 3.65, -3.38);  // TROFISR SUPORT
	     DAWOSUP.rotation.x = Math.PI/8;
		 DAWOSUP.parent = PLANE;			 
	
	var DAWO= DAW.clone(DAW);
	DAWO.position = new BABYLON.Vector3(2.53, 3.85, 4.28);
		 DAWO.parent = PLANE;	

		 
	var DAW2 = DAW1.clone(DAW1);
	DAW2.position = new BABYLON.Vector3(2.5, 3.85, 4.31);
		 DAW2.parent = PLANE;
		 
	var DAWOSUP2 = DAWOSUP.clone(DAWOSUP);
	DAWOSUP2.position = new BABYLON.Vector3(2.5, 3.65, 3.38);
	     DAWOSUP2.rotation.x = -Math.PI/8;
		 DAWOSUP2.parent = PLANE;
		 
		 
	var DAWL1 = BABYLON.Mesh.CreateBox("torus",0.3, scene, false);
		 DAWL1.material = dawmatYF;// TROFISR YELLOW;
		 DAWL1.position = new BABYLON.Vector3(2.5, 3.99, -4.3);
		 DAWL1.scaling = new BABYLON.Vector3(0.5, 1.0, 3.3);
         DAWL1.parent = PLANE;
	var DAWR1= DAWL1.clone(DAWL1);
	DAWR1.position = new BABYLON.Vector3(2.5, 3.99, 4.3);
		 DAWR1.parent = PLANE;
		 
	var DAWL1N = BABYLON.Mesh.CreateBox("torus",0.3, scene, false);
		 DAWL1N.material = dawmatR;// TROFISR YELLOW ON RED;
		 DAWL1N.position = new BABYLON.Vector3(2.5, 3.99, -4.3);
		 DAWL1N.scaling = new BABYLON.Vector3(0.5, 1.0, 3.3);
         DAWL1N.parent = PLANE;
		 
		var DAWR1N= DAWL1N.clone(DAWL1N);
	    DAWR1N.position = new BABYLON.Vector3(2.5, 3.99, 4.3);
		 DAWR1N.parent = PLANE;
		 
		 DAWL1N.visibility = DAWR1N.visibility = 1;  	
	




 		 var DAILDORSF = BABYLON.Mesh.CreateCylinder("BAREL", 1.3, 0.1, 0.1, 20, scene);// BIG BACK BLUE LIGHT CLIGN OF
	     DAILDORSF.scaling = new BABYLON.Vector3(1.0, 1.0, 1.0);
		 DAILDORSF.material = dawmat2N;
		 DAILDORSF.rotation.x = Math.PI/2;
		 DAILDORSF.rotation.z = -Math.PI/88;
		 DAILDORSF.position = new BABYLON.Vector3(-3.95, 5.36, -0.1);//(-0.73, 2.8, -0.1);
         DAILDORSF.parent = PLANE;
		 
		 var DAILDORSN = BABYLON.Mesh.CreateCylinder("BAREL", 1.3, 0.1, 0.1, 20, scene);// BIG BACK BLUE LIGHT CLIGN ON
	     DAILDORSN.scaling = new BABYLON.Vector3(1.0, 1.0, 1.0);
		 DAILDORSN.material = dawmat2F;
		 DAILDORSN.rotation.x = Math.PI/2;
		 DAILDORSN.rotation.z = -Math.PI/88;
		 DAILDORSN.position = new BABYLON.Vector3(-3.95, 5.36, -0.1);//(-0.73, 2.8, -0.1);
         DAILDORSN.parent = PLANE;
		
	

	
	
	
		 
	var DAILDORS = BABYLON.Mesh.CreateSphere("BAREL", 10, 0.7, scene);// CLIGN BACK 1
         DAILDORS.scaling = new BABYLON.Vector3(0.3, 0.5, 0.2);// CLIGN BACK 1
         DAILDORS.position = new BABYLON.Vector3(-8.5, 3.25, -3.39);
         DAILDORS.parent = PLANE;
		 DAILDORS.material = dawmatR;		 
	var DAILDOR2S = BABYLON.Mesh.CreateSphere("BAREL", 10, 0.7, scene);// CLIGN BACK 2 
         DAILDOR2S.scaling = new BABYLON.Vector3(0.3, 0.5, 0.2);// CLIGN BACK 2
         DAILDOR2S.position = new BABYLON.Vector3(-8.5, 3.28, 3.34);		
         DAILDOR2S.parent = PLANE;
		 DAILDOR2S.material = dawmatR;
		 DAILDORS.visibility=DAILDOR2S.visibility=1;		 
		 
	var DAILDORSFF = BABYLON.Mesh.CreateSphere("BAREL", 10, 0.7, scene);// CLIGN BACK 1
	     DAILDORSFF.scaling = new BABYLON.Vector3(0.3, 0.5, 0.2);
		 DAILDORSFF.material = dawmatYF;
		 DAILDORSFF.position = new BABYLON.Vector3(-8.5, 3.25, -3.35);
         DAILDORSFF.parent = PLANE;			 
	var DAILDOR2SFF = BABYLON.Mesh.CreateSphere("BAREL", 10, 0.7, scene);// CLIGN BACK 2 
	     DAILDOR2SFF.scaling = new BABYLON.Vector3(0.3, 0.5, 0.2);
		 DAILDOR2SFF.material = dawmatYF;
		 DAILDOR2SFF.position = new BABYLON.Vector3(-8.5, 3.28, 3.30);	
         DAILDOR2SFF.parent = PLANE;
		 DAILDORSFF.visibility=DAILDOR2SFF.visibility=1;	
		
/* 
		var BCB1 = new BABYLON.StandardMaterial("BAREl", scene);
	   //BCB1.emissiveColor = new BABYLON.Color3(0.0, 0.0, 1.0);
	    BCB1.diffuseTexture =  new BABYLON.Texture("img_game/A15.jpg", scene);
	    BCB1.diffuseTexture.uScale = 0.6;//36   146
        BCB1.diffuseTexture.vScale = 0.6;
	
	var BCB11 = new BABYLON.StandardMaterial("BAREl", scene);
	//BCB1.emissiveColor = new BABYLON.Color3(0.0, 0.0, 1.0);
	BCB11.diffuseTexture =  new BABYLON.Texture("img_game/F3.jpg", scene);
	
		var PROJECT1C = BABYLON.Mesh.CreateSphere("BAREL", 10, 1, scene);// PROJECT1 blachk COVER
         PROJECT1C.scaling = new BABYLON.Vector3(0.6, 0.9, 0.9);
         PROJECT1C.position = new BABYLON.Vector3(-1.3, 6.45, 1.0);
         PROJECT1C.parent = PLANE;
		 PROJECT1C.material = BCB1;//dawmat2N;////dawmatYF dawmat2N dawmat2F materialDAW materialDAW2  BCB11;
		 
		var PROJECT2C = PROJECT1C.clone(PROJECT1C);
         PROJECT2C.position = new BABYLON.Vector3(-1.3, 6.45, 0.0);
         PROJECT2C.parent = PLANE;
		 
		var PROJECT3C = PROJECT1C.clone(PROJECT1C);
         PROJECT3C.position = new BABYLON.Vector3(-1.3, 6.45, -1.0);
         PROJECT3C.parent = PLANE;
		 
		 
		var PROJECT1 = BABYLON.Mesh.CreateSphere("BAREL", 10, 1, scene);// CLIGN BACK 1
         PROJECT1.scaling = new BABYLON.Vector3(0.4, 0.6, 0.6);// CLIGN BACK 1
         PROJECT1.position = new BABYLON.Vector3(-1.1, 6.45, 1.0);
         PROJECT1.parent = PLANE;
		 PROJECT1.material = dawmatYF;//dawmatR;
		var PROJECT2 = PROJECT1.clone(PROJECT1);
         PROJECT2.position = new BABYLON.Vector3(-1.1, 6.45, 0);
         PROJECT2.parent = PLANE;
		var PROJECT3 = PROJECT1.clone(PROJECT1);
         PROJECT3.position = new BABYLON.Vector3(-1.1, 6.45, -1);
         PROJECT3.parent = PLANE;		 
		 
		 
		
		 var WIND1 = BABYLON.Mesh.CreateSphere("torus", 5, 5, scene, false);// BIG BODY 
	     WIND1.scaling = new BABYLON.Vector3(0.9, 0.2, 4.5);  //   (2.7, 0.6, 0.7) (0.2, 0.4, 4.5);  
		 WIND1.material = materialDAW2;//BCB1;//MATPORTMONSTER;
		 WIND1.position = new BABYLON.Vector3(0, 2, 0);
         WIND1.rotation.z = Math.PI/30;
		 WIND1.parent = PLANE;*/ 
	 
		//dawmatYF dawmat2N dawmat2F materialDAW materialDAW2 
	//####################  LIGHT CAR #####################################
    //####################  LIGHT CAR #####################################
    //####################  LIGHT CAR #####################################			
	
 
/*	for (var i = 0; i < 100; i++) {		
		var BOXexplose11 = new BABYLON.SpriteManager("fireanim2", "img_game/EXPLOSION.gif", 100, 100, scene);
		//var PORTtrees = PORTtreesORG.clone(PORTtreesORG);
		xxx1 = random(-12900, 12900);zzz1 = random(-12900, 12900);	
    var FIRED = new BABYLON.Sprite("fireee2", BOXexplose11);
	  FIRED.playAnimation(0, 15, true, 100);
	  FIRED.size = 224;
	  FIRED.position = new BABYLON.Vector3(xxx1, 153, zzz1);}*/




	
	

		 var PORTtreesORG = BABYLON.Mesh.CreateCylinder("BAREL", 50, 35, 33, 4, scene);PORTtreesORG.visibility=0;
		 var spriteManagerTreess = new BABYLON.SpriteManager("treesManager", "img_game/AR3.png", 300, 359, scene);//PALM
		 var spriteManagerTreess2 = new BABYLON.SpriteManager("treesManager", "img_game/AR1.png", 300, 360, scene);//ORNG
		 var spriteManagerTreess3 = new BABYLON.SpriteManager("treesManager", "img_game/AR4.png", 300, 195, scene);//GREEN
		  var xxx1 =0;var zzz1=0; 
	for (var i = 0; i < 300; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess2);trees.size = 60;
		var PORTtrees = PORTtreesORG.clone(PORTtreesORG);
		xxx1 = random(-12900, 12900);zzz1 = random(-12900, 12900);
		if((xxx1<=500)&&(xxx1>=-500)&&(zzz1<=500)&&(zzz1>=-500)){xxx1=xxx1+500;zzz1=zzz1+500;}
		trees.position = new BABYLON.Vector3(xxx1,24,zzz1);
		PORTtrees.position = new BABYLON.Vector3(xxx1,26,zzz1);
		PORTtrees.TREE = "treeTOUCH";}			
	for (var i = 0; i < 300; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess3);trees.size = 60;
		var PORTtrees = PORTtreesORG.clone(PORTtreesORG);
		xxx1 = random(-12900, 12900);zzz1 = random(-12900, 12900);
		if((xxx1<=500)&&(xxx1>=-500)&&(zzz1<=500)&&(zzz1>=-500)){xxx1=xxx1+500;zzz1=zzz1+500;}
		trees.position = new BABYLON.Vector3(xxx1,2025,zzz1);
		PORTtrees.position = new BABYLON.Vector3(xxx1,2024,zzz1);
		PORTtrees.TREE = "treeTOUCH";}			
	for (var i = 0; i < 300; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess);trees.size = 60;
		var PORTtrees = PORTtreesORG.clone(PORTtreesORG);
		xxx1 = random(-12900, 12900);zzz1 = random(-12900, 12900);
		if((xxx1<=500)&&(xxx1>=-500)&&(zzz1<=500)&&(zzz1>=-500)){xxx1=xxx1+500;zzz1=zzz1+500;}
		trees.position = new BABYLON.Vector3(xxx1,-1975,zzz1);
		PORTtrees.position = new BABYLON.Vector3(xxx1,-1974,zzz1);
		PORTtrees.TREE = "treeTOUCH";}	
	  
	 /* var positions_array = groundUP.getVerticesData(BABYLON.VertexBuffer.PositionKind);
      var pos_in_array = 800;
      var yyy1 = positions_array[pos_in_array*3 + 1];*/
		//var yyy1 = groundUP.getHeightAtCoordinates(xxx1, zzz1);
		//if(yyy1>=20){trees.position = new BABYLON.Vector3(xxx1,55,zzz1);}
		//window.alert(yyy1);
			
		
	/*
    var spriteManagerKeys = new BABYLON.SpriteManager("treesManager", "img_game/KEY.png", 1, 60, scene);
	var KEY1 = new BABYLON.Sprite("trees", spriteManagerKeys);KEY1.size = 60;


		  //var xxxx1 =0;var zzzz1=0; 
		  var yyyy1 = 5; 

		 var xxxx1 = random(0, -500);var zzzz1 = random(-400, -1700);
		 groundMEGA.refreshBoundingInfo(); 
        yyyy1 = groundMEGA.getHeightAtCoordinates(xxxx1, zzzz1);	
	     //KEY1.position = new BABYLON.Vector3(xxxx1,yyyy1,zzzz1);
         KEY1.position = new BABYLON.Vector3(0,24,200);
		 */
		 
		 
/*var mesh = CreateGroundFromHeightMap(...);
var positions_array = groundMEGA.getVerticesData(BABYLON.VertexBuffer.PositionKind);
var pos_in_array = xxxx1 + (xxxx1*zzzz1) * zzzz1;
var height = positions_array[pos_in_array*3 + 1]; 



     TEST1.innerHTML=xxxx1;
	 TEST2.innerHTML=zzzz1;
	 TEST3.innerHTML=yyyy1;*/ 
	 
		  
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################




		/*var BOR = BABYLON.Mesh.CreateCylinder("BAREL", 120, 10, 15, 26, scene);
		BOR.position = new BABYLON.Vector3(-200, 55, -30);//0, 10, 300);
		BOR.material = FIREM;
		BOR.rotation.y=-Math.PI;
		
		
		var BOR2 = BOR.clone(BOR);
		BOR2.position = new BABYLON.Vector3(-200, 55, 70);
		
		
	var materiaSTART1 = new BABYLON.StandardMaterial("ARROW", scene);
    materiaSTART1.diffuseTexture = new BABYLON.Texture("img_game/STARTT.jpg", scene);//START3
    materiaSTART1.diffuseTexture.hasAlpha = true;//materiaSTART.emissiveColor = new BABYLON.Color3(0, 0, 0);
    materiaSTART1.backFaceCulling = false; 	
			
		var PLAQ1 = BABYLON.Mesh.CreatePlane("ARROW.UP", 20, scene);
		 PLAQ1.material = materiaSTART1;
		 PLAQ1.scaling = new BABYLON.Vector3(8,1.5,0.1);
		 PLAQ1.position = new BABYLON.Vector3(-193,67,20);//(-2,33,427);	
         PLAQ1.rotation.y=-Math.PI/2.00; */	
		
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################
//######################################### START ENTRANCE #########################################	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var spriteManagerBOMB = new BABYLON.SpriteManager("BOMBS", "img_game/EXPLOSION.gif", 1, 100, scene);
	var BOMB = new BABYLON.Sprite("fireee2", spriteManagerBOMB);BOMB.size=0;
	
	
		scene.fogMode = BABYLON.Scene.FOGMODE_EXP;//;BABYLON.Scene.FOGMODE_EXP;BABYLON.Scene.FOGMODE_EXP2;BABYLON.Scene.FOGMODE_LINEAR
	    scene.fogDensity = 0;//0.001;
	    scene.fogColor = new BABYLON.Color3(0,0, 0);
	

	
	
		var RAWSS1 = BABYLON.Mesh.CreateTorus("torus", 80, 25, 9, scene, false);RAWSS1.material = FIREM3;
		             RAWSS1.rotation.x = Math.PI/2;RAWSS1.rotation.y = Math.PI/2;RAWSS1.position = new BABYLON.Vector3(-200, 8, -25); 
		var RAWSS2 = RAWSS1.clone(RAWSS1);RAWSS2.material = FIREM2;RAWSS2.position = new BABYLON.Vector3(-200, 8, -120);
		var RAWSS3 = RAWSS1.clone(RAWSS1);RAWSS3.material = FIREM;RAWSS3.position = new BABYLON.Vector3(-200, 8, 165);
		var RAWSS4 = RAWSS1.clone(RAWSS1);RAWSS4.material = FIREM4;RAWSS4.position = new BABYLON.Vector3(-200, 8, 70);
		
	var RAWSG = BABYLON.Mesh.CreateBox("torus", 50, scene);RAWSG.visibility = 0;RAWSG.checkCollisions = true;
	                                                           RAWSG.position = new BABYLON.Vector3(-195, 12, -120);		 	 	
	var RAWST = RAWSG.clone(RAWSG);RAWST.checkCollisions = true;RAWST.position = new BABYLON.Vector3(-195, 12, -25);	
	var RAWSWKAVE = RAWSG.clone(RAWSG);RAWSWKAVE.checkCollisions = true;RAWSWKAVE.position = new BABYLON.Vector3(-195, 12, 70);
	var RAWSW = RAWSG.clone(RAWSG);RAWSW.checkCollisions = true;RAWSW.position = new BABYLON.Vector3(-195, 12, 165);
	
	var spriteManagerKEY1 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/DIAMOND1.png", 2, 200, scene);
	var spriteManagerKEY2 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/DIAMOND2.png", 2, 200, scene);
	var spriteManagerKEY3 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/DIAMOND3.png", 2, 200, scene);
	var spriteManagerKEY4 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/DIAMOND4.png", 2, 200, scene);

	var KEY1 = new BABYLON.Sprite("BOMB", spriteManagerKEY1);KEY1.size = 0; 
	var KEY2 = new BABYLON.Sprite("BOMB", spriteManagerKEY2);KEY2.size = 0; 
	var KEY3 = new BABYLON.Sprite("BOMB", spriteManagerKEY3);KEY3.size = 0; 
	var KEY4 = new BABYLON.Sprite("BOMB", spriteManagerKEY4);KEY4.size = 0; 
	
	var PORTKEY1 = new BABYLON.Sprite("BOMB", spriteManagerKEY1);PORTKEY1.size = 10; 
	var PORTKEY2 = new BABYLON.Sprite("BOMB", spriteManagerKEY2);PORTKEY2.size = 10; 
	var PORTKEY3 = new BABYLON.Sprite("BOMB", spriteManagerKEY3);PORTKEY3.size = 10; 
	var PORTKEY4 = new BABYLON.Sprite("BOMB", spriteManagerKEY4);PORTKEY4.size = 10; 
	

	PORTKEY1.position = new BABYLON.Vector3(-195, 12, -120);	
	PORTKEY2.position = new BABYLON.Vector3(-195, 12, -25);
	PORTKEY3.position = new BABYLON.Vector3(-195, 12, 70);	
	PORTKEY4.position = new BABYLON.Vector3(-195, 12, 165);

    KEY3.position=new BABYLON.Vector3(550, -266, 6950);

	var materialSUPER = new BABYLON.StandardMaterial("te2", scene);//materialSUPER.diffuseTexture = new BABYLON.Texture("images/w1.jpg", scene);
	materialSUPER.diffuseColor = new BABYLON.Color3(0, 0, 1); 
    materialSUPER.alpha = 0.5;
	var BIGKEY = BABYLON.Mesh.CreateBox("MONSTERfire1", 150, scene);BIGKEY.visibility=1;BIGKEY.material = materialSUPER;
	    BIGKEY.scaling = new BABYLON.Vector3(1, 3, 1);
	    BIGKEY.position = new BABYLON.Vector3(14000, 7, 14000);

		/*
			var spriteManagerENERG = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/ENERG.png", 4, 60, scene);
		 
	var LOADENERG  = new BABYLON.Sprite("BOMB", spriteManagerENERG);LOADENERG.size = 30; 
	LOADENERG.position = new BABYLON.Vector3(-195, 12, -25);
	var LOADENERG2 = new BABYLON.Sprite("BOMB", spriteManagerENERG);LOADENERG2.size = 30; 
	LOADENERG2.position = new BABYLON.Vector3(-195, 12, -120);	
	var LOADENERG3 = new BABYLON.Sprite("BOMB", spriteManagerENERG);LOADENERG3.size = 30; 
	LOADENERG3.position = new BABYLON.Vector3(-195, 12, 70);	
	var LOADENERG4 = new BABYLON.Sprite("BOMB", spriteManagerENERG);LOADENERG4.size = 30; 
	LOADENERG4.position = new BABYLON.Vector3(-195, 12, 165);
		*/
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3		

		 
var MONST = BABYLON.Mesh.CreateSphere("torus", 1,0.001, scene);
MONST.position = new BABYLON.Vector3(83, 0.5, 535);MONST.rotation.y=1.14159;	//CAR1tax BACHI2  BUGATI SNOWCAR  TAKAIA1  ATTAKER	 

/*var MONSTER00 = BABYLON.SceneLoader.ImportMesh("","./", "BACHI2.babylon", scene, function (newMeshes,partycleSystems) {
	MONSTER00=newMeshes[0];
	MONSTER00.position = new BABYLON.Vector3(0.0, 2.75, 0);
	MONSTER00.rotation.y=-1.58;
	MONSTER00.rotate(BABYLON.Axis.X, -0.151, BABYLON.Space.LOCAL);
	MONSTER00.rotate(BABYLON.Axis.Z, 0.051, BABYLON.Space.LOCAL);
	MONSTER00.checkCollisions = true;
	MONSTER00.parent = PLANE;});*/
	
	
/*var MONSTERTEST = BABYLON.SceneLoader.ImportMesh("","./", "BACHI2.babylon", scene, function (newMeshes,partycleSystems) {
	MONSTERTEST=newMeshes[0];
	MONSTERTEST.position = new BABYLON.Vector3(0.0, 12.75, 0);
	MONSTERTEST.rotation.y=-1.58;
	MONSTERTEST.rotate(BABYLON.Axis.X, -0.151, BABYLON.Space.LOCAL);
	MONSTERTEST.rotate(BABYLON.Axis.Z, 0.051, BABYLON.Space.LOCAL);
	MONSTERTEST.checkCollisions = true;
	//MONSTERTEST.parent = PLANE;
	
		for (var i = 0; i < 59; i++) {	
		     var MONSTERTEST2=MONSTERTEST.clone(MONSTERTEST);
			 XX1 = random(-600, 600);
             ZZ1 = random(-700, 700); 
			 YY1 = groundMEGA.getHeightAtCoordinates(XX1, ZZ1);
			 MONSTERTEST2.position = new BABYLON.Vector3(XX1,YY1, ZZ1);}
			 
			var range = 60;
            var count = 100;
            for (var index = 0; index < count; index++) {
                var newInstance = newMeshes[0].createInstance("i" + index);
                //var x = range / 2 - Math.random() * range;var z = range / 2 - Math.random() * range;
			 var XX1 = random(-1600, 1600);
              var ZZ1 = random(-1700, 1700); 
			 
                var y = groundMEGA.getHeightAtCoordinates(XX1, ZZ1); // Getting height from ground object
                newInstance.position = new BABYLON.Vector3(XX1, y+2, ZZ1);
                //newInstance.rotate(BABYLON.Axis.Y, Math.random() * Math.PI * 2, BABYLON.Space.WORLD);
                //var scale = 0.5 + Math.random() * 2;
                //newInstance.scaling.addInPlace(new BABYLON.Vector3(scale, scale, scale));    
            }		 
	});*/
	
	


		 var MONSTER000 = BABYLON.SceneLoader.ImportMesh("","./", "BACHI2.babylon", scene, function (newMeshes,partycleSystems) {
	MONSTER000=newMeshes[0];
	MONSTER000.position = new BABYLON.Vector3(0.0, 2.75, 0);
	MONSTER000.rotation.y=-1.58;
	MONSTER000.rotate(BABYLON.Axis.X, -0.151, BABYLON.Space.LOCAL);
	MONSTER000.rotate(BABYLON.Axis.Z, 0.051, BABYLON.Space.LOCAL);
	MONSTER000.checkCollisions = true;
	MONSTER000.visibility = 1;
	MONSTER000.parent = PLANE;});
	
	
	
		canvas.addEventListener("mousedown", function (e) {
	         if(SPEEDC>=10){planeUPER=1;}
	              }); 

  		canvas.addEventListener("dblclick", function (e) {//click dblclick onclick ondblclick   mouseover  mouseout  mousemove
	         if(mT1==0){planeSUPER=1;}
	              }); 				  
	 
	 /*
	 	var PP2 = PLANE.clone(PLANE);
	PP2.position = new BABYLON.Vector3(100.5, 3.85, 400.31);
		 //PP2.parent = PLANE;
		 
		 
	 	 	        	// Shadows
        	var shadowGenerator = new BABYLON.ShadowGenerator(1024, light1);//LIGHTmov
        	shadowGenerator.getShadowMap().renderList.push(RAWDL2);//PLANEBOX2
        	shadowGenerator.useVarianceShadowMap = true;
			groundGRBIG.receiveShadows = true;
			
        	var shadowGenerator2 = new BABYLON.ShadowGenerator(1024, light1);//LIGHTmov
        	shadowGenerator2.getShadowMap().renderList.push(PLANEBOX2);//PLANEBOX2
        	shadowGenerator2.useVarianceShadowMap = true;
			groundGRBIG.receiveShadows = true;
			
			//shadowGenerator2.useVarianceShadowMap = true;
			//shadowGenerator2.usePoissonSampling = true;
*/
		

			   
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
//############################################# BUILDING ###############################################################################
	   

	var materialBUILDD1 = new BABYLON.StandardMaterial("ARROW", scene); // white house
    materialBUILDD1.diffuseTexture = new BABYLON.Texture("img_game/buildingM1.jpg", scene);//AAA1   building2	

	var materialBUILDD2 = new BABYLON.StandardMaterial("ARROW", scene); //brown house
    materialBUILDD2.diffuseTexture = new BABYLON.Texture("img_game/building04.jpg", scene);//AAA2   building4	
	
	
	var BUILDD1 = BABYLON.Mesh.CreateBox("ARROW.UP", 200, scene);
	BUILDD1.scaling = new BABYLON.Vector3(1.0, 1.0, 1.0);
	BUILDD1.position = new BABYLON.Vector3(3300.0, 100.0, 1000.0);
	BUILDD1.visibility = 0;
	BUILDD1.checkCollisions = true;
	BUILDD1.BUILDINGTOUCH = "BUILDINGTOUCH";
		 
 	var BUILD01 = BABYLON.Mesh.CreatePlane("ARROW.UP", 100, scene);
		 BUILD01.material = materialBUILDD1;//rawmat;
		 BUILD01.scaling = new BABYLON.Vector3(2.0, 2.0, 0.04);
		 BUILD01.position = new BABYLON.Vector3(0.0, 0.0, 100);
		 BUILD01.rotation.y = -Math.PI;
		 BUILD01.checkCollisions = true; 
		 BUILD01.parent = BUILDD1;			 
	var BUILD02 = BUILD01.clone(BUILD01);	
		 BUILD02.position = new BABYLON.Vector3(100, 0.0, 0.0);
         BUILD02.rotation.y = -Math.PI/2;		 
         BUILD02.parent = BUILDD1;	
	var BUILD03 = BUILD01.clone(BUILD01);	
		 BUILD03.position = new BABYLON.Vector3(-100, 0.0, 0.0);
         BUILD03.rotation.y = Math.PI/2;		 
         BUILD03.parent = BUILDD1;		
	var BUILD04 = BUILD01.clone(BUILD01);	
		 BUILD04.position = new BABYLON.Vector3(0.0, 0.0, -100);
         BUILD04.rotation.y = 2*Math.PI;		 
         BUILD04.parent = BUILDD1;

	for (var i = 0; i < 100; i++) {	
        xxx1 = random(-12900, 12900);zzz1 = random(-12900, 12900);	
		if((xxx1<=500)&&(xxx1>=-1000)&&(zzz1<=1000)&&(zzz1>=-1000)){xxx1=xxx1+1100;zzz1=zzz1+1100;}
		var BUILDD001 = BUILDD1.clone(BUILDD1);
		BUILDD001.position = new BABYLON.Vector3(xxx1,100,zzz1);
		BUILDD001.BUILDINGTOUCH = "BUILDINGTOUCH";}




	var BUILDD2 = BABYLON.Mesh.CreateBox("ARROW.UP", 200, scene);
	BUILDD2.position = new BABYLON.Vector3(-4600.0, 50.0, 170.0);
	BUILDD2.visibility = 0;
	BUILDD2.checkCollisions = true;
	BUILDD2.BUILDINGTOUCH = "BUILDINGTOUCH";
		 
 	var BUILDDA01 = BABYLON.Mesh.CreatePlane("ARROW.UP", 100, scene);
		 BUILDDA01.material = materialBUILDD2;
		 BUILDDA01.scaling = new BABYLON.Vector3(2.0, 1.0, 0.04);
		 BUILDDA01.position = new BABYLON.Vector3(0.0, 0.0, 100.0);
		 BUILDDA01.rotation.y = -Math.PI;
		 BUILDDA01.checkCollisions = true;
		 BUILDDA01.parent = BUILDD2;			 
	var BUILDDA02 = BUILDDA01.clone(BUILDDA01);	
		 BUILDDA02.position = new BABYLON.Vector3(100.0, 0.0, 0.0);
         BUILDDA02.rotation.y = -Math.PI/2;		 
         BUILDDA02.parent = BUILDD2;	
	var BUILDDA03 = BUILDDA01.clone(BUILDDA01);	
		 BUILDDA03.position = new BABYLON.Vector3(-100.0, 0.0, 0.0);
         BUILDDA03.rotation.y = Math.PI/2;		 
         BUILDDA03.parent = BUILDD2;		
	var BUILDDA04 = BUILDDA01.clone(BUILDDA01);	
		 BUILDDA04.position = new BABYLON.Vector3(0.0, 0.0, -100.0);
         BUILDDA04.rotation.y = 2*Math.PI;		 
         BUILDDA04.parent = BUILDD2;		

	for (var i = 0; i < 100; i++) {	
        xxx1 = random(-12900, 12900);zzz1 = random(-12900, 12900);	
		if((xxx1<=500)&&(xxx1>=-1000)&&(zzz1<=1000)&&(zzz1>=-1000)){xxx1=xxx1+1100;zzz1=zzz1+1100;}
		var BUILDD002 = BUILDD2.clone(BUILDD2);
		BUILDD002.position = new BABYLON.Vector3(xxx1,50,zzz1);
		BUILDD002.BUILDINGTOUCH = "BUILDINGTOUCH";}		 

/*var materialBUILDD1 = new BABYLON.StandardMaterial("ARROW", scene);
    materialBUILDD1.diffuseTexture = new BABYLON.Texture("img_game/buildingM1.jpg", scene);//buildingM1:04 AAA1   building2	

	var BUILDD = BABYLON.Mesh.CreateBox("ARROW.UP", 200, scene);
	BUILDD.scaling = new BABYLON.Vector3(1.0, 1.0, 1.0);
	BUILDD.position = new BABYLON.Vector3(3300.0, 100.0, 1000.0);
	BUILDD.visibility = 0;
	BUILDD.checkCollisions = true;
	BUILDD.BUILDINGTOUCH = "BUILDINGTOUCH";
		 
 	var BUILD01 = BABYLON.Mesh.CreatePlane("ARROW.UP", 100, scene);
		 BUILD01.material = materialBUILDD1;//rawmat;
		 BUILD01.scaling = new BABYLON.Vector3(2.0, 2.0, 0.04);
		 BUILD01.position = new BABYLON.Vector3(0.0, 0.0, 100);
		 BUILD01.rotation.y = -Math.PI;
		 BUILD01.checkCollisions = true; 
		 BUILD01.parent = BUILDD;			 
	var BUILD02 = BUILD01.clone(BUILD01);	
		 BUILD02.position = new BABYLON.Vector3(100, 0.0, 0.0);
         BUILD02.rotation.y = -Math.PI/2;		 
         BUILD02.parent = BUILDD;	
	var BUILD03 = BUILD01.clone(BUILD01);	
		 BUILD03.position = new BABYLON.Vector3(-100, 0.0, 0.0);
         BUILD03.rotation.y = Math.PI/2;		 
         BUILD03.parent = BUILDD;		
	var BUILD04 = BUILD01.clone(BUILD01);	
		 BUILD04.position = new BABYLON.Vector3(0.0, 0.0, -100);
         BUILD04.rotation.y = 2*Math.PI;		 
         BUILD04.parent = BUILDD;

	for (var i = 1; i < 21; i++) {		
		var BUILDD001 = BUILDD.clone(BUILDD);
		
		if(i<=5){BUILDD001.position = new BABYLON.Vector3(500*(i)-6000,2100,1000);}
		if((i>5)&&(i<=10)){BUILDD001.position = new BABYLON.Vector3(500*(i)-8500,2100,0);}
		if((i>10)&&(i<=15)){BUILDD001.position = new BABYLON.Vector3(500*(i)-12000,2100,-1000);}
		if(i>15){BUILDD001.position = new BABYLON.Vector3(500*(i)-14500,2000,-2100);}
		
		BUILDD001.BUILDINGTOUCH = "BUILDINGTOUCH";}*/
		
		
		
		
		
		
		scene.registerBeforeRender(function () {
		//if (      ( (PLANE.intersectsMesh(TAL1, false))   ) &&  (planeDOWN<=0)   )  {planeUPER++;} 
		 if  ((PLANEBOX.intersectsMesh(RAWSG, false))&&(PLANE.position.x<0)&&(LEVELS1==0)) {BON++;} 
		 if  ((PLANEBOX.intersectsMesh(RAWST, false))&&(PLANE.position.x<0)&&(LEVELS2==0)) {BONT++;} 
		 if  ((PLANEBOX.intersectsMesh(RAWSWKAVE, false))&&(PLANE.position.x<0)&&(LEVELS3==0)) {BONKAVE++;}
		 if  ((PLANEBOX.intersectsMesh(RAWSW, false))&&(PLANE.position.x<0)&&(LEVELS4==0)) {BONW++;}
         		 
		 
		 


		if ((PLANE.intersectsMesh(KAVEOUT, false))&&  (CAMX.innerHTML!=21)  ){BONKAVEOUT++;}			   
	
         if(   ((PLANE.intersectsMesh(KAVES, false)) || (PLANE.intersectsMesh(KAVES2, false)) || (PLANE.intersectsMesh(KAVES3, false)))&&(PLANE.position.y<200)&&(BONKAVEOUT<=0)&&(BONKAVE>=1)&&(CAMX.innerHTML!=21)  )
		        {treesTOUCH2=2;STOPKAVE++;buildingsTOUCH++;STOPbuilding++;SS2=0;SPEEDC=-1;if(buildingsTOUCH==1){CARACCE.volume=0.0;/*CARCRASH.play();*/}}		 
		    else{if((PLANE.position.y<200)&&(BONKAVE>=1)){STOPKAVE=0;STOPbuilding=0;STOPbuilding2=0;buildingsTOUCH=0;}}
			
			
         if  ( (PLANE.intersectsMesh(KAVES, false))&& (CAMX.innerHTML!=21) ){camera.position.x+=-1.5;DROT=3;camera.rotation.y=-0.01;}
         if  ( (PLANE.intersectsMesh(KAVES2, false))&& (CAMX.innerHTML!=21) ){camera.position.x+=1.5;DROT=2;camera.rotation.y=0.01;}		 
         if  ( (PLANE.intersectsMesh(KAVES3, false))&& (CAMX.innerHTML!=21) ){camera.position.z+=1.5;}	

         if  ((PLANE.intersectsMesh(BIGKEY, false))&&(CAMX.innerHTML!=104)  ){monsterKILLED++;}        
		 //if (   (PLANEBOX.intersectsMesh(PLANEMBOX, false))  &&  (CAMX.innerHTML!=104)  ) {monsterKILLED++;} ((PLANE.intersectsMesh(BIGKEY, false))&&(STARTER>=1)  )
		 
		
		
		if (ROT3D==1){WALK++;	
	if ((ROT3D==1)&&(WALK>=31)){MONST.rotation.y=WALK*Math.PI/100;PLANE.rotation.y=(-Math.PI/2)+(WALK*Math.PI/100);}
   		     if(WALK % 11 <= 4){DAILDORSN.visibility=DAILDORS.visibility=DAILDOR2S.visibility=DAWL1N.visibility = DAWR1N.visibility =1;}
		     if(WALK % 25 <= 10){DAILDORSN.visibility=DAILDORS.visibility=DAILDOR2S.visibility=DAWL1N.visibility = DAWR1N.visibility =0;}  }
      
	var size = scene.meshes.length;  
	var i=0;
	
	while (i < size ) {  
		if (  (scene.meshes[i].TREE && PLANEBOX.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=23)   )  {
				treesTOUCH++;}
				
				
		if (  (scene.meshes[i].BARELBOMBS && PLANEBOX.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=110)   )  {
				boombTOUCH++;}
				

		if (  (scene.meshes[i].BUILDINGTOUCH && PLANEBOX.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=21)   )  {
				buildingsTOUCH++;STOPbuilding++;SPEEDC=0;SPEEDC0=0;if(buildingsTOUCH==1){CARCRASH.play();CARACCE.volume=0.0;}
				BUILDING++;SS2=0;}
				
		else{STOPbuilding=0;STOPbuilding2=0;SPEEDC0=24;buildingsTOUCH=0;
		     BUILDING=0;}		
		
		
		/*				
		if (  (scene.meshes[i].BUILDBOMB && PLANE.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=110)   )  {
				boombTOUCH++;}
				*/
				
				
				
				i++;}  
		       });	 
		   

	
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
	engine.runRenderLoop(function() 
	{
	
	   if(HANDCONTROL==1){	
         try {
 	          var xmlDoc=loadXMLDoc("DIRECTION.xml");
	          var xx=xmlDoc.getElementsByTagName("POS")[0].childNodes[0];
	          var yy=xmlDoc.getElementsByTagName("POSUP")[0].childNodes[0];
	          //xy=xmlDoc.getElementsByTagName("POS")[0];xx=xy.childNodes[0];score.innerHTML=yy.nodeValue;
			 }
	
	      catch(e){} 
	               }		 
		 
	if((RESTART==1)||(FIRSTANM==1)){planeUPER=UPER=UPRR=UPRR1=0;FIRSTANM=3;CAR.pause();CARACCE.volume=0.0;SS1=0;SS2=0;SS=0;
	   // LIGHTmov.diffuse = new BABYLON.Color3(1, 1, 1);
		ROT3D=0;WALK=0;
		//TIMS=300;
		//PIRATESWIN.innerHTML=0;
		DAILDORS.visibility=DAILDOR2S.visibility=DAWL1N.visibility = DAWR1N.visibility =0;
		
	
		MONST.rotation.y=1.14159;
		EXPL=0;
		//PIRATE.size = 0; 
		//MONSTER0.rotation.y=-1.96159;//1.14159;
	
			  // KEY=KEYSS=0;
		 speed.innerHTML=0;
	     ANIMR=1;PLANE.rotation.x=0;camera.rotation.x=0;
         START=0;score.innerHTML=score1=99;BOUTTON.play();
		 
		 PLANE.rotation.z = Math.PI/30;INCLIN=INCLINUP=INCLINDN=0;CAMDELTAY = CAMDELTAY1 = 0;camera.rotation.x =0;
		 camera.rotation.y=2.090796;PLANE.rotation.y=3.24159;
		 
		 
		 DXXm=DYYm=0;
		 monsterKILLED=mT1=0;
         
		 XXm= random(-13700, 13700);YYm=random(-13700, 13700);
	     BIGKEY.position = new BABYLON.Vector3(XXm, 95, YYm);
		 
		 monsterPOS.style.opacity=monsterPOS2.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=0;
		 KEYicon1.style.opacity=KEYicon2.style.opacity=KEYicon3.style.opacity=KEYicon4.style.opacity=0.4;


		
		 //camera.rotation.y=1.570796;PLANE.rotation.y=2.74159;
		 
		 //camera.rotation.y=-Math.PI/2;
	     //camera.rotation.y= -Math.PI/2.06;
	     //camera.rotation.x= 0.1;
		 SUPER=planeSUPER=SUPERyy=0;PLANESUPER1.pause();
		 
		 STOPicon.style.width = STOPicon.style.height = 0 + 'px';ENERGIE=300;SPEEDC=1;
		// ENERG.style.height = ENERGIE + 'px';
		 STARTicon.style.width = STARTicon.style.height = 60 + 'px';
		 ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
		 if(RESTART==1){RESTARTicon.style.width = RESTARTicon.style.height = 0 + 'px';RESTART=2;FIRSTANM=0;}
		 
		 document.getElementById("BOUSL").style.transform = document.getElementById("RAKAS").style.transform = "rotate(0deg)";
		 document.getElementById("RAKAS2").style.transform = "rotate(-142deg)";
         document.getElementById("RAKASGAS").style.transform = "rotate(110deg)";
		 //ENERGicon.style.left = 170 + 'px';ENERGicon.style.top = 385 + 'px';
		 
		
		/*if(LEVELS==1){
		     camera.position = new BABYLON.Vector3(-29, 2008, 16);
		     PLANE.position = new BABYLON.Vector3(0, 2002.0, -1);}
		if(LEVELS==2){
		     camera.position = new BABYLON.Vector3(-29, 8, 16);
		     PLANE.position = new BABYLON.Vector3(0, 2.0, -1);}
		if(LEVELS==3){
		     camera.position = new BABYLON.Vector3(-29, -1992, 16);
		     PLANE.position = new BABYLON.Vector3(0, -1998.0, -1);}*/
			 LEVELS=2;
			 DELTAY11=DELTAY12=-24;
			 BONKAVEOUT=0;
			 BONKAVE=BONK1=0;
			 STOPKAVE=0;STOPbuilding=0;STOPbuilding2=0;buildingsTOUCH=0;BUILDING=0;
			 KAVE.visibility=KAVES3.visibility=0;//KAVEOUT.visibility=0;
			 KEY=1;
             KEY1.size=KEY2.size=KEY3.size=KEY4.size=0;			 
			 
			 PORTKEY1.size = PORTKEY2.size = PORTKEY3.size = PORTKEY4.size = 10; 
			 LEVELS1=LEVELS2=LEVELS3=LEVELS4=0;				
				 
			KEYNUMBER.innerHTML=0;	 
			TOPmenu2.style.height = TOPmenu2.style.width = 0 + 'px';
            TOPmenu2.style.opacity = 0;
			 
			 groundMEGAR.material = groundMaterialROCK;
                groundMEGAF.material = groundMaterialFIRE1;				
				 groundMEGA.position.y = -2;
			     groundMEGAF.position.y = -99914.5;
			     groundMEGAR.position.y = -14.5;
				 RAWSS1.position.y = RAWSS2.position.y = RAWSS3.position.y  = RAWSS4.position.y = 8;
                 RAWSG.position.y = RAWST.position.y = RAWSW.position.y = RAWSWKAVE.position.y = 
				 PORTKEY1.position.y = PORTKEY2.position.y = PORTKEY3.position.y = PORTKEY4.position.y =  12;
				 groundMEGAWATER.position.y=-1.5;water.position.y=-1;
                  groundMEGAWATER.material = groundMaterialWATER;
/*				 
groundMEGAWATER.position.y=1998.5;water.position.y=1999;
groundMEGAWATER.material = groundMaterialWATER1;
				 
groundMEGAWATER.position.y=-1.5;water.position.y=-1;
groundMEGAWATER.material = groundMaterialWATER;

groundMEGAWATER.position.y=-2001.5;water.position.y=-2001;
groundMEGAWATER.material = groundMaterialWATER2;*/


		 //BONT=1;if(LEVELS==2){
		     camera.position = new BABYLON.Vector3(-29, 8, 16);
		     PLANE.position = new BABYLON.Vector3(0, 2.0, -1);
			 
			// }
		 
		 MONST.position  = new BABYLON.Vector3(-83, 1.5, -608); //MONSTER0.position  = 
		
		// MAN1.position = new BABYLON.Vector3(50, 1.5, 520);MAN1.rotation.y=3.9;
		 //PLANEM.position = new BABYLON.Vector3(50, 1.5, 520);PLANEM.rotation.y=1.9;
		
		

		 
		 //DELTAXm = -11;DELTAYm =-13;		
         //DELTAXm = -0.13;DELTAYm =-0.15;
         DELTAXm = -15;DELTAYm =-15;		 
	     treesTOUCH=TT=TT1=0;
		 treesTOUCH2=TT0=TT2=0;
		 ALERT.pause();//KEYF.size=0;
		 scene.fogDensity = 0;
		 
		 UPRR3=0;
		 BOMB.stopAnimation();BOMB.size=0;bb=boombTOUCH=0;
		
		 }	


	if (ANIMR==1)
	    {anim ++; //0.0805
	    if(anim<40){camera.rotation.y+=0.0701;camera.position.x+=1.35;camera.position.y+=-0.0;camera.position.z+=-0.5;} 
		if(anim==40) {//camera.position = new BABYLON.Vector3(106, 7.5, 544);
		ANIMR=anim=0;//(100, 7.5, 541)
					//camera.position = new BABYLON.Vector3(104, 7.5, 543);
					MONST.rotation.y=camera.rotation.y;
					if(RESTART==2){RESTART=0;ROT3D=1;}
					//MAN1.rotation.y=3.9;
					
					
					//PLANE.position = new BABYLON.Vector3(-83, 1.5, -585);
                    //camera.position =PLANE.position = new BABYLON.Vector3(-83, 7.5, -585);

                   // camera.position = new BABYLON.Vector3(24, 8, -4);//(104, 7.5, 543);	
                    //PLANE.position = new BABYLON.Vector3(0, 2.0, -1); //(83, 2.0, 540);
   					
					
					   }              }  
	
	

	LIGHTmov.position = new BABYLON.Vector3(camera.position.x+3,camera.position.y, camera.position.z);
	//LIGHTmovUP.position = new BABYLON.Vector3(camera.position.x,camera.position.y+11, camera.position.z);
	
	//light1.position = lightSphere1.position = new BABYLON.Vector3(camera.position.x,camera.position.y+11, camera.position.z);
	light1.position = new BABYLON.Vector3(PLANE.position.z,6, PLANE.position.x);
			
	 //if (START==0){speed.innerHTML =0;}
	
	
	//if(sunchange==1){BOUTTON1.play();  sunchange=0;scene.fogDensity = (10-sundegree)/1000;}
  	if(sunchange==1){BOUTTON1.play();  sunchange=0;
	                if(SUN==1){scene.fogDensity = 0.0;
					     SUNicon.style.width = SUNicon.style.height = 0 + 'px';
                         MOONicon.style.width = MOONicon.style.height = 45 + 'px';}
					if(SUN==0){scene.fogDensity = 0.001;
					     SUNicon.style.width = SUNicon.style.height = 60 + 'px';
                         MOONicon.style.width = MOONicon.style.height = 0 + 'px';}  }
 
  if(MOTTO==1){
    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW1.png", scene);//RAW
    materialRAW.diffuseTexture.hasAlpha = true;
    materialRAW.backFaceCulling = false; 		 		  
	RAWD1.material = materialRAW;MOTTO=0;}	
	
  if(MOTTO==2){
    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW01.png", scene);//RAW0
    materialRAW.diffuseTexture.hasAlpha = true;
    materialRAW.backFaceCulling = false; 		 		  
	RAWD1.material = materialRAW;MOTTO=0;}
	
 if(MOTTO==3){
    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW0.png", scene);//RAW0
    materialRAW.diffuseTexture.hasAlpha = true;
    materialRAW.backFaceCulling = false; 		 		  
	RAWD1.material = materialRAW;MOTTO=0;}


 	/* if((CARRR==1)&&(chang==1)){MONSTER000.visibility = 0;MONSTER00.visibility = 1;//BACHI 2 YLW
	                           MONSTER00.parent=PLANE;MONSTER000.parent=RAWSS1;
                    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW0.png", scene);//RAW
                    materialRAW.diffuseTexture.hasAlpha = true;
                    materialRAW.backFaceCulling = false; 	 		  
	                RAWD1.material = materialRAW;
	                chang=11;}
	
	 if((CARRR==2)&&(chang==1)){MONSTER000.visibility = 1;MONSTER00.visibility = 0;  // BACHI 1 WHT
	                           MONSTER000.parent=PLANE;MONSTER00.parent=RAWSS1;
                   materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW3.png", scene);//
                   materialRAW.diffuseTexture.hasAlpha = true;
                   materialRAW.backFaceCulling = false;
                    //MONSTER000.position.y=10;				   
	               RAWD1.material = materialRAW;		 
	               chang=11;}*/

	
	
	
	
	
		 
     if ((START==1)&&(anim==0)){


	 if(HANDCONTROL==0){
		 if (keys.back==0){
		 RAWD1.rotate(BABYLON.Axis.Z, 0.2*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
         RAWD2.rotate(BABYLON.Axis.Z, -0.2*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWD3.rotate(BABYLON.Axis.Z, 0.2*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWD4.rotate(BABYLON.Axis.Z, -0.2*((SPEEDC/25)+1), BABYLON.Space.LOCAL); 
		 		// 	BIG RAWD EXT	 		 
		 RAWDL1.rotate(BABYLON.Axis.Y, -0.09*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
         RAWDL2.rotate(BABYLON.Axis.Y, -0.09*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWDL3.rotate(BABYLON.Axis.Y, -0.09*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWDL4.rotate(BABYLON.Axis.Y, -0.09*((SPEEDC/25)+1), BABYLON.Space.LOCAL); }
		 
	 	  if (keys.back==1){ 
		 RAWDL1.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWDL2.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWDL3.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWDL4.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);

		 RAWD1.rotate(BABYLON.Axis.Z, -0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
         RAWD2.rotate(BABYLON.Axis.Z, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWD3.rotate(BABYLON.Axis.Z, -0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWD4.rotate(BABYLON.Axis.Z, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL); }	   }		 
		 
		 
		 
		 

	 if(HANDCONTROL==1){
	  try {
		 if   (yy.nodeValue!=2){
		 RAWD1.rotate(BABYLON.Axis.Z, 0.2*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
         RAWD2.rotate(BABYLON.Axis.Z, -0.2*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWD3.rotate(BABYLON.Axis.Z, 0.2*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWD4.rotate(BABYLON.Axis.Z, -0.2*((SPEEDC/25)+1), BABYLON.Space.LOCAL); 
		 		// 	BIG RAWD EXT	 		 
		 RAWDL1.rotate(BABYLON.Axis.Y, -0.09*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
         RAWDL2.rotate(BABYLON.Axis.Y, -0.09*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWDL3.rotate(BABYLON.Axis.Y, -0.09*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWDL4.rotate(BABYLON.Axis.Y, -0.09*((SPEEDC/25)+1), BABYLON.Space.LOCAL); }
		 
	 	  if(yy.nodeValue==2){
		 RAWDL1.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWDL2.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWDL3.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWDL4.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);

		 RAWD1.rotate(BABYLON.Axis.Z, -0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
         RAWD2.rotate(BABYLON.Axis.Z, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWD3.rotate(BABYLON.Axis.Z, -0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWD4.rotate(BABYLON.Axis.Z, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL); }	   }	

           catch(e){}
		                 }		 
		 
		 
		 
	
		if(ENERGIE>0){ENERGIE-=0.0025*SPEEDC;score1=(ENERGIE-80)/2.2;}//0.0075     0.01
		if(score1<=2){score1=2;}
		
		score.innerHTML = parseInt(score1);
		speed.innerHTML = parseInt(SPEEDC*11);//8 12

	
		if  (treesTOUCH>=2){TT1=1;}
		 if(TT1>=1){TT++;}
	     if(TT==1){CARCRASH.play();ENERGIE-=10;if(SPEEDC>=5){SPEEDC+=-5;}}//scene.fogDensity = 0.007;CHANGE.play();
	     if(TT==2){HAHA.play();}
		 if((TT>=1)&&(TT<=11)&&(DROT<=2)){PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;}
		 if((TT>=1)&&(TT<=11)&&(DROT>2)){PLANE.rotation.y+=-0.15;MONST.rotation.y+=-0.15;}
		 
		if((TT>=1)&&(TT<=11)){if(PLANE.rotation.z<0.3){PLANE.rotation.z+=0.05;MONST.rotation.z+=0.05;}} 
		 
		 if(TT>=12){treesTOUCH=TT=0;TT1=0;
		                                 if(LEVELS!=3){DROT++;
		                                      if(DROT>=5){DROT=0;}}                      }
        if((TT==0)&&(PLANE.rotation.z>0.1)&&(planeUPER==0)&&(planeSUPER==0)&&(INCLINUP==0)&&(INCLINDN==0)){PLANE.rotation.z+=-0.05;MONST.rotation.z+=-0.05;}
			   
		 
		 
		 
     if  (treesTOUCH2>=2){TT2=1;}
		 if(TT2>=1){TT0++;}
	     if(TT0==1){CARCRASH.play();ENERGIE-=10;
		            if(SPEEDC>=5){SPEEDC+=-5;}
					//if(SMALKAVE<=1){TT0=3;}
					}
	     if(TT0==2){HAHA.play();}
		 if((TT0>=1)&&(TT0<=11)&&(DROT<=2)){PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;}
		 if((TT0>=1)&&(TT0<=11)&&(DROT>2)){PLANE.rotation.y+=-0.15;MONST.rotation.y+=-0.15;} 
		 if((TT0>=1)&&(TT0<=11)){if(PLANE.rotation.z<0.3){PLANE.rotation.z+=0.05;MONST.rotation.z+=0.05;}} 
		 if(TT0>=12){treesTOUCH2=TT0=0;TT2=0;//DROT++;
		           if(DROT>=5){DROT=0;}}
       // if((TT0==0)&&(PLANE.rotation.z>0.1)&&(planeUPER==0)&&(planeSUPER==0)){PLANE.rotation.z+=-0.05;MONST.rotation.z+=-0.05;}
		
	
		 
		 
		 

	if(boombTOUCH>=1){bb++;
	     if(bb==1){//LIGHTmov.diffuse = new BABYLON.Color3(0.1, 0, 0);	
			 EXPLOS1.play();BOMB.position = new BABYLON.Vector3(PLANE.position.x,11,PLANE.position.z);BOMB.playAnimation(0, 15, true, 80);BOMB.size=15;}
		 
		 if(bb<25) {UPRR3+=0.5;}
		 if(bb>=25){UPRR3+=-0.5;}
		 if(bb<50){PLANE.rotation.x+=0.1;
		            PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;//camera.rotation.y+=0.0805;camera.rotation.x+=0.0805;
		            BOMB.position = new BABYLON.Vector3(PLANE.position.x,11,PLANE.position.z);}  }
		 if(bb>=50){PLANE.rotation.x=0;UPRR3=0;}
		 if(bb>=70){BOMB.stopAnimation();BOMB.size=0;bb=boombTOUCH=0;}
		







			 if  (monsterKILLED>=1){mT1++;SPEEDC=2;}  
			 if  (mT1<=100){TOPmenu2.style.height = (3*mT1) + 'px';}  
	         if(mT1==1){YEHAW.play(); KEYNUMBER.innerHTML ++;if(LEVELS!=3){DELTAXm = Math.abs(DELTAXm)+5;DELTAYm = Math.abs(DELTAYm)+5;}
                     TOPmenu2.style.width = 500 + 'px';TOPmenu2.style.opacity = 0.7;
			         DXXm=0;DYYm=0;camera.position.x=320;camera.position.z=-110;
					 XXm= random(-14700, 14700);YYm=random(-14700, 14700);
					        SUPER=planeSUPER=0;PLANESUPER1.pause();
	                        BOUTTON1.play();
							ENERGIE=300;ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
			                KEY1.size=KEY2.size=KEY3.size=KEY4.size=0;
							monsterPOS.style.opacity=monsterPOS2.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=0;
			       
				 if(LEVELS==1){KEYicon1.style.opacity=1;PORTKEY1.size=40;LEVELS1=1;}				 
	             if(LEVELS==2){KEYicon2.style.opacity=1;PORTKEY2.size=40;LEVELS2=1;}	
	             if(LEVELS==3){KEYicon3.style.opacity=1;PORTKEY3.size=40;LEVELS3=1;}	
				 if(LEVELS==4){KEYicon4.style.opacity=1;PORTKEY4.size=40;LEVELS4=1;}		

				
							 }
		 
		     if( (mT1>=250)&&(KEYNUMBER.innerHTML<4) ){monsterKILLED=mT1=0;
			   BIGKEY.position=KEY1.position=KEY2.position=KEY4.position=new BABYLON.Vector3(XXm, 185, YYm);	
               TOPmenu2.style.height = TOPmenu2.style.width = 0 + 'px';TOPmenu2.style.opacity = 0;			   
				}
			   





		
	
	var DIR;
    DIR = getForwardVector(camera.rotation);
	DIR.normalize();
	
	

	
	if(DIR.z>=0)   {
		       if(DIR.x<0){DIRXZ=parseInt(270+-90 * DIR.x)}
	           if(DIR.x>=0){DIRXZ=parseInt(270 -90 * DIR.x)}  }
			   
	if(DIR.z<0)  {DIRXZ=parseInt(90 +90 * DIR.x)}  
			   
			  

//############################ PILOT MOVE ############################################
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
//############################ PILOT MOVE ############################################	
	  if((STOPbuilding>=1)&&(BUILDING==0)){STOPbuilding2++;}	
	  
	   PLANE.position = camera.position.clone();
	        var DIR1;
            DIR1 = getForwardVector(camera.rotation);
	        DIR1.normalize();
			
		    PLANE.position.x +=DIR1.x * (SPEEDC+DISTANCE+SPEEDCM);
	        PLANE.position.z +=DIR1.z * (SPEEDC+DISTANCE+SPEEDCM);			
			DELTAY0 = groundMEGA.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);
			PLANE.position.y = DELTAY0+UPRR-UPRR1;//+SUPERyy;
			
if( (PLANE.position.x>0)&&(PLANE.position.z>0)&&(LEVELS!=3) ){DELTAY11 = groundMEGAF.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
if( (PLANE.position.x>0)&&(PLANE.position.z<=0)&&(LEVELS!=3) ){DELTAY12 = groundMEGAR.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
			
	

	if(  ( (DELTAY11>DELTAY0) || (DELTAY12>DELTAY0) || (BUILDING>0) ) &&(LEVELS!=3)  ){buildingsTOUCH++;STOPbuilding++;SS2=0;SPEEDC=0;
	                        if(buildingsTOUCH==1){CARACCE.volume=0.0;CARCRASH.play();}}
			if ( (DELTAY0>=DELTAY11)&&(DELTAY0>=DELTAY12)&&(BUILDING==0) ){STOPbuilding=0;STOPbuilding2=0;buildingsTOUCH=0;}
			 
		
			camera.position.y = PLANE.position.y+6-UPRR+UPRR1;//-SUPERyy/20;
			
     		VIBR++;
 	     if((VIBR >= 1)&&(VIBR <= 3)){PLANE.position.y+=0.02;}
		 if((VIBR > 3)&&(VIBR <= 6)){PLANE.position.y+=-0.02;} 
		 if(VIBR > 6){VIBR=1;}
			

//#########################" KEYBORD CONTROL ##########################################
//#########################" KEYBORD CONTROL ##########################################
//#########################" KEYBORD CONTROL ##########################################
//#########################" KEYBORD CONTROL ##########################################
//#########################" KEYBORD CONTROL ##########################################
//#########################" KEYBORD CONTROL ##########################################
//#########################" KEYBORD CONTROL ##########################################
//#########################" KEYBORD CONTROL ##########################################
//#########################" KEYBORD CONTROL ##########################################
//#########################" KEYBORD CONTROL ##########################################
//#########################" KEYBORD CONTROL ##########################################

   if(HANDCONTROL==0){	

    if ((keys.left==1)&&(MONST.rotation.y>=camera.rotation.y-0.5)){PLANE.rotation.y+=-0.15;MONST.rotation.y+=-0.15;RET=0;}//move left   
    if ((keys.right==1)&&(MONST.rotation.y<=camera.rotation.y+0.5)){PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;RET=0;}//move right  	
   
  if ((keys.left==1)&&(keys.back==0)){camera.rotation.y+=-0.1;PLANE.rotation.y+=-0.1;root++;
		    MONST.rotation.y+=-0.1;
				     if((root % 3 == 0)&&(ALRTf<2)){DAILDOR2S.visibility=DAWR1N.visibility =1;}
		             if((root % 15 <= 3)&&(ALRTf<2)){DAILDOR2S.visibility=DAWR1N.visibility =0;} 
       if((root == 13)&&(SPEEDC>=10)){CARBRAKE.play();}			
       if((root >= 13)&&(root <= 47)&&(SPEEDC>=10)){PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;RET=0;}} //move left  

  if ((keys.right==1)&&(keys.back==0)){camera.rotation.y+=0.1;PLANE.rotation.y+=0.1;root1++;MONST.rotation.y+=0.1; 
       	         if((root1 % 3 == 0)&&(ALRTf<2)){DAILDORS.visibility=DAWL1N.visibility =1;}
		         if((root1 % 15 <= 0)&&(ALRTf<2)){DAILDORS.visibility=DAWL1N.visibility =0;} 
		  if((root1 == 13)&&(SPEEDC>=10)){CARBRAKE.play();}		
          if((root1 >= 13)&&(root1 <= 47)&&(SPEEDC>=10)){PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;RET=0;}} //move right
		  
	if ((keys.left==1)&&(keys.back==1)){camera.rotation.y+=0.05;PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;} //move left                     
    if ((keys.right==1)&&(keys.back==1)){camera.rotation.y+=-0.05;PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;} //move right
		 
 	
    if ((keys.right==0)&&(PLANE.rotation.x<=0)&&(boombTOUCH==0)){PLANE.rotation.x+=0.01;UPRR2=0;}//BACK move left 
    if ((keys.left==0)&&(PLANE.rotation.x>0)&&(boombTOUCH==0)){PLANE.rotation.x+=-0.01;UPRR2=0;}//BACK move right 
    if ((keys.left==0)&&(keys.right==0)&&(PLANE.rotation.x!=0)&&(boombTOUCH==0)){RET++;if(RET==15){PLANE.rotation.x=0;RET=0;UPRR2=0;}}

   if ((keys.left==0)&&(MONST.rotation.y<camera.rotation.y))
	                  {PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;root=0;
					  if(ALRTf<2){DAILDOR2S.visibility=DAWR1N.visibility =0;}}//BACK move left 
	if ((keys.right==0)&&(MONST.rotation.y>camera.rotation.y))
	                 {PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;root1=0;
					 if(ALRTf<2){DAILDORS.visibility=DAWL1N.visibility =0;}}//BACK move right   

 

	 if ((keys.forward==1)&&(SPEEDC<20)&&(ENERGIE>80)&&(STOPbuilding2<=0)&&(STOPKAVE<=0)&&(INCLINUP==0)&&(INCLINDN==0)){SPEEDC+=0.3;}
	 if ((keys.forward==0)&&(SPEEDC>1)){SPEEDC+=-0.5;
	                                   if(SS1<2){SS1++;SS2=0;
	                                         if(SS1==1){CARSTOP.play();CARACCE.volume=0.0;}}}
	 if ((keys.forward==1)&&(ENERGIE>80)&&(STOPbuilding2<=0)&&(SS2<2)&&(STOPKAVE<=0)){SS2++;
	                                   if(SS2==1){CARACCE.currentTime = 0;CARACCE.volume=1;CARACCE.play();CARACCE.loop= true;SS1=0;}}
	
	if ((keys.forward==1)&&(SPEEDC>1)&&(ALRTf<2)){DAILDORSN.visibility=1;}//DAILDORSF.visibility=DAILDORSF2.visibility=0;}//&&(ALRTf<2)
	if ((keys.forward==0)&&(ALRTf<2))               {DAILDORSN.visibility=0;}//DAILDORSF.visibility=DAILDORSF2.visibility=0;
	                                   
   

  /*   if ((planeSUPER>=1)&&(PLANE.rotation.z<0.35)){PLANE.rotation.z+=0.05;} 
	if (    (  (keys.forward==0)  ||  (SPEEDC<=2)    ) && (planeSUPER==0)  )   {
	                 if(PLANE.rotation.z>0.1){PLANE.rotation.z+=-0.05;}}    
 */
 
 	if (keys.back==1){SPEEDCM=-1.5;SPEEDC=1;}////////////////////5
	if (keys.back==0){SPEEDCM=0;}///////////////////////////////5//
 
  
           }// end KEYBORDCONTROL
 
 
 
 
//#########################" HAND CONTROL ##########################################
//#########################" HAND CONTROL ##########################################
//#########################" HAND CONTROL ##########################################
//#########################" HAND CONTROL ##########################################
//#########################" HAND CONTROL ##########################################
//#########################" HAND CONTROL ##########################################
//#########################" HAND CONTROL ##########################################
//#########################" HAND CONTROL ##########################################
//#########################" HAND CONTROL ##########################################
//#########################" HAND CONTROL ##########################################
//#########################" HAND CONTROL ########################################## 
 
    if(HANDCONTROL==1){	 
 try {
    if ((xx.nodeValue==1)&&(MONST.rotation.y>=camera.rotation.y-0.5)){PLANE.rotation.y+=-0.15;MONST.rotation.y+=-0.15;RET=0;}//move left    
    if ((xx.nodeValue==2)&&(MONST.rotation.y<=camera.rotation.y+0.5)){PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;RET=0;}//move right    	
   	

  if ((xx.nodeValue==1)&&(yy.nodeValue!=2)){camera.rotation.y+=-0.1;PLANE.rotation.y+=-0.1;root++;
		    MONST.rotation.y+=-0.1;
				     if((root % 3 == 0)&&(ALRTf<2)){DAILDOR2S.visibility=DAWR1N.visibility =1;}
		             if((root % 15 <= 3)&&(ALRTf<2)){DAILDOR2S.visibility=DAWR1N.visibility =0;} 
       if((root == 13)&&(SPEEDC>=10)){CARBRAKE.play();}			
       if((root >= 13)&&(root <= 47)&&(SPEEDC>=10)){PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;RET=0;}} //move left  

  if ((xx.nodeValue==2)&&(yy.nodeValue!=2)){camera.rotation.y+=0.1;PLANE.rotation.y+=0.1;root1++;MONST.rotation.y+=0.1; 
       	         if((root1 % 3 == 0)&&(ALRTf<2)){DAILDORS.visibility=DAWL1N.visibility =1;}
		         if((root1 % 15 <= 0)&&(ALRTf<2)){DAILDORS.visibility=DAWL1N.visibility =0;} 
		  if((root1 == 13)&&(SPEEDC>=10)){CARBRAKE.play();}		
          if((root1 >= 13)&&(root1 <= 47)&&(SPEEDC>=10)){PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;RET=0;}} //move right
		  
if ((xx.nodeValue==1)&&(yy.nodeValue==2)){camera.rotation.y+=0.05;PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;}//move left                     
if ((xx.nodeValue==2)&&(yy.nodeValue==2)){camera.rotation.y+=-0.05;PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;} //move right
		 
 	
    if ((xx.nodeValue==0)&&(PLANE.rotation.x<=0)&&(boombTOUCH==0)){PLANE.rotation.x+=0.01;UPRR2=0;}//BACK move left 
    if ((xx.nodeValue==0)&&(PLANE.rotation.x>0)&&(boombTOUCH==0)){PLANE.rotation.x+=-0.01;UPRR2=0;}//BACK move right 
    if ((xx.nodeValue==0)&&(PLANE.rotation.x!=0)&&(boombTOUCH==0)){RET++;if(RET==15){PLANE.rotation.x=0;RET=0;UPRR2=0;}}

   if ((xx.nodeValue==0)&&(MONST.rotation.y<camera.rotation.y))
	                  {PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;root=0;
					  if(ALRTf<2){DAILDOR2S.visibility=DAWR1N.visibility =0;}}//BACK move left 
	if ((xx.nodeValue==0)&&(MONST.rotation.y>camera.rotation.y))
	                 {PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;root1=0;
					 if(ALRTf<2){DAILDORS.visibility=DAWL1N.visibility =0;}}//BACK move right   

 

	 if ((yy.nodeValue==1)&&(SPEEDC<20)&&(ENERGIE>80)&&(INCLINUP==0)&&(INCLINDN==0)){SPEEDC+=0.3;}
	 if ((yy.nodeValue==0)&&(SPEEDC>1)){SPEEDC+=-0.5;
	                                   if(SS1<2){SS1++;SS2=0;
	                                         if(SS1==1){CARSTOP.play();CARACCE.volume=0.0;}}}
	 if ((yy.nodeValue==1)&&(ENERGIE>80)&&(SS2<2)){SS2++;
	                                   if(SS2==1){CARACCE.currentTime = 0;CARACCE.volume=1;CARACCE.play();CARACCE.loop= true;SS1=0;}}
	
	if ((yy.nodeValue==1)&&(SPEEDC>1)&&(ALRTf<2)){DAILDORSN.visibility=1;}
	if ((yy.nodeValue==0)&&(ALRTf<2))               {DAILDORSN.visibility=0;}
     
 
 
 	if (yy.nodeValue==2){SPEEDCM=-1.5;SPEEDC=1;}////////////////////5
	if (yy.nodeValue==0){SPEEDCM=0;}///////////////////////////////5//
 
          }//end try
   
          catch(e){}
		    } // end HANDCONTROL
 
 
 
 
	
			camera.position.x +=DIR1.x * (SPEEDC+SPEEDCM);
			camera.position.z +=DIR1.z * (SPEEDC+SPEEDCM);
			
//###############" BORDE TOUCH ###########################
//###############" BORDE TOUCH ###########################
//###############" BORDE TOUCH ###########################	
//###############" BORDE TOUCH ###########################
//###############" BORDE TOUCH ###########################
//###############" BORDE TOUCH ###########################			
			
	  
	   if ((PLANE.position.x>=14900) ||(PLANE.position.x<=-14900) )
	       {camera.position.x=-camera.position.x;BOUTTON1.play();}
	   if ((PLANE.position.z>=14900) || (PLANE.position.z<=-14900)  )
	       {camera.position.z=-camera.position.z;BOUTTON1.play();}
       	   
 
//###############" BORDE WARN & ENEGRIE ###########################
//###############" BORDE WARN & ENEGRIE ###########################
//###############" BORDE WARN & ENEGRIE ###########################

	 if (   ((PLANE.position.x>=19600)  || (keys.back==1) || (STOPbuilding>=1) || (PLANE.position.z>=19600) ||(PLANE.position.x<=-19600)  || (PLANE.position.z<=-19600) || (ENERGIE<=80)  )&& (ALRTf<3)    )
	        {ALRTf++;}
	      if(ALRTf==1){ALERT.play();ALERT.loop= true;ALRTf=2;ALRTn=0;CARACCE.pause();SS2=0; }

       	if (   ((PLANE.position.x<19600)  && (keys.back==0) && (PLANE.position.x>-19600) && (PLANE.position.z<19600)  && (PLANE.position.z>-19600) && (ENERGIE>80) )  && (ALRTn<3)   )
	        {ALRTn++;}
	      if(ALRTn==1){ALERT.pause();ALRTn=2;ALRTf=0;DAILDORSN.visibility=0; }
		  
	if (ENERGIE<=80) {SPEEDC=1;ENERGicon.style.width = ENERGicon.style.height = 80 + 'px';CARACCE.volume=0.0;} 	
		

		

	
	if(ALRTf>=2){ALRTf++;
		 if(ALRTf % 11 <= 4){DAILDORSN.visibility=0;DAILDORS.visibility=DAILDOR2S.visibility=DAWL1N.visibility = DAWR1N.visibility = 1;}
		 if(ALRTf % 25 <= 10){DAILDORSN.visibility=1;DAILDORS.visibility=DAILDOR2S.visibility=DAWL1N.visibility = DAWR1N.visibility = 0;}    }
		
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################

	DXXm+=DELTAXm;
	DYYm+=DELTAYm;

	MONSTX1 = XXm+DXXm;
	MONSTZ1 = YYm+DYYm;
	ZZm1 = groundMEGA.getHeightAtCoordinates(MONSTX1, MONSTZ1);
	if(LEVELS!=3)
	{BIGKEY.position=KEY1.position=KEY2.position=KEY4.position=new BABYLON.Vector3(XXm+DXXm,ZZm1+170,YYm+DYYm);}
	
	 
	   if ((BIGKEY.position.x>=14000)  || (BIGKEY.position.x<=-14000)){DELTAXm=-DELTAXm;}
       if ((BIGKEY.position.z>=14000)  || (BIGKEY.position.z<=-14000)){DELTAYm=-DELTAYm;}
	   
	
			
   
		
	

//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
	
	if(planeUPER>=1){UPER++;}
	
	if(UPER==3){CHANGE.play();ACTION++;}
	if((UPER==9)&&(ACTION>=1)){YEHAW.play();}
	
	if(UPER>=80){UPRR=UPRR1=0;}
	if(UPER>=90){planeUPER=UPER=UPRR=UPRR1=0;PLANE.rotation.z=0.0;camera.rotation.x =0;
	             if(planeSUPER==0){SPEEDC=10;}
	            PLANE.rotation.z = Math.PI/30;camera.position.y = PLANE.position.y+6;if(ACTION>=2){ACTION=0;}}
	
	
	if((UPER>=1)&&(UPER<40)&&(ACTION==1)){UPRR+=1.3;camera.rotation.x +=-0.03;PLANE.rotation.z+=0.08;PLANE.rotation.y+=0.1;MONST.rotation.y+=0.1;}           
    if((UPER>=40)&&(UPER<80)&&(ACTION==1)){UPRR1+=1.3;camera.rotation.x +=0.03;PLANE.rotation.z+=0.08;PLANE.rotation.y+=0.1;MONST.rotation.y+=0.1;}  

	if((UPER>=1)&&(UPER<40)&&(ACTION==2)){UPRR+=1.3;camera.rotation.x +=-0.03;PLANE.rotation.z+=0.08;}           
	if((UPER>=40)&&(UPER<80)&&(ACTION==2)){UPRR1+=1.3;camera.rotation.x +=0.03;PLANE.rotation.z+=0.08;}  
		
    
	
	if((UPER>=80)&&(UPER<85)){camera.rotation.x +=-0.075;}
	if((UPER>=85)&&(UPER<=90)){camera.rotation.x +=0.075;}	

		 
		if(planeDOWN>0){DOWN++;} //can't up
		if(DOWN>=70){planeDOWN=DOWN=0;} 



			if((planeSUPER>=1)&&(mT1==0)){SUPER++;//PORTSUPERPLANE.rotation.x=SUPER*Math.PI/5;
	                   //PORTSUPERPLANE.visibility=1;//BOATY=0.0;
	        if(SUPER==1){CHANGE.play();SUPERyy=50.0002;}
			if(SUPER==2){PLANESUPER1.play();PLANESUPER1.loop = true;SUPERyy=50.0002;}
	          if(SUPER<=270){
	                 if(SPEEDC<=49){SPEEDC++;};
                     if(SPEEDC>=49){SPEEDC=50;};}
		    //if(SUPER==270){PLANESTOP.play();}
		if(SUPER>=270){SPEEDC--;}
		if(SUPER>=300){SUPER=planeSUPER=0;SPEEDC=18;PLANESUPER1.pause();SUPERyy=0;/*PORTSUPERPLANE.visibility=0;BOATY=0;PLANESUPER.pause();*/
		             }  }
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################	

				 
	if(BON>0){BON1++;} // FIRE
		if(BON1==1){BOUTTON1.play();ENERGIE=300;DELTAY11=DELTAY12=0;LEVELS=1;monsterPOS.style.opacity=1;KEY1.size=220;
		        monsterPOS2.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=0;
		        groundMEGAR.material = groundMaterialROCK2;
				groundMEGAF.material = groundMaterialFIRE1;//groundMEGAF.material = groundMaterialFIRE3;
				 groundMEGA.position.y = 1998;
			     groundMEGAF.position.y = 1985.5;
			     groundMEGAR.position.y = 1985.5;
				 water.position.y=1999;
				 groundMEGAWATER.material = groundMaterialWATER1;
				 groundMEGAWATER.position.y=1998.5;//groundRIVER.position.y= 1998;
				 RAWSS1.position.y = RAWSS2.position.y = RAWSS3.position.y  = RAWSS4.position.y = 2008;
                 RAWSG.position.y = RAWST.position.y = RAWSW.position.y = RAWSWKAVE.position.y = 
				 PORTKEY1.position.y = PORTKEY2.position.y = PORTKEY3.position.y = PORTKEY4.position.y = 2012;				 
				ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
				//XXm= random(-13700, 13700);YYm=random(-13700, 13700);BIGKEY.position = new BABYLON.Vector3(XXm, 95, YYm);
				} 
		        if(BON1==3){BON=BON1=0;} 

		if(BONT>0){BONT1++;}  // FIRST GREEN ROCK & CITY
		if(BONT1==1){BOUTTON1.play();ENERGIE=300;DELTAY11=DELTAY12=-24;LEVELS=2;monsterPOS2.style.opacity=1;KEY2.size=220;
		        monsterPOS.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=0;
		        groundMEGAR.material = groundMaterialROCK;
                //groundMEGAF.material = groundMaterialFIRE1;				
				 groundMEGA.position.y = -2;
			     //groundMEGAF.position.y = -14.5;
			     groundMEGAR.position.y = -14.5;
				 groundMEGAWATER.position.y=-1.5;
				 water.position.y=-1;
			     groundMEGAWATER.material = groundMaterialWATER;
				 RAWSS1.position.y = RAWSS2.position.y = RAWSS3.position.y  = RAWSS4.position.y = 8;
                 RAWSG.position.y = RAWST.position.y = RAWSW.position.y = RAWSWKAVE.position.y = 
				 PORTKEY1.position.y = PORTKEY2.position.y = PORTKEY3.position.y = PORTKEY4.position.y =  12;
				ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
				//XXm= random(-13700, 13700);YYm=random(-13700, 13700);BIGKEY.position = new BABYLON.Vector3(XXm, 95, YYm);
				} 
		        if(BONT1==3){BONT=BONT1=0;} 
		


		if((BONKAVE>0)&&(BONKAVE<2)){BONK1++;} 
		if(BONK1==1){CHANGE.play();BOUTTON1.play();ENERGIE=300;DELTAY11=DELTAY12=-240;LEVELS=3;BONKAVEOUT=0;scene.fogDensity = 0.003;KEY3.size=40;
		        monsterPOS3.style.opacity=1;
		        monsterPOS.style.opacity=monsterPOS2.style.opacity=monsterPOS4.style.opacity=0;
		        KAVE.visibility=KAVES3.visibility=1;	
		        camera.position.x=550;camera.position.z=-8500;camera.position.y=-270;camera.rotation.y=0.090796;
				groundMEGA.position.y=-280;
				ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
				BONKAVE=3;BONK1=3;
				KEY4.visibility=1;
				KEY4.position=(550, -256, 6900);} 
		        //if(BONK1==3){BONKAVE=BONK1=0;}

	if  ((BONKAVEOUT>=1)&&(BONKAVEOUT<=3))  {
            if(BONKAVEOUT==1){//BONT=1;
			scene.fogDensity = 0;
			KAVE.visibility=KAVES3.visibility=0;
			CHANGE.play();
			 camera.position.y=6;}//LEVELS=-22; DELTAY11=DELTAY12=-24;
			  DELTAY11=DELTAY12=0;DELTAY0=1;BONKAVEOUT++;BONKAVE=BONK1=0;
			  BONKAVE=0;STOPKAVE=0;STOPbuilding=0;STOPbuilding2=0;buildingsTOUCH=0;
			  monsterKILLED=1;
			  monsterPOS3.style.opacity=0;
		        groundMEGAR.material = groundMaterialROCK;groundMEGAF.material = groundMaterialFIRE1;				
				 groundMEGA.position.y = -2;groundMEGAF.position.y = -14.5;groundMEGAR.position.y = -14.5;
				 RAWSS1.position.y = RAWSS2.position.y = RAWSS3.position.y  = RAWSS4.position.y = 8;
                 RAWSG.position.y = RAWST.position.y = RAWSW.position.y = RAWSWKAVE.position.y = 
				 PORTKEY1.position.y = PORTKEY2.position.y = PORTKEY3.position.y = PORTKEY4.position.y =  12;}
           if(BONKAVEOUT>=1){BONKAVEOUT=0;}
		   
		        
		   
		
		if(BONW>0){BONW1++;} // DARK BLUE SEA
		if(BONW1==1){BOUTTON1.play();ENERGIE=300;DELTAY11=DELTAY12=-2300;LEVELS=4;monsterPOS4.style.opacity=1;KEY4.size=220;
		        monsterPOS.style.opacity=monsterPOS2.style.opacity=monsterPOS3.style.opacity=0;
		         groundMEGAR.material = groundMaterialROCK3;
				 groundMEGAF.material = groundMaterialFIRE2;
				 groundMEGA.position.y = -2002;
			     groundMEGAF.position.y = -2014.5;
			     groundMEGAR.position.y = -2014.5;
				 groundMEGAWATER.position.y=-2001.5;
				 water.position.y=-2001;
			     groundMEGAWATER.material = groundMaterialWATER2;
			  
				 RAWSS1.position.y = RAWSS2.position.y = RAWSS3.position.y  = RAWSS4.position.y =  -1992;
                 RAWSG.position.y = RAWST.position.y = RAWSW.position.y = RAWSWKAVE.position.y = 
				 PORTKEY1.position.y = PORTKEY2.position.y = PORTKEY3.position.y = PORTKEY4.position.y =  -1988;
				ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
				//XXm= random(-13700, 13700);YYm=random(-13700, 13700);BIGKEY.position = new BABYLON.Vector3(XXm, 95, YYm);
				} 
		        if(BONW1==3){BONW=BONW1=0;} 		
	
	   
	   
    }//end START

  
	
	CAMX.innerHTML=parseInt(camera.position.x);CAMY.innerHTML=parseInt(camera.position.z); 
	MX=parseInt(BIGKEY.position.x);MY=parseInt(BIGKEY.position.z);

	if(START>=1){	
	document.getElementById("BOUSL").style.transform = document.getElementById("RAKAS").style.transform = "rotate(" + (-DIRXZ) + "deg)";document.getElementById("RAKASGAS").style.transform = "rotate(" + (0.6*ENERGIE+290) + "deg)";
	document.getElementById("RAKAS2").style.transform = "rotate(" + (14*SPEEDC-155) + "deg)";}
	
	if(SMALLSCREEN==1){
	BOUSL.style.top = playerPOS.style.top= ((0.0044*CAMX.innerHTML)+170)-90+ 'px';
	BOUSL.style.left = playerPOS.style.left= ((0.0044*CAMY.innerHTML)+156)+ 'px';
	
	     monsterPOS.style.top = monsterPOS2.style.top =  monsterPOS4.style.top = ((0.0044*MX)+170)-90+ 'px';
	     monsterPOS.style.left= monsterPOS2.style.left = monsterPOS4.style.left = ((0.0044*MY)+156)+ 'px';
		 
		
	}
	

		scene.render();
	});
}
  
function getForwardVector(rotation) {
	var rotationMatrix = BABYLON.Matrix.RotationYawPitchRoll(rotation.y, rotation.x, rotation.z);
	var forward = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0, 0, 1), rotationMatrix);
	return forward;}


	
	
function createSkybox(scene) {
     var sMaterial = new BABYLON.StandardMaterial("skyboxMaterial", scene);
     sMaterial.backFaceCulling = false;
	 sMaterial.reflectionTexture = new BABYLON.CubeTexture("img_game/skybox/1/skybox", scene);
     sMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
     sMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
     sMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	var skybox = BABYLON.Mesh.CreateBox("skybox", 2800, scene);
	skybox.material = sMaterial; }    
	
	


	
function createDemoScene(scene) {
	var skyMaterial = scene.getMaterialByName("skyboxMaterial");

	

	
	var SK1 = BABYLON.Mesh.CreatePlane("1groundGRoutBOG", 4005, scene);
	SK1.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK1.rotation.y = Math.PI / 2;
	SK1.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK1.material.diffuseTexture = new BABYLON.Texture("img_game_skybox/skybox_nx.jpg", scene);
	SK1.position = new BABYLON.Vector3(2000,1000,0);
	SK1.checkCollisions = true;
	
	var SK2 = BABYLON.Mesh.CreatePlane("3groundGRoutBOG", 4005, scene);
	SK2.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK2.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK2.material.diffuseTexture = new BABYLON.Texture("img_game_skybox/skybox_nz.jpg", scene);
	SK2.position = new BABYLON.Vector3(0,1000,2000);
	SK2.checkCollisions = true;
	
	var SK3 = BABYLON.Mesh.CreatePlane("6groundGRoutBOG", 4005, scene);
	SK3.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK3.rotation.y = Math.PI;
	SK3.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK3.material.diffuseTexture = new BABYLON.Texture("img_game_skybox/skybox_pz.jpg", scene);
	SK3.position = new BABYLON.Vector3(0,1000,-2000);
	SK3.checkCollisions = true;
	
	var SK4 = BABYLON.Mesh.CreatePlane("1groundGRoutBOG", 4005, scene);
	SK4.scaling = new BABYLON.Vector3(1,0.5,0.001);
	SK4.rotation.y = -Math.PI/2 ;SK4.rotation.z = -2*Math.PI ;
	SK4.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK4.material.diffuseTexture = new BABYLON.Texture("img_game_skybox/skybox_px.jpg", scene);
	SK4.position = new BABYLON.Vector3(-2000,1000,0);
	SK4.checkCollisions = true;
	
	var SK5 = BABYLON.Mesh.CreatePlane("1groundGRoutBOG", 4001, scene);
	SK5.scaling = new BABYLON.Vector3(1,1,0.0001);
	SK5.rotation.x = -Math.PI/2 ;SK5.rotation.z = -Math.PI/2 ;
	SK5.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK5.material.diffuseTexture = new BABYLON.Texture("img_game_skybox/skybox_ny.jpg", scene);
	SK5.position = new BABYLON.Vector3(0,1990,0);//(0,1990,0);
	SK5.checkCollisions = true;
	
	/*var SK6 = BABYLON.Mesh.CreatePlane("1groundGRoutBOG", 4000, scene);
	SK6.rotation.x = Math.PI/2 ;SK5.rotation.z = -Math.PI/2 ;
	//SK6.rotation.x = Math.PI/2 ;
	SK6.position = new BABYLON.Vector3(0,-100,0);
	SK6.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK6.material.diffuseTexture = new BABYLON.Texture("img_game_skybox/5.jpg", scene);
	SK6.material.emissiveColor =  new BABYLON.Color3(1.0, 1.0, 1.0);*/
	SK1.material.emissiveColor = SK2.material.emissiveColor = SK3.material.emissiveColor = SK4.material.emissiveColor =SK5.material.emissiveColor =  new BABYLON.Color3(1.0, 1.0, 1.0);

	SK1.infiniteDistance = true;
	SK2.infiniteDistance = true;
	SK3.infiniteDistance = true;
	SK4.infiniteDistance = true;
	SK5.infiniteDistance = true;
	//SK6.infiniteDistance = true;
	
	/*	var groundGRBIG = BABYLON.Mesh.CreatePlane("groundGRoutBOG", 4010, scene);
	groundGRBIG.rotation.x = Math.PI / 2;
	groundGRBIG.material = new BABYLON.StandardMaterial("gMaterial", scene);
	groundGRBIG.material.diffuseTexture = new BABYLON.Texture("img_game/snow.jpg", scene);//S1 W2  STREET  ground1,ground2;street2:W2;
	groundGRBIG.material.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	groundGRBIG.material.diffuseTexture.uScale = 100;
	groundGRBIG.material.diffuseTexture.vScale = 100;
	groundGRBIG.position = new BABYLON.Vector3(0,0,0);
	groundGRBIG.checkCollisions = true;
	
	
	
	        	// Shadows
        	var shadowGenerator = new BABYLON.ShadowGenerator(1024, LIGHTmov);
        	shadowGenerator.getShadowMap().renderList.push(PLANE);
        	shadowGenerator.useVarianceShadowMap = true;
        
        	var shadowGenerator2 = new BABYLON.ShadowGenerator(1024, light2);
        	shadowGenerator2.getShadowMap().renderList.push(PLANE);
        	shadowGenerator2.usePoissonSampling = true;
        
        	groundGRBIG.receiveShadows = true;*/
	
			

/*
		// Ground UP
           var groundUP = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPBIGG2.jpg", 4000, 4000, 400, 0, 0.5, scene, false);//1, 2.5
            var groundMaterialUP = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialUP.diffuseTexture = new BABYLON.Texture("img_game/snow.jpg", scene);//ground4,snow.
            groundMaterialUP.diffuseTexture.uScale = 196;//36
            groundMaterialUP.diffuseTexture.vScale = 190;//20
            groundMaterialUP.specularColor = new BABYLON.Color3(0, 0, 0);
			groundUP.position = new BABYLON.Vector3(0,-0.1,0);//0,-1.5,0);
			groundUP.scaling = new BABYLON.Vector3(1,1,1);
			groundMaterialUP.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0); 
            groundUP.material = groundMaterialUP;
			groundUP.checkCollisions = true; 
			
			*/			
    



		
}



function random(min, max) {
	return (Math.random() * (max - min) + min);
}
		
