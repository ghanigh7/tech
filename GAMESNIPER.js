'use strict';
var score;
score = document.getElementById('score');
score.innerHTML=0;


var START=0;var OFFF=0;var RESTART=0;var ST=0;var ST2=0;
var STOPicon,STARTicon;
STOPicon= document.getElementById('STOPicon');STOPicon.style.width = STOPicon.style.height = 0 + 'px';
STARTicon= document.getElementById('STARTicon');

START = document.getElementById('START');


var CAMX,CAMY,playerPOS,BOUSL,RAKAS;
CAMX = document.getElementById('CAMX');CAMY = document.getElementById('CAMY');
CAMX.innerHTML=0;CAMY.innerHTML=0; 
//CAMX.innerHTML=0;CAMY.innerHTML=0; 
playerPOS = document.getElementById('playerPOS');document.getElementById("playerPOS").style.opacity=1;
BOUSL = document.getElementById('BOUSL');RAKAS = document.getElementById('RAKS');

/*var DIRX,DIRY,DIRZ;DIRXZ;
DIRX = document.getElementById('DIRX');DIRY = document.getElementById('DIRY');DIRZ = document.getElementById('DIRZ');
DIRX.innerHTML=0;DIRY.innerHTML=0;DIRZ.innerHTML=0;*/

DIRXZ = document.getElementById('DIRXZ');//rotation degree
DIRXZ.innerHTML=0;


var MX,MY,monsterPOS,DXXm,DYYm,DZZm;
DXXm=0.1;DYYm=0.1;DZZm=0.1;
var DELTAXm=2.5;//2.5;
var DELTAYm=1.5;//1.5;
var DELTAZm=0.1;

var DXXmW,DYYmW,XXmW,YYmW;
DXXmW=0.1;DYYmW=0.1;
XXmW=0;YYmW=0;
var DELTAXmW=0.5;//2.5;
var DELTAYmW=0.5;//1.5;



var DXX,DYY,DZZ;
DXX=0.1;DYY=0.1;DZZ=0.1;
var DELTAX=1.5;
var DELTAY=0.5;
var DELTAZ=0.1;
var MEETPLANE=0;
var PLANEBOMBED=0;
var PLANEBO=0;
var BOMBANIMAT=0;
	
MX = document.getElementById('MX');MY = document.getElementById('MY');
MX=0;MY=0;
//MX.innerHTML=0;MY.innerHTML=0;
monsterPOS = document.getElementById('monsterPOS');document.getElementById("monsterPOS").style.opacity=1;

var XX,YY,ZZ;
XX=0;YY=0;ZZ=-1;

var XXm,YYm,ZZm;
XXm=70;YYm=30;ZZm=3;
var GUN,//GUNmov,
FIR;
var Xfir=0;
var Xfir2=0;
var Xfir3=0;
var Xfir4=0;
var Xfir5=0;
var TIR=0;

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

var INSIDBOX;INSIDBOX = document.getElementById('INSIDBOX');INSIDBOX.innerHTML=0;
var BULLETX,BULLETX2,BULLETX3,BULLETX4,BULLETX5;

var KEY1,KEY2,KEY3;
KEY1 = document.getElementById('KEY1');document.getElementById("KEY1").style.opacity=0.3;
KEY2 = document.getElementById('KEY2');document.getElementById("KEY2").style.opacity=0.3;
KEY3 = document.getElementById('KEY3');document.getElementById("KEY3").style.opacity=0.3;

GUN = document.getElementById('GUN');document.getElementById("GUN").style.opacity=1;
//GUNmov = document.getElementById('GUNmov');document.getElementById("GUNmov").style.opacity=1;
FIR = document.getElementById('FIR');document.getElementById("FIR").style.opacity=0;
BULLETX = document.getElementById('BULLETX');document.getElementById("BULLETX").style.opacity=0.8;
BULLETX2 = document.getElementById('BULLETX2');document.getElementById("BULLETX2").style.opacity=0.8;
BULLETX3 = document.getElementById('BULLETX3');document.getElementById("BULLETX3").style.opacity=0.8;
BULLETX4 = document.getElementById('BULLETX4');document.getElementById("BULLETX4").style.opacity=0.8;
BULLETX5 = document.getElementById('BULLETX5');document.getElementById("BULLETX5").style.opacity=0.8;
//FIR.style.top  =  150 + 'px';//canon.style.top + 70; FIR.style.left = 10 + 'px';
 
var audioCAN = new Audio('sounds/GUN.mp3');
var audioCAN2 = new Audio('sounds/GUN.mp3');
var audioCAN3 = new Audio('sounds/GUN.mp3');
var audioCAN4 = new Audio('sounds/GUN.mp3');
var audioCAN5 = new Audio('sounds/GUN.mp3');

var BOUTTON = new Audio('sounds/BOUTTON.mp3');
var WINFRUIT = new Audio('sounds/WINFRUIT.mp3');
var HAHA = new Audio('sounds/HAHA.mp3');
var CANON = new Audio('sounds/CANON.mp3');
var RELOADGUN = new Audio('sounds/RELOADGUN.mp3');	
var MONSTERDY = new Audio('sounds/MONSTERDY.mp3');
var MONSTERDY2 = new Audio('sounds/MONSTERDY2.mp3');
var CHANGE = new Audio('sounds/CHANGE.mp3');
var YEHAW = new Audio('sounds/YEHAW.mp3');
var EXPLOS1= new Audio('sounds/EXPLOS1.mp3');	
//var MONSTERFIR = new Audio('sounds/MONSTERFIRE.mp3');	
//var auDOOR = new Audio('sounds/DOOR.mp3');	
//var PLANE0= new Audio('sounds/PLANE0.mp3');	
//var BOMBFALL= new Audio('sounds/BOMBFALL.mp3');
//var ALERT= new Audio('sounds/ALERT.mp3');
//var BONUS= new Audio('sounds/BONUS.mp3');

//var SPEEDS = 0.1;


var BOXEXPLOSE2=0;var bx2=0;
var EXPx2=0;var EXPy2=0;var EXPz2=0;
var EXPx3=0;var EXPz3=0;
var XXmnsWlk=-10;
var ZZmnsWlk=-10;
var YYmnsWlk=-3;
var  MONSTERW1=1;
var MONSTERW1KILLED=0;
var YM1=-16;
/*var  MONSTERW2=1;
var  MONSTERW3=1;
var  MONSTERW4=1;
var  MONSTERW5=1;
var  MONSTERW6=1;
var  MONSTERW7=1;
var  MONSTERW8=1;
var  MONSTERW9=1;
var  MONSTERW10=1;


var YM2=-16;
var YM3=-16;
var YM4=-16;
var YM5=-16;
var YM6=-16;
var YM7=-16;
var YM8=-16;
var YM9=-16;
var YM10=-16;*/	

var BOXEXPLOSE3=0;var bx3=0;
var monsterWTOUCHED=0;var mT=0;
var monsterWTOUCHED2=0;var rot=0;var rot1=0;
var BOXOUT=0;	

var MONSTERFIRE=0;var MONS=0;
var MNX=0;var MNY=-30;var MNZ=0;
var expKEY1=0;var expKEY2=0;var expKEY3=0;var EXPy2=0;	 

var MATAHA=0;

//var zzzM=3;
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
    START+=1;
    if(START>1){START=0;}
  if(START==1){STOPicon.style.width = STOPicon.style.height = 60 + 'px';ST2=0;
               STARTicon.style.width = STARTicon.style.height = 0 + 'px';OFFF=0;RESTART=0;}   
  if(START==0){STOPicon.style.width = STOPicon.style.height = 0 + 'px';ST=0;
               STARTicon.style.width = STARTicon.style.height = 60 + 'px';}//audioMOTORUN.pause();
	  
	  }
	  
function restartt()
{   RESTART=1;timer2 =0;minutes2.innerHTML = seconds2.innerHTML = "00";}
 
 	

var SMALLSCREEN=1;var BIGSCREEN=0;

function SmallScreen()
{   SMALLSCREEN=1;BIGSCREEN=0;}

function BigScreen()
{   SMALLSCREEN=0;BIGSCREEN=1;}
 
 
var Bullet = function (camera, scene) {
	var mesh = BABYLON.Mesh.CreateSphere("bullet", 1, 1, scene);
	mesh.scaling = new BABYLON.Vector3(0.8, 0.8, 0.8);
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
                
	this.speed = 7;
		mesh.position.x += direction.x * this.speed;
		mesh.position.y += direction.y * this.speed;
		mesh.position.z += direction.z * this.speed;
			
		var meshToRemove = null;
		var i = 0;
		var size = scene.meshes.length;
		var hit = false;
		while (i < size && !hit) {  
		
	
			
				
			if (  (scene.meshes[i].tag && mesh.intersectsMesh(scene.meshes[i], false)) &&  (CAMX.innerHTML <=100)  )  {// DESTROY FRUITS BOX
				meshToRemove = scene.meshes[i];score.innerHTML++;
				WINFRUIT.play();
				BOXEXPLOSE=1;bx=0;BOXOUT=0;
				EXPx=mesh.position.x;//EXPy=mesh.position.y;
				EXPz=mesh.position.z;
				INSIDBOX.innerHTML = Math.floor((Math.random() * 3) + 1);} 
				
			if (  (scene.meshes[i].tagB && mesh.intersectsMesh(scene.meshes[i], false))   &&  (CAMX.innerHTML <=100) )  {// DESTROY BOMBS BOX
				meshToRemove = scene.meshes[i];
				BOXEXPLOSE1=1;bx1=0;BOXOUT=0;
				EXPx1=mesh.position.x;//EXPy=mesh.position.y;                   
				EXPz1=mesh.position.z;} 
				
				
			if (  (scene.meshes[i].tag1 && mesh.intersectsMesh(scene.meshes[i], false)) &&  (CAMX.innerHTML >=140)  )  {// DESTROY FRUITS BOX
				meshToRemove = scene.meshes[i];score.innerHTML++;WINFRUIT.play();
				BOXEXPLOSE=1;bx=0;BOXOUT=1;
				EXPx=mesh.position.x;//EXPy=mesh.position.y;
				EXPz=mesh.position.z;
				INSIDBOX.innerHTML = Math.floor((Math.random() * 3) + 1);} 
				
			if (  (scene.meshes[i].tagB1 && mesh.intersectsMesh(scene.meshes[i], false))   &&  (CAMX.innerHTML >=140) )  {// DESTROY BOMBS BOX
				meshToRemove = scene.meshes[i];
				BOXEXPLOSE1=1;bx1=0;BOXOUT=1;
				EXPx1=mesh.position.x;//EXPy=mesh.position.y;                   
				EXPz1=mesh.position.z;} 
				
				
				

			if (  (scene.meshes[i].tagKEY1 && mesh.intersectsMesh(scene.meshes[i], false))  &&  (CAMX.innerHTML <=100) )  {// DESTROY KEY BOX
				meshToRemove = scene.meshes[i];
				expKEY1=1;YEHAW.play();
				INSIDBOX.innerHTML=7;
				BOXEXPLOSE=1;bx=0;BOXOUT=0;
				EXPx1=mesh.position.x;                  
				EXPz1=mesh.position.z;} 
			if (  (scene.meshes[i].tagKEY2 && mesh.intersectsMesh(scene.meshes[i], false))  &&  (CAMX.innerHTML >=140) )  {// DESTROY KEY BOX
				meshToRemove = scene.meshes[i];
				expKEY2=1;YEHAW.play();
				INSIDBOX.innerHTML=7;
				BOXEXPLOSE=1;bx=0;BOXOUT=1;
				EXPx1=mesh.position.x;                  
				EXPz1=mesh.position.z;} 
			if (  (scene.meshes[i].tagKEY3 && mesh.intersectsMesh(scene.meshes[i], false))  &&  (CAMX.innerHTML >=140) )  {// DESTROY KEY BOX
				meshToRemove = scene.meshes[i];
				expKEY3=1;YEHAW.play();
				INSIDBOX.innerHTML=7;
				BOXEXPLOSE=1;bx=0;BOXOUT=1;
				EXPx1=mesh.position.x;                  
				EXPz1=mesh.position.z;} 
				
				
				
				
		
				
				
				
				
				
				
			
		  if  (scene.meshes[i].BXmnsWLK1 && mesh.intersectsMesh(scene.meshes[i], false))    {// KILL MONSTER WALKING
		  
		       meshToRemove = scene.meshes[i];
		  
		        //scene.meshes[s].BXmnsWLK11
		        //meshToRemove = scene.meshes[s];//BXmnsWLK11.size=1;
				
			     //zzzM=9;
				score.innerHTML++;
			    MONSTERW1KILLED=1;
				BOXEXPLOSE2=1;bx2=0;
				MONSTERDY.play();
				EXPx3=mesh.position.x;               
				EXPz3=mesh.position.z;}
		  
			
		  if (  (scene.meshes[i].tagM && mesh.intersectsMesh(scene.meshes[i], false)) &&  (CAMX.innerHTML!=100)  )  {// KILL BIG MONSTER
				XXm= random(-680, 680);YYm=random(-680, 680);
				ZZm=48;
				DXXm=DYYm=DZZm=0;
				score.innerHTML++;MONSTERDY2.play();
				BOXEXPLOSE3=1;bx3=0;
				EXPx2=mesh.position.x;EXPy2=mesh.position.y;EXPz2=mesh.position.z;}   
				
				

		
			
			
			
			i++;}
			

			
		if (meshToRemove) {
			meshToRemove.dispose();return true;}
		return false;
	};
	
	this.dispose = function () {internalDispose();}	

};


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
  
  var camera = new BABYLON.FreeCamera("MainCamera", new BABYLON.Vector3(240, 1.5, 0) , scene);//(710, -17.5, -50)(0, 2.5, 5) (160, -2.5, -25),(70, 2.5, -25))
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);//######################################
	camera.applyGravity = true;
    camera.checkCollisions = true;
	camera.rotation.y=-Math.PI/2;
	
	camera.speed = 0;
	camera.angularSensibility = 1000;
	camera.keysUp = [38]; // Touche 
	camera.keysDown = [40]; // Touche 
	camera.keysLeft = [37]; // Touche 
	camera.keysRight = [39]; // Touche 
	//camera.keysUp = [90]; // Touche Z camera.keysDown = [83]; // Touche S camera.keysLeft = [81]; // Touche Q camera.keysRight = [68]; // Touche D;*/
	scene.activeCamera.attachControl(canvas);

		// create sensor mesh  - parent to  camera
	var camSensor = new BABYLON.Mesh.CreateBox("sensor", 1, scene);
	camSensor.material = new BABYLON.StandardMaterial("camMat", scene);
	camSensor.isVisible = false;
	camSensor.material.wireframe = true;
	camSensor.scaling = new BABYLON.Vector3(.01, .01, .01);
	camSensor.position = new BABYLON.Vector3(0, .005, 0);
	camSensor.parent = camera;
//###################### LIGHT  #############################################
//###################### LIGHT  #############################################
//###################### LIGHT  #############################################
	var light = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(0, 50, 90), scene);
	light.diffuse = new BABYLON.Color3(1, 1, 1);
	light.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
	light.intensity = 1.5;
	
	var lightOUT = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(250, 50, 0), scene);
	lightOUT.diffuse = new BABYLON.Color3(1, 1, 1);
	lightOUT.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
	lightOUT.intensity = 0.5;
	

	
	
	var LIGHTmov = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(300, 50, 0), scene);
	LIGHTmov.diffuse = new BABYLON.Color3(1, 1, 1);
	LIGHTmov.specular = new BABYLON.Color3(0.0, 0.0, 0.0);
	LIGHTmov.intensity = 2.2;//0.17
	
	
	document.addEventListener("contextmenu", function (e) { e.preventDefault();	}); //ELIMINATE RIGHT CLICK MENU // STARS
	

	createSkybox(scene);


	createDemoScene(scene);

//########################################### TIRER ######################################################################  
//########################################### TIRER ######################################################################  
//########################################### TIRER ######################################################################  
//########################################### TIRER ######################################################################  
//########################################### TIRER ######################################################################  
//########################################### TIRER #####################################################################      
   
	var bullets = [];
	canvas.addEventListener("mousedown", function (e) { //mouseup
	    if(START==1){TIR++;}
		if (  ((Xfir==0)&&(TIR==1))  ||  ((Xfir2==0)&&(TIR==2))  ||  ((Xfir3==0)&&(TIR==3))  ||  ((Xfir4==0)&&(TIR==4))  ||  ((Xfir5==0)&&(TIR==5))  ){
		var bullet = new Bullet(camera, scene);
		bullets.push(bullet);
		document.getElementById("FIR").style.opacity=1;
		document.getElementById("GUN").style.transform = "rotate(5deg)";//document.getElementById("GUNmov").style.transform 
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
	});
  

//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
		    var boxkey = BABYLON.Mesh.CreateBox("box1", 5, scene);
			boxkey.visibility = 0;
            // Create a particle system
            var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
            particleSystem.particleTexture = new BABYLON.Texture("images/flare.png", scene);
        
            // Where the particles come from
            particleSystem.emitter = boxkey; // the starting object, the emitter
            particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...
        
            // Colors of all particles
            particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
            particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
        
            // Size of each particle (random between...
            particleSystem.minSize = 0.5;
            particleSystem.maxSize = 2;
        
            // Life time of each particle (random between...
            particleSystem.minLifeTime = 0.3;
            particleSystem.maxLifeTime = 1.5;
        
            // Emission rate
            particleSystem.emitRate = 1500;
        
            // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        
            // Set the gravity of all particles
            particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
        
            // Direction of each particle after it has been emitted
            particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3);
            particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3);
        
            // Angular speed, in radians
            particleSystem.minAngularSpeed = 0;
            particleSystem.maxAngularSpeed = Math.PI;
        
            // Speed
            particleSystem.minEmitPower = 1;
            particleSystem.maxEmitPower = 3;
            particleSystem.updateSpeed = 0.005;
        
            // Start the particle system
		   // particleSystem.start();
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################
//################### KEY ANIMATION ##########################################


	var materialBUILD = new BABYLON.StandardMaterial("ARROW", scene);
    materialBUILD.diffuseTexture = new BABYLON.Texture("images/building01.jpg", scene);//
    //materialBUILD.diffuseTexture.hasAlpha = true;//materialRAW.emissiveColor = new BABYLON.Color3(0, 0, 0);
    //materialBUILD.backFaceCulling = false; 		
		 
	var materialBUILDD1 = new BABYLON.StandardMaterial("ARROW", scene);
    materialBUILDD1.diffuseTexture = new BABYLON.Texture("images/building0002.jpg", scene);//	

	var materialBUILDD2 = new BABYLON.StandardMaterial("ARROW", scene);
    materialBUILDD2.diffuseTexture = new BABYLON.Texture("images/building03.jpg", scene);//	

	var materialBUILDD3 = new BABYLON.StandardMaterial("ARROW", scene);
    materialBUILDD3.diffuseTexture = new BABYLON.Texture("images/building0004.jpg", scene);	
		 
	var BUILD = BABYLON.Mesh.CreateBox("ARROW.UP", 100, scene);
	BUILD.position = new BABYLON.Vector3(100.0, 50.0, 100.0);
	BUILD.visibility = 0; 	
		 
 	var BUILD1 = BABYLON.Mesh.CreatePlane("ARROW.UP", 100, scene);
		 BUILD1.material = materialBUILD;//rawmat;
		 BUILD1.scaling = new BABYLON.Vector3(1.0, 1.0, 0.04);
		 BUILD1.position = new BABYLON.Vector3(0.0, 0.0, 50);
		 BUILD1.rotation.y = -Math.PI;
		 BUILD1.checkCollisions = true; 	
		 BUILD1.parent = BUILD;			 
	var BUILD2 = BUILD1.clone(BUILD1);	
		 BUILD2.position = new BABYLON.Vector3(50, 0.0, 0.0);
         BUILD2.rotation.y = -Math.PI/2;		 
         BUILD2.parent = BUILD;	
	var BUILD3 = BUILD2.clone(BUILD1);	
		 BUILD3.position = new BABYLON.Vector3(-50, 0.0, 0.0);
         BUILD3.rotation.y = Math.PI/2;		 
         BUILD3.parent = BUILD;		
	var BUILD4 = BUILD2.clone(BUILD1);	
		 BUILD4.position = new BABYLON.Vector3(0.0, 0.0, -50);
         BUILD4.rotation.y = 2*Math.PI;		 
         BUILD4.parent = BUILD;	


	var BUILD5 = BUILD.clone(BUILD);
	BUILD5.position = new BABYLON.Vector3(220.0, 50.0, -150.1);
		
	var BUILD6 = BUILD.clone(BUILD);
	BUILD6.position = new BABYLON.Vector3(420.0, 50.0, -150.1);
	
	var BUILD7 = BUILD.clone(BUILD);
	BUILD7.position = new BABYLON.Vector3(620.0, 50.0, 90.1);

	var BUILD8 = BUILD.clone(BUILD);
	BUILD8.position = new BABYLON.Vector3(820.0, 50.0, -150.1);
        		 
 
 
 
	var BUILDD = BABYLON.Mesh.CreateBox("ARROW.UP", 100, scene);
	BUILDD.position = new BABYLON.Vector3(1300.0, 50.0, 1000.0);
	
	BUILDD.visibility = 0; 
		 
 	var BUILD01 = BABYLON.Mesh.CreatePlane("ARROW.UP", 100, scene);
		 BUILD01.material = materialBUILDD1;//rawmat;
		 BUILD01.scaling = new BABYLON.Vector3(2.0, 1.0, 0.04);
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

	var BUILDD01 = BUILDD.clone(BUILDD);
	BUILDD01.position = new BABYLON.Vector3(1300.0, 50.0, 1400.0);	

	var BUILDD02 = BUILDD.clone(BUILDD);
	BUILDD02.position = new BABYLON.Vector3(1300.0, 50.0, 1900.0);	

	var BUILDD03 = BUILD.clone(BUILD);
	BUILDD03.position = new BABYLON.Vector3(1300.0, 50.0, 600.0);	

	var BUILDD04 = BUILDD.clone(BUILDD);
	BUILDD04.position = new BABYLON.Vector3(1300.0, 50.0, 200.0);	

	var BUILDD05 = BUILDD.clone(BUILDD);
	BUILDD05.position = new BABYLON.Vector3(1300.0, 50.0, -400.0);	

	var BUILDD06 = BUILDD.clone(BUILDD);
	BUILDD06.position = new BABYLON.Vector3(1300.0, 50.0, -1200.0);	

	var BUILDD07 = BUILDD.clone(BUILDD);
	BUILDD07.position = new BABYLON.Vector3(1300.0, 50.0, -1300.0);		
		 
	
	
	
 	for (var i = 0; i < 10; i++) {		
		var BUILDD00 = BUILD.clone(BUILD);
		if(i<4){BUILDD00.position = new BABYLON.Vector3(340*(i)-1400,50,1680);}
		if((i==0)||(i>=4)){BUILDD00.position = new BABYLON.Vector3(340*(i)-1400,50,1880);}
				}
				
				
	
	var BUILDD1 = BABYLON.Mesh.CreateBox("ARROW.UP", 100, scene);
	BUILDD1.position = new BABYLON.Vector3(-1350.0, 250.0, 1000.0);
	BUILDD1.visibility = 0; 
	
		 
 	var BUILD001 = BABYLON.Mesh.CreatePlane("ARROW.UP", 100, scene);
		 BUILD001.material = materialBUILDD2;//rawmat;
		 BUILD001.scaling = new BABYLON.Vector3(2.0, 7.0, 0.04);
		 BUILD001.position = new BABYLON.Vector3(0.0, 0.0, 100);
		 BUILD001.rotation.y = -Math.PI;
		 BUILD001.checkCollisions = true; 
		 BUILD001.parent = BUILDD1;			 
	var BUILD002 = BUILD001.clone(BUILD001);	
		 BUILD002.position = new BABYLON.Vector3(100, 0.0, 0.0);
         BUILD002.rotation.y = -Math.PI/2;		 
         BUILD002.parent = BUILDD1;	
	var BUILD003 = BUILD001.clone(BUILD001);	
		 BUILD003.position = new BABYLON.Vector3(-100, 0.0, 0.0);
         BUILD003.rotation.y = Math.PI/2;		 
         BUILD003.parent = BUILDD1;		
	var BUILD004 = BUILD001.clone(BUILD001);	
		 BUILD004.position = new BABYLON.Vector3(0.0, 0.0, -100);
         BUILD004.rotation.y = 2*Math.PI;		 
         BUILD004.parent = BUILDD1;	
		 
		 
	 /*	for (var i = 0; i < 10; i++) {		
		var BUILDD000 = BUILDD1.clone(BUILDD1);
		BUILDD000.position = new BABYLON.Vector3(340*(i)-1400,250,-1880);}  */
		
		
	var BUILDD0001 = BUILDD1.clone(BUILDD1);
	BUILDD0001.position = new BABYLON.Vector3(300.0, 250.0, -800.0);

	var BUILDD0002 = BUILDD1.clone(BUILDD1);
	BUILDD0002.position = new BABYLON.Vector3(100.0, 250.0, 800.0);	
	




	var BUILDD2 = BABYLON.Mesh.CreateBox("ARROW.UP", 100, scene);
	BUILDD2.position = new BABYLON.Vector3(-260.0, 50.0, 170.0);
	BUILDD2.visibility = 0;
		 
 	var BUILDD001 = BABYLON.Mesh.CreatePlane("ARROW.UP", 100, scene);
		 BUILDD001.material = materialBUILDD3;//rawmat;
		 BUILDD001.scaling = new BABYLON.Vector3(2.0, 1.0, 0.04);
		 BUILDD001.position = new BABYLON.Vector3(0.0, 0.0, 100);
		 BUILDD001.rotation.y = -Math.PI;
		 BUILDD001.checkCollisions = true;
		 BUILDD001.parent = BUILDD2;			 
	var BUILDD002 = BUILDD001.clone(BUILDD001);	
		 BUILDD002.position = new BABYLON.Vector3(100, 0.0, 0.0);
         BUILDD002.rotation.y = -Math.PI/2;		 
         BUILDD002.parent = BUILDD2;	
	var BUILDD003 = BUILDD001.clone(BUILDD001);	
		 BUILDD003.position = new BABYLON.Vector3(-100, 0.0, 0.0);
         BUILDD003.rotation.y = Math.PI/2;		 
         BUILDD003.parent = BUILDD2;		
	var BUILDD004 = BUILDD001.clone(BUILDD001);	
		 BUILDD004.position = new BABYLON.Vector3(0.0, 0.0, -100);
         BUILDD004.rotation.y = 2*Math.PI;		 
         BUILDD004.parent = BUILDD2;	
		 
		 
	 	for (var i = 0; i < 10; i++) {		
		var BUILDD0001 = BUILDD2.clone(BUILDD2);
		BUILDD0001.position = new BABYLON.Vector3(340*(i)-1400,50,-1880);
		
		if((i>=2)&&(i<=6)){BUILDD0001.position = new BABYLON.Vector3(340*(i)-1400,50,-1580);}}  
		
		

//#######################################################################################################
            


	
	

	


	
	var UPR = new BABYLON.StandardMaterial("yellow&black", scene);
	UPR.diffuseTexture = new BABYLON.Texture("images/UPER2.jpg", scene);
	

	

 

   var BOXexplose2 = new BABYLON.SpriteManager("fireanim2", "images/EXPLOSION.gif", 1, 100, scene);
			var exp2 = new BABYLON.Sprite("fireee2", BOXexplose2);
		    exp2.size=0;
			
  var BOXexplose11 = new BABYLON.SpriteManager("fireanim2", "images/EXPLOSION.gif", 100, 100, scene);
		

			
		scene.fogMode = BABYLON.Scene.FOGMODE_EXP;//;BABYLON.Scene.FOGMODE_EXP;BABYLON.Scene.FOGMODE_EXP2;BABYLON.Scene.FOGMODE_LINEAR
	    scene.fogDensity = 0.001;
	    scene.fogColor = new BABYLON.Color3(0,0, 0);
//################################################ MONSTER ################################	
//################################################ MONSTER ################################	
//################################################ MONSTER ################################	
//################################################ MONSTER ################################	
//################################################ MONSTER ################################	
//################################################ MONSTER ################################				

var MONSTER = BABYLON.SceneLoader.ImportMesh("","./", "XenoRanger.babylon", scene, function (newMeshes,partycleSystems) {
	     MONSTER=newMeshes[0];
		 MONSTER.checkCollisions = true;
		 MONSTER.tagM = "enemy2";
		 MONSTER.scaling=new BABYLON.Vector3(0.1,0.1,0.1);}); 
		 
	var BARELM = new BABYLON.StandardMaterial("BAREl", scene);
	BARELM.diffuseTexture = new BABYLON.Texture("images/BA1.jpg", scene);
	BARELM.bumpTexture = new BABYLON.Texture("images/BA1N.jpg", scene);
	
 	var MONSTER = BABYLON.Mesh.CreateSphere("MONSTER", 1,5, scene);
	//MONSTER.material = fireMaterial;
	MONSTER.visibility=0;  
	
	
	var MATPORTMONSTER = new BABYLON.StandardMaterial("yellow&black", scene);
	MATPORTMONSTER.diffuseTexture = new BABYLON.Texture("images/A12.jpg", scene);
	MATPORTMONSTER.diffuseTexture.uScale = MATPORTMONSTER.diffuseTexture.vScale = 4;
	
	 var FIREM = new BABYLON.StandardMaterial("texture1", scene);
     FIREM.diffuseTexture = new BABYLON.Texture("images/F2.jpg", scene);
	 FIREM.bumpTexture = new BABYLON.Texture("images/NORM1.jpg", scene);
	 
	 var META1 = new BABYLON.StandardMaterial("texture1", scene);
     META1.diffuseTexture = new BABYLON.Texture("images/MET1.jpg", scene);
	 META1.bumpTexture = new BABYLON.Texture("images/NORM1.jpg", scene);
	 

	 
	var PORTMONSTER = BABYLON.Mesh.CreateTorus("torus", 7, 7, 30, scene, false);
	     PORTMONSTER.scaling = new BABYLON.Vector3(1.5, 0.7, 1.2);
		 PORTMONSTER.material = BARELM;//MATPORTMONSTER;
         PORTMONSTER.tagM = "enemy2";
	     PORTMONSTER.checkCollisions = true; 

	var RAW1 = BABYLON.Mesh.CreateTorus("torus", 3, 1.8, 30, scene, false);
		 RAW1.material = FIREM;
         RAW1.tagM = "enemy2";
	     RAW1.checkCollisions = true; 
		 RAW1.rotation.x = Math.PI/2;
		 RAW1.position = new BABYLON.Vector3(5, -2, 4.5);
		 RAW1.parent = PORTMONSTER;	
	var RAW2 = RAW1.clone(RAW1);
		 RAW2.position = new BABYLON.Vector3(5, -2, -4.5);
		 RAW2.parent = PORTMONSTER;		 
	var RAW3 = RAW1.clone(RAW1);
		 RAW3.position = new BABYLON.Vector3(-5, -2, 4.5);
		 RAW3.parent = PORTMONSTER;	
	var RAW4 = RAW1.clone(RAW1);
		 RAW4.position = new BABYLON.Vector3(-5, -2, -4.5);
		 RAW4.parent = PORTMONSTER;	
		
   	 var AXERAW1 = BABYLON.Mesh.CreateCylinder("BAREL", 10.5, 2, 2, 26, scene);
	 AXERAW1.material = MATPORTMONSTER;
	 AXERAW1.position = new BABYLON.Vector3(5, -2, 0);
     AXERAW1.rotation.x = Math.PI/2;	 
     AXERAW1.parent = PORTMONSTER;
	var AXERAW2 = AXERAW1.clone(GUNM1); 
	 AXERAW2.position = new BABYLON.Vector3(-5, -2, 0);	 
     AXERAW2.parent = PORTMONSTER;	

	var PORTMONSTER2 = BABYLON.Mesh.CreateTorus("torus", 6, 1, 30, scene, false);
	     PORTMONSTER2.scaling = new BABYLON.Vector3(1, 1, 1.6);
		 PORTMONSTER2.material = UPR;//MATPORTMONSTER;
		 PORTMONSTER2.rotation.z = -Math.PI/1.8;
         PORTMONSTER2.tagM = "enemy2";
	     PORTMONSTER2.checkCollisions = true; 	
         PORTMONSTER2.position = new BABYLON.Vector3(4, 3, 0.5);	
         PORTMONSTER2.parent = PORTMONSTER;	  			 
		 
	 var GUNM1 = BABYLON.Mesh.CreateCylinder("BAREL", 8, 2, 2, 26, scene);
	 GUNM1.material = MATPORTMONSTER;
	 GUNM1.rotation.z = -Math.PI/2.3;
	 GUNM1.position = new BABYLON.Vector3(7, 3, 0);	
     GUNM1.parent = PORTMONSTER;	 
	 
	 var GUNM2 = GUNM1.clone(GUNM1);  	 
	 GUNM2.position = new BABYLON.Vector3(7, 3, -2);	
     GUNM2.parent = PORTMONSTER;
	 var GUNM3 = GUNM1.clone(GUNM1); 	 
	 GUNM3.position = new BABYLON.Vector3(7, 3, 2);	
     GUNM3.parent = PORTMONSTER;


	 



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
    var spriteManagerKEYf = new BABYLON.SpriteManager("spriteManagerKEY", "images/KEY.png", 10, 60, scene);
	var spriteManagerFRUIT1 = new BABYLON.SpriteManager("spriteManagerAPLE", "images/F2.png", 10, 120, scene);
	var spriteManagerFRUIT2 = new BABYLON.SpriteManager("spriteManagerCHIKEN", "images/D6.png", 10, 120, scene);
	var spriteManagerFRUIT3 = new BABYLON.SpriteManager("spriteManagerHAMBURGER", "images/D7.png", 10, 120, scene);
	var spriteManagerMISSIL = new BABYLON.SpriteManager("spriteManagerMISSIL", "images/M1.png", 1, 250, scene);

	var KEYf = new BABYLON.Sprite("BOMB", spriteManagerKEYf);KEYf.size = 0; 
	var FRUIT1 = new BABYLON.Sprite("FRUIT", spriteManagerFRUIT1);FRUIT1.size = 0;
	var FRUIT2 = new BABYLON.Sprite("FRUIT", spriteManagerFRUIT2);FRUIT2.size = 0;
	var FRUIT3 = new BABYLON.Sprite("FRUIT", spriteManagerFRUIT3);FRUIT3.size = 0;
	var MISSIL = new BABYLON.Sprite("MISSIL", spriteManagerMISSIL);MISSIL.size = 0;
	
	//MISSIL.position = new BABYLON.Vector3(1, 10, 0);
	
	
	var FRUIT4= new BABYLON.SpriteManager("BOMBS", "images/EXPLOSION4.gif", 1, 120, scene);
	var FRUIT4 = new BABYLON.Sprite("fireee2", FRUIT4);



		
	
		var xxxM;var yyyM;
		var MONSTERwalk= new BABYLON.SpriteManager("MONS", "images/WALKER.gif", 90, 150, scene);
	for (var i = 0; i < 90; i++) {
		yyyM = random(-1380, 1380);     
		xxxM = random(-1280, 1280);
		//zzzM=3;
	var BOXmonsterW1 = BABYLON.Mesh.CreateBox("BOXmonsterWALKING", 9, scene);
	BOXmonsterW1.scaling = new BABYLON.Vector3(0.6, 1, 1);
	BOXmonsterW1.position = new BABYLON.Vector3(xxxM, 3, yyyM);
    BOXmonsterW1.BXmnsWLK1 = "BOXmonsterWALKING";BOXmonsterW1.visibility=0;

	

	  var MONSTERwalk1 = new BABYLON.Sprite("fireee2", MONSTERwalk);
	  MONSTERwalk1.playAnimation(0, 16, true, 100);
	  MONSTERwalk1.size = 11;
	  //MONSTERwalk1.BXmnsWLK1 = "BOXmonsterWALKING";
	  MONSTERwalk1.position = new BABYLON.Vector3(xxxM, 4.5, yyyM);
	  }
	  
		








		
/*
	  
	var BOXmonsterW1 = BABYLON.Mesh.CreateBox("BOXmonsterWALKING", 9, scene);
	BOXmonsterW1.scaling = new BABYLON.Vector3(0.6, 1, 1);
	BOXmonsterW1.position = new BABYLON.Vector3(6, 3, 4);
    BOXmonsterW1.BXmnsWLK1 = "BOXmonsterWALKING";BOXmonsterW1.visibility=0;
	

	var MONSTERwalk= new BABYLON.SpriteManager("MONS", "images/WALKER.gif", 1, 150, scene);
	  var MONSTERwalk1 = new BABYLON.Sprite("fireee2", MONSTERwalk);
	  MONSTERwalk1.playAnimation(0, 16, true, 100);
	  MONSTERwalk1.size = 11;
	  MONSTERwalk1.position = new BABYLON.Vector3(0, 4.5, 0);
	  MONSTERwalk1.parent=BOXmonsterW1;  */

		scene.registerBeforeRender(function () {
		 if   (camSensor.intersectsMesh(BOXmonsterW1, false)) 
			 {monsterWTOUCHED++;}  
			   
		 if  ( (camSensor.intersectsMesh(MONSTER, false)) || (camSensor.intersectsMesh(PORTMONSTER , false))    )   
			   {monsterWTOUCHED2++;}  
			   
			   
	var size = scene.meshes.length;  //BARELBOMBS
	var i=0;
	while (i < size ) {  
		if ( (scene.meshes[i].BXmnsWLK1 && camSensor.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=0)   ) 
		     {monsterWTOUCHED++;EXPLOS1.play();}
				
				i++;}  

		       });	
	

   
			
	//var spriteManagerPRISON = new BABYLON.SpriteManager("treesManager", "images/PRISON.png", 70, 390, scene);//800
	
	
	
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
// ######################### Principal LOOP  ###################################################/
		
	engine.runRenderLoop(function() 
	{
	
     	if (START==0){ 
	         if(ST2<2){ST2++;}
		if(ST2==1){camera.speed = 0; }	}  

     	if (START==1){ 
	         if(ST<2){ST++;}
             if(ST==1){STARTicon.style.width = STARTicon.style.height = 0 + 'px';camera.speed = 1.5; }	
	//ROTT.position = camera.position.clone();
	var DIR;
    DIR = getForwardVector(camera.rotation);
	DIR.normalize();
	
	if (keys.left==1){camera.rotation.y+=-0.05;} if (keys.right==1){camera.rotation.y+=0.05;}
	
	
	if(DIR.z>=0)   {
		       if(DIR.x<0){DIRXZ.innerHTML=parseInt(270+-90 * DIR.x)}
	           if(DIR.x>=0){DIRXZ.innerHTML=parseInt(270 -90 * DIR.x)}  }
			   
	if(DIR.z<0)  {DIRXZ.innerHTML=parseInt(90 +90 * DIR.x)}  
	
    if((MONSTERW1==0)&&(YM1>=-30)){YM1+=-0.4;MONSTERwalk1.position.y=BOXmonsterW1.position.y=YM1;}	


	 if ( (monsterWTOUCHED>=2) ||(monsterWTOUCHED2>=2) )
	 {mT++;}
	     if(mT==1){score.innerHTML--;CHANGE.play();}
	     if(mT==2){HAHA.play();}
		 if(mT>=30){monsterWTOUCHED=monsterWTOUCHED2=mT=0;document.getElementById("GUN").style.opacity = 1;}
		if   ((mT % 2 == 0)&&(mT>0)){document.getElementById("GUN").style.opacity = 0.8;}
		if   ((mT % 3 == 0)&&(mT>0)){document.getElementById("GUN").style.opacity = 0.2;}
/*
		 if(mT>=30){monsterWTOUCHED=monsterWTOUCHED2=mT=0;document.getElementById("GUN").style.opacity = document.getElementById("GUNmov").style.opacity = 1;}
		if   ((mT % 2 == 0)&&(mT>0)){document.getElementById("GUN").style.opacity = document.getElementById("GUNmov").style.opacity = 0.8;}
		if   ((mT % 3 == 0)&&(mT>0)){document.getElementById("GUN").style.opacity = document.getElementById("GUNmov").style.opacity = 0.2;}

*/

		
		LIGHTmov.position = new BABYLON.Vector3(camera.position.x,camera.position.y, camera.position.z);
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################
	DXXm+=DELTAXm;
	DYYm+=DELTAYm;
	DZZm+=DELTAZm;
	
	MONSTER.position = new BABYLON.Vector3(XXm+DXXm,ZZm+DZZm,YYm+DYYm);
	PORTMONSTER.position = new BABYLON.Vector3(XXm+DXXm,ZZm+DZZm,YYm+DYYm); 
	
	   if ((MONSTER.position.x>=1900)  || (MONSTER.position.x<=-1900)){DELTAXm=-DELTAXm; }
       if ((MONSTER.position.z>=1900)  || (MONSTER.position.z<=-1900)){DELTAYm=-DELTAYm;}  
       if (MONSTER.position.y>3)  {DELTAZm=-0.5;}
       if (MONSTER.position.y<=3) {DELTAZm=0;} 
	 
	 
	/*DXXmW+=DELTAXmW;
	DYYmW+=DELTAYmW;
	
	BOXmonsterW1.position = MONSTERwalk1.position = new BABYLON.Vector3(DXXmW,3+DZZmW,DYYmW); 
	   if ((BOXmonsterW1.position.x>=1900)  || (BOXmonsterW1.position.x<=-1900))  {DELTAXmW=-DELTAXmW; }
       if ((BOXmonsterW1.position.z>=1900)  || (BOXmonsterW1.z<=-1900))           {DELTAYmW=-DELTAYmW;}  
	   */
	   
	if(MONSTERW1KILLED==1)
	    {MONSTERW1KILLED=0;
	  var MONSTERwalk1FIRED = new BABYLON.Sprite("fireee2", BOXexplose11);
	  MONSTERwalk1FIRED.playAnimation(0, 15, true, 100);
	  MONSTERwalk1FIRED.size = 24;
	  MONSTERwalk1FIRED.position = new BABYLON.Vector3(EXPx3+5, 3, EXPz3+5);
	  
		}
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################	
if((BOXEXPLOSE==1)&&(bx<=150))
	  {bx++;
	  if(bx==1){EXPy=EXPy2=1.5; //if(BOXOUT==0){EXPy=EXPy2=1.5;} if(BOXOUT==1){EXPy=EXPy2=-18;}    
	             if(INSIDBOX.innerHTML==7){particleSystem.start(); boxkey.position = new BABYLON.Vector3(EXPx,EXPy2-2,EXPz);}  
				    if(expKEY3==1){document.getElementById("KEY1").style.opacity=1;} 
				    if(expKEY2==1){document.getElementById("KEY2").style.opacity=1;} 
				    if(expKEY1==1){document.getElementById("KEY3").style.opacity=1;} 
	            BOMBED=0;exp2.position = new BABYLON.Vector3(EXPx,EXPy+2.5,EXPz);exp2.playAnimation(0, 16, true, 100);
				
	            exp2.size=5;FRUIT1.size = FRUIT2.size = FRUIT3.size = KEYf.size = 0;}
	  if(bx>1) {  
	         if(EXPy<=10){EXPy+=0.3; 
                if(INSIDBOX.innerHTML==7){KEYf.position = new BABYLON.Vector3(EXPx,EXPy,EXPz);KEYf.size = 8;} // KEY			 
		        if(INSIDBOX.innerHTML==1){FRUIT1.position = new BABYLON.Vector3(EXPx,EXPy,EXPz);FRUIT1.size = 3;}
		        if(INSIDBOX.innerHTML==2){FRUIT2.position = new BABYLON.Vector3(EXPx,EXPy,EXPz);FRUIT2.size = 3;}
		        if(INSIDBOX.innerHTML==3){FRUIT3.position = new BABYLON.Vector3(EXPx,EXPy,EXPz);FRUIT3.size = 3;} }	
			 if(EXPy>10){FRUIT1.size = FRUIT2.size = FRUIT3.size = KEYf.size = 0;}
			    }
      	if(bx==10){exp2.size=0;exp2.stopAnimation();	} 
	    if(bx==150){particleSystem.stop();EXPy=0;INSIDBOX.innerHTML=BOXEXPLOSE=bx=0;FRUIT1.size = FRUIT2.size = FRUIT3.size = KEYf.size = 0;}}
	

	if((BOXEXPLOSE1==1)&&(bx1<=150))
	  {bx1++;
	  if(bx1==1){EXPy=1.5;//   if(BOXOUT==0){EXPy=1.5;} if(BOXOUT==1){EXPy=-18;} 
	            BOMBED=0;exp2.position = new BABYLON.Vector3(EXPx1,EXPy+2.5,EXPz1);
	            exp2.playAnimation(0, 16, true, 100);exp2.size=5;FRUIT4.size = 0;}
	  if(bx1>1) {  
				if(bx1==2) {FRUIT4.position = new BABYLON.Vector3(EXPx1,EXPy,EXPz1);FRUIT4.playAnimation(0, 16, true, 100);exp2.size=0;FRUIT4.size = 8;}
				if(bx1==20) {FRUIT4.stopAnimation();FRUIT4.size = 0;}
				if((bx1>=10) &&(bx1<=50) ){
						if(bx1 % 3 === 0) {camera.position.y=camera.position.y+1;}if(bx1 % 10 === 0) {camera.position.y=camera.position.y-1;}}
					
						}
      	if(bx1==10){exp2.size=0;exp2.stopAnimation();CANON.play();	} 
	    if(bx1==150){BOMBED=0;exp2.size=0;exp2.stopAnimation();
	            	BOXEXPLOSE1=0;bx1=0;camera.position.y=2;
		            //if(CAMX.innerHTML >=140){camera.position.y=-18;}
					//if(CAMX.innerHTML <=100){camera.position.y=2;}
					}    }

		
		

	if((BOXEXPLOSE2==1)&&(bx2<=10)) // KILL MONSTER WALK
	  {bx2++;
	  if(bx2==1){exp2.position = new BABYLON.Vector3(EXPx2,-15,EXPz2);exp2.playAnimation(0, 16, true, 100);exp2.size=12;}
      if(bx2==10){exp2.size=0;exp2.stopAnimation();CANON.play();BOXEXPLOSE2=bx2=0;	}}

	if((BOXEXPLOSE3==1)&&(bx3<=10)) // KILL BIG MONSTER 
	  {bx3++;
	  if(bx3==1){exp2.position = new BABYLON.Vector3(EXPx2,EXPy2+2,EXPz2);exp2.playAnimation(0, 16, true, 100);exp2.size=18;}
      if(bx3==10){exp2.size=0;exp2.stopAnimation();CANON.play();BOXEXPLOSE3=bx3=0;	}}

				
		


	   
	   
	   
 

  
	CAMX.innerHTML=parseInt(camera.position.x);CAMY.innerHTML=parseInt(camera.position.z); 
	MX=parseInt(MONSTER.position.x);MY=parseInt(MONSTER.position.z);
	//MX.innerHTML=parseInt(PLANES.position.x);MY.innerHTML=parseInt(PLANES.position.z);

	document.getElementById("BOUSL").style.transform = document.getElementById("RAKAS").style.transform = "rotate(" + (-DIRXZ.innerHTML) + "deg)";//DIRXZ.innerHTML
	//= " rotate(" + (-10*ROT-40) + "deg)"  ;}
	
	

	
	
	            BOUSL.style.top = playerPOS.style.top= ((0.033*CAMX.innerHTML)+170)-90+ 'px';//50	
	            BOUSL.style.left = playerPOS.style.left= ((0.033*CAMY.innerHTML)+156)+ 'px';//160 
	            monsterPOS.style.top = ((0.04*MX)+170)-100+ 'px';	
	            monsterPOS.style.left =((0.04*MY)+145)+ 'px';
	  
/*		if(SMALLSCREEN==0){
	          	BOUSL.style.top = playerPOS.style.top= ((0.325*CAMX.innerHTML)+98)/2+20+ 'px';
	            BOUSL.style.left = playerPOS.style.left= ((0.72*CAMY.innerHTML)+175)+ 'px'; 
	            monsterPOS.style.top= ((0.325*MX)+88)/2+20+ 'px';
	            monsterPOS.style.left= ((0.72*MY)+165)+ 'px'; }
	if(SMALLSCREEN==1){
	            BOUSL.style.top = playerPOS.style.top= ((0.033*CAMX.innerHTML)+170)-90+ 'px';//50	
	            BOUSL.style.left = playerPOS.style.left= ((0.033*CAMY.innerHTML)+156)+ 'px';//160 
	            monsterPOS.style.top = ((0.04*MX)+170)-100+ 'px';	
	            monsterPOS.style.left =((0.04*MY)+145)+ 'px'; }*/
	

	if(Xfir>=1){Xfir++;}
	if(Xfir2>=1){Xfir2++;}
	if(Xfir3>=1){Xfir3++;}
	if(Xfir4>=1){Xfir4++;}
	if(Xfir5>=1){Xfir5++;}
	
	if(  (Xfir==5) || (Xfir2==5)  || (Xfir3==5) || (Xfir4==5)  || (Xfir5==5) ){

		document.getElementById("GUN").style.transform = "rotate(0deg)";//document.getElementById("GUNmov").style.transform = 
	    document.getElementById("FIR").style.opacity=0;}
		

	if(Xfir5==2){RELOADGUN.play();}
	if(Xfir5>=25){TIR=0;Xfir5=Xfir4=Xfir3=Xfir2=Xfir=0;
	document.getElementById("BULLETX").style.opacity=document.getElementById("BULLETX2").style.opacity=
	document.getElementById("BULLETX3").style.opacity=document.getElementById("BULLETX4").style.opacity=
	document.getElementById("BULLETX5").style.opacity=0.8;}
	

	if( (Xfir==2) || (Xfir2==2) || (Xfir3==2) || (Xfir4==2) || (Xfir5==2)  )
	    if((DIR.x<=0.81)&&(DIR.x>=-0.81)){camera.position.z = camera.position.z-0.9;}
		else{camera.position.x = camera.position.x-0.9;}
	if( (Xfir==5) || (Xfir2==5) || (Xfir3==5) || (Xfir4==5) || (Xfir5==5)  )
	    if((DIR.x<=0.81)&&(DIR.x>=-0.81)){camera.position.z = camera.position.z+0.9;}
		else{camera.position.x = camera.position.x+0.9;}
		
		
	
	
	var toRemove = [];
		for (var i = 0, l = bullets.length; i < l; i++) {
			if (bullets[i].update()) {
				toRemove.push(i);
				bullets[i].dispose();}}
		
		for (var i = 0, l = toRemove.length; i < l; i++) {
			bullets.splice(toRemove[i], 1);}  	} // ##################  END START
		
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
	 sMaterial.reflectionTexture = new BABYLON.CubeTexture("images/skybox/1/skybox", scene);
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
	SK1.material.diffuseTexture = new BABYLON.Texture("images/2.jpg", scene);//2
	SK1.position = new BABYLON.Vector3(2000,1000,0);
	SK1.checkCollisions = true;
	
	var SK2 = BABYLON.Mesh.CreateBox("3groundGRoutBOG", 4000, scene);
	SK2.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK2.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK2.material.diffuseTexture = new BABYLON.Texture("images/1.jpg", scene);//1
	SK2.position = new BABYLON.Vector3(0,1000,2000);
	SK2.checkCollisions = true;
	
	var SK3 = BABYLON.Mesh.CreateBox("6groundGRoutBOG", 4000, scene);
	SK3.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK3.rotation.y = Math.PI;
	SK3.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK3.material.diffuseTexture = new BABYLON.Texture("images/3.jpg", scene);//3
	SK3.position = new BABYLON.Vector3(0,1000,-2000);
	SK3.checkCollisions = true;
	
	var SK4 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK4.scaling = new BABYLON.Vector3(1,0.5,0.001);
	SK4.rotation.y = Math.PI/2 ;
	SK4.rotation.z = Math.PI ;
	SK4.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK4.material.diffuseTexture = new BABYLON.Texture("images/4.jpg", scene);//4
	SK4.position = new BABYLON.Vector3(-2000,1000,0);
	SK4.checkCollisions = true;
	
	var SK5 = BABYLON.Mesh.CreateBox("1groundGRoutBOG", 4000, scene);
	SK5.scaling = new BABYLON.Vector3(1,1,0.0001);
	SK5.rotation.x = Math.PI/2 ;
	SK5.rotation.z = Math.PI/2 ;
	SK5.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK5.material.diffuseTexture = new BABYLON.Texture("images/5.jpg", scene);//5
	SK5.position = new BABYLON.Vector3(0,1990,0);
	SK5.checkCollisions = true;
	
	SK1.material.emissiveColor = SK2.material.emissiveColor = SK3.material.emissiveColor = SK4.material.emissiveColor =SK5.material.emissiveColor =  new BABYLON.Color3(1.0, 1.0, 1.0);


	var groundGRBIG = BABYLON.Mesh.CreatePlane("groundSTREET", 4010, scene);
	groundGRBIG.rotation.x = Math.PI / 2;
	groundGRBIG.material = new BABYLON.StandardMaterial("gMaterial", scene);
	groundGRBIG.material.diffuseTexture = new BABYLON.Texture("images/W2.jpg", scene);//STREET S2 8 street7ground1,ground2;street2:W2;
	groundGRBIG.material.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	groundGRBIG.material.diffuseTexture.uScale = 400;
	groundGRBIG.material.diffuseTexture.vScale = 400;
	groundGRBIG.position = new BABYLON.Vector3(0,0,0);
	groundGRBIG.checkCollisions = true;
	


		


	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAMe
	



	var BAREL1 = new BABYLON.StandardMaterial("BAREl", scene);
	BAREL1.diffuseTexture = new BABYLON.Texture("images/BA1.jpg", scene);
	BAREL1.bumpTexture = new BABYLON.Texture("images/BA1N.jpg", scene);
	
	var BAREL2 = new BABYLON.StandardMaterial("BAREl", scene);
	BAREL2.diffuseTexture = new BABYLON.Texture("images/BA2.jpg", scene);
    BAREL2.bumpTexture = new BABYLON.Texture("images/BA2N.jpg", scene);	
	
	var boxMaterial = new BABYLON.StandardMaterial("bMaterial", scene);
	boxMaterial.diffuseTexture = new BABYLON.Texture("images/box.jpg", scene);
	boxMaterial.emissiveColor = new BABYLON.Color3(0.0, 0.2, 0.4);
	boxMaterial.reflectionTexture = skyMaterial.reflectionTexture;
	boxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.PLANAR_MODE;	   //box.visibility = 0;


		var xxx;var yyy;
	for (var i = 0; i < 90; i++) {
		yyy = random(-80, 80); 
		
		if(i<=30) {    
		xxx = random(-80, 80);
		if(i<=10){var box = BABYLON.Mesh.CreateBox("box1", 5, scene);box.material = boxMaterial;}   
	    if((i<20)&&(i>10)){var box = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene);box.material = BAREL2;}
		if(i>=20){var box = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene);box.material = BAREL1;}
		box.position = new BABYLON.Vector3(xxx, 2.5 , yyy);
	if   ( (i % 3 == 0)&&(i>10)) {box.rotation.x=Math.PI/2;box.position.y =2.1; } 
              if(i % 5 == 0){box.tagB = "BOMB";}  else {box.tag = "FRUIT";}	
			  if(i==15){box.tagKEY1 = "KEY";}      }
	

		if(i>30) {
		xxx = random(340, 700);
		if(i<=50){var box = BABYLON.Mesh.CreateBox("box1", 5, scene); box.material = boxMaterial;}
		if(i>=70){var box = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene);box.material = BAREL1;}
		if((i<70)&&(i>50)){var box = BABYLON.Mesh.CreateCylinder("BAREL", 5, 4, 4, 26, scene); box.material = BAREL2;}
		box.position = new BABYLON.Vector3(xxx, 2.5 , yyy);
	   if   ( (i % 3 == 0)&&(i>50)) {box.rotation.x=Math.PI/2;box.position.y =2.1; } 
            if(i % 5 == 0){box.tagB1 = "BOMB";}  else {box.tag1 = "FRUIT";}	
            if(i==45){box.tagKEY2 = "KEY";}
            if(i==75){box.tagKEY3 = "KEY";}		}		

			
		box.checkCollisions=true;} 
		
		
		
		
		
}



function random(min, max) {
	return (Math.random() * (max - min) + min);
}
		
