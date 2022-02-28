'use strict';  //    
//var AFFICHE;AFFICHE = document.getElementById('AFFICHE');AFFICHE.innerHTML=0;
var score;var score1=0;var speed;
score = document.getElementById('score');
score.innerHTML=0;

speed = document.getElementById('speed');
speed.innerHTML=0;

var sundegree=10;
var sunchange=0;
function showValue(newValue)
{sundegree=document.getElementById("range").innerHTML=newValue;
sunchange=1;}


var UP=0;
var BOATY=0;

var VIBR2=0;
var FIRSTANM=0;
var DELTAY1=0;
var ROT3D=1;
var RROTATION=0;

var BACKINFINT=-1;

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
var WALK1=0;
//var PANM=0; // LIGHT PANAL START ENTRANCE ANIMATION 
var root=0;//light cligneton

var START=0;var OFFF=0;var RESTART=0;var ANIMR=0;var anim=0;var RET=0;//
var STOPicon,STARTicon,RESTARTicon;
STOPicon= document.getElementById('STOPicon');STOPicon.style.width = STOPicon.style.height = 0 + 'px';
RESTARTicon= document.getElementById('RESTARTicon');RESTARTicon.style.width = RESTARTicon.style.height = 0 + 'px';
STARTicon= document.getElementById('STARTicon');

var PIRATEicon1;var PIRATEicon2;var PIRATEicon3;var PIRATEicon4;var PIRATEicon5;var PIRATEicon6;var PIRATEicon7;
PIRATEicon1 = document.getElementById('PIRATEicon1');
PIRATEicon2 = document.getElementById('PIRATEicon2');
PIRATEicon3 = document.getElementById('PIRATEicon3');
PIRATEicon4 = document.getElementById('PIRATEicon4');
PIRATEicon5 = document.getElementById('PIRATEicon5');
PIRATEicon6 = document.getElementById('PIRATEicon6');
PIRATEicon7 = document.getElementById('PIRATEicon7');

/*


var SNIPicon;
SNIPicon = document.getElementById('SNIPicon');SNIPicon.style.width = SNIPicon.style.height = 0 + 'px';
var MISSILicon;
MISSILicon = document.getElementById('MISSILicon');MISSILicon.style.width = MISSILicon.style.height = 0 + 'px';
*/

START = document.getElementById('START');
//var ENERGicon;ENERGicon= document.getElementById('ENERGicon');
var ALRTn=0;var ALRTf=0;

var CAMX,CAMY,playerPOS,BOUSL,RAKAS,RAKAS2,ENERG;var ENERGIE=300;var SPEEDC=1;//var LOADENERGS=0;
var ENERGIE1=0;
CAMX = document.getElementById('CAMX');CAMY = document.getElementById('CAMY');
CAMX.innerHTML=0;CAMY.innerHTML=0; 
playerPOS = document.getElementById('playerPOS');//document.getElementById("playerPOS").style.opacity=1;
BOUSL = document.getElementById('BOUSL');RAKAS = document.getElementById('RAKS');
ENERG = document.getElementById('ENERG');RAKAS2 = document.getElementById('RAKS2');
document.getElementById("RAKAS2").style.transform = "rotate(-122deg)";
var BON=0;var BON1=0;//var FRT =0;var KEY=0;var KEYSS=0;

var STARTER=0;

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
var monsterSNIPED=0;var SNIP=0; 
var planeUPER=0;var UPER=0;var UPRR=0;var UPRR1=0;var planeDOWN=-1;var DOWN=0;
var SUPER=0; var planeSUPER=0;
var UPLEVEL=2000;
var treesTOUCH=0;var TT=0;var TT1=0;

var boombTOUCH=0;var bb=0;

var XX,YY,ZZ;
XX=0;YY=0;ZZ=-1;




var MX,MY,monsterPOS,monsterPOS2,monsterPOS3,monsterPOS4,monsterPOS5,monsterPOS6,monsterPOS7,
DXXm,DYYm,DZZm;
DXXm=0.1;DYYm=0.1;DZZm=0.1;

/*
var DELTAXm=3;
var DELTAYm=1;
var DELTAZm=3;
*/

var DELTAXm=-3;
var DELTAYm=-3;
var DELTAZm=3;

var XDISTANCE = 0;
var YDISTANCE = 0;

var PIRATENUMBER;
PIRATENUMBER = document.getElementById('PIRATENUMBER');
PIRATENUMBER.innerHTML = 0; 

var TOPmenu2;TOPmenu2 = document.getElementById('TOPmenu2');
TOPmenu2.style.width = 0 + 'px';// 500 + 'px';
TOPmenu2.style.height = 0 + 'px';//300
TOPmenu2.style.opacity = 0;

var XXm,YYm,ZZm;
XXm=-80;YYm=-608;ZZm=3;

 

MX = document.getElementById('MX');MY = document.getElementById('MY');
//MX.innerHTML=0;MY.innerHTML=0;
MX=0;MY=0;

monsterPOS  =  document.getElementById('monsterPOS');monsterPOS.style.opacity=0;
monsterPOS2 = document.getElementById('monsterPOS2');monsterPOS2.style.opacity=0;
monsterPOS3 = document.getElementById('monsterPOS3');monsterPOS3.style.opacity=0;
monsterPOS4 = document.getElementById('monsterPOS4');monsterPOS4.style.opacity=0;
monsterPOS5 = document.getElementById('monsterPOS5');monsterPOS5.style.opacity=0;
monsterPOS6 = document.getElementById('monsterPOS6');monsterPOS6.style.opacity=0;
monsterPOS7 = document.getElementById('monsterPOS7');monsterPOS7.style.opacity=0;


//var BOXEXPLOSE=0;
//var bx=0;
//var EXPx=0;var EXPy=0;var EXPz=0; 

//var BOXEXPLOSE1=0;var bx1=0;


//var EXPx1=0;var EXPz1=0;
//var BOMBED=0;
//var SDOOR=0;var d=0;  




//FIR.style.top  =  150 + 'px';//canon.style.top + 70; FIR.style.left = 10 + 'px';
 



var CAR = new Audio('sounds/BOAT2.mp3');//BOAT2 PIRATE2 PLANEFLY
//var CARBRAKE = new Audio('sounds/ALERTSTART.mp3');//CARBRAKE
//var CARACCE = new Audio('sounds/CAR.ACCELR.mp3');
var CARSTOP = new Audio('sounds/ALERT1.mp3');
var CARMENU = new Audio('sounds/CAR.ACELR.MEN.mp3');
var BOUTTON = new Audio('sounds/BONUS.mp3');//BOUTTON
var BOUTTON1 = new Audio('sounds/BOUTTON1.mp3');
//var YEHAW = new Audio('sounds/YEHAW.mp3');
//var CANON2 = new Audio('sounds/CANON2.mp3');
//var STARTFIRE = new Audio('sounds/STARTFIRE.mp3');

//var HAHA = new Audio('sounds/HAHA.mp3');	
var CHANGE = new Audio('sounds/CHANGE.mp3');
var EXPLOS1 = new Audio('sounds/EXPLOS1.mp3');	
var MONSTERDY = new Audio('sounds/MONSTERDY.mp3');	
//var LOSE= new Audio('sounds/LOSE.mp3');	
var OFF= new Audio('sounds/OFF.mp3');
var ALERT= new Audio('sounds/ALERT.mp3');
var PLANESUPER1= new Audio('sounds/PLANESUPER1.mp3');//PLANESUPER
//var PLANESTOP= new Audio('sounds/PLANESTOP.mp3');
var EPEE= new Audio('sounds/WINF EPEE.mp3');
//var BONUS= new Audio('sounds/BONUS.mp3');
//var BONUS3= new Audio('sounds/BONUS3.mp3');



//var MONSTERFIRE=0;var MONS=0;
//var MNX=0;var MNY=-30;var MNZ=0;

//var BEGINFOG=0;

/*
BULLETX = document.getElementById('BULLETX');document.getElementById("BULLETX").style.opacity=0.8;
BULLETX2 = document.getElementById('BULLETX2');document.getElementById("BULLETX2").style.opacity=0.8;
BULLETX3 = document.getElementById('BULLETX3');document.getElementById("BULLETX3").style.opacity=0.8;
BULLETX4 = document.getElementById('BULLETX4');document.getElementById("BULLETX4").style.opacity=0.8;
BULLETX5 = document.getElementById('BULLETX5');document.getElementById("BULLETX5").style.opacity=0.8;

var audioCAN = new Audio('sounds/GUN.mp3');
var audioCAN2 = new Audio('sounds/GUN.mp3');
var audioCAN3 = new Audio('sounds/GUN.mp3');
var audioCAN4 = new Audio('sounds/GUN.mp3');
var audioCAN5 = new Audio('sounds/GUN.mp3');

var RELOADGUN = new Audio('sounds/RELOADGUN.mp3');
var MEETBOAT=0;
var Xfir=0;
var Xfir2=0;
var Xfir3=0;
var Xfir4=0;
var Xfir5=0;
var TIR=0; */

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



var CITY=3;	
function CITY1(){  CITY=1;BOUTTON1.play();}
function CITY2(){  CITY=2;BOUTTON1.play();}



var CARRR=0;var chang=1; 

function CARR1(){  CARRR=1;chang=1;CARMENU.play();}
function CARR2(){  CARRR=2;chang=1;CARMENU.play();}
function CARR3(){  CARRR=3;chang=1;CARMENU.play();}
function CARR4(){  CARRR=4;chang=1;CARMENU.play();}

var VIBR=0;


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
	
	// START & RESET GAME
function Startt()

{   BOUTTON.play();
    START+=1;ROT3D=0;
    if(START>1){START=0;}
  if(START==1){//&&(anim==0))
	           if(FIRSTANM==3){STOPicon.style.width = STOPicon.style.height = 60 + 'px';CAR.play();CAR.loop = true;CAR.volume=0.3;
			                   STARTicon.style.width = STARTicon.style.height = 0 + 'px';OFFF=0;RESTART=0;
							   RESTARTicon.style.width = RESTARTicon.style.height = 60 + 'px';}
			   if(FIRSTANM==0){FIRSTANM=1;}
			   
			   }   
  if(START==0){STOPicon.style.width = STOPicon.style.height = 0 + 'px';CAR.volume=0.3; 
               STARTicon.style.width = STARTicon.style.height = 60 + 'px';}//audioMOTORUN.pause();
	  
	  }
	  
function restartt()
{   RESTART=1;timer2 =0;minutes2.innerHTML = seconds2.innerHTML = "00";}

var SMALLSCREEN=1;var BIGSCREEN=0;

function SmallScreen()
{   SMALLSCREEN=1;BIGSCREEN=0;}

function BigScreen()
{   SMALLSCREEN=0;BIGSCREEN=1;}
 

 
 
 
 
 /*
 var Bullet = function (camera, scene) {
	var mesh = BABYLON.Mesh.CreateSphere("bullet", 10, 10, scene);
	//mesh.scaling = new BABYLON.Vector3(11.8, 11.8, 1.8);
	//var mesh = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene, false);
	mesh.material = new BABYLON.StandardMaterial("bMat", scene);
	mesh.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
	mesh.position = camera.position.clone();
	var direction = getForwardVector(camera.rotation);
	direction.normalize();
	var alive = true;
	var lifeTimer = null;
	
	var internalDispose = function () {
		 if (alive) {
			if (lifeTimer) {clearTimeout(lifeTimer);}
			
			mesh.dispose();
			lifeTimer = null;
			alive = false;
		}  
	};
	

	lifeTimer = setTimeout(function() {internalDispose();}, 1100);
	
	this.update = function () {
		if (!alive) {return false;}
                
	this.speed = 50;
		mesh.position.x += direction.x * this.speed * SPEEDC;
		mesh.position.y += direction.y * this.speed * SPEEDC;
		mesh.position.z += direction.z * this.speed * SPEEDC;
			
		var meshToRemove = null;
		var i = 0;
		var size = scene.meshes.length;
		var hit = false;
		while (i < size && !hit) {  
		
	

		   if  (scene.meshes[i].KILboat && mesh.intersectsMesh(scene.meshes[i], false))     {// KILL PLANE
				//XX= -70;YY=random(-70, 70);
				//ZZ=21;MEETPLANE=0;//PLANEBOMBED=PLANEBO=0;
				//DXX=DYY=DZZ=0;
				//score.innerHTML++;
				EXPLOS1.play();
				monsterKILLED++;
				//BOXEXPLOSE3=1;bx3=0;
				//EXPx2=mesh.position.x;EXPy2=mesh.position.y;               
				//EXPz2=mesh.position.z;
				}   

			
			
			
			
			i++;}
			

			
		if (meshToRemove) {
			meshToRemove.dispose();return true;}
		return false;
	};
	
	this.dispose = function () {internalDispose();}	

}; */
















	  
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
  
  var camera = new BABYLON.FreeCamera("MainCamera", new BABYLON.Vector3(82, 18.5, -501) , scene);//(118, 18.5, -521
  //camera.position = new BABYLON.Vector3(40, 2, 470);(83, 0.5, 535)
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);//######################################
	//camera.applyGravity = true;
    camera.checkCollisions = true;
	camera.rotation.y=-Math.PI/2;
	
	camera.speed = 0.5;
	camera.angularSensibility = 1000;
	camera.rotation.y= Math.PI/1.0;

	//scene.activeCamera.attachControl(canvas);

//###################### LIGHT  #############################################
//###################### LIGHT  #############################################
//###################### LIGHT  #############################################

	
	var LIGHTmov = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(300, 50, 0), scene);
	LIGHTmov.diffuse = new BABYLON.Color3(1, 1, 1);
	LIGHTmov.specular = new BABYLON.Color3(0.0, 0.0, 0.0);
	LIGHTmov.intensity = 2.2;//2.2   0.17
	
	
	document.addEventListener("contextmenu", function (e) { e.preventDefault();	}); // ELIMINATE RIGHT CLICK MENU //STARS
	
	//document.addEventListener("contextmenu", function (e) { e.preventDefault();	}); // STARS
	

	createSkybox(scene);
	createDemoScene(scene);


	
//########################################### TIRER ######################################################################  
//########################################### TIRER ######################################################################  
//########################################### TIRER ######################################################################  
//########################################### TIRER ######################################################################  
//########################################### TIRER ######################################################################  
//########################################### TIRER #####################################################################      
   
	/*var bullets = [];
	canvas.addEventListener("mousedown", function (e) { //mouseup
	    if(START==1){TIR++;}
		if (  ((Xfir==0)&&(TIR==1))  ||  ((Xfir2==0)&&(TIR==2))  ||  ((Xfir3==0)&&(TIR==3))  ||  ((Xfir4==0)&&(TIR==4))  ||  ((Xfir5==0)&&(TIR==5))  ){
		var bullet = new Bullet(camera, scene);
		bullets.push(bullet);
		//document.getElementById("FIR").style.opacity=1;
		}
		
		
	  if( (Xfir5==0) && (TIR==5)  ){
        document.getElementById("BULLETX5").style.opacity=0.3;	   
		audioCAN5.play();
		Xfir5=1;}
		
		if (  (Xfir4==0) &&  (TIR==4) ){
        document.getElementById("BULLETX4").style.opacity=0.3;
		audioCAN4.play();
		Xfir4=1;} 
		
		if (  (Xfir3==0) &&  (TIR==3) ){
        document.getElementById("BULLETX3").style.opacity=0.3;
		audioCAN3.play();
		Xfir3=1;}  
		
		if (  (Xfir2==0) &&  (TIR==2) ){
        document.getElementById("BULLETX2").style.opacity=0.3;
		audioCAN2.play();
		Xfir2=1;}  
		
	   if( (Xfir==0) && (TIR==1)  ){
        document.getElementById("BULLETX").style.opacity=0.3;	   
		audioCAN.play();    
		Xfir=1;
		
	
		}
	});  */
	
	

//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
		    var boxkey = BABYLON.Mesh.CreateBox("box1", 5, scene);
			boxkey.visibility = 0;
            // Create a particle system
            var particleSystem = new BABYLON.ParticleSystem("particles", 20000, scene);
            particleSystem.particleTexture = new BABYLON.Texture("img/game/flare.png", scene);//flare.png
        
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
			
			//boxkey.position =  new BABYLON.Vector3(-16, 3, 10);
//########################################### MATERIALS ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################   
 

	
	/*	 	var BARELM = new BABYLON.StandardMaterial("BAREl", scene);
	BARELM.diffuseTexture = new BABYLON.Texture("img/game/BA1.jpg", scene);
	BARELM.bumpTexture = new BABYLON.Texture("img/game/BA1N.jpg", scene);
	BARELM.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	 
	 	 var FIREM = new BABYLON.StandardMaterial("texture1", scene);
     FIREM.diffuseTexture = new BABYLON.Texture("img/game/amiga.jpg", scene); 
	 FIREM.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 
	 var FIREMW = new BABYLON.StandardMaterial("texture1", scene);
     FIREMW.diffuseTexture = new BABYLON.Texture("img/game/snow.jpg", scene);
	 FIREMW.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 */


	
//############################"""" SNOWMAN ###########################33
//############################"""" SNOWMAN ###########################33
//############################"""" SNOWMAN ###########################33
//############################"""" SNOWMAN ###########################33
//############################"""" SNOWMAN ###########################33	
	
	//BOAT
	
//var MAN2 = BABYLON.SceneLoader.ImportMesh("","./", "PLANE777.babylon", scene, function (newMeshes,partycleSystems) {MAN2=newMeshes[0];MAN2.position = new BABYLON.Vector3(83, 0.5, 35);MAN2.rotation.y=-1.96159;}); 


	
  /* 

	var boxQ = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene);boxQ.material = BARELM;
	boxQ.rotation.x=Math.PI/2;
	boxQ.parent = MAN1
	
	var boxQ2 = boxQ.clone(boxQ);
	boxQ2.position = new BABYLON.Vector3(-4, 0, -2);
	boxQ2.parent = MAN1

	var boxQ3 = boxQ.clone(boxQ);
	boxQ3.position = new BABYLON.Vector3(-8, 0, -3);
	boxQ3.parent = MAN1
	
	var boxQ4 = boxQ.clone(boxQ);
	boxQ4.position = new BABYLON.Vector3(-5, 3, -2);
	boxQ4.parent = MAN1
	
	boxQ.KILboat = "KILboat";boxQ2.KILboat = "KILboat";boxQ4.KILboat = "KILboat";boxQ4.KILboat = "KILboat";
	MAN1.KILboat = "KILboat";
	
	*/
	
	
	
	

	
	
//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################			

	/*	 var spriteManagerTreess = new BABYLON.SpriteManager("treesManager", "img/game/AR0.png", 70, 360, scene);//AR2;AR3.AR0
	for (var i = 0; i < 59; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess);
		trees.size = 30;
		var PORTtrees = BABYLON.Mesh.CreateCylinder("BAREL", 35, 10, 10, 4, scene);
		
		if(i<10){trees.position = new BABYLON.Vector3(340*(i)-1400,12,1560);
		        if(i==5){trees.position = new BABYLON.Vector3(340*(i)-1400,12,1680);}}
				
		if((i>=10)&&(i<20)){trees.position = new BABYLON.Vector3(340*(i)-4940,12,1060);}
		if((i>=20)&&(i<30)){trees.position = new BABYLON.Vector3(340*(i)-8300,12,560);
		        if((i==20)||(i==23)||(i==27)){trees.position = new BABYLON.Vector3(340*(i)-8200,12,600);}}
				
		if((i>=30)&&(i<39)){trees.position = new BABYLON.Vector3(340*(i)-11640,12,0);
	        	if((i==34)||(i==33)||(i==35)||(i==37)){trees.position = new BABYLON.Vector3(340*(i)-11640,12,70);}}
				
		if((i>=39)&&(i<49)){trees.position = new BABYLON.Vector3(340*(i)-14840,12,-680);
	        	if((i==39)||(i==41)||(i==43)||(i==45)||(i==47)){trees.position = new BABYLON.Vector3(340*(i)-14640,12,-600);}
				if(i==45){trees.position = new BABYLON.Vector3(340*(i)-14840,12,-450);}}


		if((i>=49)&&(i<59)){trees.position = new BABYLON.Vector3(340*(i)-18100,12,-900);
	        	if((i==50)||(i==55)||(i==57)){trees.position = new BABYLON.Vector3(340*(i)-18100,12,-1300);}
				}
		PORTtrees.position = new BABYLON.Vector3(trees.position.x,12,trees.position.z);PORTtrees.visibility=0;PORTtrees.checkCollisions = true;
		PORTtrees.TREE = "treeTOUCH";		
		}	*/
			

	
			

    //####################################### THE BOXS GAME
	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAMe
	

	/*
	var BAREL2 = new BABYLON.StandardMaterial("BAREl", scene); // METALIC
	BAREL2.diffuseTexture = new BABYLON.Texture("img/game/BA2.jpg", scene);
    BAREL2.bumpTexture = new BABYLON.Texture("img/game/BA2N.jpg", scene);	
	BAREL2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	
	var boxMaterial = new BABYLON.StandardMaterial("bMaterial", scene);
	boxMaterial.diffuseTexture = new BABYLON.Texture("img/game/box.jpg", scene);
	boxMaterial.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0); 
	
		var xxx;var yyy;
	for (var i = 0; i < 90; i++) {
		yyy = random(-800, 800); 
		

		if(i>30) {}	
		xxx = random(130, 1200);
		if(i<=30){var box = BABYLON.Mesh.CreateBox("box1", 5, scene); box.material = boxMaterial;}
		if(i>=70){var box = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene);box.material = BARELM;}
		if((i<70)&&(i>30)){var box = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene); box.material = BAREL2;box.BARELBOMBS = "BOMB";}
		box.position = new BABYLON.Vector3(xxx, 9.6 , yyy);
	   if (i>30) {box.rotation.x=Math.PI/2;box.position.y =9.0; }   
		//box.BARELBOMBS = "BOMB";	
		box.checkCollisions=true;} */
	













/*var SARIA = BABYLON.Mesh.CreateCylinder("cylinder", 110, 13, 13, 5, 1, scene, false);
    SARIA.position = new BABYLON.Vector3(40, 84.5, 0);
	SARIA.material = boxMaterial;//BAREL2;
	SARIA.parent = MAN1;

		var BARELMM = new BABYLON.StandardMaterial("BAREl", scene);
	BARELMM.diffuseTexture = new BABYLON.Texture("img/game/A17.png", scene);
	BARELMM.bumpTexture = new BABYLON.Texture("img/game/BA1N.jpg", scene);
	BARELMM.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
		var BOATC = BABYLON.Mesh.CreateSphere("torus", 1, 117, scene, false);// BIG BODY 
	     BOATC.scaling = new BABYLON.Vector3(2.7, 1.5, 0.0001);
		 BOATC.material = BARELMM;//MATPORTMONSTER;
         //BOATC.rotation.y = Math.PI/2;		 
		 BOATC.position = new BABYLON.Vector3(40, 152, 0);
		 BOATC.parent = MAN1;*/
	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	
//################################################ PLANE ################################	

	
	
	
/*
	var BCB1 = new BABYLON.StandardMaterial("BAREl", scene);
	//BCB1.emissiveColor = new BABYLON.Color3(0.0, 0.0, 1.0);
	BCB1.diffuseTexture =  new BABYLON.Texture("img/game/A15.jpg", scene);
	
	  
		var PLANE = BABYLON.Mesh.CreateSphere("torus", 11, 1, scene, false);// BIG BODY
		 PLANE.visibility=1;
		 PLANE.position = new BABYLON.Vector3(83, 0.5, 535); 
         PLANE.rotation.z = Math.PI/30;	
         PLANE.rotation.y=Math.PI/1.15;	


       var PLANEBOX = BABYLON.Mesh.CreateBox("torus", 8, scene, false);// BIG BODY
		 PLANEBOX.visibility=1;
		 PLANEBOX.scaling = new BABYLON.Vector3(0.2, 0.2, 4);	
         PLANEBOX.position = new BABYLON.Vector3(0, 1.0, 0);
         PLANEBOX.rotation.z = -Math.PI/30;			 
         PLANEBOX.parent = PLANE;	*/	 
		 

	var PLANE = BABYLON.Mesh.CreateBox("torus", 8, scene, false);// BIG BODY
		 PLANE.visibility=0;
		 PLANE.rotation.y=1.70159;//1.70159;
		 PLANE.position=new BABYLON.Vector3(83, 11.5, -535);
		 
	var PORTPLANE = BABYLON.Mesh.CreateBox("torus", 8, scene, false);// BIG BODY
		PORTPLANE.scaling = new BABYLON.Vector3(2.6, 0.5, 1.2);	
		PORTPLANE.position=new BABYLON.Vector3(-3, 0, 0);//(-3, 0, 0);
		PORTPLANE.visibility=0;
		PORTPLANE.checkCollisions = true; 
		PORTPLANE.parent = PLANE;
		
		
		

		
	
	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var spriteManagerBOMB = new BABYLON.SpriteManager("BOMBS", "img/game/EXPLOSION.gif", 1, 100, scene);
	var BOMB = new BABYLON.Sprite("fireee2", spriteManagerBOMB);BOMB.size=0;
	
	BOMB.playAnimation(0, 15, true, 100);
	
	
		scene.fogMode = BABYLON.Scene.FOGMODE_EXP;//;BABYLON.Scene.FOGMODE_EXP;BABYLON.Scene.FOGMODE_EXP2;BABYLON.Scene.FOGMODE_LINEAR
	    scene.fogDensity = 0.0;//0.0005;
	    scene.fogColor = new BABYLON.Color3(0,0, 0);
	

	
	
      
		 
		 
		 
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3		 
		 
/*	var RAW = BABYLON.Mesh.CreateTorus("torus", 44, 5, 30, scene, false);
		 RAW.material = FIREM;
		 RAW.rotation.x = Math.PI/2;RAW.rotation.y = Math.PI/2;
		 RAW.position = new BABYLON.Vector3(-290, 12, -380);
		 RAW.rotation.y = Math.PI/2.5;
		 
	var RAWS = BABYLON.Mesh.CreateSphere("torus", 10,40, scene);
	     RAWS.scaling = new BABYLON.Vector3(1, 1, 1);
         RAWS.tagUPQQ = "UP";RAWS.visibility = 0;
	     RAWS.checkCollisions = true; 
		 RAWS.position = new BABYLON.Vector3(-290, 12, -380);*/
		 

		 
		 
	/*var spriteManagerENERG = new BABYLON.SpriteManager("spriteManagerKEY", "img/game/ENERG.png", 1, 60, scene);
	var LOADENERG = new BABYLON.Sprite("BOMB", spriteManagerENERG);LOADENERG.size = 30; 
	LOADENERG.position = new BABYLON.Vector3(-290, 12, -380);*/
	
	
	var spriteManagerPIRATE1 = new BABYLON.SpriteManager("spriteManagerKEY", "img/game/PIRATE1.png", 1, 360, scene);
	var spriteManagerPIRATE2 = new BABYLON.SpriteManager("spriteManagerKEY", "img/game/PIRATE2.png", 1, 200, scene);
	var spriteManagerPIRATE3 = new BABYLON.SpriteManager("spriteManagerKEY", "img/game/PIRATE3.png", 1, 340, scene);
	var spriteManagerPIRATE4 = new BABYLON.SpriteManager("spriteManagerKEY", "img/game/PIRATE4.png", 1, 240, scene);
	var spriteManagerPIRATE5 = new BABYLON.SpriteManager("spriteManagerKEY", "img/game/PIRATE5.png", 1, 324, scene);
	var spriteManagerPIRATE6 = new BABYLON.SpriteManager("spriteManagerKEY", "img/game/PIRATE6.png", 1, 324, scene);
	var spriteManagerPIRATE7 = new BABYLON.SpriteManager("spriteManagerKEY", "img/game/PIRATE7.png", 1, 260, scene);
	var spriteManagerPIRATE = new BABYLON.SpriteManager("spriteManagerKEY", "img/game/PIRATE4.png", 1, 240, scene);
	
	var PIRATE1 = new BABYLON.Sprite("BOMB", spriteManagerPIRATE1);PIRATE1.size = 120; 
	var PIRATE2 = new BABYLON.Sprite("BOMB", spriteManagerPIRATE2);PIRATE2.size = 0; 
	var PIRATE3 = new BABYLON.Sprite("BOMB", spriteManagerPIRATE3);PIRATE3.size = 0; 
	var PIRATE4 = new BABYLON.Sprite("BOMB", spriteManagerPIRATE4);PIRATE4.size = 0; 
	var PIRATE5 = new BABYLON.Sprite("BOMB", spriteManagerPIRATE5);PIRATE5.size = 0; 
	var PIRATE6 = new BABYLON.Sprite("BOMB", spriteManagerPIRATE6);PIRATE6.size = 0; 
	var PIRATE7 = new BABYLON.Sprite("BOMB", spriteManagerPIRATE7);PIRATE7.size = 0; 
	PIRATE1.position = new BABYLON.Vector3(0, 155, 0);
	
	


//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3		

/*
var materialSUPER = new BABYLON.StandardMaterial("te2", scene);//materialSUPER.diffuseTexture = new BABYLON.Texture("images/w1.jpg", scene);
	materialSUPER.diffuseColor = new BABYLON.Color3(0, 0, 1); 
    materialSUPER.alpha = 0.5;
	
var PORTEARTH = BABYLON.Mesh.CreateSphere("torus", 0.001,0.001, scene);                           
PORTEARTH.position = new BABYLON.Vector3(27, 18.4, -2);
PORTEARTH.material = materialSUPER;

var EARTH1 = BABYLON.SceneLoader.ImportMesh("","./", "EARTH1.babylon", scene, function (newMeshes,partycleSystems) {EARTH1=newMeshes[0];
EARTH1.position = new BABYLON.Vector3(2, 0, 0);
EARTH1.scaling = new BABYLON.Vector3(1.9, 1.9, 1.9);EARTH1.rotation.y=6.16;
EARTH1.parent=PORTEARTH;
});*/
		 
var MONST = BABYLON.Mesh.CreateSphere("torus", 1,0.001, scene);                           
MONST.position = new BABYLON.Vector3(83, 6.5, 535);MONST.rotation.y=1.14159;	 
                                                       
/**/
var MONSTER01 = BABYLON.SceneLoader.ImportMesh("","./", "BOATT1.babylon", scene, function (newMeshes,partycleSystems) {MONSTER01=newMeshes[0];
MONSTER01.position = new BABYLON.Vector3(0, 0.4, 0);
MONSTER01.visibility=1;
MONSTER01.parent = PLANE;
MONSTER01.rotation.y=4.59;});


var MONSTER03 = BABYLON.SceneLoader.ImportMesh("","./", "BOATT3.babylon", scene, function (newMeshes,partycleSystems) {MONSTER03=newMeshes[0];
MONSTER03.position = new BABYLON.Vector3(0, 0.4, 0);
MONSTER03.parent = PLANE;
MONSTER03.visibility=0;
MONSTER03.rotation.y=4.59;});

var MAN2 = BABYLON.SceneLoader.ImportMesh("","./", "BOATMONSTER.babylon", scene, function (newMeshes,partycleSystems) {MAN2=newMeshes[0];
MAN2.scaling = new BABYLON.Vector3(1.6, 1.6, 1.6);
MAN2.position = new BABYLON.Vector3(0, 105.0, 0);
MAN2.checkCollisions=true;

}); 

/*var MAN2 = BABYLON.Mesh.CreateSphere("torus", 4,5, scene); 
MAN2.position = new BABYLON.Vector3(0, 105.0, 0);
MAN2.checkCollisions=true;


var MONSTER01 = BABYLON.Mesh.CreateSphere("torus", 4,5, scene); 
MONSTER01.position = new BABYLON.Vector3(0, 0.4, 0);
MONSTER01.visibility=1;
MONSTER01.parent = PLANE;

var MONSTER03 = BABYLON.Mesh.CreateSphere("torus", 4,5, scene);
MONSTER03.position = new BABYLON.Vector3(0, 0.4, 0);
MONSTER03.parent = PLANE;
MONSTER03.visibility=0;
MONSTER03.rotation.y=4.59;

var MONSTER02 = BABYLON.SceneLoader.ImportMesh("","./", "BOATT2.babylon", scene, function (newMeshes,partycleSystems) {MONSTER02=newMeshes[0];
MONSTER02.position = new BABYLON.Vector3(0, 0.4, 0);
MONSTER02.parent = PLANE;
MONSTER02.visibility=0;
MONSTER02.rotation.y=4.59;});*/

/*
var MONSTER02 = BABYLON.SceneLoader.ImportMesh("","./", "BOAT1.babylon", scene, function (newMeshes,partycleSystems) {MONSTER02=newMeshes[0];
MONSTER02.position = new BABYLON.Vector3(0, 0.4, 0);
MONSTER02.parent = PLANE;
MONSTER02.visibility=0;
MONSTER02.rotation.y=6.16;});

var MONSTER03 = BABYLON.SceneLoader.ImportMesh("","./", "BOAT1.babylon", scene, function (newMeshes,partycleSystems) {MONSTER03=newMeshes[0];
MONSTER03.position = new BABYLON.Vector3(0, 0.4, 0);
MONSTER03.parent = PLANE;
MONSTER03.visibility=0;
MONSTER03.rotation.y=6.16;

var MONSTER02 =BABYLON.SceneLoader.ImportMesh("","./", "BOATPIRATE1.babylon", scene, function (newMeshes,partycleSystems) {MONSTER02=newMeshes[0];
MONSTER02.position = new BABYLON.Vector3(0, -3.4, 0);
MONSTER02.parent = PLANE;
MONSTER02.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
MONSTER02.visibility=0;
MONSTER02.rotation.y=-1.66;});
var MONSTER04 = BABYLON.SceneLoader.ImportMesh("","./", "BOATX2.babylon", scene, function (newMeshes,partycleSystems) {MONSTER04=newMeshes[0];
MONSTER04.position = new BABYLON.Vector3(0, 0.4, 0);
MONSTER04.scaling = new BABYLON.Vector3(0.15, 0.15, 0.15);
MONSTER04.parent = PLANE;
MONSTER04.visibility=0;
MONSTER04.rotation.x=0.0;
MONSTER04.rotation.y=-0.06;});*/



/*var MANX1 = BABYLON.SceneLoader.ImportMesh("","./", "BOATX3.babylon", scene, function (newMeshes,partycleSystems) {MANX1=newMeshes[0];
MANX1.scaling = new BABYLON.Vector3(7, 7, 7);
MANX1.position = new BABYLON.Vector3(-300, 13.0, 40);
MANX1.checkCollisions=true;}); 


				
				
var MAN2 = BABYLON.SceneLoader.ImportMesh("","./", "BOATMONSTER.babylon", scene, function (newMeshes,partycleSystems) {MAN2=newMeshes[0];
MAN2.scaling = new BABYLON.Vector3(62, 62, 62);
MAN2.position = new BABYLON.Vector3(0, 37.5, 0);//-83, 37.5, -608
MAN2.rotation.y=2.08159;
MONSTER0.rotation.x=0.3;
MAN2.checkCollisions=true;
}); */
	
	
    var MAN1 = BABYLON.Mesh.CreateBox("MONSTERfire1", 100, scene);
	MAN1.position = new BABYLON.Vector3(0, 124.5, 0);
	MAN1.visibility=0;

		/*canvas.addEventListener("mousedown", function (e) {
	    if(START==1){CANON2.play();SNIPicon.style.width = SNIPicon.style.height = 120 + 'px';	
		            VIBR++;
                    if(monsterSNIPED==1){monsterKILLED++;}}
					 }); */ 
  
  		canvas.addEventListener("mousedown", function (e) {//click dblclick onclick ondblclick   mouseover  mouseout  mousemove
	         if(SPEEDC>=10){planeUPER=1;}
	              }); 
 
  		canvas.addEventListener("dblclick", function (e) {//click dblclick onclick ondblclick   mouseover  mouseout  mousemove
	         if(mT1==0){planeSUPER=1;}
	              }); 				  
  
		scene.registerBeforeRender(function () {
		

		//if  (PLANE.intersectsMesh(RAWS, false)) {BON++;} 
		
		//if  (PLANE.intersectsMesh(MAN1, false)) {monsterKILLED++;} 
		/*if (   (PORTPLANE.intersectsMesh(MAN1, false))&&(camera.position.x!=36)&&(camera.position.y!=-3)  )

		{monsterSNIPED=1;monsterKILLED++;} 
		else  
		if (SNIP!=0){monsterSNIPED=0;} 
		*/
		//(-83, 17.5, -608)
		if (   (PORTPLANE.intersectsMesh(MAN1, false))&&(STARTER>=1)  )//&&(CAMX.innerHTML!=36)&&(CAMY.innerHTML!=-3)
		{monsterKILLED++;} 
		//else  
		//if (SNIP!=0){monsterSNIPED=0;} 
		
	if (ROT3D==1){WALK++;}	//MONSTER0.rotation.y=
	if ((ROT3D==1)&&(WALK>=31)){MONST.rotation.y=WALK*Math.PI/100;PLANE.rotation.y=(-Math.PI/2)+(WALK*Math.PI/100);}
	
      
	var size = scene.meshes.length;  
	var i=0;
	while (i < size ) {  
	
		/*if (  (scene.meshes[i].TREE && PLANE.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=110)   )  {// DESTROY PLANT
				treesTOUCH++;}
				
		if (  (scene.meshes[i].BARELBOMBS && PLANE.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=110)   )  {
				boombTOUCH++;  
				
				}*/
				
				i++;}  
		       });	 
		   

		   
		   
		   
	 var BOXexplose11 = new BABYLON.SpriteManager("fireanim2", "img/game/EXPLOSION.gif", 1, 100, scene);	

/*
	
              //SAHRA
			 var groundUP2 = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img/game/MAPRIVER.jpg", 4000, 4000, 100, 2, 4.5, scene, false);//1,MAPGARDEN
            var groundMaterialUP2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialUP2.diffuseTexture = new BABYLON.Texture("img/game/water.jpg", scene);//WATER1  snow ground4,snow.
			groundMaterialUP2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialUP2.diffuseTexture.uScale = 86;//46
            groundMaterialUP2.diffuseTexture.vScale = 90;//50
            groundUP2.position = new BABYLON.Vector3(0,-2.1,0);//0,-1.5,0);
			groundUP2.scaling = new BABYLON.Vector3(1,1,1);
            groundUP2.material = groundMaterialUP2;

			
			 var groundUP = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img/game/MAPSNOW.jpg", 4000, 4000, 100, 2, 150.5, scene, false);//1,MAPGARDEN
            var groundMaterialUP = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialUP.diffuseTexture = new BABYLON.Texture("img/game/ground2.jpg", scene);//ground2 snow ground4,snow.
			groundMaterialUP.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialUP.diffuseTexture.uScale = 36;//36
            groundMaterialUP.diffuseTexture.vScale = 20;//20
            groundUP.position = new BABYLON.Vector3(0,-1.1,0);//0,-1.5,0);
			groundUP.scaling = new BABYLON.Vector3(1,1,1);
            groundUP.material = groundMaterialUP;
			
			
             //SNOW
			 var groundUP2S = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img/game/MAPRIVER.jpg", 4000, 4000, 100, 2, 4.5, scene, false);//1,MAPGARDEN
            var groundMaterialUP2S = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialUP2S.diffuseTexture = new BABYLON.Texture("img/game/WATER1.jpg", scene);//WATER1  snow ground4,snow.
			groundMaterialUP2S.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialUP2S.diffuseTexture.uScale = 86;//46
            groundMaterialUP2S.diffuseTexture.vScale = 90;//50
            groundUP2S.position = new BABYLON.Vector3(0,-2.1,0);//0,-1.5,0);
            groundUP2S.material = groundMaterialUP2S;
			groundUP2S.visibility=0

			
			 var groundUPS = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img/game/MAPSNOW.jpg", 4000, 4000, 100, 2, 150.5, scene, false);//1,MAPGARDEN
            var groundMaterialUPS = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialUPS.diffuseTexture = new BABYLON.Texture("img/game/snow.jpg", scene);//ground2 snow ground4,snow.
			groundMaterialUPS.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialUPS.diffuseTexture.uScale = 46;//36
            groundMaterialUPS.diffuseTexture.vScale = 50;//20
            groundUPS.position = new BABYLON.Vector3(0,-1.1,0);//0,-1.5,0);
            groundUPS.material = groundMaterialUPS;
			groundUPS.visibility=0*/
			
			
           /* var groundMaterialSNOW = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSNOW.diffuseTexture = new BABYLON.Texture("img/game/snow.jpg", scene);// snow ground4,snow.
			groundMaterialSNOW.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSNOW.diffuseTexture.uScale = 46;//36   146
            groundMaterialSNOW.diffuseTexture.vScale = 50;//20   150
           var groundMaterialSNOW2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSNOW2.diffuseTexture = new BABYLON.Texture("img/game/snow.jpg", scene);// snow ground4,snow.
			groundMaterialSNOW2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSNOW2.diffuseTexture.uScale = 246;//36   146
            groundMaterialSNOW2.diffuseTexture.vScale = 250;//20   150
			

	      var groundMaterialSAHRA2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSAHRA2.diffuseTexture = new BABYLON.Texture("img/game/WATER.jpg", scene);// snow ground4,snow.
			groundMaterialSAHRA2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSAHRA2.diffuseTexture.uScale = 246;//36   146
            groundMaterialSAHRA2.diffuseTexture.vScale = 250;//20   150
			

			
		var groundMaterialWATER1 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialWATER1.diffuseTexture = new BABYLON.Texture("img/game/WATER1.jpg", scene);// snow ground4,snow.
			groundMaterialWATER1.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER1.diffuseTexture.uScale = 146;//36   146
            groundMaterialWATER1.diffuseTexture.vScale = 150;//20   150
			
	   
			
         var groundRIVERS = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img/game/MAPRIVER2.jpg", 30000, 30000, 200, 2, 4.5, scene, false);//1,MAPGARDEN
            var materialRIVERS = new BABYLON.StandardMaterial("groundUP", scene);
            materialRIVERS.diffuseTexture = new BABYLON.Texture("img/game/WATER1.jpg", scene);//WATER1  snow ground4,snow.
			materialRIVERS.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            materialRIVERS.diffuseTexture.uScale = 86;//46
            materialRIVERS.diffuseTexture.vScale = 90;//50
            groundRIVERS.position = new BABYLON.Vector3(0,-1.9,0);//0,-1.5,0);
            groundRIVERS.material = materialRIVERS;
			groundRIVERS.visibility=0
			
			var groundRIVERSH = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img/game/MAPRIVER2.jpg", 30000, 30000, 300, 2, 4.5, scene, false);//1,MAPGARDEN
            groundRIVERSH.position = new BABYLON.Vector3(0,-2.1,0);
            groundRIVERSH.material = groundMaterialWATER;*/
			
			
			var groundMaterialROCK1 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK1.diffuseTexture = new BABYLON.Texture("img/game/rock4.jpg", scene);//rock5:8
			groundMaterialROCK1.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK1.diffuseTexture.uScale = 36;//46   146
            groundMaterialROCK1.diffuseTexture.vScale = 40;//50   150	
			var groundMaterialROCK2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK2.diffuseTexture = new BABYLON.Texture("img/game/rock2.jpg", scene);
			groundMaterialROCK2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK2.diffuseTexture.uScale = 36;
            groundMaterialROCK2.diffuseTexture.vScale = 40;
			var groundMaterialROCK3 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK3.diffuseTexture = new BABYLON.Texture("img/game/snow.jpg", scene);
			groundMaterialROCK3.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK3.diffuseTexture.uScale = 36;
            groundMaterialROCK3.diffuseTexture.vScale = 40;
			var groundMaterialROCK4 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK4.diffuseTexture = new BABYLON.Texture("img/game/ground2.jpg", scene);//RMAL
			groundMaterialROCK4.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK4.diffuseTexture.uScale = 36;
            groundMaterialROCK4.diffuseTexture.vScale = 40;
			var groundMaterialROCK5 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK5.diffuseTexture = new BABYLON.Texture("img/game/rock5.jpg", scene);
			groundMaterialROCK5.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK5.diffuseTexture.uScale = 36;
            groundMaterialROCK5.diffuseTexture.vScale = 40;
			var groundMaterialROCK6 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCK6.diffuseTexture = new BABYLON.Texture("img/game/rock10.jpg", scene);//rock10
			groundMaterialROCK6.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCK6.diffuseTexture.uScale = 46;
            groundMaterialROCK6.diffuseTexture.vScale = 50;
			
			
			
			
	      var groundMaterialWATER = new BABYLON.StandardMaterial("groundUP", scene); 
            groundMaterialWATER.diffuseTexture = new BABYLON.Texture("img/game/WATER.jpg", scene);//water 
			groundMaterialWATER.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER.diffuseTexture.uScale = 146;//36   146
            groundMaterialWATER.diffuseTexture.vScale = 150;//20   150
			
	      var groundMaterialWATER1 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialWATER1.diffuseTexture = new BABYLON.Texture("img/game/WATER1.jpg", scene);//WATER3
			groundMaterialWATER1.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER1.diffuseTexture.uScale = 146;//36   146
            groundMaterialWATER1.diffuseTexture.vScale = 150;//20   150
			
	      var groundMaterialWATER2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialWATER2.diffuseTexture = new BABYLON.Texture("img/game/WATER2.jpg", scene);//WATER1
			groundMaterialWATER2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER2.diffuseTexture.uScale = 146;//36   146
            groundMaterialWATER2.diffuseTexture.vScale = 150;//20   150
			
	      var groundMaterialWATER3 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialWATER3.diffuseTexture = new BABYLON.Texture("img/game/WATER3.jpg", scene);//WATER3
			groundMaterialWATER3.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER3.diffuseTexture.uScale = 146;//36   146
            groundMaterialWATER3.diffuseTexture.vScale = 150;//20   150
			

			
	      var groundMEGAROCK = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img/game/MAPVALEY1.jpg", 30000, 30000, 100, 0, 450.5, scene, false);//MAPVALEY1  100, 0, 450.5,
            groundMEGAROCK.position = new BABYLON.Vector3(0,-72,0);//(0,-72.0,0);
			groundMEGAROCK.material = groundMaterialROCK5;groundMEGAROCK.visibility=1;
	
		var groundMEGAROCK2 = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img/game/MAPVALEY1.jpg", 30000, 30000, 100, 0, 50.5, scene, false);groundMEGAROCK2.position = new BABYLON.Vector3(0,1988,0);
			groundMEGAROCK2.material = groundMaterialROCK4;groundMEGAROCK2.visibility=0;
			
	      var groundMEGAWATER = BABYLON.Mesh.CreatePlane("groundGRASS",30000, scene, false);//1,MAPGARDEN
		      groundMEGAWATER.rotation.x = Math.PI / 2;
              groundMEGAWATER.position = new BABYLON.Vector3(0,-5.0,0);//(0,5.0,0);
			  groundMEGAWATER.material = groundMaterialWATER;
			//groundMEGAWATER.visibility=1;	

		 var spriteManagerTreess3 = new BABYLON.SpriteManager("treesManager", "img/game/AR5.png", 300, 300, scene);//400GREEN
		  var xxx1 =0;var zzz1=0; 
	for (var i = 0; i < 300; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess3);trees.size = 180;
		//var PORTtrees = PORTtreesORG.clone(PORTtreesORG);
		xxx1 = random(-11900, 11900);zzz1 = random(-11900, 11900);
		if((xxx1<=500)&&(xxx1>=-500)&&(zzz1<=500)&&(zzz1>=-500)){xxx1=xxx1+600;zzz1=zzz1+600;}
		trees.position = new BABYLON.Vector3(xxx1,2033,zzz1);
		//PORTtrees.position = new BABYLON.Vector3(xxx1,26,zzz1);PORTtrees.TREE = "treeTOUCH";
		}			
		

			var sun = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(60, 100+UPLEVEL, 10), scene);
// Water
          BABYLON.Engine.ShadersRepository = ""; 
		 //BABYLON.Engine.ShadersRepository = "/Babylon/Shaders/";
		 // BABYLON.Engine.ShadersRepository = "";
         //var water = BABYLON.Mesh.CreateGround("water", 30000, 30000, 1, scene, false);
		 var water = BABYLON.Mesh.CreatePlane("water", 30000, scene, false);
		 water.rotation.x = Math.PI / 2;
		 //var water = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img/game/MAPRIVER2.jpg", 30000, 30000, 300, 2, 4.5, scene, false);
		 water.position = new BABYLON.Vector3(0,8.1,0);
         var waterMaterial = new WaterMaterial("water", scene, sun);
         waterMaterial.refractionTexture.renderList.push(groundMEGAWATER);
         //waterMaterial.refractionTexture.renderList.push(MONSTER01);
		 //waterMaterial.reflectionTexture.renderList.push(MONSTER02);
		 waterMaterial.refractionTexture.renderList.push(groundMEGAROCK);
		 waterMaterial.refractionTexture.renderList.push(groundMEGAROCK2);
         waterMaterial.reflectionTexture.renderList.push(groundMEGAWATER);
         water.material = waterMaterial;					 
	   
	   
			
			

	
	var SK1 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK1.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK1.rotation.y = Math.PI / 2;
	SK1.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK1.material.diffuseTexture = new BABYLON.Texture("img/game/skybox/2/skybox_nx.jpg", scene);
	SK1.position = new BABYLON.Vector3(2000,1000,0);
	SK1.checkCollisions = true;
	
	var SK2 = BABYLON.Mesh.CreateBox("3groundGRoutBOG", 4000, scene);
	SK2.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK2.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK2.material.diffuseTexture = new BABYLON.Texture("img/game/skybox/2/skybox_nz.jpg", scene);
	SK2.position = new BABYLON.Vector3(0,1000,2000);
	SK2.checkCollisions = true;
	
	var SK3 = BABYLON.Mesh.CreateBox("6groundGRoutBOG", 4000, scene);
	SK3.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK3.rotation.y = Math.PI;
	SK3.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK3.material.diffuseTexture = new BABYLON.Texture("img/game/skybox/2/skybox_pz.jpg", scene);
	SK3.position = new BABYLON.Vector3(0,1000,-2000);
	SK3.checkCollisions = true;
	
	var SK4 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK4.scaling = new BABYLON.Vector3(1,0.5,0.001);
	SK4.rotation.y = Math.PI/2 ;
	SK4.rotation.z = Math.PI ;
	SK4.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK4.material.diffuseTexture = new BABYLON.Texture("img/game/skybox/2/skybox_px.jpg", scene);
	SK4.position = new BABYLON.Vector3(-2000,1000,0);
	SK4.checkCollisions = true;
	
	var SK5 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK5.scaling = new BABYLON.Vector3(1,1,0.0001);
	SK5.rotation.x = Math.PI/2 ;
	SK5.rotation.z = Math.PI/2 ;
	SK5.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK5.material.diffuseTexture = new BABYLON.Texture("img/game/skybox/2/skybox_ny.jpg", scene);
	SK5.position = new BABYLON.Vector3(0,1990,0);
	SK5.checkCollisions = true;
	
	SK1.infiniteDistance = true;
	SK2.infiniteDistance = true;
	SK3.infiniteDistance = true;
	SK4.infiniteDistance = true;
	SK5.infiniteDistance = true;
	SK1.material.emissiveColor = SK2.material.emissiveColor = SK3.material.emissiveColor = SK4.material.emissiveColor =SK5.material.emissiveColor =  new BABYLON.Color3(1.0, 1.0, 1.0);
	
	
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/

   //camera.rotation.y=-1.070796;
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
				   
if(sunchange==1){BOUTTON1.play();  sunchange=0;scene.fogDensity = (10-sundegree)/1000;}	

//WALK1++;PORTEARTH.rotation.y=WALK1*Math.PI/50;


	if((RESTART==1)||(FIRSTANM==1)){FIRSTANM=3;CAR.pause();SS1=0;SS2=0;SS=0;//MEETBOAT=0;
	    PIRATENUMBER.innerHTML = 0;UPLEVEL=0;
	    groundMEGAWATER.position.y=-5.0;
		water.position.y=8.1;
		groundMEGAROCK.visibility=1;groundMEGAROCK2.visibility=0;
        groundMEGAWATER.material = groundMaterialWATER;
		groundMEGAROCK.material=groundMaterialROCK5;
		

	    sun.position.y=100;
		PIRATE1.size = 120;
		TOPmenu2.style.height = TOPmenu2.style.width = 0 + 'px';
        TOPmenu2.style.opacity = 0; 
	    PIRATE2.size = PIRATE3.size = PIRATE4.size = PIRATE5.size = PIRATE6.size = PIRATE7.size =   0;
		PIRATEicon1.style.opacity=PIRATEicon2.style.opacity=PIRATEicon3.style.opacity=
        PIRATEicon4.style.opacity=PIRATEicon5.style.opacity=PIRATEicon6.style.opacity=PIRATEicon7.style.opacity=1.0;
		
		
		MONST.rotation.y=1.14159;
		//SNIPicon.style.width = SNIPicon.style.height = 50 + 'px';
		//MISSILicon.style.width = MISSILicon.style.height = 0 + 'px';
		//MONSTER0.rotation.y=2.10159;//1.14159;
	
			  // KEY=KEYSS=0;
	     //BOMB.stopAnimation();BOMB.size=0;
		 speed.innerHTML=0;
	     ANIMR=1;PLANE.rotation.x=0;camera.rotation.x=0;
         START=0;score.innerHTML=score1=0;//RESTART=0;
		 BOUTTON.play();
		 
		 camera.rotation.x =0;
		 camera.rotation.y=2.090796;PLANE.rotation.y=3.33159;//3.24159;
		 //PLANE.rotation.y=1.70159;//2.74159;
		
		 
		 //STOPicon.style.width = STOPicon.style.height = 0 + 'px';
		 ENERGIE=300;SPEEDC=1;
		 SUPER=planeSUPER=0;PLANESUPER1.pause();
		 ENERG.style.height = ENERGIE + 'px';
		 STARTicon.style.width = STARTicon.style.height = 60 + 'px';
		 STOPicon.style.width = STOPicon.style.height = 0 + 'px';
		 if(RESTART==1){RESTARTicon.style.width = RESTARTicon.style.height = 0 + 'px';RESTART=2;FIRSTANM=0;}
		 //ENERGicon.style.width = ENERGicon.style.height = 60 + 'px';
		 
		 camera.position = new BABYLON.Vector3(-29, 19, 16);//((-29, 19, 16);
		 PLANE.position = new BABYLON.Vector3(0, 17.5, 1); //((0, 15.5, -1)
		 
		 monsterPOS.style.opacity=1;
		 monsterPOS2.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=
		 monsterPOS5.style.opacity=monsterPOS6.style.opacity=monsterPOS7.style.opacity=0;
		 
		 document.getElementById("BOUSL").style.transform = document.getElementById("RAKAS").style.transform = "rotate(0deg)";
		 document.getElementById("RAKAS2").style.transform = "rotate(-122deg)"; 
		 
        scene.fogDensity = 0.0;

		 
		 MAN2.position = new BABYLON.Vector3(-83, 105.0, -608);//(-83, 17.5, -608) (83, 0.5, 35);
		 MAN1.position = new BABYLON.Vector3(-83, 125, -608);
		 PIRATE1.position = new BABYLON.Vector3(0, 155, 0);
         MAN2.rotation.y=2.08159;
		 DXXm=DYYm=0;
		 
		 DELTAXm = DELTAYm=-10;//-10
		 
					
	     treesTOUCH=TT=TT1=0;ALERT.pause();//ALERT2.pause();//KEYF.size=0;
		 
		 
		 
		 planeUPER=UPER=UPRR=UPRR1=0;PLANE.rotation.z=0.0;camera.rotation.x =0;SPEEDC=10;
	            PLANE.rotation.z = Math.PI/30;//camera.position.y = PLANE.position.y+6;
		 //boombTOUCH=bb=0;
		 }	


	if (ANIMR==1)
	    {anim ++; //0.0805
	    if(anim<40){camera.rotation.y+=0.0701;camera.position.x+=1.68;camera.position.y+=-0.0;camera.position.z+=-0.5;
		             PLANE.position.y+=-0.1;} 
		if(anim==40) {//camera.position = new BABYLON.Vector3(106, 7.5, 544);
		ANIMR=anim=0;STARTER=0;//(100, 7.5, 541)
					//camera.position = new BABYLON.Vector3(104, 7.5, 543);
					MONST.rotation.y=camera.rotation.y;
		            MAN2.rotation.y=1.34159;PLANE.rotation.x=0;
					
		    if(RESTART==2){RESTART=0;ROT3D=1;}
				
					   }              }  	 
		 
					
					
					
				
	

	LIGHTmov.position = new BABYLON.Vector3(camera.position.x,camera.position.y, camera.position.z);
			
	 //if (START==0){speed.innerHTML =0;}
if(CARRR==1){MONSTER01.visibility=1;MONSTER03.visibility=0;CARRR=5;}/*MONSTER02.visibility=*/
//if(CARRR==2){MONSTER02.visibility=1;MONSTER01.visibility=MONSTER03.visibility=0;CARRR=5;}
if(CARRR==3){MONSTER03.visibility=1;MONSTER01.visibility=0;CARRR=5;}/*MONSTER02.visibility=*/
//if(CARRR==4){MONSTER03.visibility=1;MONSTER01.visibility=MONSTER02.visibility=0;CARRR=5;}			   
 
     if ((START==1)&&(anim==0)){
	 
	if(STARTER<=3){STARTER++};
    //if(STARTER>3){STARTER++};	
//#######################################################################################################################################
		//EARTH1.rotation.y=Math.PI/100;	
        //if(ENERGIE>=0){ENERGIE-=0.01*SPEEDC;}
		ENERG.style.height = ENERGIE1 +'px';
		score1+=SPEEDC;
		//if(SPEEDC>=10){score1+=10;}if(SPEEDC==3){score1+=1;}
		score.innerHTML = parseInt(score1);
		speed.innerHTML = parseInt(SPEEDC*12);
		


		XDISTANCE = Math.abs(PLANE.position.x - MAN2.position.x)/100;
		YDISTANCE = Math.abs(PLANE.position.z - MAN2.position.z)/100;
		ENERGIE1= 300 - (XDISTANCE + YDISTANCE);
        if(ENERGIE1<10){ENERGIE1=10;}		

		   
	/*
		if(ENERGIE1<60){ENERGIE1=60;}
		

if( (  Math.abs(PLANE.position.x - MAN2.position.x) <= 600 )  ||  (  Math.abs(PLANE.position.z - MAN2.position.z) <= 600 )  )
		     		
		     {ENERGIE1= 300 - Math.abs(PLANE.position.z - MAN2.position.z)/4  -  ( Math.abs(PLANE.position.x - MAN2.position.x)/4 )
			    if(ENERGIE1<60){ENERGIE1=60;}
			 }
		   else
		     {ENERGIE1=60;}

		
			 
			 */
		
	
//#######################################################################################################################################
	
	/*if  (treesTOUCH>=2){TT++;TT1=1;}
	     if(TT==1){CHANGE.play();scene.fogDensity = 0.007;ENERGIE-=10;}//CHANGE.play();
	     if(TT==2){HAHA.play();}
		 if(TT>=6){treesTOUCH=TT=0;} 
		 if(TT1>=1){TT1++;}
		       if(TT1>=90){TT1=0;scene.fogDensity = 0;}  

			   
	if(boombTOUCH>=1){bb++;
	     if(bb==1){LIGHTmov.diffuse = new BABYLON.Color3(1, 0, 0);   //PLANE.material = fireMaterial;	
			 EXPLOS1.play();BOMB.position = new BABYLON.Vector3(PLANE.position.x,3,PLANE.position.z);BOMB.playAnimation(0, 16, true, 100);BOMB.size=30;}
		 if(bb<90){camera.rotation.y+=0.0805;camera.rotation.x+=0.0805;BOMB.position = new BABYLON.Vector3(PLANE.position.x,PLANE.position.y,PLANE.position.z);}  }
		 if(bb>=90){boombTOUCH=bb=0;camera.rotation.x=0;BOMB.stopAnimation();BOMB.size=0;LIGHTmov.diffuse = new BABYLON.Color3(1, 1, 1);}//RESTART=1;
		 */
		 

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
	   PLANE.position = camera.position.clone();
	        var DIR1;
            DIR1 = getForwardVector(camera.rotation);
	        DIR1.normalize();
	        PLANE.position.x +=DIR1.x * (SPEEDC+33);//18//4 //23.4
	        PLANE.position.z +=DIR1.z * (SPEEDC+33);
			
		if(PIRATENUMBER.innerHTML==2){DELTAY1 = groundMEGAROCK2.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
        if(PIRATENUMBER.innerHTML!=2){DELTAY1 = groundMEGAROCK.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}//groundMEGAROCK
			

			
		if(PIRATENUMBER.innerHTML==2){if(DELTAY1<=2017.5){DELTAY1=2017.5;}  } 
		if(PIRATENUMBER.innerHTML!=2){if(DELTAY1<=17.5){DELTAY1=17.5;}   }	 
			 
			//if(SPEEDC>=5){ }
		if(planeSUPER==0){
		    UP+=-0.05;
            BOATY=BOATY+UP;
            if(BOATY<=-5){BOATY=-5;UP=SPEEDC/90;}  }	//UP=0.5;	   
			 
            if(UPER<=0){ PLANE.position.y = 17.5+BOATY+UPLEVEL;camera.position.y = 17.5+UPLEVEL;}
			if(UPER>=1) { PLANE.position.y = 17.5+BOATY+UPRR-UPRR1+UPLEVEL;camera.position.y = 17.5+UPLEVEL+(UPRR-UPRR1)/1.2;}
            

			//camera.position.y = DELTAY1+(UPRR-UPRR1)/1.2;//camera.position.y = DELTAY1+(UPRR-UPRR1)/1.2;  camera.position.y = PLANE.position.y+6;				 
			//PLANE.position.y = camera.position.y = 17;	
		/*	if(SPEEDC>=5){VIBR2++;
 	     if((VIBR2 >= 1)&&(VIBR2 <= 13)){PLANE.position.y+=0.15;}
		 if((VIBR2 > 13)&&(VIBR2 <= 26)){PLANE.position.y+=-0.15;} 
		 if(VIBR2 > 26){VIBR2=1;}}*/		
			
			
			//PLANE.position.y =17.5+UPRR-UPRR1;
			MONST.position = new BABYLON.Vector3(PLANE.position.x,PLANE.position.y, PLANE.position.z);
	

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
   	
   
  if (keys.left==1){camera.rotation.y+=-0.05;PLANE.rotation.y+=-0.05;root++;
		    MONST.rotation.y+=-0.05;//MONSTER0.rotation.y+=-0.05; 
			} //move left                     
   
  if (keys.right==1){camera.rotation.y+=0.05;PLANE.rotation.y+=0.05;root++;
		    MONST.rotation.y+=0.05;//MONSTER0.rotation.y+=0.05;  
			} //move right
		  
		  

  
   if ((keys.left==0)&&(MONST.rotation.y<camera.rotation.y))
	                  {PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05//;MONSTER0.rotation.y+=0.05;
					  }//BACK move left 
	if ((keys.right==0)&&(MONST.rotation.y>camera.rotation.y))
	                 {PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;//MONSTER0.rotation.y+=-0.05;
					 }//BACK move right  



	 if ((keys.forward==1)&&(SPEEDC<20)&&(ENERGIE>80)){SPEEDC+=0.2;}  
	 //if ((keys.forward==1)&&(SPEEDC>=10)&&(SPEEDC<20)&&(ENERGIE>80)){SPEEDC+=0.05;} 
	 if ((keys.forward==0)&&(SPEEDC>1)){SPEEDC+=-0.5;
	                                   if(SS1<2){SS1++;SS2=0;
	                                         if(SS1==1){CAR.volume=0.3;CARSTOP.play();}}} //
	 if ((keys.forward==1)&&(ENERGIE>80)&&(SS2<2)){SS2++;
	                                   if(SS2==1){CAR.volume=0.8;SS1=0;}}//CARACCE.play();CARACCE.currentTime = 0;
	
	
 
     if (  ((keys.forward==1)&&(SPEEDC>2))  ||  (planeSUPER>=1)  ){//&&(SPEEDC<19)
	          if(PLANE.rotation.z<0.35){PLANE.rotation.z+=0.05;}} //0.35
	if (    (  (keys.forward==0)  ||  (SPEEDC<=2)    ) && (planeSUPER==0)  )   {//||  ((keys.forward==1)&&(SPEEDC>18))  SS1=0;
	                 if(PLANE.rotation.z>0.1){PLANE.rotation.z+=-0.05;}} 
 
 
 
    if ((keys.right==1)&&(PLANE.rotation.x>=-0.5)&&(SPEEDC>=5)){PLANE.rotation.x+=-0.05;RET=0;}//move left   
    if ((keys.left==1)&&(PLANE.rotation.x<=0.5)&&(SPEEDC>=5)){PLANE.rotation.x+=0.05;RET=0;}//move right 
    if ((keys.right==0)&&(PLANE.rotation.x<0)&&(boombTOUCH==0)){PLANE.rotation.x+=0.05;}//BACK move left 
    if ((keys.left==0)&&(PLANE.rotation.x>0)&&(boombTOUCH==0)){PLANE.rotation.x+=-0.05;}//BACK move right 
   if ((keys.left==0)&&(keys.right==0)&&(PLANE.rotation.x!=0)&&(boombTOUCH==0)){RET++;if(RET==15){PLANE.rotation.x=0;RET=0;}}
 
 
 
  
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
    if ((xx.nodeValue==1)&&(MONST.rotation.y>=camera.rotation.y-0.5)){PLANE.rotation.y+=-0.15;MONST.rotation.y+=-0.15;}//move left INCL Y    
    if ((xx.nodeValue==2)&&(MONST.rotation.y<=camera.rotation.y+0.5)){PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;}//move right INCL Y    	
   	
   
    if (xx.nodeValue==1){camera.rotation.y+=-0.05;PLANE.rotation.y+=-0.05;root++;MONST.rotation.y+=-0.05;} //move left                       
    if (xx.nodeValue==2){camera.rotation.y+=0.05;PLANE.rotation.y+=0.05;root++;MONST.rotation.y+=0.05;} //move right
		  
    if ((xx.nodeValue==0)&&(MONST.rotation.y<camera.rotation.y)){PLANE.rotation.y+=0.05;MONST.rotation.y+=0.05;}//BACK move left INCL Y  
	if ((xx.nodeValue==0)&&(MONST.rotation.y>camera.rotation.y)){PLANE.rotation.y+=-0.05;MONST.rotation.y+=-0.05;}//BACK move right INCL Y   


	 if ((yy.nodeValue==1)&&(SPEEDC<20)&&(ENERGIE>80)){SPEEDC+=0.2;}  
	 if ((yy.nodeValue!=1)&&(SPEEDC>1)){SPEEDC+=-0.5;
	                                   if(SS1<2){SS1++;SS2=0;
	                                         if(SS1==1){CAR.volume=0.3;CARSTOP.play();}}} 
	 if ((yy.nodeValue==1)&&(ENERGIE>80)&&(SS2<2)){SS2++;
	                                   if(SS2==1){CAR.volume=0.8;SS1=0;}}
	

      if (  ((yy.nodeValue==1)&&(SPEEDC>2))  ||  (planeSUPER>=1)  ){
	                              if(PLANE.rotation.z<0.35){PLANE.rotation.z+=0.05;}} 
	if (    (  (yy.nodeValue!=1)  ||  (SPEEDC<=2)    ) && (planeSUPER==0)  )   {
	                              if(PLANE.rotation.z>0.1){PLANE.rotation.z+=-0.05;}} 

    if ((xx.nodeValue==2)&&(PLANE.rotation.x>=-0.5)&&(SPEEDC>=5)){PLANE.rotation.x+=-0.05;RET=0;}//move left INCL X   
    if ((xx.nodeValue==1)&&(PLANE.rotation.x<=0.5)&&(SPEEDC>=5)){PLANE.rotation.x+=0.05;RET=0;}//move right INCL X   
    if ((xx.nodeValue==0)&&(PLANE.rotation.x<0)&&(boombTOUCH==0)){PLANE.rotation.x+=0.05;}//BACK move left INCL X   
    if ((xx.nodeValue==0)&&(PLANE.rotation.x>0)&&(boombTOUCH==0)){PLANE.rotation.x+=-0.05;}//BACK move right INCL X   
    if ((xx.nodeValue==0)&&(PLANE.rotation.x!=0)&&(boombTOUCH==0)){RET++;if(RET==15){PLANE.rotation.x=0;RET=0;}}
          }//end try
   
          catch(e){}
		    } // end HANDCONTROL
 
 
 
 
 
 
 
 
 
			camera.position.x +=DIR1.x * SPEEDC;
			camera.position.z +=DIR1.z * SPEEDC;
            //camera.position.y =6+UPRR;

//###############" BORDE TOUCH ###########################
//###############" BORDE TOUCH ###########################
//###############" BORDE TOUCH ###########################			
	
	   if ((PLANE.position.x>=14500) ||(PLANE.position.x<=-14500) )
	       {camera.position.x=-camera.position.x;BOUTTON1.play();}
	   if ((PLANE.position.z>=14500) || (PLANE.position.z<=-14500)  )
	       {camera.position.z=-camera.position.z;BOUTTON1.play();}
		   

//###############" BORDE WARN & ENEGRIE ###########################
//###############" BORDE WARN & ENEGRIE ###########################
//###############" BORDE WARN & ENEGRIE ###########################

	 if (   (   ((DELTAY1>=19)&&(PIRATENUMBER.innerHTML!=2)) || ((DELTAY1>=2019)&&(PIRATENUMBER.innerHTML==2))  || (PLANE.position.x>=12600)  || (PLANE.position.z>=12600) ||(PLANE.position.x<=-12600)  || (PLANE.position.z<=-12600) || (ENERGIE<=80)  )&& (ALRTf<3)    )
	        {ALRTf++;}
	      if(ALRTf==1){ALERT.play();ALERT.loop= true;ALRTf=2;ALRTn=0; }

       	if (    (  ((DELTAY1<19)&&(PIRATENUMBER.innerHTML!=2)) || ((DELTAY1<2019)&&(PIRATENUMBER.innerHTML==2))  )
		
		
		&& (PLANE.position.x<12600)  && (PLANE.position.x>-12600) && (PLANE.position.z<12600)  && (PLANE.position.z>-12600) && (ENERGIE>80)   
		&& (ALRTn<3)   )
	        {ALRTn++;}
	      if(ALRTn==1){ALERT.pause();ALRTn=2;ALRTf=0;}
		  
	
	
	
	
	
	
			
	
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################

	DXXm+=DELTAXm;
	DYYm+=DELTAYm;
	
	MAN1.position = new BABYLON.Vector3(XXm+DXXm,125+UPLEVEL,YYm+DYYm);
	MAN2.position = new BABYLON.Vector3(XXm+DXXm,105.5+UPLEVEL,YYm+DYYm);
	
	if(PIRATENUMBER.innerHTML==0){PIRATE1.position = new BABYLON.Vector3(XXm+DXXm,155,YYm+DYYm);}
	if(PIRATENUMBER.innerHTML==1){PIRATE2.position = new BABYLON.Vector3(XXm+DXXm,155,YYm+DYYm);}
	if(PIRATENUMBER.innerHTML==2){PIRATE3.position = new BABYLON.Vector3(XXm+DXXm,2155,YYm+DYYm);}
	if(PIRATENUMBER.innerHTML==3){PIRATE4.position = new BABYLON.Vector3(XXm+DXXm,155,YYm+DYYm);}
	if(PIRATENUMBER.innerHTML==4){PIRATE5.position = new BABYLON.Vector3(XXm+DXXm,155,YYm+DYYm);}
	if(PIRATENUMBER.innerHTML==5){PIRATE6.position = new BABYLON.Vector3(XXm+DXXm,155,YYm+DYYm);}
	if(PIRATENUMBER.innerHTML==6){PIRATE7.position = new BABYLON.Vector3(XXm+DXXm,155,YYm+DYYm);}

	
	
	
	   if ((MAN1.position.x>=14000)  || (MAN1.position.x<=-14000))
	            {DELTAXm=-DELTAXm;RROTATION=1;}
       if ((MAN1.position.z>=14000)  || (MAN1.position.z<=-14000))
	            {DELTAYm=-DELTAYm;RROTATION=1;}  
   
        if(RROTATION==1){
				 if((DELTAXm<0)&&(DELTAYm>0)){MAN2.rotation.y=2.84159;}// NE    xxxxxxx
				 
				 if((DELTAXm<0)&&(DELTAYm<0)){MAN2.rotation.y=1.34159;}//  NW   xxxxxx
				 
		     	 if((DELTAXm>0)&&(DELTAYm>0)){MAN2.rotation.y=4.64159;}// SE    xxxxxxx
				 
				 if((DELTAXm>0)&&(DELTAYm<0)){MAN2.rotation.y=5.84159;}// SW    xxxxxx
				 

			RROTATION=0;}
			
			


		/*if(VIBR >=1){VIBR++;				
 	     if(VIBR %4 <= 1){PLANE.position.y+=0.1;}
		 if(VIBR %4 > 1){PLANE.position.y+=-0.1;} 
		 if(VIBR > 20){VIBR=0;SNIPicon.style.width = SNIPicon.style.height = 50 + 'px';}	}*/	 

		 
   
    /*if  (monsterSNIPED==1){SNIPicon.style.width = SNIPicon.style.height = 120 + 'px';SNIP=1;MISSILicon.style.width = MISSILicon.style.height = 220 + 'px';} 
	   if(SNIP==1){ALERT2.play();ALERT2.loop= true;SNIP=2;STARTFIRE.play();}
	   
	   
	   if  (monsterSNIPED==0){SNIPicon.style.width = SNIPicon.style.height = 50 + 'px';
	                         MISSILicon.style.width = MISSILicon.style.height = 0 + 'px';
	                         monsterSNIPED=-1;ALERT2.pause();SNIP=0;}        */
	   
			 if  (monsterKILLED>=1){mT1++;SPEEDC=2;}  
			 if  (mT1<=100){TOPmenu2.style.height = (3*mT1) + 'px';} 
 
	         if(mT1==1){TOPmenu2.style.width = 500 + 'px';TOPmenu2.style.opacity = 0.7;BOMB.playAnimation(0, 15, true, 100);BOMB.size = 60;
			            EXPLOS1.play();}   

	         if(mT1==2){MONSTERDY.play();PIRATENUMBER.innerHTML++;SUPER=planeSUPER=0;CAR.volume=0.3;PLANESUPER1.pause();
			         XXm= random(-12700, 12700);YYm=random(-12700, 12700);DXXm=DYYm=0;
					 
					 if(PIRATENUMBER.innerHTML==2){UPLEVEL=2000;groundMEGAROCK.visibility=0;groundMEGAROCK2.visibility=1;
	                    groundMEGAWATER.position.y=1995;water.position.y=2008.1;sun.position.y=2100;}
				     if(PIRATENUMBER.innerHTML!=2){UPLEVEL=0;groundMEGAROCK.visibility=1;groundMEGAROCK2.visibility=0;
	                    groundMEGAWATER.position.y=-5;water.position.y=8.1;sun.position.y=100;}
					////5:3#4#1:2:6  W;W3;W2;W1.W3. 
	             if(PIRATENUMBER.innerHTML==1){PIRATE2.size = 120;PIRATE1.size = 0;PIRATEicon1.style.opacity=0.3;
				 groundMEGAROCK.material=groundMaterialROCK3;
				 groundMEGAWATER.material = groundMaterialWATER3;
				     monsterPOS2.style.opacity=1;
				     monsterPOS.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=
		             monsterPOS5.style.opacity=monsterPOS6.style.opacity=monsterPOS7.style.opacity=0; //scene.fogDensity = 0.001;
														}
	             if(PIRATENUMBER.innerHTML==2){PIRATE3.size = 120;PIRATE2.size = 0;PIRATEicon2.style.opacity=0.3;
				 //groundMEGAROCK.material=groundMaterialROCK1;
				 groundMEGAWATER.material = groundMaterialWATER2;
				     monsterPOS3.style.opacity=1;
				     monsterPOS.style.opacity=monsterPOS2.style.opacity=monsterPOS4.style.opacity=
		             monsterPOS5.style.opacity=monsterPOS6.style.opacity=monsterPOS7.style.opacity=0;}
														
	             if(PIRATENUMBER.innerHTML==3){PIRATE4.size = 120;PIRATE3.size = 0;PIRATEicon3.style.opacity=0.3;
				 groundMEGAROCK.material=groundMaterialROCK1;
				 groundMEGAWATER.material = groundMaterialWATER1;
				 	monsterPOS4.style.opacity=1;
				     monsterPOS.style.opacity=monsterPOS2.style.opacity=monsterPOS3.style.opacity=
		             monsterPOS5.style.opacity=monsterPOS6.style.opacity=monsterPOS7.style.opacity=0;}
				 
				 
	             if(PIRATENUMBER.innerHTML==4){PIRATE5.size = 120;PIRATE4.size = 0;PIRATEicon4.style.opacity=0.3;
				    groundMEGAROCK.material=groundMaterialROCK2;
				    groundMEGAWATER.material = groundMaterialWATER3;
					 monsterPOS5.style.opacity=1;
				     monsterPOS.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=
		             monsterPOS2.style.opacity=monsterPOS6.style.opacity=monsterPOS7.style.opacity=0;}
					 
	             if(PIRATENUMBER.innerHTML==5){PIRATE6.size = 120;PIRATE5.size = 0;PIRATEicon5.style.opacity=0.3;
				 groundMEGAROCK.material=groundMaterialROCK6;
				     groundMEGAWATER.material = groundMaterialWATER;
				     monsterPOS6.style.opacity=1;
				     monsterPOS.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=
		             monsterPOS5.style.opacity=monsterPOS2.style.opacity=monsterPOS7.style.opacity=0;}
	             
				 if(PIRATENUMBER.innerHTML==6){PIRATE7.size = 120;PIRATE6.size = 0;PIRATEicon6.style.opacity=0.3;
				 groundMEGAROCK.material=groundMaterialROCK6;
				 groundMEGAWATER.material = groundMaterialWATER3;
				                                                  scene.fogDensity = 0.002;//0.005;
						monsterPOS7.style.opacity=1;
				        monsterPOS.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=
		                monsterPOS5.style.opacity=monsterPOS6.style.opacity=monsterPOS2.style.opacity=0;}
				 if(PIRATENUMBER.innerHTML==7){PIRATE1.size = 120;PIRATE7.size = 0;//PIRATENUMBER.innerHTML=1;
				 			 groundMEGAROCK.material=groundMaterialROCK5;
				             groundMEGAWATER.material = groundMaterialWATER;
				             scene.fogDensity = 0.0;
							 PIRATENUMBER.innerHTML==8;
				             PIRATEicon1.style.opacity=PIRATEicon2.style.opacity=PIRATEicon3.style.opacity=PIRATEicon4.style.opacity=
				             PIRATEicon5.style.opacity=PIRATEicon6.style.opacity=PIRATEicon7.style.opacity=1.0;
							 monsterPOS.style.opacity=0;
				             monsterPOS2.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=
		                     monsterPOS5.style.opacity=monsterPOS6.style.opacity=monsterPOS7.style.opacity=0;}
			 
			 }
		 
		     if(mT1>0){BOMB.position = new BABYLON.Vector3(PLANE.position.x, PLANE.position.y+10, PLANE.position.z);}
			 if  (mT1==10){BOMB.size = 0;BOMB.stopAnimation();}
			 //if  (mT1>=10){PORTEARTH.position = new BABYLON.Vector3(PLANE.position.x, PLANE.position.y+5, PLANE.position.z);}	 
             if( (mT1>=225)&&(PIRATENUMBER.innerHTML<7) ){monsterKILLED=mT1=0;
			                   TOPmenu2.style.height = 0 + 'px';TOPmenu2.style.width = 0 + 'px';TOPmenu2.style.opacity = 0;}//MAN2.rotation.x=0; 
	
	

	
	
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
	
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
//################################# PLANE THROW ###########################
	
	if(planeUPER>=1){UPER++;}
	
	if(UPER==3){CHANGE.play();}
	//if(UPER==9){YEHAW.play();}
	if(UPER>=80){UPRR=UPRR1=0;}
	if(UPER>=90){planeUPER=UPER=UPRR=UPRR1=0;PLANE.rotation.z=0.0;camera.rotation.x =0;
	            //if(planeSUPER==0){SPEEDC=10;}
	            PLANE.rotation.z = Math.PI/30;camera.position.y = PLANE.position.y+6;}
	
	
	if((UPER>=1)&&(UPER<40)){UPRR+=2.3;camera.rotation.x +=-0.005;PLANE.rotation.z+=0.08;}           
	if((UPER>=40)&&(UPER<80)){UPRR1+=2.3;camera.rotation.x +=0.005;PLANE.rotation.z+=0.08;}  
	

	
	if((UPER>=80)&&(UPER<85)){camera.rotation.x +=-0.035;}
	if((UPER>=85)&&(UPER<=90)){camera.rotation.x +=0.035;}	

		 
		if(planeDOWN>0){DOWN++;} //can't up
		if(DOWN>=70){planeDOWN=DOWN=0;} 

	if((planeSUPER>=1)&&(mT1==0)){SUPER++;//PORTSUPERPLANE.rotation.x=SUPER*Math.PI/5;
	                   //PORTSUPERPLANE.visibility=1;//BOATY=0.0;
	        if(SUPER==1){CHANGE.play();PLANESUPER1.play();PLANESUPER1.loop = true;
			CAR.volume=1.0;
			}
	          if(SUPER<=270){
	                 if(SPEEDC<=49){SPEEDC++;};
                     if(SPEEDC>=49){SPEEDC=50;};}
		    //if(SUPER==270){PLANESTOP.play();}
		if(SUPER>=270){SPEEDC--;}
		if(SUPER>=300){SUPER=planeSUPER=0;SPEEDC=18;CAR.volume=0.3;PLANESUPER1.pause();/*PORTSUPERPLANE.visibility=0;BOATY=0;PLANESUPER1.pause();*/
		             }  }
					 
					 
					 
					 
					 
					 
					 
					 
//#############################"" DIE ##################################				 
					 
					 
					 
     if  ((DELTAY1>=2022)&&(PIRATENUMBER.innerHTML==2)&&(PLANE.position.y<=DELTAY1)&&(mT1==0))
		         {OFFF=1;START=0;OFF.play();}
			            if( (OFFF>=1)&&(OFFF<=3)){OFFF++;}	
                        if(OFFF==2){OFFF=3;RESTART=1;}

	if  ((DELTAY1>=22)&&(PIRATENUMBER.innerHTML!=2)&&(PLANE.position.y<=DELTAY1)&&(mT1==0))    
		         {OFFF=1;START=0;OFF.play();}
			            if( (OFFF>=1)&&(OFFF<=3)){OFFF++;}	
                        if(OFFF==2){OFFF=3;RESTART=1;}
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################	

		/*if(BON>0){BON1++;} 
		if(BON1==1){BOUTTON.play();ENERGIE=300;//SPEEDC=10;
		//ENERGicon.style.width = ENERGicon.style.height = 60 + 'px';
		} 
		if(BON1==3){BONUS3.play();BON=BON1=0;} */
		
	   
    }//end START

  
	CAMX.innerHTML=parseInt(camera.position.x);CAMY.innerHTML=parseInt(camera.position.z); 
	MX=parseInt(MAN1.position.x);MY=parseInt(MAN1.position.z);
	
		if(START>=1){
	document.getElementById("BOUSL").style.transform = document.getElementById("RAKAS").style.transform = "rotate(" + (-DIRXZ) + "deg)";//DIRXZ.innerHTML
	//document.getElementById("RAKAS2").style.transform = "rotate(" + (12*SPEEDC-140) + "deg)";
	document.getElementById("RAKAS2").style.transform = "rotate(" + (12*SPEEDC-125) + "deg)";//(14*SPEEDC-155)
	}
	
	//if(SMALLSCREEN==1){  }
	/*BOUSL.style.top = playerPOS.style.top= ((0.033*CAMX.innerHTML)+170)-90+ 'px';//50	
	BOUSL.style.left = playerPOS.style.left= ((0.033*CAMY.innerHTML)+156)+ 'px';//160 	
	monsterPOS.style.top = ((0.04*MX)+170)-100+ 'px';	
	monsterPOS.style.left =((0.04*MY)+145)+ 'px';

	BOUSL.style.top = playerPOS.style.top= ((0.0132*CAMX.innerHTML)+170)-90+ 'px';//50	
	BOUSL.style.left = playerPOS.style.left= ((0.0132*CAMY.innerHTML)+156)+ 'px';//160 
	
	monsterPOS.style.top = ((0.016*MX)+170)-100+ 'px';	
	monsterPOS.style.left =((0.016*MY)+145)+ 'px';*/
	
	BOUSL.style.top = playerPOS.style.top= ((0.0044*CAMX.innerHTML)+170)-90+ 'px';//50	
	BOUSL.style.left = playerPOS.style.left= ((0.0044*CAMY.innerHTML)+156)+ 'px';//160 
	
	     monsterPOS.style.top = monsterPOS2.style.top = monsterPOS3.style.top = monsterPOS4.style.top =
	     monsterPOS5.style.top = monsterPOS6.style.top = monsterPOS7.style.top = ((0.0044*MX)+170)-90+ 'px';
	     monsterPOS.style.left = monsterPOS2.style.left = monsterPOS3.style.left = monsterPOS4.style.left = 
		 monsterPOS5.style.left = monsterPOS6.style.left = monsterPOS7.style.left = ((0.0044*MY)+156)+ 'px';

	/*if(Xfir5>=1){Xfir5++;}
	
	if(Xfir5==2){RELOADGUN.play();}
	if(Xfir5>=25){TIR=0;Xfir5=Xfir4=Xfir3=Xfir2=Xfir=0;
	document.getElementById("BULLETX").style.opacity=document.getElementById("BULLETX2").style.opacity=
	document.getElementById("BULLETX3").style.opacity=document.getElementById("BULLETX4").style.opacity=
	document.getElementById("BULLETX5").style.opacity=0.8;}	

	
	var toRemove = [];
		for (var i = 0, l = bullets.length; i < l; i++) {
			if (bullets[i].update()) {
				toRemove.push(i);
				bullets[i].dispose();}}
		
		for (var i = 0, l = toRemove.length; i < l; i++) {
			bullets.splice(toRemove[i], 1);}	*/
	
	
	

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
	 sMaterial.reflectionTexture = new BABYLON.CubeTexture("img/game/skybox/1/skybox", scene);
     sMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
     sMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
     sMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	var skybox = BABYLON.Mesh.CreateBox("skybox", 2800, scene);
	skybox.material = sMaterial; }    
	
	


	
function createDemoScene(scene) {
	var skyMaterial = scene.getMaterialByName("skyboxMaterial");

	
/*
	var groundGRBIG = BABYLON.Mesh.CreatePlane("groundSTREET", 4010, scene);
	groundGRBIG.rotation.x = Math.PI / 2;
	groundGRBIG.material = new BABYLON.StandardMaterial("gMaterial", scene);
	groundGRBIG.material.diffuseTexture = new BABYLON.Texture("img/game/ground2.jpg", scene);//S2 8 street7ground1,ground2;street2:W2;
	groundGRBIG.material.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	groundGRBIG.material.diffuseTexture.uScale = 40;
	groundGRBIG.material.diffuseTexture.vScale = 40;
	groundGRBIG.checkCollisions = true;
	
	
	
	var SK1 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK1.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK1.rotation.y = Math.PI / 2;
	SK1.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK1.material.diffuseTexture = new BABYLON.Texture("img/game/skybox/2/skybox_nx.jpg", scene);
	SK1.position = new BABYLON.Vector3(2000,1000,0);
	SK1.checkCollisions = true;
	
	var SK2 = BABYLON.Mesh.CreateBox("3groundGRoutBOG", 4000, scene);
	SK2.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK2.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK2.material.diffuseTexture = new BABYLON.Texture("img/game/skybox/2/skybox_nz.jpg", scene);
	SK2.position = new BABYLON.Vector3(0,1000,2000);
	SK2.checkCollisions = true;
	
	var SK3 = BABYLON.Mesh.CreateBox("6groundGRoutBOG", 4000, scene);
	SK3.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK3.rotation.y = Math.PI;
	SK3.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK3.material.diffuseTexture = new BABYLON.Texture("img/game/skybox/2/skybox_pz.jpg", scene);
	SK3.position = new BABYLON.Vector3(0,1000,-2000);
	SK3.checkCollisions = true;
	
	var SK4 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK4.scaling = new BABYLON.Vector3(1,0.5,0.001);
	SK4.rotation.y = Math.PI/2 ;
	SK4.rotation.z = Math.PI ;
	SK4.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK4.material.diffuseTexture = new BABYLON.Texture("img/game/skybox/2/skybox_px.jpg", scene);
	SK4.position = new BABYLON.Vector3(-2000,1000,0);
	SK4.checkCollisions = true;
	
	var SK5 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK5.scaling = new BABYLON.Vector3(1,1,0.0001);
	SK5.rotation.x = Math.PI/2 ;
	SK5.rotation.z = Math.PI/2 ;
	SK5.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK5.material.diffuseTexture = new BABYLON.Texture("img/game/skybox/2/skybox_ny.jpg", scene);
	SK5.position = new BABYLON.Vector3(0,1990,0);
	SK5.checkCollisions = true;
	
	SK1.material.emissiveColor = SK2.material.emissiveColor = SK3.material.emissiveColor = SK4.material.emissiveColor =SK5.material.emissiveColor =  new BABYLON.Color3(1.0, 1.0, 1.0);

	if ((MAN1.position.x>=1900)  || (MAN1.position.x<=-1900)  || (MAN1.position.z>=1900)  || (MAN1.position.z<=-1900))
	{SK1.infiniteDistance = true;
	SK2.infiniteDistance = true;
	SK3.infiniteDistance = true;
	SK4.infiniteDistance = true;
	SK5.infiniteDistance = true;}   */	
	
	
		/*var groundGRBIG = BABYLON.Mesh.CreatePlane("groundGRoutBOG", 4010, scene);
	groundGRBIG.rotation.x = Math.PI / 2;
	groundGRBIG.material = new BABYLON.StandardMaterial("gMaterial", scene);
	groundGRBIG.material.diffuseTexture = new BABYLON.Texture("img/game/WATER1.jpg", scene);//S1 W2  STREET  ground1,ground2;street2:W2;
	//groundGRBIG.material.bumpTexture = new BABYLON.Texture("img/game/WATER1B.jpg", scene);
	groundGRBIG.material.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);//(1.0, 1.0, 1.0);
	//groundGRBIG.material.specularColor = new BABYLON.Color3(0, 0, 0);
	groundGRBIG.material.diffuseTexture.uScale = 100;
	groundGRBIG.material.diffuseTexture.vScale = 100;
	groundGRBIG.position = new BABYLON.Vector3(0,1.4,0);//(0,1,0);
	groundGRBIG.checkCollisions = true; */
	

			

			
/*	//SAHRA
		// Ground UP
          var groundUP = BABYLON.Mesh.CreateGroundFromHeightMap("groundUP", "img/game/0.jpg", 4000, 4000, 400, 1, 1.5, scene, false);
            var groundMaterialUP = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialUP.diffuseTexture = new BABYLON.Texture("img/game/ground2.jpg", scene);
            groundMaterialUP.diffuseTexture.uScale = 40;
            groundMaterialUP.diffuseTexture.vScale = 40;
            groundMaterialUP.specularColor = new BABYLON.Color3(0, 0, 0);
			//groundUP.position = new BABYLON.Vector3(630,0,680);
			groundUP.scaling = new BABYLON.Vector3(1,1,1);
			groundMaterialUP.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0); 
            groundUP.material = groundMaterialUP;
			groundUP.checkCollisions = true;
			
			*/
			
			//heightMap2
	/*		
	         var ISLANDMaterialUP = new BABYLON.StandardMaterial("ISLAND", scene);
            ISLANDMaterialUP.diffuseTexture = new BABYLON.Texture("img/game/ground.jpg", scene);//rock
            ISLANDMaterialUP.diffuseTexture.uScale = 16;//36
            ISLANDMaterialUP.diffuseTexture.vScale = 10;//20
            ISLANDMaterialUP.specularColor = new BABYLON.Color3(0, 0, 0);
			
	         var ISLANDMaterialUP2 = new BABYLON.StandardMaterial("ISLAND", scene);
            ISLANDMaterialUP2.diffuseTexture = new BABYLON.Texture("img/game/rock.jpg", scene);//rock
            ISLANDMaterialUP2.diffuseTexture.uScale = 16;//36
            ISLANDMaterialUP2.diffuseTexture.vScale = 10;//20
            ISLANDMaterialUP2.specularColor = new BABYLON.Color3(0, 0, 0);
			
	         var ISLANDMaterialUP3 = new BABYLON.StandardMaterial("ISLAND", scene);
            ISLANDMaterialUP3.diffuseTexture = new BABYLON.Texture("img/game/snow.jpg", scene);//rock
            ISLANDMaterialUP3.diffuseTexture.uScale = 16;//36
            ISLANDMaterialUP3.diffuseTexture.vScale = 10;//20
            ISLANDMaterialUP3.specularColor = new BABYLON.Color3(0, 0, 0);
			
			
var multimat = new BABYLON.MultiMaterial("multi", scene);
multimat.subMaterials.push(ISLANDMaterialUP3);
multimat.subMaterials.push(ISLANDMaterialUP2);
multimat.subMaterials.push(ISLANDMaterialUP3);
			
			
           var ISLAND = BABYLON.Mesh.CreateGroundFromHeightMap("ISLAND", "img/game/ISLAND7.jpg", 800, 800, 400, 1, 25, scene, false);
			ISLAND.position = new BABYLON.Vector3(0,3,-400);
			ISLAND.material = multimat;//ISLANDMaterialUP;
			ISLAND.checkCollisions = true; 
			
ISLAND.subMeshes = [];
var verticesCount = ISLAND.getTotalVertices();

ISLAND.subMeshes.push(new BABYLON.SubMesh(0, 0, verticesCount, 0, 900, ISLAND));
ISLAND.subMeshes.push(new BABYLON.SubMesh(1, 0, verticesCount, 900, 900, ISLAND));
ISLAND.subMeshes.push(new BABYLON.SubMesh(2, 0, verticesCount, 1800, 2088, sphere));*/
			
			
/*	var groundGRBIG = BABYLON.Mesh.CreatePlane("groundSTREET", 14010, scene);
	groundGRBIG.rotation.x = Math.PI / 2;
	groundGRBIG.material = new BABYLON.StandardMaterial("gMaterial", scene);
	groundGRBIG.material.diffuseTexture = new BABYLON.Texture("img/game/ground2.jpg", scene);//S2 8 street7ground1,ground2;street2:W2;
	groundGRBIG.material.emissiveColor = new BABYLON.Color3(1.0, 3.0, 1.0);
	groundGRBIG.material.diffuseTexture.uScale = 40;
	groundGRBIG.material.diffuseTexture.vScale = 40;
	groundGRBIG.checkCollisions = true;*/
	
		var sun = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(60, 100, 10), scene);
/*	
	var groundGRBIG = BABYLON.Mesh.CreatePlane("groundGRoutBOG", 4010, scene); // water 1 3 8   11    5  10  12  13 14                       7 9
	groundGRBIG.rotation.x = Math.PI / 2;
	groundGRBIG.material = new BABYLON.StandardMaterial("gMaterial", scene);//4
	groundGRBIG.material.diffuseTexture = new BABYLON.Texture("img/game/water.jpg", scene);//water  2 4           3ground snow
	groundGRBIG.material.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	groundGRBIG.material.diffuseTexture.uScale = 80;
	groundGRBIG.material.diffuseTexture.vScale = 80;
//	groundGRBIG.material.emissiveColor = new BABYLON.Color3(0.8, 0.8, 1);//(0.5, 0.5, 1);
	groundGRBIG.position = new BABYLON.Vector3(0,-1,0);
	groundGRBIG.checkCollisions = true; 
	
	

		

	// ISLAND  ISLAND 2  3  4 6     7 8
            var ISLAND = BABYLON.Mesh.CreateGroundFromHeightMap("ISLAND", "img/game/ISLAND7.jpg", 1800, 1800, 400, 0, 15, scene, false);
            var ISLANDMaterialUP = new BABYLON.StandardMaterial("ISLAND", scene);
            ISLANDMaterialUP.diffuseTexture = new BABYLON.Texture("img/game/ground.jpg", scene);//rock
            ISLANDMaterialUP.diffuseTexture.uScale = 16;//36
            ISLANDMaterialUP.diffuseTexture.vScale = 10;//20
            ISLANDMaterialUP.specularColor = new BABYLON.Color3(0, 0, 0);
			ISLAND.position = new BABYLON.Vector3(90,-7,200);
			ISLAND.scaling = new BABYLON.Vector3(1,1,1);
            ISLAND.material = ISLANDMaterialUP;
			ISLAND.material.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
			ISLAND.checkCollisions = true; 
            //ISLAND.TREE = "treeTOUCH";	  			

			
// Water
         // BABYLON.Engine.ShadersRepository = ""; ./
		 //BABYLON.Engine.ShadersRepository = "/Babylon/Shaders/";
		 // BABYLON.Engine.ShadersRepository = "";
         var water = BABYLON.Mesh.CreateGround("water", 4010, 4010, 1, scene, false);
         var waterMaterial = new WaterMaterial("water", scene, sun);
         waterMaterial.refractionTexture.renderList.push(groundGRBIG);
         waterMaterial.refractionTexture.renderList.push(ISLAND);
		//waterMaterial.refractionTexture.renderList.push(groundUP);
        waterMaterial.reflectionTexture.renderList.push(groundGRBIG);
         water.material = waterMaterial;
            		

            		*/
			
			
    



		
}



function random(min, max) {
	return (Math.random() * (max - min) + min);
}
		
