'use strict';  //    
//var AFFICHE;AFFICHE = document.getElementById('AFFICHE');AFFICHE.innerHTML=0;
var score;var score1=99;var speed;
score = document.getElementById('score');
score.innerHTML=99;

speed = document.getElementById('speed');
speed.innerHTML=0;

/*
var sundegree=10;
var sunchange=0;
//var range3=0;
function showValue(newValue)
{sundegree=document.getElementById("range").innerHTML=newValue;//range2=newValue;
sunchange=1;
//range3 = document.getElementById("range3");range3.innerHTML=newValue;
}*/
var SUN=0;
var sunchange=0;
function SUN1(){SUN=1;sunchange=1;}
function SUN0(){SUN=0;sunchange=1;}
var SUNicon,MOONicon;
SUNicon= document.getElementById('SUNicon');SUNicon.style.width = SUNicon.style.height = 0 + 'px';
MOONicon= document.getElementById('MOONicon');MOONicon.style.width = MOONicon.style.height = 45 + 'px';




var FIRSTANM=0;

var ROTL=0;var ROTR=0;// MOTO INCLINISATION

var CABR1=0;var cab=0; //CABRER ACCELERATION
var DELTAY1=0;
var DELTAY2=0;
var ACTION=0;

/*TEST1 = document.getElementById('TEST1');
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
var root=0;var root1=0;//light cligneton

var START=0;var OFFF=0;var RESTART=0;var ANIMR=0;var anim=0;var RET=0;//
var STOPicon,RESTARTicon,STARTicon;
STOPicon= document.getElementById('STOPicon');STOPicon.style.width = STOPicon.style.height = 0 + 'px';
RESTARTicon= document.getElementById('RESTARTicon');RESTARTicon.style.width = RESTARTicon.style.height = 0 + 'px';
STARTicon= document.getElementById('STARTicon');

var MAP1,MAP2,MAP3,MAP4;
MAP1= document.getElementById('MAP1');MAP1.style.width = MAP1.style.height = 0 + 'px';
MAP2= document.getElementById('MAP2');MAP2.style.width = MAP2.style.height = 0 + 'px';
MAP3= document.getElementById('MAP3');MAP3.style.width = MAP3.style.height = 0 + 'px';
MAP4= document.getElementById('MAP4');MAP4.style.width = MAP4.style.height = 140 + 'px';

/*var compleetloading;
compleetloading= document.getElementById('compleetloading');
compleetloading.style.width = compleetloading.style.height = 90 + 'px';*/


START = document.getElementById('START');
var ENERGicon;ENERGicon= document.getElementById('ENERGicon');
ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
var ALRTn=0;var ALRTf=0;

var CAMX,CAMY,playerPOS,BOUSL,RAKAS,RAKAS2,RAKASGAS;var ENERGIE=600;var SPEEDC=1;var SPEEDC0=12;var SPEEDCM=0;//var LOADENERGS=0;
CAMX = document.getElementById('CAMX');CAMY = document.getElementById('CAMY');
CAMX.innerHTML=0;CAMY.innerHTML=0; 
playerPOS = document.getElementById('playerPOS');//document.getElementById("playerPOS").style.opacity=1;
BOUSL = document.getElementById('BOUSL');RAKAS = document.getElementById('RAKS');
//ENERG = document.getElementById('ENERG');
RAKAS2 = document.getElementById('RAKS2');
RAKASGAS  = document.getElementById('RAKASGAS');
document.getElementById("RAKAS2").style.transform = "rotate(-116deg)";
document.getElementById("RAKASGAS").style.transform = "rotate(102deg)";
var BON=0;var BON1=0;//var FRT =0;var KEY=0;var KEYSS=0;




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
var planeUPER=0;var UPER=0;var UPRR=0;var UPRR1=0;var UPRR3=0;var planeDOWN=-1;var DOWN=0;


var treesTOUCH=0;var TT=0;var TT1=0;

var boombTOUCH=0;var bb=0;
var buildingsTOUCH = 0;var STOPbuilding=0;var STOPbuilding2=0;








/*monsterPOS,DXXm,DYYm,DZZm;

var XX,YY,ZZ;
XX=0;YY=0;ZZ=-1;

DXXm=0.1;DYYm=0.1;DZZm=0.1;
var DELTAXm=6.5;//2.5;
var DELTAYm=6.5;//1.5;
var DELTAZm=6.5;

var XXm,YYm,ZZm;
XXm=70;YYm=30;ZZm=3;
var MX,MY;
MX = document.getElementById('MX');MY = document.getElementById('MY');
MX=0;MY=0;
monsterPOS = document.getElementById('monsterPOS');document.getElementById("monsterPOS").style.opacity=1;



var BOXEXPLOSE=0;
var bx=0;
var EXPx=0;
var EXPy=0;
var EXPz=0; 

var BOXEXPLOSE1=0;var bx1=0;


var EXPx1=0;
//var EXPy=0;
var EXPz1=0;
var BOMBED=0;
var SDOOR=0;
var d=0;  

var INSIDBOX;//INSIDBOX = document.getElementById('INSIDBOX');INSIDBOX.innerHTML=0;
var BULLETX,BULLETX2,BULLETX3,BULLETX4,BULLETX5;  

var KEY1,KEY2,KEY3;
KEY1 = document.getElementById('KEY1');document.getElementById("KEY1").style.opacity=0.3;
KEY2 = document.getElementById('KEY2');document.getElementById("KEY2").style.opacity=0.3;
KEY3 = document.getElementById('KEY3');document.getElementById("KEY3").style.opacity=0.3;*/






var CAR = new Audio('sounds/CAR.mp3');//CAR2
var CARACCE2 = new Audio('sounds/CAR.ACCELR.mp3');// CAR
var CARACCE = new Audio('sounds/CAR.ACCELR2.mp3');// MOTO

var CARSTOP = new Audio('sounds/ALERT1.mp3');
var CARBRAKE = new Audio('sounds/CARBRAKE.mp3');
var CARCRASH = new Audio('sounds/CARCRASH.mp3');
//var CAROFF = new Audio('sounds/CAROFF.mp3');
var CARMENU = new Audio('sounds/CAR.ACELR.MEN.mp3');

var BOUTTON = new Audio('sounds/BONUS.mp3');//BOUTTON
var BOUTTON1 = new Audio('sounds/BOUTTON1.mp3');
var HAHA = new Audio('sounds/HAHA.mp3');	
var CHANGE = new Audio('sounds/CHANGE.mp3');
var YEHAW = new Audio('sounds/YEHAW.mp3');
var EXPLOS1= new Audio('sounds/EXPLOS1.mp3');	
//var LOSE= new Audio('sounds/LOSE.mp3');	
var OFF= new Audio('sounds/OFF.mp3');
var ALERT= new Audio('sounds/ALERT.mp3');
//var BONUS= new Audio('sounds/BONUS.mp3');
var BONUS3= new Audio('sounds/BONUS3.mp3');


var VIBR=0;
var DROT=0;
/*
var YM1=-16;
var YM2=-16;
var YM3=-16;
var YM4=-16;
var YM5=-16;
var YM6=-16;
var YM7=-16;
var YM8=-16;
var YM9=-16;
var YM10=-16;	  

var BOXEXPLOSE3=0;var bx3=0;

var monsterWTOUCHED2=0;var rot=0;var rot1=0;
var BOXOUT=0;	 

var MONSTERFIRE=0;var MONS=0;
var MNX=0;var MNY=-30;var MNZ=0;  */
//var expKEY1=0;var expKEY2=0;var expKEY3=0;var EXPy2=0;	 

//var BEGINFOG=0;

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
    if ((evt.keyCode==38)&&(SPEEDC0>=1)){keys.forward=1;}//Z      
    if (evt.keyCode==40){keys.back=1;}     }//S
	
function handleKeyUp(evt){
    if (evt.keyCode==37){keys.left=0;}
    if (evt.keyCode==39){keys.right=0;}
    if (evt.keyCode==38){keys.forward=0;}//          ||(STOPbuilding2>0))
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


var CITY=14;	
function CITY1(){  CITY=1;BOUTTON1.play();MAP1.style.width = MAP1.style.height = 140 + 'px';
                    MAP2.style.width = MAP2.style.height = 0 + 'px'; 
					MAP3.style.width = MAP3.style.height = 0 + 'px';
					MAP4.style.width = MAP4.style.height = 0 + 'px';}
function CITY2(){  CITY=2;BOUTTON1.play();MAP1.style.width = MAP1.style.height = 0 + 'px';
                    MAP2.style.width = MAP2.style.height = 140 + 'px'; 
					MAP3.style.width = MAP3.style.height = 0 + 'px';
					MAP4.style.width = MAP4.style.height = 0 + 'px';}
function CITY3(){  CITY=3;BOUTTON1.play();MAP1.style.width = MAP1.style.height = 0 + 'px';
                    MAP2.style.width = MAP2.style.height = 0 + 'px'; 
					MAP3.style.width = MAP3.style.height = 140 + 'px';
					MAP4.style.width = MAP4.style.height = 0 + 'px';}
		
function CITY4(){  CITY=4;BOUTTON1.play();MAP1.style.width = MAP1.style.height = 0 + 'px';
                    MAP2.style.width = MAP2.style.height = 0 + 'px'; 
					MAP3.style.width = MAP3.style.height = 0 + 'px';
					MAP4.style.width = MAP4.style.height = 140 + 'px';}




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
var ROT3D=1;	
	// START & RESET GAME
function Startt()

{   BOUTTON.play();
    START+=1;ROT3D=0;
    if(START>1){START=0;}
  if(START==1){//&&(anim==0))
	           if(FIRSTANM==3){STOPicon.style.width = STOPicon.style.height = 60 + 'px';CAR.play();CAR.loop = true;
			                   STARTicon.style.width = STARTicon.style.height = 0 + 'px';OFFF=0;RESTART=0;
							   RESTARTicon.style.width = RESTARTicon.style.height = 60 + 'px';}
			   if(FIRSTANM==0){FIRSTANM=1;}
			   
			   }   
  if(START==0){STOPicon.style.width = STOPicon.style.height = 0 + 'px';CARACCE.volume=0.0;CARACCE2.volume=0.0;
               STARTicon.style.width = STARTicon.style.height = 60 + 'px';}//audioMOTORUN.pause();
	  
	  }

function restartt()    {RESTART=1;timer2 =0;minutes2.innerHTML = seconds2.innerHTML = "00";}


	  
/*	function ROTATION3D() {
    setInterval(function () {
	if (ROT3D==1){WALK++;}
    }, 100);
}
ROTATION3D();
	  
*/
	

var MOTTO=3; 

function MOTTO1(){  MOTTO=1;CARMENU.play();}
function MOTTO2(){  MOTTO=2;CARMENU.play();}
function MOTTO3(){  MOTTO=3;CARMENU.play();}


var CARRR=0;var chang=1; 

function CARR1(){  CARRR=1;chang=1;CARMENU.play();
                  /*RAW1.style.width = RAW1.style.height =
				  RAW2.style.width = RAW2.style.height = 
				  RAW3.style.width = RAW3.style.height = 0 + 'px';
				  
                  RAW4.style.width = RAW4.style.height = 
                  RAW5.style.width = RAW5.style.height =
				  RAW6.style.width = RAW6.style.height = 60 + 'px';*/
				  }
function CARR2(){  CARRR=2;chang=1;CARMENU.play();
                  /*RAW1.style.width = RAW1.style.height =
				  RAW2.style.width = RAW2.style.height = 
				  RAW3.style.width = RAW3.style.height = 60 + 'px';
				  
                  RAW4.style.width = RAW4.style.height = 
                  RAW5.style.width = RAW5.style.height =
				  RAW6.style.width = RAW6.style.height = 0 + 'px';*/
				  }
				  
	





var SMALLSCREEN=1;var BIGSCREEN=0;

function SmallScreen()
{   SMALLSCREEN=1;BIGSCREEN=0;}

function BigScreen()
{   SMALLSCREEN=0;BIGSCREEN=1;}
 


	  
function runDemo(canvasId) {
	var canvas = document.getElementById(canvasId);
	var engine = new BABYLON.Engine(canvas, true);
	
	// Création de la scène
	var scene = new BABYLON.Scene(engine);
	
	//scene.enablePhysics(new BABYLON.Vector3(0,-10,0), new BABYLON.OimoJSPlugin());
    scene.gravity = new BABYLON.Vector3(0, -0.1981, 0);
	
	//scene.enablePhysics(null,new BABYLON.CannonJSPlugin());
	//scene.setGravity(new BABYLON.Vector3(0,-10,0));
	
	scene.collisionsEnabled = true;
	
	// Ajout d'une caméra et de son contrôleur
//#################################################### CAM CONTROLER ########################################################################################
 //#################################################### CAM CONTROLER ########################################################################################
  //#################################################### CAM CONTROLER ########################################################################################
 //#################################################### CAM CONTROLER ########################################################################################
  //#################################################### CAM CONTROLER ######################################################################################## 
  //#################################################### CAM CONTROLER ########################################################################################
  
  var camera = new BABYLON.FreeCamera("MainCamera", new BABYLON.Vector3(-498, 15.5, 1554) , scene);//(96, 4.5, 540)
  //camera.position = new BABYLON.Vector3(40, 2, 470);(83, 0.5, 535)
  
  
		 
		 
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);//######################################
	//camera.applyGravity = true;
    camera.checkCollisions = true;
	camera.rotation.y=-Math.PI/2;
	
	camera.speed = 0.5;
	camera.angularSensibility = 1000;
	camera.rotation.y= -Math.PI/1.3;
	camera.rotation.x= Math.PI/11.6;

	//scene.activeCamera.attachControl(canvas);



	
		// create sensor mesh  - parent to  camera
/*	var camSensor = new BABYLON.Mesh.CreateBox("sensor", 1, scene);
	camSensor.material = new BABYLON.StandardMaterial("camMat", scene);
	camSensor.isVisible = false;
	camSensor.material.wireframe = true;
	camSensor.scaling = new BABYLON.Vector3(.01, .01, .01);
	camSensor.position = new BABYLON.Vector3(0, .005, 0);
	camSensor.parent = camera;*/
//###################### LIGHT  #############################################
//###################### LIGHT  #############################################
//###################### LIGHT  #############################################
/*	var light = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(0, 400, 90), scene);
	light.diffuse = new BABYLON.Color3(1, 1, 1);
	light.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
	light.intensity = 1.5;//5.5;
	
	var lightOUT = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(550, 150, 0), scene);
	lightOUT.diffuse = new BABYLON.Color3(1, 1, 1);
	lightOUT.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
	lightOUT.intensity = 0.5;//3.5; */
	
	/*var lightOUT2 = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(300, 50, 0), scene);
	lightOUT2.diffuse = new BABYLON.Color3(1, 1, 1);
	lightOUT2.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
	lightOUT2.intensity = 1.5;*/

	
	var LIGHTmov = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(300, 50, 0), scene);
	LIGHTmov.diffuse = new BABYLON.Color3(1, 1, 1);
	LIGHTmov.specular = new BABYLON.Color3(0.0, 0.0, 0.0);
	LIGHTmov.intensity = 1.5;//1.2   0.17
	
	
	
	//document.addEventListener("contextmenu", function (e) { e.preventDefault();	}); // STARS
	

	createSkybox(scene);
	createDemoScene(scene);

//########################################### MATERIALS ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################   
   /*        var fireMaterial = new BABYLON.StandardMaterial("FIRE.MAT", scene);
            var fireTexture = new BABYLON.FireProceduralTexture("fire", 256, scene); //256
            fireMaterial.diffuseTexture = fireTexture;
            fireMaterial.opacityTexture = fireTexture;
			fireMaterial.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
*/
	
	

	
	

			
            var groundMaterialSTREET = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSTREET.diffuseTexture = new BABYLON.Texture("img_game/S1.jpg", scene);// S1 ground1 snow ground4,snow.
			groundMaterialSTREET.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSTREET.diffuseTexture.uScale = 900;//36
            groundMaterialSTREET.diffuseTexture.vScale = 900;//20

            var groundMaterialSTREETINE = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSTREETINE.diffuseTexture = new BABYLON.Texture("img_game/ground1.jpg", scene);// ground1 snow ground4,snow.
			groundMaterialSTREETINE.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSTREETINE.diffuseTexture.uScale = 900;//36
            groundMaterialSTREETINE.diffuseTexture.vScale = 900;//20		

            var groundMaterialSTREETINE2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSTREETINE2.diffuseTexture = new BABYLON.Texture("img_game/S2.jpg", scene);//S2  ground1 snow ground4,snow.
			groundMaterialSTREETINE2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSTREETINE2.diffuseTexture.uScale = 900;//36
            groundMaterialSTREETINE2.diffuseTexture.vScale = 900;//20					
			
			
            var groundMaterialROCK = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK.diffuseTexture = new BABYLON.Texture("img_game/rock.jpg", scene);// ground1 snow ground4,snow.
			groundMaterialROCK.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK.diffuseTexture.uScale = 46;//46;//36
            groundMaterialROCK.diffuseTexture.vScale = 50;//50;//20	

            var groundMaterialROCK2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK2.diffuseTexture = new BABYLON.Texture("img_game/rock2.jpg", scene);//rock2 ground1 snow ground4,snow.
			groundMaterialROCK2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK2.diffuseTexture.uScale = 46;//36
            groundMaterialROCK2.diffuseTexture.vScale = 50;//20

            var groundMaterialROCK3 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK3.diffuseTexture = new BABYLON.Texture("img_game/rock3.jpg", scene);// ground1 snow ground4,snow.
			groundMaterialROCK3.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK3.diffuseTexture.uScale = 46;//36
            groundMaterialROCK3.diffuseTexture.vScale = 50;//20		

            var groundMaterialROCK4 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK4.diffuseTexture = new BABYLON.Texture("img_game/rock4.jpg", scene);// ground1 snow ground4,snow.
			groundMaterialROCK4.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK4.diffuseTexture.uScale = 46;//36
            groundMaterialROCK4.diffuseTexture.vScale = 50;//20					

            var groundMaterialGRASS = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialGRASS.diffuseTexture = new BABYLON.Texture("img_game/ground.jpg", scene);// snow ground4,snow.
			groundMaterialGRASS.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialGRASS.diffuseTexture.uScale = 146;//36
            groundMaterialGRASS.diffuseTexture.vScale = 150;//20
			
            var groundMaterialSAHARA = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSAHARA.diffuseTexture = new BABYLON.Texture("img_game/ground2.jpg", scene);//SAHRA
			groundMaterialSAHARA.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSAHARA.diffuseTexture.uScale = 146;//36
            groundMaterialSAHARA.diffuseTexture.vScale = 150;//20
			
			var groundMaterialSNOW = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSNOW.diffuseTexture = new BABYLON.Texture("img_game/snow.jpg", scene);//ground1
			groundMaterialSNOW.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSNOW.diffuseTexture.uScale = 146;//36
            groundMaterialSNOW.diffuseTexture.vScale = 150;//20
			
	      var groundMaterialWATER = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialWATER.diffuseTexture = new BABYLON.Texture("img_game/WATER.jpg", scene);//water snow 
			groundMaterialWATER.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER.diffuseTexture.uScale = 146;//36   146
            groundMaterialWATER.diffuseTexture.vScale = 150;//20   150


	// Ground UP


	
	
	       var groundMEGA = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPMOTO.jpg", 10000, 10000, 200, 0, 85.5, scene, false);//85.5
			groundMEGA.position = new BABYLON.Vector3(0,-1.7,0);//0,-1.5,0);
			groundMEGA.visibility=0;
            groundMEGA.material = groundMaterialSNOW;//groundMaterialGRASS;		
		   var groundMEGAR = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPMOTOB.jpg", 10000, 10000, 200, 0, 450.5, scene, false);//1,MAPGARDEN
            groundMEGAR.position = new BABYLON.Vector3(0,-5.0,0);
			groundMEGAR.material = groundMaterialROCK2;
			groundMEGAR.visibility=0;
	
	       var groundMEGA2 = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPMOTO1.jpg", 10000, 10000, 200, 0, 65.5, scene, false);//65.5
			groundMEGA2.position = new BABYLON.Vector3(0,-1.7,0);//0,-1.5,0);
			groundMEGA2.visibility=0;
            groundMEGA2.material = groundMaterialGRASS;		
		   var groundMEGAR2 = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPMOTOB1.jpg", 10000, 10000, 200, 0, 450.5, scene, false);//1,MAPGARDEN
            groundMEGAR2.position = new BABYLON.Vector3(0,-5.0,0);
			groundMEGAR2.material = groundMaterialROCK;
			groundMEGAR2.visibility=0;	
	
	       var groundMEGA3 = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPMOTO2.jpg", 10000, 10000, 200, 0, 85.5, scene, false);//1, 2.5
			groundMEGA3.position = new BABYLON.Vector3(0,-1.7,0);//0,-1.5,0);
			groundMEGA3.visibility=0;
            groundMEGA3.material = groundMaterialSAHARA;	
		   var groundMEGAR3 = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPMOTOB2.jpg", 10000, 10000, 200, 0, 450.5, scene, false);//1,MAPGARDEN
            groundMEGAR3.position = new BABYLON.Vector3(0,-10.0,0);
			groundMEGAR3.material = groundMaterialROCK3;
			groundMEGAR3.visibility=0;	
			
	       var groundMEGA4 = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPMOTO3.jpg", 10000, 10000, 200, 0, 
		   10.5, scene, false);//1, 2.5
			groundMEGA4.position = new BABYLON.Vector3(0,-1.7,0);//0,-1.5,0);
			groundMEGA4.visibility=1;
            groundMEGA4.material = groundMaterialSAHARA;

		   var groundMEGAR4 = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPMOTOB1.jpg", 10000, 10000, 200, 0, 450.5, scene, false);//1,MAPGARDEN
            groundMEGAR4.position = new BABYLON.Vector3(0,-10.0,0);
			groundMEGAR4.material = groundMaterialROCK4;
			groundMEGAR4.visibility=1;			
	
	
	
	      var groundMEGAWATER = BABYLON.Mesh.CreatePlane("groundGRASS",30000, scene, false);//1,MAPGARDEN
		      groundMEGAWATER.rotation.x = Math.PI / 2;
              groundMEGAWATER.position = new BABYLON.Vector3(0,5.0,0);//-1(0,5.0,0);
			  groundMEGAWATER.material = groundMaterialWATER;
			  groundMEGAWATER.visibility=1;	

				  
	
	var groundGRBIG = BABYLON.Mesh.CreatePlane("groundSTREET", 10000, scene);
	groundGRBIG.rotation.x = Math.PI / 2;
	/*groundGRBIG.material = new BABYLON.StandardMaterial("gMaterial", scene);
	groundGRBIG.material.diffuseTexture = new BABYLON.Texture("img_game/ground1.jpg", scene);
	groundGRBIG.material.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	groundGRBIG.material.diffuseTexture.uScale = 900;
	groundGRBIG.material.diffuseTexture.vScale = 900;*/
	groundGRBIG.position = new BABYLON.Vector3(0,0,0);
	groundGRBIG.checkCollisions = true;
	//groundGRBIG.setPhysicsState({ impostor: BABYLON.PhysicsEngine.PlaneImpostor, move:false});	   
	
	
			var sun = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(60, 100, 10), scene);
// Water
          BABYLON.Engine.ShadersRepository = ""; 
		 //BABYLON.Engine.ShadersRepository = "/Babylon/Shaders/";
		 // BABYLON.Engine.ShadersRepository = "";
         //var water = BABYLON.Mesh.CreateGround("water", 30000, 30000, 1, scene, false);
		 var water = BABYLON.Mesh.CreatePlane("water", 30000, scene, false);
		 water.rotation.x = Math.PI / 2;
		 //var water = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPRIVER2.jpg", 30000, 30000, 300, 2, 4.5, scene, false);
		 water.position = new BABYLON.Vector3(0,8.1,0);
         var waterMaterial = new WaterMaterial("water", scene, sun);
         waterMaterial.refractionTexture.renderList.push(groundMEGAWATER);
		 waterMaterial.refractionTexture.renderList.push(groundMEGAR4);
		 waterMaterial.refractionTexture.renderList.push(groundMEGA4);
		 waterMaterial.reflectionTexture.renderList.push(groundMEGAWATER);
         water.material = waterMaterial;
         water.visibility=1;
        //water.infiniteDistance = true;

		

//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################			

	/*	 var spriteManagerTreess = new BABYLON.SpriteManager("treesManager", "img_game/AR1.png", 270, 360, scene);//AR2;AR3.AR0
	for (var i = 0; i < 24; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess);
		trees.size = 30;
		//var PORTtrees = BABYLON.Mesh.CreateCylinder("BAREL", 35, 35, 23, 4, scene);
		
		
		if(i<12){trees.position = new BABYLON.Vector3(340*(i)-2700,12,2180);}
		if(i>=12){trees.position = new BABYLON.Vector3(340*(i)-6400,12,2370);}
				
		}	
		
	for (var i = 0; i < 52; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess);trees.size = 30;
		if(i<27){trees.position = new BABYLON.Vector3(340*(i)-4700,12,-4589);}
		if(i>=27){trees.position = new BABYLON.Vector3(340*(i)-13920,12,-4416);}}	
		
	for (var i = 0; i < 50; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess);trees.size = 30;
		if(i<27){trees.position = new BABYLON.Vector3(340*(i)-4650,12,4650);}
		if(i>=27){trees.position = new BABYLON.Vector3(340*(i)-13320,12,4490);}}	
			

			*/
			
			
    //####################################### THE BOXS GAME
	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAMe
	
	/*
	var BAREL2 = new BABYLON.StandardMaterial("BAREl", scene);
	BAREL2.diffuseTexture = new BABYLON.Texture("img_game/BA2.jpg", scene);
    BAREL2.bumpTexture = new BABYLON.Texture("img_game/BA2N.jpg", scene);	
	BAREL2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	
	var boxMaterial = new BABYLON.StandardMaterial("bMaterial", scene);
	boxMaterial.diffuseTexture = new BABYLON.Texture("img_game/box.jpg", scene);
	boxMaterial.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0); //box.BARELBOMBS = "BOMB";
	
		var xxx;var yyy;//130;570:130;380               -130:380     -130:570
	for (var i = 0; i < 90; i++) {
		yyy = random(-800, 800); 
		
		if(i<=30) {    
		xxx = random(-1200, -130);
		if(i<=10){var box = BABYLON.Mesh.CreateBox("box1", 5, scene);box.material = boxMaterial;}   
	    if((i<20)&&(i>10)){var box = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene);box.material = BAREL2;}
		if(i>=20){var box = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene);box.material = BARELM;}
		box.position = new BABYLON.Vector3(xxx, 3 , yyy);
	if   ( (i % 3 == 0)&&(i>10)) {box.rotation.x=Math.PI/2;box.position.y =2.1; }       }
	

		if(i>30) {
		xxx = random(130, 1200);
		if(i<=50){var box = BABYLON.Mesh.CreateBox("box1", 5, scene); box.material = boxMaterial;}
		if(i>=70){var box = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene);box.material = BARELM;}
		if((i<70)&&(i>50)){var box = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene); box.material = BAREL2;}
		box.position = new BABYLON.Vector3(xxx, 2.6 , yyy);
	   if   ( (i % 3 == 0)&&(i>50)) {box.rotation.x=Math.PI/2;box.position.y =2.5; } 	}		

		box.BARELBOMBS = "BOMB";	
		box.checkCollisions=true;} 
		
		*/

		
				scene.fogMode = BABYLON.Scene.FOGMODE_EXP;//;BABYLON.Scene.FOGMODE_EXP;BABYLON.Scene.FOGMODE_EXP2;BABYLON.Scene.FOGMODE_LINEAR
	    scene.fogDensity = 0;
	    scene.fogColor = new BABYLON.Color3(0,0, 0);
	

	 var FIREM = new BABYLON.StandardMaterial("texture1", scene);
     FIREM.diffuseTexture = new BABYLON.Texture("img_game/Z3.jpg", scene);
	 FIREM.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 FIREM.diffuseTexture.uScale = 2;		

		
		var RAWSS1 = BABYLON.Mesh.CreateTorus("torus", 299, 75, 9, scene, false); // QUAWSSA ENTRANCE ROCK  STREET STAGE
		 RAWSS1.material = FIREM;
		 RAWSS1.rotation.x = Math.PI/2;
		 RAWSS1.rotation.y = Math.PI/4;
		 RAWSS1.position = new BABYLON.Vector3(-690, 7, 1377);
			
		/*var RAWSS2 = RAWSS1.clone(RAWSS1);
         RAWSS2.rotation.y = Math.PI/7;		
		//RAWSS2.material = FIREM2;
		RAWSS2.position = new BABYLON.Vector3(3390, 8, -23);
		
		var RAWSS3 = RAWSS1.clone(RAWSS1);
          RAWSS3.rotation.y = Math.PI/3;		
		//RAWSS3.material = FIREM2;
		RAWSS3.position = new BABYLON.Vector3(88, 8, -3990);*/
		 
	

	var RAWS = BABYLON.Mesh.CreateBox("torus", 75, scene);
	     //RAWS.scaling = new BABYLON.Vector3(1, 1, 1);
         RAWS.tagUPQQ = "UP";RAWS.visibility = 0;
	     RAWS.checkCollisions = true; 
		 RAWS.position = new BABYLON.Vector3(-690, 7, 1377);
 
	var spriteManagerENERG = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/ENERG.png", 10, 60, scene);
	var LOADENERG = new BABYLON.Sprite("BOMB", spriteManagerENERG);LOADENERG.size = 30; 
	LOADENERG.position = new BABYLON.Vector3(-690, 13, 1377);
	
	
	/*var KAVE = BABYLON.Mesh.CreateTorus("torus", 299, 75, 9, scene, false); // QUAWSSA ENTRANCE ROCK  STREET STAGE
		 KAVE.material = groundMaterialROCK;
		 KAVE.scaling = new BABYLON.Vector3(1, 60, 1);
		 KAVE.rotation.x = Math.PI/2;
		 KAVE.rotation.y = Math.PI/2.7;
		 KAVE.position = new BABYLON.Vector3(-206, 4, -685);
			
		
	
	var groundGRBIG = BABYLON.Mesh.CreatePlane("groundSTREET", 4010, scene);
	groundGRBIG.rotation.x = Math.PI / 2;
	groundGRBIG.material = new BABYLON.StandardMaterial("gMaterial", scene);
	groundGRBIG.material.diffuseTexture = new BABYLON.Texture("img_game/W2.jpg", scene);//STREET W2 S2 8 street7ground1,ground2;street2:W2;
	groundGRBIG.material.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	groundGRBIG.material.diffuseTexture.uScale = 400;
	groundGRBIG.material.diffuseTexture.vScale = 400;
	groundGRBIG.position = new BABYLON.Vector3(0,0,0);
	groundGRBIG.checkCollisions = true;
	groundGRBIG.setPhysicsState({ impostor: BABYLON.PhysicsEngine.BoxImpostor, move:false});
	
	
	var groundG = BABYLON.Mesh.CreatePlane("groundSTREET", 4000, scene);
	groundG.position = new BABYLON.Vector3(0, 1 , 0);
	groundG.scaling = new BABYLON.Vector3(1, 1.0 , 0.0001);
	groundG.rotation.x = Math.PI / 2;
	groundG.checkCollisions = true;
	groundG.setPhysicsState({ impostor: BABYLON.PhysicsEngine.BoxImpostor, move:false});
	
		
		var box11 = BABYLON.Mesh.CreateBox("BAREL", 10, scene);
	box11.material = BARELM;
	box11.position = new BABYLON.Vector3(34, 3.6 , 513);
	box11.checkCollisions = true;
	//box11.setPhysicsState({impostor:BABYLON.PhysicsEngine.BoxImpostor, move:true, mass:1, friction:0.5, restitution:0.5});
	box11.setPhysicsState({ impostor : BABYLON.PhysicsEngine.BoxImpostor, friction : 0.5 , mass: 10, restitution : 0.7});

	
	var box12 = BABYLON.Mesh.CreateBox("BAREL", 10, scene);
	box12.material = BARELM;
	box12.position = new BABYLON.Vector3(64, 1.6 , 513);
	//box12.checkCollisions = true;
	box12.setPhysicsState({ impostor: BABYLON.PhysicsEngine.BoxImpostor, move:false});
	
*/
	
			
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	

		
		 // 549, 2.5, 1395
	  
		var PLANE = BABYLON.Mesh.CreateBox("torus", 2.2, scene, false);// BIG BODY
		//var PLANE = BABYLON.Mesh.CreateSphere("torus", 11, 11, scene, false);
		 PLANE.position = new BABYLON.Vector3(-506, 12.5, 1547);//(512, 2.5, 1380)  (549, 2.5, 1395)  (-18, 2, 470)    (115, 7, 530)   (113, 7, 540) 
		 PLANE.visibility=0;
         PLANE.rotation.z = Math.PI/30;	//Math.PI/30;
         PLANE.rotation.y=Math.PI/1.15;
         //PLANE.checkCollisions = true;		 
		// PLANE.setPhysicsState({impostor:BABYLON.PhysicsEngine.BoxImpostor, move:true, mass:1, friction:0.5, restitution:0.5});
		 //box11.setPhysicsState({ impostor : BABYLON.PhysicsEngine.BoxImpostor, friction : 0.5 , mass: 10, restitution : 0.7});


		 
	 //var META1 = new BABYLON.StandardMaterial("texture1", scene);
     //META1.diffuseTexture = new BABYLON.Texture("img_game/LIBN.jpg", scene);//MET1
	 //META1.bumpTexture = new BABYLON.Texture("img_game/NORM1.jpg", scene);
	 //META1.emissiveColor = new BABYLON.Color3(0.0, 0.0, 1.0 );
	 

	 
// ######################## MOTO RAW #################################3	 
	var materialRAWL = new BABYLON.StandardMaterial("ARROW", scene);
    materialRAWL.diffuseTexture = new BABYLON.Texture("img_game/ROU1.jpg", scene);//F2
	materialRAWL.bumpTexture = new BABYLON.Texture("img_game/NORM1.jpg", scene);
   // materialRAW.diffuseTexture.hasAlpha = true;//materialRAW.emissiveColor = new BABYLON.Color3(0, 0, 0);
   // materialRAW.backFaceCulling = false; 	
	
    var RAWDL1 = BABYLON.Mesh.CreateTorus("torus", 3, 1.5, 30, scene, false);
	     RAWDL1.rotation.x = Math.PI/2;
		 RAWDL1.material = materialRAWL;//rawmat;
		 RAWDL1.position = new BABYLON.Vector3(-2.68, -0.7, 0.0);//(-2.7, -0.82, 0.0);
         RAWDL1.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);		 
         RAWDL1.parent = PLANE;

    var RAWDL2 = RAWDL1.clone(RAWDL1);	
		 RAWDL2.position = new BABYLON.Vector3(2.7, -1.39, 0.0);	//(2.6, -1.22, 0.0);		 
         RAWDL2.parent = PLANE;	
		 
// ########################## TAKAIA RAW ######################################
    var RAWDLM1 = BABYLON.Mesh.CreateTorus("torus", 2, 0.75, 15, scene, false);//4, 1.5, 30
	     RAWDLM1.rotation.x = Math.PI/2;
		 RAWDLM1.material = materialRAWL;
		 RAWDLM1.position = new BABYLON.Vector3(-3.1, -0.4, -1.99);// AR RIGHT
         RAWDLM1.scaling = new BABYLON.Vector3(0.65, 2.3, 0.65);		 
         RAWDLM1.parent = PLANE;		 
	var RAWDLM2 = RAWDLM1.clone(RAWDLM1);	
		 RAWDLM2.position = new BABYLON.Vector3(-3.1, -0.4, 1.99);//// AR LEFT	 
         RAWDLM2.parent = PLANE;				 
	var RAWDLM3 = RAWDLM1.clone(RAWDLM1);	
		 RAWDLM3.position = new BABYLON.Vector3(2.9, -0.7, -1.9);// AV RIGHT	 	 
         RAWDLM3.parent = PLANE;			 
	var RAWDLM4 = RAWDLM1.clone(RAWDLM1);	
		 RAWDLM4.position = new BABYLON.Vector3(2.9, -0.7, 1.9);// AV LEFT	
         RAWDLM4.parent = PLANE;
   RAWDLM1.visibility=RAWDLM2.visibility=RAWDLM3.visibility=RAWDLM4.visibility = 0;	

   
   
   
   
   
   
   
 	//####################  LIGHT CAR #####################################
	//####################  LIGHT CAR #####################################
	//####################  LIGHT CAR #####################################
	var dawmatYF = new BABYLON.StandardMaterial("texture1", scene);//YELLOW
	dawmatYF.diffuseTexture = new BABYLON.Texture("img_game/LIYF.jpg", scene);
	
	var dawmat2N = new BABYLON.StandardMaterial("texture1", scene);//BLUE
	dawmat2N.diffuseTexture = new BABYLON.Texture("img_game/LIBF.jpg", scene);//A17.png   LIBF.jpg
	//dawmat2N.alpha = 0.5;
	var dawmat2F = new BABYLON.StandardMaterial("texture1", scene);//BLUE
	dawmat2F.diffuseTexture = new BABYLON.Texture("img_game/LIBN.jpg", scene);
	
	var materialDAW = new BABYLON.StandardMaterial("ARROW", scene);
    materialDAW.diffuseTexture = new BABYLON.Texture("img_game/F3.jpg", scene);//F2
	var materialDAW2 = new BABYLON.StandardMaterial("ARROW", scene);
    materialDAW2.diffuseTexture = new BABYLON.Texture("img_game/A17.png", scene);//F2
			
	var dawmatR = new BABYLON.StandardMaterial("texture1", scene);//RED
	dawmatR.diffuseTexture = new BABYLON.Texture("img_game/LIR.jpg", scene);
	


	var DAW = BABYLON.Mesh.CreateBox("torus",0.3, scene, false);// TROFISR RIGHT CARCACA OUT BLACK
		 DAW.material = materialDAW;
		 DAW.position = new BABYLON.Vector3(2.53, 0.85, -2.58);
		 DAW.scaling = new BABYLON.Vector3(0.5, 1.1, 2.6);
         DAW.parent = PLANE;		 
	var DAW1 = BABYLON.Mesh.CreateBox("torus",0.3, scene, false);// TROFISR RIGHT CARCACA INSD WHITE
		 DAW1.material = materialDAW2;
		 DAW1.position = new BABYLON.Vector3(2.4, 0.85, -2.61);
		 DAW1.scaling = new BABYLON.Vector3(0.3, 1.0, 2.4);
         DAW1.parent = PLANE;

   	var DAWOSUP= DAW.clone(DAW);
	DAWOSUP.position = new BABYLON.Vector3(2.53, 0.75, -2.0);  // TROFISR SUPORT
	     DAWOSUP.rotation.x = Math.PI/8;
		 DAWOSUP.parent = PLANE;    
	var DAWO= DAW.clone(DAW);
	DAWO.position = new BABYLON.Vector3(2.53, 0.85, 2.5);//AWO.parent = PLANE;	

		 
	var DAW2 = DAW1.clone(DAW1);
	DAW2.position = new BABYLON.Vector3(2.4, 0.85, 2.61);
		 DAW2.parent = PLANE;
		 
	var DAWOSUP2 = DAWOSUP.clone(DAWOSUP);
	DAWOSUP2.position = new BABYLON.Vector3(2.5, 0.75, 2);
	     DAWOSUP2.rotation.x = -Math.PI/8;
		 DAWOSUP2.parent = PLANE;
		 
		 
	var DAWL1 = BABYLON.Mesh.CreateBox("torus",0.2, scene, false);
		 DAWL1.material = dawmatYF;// TROFISR YELLOW;
		 DAWL1.position = new BABYLON.Vector3(2.5, 0.99, -2.6);
		 DAWL1.scaling = new BABYLON.Vector3(0.2, 1.0, 3.3);
         DAWL1.parent = PLANE;
	var DAWR1= DAWL1.clone(DAWL1);
	DAWR1.position = new BABYLON.Vector3(2.5, 0.99, 2.6);
		 DAWR1.parent = PLANE;
		 
	var DAWL1N = BABYLON.Mesh.CreateBox("torus",0.2, scene, false);
		 DAWL1N.material = dawmatR;// TROFISR YELLOW ON RED;
		 DAWL1N.position = new BABYLON.Vector3(2.5, 0.99, 2.6);
		 DAWL1N.scaling = new BABYLON.Vector3(0.2, 1.0, 3.3);
         DAWL1N.parent = PLANE;
		 
		var DAWR1N= DAWL1N.clone(DAWL1N);
	    DAWR1N.position = new BABYLON.Vector3(2.5, 0.99, -2.6);
		 DAWR1N.parent = PLANE;
		 DAWL1N.visibility = DAWR1N.visibility = 0;  	
	
  DAW.visibility=DAW1.visibility=DAWO.visibility=DAW2.visibility=DAWOSUP.visibility=DAWOSUP2.visibility=  0; 			 
	DAWL1N.visibility = DAWR1N.visibility = 0;
	DAWL1.visibility = DAWR1.visibility = 0;
   
   
   /*
   	var DAW = BABYLON.Mesh.CreateBox("torus",0.4, scene, false);// TROFISR RIGHT CARCACA OUT BLACK
		 DAW.material = materialDAW;
		 DAW.position = new BABYLON.Vector3(2.53, 0.85, -2.28);
		 DAW.scaling = new BABYLON.Vector3(1.0, 1.1, 2.6);
         DAW.parent = PLANE;		 
	var DAW1 = BABYLON.Mesh.CreateBox("torus",0.4, scene, false);// TROFISR RIGHT CARCACA INSD WHITE
		 DAW1.material = materialDAW2;
		 DAW1.position = new BABYLON.Vector3(2.5, 0.85, -2.31);
		 DAW1.scaling = new BABYLON.Vector3(1.0, 1.0, 2.4);
         DAW1.parent = PLANE;

   	var DAWOSUP= DAW.clone(DAW);
	DAWOSUP.position = new BABYLON.Vector3(2.53, 0.65, -1.38);  // TROFISR SUPORT
	     DAWOSUP.rotation.x = Math.PI/8;
		 DAWOSUP.parent = PLANE;			 
	
	var DAWO= DAW.clone(DAW);
	DAWO.position = new BABYLON.Vector3(2.53, 0.85, 2.28);
		 DAWO.parent = PLANE;	

		 
	var DAW2 = DAW1.clone(DAW1);
	DAW2.position = new BABYLON.Vector3(2.5, 0.85, 2.31);
		 DAW2.parent = PLANE;
		 
	var DAWOSUP2 = DAWOSUP.clone(DAWOSUP);
	DAWOSUP2.position = new BABYLON.Vector3(2.5, 0.65, 1.38);
	     DAWOSUP2.rotation.x = -Math.PI/8;
		 DAWOSUP2.parent = PLANE;
		 
		 
	var DAWL1 = BABYLON.Mesh.CreateBox("torus",0.3, scene, false);
		 DAWL1.material = dawmatYF;// TROFISR YELLOW;
		 DAWL1.position = new BABYLON.Vector3(2.5, 0.99, -2.3);
		 DAWL1.scaling = new BABYLON.Vector3(0.5, 1.0, 3.3);
         DAWL1.parent = PLANE;
	var DAWR1= DAWL1.clone(DAWL1);
	DAWR1.position = new BABYLON.Vector3(2.5, 0.99, 2.3);
		 DAWR1.parent = PLANE;
		 
	var DAWL1N = BABYLON.Mesh.CreateBox("torus",0.3, scene, false);
		 DAWL1N.material = dawmatR;// TROFISR YELLOW ON RED;
		 DAWL1N.position = new BABYLON.Vector3(2.5, 0.99, -2.3);
		 DAWL1N.scaling = new BABYLON.Vector3(0.5, 1.0, 3.3);
         DAWL1N.parent = PLANE;
		 
		var DAWR1N= DAWL1N.clone(DAWL1N);
	    DAWR1N.position = new BABYLON.Vector3(2.5, 0.99, 2.3);
		 DAWR1N.parent = PLANE;
		 
		 DAWL1N.visibility = DAWR1N.visibility = 1;  */

   
   
	
	
	
	
	
		var DAILDORSNN = BABYLON.Mesh.CreateSphere("BAREL", 10, 0.16, scene); // RED EYES START
		 DAILDORSNN.material = dawmatR;//fireMaterial;//
		 DAILDORSNN.position = new BABYLON.Vector3(-4.9, 0.77, 0.12);
         DAILDORSNN.parent = PLANE;
		 
	     var DAILDORSNN2 = DAILDORSNN.clone(DAILDORSNN);
		 DAILDORSNN2.position = new BABYLON.Vector3(-4.9, 0.75, -0.11);
         DAILDORSNN2.parent = PLANE;
		 DAILDORSNN.visibility=DAILDORSNN2.visibility=0;   
//#########################################################################				 
		 
	var materialRAW = new BABYLON.StandardMaterial("ARROW", scene);
    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW0.png", scene);//RAW6
    materialRAW.diffuseTexture.hasAlpha = true;//materialRAW.emissiveColor = new BABYLON.Color3(0, 0, 0);
    materialRAW.backFaceCulling = false; 	
	
	var RAWD1 = BABYLON.Mesh.CreatePlane("ARROW.UP", 5, scene);
		 RAWD1.material = materialRAW;//rawmat;
		 RAWD1.scaling = new BABYLON.Vector3(0.3, 0.3, 0.04);
		 RAWD1.position = new BABYLON.Vector3(2.7, -1.4, 0.4);		 
         RAWD1.parent = PLANE;		 
	var RAWD2 = RAWD1.clone(RAWD1);	
		 RAWD2.position = new BABYLON.Vector3(2.7, -1.4, -0.4);		 
         RAWD2.parent = PLANE;		 
	var RAWD3 = RAWD1.clone(RAWD1);	
		 RAWD3.position = new BABYLON.Vector3(-2.7, -0.7, 0.4);	 
         RAWD3.parent = PLANE;	
		 RAWD3.rotation.y = -Math.PI;	 
	var RAWD4 = RAWD1.clone(RAWD1);	
		 RAWD4.position = new BABYLON.Vector3(-2.7, -0.7, -0.4);	 
         RAWD4.parent = PLANE;	
		 
	RAWD1.rotation.y = -Math.PI;

 


	
	
	
	

	var dawmat2N = new BABYLON.StandardMaterial("texture1", scene);//BLUE
	dawmat2N.diffuseTexture = new BABYLON.Texture("img_game/LIBF.jpg", scene);
	var dawmat2F = new BABYLON.StandardMaterial("texture1", scene);//BLUE
	dawmat2F.diffuseTexture = new BABYLON.Texture("img_game/LIBN.jpg", scene);
	

		 
	var DAILDORSF = BABYLON.Mesh.CreateSphere("torus",1,0.7, scene, false);//BLUE LIGHT
	     DAILDORSF.scaling = new BABYLON.Vector3(1.0, 0.2, 1.0);
		 DAILDORSF.material = dawmat2F;
		 DAILDORSF.position = new BABYLON.Vector3(-3.32, 1.35, 0.03);//((-3.31, 1.55, 0.05) -2.4, 1.3, -1.9);(-1.5, 1.3, -2.8)
         DAILDORSF.parent = PLANE;
		 
	var DAILDORSN = BABYLON.Mesh.CreateSphere("torus",1,0.7, scene, false);//BLUE DARK 
	     DAILDORSN.scaling = new BABYLON.Vector3(1.0, 0.2, 1.0);
		 DAILDORSN.material = dawmat2N;
		 DAILDORSN.position = new BABYLON.Vector3(-3.32, 1.35, 0.03);//(-2.4, 1.3, -1.9);(-1.5, 1.3, -2.8)
         DAILDORSN.parent = PLANE;

var MONST = BABYLON.Mesh.CreateSphere("torus", 1,0.001, scene);
MONST.position = new BABYLON.Vector3(83, 0.5, 535);MONST.rotation.y=1.14159;		 


	var MONSTER00 = BABYLON.SceneLoader.ImportMesh("","./", "MOTO1SRAWDS1.babylon", scene, function (newMeshes,partycleSystems) {
	MONSTER00=newMeshes[0];/*MONSTER0.position = new BABYLON.Vector3(83, 6.5, -535);*/
	//MONSTER00.rotation.x=0;	
	MONSTER00.position = new BABYLON.Vector3(0, 0.0, 0);
	MONSTER00.rotation.y=1.58;
	MONSTER00.rotate(BABYLON.Axis.X, 0.111, BABYLON.Space.LOCAL);
	MONSTER00.parent = PLANE;}); 


	var MONSTER000= BABYLON.SceneLoader.ImportMesh("","./", "TAKAIA1.babylon", scene, function (newMeshes,partycleSystems) {//TAKAIA1
	MONSTER000=newMeshes[0];	
	MONSTER000.position = new BABYLON.Vector3(0, -1.0, 0);
	MONSTER000.scaling = new BABYLON.Vector3(0.06, 0.06, 0.06);
	MONSTER000.rotation.y=1.58;
	MONSTER000.rotate(BABYLON.Axis.X, 0.111, BABYLON.Space.LOCAL);
	MONSTER000.checkCollisions = true;
	MONSTER000.visibility = 0;
	MONSTER000.parent = PLANE;}); 	


	canvas.addEventListener("mousedown", function (e) {
	         if(SPEEDC>=11){planeUPER=1;}
	              });  


//	PLANE.scaling = new BABYLON.Vector3(2.0, 2.0, 2.0);
//var CITY = BABYLON.SceneLoader.ImportMesh("","./", "CITY3.babylon", scene, function (newMeshes,partycleSystems) {CITY=newMeshes[0];CITY.position = new BABYLON.Vector3(0, -1112.5, 0);CITY.scaling = new BABYLON.Vector3(1000, 1000, 1000);CITY.rotation.y=1.2;}); //-1.96159;


	scene.registerBeforeRender(function () {
		//if (    ( (PLANE.intersectsMesh(TAL1W, false))||(PLANE.intersectsMesh(TAL2W, false)) ||(PLANE.intersectsMesh(TAL3W, false))  ) &&  (planeDOWN<=0)   )  {planeUPER++;} //&&  (planeDOWN<=1)
		 if  (PLANE.intersectsMesh(RAWS, false)) {BON++;} 
		// if  (PLANE.intersectsMesh(RAWSENERG, false)) {LOADENERGS++;} 
		 
		// if  ( (PLANE.intersectsMesh(TAL1W, false)) || (PLANE.intersectsMesh(TAL2W, false)) || (PLANE.intersectsMesh(TAL3W, false))  )  {planeDOWN++;} 
	
	if (ROT3D==1){WALK++;	
	if ((ROT3D==1)&&(WALK>=31)){PLANE.rotation.y=(-Math.PI/2)+(WALK*Math.PI/100);}
	
		 if(WALK % 11 <= 4){
		 		   if(CARRR<=1){DAILDORSN.visibility=1;}
		           if(CARRR==2){DAILDORSNN.visibility=DAILDORSNN2.visibility=1;DAWL1N.visibility = DAWR1N.visibility = 0;}}
		 if(WALK % 25 <= 10){
		 		   if(CARRR<=1){DAILDORSN.visibility=0;}
		           if(CARRR==2){DAILDORSNN.visibility=DAILDORSNN2.visibility=0;DAWL1N.visibility = DAWR1N.visibility = 1;}}     }	
	 	
      
	/*var size = scene.meshes.length;  //BARELBOMBS
	var i=0;
	while (i < size ) { 


	
		
		if (  (scene.meshes[i].TREE && PLANE.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=91)   )  {// DESTROY PLANT
				treesTOUCH++;}
				
				
		if (  (scene.meshes[i].BARELBOMBS && PLANE.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=91)   )  {// DESTROY PLANT
				boombTOUCH++;  
				
				}
				
				i++;} */ 
		       });	 
		   


  //  var dem=3;
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
	//RESTART=1;
		
	engine.runRenderLoop(function() 
	{   //setInterval(function () {		  
	//setInterval(function () {		  }, 10);

	   if(HANDCONTROL==1){	
         try {
 	          var xmlDoc=loadXMLDoc("DIRECTION.xml");
	          var xx=xmlDoc.getElementsByTagName("POS")[0].childNodes[0];
	          var yy=xmlDoc.getElementsByTagName("POSUP")[0].childNodes[0];
	          //xy=xmlDoc.getElementsByTagName("POS")[0];xx=xy.childNodes[0];score.innerHTML=yy.nodeValue;
			 }
	
	      catch(e){} 
	               }
				   
if(CITY==1){groundGRBIG.material = groundMaterialSTREET;groundMEGA.visibility=groundMEGAR.visibility=1;
                                   water.visibility=groundMEGAWATER.visibility=groundMEGA4.visibility=groundMEGAR4.visibility=0;
                                   groundMEGA2.visibility=groundMEGAR2.visibility=0;
								   groundMEGA3.visibility=groundMEGAR3.visibility=0;CITY=11;}
if(CITY==2){groundGRBIG.material = groundMaterialSTREETINE;groundMEGA.visibility=groundMEGAR.visibility=0;
                                   water.visibility=groundMEGAWATER.visibility=groundMEGA4.visibility=groundMEGAR4.visibility=0;
                                   groundMEGA2.visibility=groundMEGAR2.visibility=1;
								   groundMEGA3.visibility=groundMEGAR3.visibility=0;CITY=12;}
if(CITY==3){groundGRBIG.material = groundMaterialSTREETINE2;groundMEGA.visibility=groundMEGAR.visibility=0;
                                   water.visibility=groundMEGAWATER.visibility=groundMEGA4.visibility=groundMEGAR4.visibility=0;
                                   groundMEGA2.visibility=groundMEGAR2.visibility=0;
								   groundMEGA3.visibility=groundMEGAR3.visibility=1;CITY=13;}
								   
					
if(CITY==4){                       groundMEGA.visibility=groundMEGAR.visibility=0;
                                   groundMEGA2.visibility=0;groundMEGAR2.visibility=0;
								   groundMEGA3.visibility=groundMEGAR3.visibility=0;
								   water.visibility=groundMEGAWATER.visibility=groundMEGA4.visibility=groundMEGAR4.visibility=1;CITY=14;}
								
       	
	
		
		
		
		
		
	
	if((RESTART==1)||(FIRSTANM==1)){planeUPER=UPER=UPRR=UPRR1=UPRR3=0;FIRSTANM=3;CAR.pause();SS1=0;SS2=0;SS=0;
	     ROT3D=0;WALK=0;
		 ALRTf=0;
		LIGHTmov.diffuse = new BABYLON.Color3(1, 1, 1);
		
		PLANE.rotation.z=0.141;

		 speed.innerHTML=0;
	     ANIMR=1;PLANE.rotation.x=0;camera.rotation.x=0;//RESTART=0;
         START=0;score.innerHTML=score1=99;BOUTTON.play();camera.rotation.y=1.570796;PLANE.rotation.y=2.33;
		 
		 STOPicon.style.width = STOPicon.style.height = 0 + 'px';ENERGIE=600;SPEEDC=1;
		 STARTicon.style.width = STARTicon.style.height = 60 + 'px';
		 ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
		 if(RESTART==1){RESTARTicon.style.width = RESTARTicon.style.height = 0 + 'px';RESTART=2;FIRSTANM=0;}
		 
		 document.getElementById("BOUSL").style.transform = document.getElementById("RAKAS").style.transform = "rotate(0deg)";
		 document.getElementById("RAKAS2").style.transform = "rotate(-116deg)"; 
		 document.getElementById("RAKASGAS").style.transform = "rotate(102deg)";
		 
		 
		 if(CITY<14){ 
		 camera.position = new BABYLON.Vector3(-517, 3.5, 1558.5);
		 PLANE.position = new BABYLON.Vector3(-506, 2.5, 1547);}
	
		 if(CITY>=14){ 
		 camera.position = new BABYLON.Vector3(-517, 13.5, 1558.5);
		 PLANE.position = new BABYLON.Vector3(-506, 12.5, 1547);}
					
	     treesTOUCH=TT=TT1=0;ALERT.pause();CARACCE.pause();CARACCE2.pause();
		 STOPbuilding=STOPbuilding2=0;
		 }	


	if (ANIMR==1)
	    {anim ++;
	    if(anim<40){camera.rotation.y+=0.061;camera.position.x+=0.475;camera.position.y+=0.048;camera.position.z+=-0.15;}
		if(anim==40) {if(CITY<14){ camera.position = new BABYLON.Vector3(-498, 5.5, 1555);}
		              if(CITY>=14){ camera.position = new BABYLON.Vector3(-498, 15.5, 1555);}
		             ANIMR=anim=0;
				    camera.rotation.x=0.1701;
					MONST.rotation.y=camera.rotation.y;
					if(RESTART==2){RESTART=0;ROT3D=1;}      }              }  
	

	/*	if((RESTART==1)||(FIRSTANM==1)){planeUPER=UPER=UPRR=UPRR1=UPRR3=0;FIRSTANM=3;CAR.pause();SS1=0;SS2=0;SS=0;ALRTf=0;
		 ROT3D=1;WALK=0;ANIMR=1;

		 LIGHTmov.diffuse = new BABYLON.Color3(1, 1, 1);
		 PLANE.rotation.z=0.141;speed.innerHTML=0;
         PLANE.rotation.x=0;camera.rotation.x=0;
         START=0;score.innerHTML=score1=99;RESTART=0;BOUTTON.play();camera.rotation.y=1.570796;PLANE.rotation.y=2.33;
		 
		 STOPicon.style.width = STOPicon.style.height = 0 + 'px';ENERGIE=600;SPEEDC=1;
		 STARTicon.style.width = STARTicon.style.height = 60 + 'px';
		 ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
		 
		 if(CITY<14){ 
		 camera.position = new BABYLON.Vector3(-517, 3.5, 1558.5);
		 PLANE.position = new BABYLON.Vector3(-506, 2.5, 1547);}
	
		 if(CITY>=14){ 
		 camera.position = new BABYLON.Vector3(-517, 13.5, 1558.5);
		 PLANE.position = new BABYLON.Vector3(-506, 12.5, 1547);}
		 
		 
		 treesTOUCH=TT=TT1=0;ALERT.pause();CARACCE.pause();CARACCE2.pause();
		 STOPbuilding=STOPbuilding2=0;
		 }*/	

	/*if (ROT3D==1){WALK++;}	
	if ((ROT3D==1)&&(WALK>=1)){
	PLANE.rotation.y=(-Math.PI/2)+(WALK*Math.PI/100);
		 if(WALK % 11 <= 4){
		 		   if(CARRR<=1){DAILDORSN.visibility=1;}
		           if(CARRR==2){DAILDORSNN.visibility=DAILDORSNN2.visibility=1;DAWL1N.visibility = DAWR1N.visibility = 0;}}
		 if(WALK % 25 <= 10){
		 		   if(CARRR<=1){DAILDORSN.visibility=0;}
		           if(CARRR==2){DAILDORSNN.visibility=DAILDORSNN2.visibility=0;DAWL1N.visibility = DAWR1N.visibility = 1;}}
				   }*/	
	 	

		

	LIGHTmov.position = new BABYLON.Vector3(camera.position.x,camera.position.y, camera.position.z);
			
	 //if (START==0){speed.innerHTML =0;}	
	
	
	if(CARRR==1){
	      //camera.position.y = 5.5;
		  DAILDORSNN.visibility=DAILDORSNN2.visibility=0;
          MONSTER000.visibility = 0;MONSTER00.visibility = 1;
		  RAWDL2.visibility = RAWDL1.visibility = 1;
		  RAWDLM1.visibility=RAWDLM2.visibility=RAWDLM3.visibility=RAWDLM4.visibility = 0;
		 
		 RAWD1.position = new BABYLON.Vector3(2.7, -1.4, 0.4);		 
         RAWD2.position = new BABYLON.Vector3(2.7, -1.4, -0.4);		 
         RAWD3.position = new BABYLON.Vector3(-2.7, -0.7, 0.4);	 
         RAWD4.position = new BABYLON.Vector3(-2.7, -0.7, -0.4);		  
		 
		 
		DAW.visibility=DAW1.visibility=DAWO.visibility=DAW2.visibility=DAWOSUP.visibility=DAWOSUP2.visibility=  0; 			 
	    DAWL1N.visibility = DAWR1N.visibility = DAWL1.visibility = DAWR1.visibility = 0;
		 }//MOTO
	if(CARRR==2){
	      //camera.position.y = 5.5;
          MONSTER000.visibility = 1;MONSTER00.visibility = 0;
		  RAWDL2.visibility = RAWDL1.visibility = 0;
		  RAWDLM1.visibility=RAWDLM2.visibility=RAWDLM3.visibility=RAWDLM4.visibility = 1;
		  
		 RAWD1.position = new BABYLON.Vector3(2.9, -0.7, 2.6);		 
         RAWD2.position = new BABYLON.Vector3(2.9, -0.7, -2.6);		 
         RAWD3.position = new BABYLON.Vector3(-3.1, -0.4, 2.7);	 
         RAWD4.position = new BABYLON.Vector3(-3.1, -0.4, -2.7);
      
        DAW.visibility=DAW1.visibility=DAWO.visibility=DAW2.visibility=DAWOSUP.visibility=DAWOSUP2.visibility=  1; 			 
	    //DAWL1N.visibility = DAWR1N.visibility = 0;
	    DAWL1.visibility = DAWR1.visibility = 1;	}//TAKAIA		
		
//if(sunchange==1){BOUTTON1.play();  sunchange=0;scene.fogDensity = (10-sundegree)/1000;}	
	
		if(sunchange==1){BOUTTON1.play();  sunchange=0;
	                if(SUN==1){scene.fogDensity = 0.0;
					     SUNicon.style.width = SUNicon.style.height = 0 + 'px';
                         MOONicon.style.width = MOONicon.style.height = 45 + 'px';}
					if(SUN==0){scene.fogDensity = 0.001;
					     SUNicon.style.width = SUNicon.style.height = 60 + 'px';
                         MOONicon.style.width = MOONicon.style.height = 0 + 'px';}  }
						 
 if(MOTTO==1){
    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW0.png", scene);// RAW3
    materialRAW.diffuseTexture.hasAlpha = true;
    materialRAW.backFaceCulling = false; 		 		  
	RAWD1.material = materialRAW;MOTTO=11;}
  if(MOTTO==2){
     materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW01.png", scene);// RAW
    materialRAW.diffuseTexture.hasAlpha = true;
    materialRAW.backFaceCulling = false; 		 		  
	RAWD1.material = materialRAW;MOTTO=11;}
	 if(MOTTO==3){
     materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW1.png", scene);// RAW2
    materialRAW.diffuseTexture.hasAlpha = true;
    materialRAW.backFaceCulling = false
	RAWD1.material = materialRAW;MOTTO=11;}
	
	
     if ((START==1)&&(anim==0)){//ROT3D=0;
		 //WALK++;	
	
	

	if (keys.back==0){ 
		if (CARRR<=1){ // MOTO
		 RAWDL1.rotate(BABYLON.Axis.Y, -0.1*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWDL2.rotate(BABYLON.Axis.Y, -0.1*((SPEEDC/25)+1), BABYLON.Space.LOCAL);}
		 if (CARRR==2){ // TAKAIA	
		 RAWDLM1.rotate(BABYLON.Axis.Y, -0.1*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWDLM2.rotate(BABYLON.Axis.Y, -0.1*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWDLM3.rotate(BABYLON.Axis.Y, -0.1*((SPEEDC/25)+1), BABYLON.Space.LOCAL);
		 RAWDLM4.rotate(BABYLON.Axis.Y, -0.1*((SPEEDC/25)+1), BABYLON.Space.LOCAL);}}
		 
		 if((SPEEDC<=111)&&(keys.back==0)){ 
		 RAWD1.rotate(BABYLON.Axis.Z, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
         RAWD2.rotate(BABYLON.Axis.Z, -0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWD3.rotate(BABYLON.Axis.Z, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWD4.rotate(BABYLON.Axis.Z, -0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL); }
		 
		 if((SPEEDC>1111)&&(keys.back==0)){
		 RAWD1.rotate(BABYLON.Axis.Z, 0.2*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
         RAWD2.rotate(BABYLON.Axis.Z, -0.2*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWD3.rotate(BABYLON.Axis.Z, 0.2*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWD4.rotate(BABYLON.Axis.Z, -0.2*((SPEEDC/15)+1), BABYLON.Space.LOCAL); }
		 
	
	
	  if (keys.back==1){
        if (CARRR<=1){ // MOTO	  
		 RAWDL1.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWDL2.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);}
 		 if (CARRR==2){ // TAKAIA	
		 RAWDLM1.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWDLM2.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWDLM3.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWDLM4.rotate(BABYLON.Axis.Y, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);}

		 RAWD1.rotate(BABYLON.Axis.Z, -0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
         RAWD2.rotate(BABYLON.Axis.Z, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWD3.rotate(BABYLON.Axis.Z, -0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);
		 RAWD4.rotate(BABYLON.Axis.Z, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL); }	
	
	

	
	
	
		if(ENERGIE>0){ENERGIE-=0.007*SPEEDC;score1=((ENERGIE/2)-80)/2.2;}//0.0075     0.01
		if(score1<=1){score1=1;}
		score.innerHTML = parseInt(score1);
		speed.innerHTML = parseInt(SPEEDC*12);
		

		/*
		if  (treesTOUCH>=2){TT1=1;}
		 if(TT1>=1){TT++;}
	     if(TT==1){CARCRASH.play();ENERGIE-=10;//if(SPEEDC>=5){SPEEDC+=-5;}
		 }
	     if(TT==2){HAHA.play();}
		 if((TT>=1)&&(TT<=11)&&(DROT<=2)){PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;}
		 if((TT>=1)&&(TT<=11)&&(DROT>2)){PLANE.rotation.y+=-0.15;MONST.rotation.y+=-0.15;}
		 if(TT>=12){treesTOUCH=TT=0;TT1=0;DROT++;
		           if(DROT>=5){DROT=0;}}
        




	
	
	if(boombTOUCH>=1){bb++;
	     if(bb==1){EXPLOS1.play();BOMB.position = new BABYLON.Vector3(PLANE.position.x,11,PLANE.position.z);
		          BOMB.playAnimation(0, 15, true, 80);BOMB.size=15;}
		 
		 if(bb<25) {UPRR3+=0.2;}
		 if(bb>=25){UPRR3+=-0.2;}
		 if(bb<50){PLANE.rotation.x+=0.1;
		            PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;
		            BOMB.position = new BABYLON.Vector3(PLANE.position.x,11,PLANE.position.z);}  }
		 if(bb>=50){PLANE.rotation.x=0;UPRR3=0;}
		 if(bb>=70){BOMB.stopAnimation();BOMB.size=0;bb=boombTOUCH=0;}
      */

	  
   // AFFICHE.innerHTML=bb;

	//boxkey.position = camera.position.clone();
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
	  if(STOPbuilding>=1){STOPbuilding2++;SS2=0;}
	   PLANE.position = camera.position.clone();
	        var DIR1;
            DIR1 = getForwardVector(camera.rotation);
	        DIR1.normalize();
	        PLANE.position.x +=DIR1.x * (SPEEDC+SPEEDC0+SPEEDCM);//18//4 //23.4
	        PLANE.position.z +=DIR1.z * (SPEEDC+SPEEDC0+SPEEDCM);
			//PLANE.position.y =2.5+UPRR-UPRR1+UPRR3+1.5*(PLANE.rotation.z);//UPRR4;
	
	
	        if(CITY==11){DELTAY1 = groundMEGA.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
	        if(CITY==12){DELTAY1 = groundMEGA2.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
			if(CITY==13){DELTAY1 = groundMEGA3.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
			if(CITY==14){DELTAY1 = groundMEGA4.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);
			             DELTAY2 = groundMEGAR4.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
						
							
			//water.position=new BABYLON.Vector3(PLANE.position.x,8, PLANE.position.z);
			//groundMEGAWATER.position=new BABYLON.Vector3(PLANE.position.x,5, PLANE.position.z);
			
			 
			 
			 
			 if(DELTAY1<=2.5){DELTAY1=2.5;}
			 
             //PLANE.position.y = DELTAY1+UPRR-UPRR1+UPRR3+1.5*(PLANE.rotation.z);
			 PLANE.position.y = DELTAY1+UPRR-UPRR1+3;
			 camera.position.y = PLANE.position.y+3-UPRR+UPRR1;
             //camera.position.y = PLANE.position.y+3-UPRR+UPRR1;
             //camera.position.y = PLANE.position.y+6-UPRR+UPRR1;			 
			
			
			if((CARRR==2)&&(SPEEDC>=5)){VIBR++;
 	     if((VIBR >= 1)&&(VIBR <= 3)){PLANE.position.y+=0.02;}
		 if((VIBR > 3)&&(VIBR <= 6)){PLANE.position.y+=-0.02;} 
		 if(VIBR > 6){VIBR=1;}}
	
	        // TEST1.innerHTML=parseInt(DELTAY1);
   //if( ((DELTAY1>=52)&&(PLANE.position.x<=0))   ||   ((DELTAY1>=42)&&(PLANE.position.x>0))  )

   
 	if((DELTAY1>=14)&&(SPEEDC>=5)&&(CITY<14)){SPEEDC+=-0.3;}
	if((DELTAY1<=4)&&(SPEEDC>=5)&&(CITY>=14)){SPEEDC+=-0.3;}
/*	if(   ((DELTAY1>=52))  )
	          {OFFF=1;START=0;OFF.play();}
			        if( (OFFF>=1)&&(OFFF<=3)){OFFF++;}	
                    if(OFFF==2){OFFF=3;RESTART=1;}*/

 
	if((DELTAY1>=50)&&(CITY<14)){buildingsTOUCH++;STOPbuilding++;SPEEDC=0;if(buildingsTOUCH==1){CARACCE.volume=0.0;CARCRASH.play();}}
	if ((DELTAY1<50)&&(CITY<14)){STOPbuilding=0;STOPbuilding2=0;buildingsTOUCH=0;}
	
	if((DELTAY1<=5)&&(CITY>=14)){buildingsTOUCH++;STOPbuilding++;SPEEDC=0;if(buildingsTOUCH==1){CARACCE.volume=0.0;OFF.play();}}
	//if ((DELTAY1>5)&&(CITY>=14)){STOPbuilding=0;STOPbuilding2=0;buildingsTOUCH=0;}
	
	if((DELTAY2>=10)&&(CITY>=14)){buildingsTOUCH++;STOPbuilding++;SPEEDC=0;if(buildingsTOUCH==1){CARACCE.volume=0.0;CARCRASH.play();}}
	if ((DELTAY2<10)&&(DELTAY1>5)&&(CITY>=14)){STOPbuilding=0;STOPbuilding2=0;buildingsTOUCH=0;}
			 
 
 
 
 
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

 
   if ((keys.left==1)&&(MONST.rotation.y>=camera.rotation.y-0.5)){PLANE.rotation.y+=-0.15;MONST.rotation.y+=-0.15;}//move left   
   if ((keys.right==1)&&(MONST.rotation.y<=camera.rotation.y+0.5)){PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;}//move right  	
   	
   
  if ((keys.left==1)&&(keys.back==0)){camera.rotation.y+=-0.05;PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;
          if(CARRR==2){root++;
   	             if(root % 3 == 0){DAWL1N.visibility =0;}
		         if(root % 15 <= 3){DAWL1N.visibility =1;} 
       if((root == 13)&&(SPEEDC>=10)){CARBRAKE.play();}			
       if((root >= 13)&&(root <= 47)&&(SPEEDC>=10)){PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;RET=0;}} }//move left  

	 
  if ((keys.right==1)&&(keys.back==0)){camera.rotation.y+=0.05;PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;
          if(CARRR==2){root1++;
   	             if(root1 % 3 == 0){DAWR1N.visibility=0;}
		         if(root1 % 15 <= 3){DAWR1N.visibility=1;}   
		  if((root1 == 13)&&(SPEEDC>=10)){CARBRAKE.play();}		
          if((root1 >= 13)&&(root1 <= 47)&&(SPEEDC>=10)){PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;RET=0;}}} //move right
		 
  if ((keys.left==1)&&(keys.back==1)){camera.rotation.y+=0.05;PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;} //move left                     
  if ((keys.right==1)&&(keys.back==1)){camera.rotation.y+=-0.05;PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;} //move right
		 
		 
		 

  
   if ((keys.left==0)&&(MONST.rotation.y<camera.rotation.y)){PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;
               root=0;DAWL1N.visibility=0;
			   }//BACK move left 
   if ((keys.right==0)&&(MONST.rotation.y>camera.rotation.y)){PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;
               root1=0;DAWR1N.visibility=0;
			   }//BACK move right  

	


    if ((keys.right==1)&&(CARRR<=1)&&(PLANE.rotation.x>=-0.5)&&(SPEEDC>=0.5)){PLANE.rotation.x+=-0.05;RET=0;}//move left   
    if ((keys.left==1)&&(CARRR<=1)&&(PLANE.rotation.x<=0.5)&&(SPEEDC>=0.5)){PLANE.rotation.x+=0.05;RET=0;}//move right 
 	
    if ((keys.right==0)&&(CARRR<=1)&&(PLANE.rotation.x<0)&&(boombTOUCH==0)){PLANE.rotation.x+=0.05;}//BACK move left 
    if ((keys.left==0)&&(CARRR<=1)&&(PLANE.rotation.x>0)&&(boombTOUCH==0)){PLANE.rotation.x+=-0.05;}//BACK move right 
   if ((keys.left==0)&&(CARRR<=2)&&(keys.right==0)&&(PLANE.rotation.x!=0)&&(boombTOUCH==0)){RET++;if(RET==15){PLANE.rotation.x=0;RET=0;}}
 

 
 
 
 
	 if ((keys.forward==1)&&(SPEEDC<=3)&&(ENERGIE>120)&&(STOPbuilding2<=0)&&
	             (  ((DELTAY1>4)&&(DELTAY1<64)&&(CITY<14))||((DELTAY1<=4)&&(CITY>=14))    )
	                                       ){SPEEDC+=0.05;}  	
	 if ((keys.forward==1)&&(SPEEDC<=10)&&(ENERGIE>120)&&(STOPbuilding2<=0)&&
	      (  ((DELTAY1<4)&&(CITY<14))||((DELTAY1>=4)&&(CITY>=14))    )                  ){SPEEDC+=0.05;}  	
	 
	 if ((keys.forward==1)&&(SPEEDC>=10)&&(SPEEDC<20)&&(ENERGIE>120)&&(STOPbuilding2<=0)&&
	         (  ((DELTAY1<4)&&(CITY<14))||((DELTAY1>=4)&&(CITY>=14))    )               )     {SPEEDC+=0.25;} 
	 if ((keys.forward==0)&&(SPEEDC>1)){SPEEDC+=-0.5;    
	                                   if(SS1<2){SS1++;SS2=0;
	                                         if(SS1==1){CARSTOP.play();CARACCE.volume=0.0;CARACCE2.volume=0.0;}}} 



											 
	 if (     (keys.forward==1)&&(ENERGIE>120)&&(SS2<2)&&(STOPbuilding2<=0)   &&  
                            (  ((DELTAY1<4)&&(CITY<14))||((DELTAY1>=4)&&(CITY>=14))    )                ){SS2++;
	                                   if(SS2==1){SS1=0;
									      if(CARRR<=1){CARACCE.currentTime = 0;CARACCE.play();CARACCE.loop= true;CARACCE.volume=1.0;}
										  if(CARRR==2){CARACCE2.currentTime = 0;CARACCE2.play();CARACCE2.loop= true;CARACCE2.volume=1.0;}
										  
										  }}
	
	if ((keys.forward==1)&&(SPEEDC>1)&&(ALRTf<2)) {
	       if(CARRR<=1){DAILDORSN.visibility=0;}
		   if(CARRR==2){DAILDORSNN.visibility=DAILDORSNN2.visibility=1;}}
	
	if ((keys.forward==0)&&(ALRTf<2))            {
	       if(CARRR<=1){DAILDORSN.visibility=1;}
		   if(CARRR==2){DAILDORSNN.visibility=DAILDORSNN2.visibility=0;}}
	
    if ((keys.forward==1)&&(CARRR<=1)&&(SPEEDC>2)&&(SPEEDC<19)){
	          if(PLANE.rotation.z<0.7){PLANE.rotation.z+=0.05;}} 
	if (  (keys.forward==0)  ||  (SPEEDC<=2)  ||  ((keys.forward==1)&&(SPEEDC>18))  )   {//SS1=0;
	                 if(PLANE.rotation.z>0.1){PLANE.rotation.z+=-0.05;}} 
 
 
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
   if ((xx.nodeValue==1)&&(MONST.rotation.y>=camera.rotation.y-0.5)){PLANE.rotation.y+=-0.15;MONST.rotation.y+=-0.15;}//move left   
   if ((xx.nodeValue==2)&&(MONST.rotation.y<=camera.rotation.y+0.5)){PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;}//move right  	
   	
   
  if ((xx.nodeValue==1)&&(yy.nodeValue!=2)){camera.rotation.y+=-0.05;PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;
          if(CARRR==2){root++;
   	             if(root % 3 == 0){DAWL1N.visibility =0;}
		         if(root % 15 <= 3){DAWL1N.visibility =1;} 
       if((root == 13)&&(SPEEDC>=10)){CARBRAKE.play();}			
       if((root >= 13)&&(root <= 47)&&(SPEEDC>=10)){PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;RET=0;}} }//move left  

	 
  if ((xx.nodeValue==2)&&(yy.nodeValue!=2)){camera.rotation.y+=0.05;PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;
          if(CARRR==2){root1++;
   	             if(root1 % 3 == 0){DAWR1N.visibility=0;}
		         if(root1 % 15 <= 3){DAWR1N.visibility=1;}   
		  if((root1 == 13)&&(SPEEDC>=10)){CARBRAKE.play();}		
          if((root1 >= 13)&&(root1 <= 47)&&(SPEEDC>=10)){PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;RET=0;}}} //move right
		 
 if ((xx.nodeValue==1)&&(yy.nodeValue==2)){camera.rotation.y+=0.05;PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;} //move left                     
 if ((xx.nodeValue==2)&&(yy.nodeValue==2)){camera.rotation.y+=-0.05;PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;} //move right
		 
		 
		 

  
   if ((xx.nodeValue==0)&&(MONST.rotation.y<camera.rotation.y)){PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;
               root=0;DAWL1N.visibility=0;
			   }//BACK move left 
   if ((xx.nodeValue==0)&&(MONST.rotation.y>camera.rotation.y)){PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;
               root1=0;DAWR1N.visibility=0;
			   }//BACK move right  

	


    if ((xx.nodeValue==2)&&(CARRR<=1)&&(PLANE.rotation.x>=-0.5)&&(SPEEDC>=0.5)){PLANE.rotation.x+=-0.05;RET=0;}//move left   
    if ((xx.nodeValue==1)&&(CARRR<=1)&&(PLANE.rotation.x<=0.5)&&(SPEEDC>=0.5)){PLANE.rotation.x+=0.05;RET=0;}//move right 
 	
    if ((xx.nodeValue==0)&&(CARRR<=1)&&(PLANE.rotation.x<0)&&(boombTOUCH==0)){PLANE.rotation.x+=0.05;}//BACK move left 
    if ((xx.nodeValue==0)&&(CARRR<=1)&&(PLANE.rotation.x>0)&&(boombTOUCH==0)){PLANE.rotation.x+=-0.05;}//BACK move right 
   if ((xx.nodeValue==0)&&(CARRR<=2)&&(PLANE.rotation.x!=0)&&(boombTOUCH==0)){RET++;if(RET==15){PLANE.rotation.x=0;RET=0;}}
 

 
 
 
 
	 if ((yy.nodeValue==1)&&(SPEEDC<=3)&&(ENERGIE>120)&&(STOPbuilding2<=0)&&(DELTAY1>4)&&(DELTAY1<64)){SPEEDC+=0.05;}  	
	 if ((yy.nodeValue==1)&&(SPEEDC<=10)&&(ENERGIE>120)&&(STOPbuilding2<=0)&&(DELTAY1<4)){SPEEDC+=0.05;}  	
	 
	 if ((yy.nodeValue==1)&&(SPEEDC>=10)&&(SPEEDC<20)&&(ENERGIE>120)&&(STOPbuilding2<=0)&&(DELTAY1<4)){SPEEDC+=0.25;} 
	 if ((yy.nodeValue==0)&&(SPEEDC>1)){SPEEDC+=-0.5;    
	                                   if(SS1<2){SS1++;SS2=0;
	                                         if(SS1==1){CARSTOP.play();CARACCE.volume=0.0;CARACCE2.volume=0.0;}}}  
	 if ((yy.nodeValue==1)&&(ENERGIE>120)&&(SS2<2)&&(STOPbuilding2<=0)&&(DELTAY1<4)){SS2++;
	                                   if(SS2==1){SS1=0;
									      if(CARRR<=1){CARACCE.currentTime = 0;CARACCE.play();CARACCE.loop= true;CARACCE.volume=1.0;}
										  if(CARRR==2){CARACCE2.currentTime = 0;CARACCE2.play();CARACCE2.loop= true;CARACCE2.volume=1.0;}
										  
										  }}
	
	if ((yy.nodeValue==1)&&(SPEEDC>1)&&(ALRTf<2)) {
	       if(CARRR<=1){DAILDORSN.visibility=0;}
		   if(CARRR==2){DAILDORSNN.visibility=DAILDORSNN2.visibility=1;}}
	
	if ((yy.nodeValue==0)&&(ALRTf<2))            {
	       if(CARRR<=1){DAILDORSN.visibility=1;}
		   if(CARRR==2){DAILDORSNN.visibility=DAILDORSNN2.visibility=0;}}
	
    if ((yy.nodeValue==1)&&(CARRR<=1)&&(SPEEDC>2)&&(SPEEDC<19)){
	          if(PLANE.rotation.z<0.7){PLANE.rotation.z+=0.05;}} 
	if (  (yy.nodeValue==0)  ||  (SPEEDC<=2)  ||  ((keys.forward==1)&&(SPEEDC>18))  )   {//SS1=0;
	                 if(PLANE.rotation.z>0.1){PLANE.rotation.z+=-0.05;}} 
					 
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
			
/*	   if ((PLANE.position.x>=1990)  || (PLANE.position.z>=1990) ||(PLANE.position.x<=-1990)  || (PLANE.position.z<=-1990)  )
	       {OFFF=1;START=0;OFF.play();}
       if( (OFFF>=1)&&(OFFF<=3)){OFFF++;}	
       if(OFFF==2){OFFF=3;planeDOWN=DOWN=planeUPER=UPER=UPRR=UPRR1=UPRR3=0;RESTART=1;}	*/

	   if ((PLANE.position.x>=4990) ||(PLANE.position.x<=-4990) )
	       {camera.position.x=-camera.position.x;BOUTTON1.play();}
	   if ((PLANE.position.z>=4990) || (PLANE.position.z<=-4990)  )
	       {camera.position.z=-camera.position.z;BOUTTON1.play();}
       	   	   
 
//###############" BORDE WARN & ENEGRIE ###########################
//###############" BORDE WARN & ENEGRIE ###########################
//###############" BORDE WARN & ENEGRIE ###########################

	 if (   ( (ENERGIE<=120) || (keys.back==1) || (STOPbuilding>=1) || (DELTAY1>=94) )&& (ALRTf<3)    ){ALRTf++;}
	      if(ALRTf==1){ALERT.play();ALERT.loop= true;ALRTf=2;ALRTn=0;CARACCE.pause();CARACCE2.pause();SS2=0; }

    if (  (ENERGIE>120) && (keys.back==0) && (STOPbuilding2==0) && (DELTAY1<94)   && (ALRTn<3)   ){ALRTn++;}
	      if(ALRTn==1){ALERT.pause();ALRTn=2;ALRTf=0;DAILDORSN.visibility=0;}
		  
	if ((ENERGIE<=120)&&(STOPbuilding2<=0)) {CARACCE.pause();CARACCE2.pause();SPEEDC=1;ENERGicon.style.width = ENERGicon.style.height = 80 + 'px';} 	
		

	
	if(ALRTf>=2){ALRTf++;
		 if(ALRTf % 11 <= 4){
		 		   if(CARRR<=1){DAILDORSN.visibility=1;}
		           if(CARRR==2){DAILDORSNN.visibility=DAILDORSNN2.visibility=1;DAWL1N.visibility = DAWR1N.visibility = 0;}}
		 if(ALRTf % 25 <= 10){
		 		   if(CARRR<=1){DAILDORSN.visibility=0;}
		           if(CARRR==2){DAILDORSNN.visibility=DAILDORSNN2.visibility=0;DAWL1N.visibility = DAWR1N.visibility = 1;}}
				   
	                   }
					   
					   
		
	/*if(LOADENERGS>=1){LOADENERGS++;}
	if(LOADENERGS==2){ENERGIE=300;//SPEEDC=10;
	BONUS.play();LOADENERGS=0;} */
	
	
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
	
	/*if(planeUPER>=1){UPER++;}
	
	if(UPER==3){CHANGE.play();ACTION++;}
	if((UPER==9)&&(ACTION>=1)){YEHAW.play();}
	
	if(UPER>=80){UPRR=UPRR1=0;}
	if(UPER>=90){planeUPER=UPER=UPRR=UPRR1=0;PLANE.rotation.z=0.0;camera.rotation.x =0;SPEEDC=10;
	            PLANE.rotation.z = Math.PI/30;camera.position.y = PLANE.position.y+3;if(ACTION>=2){ACTION=0;}}
	
	
	if((UPER>=1)&&(UPER<40)&&(ACTION==1)){UPRR+=1.3;camera.rotation.x +=-0.03;PLANE.rotation.z+=0.08;PLANE.rotation.y+=0.1;MONST.rotation.y+=0.1;}           
	if((UPER>=40)&&(UPER<80)&&(ACTION==1)){UPRR1+=1.3;camera.rotation.x +=0.03;PLANE.rotation.z+=0.08;PLANE.rotation.y+=0.1;MONST.rotation.y+=0.1;}  

	if((UPER>=1)&&(UPER<40)&&(ACTION==2)){UPRR+=1.3;camera.rotation.x +=-0.03;PLANE.rotation.z+=0.08;}           
	if((UPER>=40)&&(UPER<80)&&(ACTION==2)){UPRR1+=1.3;camera.rotation.x +=0.03;PLANE.rotation.z+=0.08;}  
		
    
	
	if((UPER>=80)&&(UPER<85)){camera.rotation.x +=-0.075;}
	if((UPER>=85)&&(UPER<=90)){camera.rotation.x +=0.075;}	

		 
		if(planeDOWN>0){DOWN++;} //can't up
		if(DOWN>=70){planeDOWN=DOWN=0;} */


//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################	

		if(BON>0){BON1++;} 
		if(BON1==1){BOUTTON.play();ENERGIE=600;//SPEEDC=10;
		ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';} 
		if(BON1==3){BONUS3.play();BON=BON1=0;} 
			
		
	
	   
	   
    }//end START

  
	CAMX.innerHTML=parseInt(camera.position.x);CAMY.innerHTML=parseInt(camera.position.z); 
	
	if(START>=1){	
	document.getElementById("BOUSL").style.transform = document.getElementById("RAKAS").style.transform = "rotate(" + (-DIRXZ) + "deg)";//DIRXZ.innerHTML
	//document.getElementById("RAKAS2").style.transform = "rotate(" + (14*SPEEDC-155) + "deg)";
	//document.getElementById("RAKASGAS").style.transform = "rotate(" + (0.6*ENERGIE+290) + "deg)";
	document.getElementById("RAKAS2").style.transform = "rotate(" + (12*SPEEDC-120) + "deg)";
	document.getElementById("RAKASGAS").style.transform = "rotate(" + (0.6*(ENERGIE/2)+290) + "deg)";}
	
	//MAP2.style.width = MAP2.style.height = 140 + 'px';  document.getElementById("MAP2").style.transform =  
		
	/*if(SMALLSCREEN==0){
	BOUSL.style.top = playerPOS.style.top= ((0.043*CAMX.innerHTML)+170)-40+ 'px';//50	
	BOUSL.style.left = playerPOS.style.left= ((0.043*CAMY.innerHTML)+185)+ 'px';//170 
	
	monsterPOS.style.top = ((0.043*MX)+170)-50+ 'px';	
	monsterPOS.style.left =((0.043*MY)+170)+ 'px'; }*/
	
	//if(SMALLSCREEN==1){
	BOUSL.style.top = playerPOS.style.top= ((0.0132*CAMX.innerHTML)+170)-90+ 'px';//50	
	BOUSL.style.left = playerPOS.style.left= ((0.0132*CAMY.innerHTML)+156)+ 'px';//160 
	
	

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
	 sMaterial.reflectionTexture = new BABYLON.CubeTexture("img_game/img_game_skybox", scene);
     sMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
     sMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
     sMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	var skybox = BABYLON.Mesh.CreateBox("skybox", 2800, scene);
	skybox.material = sMaterial; }    
	
	


	
function createDemoScene(scene) {
	var skyMaterial = scene.getMaterialByName("skyboxMaterial");

var SK1 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK1.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK1.rotation.y = Math.PI / 2;
	SK1.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK1.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/skybox_nx.jpg", scene);
	SK1.position = new BABYLON.Vector3(2000,1000,0);
	SK1.checkCollisions = true;
	
	var SK2 = BABYLON.Mesh.CreateBox("3groundGRoutBOG", 4000, scene);
	SK2.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK2.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK2.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/skybox_nz.jpg", scene);
	SK2.position = new BABYLON.Vector3(0,1000,2000);
	SK2.checkCollisions = true;
	
	var SK3 = BABYLON.Mesh.CreateBox("6groundGRoutBOG", 4000, scene);
	SK3.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK3.rotation.y = Math.PI;
	SK3.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK3.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/skybox_pz.jpg", scene);
	SK3.position = new BABYLON.Vector3(0,1000,-2000);
	SK3.checkCollisions = true;
	
	var SK4 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK4.scaling = new BABYLON.Vector3(1,0.5,0.001);
	SK4.rotation.y = Math.PI/2 ;
	SK4.rotation.z = Math.PI ;
	SK4.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK4.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/skybox_px.jpg", scene);
	SK4.position = new BABYLON.Vector3(-2000,1000,0);
	SK4.checkCollisions = true;
	
	var SK5 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK5.scaling = new BABYLON.Vector3(1,1,0.0001);
	SK5.rotation.x = Math.PI/2 ;
	SK5.rotation.z = Math.PI/2 ;
	SK5.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK5.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/skybox_ny.jpg", scene);
	SK5.position = new BABYLON.Vector3(0,1990,0);
	SK5.checkCollisions = true;
	
	SK1.infiniteDistance = true;
	SK2.infiniteDistance = true;
	SK3.infiniteDistance = true;
	SK4.infiniteDistance = true;
	SK5.infiniteDistance = true;
	

	
	SK1.material.emissiveColor = SK2.material.emissiveColor = SK3.material.emissiveColor = SK4.material.emissiveColor =SK5.material.emissiveColor =  new BABYLON.Color3(1.0, 1.0, 1.0);






		
}



function random(min, max) {
	return (Math.random() * (max - min) + min);}
