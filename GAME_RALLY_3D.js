'use strict';  //    
//var AFFICHE;AFFICHE = document.getElementById('AFFICHE');AFFICHE.innerHTML=0;
var TOPmenu2;TOPmenu2 = document.getElementById('TOPmenu2');
TOPmenu2.style.width = 0 + 'px';
TOPmenu2.style.height = 0 + 'px';//300
TOPmenu2.style.opacity = 0;

var score;var score1=0;var speed;
score = document.getElementById('score');
score.innerHTML=99;

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
var TIMEKEYVIS=120;
var SUN=0;
function SUN1(){SUN=1;sunchange=1;}
function SUN0(){SUN=0;sunchange=1;}
var SUNicon,MOONicon;
SUNicon= document.getElementById('SUNicon');SUNicon.style.width = SUNicon.style.height = 0 + 'px';
MOONicon= document.getElementById('MOONicon');MOONicon.style.width = MOONicon.style.height = 45 + 'px';

speed = document.getElementById('speed');
speed.innerHTML=0;

var FIRSTANM=0;

var LEVELS77=0;var LEVELS1=0;var LEVELS2=0;var LEVELS3=0;var LEVELS4=0;var LEVELS5=0;var LEVELS6=0;var LEVELS7=0;

var ROT3D=1;

var DELTAY0=0;var DELTAY1=0;var DELTAY11=0;var DELTAY12=0;	
var CAMDELTAY=0; 
var CAMDELTAY1=0;	


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


var KEYicon1;var KEYicon2;var KEYicon3;var KEYicon4;var KEYicon5;var KEYicon6;var KEYicon7;
KEYicon1 = document.getElementById('KEYicon1');
KEYicon2 = document.getElementById('KEYicon2');
KEYicon3 = document.getElementById('KEYicon3');
KEYicon4 = document.getElementById('KEYicon4');
KEYicon5 = document.getElementById('KEYicon5');
KEYicon6 = document.getElementById('KEYicon6');
KEYicon7 = document.getElementById('KEYicon7');

KEYicon1.style.opacity=KEYicon2.style.opacity=KEYicon3.style.opacity=
KEYicon4.style.opacity=KEYicon5.style.opacity=KEYicon6.style.opacity=KEYicon7.style.opacity=0.4;

var KEY = 1;
var DELTAYkey=0;
var KEYMOVING=0;
var BIGKEYRANDPOS=0;
var K9=0;//K9=1; key map able to be visible 
var ZZm1 = 0;
var ZZm2 = 0;
var ALRTn=0;var ALRTf=0;

var CAMX,CAMY,playerPOS,BOUSL,RAKAS,RAKAS2,RAKASGAS,ENERG;var ENERGIE=600;var SPEEDC=1;var SPEEDC0=12;var SPEEDCM=0;var LOADENERGS=0;
CAMX = document.getElementById('CAMX');CAMY = document.getElementById('CAMY');
CAMX.innerHTML=0;CAMY.innerHTML=0; 
playerPOS = document.getElementById('playerPOS');//document.getElementById("playerPOS").style.opacity=1;
BOUSL = document.getElementById('BOUSL');RAKAS = document.getElementById('RAKS');
ENERG = document.getElementById('ENERG');RAKAS2 = document.getElementById('RAKS2');
RAKASGAS  = document.getElementById('RAKASGAS');
document.getElementById("RAKAS2").style.transform = "rotate(-122deg)";
document.getElementById("RAKASGAS").style.transform = "rotate(102deg)";
var BON=0;var BON1=0;
var BONT=0;var BONT1=0;
var BONW=0;var BONW1=0;

var BON11=0;

var STARTER=0;


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


var treesTOUCH=0;var TT=0;var TT1=0;

var boombTOUCH=0;var bb=0;
var buildingsTOUCH = 0;var STOPbuilding=0;var STOPbuilding2=0;

var XX,YY,ZZ;
XX=0;YY=0;ZZ=-1;




var MX,MY,monsterPOS,monsterPOS2,monsterPOS3,monsterPOS4,monsterPOS5,monsterPOS6,monsterPOS7;
var DXXm,DYYm,DZZm;
var DXXm=0.1;DYYm=0.1;DZZm=0.1;
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

//var INSIDBOX;//INSIDBOX = document.getElementById('INSIDBOX');INSIDBOX.innerHTML=0;


var CAR = new Audio('sounds/CAR.mp3');//CAR2
//var CARBRAKE = new Audio('sounds/ALERTSTART.mp3');//CARBRAKE

var CARACCE = new Audio('sounds/CAR.ACCELR.mp3');
var CARSTOP = new Audio('sounds/ALERT1.mp3');
var CARBRAKE = new Audio('sounds/CARBRAKE.mp3');
var CARCRASH = new Audio('sounds/CARCRASH.mp3');
var CARMENU = new Audio('sounds/CAR.ACELR.MEN2.mp3');

var BOUTTON = new Audio('sounds/BONUS.mp3');//BOUTTON
var BOUTTON1 = new Audio('sounds/BOUTTON1.mp3');

//var WINFRUIT = new Audio('sounds/WINFRUIT.mp3');
var HAHA = new Audio('sounds/HAHA.mp3');	
var CHANGE = new Audio('sounds/CHANGE.mp3');
var YEHAW = new Audio('sounds/YEHAW.mp3');
var EXPLOS1= new Audio('sounds/EXPLOS1.mp3');	
//var LOSE= new Audio('sounds/LOSE.mp3');	
//var OFF= new Audio('sounds/OFF.mp3');
var ALERT= new Audio('sounds/ALERT.mp3');
//var BONUS= new Audio('sounds/BONUS.mp3');
var BONUS3= new Audio('sounds/BONUS3.mp3');
var RADAR = new Audio('sounds/ALERTSTART.mp3');


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
/*var keys={letft:0,right:0,forward:0,back:0};
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
    if (evt.keyCode==40){keys.back=0;}   }*/


	var keys={letft:0,right:0,forward:0,back:0};
	function UPd(){keys.forward=1;}
	function UPu(){keys.forward=0;}
	function DOWNd(){keys.back=1;}
	function DOWNu(){keys.back=0;}
	function LEFTd(){keys.left=1;}
	function LEFTu(){keys.left=0;}
	function RIGHTd(){keys.right=1;}
	function RIGHTu(){keys.right=0;}
	/*function UNLOOK(){keys.forward=0;keys.back=0;keys.left=0;keys.right=0;}*/
	
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

  // scene.activeCamera.attachControl(canvas);



	
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
	   /* var boxkey = BABYLON.Mesh.CreateBox("box1", 5, scene);
		    boxkey.position =  new BABYLON.Vector3(-195, 30, 0);
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
            particleSystem.minSize = 1.1;//0.1;
            particleSystem.maxSize = 1.1;//0.1;
        
            // Life time of each particle (random between...
            particleSystem.minLifeTime = 0.1;
            particleSystem.maxLifeTime = 3.0;
        
            // Emission rate
            particleSystem.emitRate = 20000000;
        
            // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        
            // Set the gravity of all particles
            particleSystem.gravity = new BABYLON.Vector3(0, -1181, 0);//981
        
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
        
		    */
            // Start the particle system
		    //particleSystem.start();
			//particleSystem.stop();
			
			//boxkey.position =  new BABYLON.Vector3(-16, 3, 10);
			
//########################################### MATERIALS ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################  
//########################################### MATERIAL ######################################################################   
       /*    var fireMaterial = new BABYLON.StandardMaterial("FIRE.MAT", scene);
            var fireTexture = new BABYLON.FireProceduralTexture("fire", 256, scene); //256
            fireMaterial.diffuseTexture = fireTexture;
            fireMaterial.opacityTexture = fireTexture;
			fireMaterial.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
		


	
		
    var materialAR = new BABYLON.StandardMaterial("ARROW", scene);
    materialAR.diffuseTexture = new BABYLON.Texture("img_game/A2.png", scene);
    materialAR.diffuseTexture.hasAlpha = true;//materialAR.emissiveColor = new BABYLON.Color3(0, 0, 0);
    materialAR.backFaceCulling = false; 	
	
	
	var UPR = new BABYLON.StandardMaterial("yellow&black", scene);
	UPR.diffuseTexture = new BABYLON.Texture("img_game/UPER2.jpg", scene);

	


	
	var MATPORTMONSTER = new BABYLON.StandardMaterial("yellow&black", scene);
	MATPORTMONSTER.diffuseTexture = new BABYLON.Texture("img_game/A12.jpg", scene);
	MATPORTMONSTER.diffuseTexture.uScale = MATPORTMONSTER.diffuseTexture.vScale = 4;
	
	 var MATSNOW = new BABYLON.StandardMaterial("texture1", scene);
     MATSNOW.diffuseTexture = new BABYLON.Texture("img_game/snow.jpg", scene); //
	 MATSNOW.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 

	 
	 var FIREM2 = new BABYLON.StandardMaterial("texture1", scene);
     FIREM2.diffuseTexture = new BABYLON.Texture("img_game/amiga2.jpg", scene); //RED
	 FIREM2.diffuseTexture.uScale = 2;//36
     FIREM2.diffuseTexture.vScale = 6;//20
	 FIREM2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 

	 
	 var META1 = new BABYLON.StandardMaterial("texture1", scene);
     META1.diffuseTexture = new BABYLON.Texture("img_game/MET1.jpg", scene);
	 META1.bumpTexture = new BABYLON.Texture("img_game/NORM1.jpg", scene);
	

	 var FIREMB = new BABYLON.StandardMaterial("texture1", scene);
     FIREMB.diffuseTexture = new BABYLON.Texture("img_game/amiga.jpg", scene); //snow
	 FIREMB.emissiveColor = new BABYLON.Color3(0.0, 0.0, 1.0 );	*/
	 


	 
	/* var FIREMW = new BABYLON.StandardMaterial("texture1", scene);
     FIREMW.diffuseTexture = new BABYLON.Texture("img_game/snow.jpg", scene);
	 FIREMW.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 */


	
//############################"""" SNOWMAN ###########################33
//############################"""" SNOWMAN ###########################33
//############################"""" SNOWMAN ###########################33
//############################"""" SNOWMAN ###########################33
//############################"""" SNOWMAN ###########################33	
	
//BABYLON.Tools.GetFps().toFixed();	

 
/*var MAN1 = BABYLON.Mesh.CreateSphere("MONSTERfire1", 11,1, scene);
	MAN1.visibility=0;
	//MAN1.rotation.y=3.9;
	//MAN1.rotation.y=Math.PI/1.15;
	MAN1.rotation.y=0;
	MAN1.position = new BABYLON.Vector3(50, 1.5, 520);//(50, 1.5, 520);
	*/
	

//333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
	/*	var PLANEM = BABYLON.Mesh.CreateSphere("torus", 11, 1, scene, false);// BIG BODY
		 PLANEM.visibility=0;
		 PLANEM.position = new BABYLON.Vector3(50, 1.5, 520); 
         PLANEM.rotation.z = Math.PI/30;	
         PLANEM.rotation.y=Math.PI/1.15;			 
		 PLANEM.rotation.y=1.9;
		

	var PLANEMBOX = BABYLON.Mesh.CreateBox("torus", 8, scene, false);// BIG BODY
		 PLANEMBOX.visibility=0;
		 PLANEMBOX.scaling = new BABYLON.Vector3(1.8, 0.2, 1);	
         PLANEMBOX.position = new BABYLON.Vector3(0, 1.0, 0);
         PLANEMBOX.rotation.z = -Math.PI/30;			 
         PLANEMBOX.parent = PLANEM;	
		 

//333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333



var MAN2 = BABYLON.SceneLoader.ImportMesh("","./", "SNOWCARMONSTER.babylon", scene, function (newMeshes,partycleSystems) {MAN2=newMeshes[0];
MAN2.scaling = new BABYLON.Vector3(0.09, 0.09, 0.09);
MAN2.position = new BABYLON.Vector3(0, 0.4, 0);
//MAN2.rotation.y=5.9;//2.08159;
//MAN2.rotation.y=1.89;//4.29;

MAN2.rotation.y=1.58;
MAN2.rotate(BABYLON.Axis.X, 0.111, BABYLON.Space.LOCAL);
	
MAN2.checkCollisions=true;
MAN2.parent = PLANEM;//MAN1;
//MAN2.rotate(BABYLON.Axis.X, 0.111, BABYLON.Space.LOCAL);

}); 


PLANEM.scaling = new BABYLON.Vector3(3.0, 3.0, 3.0); 





	var materialRAWWM1 = new BABYLON.StandardMaterial("ARROW", scene);
    materialRAWWM1.diffuseTexture = new BABYLON.Texture("img_game/ROU1.jpg", scene);//ROU1.png
	//materialRAWWM1.bumpTexture = new BABYLON.Texture("img_game/NORM1.jpg", scene);//NORM1.jpg
		 
  var RAWDLM1 = BABYLON.Mesh.CreateTorus("torus", 3.6, 1.2, 30, scene, false);//("torus", 3, 1.1, 30, scene, false);
	     RAWDLM1.rotation.x = Math.PI/2;
		 RAWDLM1.material = materialRAWWM1;//rawmat;
		 RAWDLM1.position = new BABYLON.Vector3(-4.7, 1.6, -2.99);	//(-2.7, -0.82, 0.0);
         RAWDLM1.scaling = new BABYLON.Vector3(0.65, 2.5, 0.65);//0.65, 1.8, 0.65  (0.5, 0.5, 0.5);		 
         RAWDLM1.parent = PLANEM; 
		 
	var RAWDLM3 = RAWDLM1.clone(RAWDLM1);	
		 RAWDLM3.position = new BABYLON.Vector3(-4.7, 1.6, 2.99);	 
         RAWDLM3.parent = PLANEM;				 
		
		
	var RAWDLM2 = RAWDLM1.clone(RAWDLM1);	
		 RAWDLM2.position = new BABYLON.Vector3(4.2, 0.68, -2.9);	 	 
         RAWDLM2.parent = PLANEM;			 
	var RAWDLM4 = RAWDLM1.clone(RAWDLM1);	
		 RAWDLM4.position = new BABYLON.Vector3(4.2, 0.68, 2.9);	
         RAWDLM4.parent = PLANEM;
		 
		 
		 
	var materialRAWM = new BABYLON.StandardMaterial("ARROW", scene);
    materialRAWM.diffuseTexture = new BABYLON.Texture("img_game/RAW4.png", scene);//RAW2
    materialRAWM.diffuseTexture.hasAlpha = true;//materialRAWM.emissiveColor = new BABYLON.Color3(0, 0, 0);
    materialRAWM.backFaceCulling = false; 	
	
		 		  

	var RAWDM1 = BABYLON.Mesh.CreatePlane("ARROW.UP", 8, scene);
		 RAWDM1.material = materialRAWM;//rawmat;
		 RAWDM1.scaling = new BABYLON.Vector3(0.3, 0.3, 0.04);
		 RAWDM1.position = new BABYLON.Vector3(4.2, 0.7, 4.3);		 
         RAWDM1.parent = PLANEM;		 
	var RAWDM2 = RAWDM1.clone(RAWDM1);	
		 RAWDM2.position = new BABYLON.Vector3(4.2, 0.7, -4.3);		 
         RAWDM2.parent = PLANEM;		 
	var RAWDM3 = RAWDM1.clone(RAWDM1);	
		 RAWDM3.position = new BABYLON.Vector3(-4.6, 1.6, 4.4);	 
         RAWDM3.parent = PLANEM;	
		 RAWDM3.rotation.y = -Math.PI;	 
	var RAWDM4 = RAWDM1.clone(RAWDM1);	
		 RAWDM4.position = new BABYLON.Vector3(-4.7, 1.6, -4.4);	 
         RAWDM4.parent = PLANEM;	
		 
	RAWDM1.rotation.y = -Math.PI;


	
*/



	
	/*
	var materialRAWWM1 = new BABYLON.StandardMaterial("ARROW", scene);
    materialRAWWM1.diffuseTexture = new BABYLON.Texture("img_game/ROU1.jpg", scene);//ROU1.png
	materialRAWWM1.bumpTexture = new BABYLON.Texture("img_game/NORM1.jpg", scene);//NORM1.jpg
	

	

		 
  var RAWDLM1 = BABYLON.Mesh.CreateTorus("torus", 3.6, 1.2, 30, scene, false);//("torus", 3, 1.1, 30, scene, false);
	     RAWDLM1.rotation.x = Math.PI/2;
		 //RAWDLM1.rotation.z = Math.PI/2.18;
		 RAWDLM1.rotate(BABYLON.Axis.Z, 3.6, BABYLON.Space.LOCAL);
		 RAWDLM1.material = materialRAWWM1;
		 RAWDLM1.position = new BABYLON.Vector3(2.99, 1.2, 5.0);	//(-2.7, -0.82, 0.0);
         RAWDLM1.scaling = new BABYLON.Vector3(0.65, 2.5, 0.65);//0.65, 1.8, 0.65  (0.5, 0.5, 0.5);		 
         RAWDLM1.parent = MAN1; 
		 
	var RAWDLM3 = RAWDLM1.clone(RAWDLM1);	
		 RAWDLM3.position = new BABYLON.Vector3(5.49, 1.2, -1.1);	 
         RAWDLM3.parent = MAN1;				 
		
		
	var RAWDLM2 = RAWDLM1.clone(RAWDLM1);
		 RAWDLM2.position = new BABYLON.Vector3(-2.5, 0.98, -4.4);	//2.5, 0.98, -4.9);
         RAWDLM2.parent = MAN1;		

	 
	var RAWDLM4 = RAWDLM1.clone(RAWDLM1);	
		 RAWDLM4.position = new BABYLON.Vector3(-5.0, 0.98, 0.9);	
         RAWDLM4.parent = MAN1;
		 
		 
		

			 
	var materialRAWM = new BABYLON.StandardMaterial("ARROW", scene);
    materialRAWM.diffuseTexture = new BABYLON.Texture("img_game/RAW4.png", scene);//RAW2
    materialRAWM.diffuseTexture.hasAlpha = true;//materialRAW.emissiveColor = new BABYLON.Color3(0, 0, 0);
    materialRAWM.backFaceCulling = false; 

	var RAWDM1 = BABYLON.Mesh.CreatePlane("ARROW.UP", 8, scene);
		 RAWDM1.material = materialRAWM;//rawmat;
		 RAWDM1.scaling = new BABYLON.Vector3(0.3, 0.3, 0.04);
		 RAWDM1.position = new BABYLON.Vector3(2.99, 7.2, 5.0);		 
         RAWDM1.parent = MAN1;	*/	

/*	var RAWDM1 = BABYLON.Mesh.CreatePlane("ARROW.UP", 8, scene);
		 RAWDM1.material = materialRAW;//rawmat;
		 RAWDM1.scaling = new BABYLON.Vector3(0.3, 0.3, 0.04);
		 RAWDM1.position = new BABYLON.Vector3(4.2, 0.7, 4.4);		 
         RAWDM1.parent = MAN1;		 
	var RAWDM2 = RAWDM1.clone(RAWDM1);	
		 RAWDM2.position = new BABYLON.Vector3(4.2, 0.7, -4.4);		 
         RAWDM2.parent = MAN1;		 
	var RAWDM3 = RAWDM1.clone(RAWDM1);	
		 RAWDM3.position = new BABYLON.Vector3(-4.6, 1.6, 4.5);	 
         RAWDM3.parent = MAN1;	
		 RAWDM3.rotation.y = -Math.PI;	 
	var RAWDM4 = RAWDM1.clone(RAWDM1);	
		 RAWDM4.position = new BABYLON.Vector3(-4.7, 1.6, -4.5);	 
         RAWDM4.parent = MAN1;	
		 
	RAWDM1.rotation.y = -Math.PI;*/
	
	
 
	
  /* 
  
  
  
  	var materialRAWW1 = new BABYLON.StandardMaterial("ARROW", scene);
    materialRAWW1.diffuseTexture = new BABYLON.Texture("img_game/ROU1.jpg", scene);//ROU1.png
	materialRAWW1.bumpTexture = new BABYLON.Texture("img_game/NORM1.jpg", scene);//NORM1.jpg
		 
  var RAWDL1 = BABYLON.Mesh.CreateTorus("torus", 3.6, 1.2, 30, scene, false);//("torus", 3, 1.1, 30, scene, false);
	     RAWDL1.rotation.x = Math.PI/2;
		 RAWDL1.material = materialRAWW1;//rawmat;
		 RAWDL1.position = new BABYLON.Vector3(-4.7, 1.6, -2.99);	//(-2.7, -0.82, 0.0);
         RAWDL1.scaling = new BABYLON.Vector3(0.65, 2.5, 0.65);//0.65, 1.8, 0.65  (0.5, 0.5, 0.5);		 
         RAWDL1.parent = PLANE; 
		 
	var RAWDL3 = RAWDL1.clone(RAWDL1);	
		 RAWDL3.position = new BABYLON.Vector3(-4.7, 1.6, 2.99);	 
         RAWDL3.parent = PLANE;				 
		
		
	var RAWDL2 = RAWDL1.clone(RAWDL1);	
		 RAWDL2.position = new BABYLON.Vector3(4.2, 0.68, -2.9);	 	 
         RAWDL2.parent = PLANE;			 
	var RAWDL4 = RAWDL1.clone(RAWDL1);	
		 RAWDL4.position = new BABYLON.Vector3(4.2, 0.68, 2.9);	
         RAWDL4.parent = PLANE;
		 
		 
		 
	var materialRAW = new BABYLON.StandardMaterial("ARROW", scene);
    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW4.png", scene);//RAW2
    materialRAW.diffuseTexture.hasAlpha = true;//materialRAW.emissiveColor = new BABYLON.Color3(0, 0, 0);
    materialRAW.backFaceCulling = false; 	
	
		 		  

	var RAWD1 = BABYLON.Mesh.CreatePlane("ARROW.UP", 8, scene);
		 RAWD1.material = materialRAW;//rawmat;
		 RAWD1.scaling = new BABYLON.Vector3(0.3, 0.3, 0.04);
		 RAWD1.position = new BABYLON.Vector3(4.2, 0.7, 4.4);		 
         RAWD1.parent = PLANE;		 
	var RAWD2 = RAWD1.clone(RAWD1);	
		 RAWD2.position = new BABYLON.Vector3(4.2, 0.7, -4.4);		 
         RAWD2.parent = PLANE;		 
	var RAWD3 = RAWD1.clone(RAWD1);	
		 RAWD3.position = new BABYLON.Vector3(-4.6, 1.6, 4.5);	 
         RAWD3.parent = PLANE;	
		 RAWD3.rotation.y = -Math.PI;	 
	var RAWD4 = RAWD1.clone(RAWD1);	
		 RAWD4.position = new BABYLON.Vector3(-4.7, 1.6, -4.5);	 
         RAWD4.parent = PLANE;	
		 
	RAWD1.rotation.y = -Math.PI;
	
	
	
	
	
	
	
	
	
	
	
	
	
    var MAN1 = BABYLON.Mesh.CreateSphere("MONSTERfire1", 10,10, scene);
	MAN1.material = FIREM;
	MAN1.position = new BABYLON.Vector3(500, 4.5, 0);  var MAN2 = MAN1.clone(MAN1);
	MAN2.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
	MAN2.position = new BABYLON.Vector3(0, 6, 0);
	MAN2.parent = MAN1

   	 var HAND1 = BABYLON.Mesh.CreateCylinder("BAREL", 5, 1, 1, 26, scene);
	 HAND1.material = BARELM;
	 HAND1.position = new BABYLON.Vector3(0, 0, 6);
     HAND1.rotation.x = -Math.PI/3;
     HAND1.parent = MAN1;	 
	 
	var HAND2 = HAND1.clone(HAND1); 
	HAND2.rotation.x = Math.PI/3;
	HAND2.position = new BABYLON.Vector3(0, 0, -6);
	HAND2.parent = MAN1;
	
	 var NEZ = BABYLON.Mesh.CreateCylinder("BAREL", 4, 1, 0.001, 26, scene);
	 NEZ.material = BARELM;
	 NEZ.position = new BABYLON.Vector3(4, 5.6, 0);
     NEZ.rotation.z = Math.PI/2;
     NEZ.parent = MAN1;

	var EY1 = BABYLON.Mesh.CreateSphere("MONSTERfire1", 10,1, scene);
	EY1.material = BARELM;
	EY1.position = new BABYLON.Vector3(1.9, 7, 1);
    EY1.parent = MAN1;

	var EY2 = EY1.clone(EY1);
	EY2.position = new BABYLON.Vector3(1.9, 7, -1);
    EY2.parent = MAN1;	 */
	

//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################		
//#########################  TREES ####################################################################			
	/*	 var xxx1;var yyy1;
		 var spriteManagerTreess = new BABYLON.SpriteManager("treesManager", "img_game/AR3.png", 70, 360, scene);//AR2;AR3.AR0
	for (var i = 0; i < 59; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess);
		trees.size = 30;
		var PORTtrees = BABYLON.Mesh.CreateCylinder("BAREL", 35, 35, 23, 4, scene);
		
		xxx1 = random(-1600, 1600);
        yyy1 = random(-1700, 1700); 		
		
		
		if(i<10){trees.position = new BABYLON.Vector3(340*(i)-1400,12,1560);
		        if(i==9){trees.position = new BABYLON.Vector3(340*(i)-1400,15,1780);}
		        if((i==4)||(i==5)){trees.position = new BABYLON.Vector3(340*(i)-1400,15,1680);}}
				
		if((i>=10)&&(i<20)){trees.position = new BABYLON.Vector3(340*(i)-4940,15,1060);
		      if((i==10)||(i==12)||(i==14)||(i==16)||(i==18)){trees.position = new BABYLON.Vector3(340*(i)-4940,15,1260);}}
			  
		if((i>=20)&&(i<30)){trees.position = new BABYLON.Vector3(340*(i)-8300,15,560);
		        if((i==20)||(i==23)||(i==25)||(i==27)){trees.position = new BABYLON.Vector3(340*(i)-8200,12,700);}}
				
		if((i>=30)&&(i<39)){trees.position = new BABYLON.Vector3(340*(i)-11640,15,0);
	        	if((i==31)||(i==33)||(i==35)||(i==37)){trees.position = new BABYLON.Vector3(340*(i)-11640,15,70);}
				if((i==34)||(i==36)){trees.position = new BABYLON.Vector3(340*(i)-11640,15,270);}}
				
		if((i>=39)&&(i<49)){trees.position = new BABYLON.Vector3(340*(i)-14840,15,-680);
	        	if((i==39)||(i==41)||(i==43)||(i==45)||(i==47)){trees.position = new BABYLON.Vector3(340*(i)-14640,15,-600);}
				if((i==45)||(i==42)){trees.position = new BABYLON.Vector3(340*(i)-14840,12,-250);}}


		if((i>=49)&&(i<59)){trees.position = new BABYLON.Vector3(340*(i)-18150,15,-900);
	        	if((i==50)||(i==55)||(i==57)){trees.position = new BABYLON.Vector3(340*(i)-18100,15,-1500);}
				if((i==52)||(i==54)){trees.position = new BABYLON.Vector3(340*(i)-18100,15,-1200);}
				}
				
		trees.position = new BABYLON.Vector3(xxx1,15,yyy1);
		PORTtrees.position = new BABYLON.Vector3(trees.position.x,15,trees.position.z);PORTtrees.visibility=0;PORTtrees.checkCollisions = true;
		PORTtrees.TREE = "treeTOUCH";		
		}	*/
			

			
	


    //####################################### THE BOXS GAME
	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAME
	//####################################### THE BOXS GAMe

	
		 	var BARELM = new BABYLON.StandardMaterial("BAREl", scene);
	BARELM.diffuseTexture = new BABYLON.Texture("img_game/BA1.jpg", scene);
	BARELM.bumpTexture = new BABYLON.Texture("img_game/BA1N.jpg", scene);
	BARELM.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
		
	
	var BAREL2 = new BABYLON.StandardMaterial("BAREl", scene);
	BAREL2.diffuseTexture = new BABYLON.Texture("img_game/BA2.jpg", scene);
    BAREL2.bumpTexture = new BABYLON.Texture("img_game/BA2N.jpg", scene);	
	BAREL2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
	
	var boxMaterial = new BABYLON.StandardMaterial("bMaterial", scene);
	boxMaterial.diffuseTexture = new BABYLON.Texture("img_game/box.jpg", scene);
	boxMaterial.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0); //box.BARELBOMBS = "BOMB";
	
	var box = BABYLON.Mesh.CreateBox("box1", 5, scene);box.material = boxMaterial;
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

  
			
            var groundMaterialROCKG1 = new BABYLON.StandardMaterial("groundUP", scene);//rockA1:rockA8:rockA9;   rock:rockF2;   snow:rockS1
            groundMaterialROCKG1.diffuseTexture = new BABYLON.Texture("img_game/rock4.jpg", scene);
			groundMaterialROCKG1.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCKG1.diffuseTexture.uScale = 86;
            groundMaterialROCKG1.diffuseTexture.vScale = 100;		
            var groundMaterialROCKG2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCKG2.diffuseTexture = new BABYLON.Texture("img_game/rock7.jpg", scene);
			groundMaterialROCKG2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCKG2.diffuseTexture.uScale = 86;
            groundMaterialROCKG2.diffuseTexture.vScale = 100;	
           var groundMaterialROCKG3 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCKG3.diffuseTexture = new BABYLON.Texture("img_game/rock8.jpg", scene);
			groundMaterialROCKG3.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCKG3.diffuseTexture.uScale = 86;
            groundMaterialROCKG3.diffuseTexture.vScale = 100;

           var groundMaterialROCKSH1 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCKSH1.diffuseTexture = new BABYLON.Texture("img_game/rock.jpg", scene);
			groundMaterialROCKSH1.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCKSH1.diffuseTexture.uScale = 86;
            groundMaterialROCKSH1.diffuseTexture.vScale = 100;		
            var groundMaterialROCKSH2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCKSH2.diffuseTexture = new BABYLON.Texture("img_game/rock10.jpg", scene);
			groundMaterialROCKSH2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCKSH2.diffuseTexture.uScale = 86;
            groundMaterialROCKSH2.diffuseTexture.vScale = 100;	
			
           var groundMaterialROCKS1 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCKS1.diffuseTexture = new BABYLON.Texture("img_game/snow.jpg", scene);
			groundMaterialROCKS1.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCKS1.diffuseTexture.uScale = 86;
            groundMaterialROCKS1.diffuseTexture.vScale = 100;		
            var groundMaterialROCKS2 = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialROCKS2.diffuseTexture = new BABYLON.Texture("img_game/rock11.jpg", scene);
			groundMaterialROCKS2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialROCKS2.diffuseTexture.uScale = 86;
            groundMaterialROCKS2.diffuseTexture.vScale = 100;	


			

            var groundMaterialGRASS = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialGRASS.diffuseTexture = new BABYLON.Texture("img_game/ground.jpg", scene);//rock7 rock6.22 rockA4 rockA3:1 Z4 street4 
			groundMaterialGRASS.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialGRASS.diffuseTexture.uScale = 446;//36
            groundMaterialGRASS.diffuseTexture.vScale = 450;//20
			
            var groundMaterialGRASS2 = new BABYLON.StandardMaterial("groundUP", scene);//ground..
            groundMaterialGRASS2.diffuseTexture = new BABYLON.Texture("img_game/ground6.jpg", scene);// snow ground4,snow.
			groundMaterialGRASS2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialGRASS2.diffuseTexture.uScale = 446;//36
            groundMaterialGRASS2.diffuseTexture.vScale = 450;//20
			
            var groundMaterialSNOW = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSNOW.diffuseTexture = new BABYLON.Texture("img_game/snow.jpg", scene);//ground1
			groundMaterialSNOW.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSNOW.diffuseTexture.uScale = 496;//36
            groundMaterialSNOW.diffuseTexture.vScale = 490;//20
			
           var groundMaterialSAHARA = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialSAHARA.diffuseTexture = new BABYLON.Texture("img_game/ground2.jpg", scene);// snow ground4,snow.
			groundMaterialSAHARA.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialSAHARA.diffuseTexture.uScale = 446;//36
            groundMaterialSAHARA.diffuseTexture.vScale = 450;//20
			
           /*var groundMaterialFIRE = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialFIRE.diffuseTexture = new BABYLON.Texture("img_game/Z4.jpg", scene);// snow ground4,snow.
			groundMaterialFIRE.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialFIRE.diffuseTexture.uScale = 446;//36
            groundMaterialFIRE.diffuseTexture.vScale = 450;//20*/
			
            var groundMaterialWATER = new BABYLON.StandardMaterial("groundUP", scene);
            groundMaterialWATER.diffuseTexture = new BABYLON.Texture("img_game/WATER1.jpg", scene);//ground4,snow.
			groundMaterialWATER.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            groundMaterialWATER.diffuseTexture.uScale = 146;//36
            groundMaterialWATER.diffuseTexture.vScale = 150;//20
			
       
			
	   
	
	      var groundMEGA = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPVALEY2.jpg", 30000, 30000, 100, 2, 50.5, scene, false);
            groundMEGA.position = new BABYLON.Vector3(0,-2.0,0);
			groundMEGA.material = groundMaterialGRASS; //groundMaterialGRASS;  groundMaterialSAHARA; 
			
	
	      var groundMEGAROCK = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPVALEY4.jpg", 20000, 20000, 100, 0, 450.5, scene, false);
            groundMEGAROCK.position = new BABYLON.Vector3(0,-14.5,0);
			groundMEGAROCK.material = groundMaterialROCKG1;
			
	
         /*var groundMEGAWTR = BABYLON.Mesh.CreatePlane("groundGRASS",30000, scene, false);
		    groundMEGAWTR.rotation.x = Math.PI / 2;
            groundMEGAWTR.position = new BABYLON.Vector3(0,0.5,0);
			groundMEGAWTR.material = groundMaterialWATER;
			groundMEGAWTR.visibility=1;*/
			
			
		var groundMEGAWTR = BABYLON.Mesh.CreateGroundFromHeightMap("groundGRASS", "img_game/MAPRIVER2.jpg", 30000, 30000, 100, 0, 2.5, scene, false);
            groundMEGAWTR.position = new BABYLON.Vector3(0,-0.5,0);
			groundMEGAWTR.material = groundMaterialWATER;
			

			
	   
	   
	   
	   
	   
	   
			


		var PLANE = BABYLON.Mesh.CreateSphere("torus", 11, 1, scene, false);// BIG BODY
		 PLANE.visibility=0;
		// PLANE.position = new BABYLON.Vector3(0, 2.0, -1); //(83, 2.0, 540);   camera.position = new BABYLON.Vector3(-29, -1992, 16);
		 PLANE.position = new BABYLON.Vector3(0, -1998.0, -1);
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
		 //light1.parent=PLANE; 
		 
		/* var PLANEBOX2 = PLANEBOX.clone(PLANEBOX);
		 PLANEBOX2.visibility=1;
		 PLANEBOX2.scaling = new BABYLON.Vector3(0.8, 0.002, 0.4);
		 PLANEBOX2.position = new BABYLON.Vector3(-2, 4.0, 0);//(0, 2.0, 0);
         //PLANE.rotation.z = Math.PI/30;PLANE.rotation.y=Math.PI/1.15;	
		 //PLANEBOX.checkCollisions = true;
		 PLANEBOX2.parent = PLANE;*/
		/*var PLANETOUCH = BABYLON.Mesh.CreateBox("torus", 16, scene, false);// BIG BODY
		 PLANETOUCH.visibility=0;
		 PLANETOUCH.scaling = new BABYLON.Vector3(1.1, 0.2, 0.6);
		 PLANETOUCH.position = new BABYLON.Vector3(0, 2.0, 0);
         PLANE.rotation.z = Math.PI/30;PLANE.rotation.y=Math.PI/1.15;	
		 PLANETOUCH.checkCollisions = true;
		 PLANETOUCH.parent = PLANE;*/
	 


	 
	 
	 

	
	
	
			

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
    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW3.png", scene);//
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
		 
		 
	 
		
	//####################  LIGHT CAR #####################################
    //####################  LIGHT CAR #####################################
    //####################  LIGHT CAR #####################################			
	
 
	





	
	

		 var PORTtreesORG = BABYLON.Mesh.CreateCylinder("BAREL", 50, 35, 33, 4, scene);PORTtreesORG.visibility=0;
		 var spriteManagerTreess = new BABYLON.SpriteManager("treesManager", "img_game/AR0.png", 500, 360, scene);//PALM
		 var spriteManagerTreess2 = new BABYLON.SpriteManager("treesManager", "img_game/AR1.png", 500, 360, scene);//ORNG
		 var spriteManagerTreess3 = new BABYLON.SpriteManager("treesManager", "img_game/AR2.png", 500, 360, scene);//GREEN
		  var xxx1 =0;var zzz1=0; 
	for (var i = 0; i < 500; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess3);trees.size = 60;
		var PORTtrees = PORTtreesORG.clone(PORTtreesORG);
		xxx1 = random(-8900, 8900);zzz1 = random(-8900, 8900);
		if((xxx1<=500)&&(xxx1>=-500)&&(zzz1<=500)&&(zzz1>=-500)){xxx1=xxx1+600;zzz1=zzz1+600;}
		trees.position = new BABYLON.Vector3(xxx1,25,zzz1);
		PORTtrees.position = new BABYLON.Vector3(xxx1,26,zzz1);
		PORTtrees.TREE = "treeTOUCH";}			
	for (var i = 0; i < 500; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess2);trees.size = 60;
		var PORTtrees = PORTtreesORG.clone(PORTtreesORG);
		xxx1 = random(-8900, 8900);zzz1 = random(-8900, 8900);
		if((xxx1<=500)&&(xxx1>=-500)&&(zzz1<=500)&&(zzz1>=-500)){xxx1=xxx1+600;zzz1=zzz1+600;}
		trees.position = new BABYLON.Vector3(xxx1,2025,zzz1);
		PORTtrees.position = new BABYLON.Vector3(xxx1,2024,zzz1);
		PORTtrees.TREE = "treeTOUCH";}			
	for (var i = 0; i < 500; i++) {		
		var trees = new BABYLON.Sprite("trees", spriteManagerTreess);trees.size = 60;
		var PORTtrees = PORTtreesORG.clone(PORTtreesORG);
		xxx1 = random(-8900, 8900);zzz1 = random(-8900, 8900);
		if((xxx1<=500)&&(xxx1>=-500)&&(zzz1<=500)&&(zzz1>=-500)){xxx1=xxx1+600;zzz1=zzz1+600;}
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

	 	 var FIREM = new BABYLON.StandardMaterial("texture1", scene);
     FIREM.diffuseTexture = new BABYLON.Texture("img_game/Z3.jpg", scene); //PIRATE
	 //FIREM.bumpTexture = new BABYLON.Texture("img_game/Z3.BUMP.jpg", scene);
	 FIREM.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 FIREM.diffuseTexture.uScale = 2;
	 //FIREM.diffuseTexture.vScale = 10;
	 
	 /*var FIREM2 = new BABYLON.StandardMaterial("texture1", scene);
     FIREM2.diffuseTexture = new BABYLON.Texture("img_game/Z4.jpg", scene); 
	 FIREM2.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 FIREM2.diffuseTexture.uScale = 2;*/
	 
	 var FIREM3 = new BABYLON.StandardMaterial("texture1", scene);
     FIREM3.diffuseTexture = new BABYLON.Texture("img_game/Z5.jpg", scene); 
	 FIREM3.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 FIREM3.diffuseTexture.uScale = 2;
	 


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
	

	
		var RAWSS1 = BABYLON.Mesh.CreateTorus("torus", 94, 25, 9, scene, false); // QUAWSSA ENTRANCE ROCK  STREET STAGE
		 RAWSS1.material = FIREM3;
		 RAWSS1.rotation.x = Math.PI/2;RAWSS1.rotation.y = Math.PI/2;
		 RAWSS1.position = new BABYLON.Vector3(500, 8, 10);
		 RAWSS1.scaling = new BABYLON.Vector3(1, 1, 1);
		 RAWSS1.rotation.y = Math.PI/2;
		 
		 
		 
		/*var RAWSS2 = RAWSS1.clone(RAWSS1); 
		RAWSS2.material = FIREM2;
		RAWSS2.position = new BABYLON.Vector3(-200, 8, -120);
		
		var RAWSS3 = RAWSS1.clone(RAWSS1);
        RAWSS3.material = FIREM;		
		RAWSS3.position = new BABYLON.Vector3(-200, 8, 140);*/
		
		


//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3		 
	/*var TOWERMaterialRED = new BABYLON.StandardMaterial("TOWERMaterialRED", scene);
	TOWERMaterialRED.diffuseTexture = new BABYLON.Texture("img_game/AAA6.jpg", scene);//UPER2   T1  wall1..jpg", scene);
	TOWERMaterialRED.diffuseTexture.uScale = 4;


	var RAW = BABYLON.Mesh.CreateTorus("torus", 44, 5, 7, scene, false);
		 RAW.material = FIREM;
		 RAW.rotation.x = Math.PI/2;RAW.rotation.y = Math.PI/2;
		 RAW.position = new BABYLON.Vector3(-290, 42, 380);
		 RAW.rotation.y = Math.PI/2.5;*/
	
	var RAWSG = BABYLON.Mesh.CreateBox("torus", 65, scene);// GREEN LEVEL
         RAWSG.tagUPQQ = "UP";RAWSG.visibility = 0;
	     RAWSG.checkCollisions = true; 
		 RAWSG.position = new BABYLON.Vector3(495, 12, 10);		 	 
	var spriteManagerENERG = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/ENERG.png", 3, 60, scene);
	var LOADENERG = new BABYLON.Sprite("BOMB", spriteManagerENERG);LOADENERG.size = 30; 
	LOADENERG.position = new BABYLON.Vector3(495, 12, 10);
	
	/*var RAWST = RAWSG.clone(RAWSG);// TINE LEVEL
	     RAWST.tagUPQQT = "UP";//RAWST.visibility = 1;
	     RAWST.checkCollisions = true; 
		 RAWST.position = new BABYLON.Vector3(-195, 12, -115);
	var LOADENERG2 = new BABYLON.Sprite("BOMB", spriteManagerENERG);LOADENERG2.size = 30; 
	LOADENERG2.position = new BABYLON.Vector3(-195, 12, -115);	
	
	
	var RAWSW = RAWSG.clone(RAWSG);// TINE LEVEL
	     RAWSW.tagUPQQT = "UP";//RAWST.visibility = 1;
	     RAWSW.checkCollisions = true; 
		 RAWSW.position = new BABYLON.Vector3(-195, 12, 135);
	var LOADENERG3 = new BABYLON.Sprite("BOMB", spriteManagerENERG);LOADENERG3.size = 30; 
	LOADENERG3.position = new BABYLON.Vector3(-195, 12, 135);	

	
	var RAWS1 = RAWSG.clone(RAWSG);
	     RAWS1.tagUPQQT = "UP";RAWS1.checkCollisions = true; 
		 RAWS1.position = new BABYLON.Vector3(-195, 12, 235);	
	var RAWS2 = RAWSG.clone(RAWSG);
	     RAWS2.tagUPQQT = "UP";RAWS1.checkCollisions = true; 
		 RAWS2.position = new BABYLON.Vector3(-195, 12, 335);	
	var RAWS3 = RAWSG.clone(RAWSG);
	     RAWS3.tagUPQQT = "UP";RAWS1.checkCollisions = true; 
		 RAWS3.position = new BABYLON.Vector3(-195, 12, 435);	
	var RAWS4 = RAWSG.clone(RAWSG);
	     RAWS4.tagUPQQT = "UP";RAWS1.checkCollisions = true; 
		 RAWS4.position = new BABYLON.Vector3(-195, 12, 535);	*/
	
	

var spriteManagerKEY1 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/KEY1.png", 2, 200, scene);
var spriteManagerKEY2 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/KEY2.png", 2, 200, scene);
var spriteManagerKEY3 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/KEY3.png", 2, 200, scene);
var spriteManagerKEY4 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/KEY4.png", 2, 200, scene);
var spriteManagerKEY5 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/KEY5.png", 2, 200, scene);
var spriteManagerKEY6 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/KEY6.png", 2, 200, scene);
var spriteManagerKEY7 = new BABYLON.SpriteManager("spriteManagerKEY", "img_game/KEY7.png", 2, 200, scene);
	
	var KEY1 = new BABYLON.Sprite("BOMB", spriteManagerKEY1);KEY1.size = 120; 
	var KEY2 = new BABYLON.Sprite("BOMB", spriteManagerKEY2);KEY2.size = 0; 
	var KEY3 = new BABYLON.Sprite("BOMB", spriteManagerKEY3);KEY3.size = 0; 
	var KEY4 = new BABYLON.Sprite("BOMB", spriteManagerKEY4);KEY4.size = 0; 
	var KEY5 = new BABYLON.Sprite("BOMB", spriteManagerKEY5);KEY5.size = 0; 
	var KEY6 = new BABYLON.Sprite("BOMB", spriteManagerKEY6);KEY6.size = 0; 
	var KEY7 = new BABYLON.Sprite("BOMB", spriteManagerKEY7);KEY7.size = 0; 
	
	var BIGKEY = BABYLON.Mesh.CreateBox("MONSTERfire1", 150, scene);BIGKEY.visibility=0;
	
	BIGKEYRANDPOS=parseInt(random(0, 5));
	                        if(BIGKEYRANDPOS<=1){XXm= random(-13700, -10700);YYm=random(-13700, 13700);}
							if(BIGKEYRANDPOS==2){XXm= random(10700, 13700);YYm=random(-13700, 13700);}
	                        if(BIGKEYRANDPOS==3){XXm= random(-13700, 13700);YYm=random(-13700, -10700);}
                        	if(BIGKEYRANDPOS>=4){XXm= random(-13700, 13700);YYm=random(10700, 13700);}
							BIGKEY.position = KEY1.position = new BABYLON.Vector3(XXm, 95, YYm);
	
	
	var materialSUPER = new BABYLON.StandardMaterial("te2", scene);//materialSUPER.diffuseTexture = new BABYLON.Texture("images/w1.jpg", scene);
	//materialSUPER.diffuseTexture = new BABYLON.Texture("images/A17.png", scene);
    materialSUPER.diffuseColor = new BABYLON.Color3(0, 0, 1); 
    materialSUPER.alpha = 0.5;
	
	var materialSUPER2 = new BABYLON.StandardMaterial("te2", scene);
    materialSUPER2.diffuseColor = new BABYLON.Color3(0, 0, 1); 
    materialSUPER2.alpha = 0.5;
	
		 var FIREM5 = new BABYLON.StandardMaterial("texture1", scene);
     FIREM5.diffuseTexture = new BABYLON.Texture("img_game/Z3.jpg", scene); 
	 FIREM5.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0 );
	 //FIREM5.diffuseTexture.uScale = 2;
	 FIREM5.alpha = 0.9;
	 
	
	     /*var fireMaterial = new BABYLON.StandardMaterial("fontainSculptur2", scene);
            var fireTexture = new BABYLON.FireProceduralTexture("fire", 256, scene);
            fireMaterial.diffuseTexture = fireTexture;
            fireMaterial.opacityTexture = fireTexture;*/
		
	var PORTKEY1 = BABYLON.Mesh.CreateSphere("torus", 4,80, scene);//PORTKEY1.scaling = new BABYLON.Vector3(4, 1.0, 3.2);
         PORTKEY1.position = new BABYLON.Vector3(-195, 10, 0);
		 PORTKEY1.rotation.z=Math.PI/2;//PORTKEY1.visibility=0.9;
		 PORTKEY1.material = FIREM5;//materialSUPER; fireMaterial;	

	var PORTKEY2 = PORTKEY1.clone(PORTKEY1);
	     PORTKEY2.position = new BABYLON.Vector3(-195, 10, 110);
	var PORTKEY3 = PORTKEY1.clone(PORTKEY1);
	     PORTKEY3.position = new BABYLON.Vector3(-195, 10, 210);
	var PORTKEY4 = PORTKEY1.clone(PORTKEY1);
	     PORTKEY4.position = new BABYLON.Vector3(-195, 10, 310);
	var PORTKEY5 = PORTKEY1.clone(PORTKEY1);
	     PORTKEY5.position = new BABYLON.Vector3(-195, 10, -110);
	var PORTKEY6 = PORTKEY1.clone(PORTKEY1);
	     PORTKEY6.position = new BABYLON.Vector3(-195, 10, -210);
	var PORTKEY7 = PORTKEY1.clone(PORTKEY1);
	     PORTKEY7.position = new BABYLON.Vector3(-195, 10, -310);
		


		 
	var KEY10 = new BABYLON.Sprite("BOMB", spriteManagerKEY1);KEY10.size = 50; 
	    KEY10.position = new BABYLON.Vector3(-195, 20, 0);
	var KEY11 = new BABYLON.Sprite("BOMB", spriteManagerKEY2);KEY11.size = 50; 
	    KEY11.position = new BABYLON.Vector3(-195, 20, 110);
	var KEY12 = new BABYLON.Sprite("BOMB", spriteManagerKEY3);KEY12.size = 50; 
	    KEY12.position = new BABYLON.Vector3(-195, 20, 210);
	var KEY13 = new BABYLON.Sprite("BOMB", spriteManagerKEY4);KEY13.size = 50; 
	    KEY13.position = new BABYLON.Vector3(-195, 20, 310);
	var KEY14 = new BABYLON.Sprite("BOMB", spriteManagerKEY5);KEY14.size = 50; 
	    KEY14.position = new BABYLON.Vector3(-195, 20, -110);
	var KEY15 = new BABYLON.Sprite("BOMB", spriteManagerKEY6);KEY15.size = 50; 
	    KEY15.position = new BABYLON.Vector3(-195, 20, -210);
	var KEY16 = new BABYLON.Sprite("BOMB", spriteManagerKEY7);KEY16.size = 50; 
	    KEY16.position = new BABYLON.Vector3(-195, 20, -310);
	
	
	
	groundMEGA.material = groundMaterialSAHARA ;groundMEGAROCK.material=groundMaterialROCKSH2;
				groundMEGAWTR.position = new BABYLON.Vector3(0,-2000.2,0);groundMEGAWTR.visibility=1;
								
			     BON1=7;//planeUPER=1;  
				 groundMEGA.position.y = -2002;
			     groundMEGAROCK.position.y = -2014.5;
				 RAWSS1.position.y = -1992;
                 RAWSG.position.y = LOADENERG.position.y = -1988;
				 PORTKEY1.position.y=PORTKEY2.position.y=PORTKEY3.position.y=PORTKEY4.position.y=
                 PORTKEY5.position.y=PORTKEY6.position.y=PORTKEY7.position.y=-1988;		
		         KEY10.position.y=KEY11.position.y=KEY12.position.y=KEY13.position.y=
		         KEY14.position.y=KEY15.position.y=KEY16.position.y=-1978; 
			     scene.fogDensity =0.001;	 
				 
			    camera.position = new BABYLON.Vector3(23, -1992, -3);
		        PLANE.position = new BABYLON.Vector3(0, -1998.0, -1);
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3
//################## GASOIL BONUS ################################################3		

		 
var MONST = BABYLON.Mesh.CreateSphere("torus", 1,0.001, scene);
MONST.position = new BABYLON.Vector3(83, -1998, 535);MONST.rotation.y=1.14159;//(83, 0.5, 535)	


		 var MONSTER000 = BABYLON.SceneLoader.ImportMesh("","./", "BACHI.babylon", scene, function (newMeshes,partycleSystems) {
	MONSTER000=newMeshes[0];
	MONSTER000.position = new BABYLON.Vector3(0.0, 2.75, 0);
	MONSTER000.rotation.y=-1.58;
	MONSTER000.rotate(BABYLON.Axis.X, -0.151, BABYLON.Space.LOCAL);
	MONSTER000.rotate(BABYLON.Axis.Z, 0.051, BABYLON.Space.LOCAL);
	MONSTER000.checkCollisions = true;
	MONSTER000.visibility = 1;
	MONSTER000.parent = PLANE;});
	
	
	
		canvas.addEventListener("mousedown", function (e) {
	         if(SPEEDC>=19){planeUPER=1;}
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
		


		
		scene.registerBeforeRender(function () {
		//if (      ( (PLANE.intersectsMesh(TAL1, false))   ) &&  (planeDOWN<=0)   )  {planeUPER++;} 
		 if  ((PLANEBOX.intersectsMesh(RAWSG, false))&&(PLANE.position.x>400)) {BON++;}
     //K9=1; key map able to be visible    
if((PLANEBOX.intersectsMesh(PORTKEY1, false))&&(PLANE.position.x<0)&&(LEVELS1==0)&&(monsterKILLED==0)){BOUTTON1.play();LEVELS1++;K9=1;}else if(LEVELS1>=0){LEVELS1=0;}
if((PLANEBOX.intersectsMesh(PORTKEY2, false))&&(PLANE.position.x<0)&&(LEVELS2==0)&&(monsterKILLED==0)){BOUTTON1.play();LEVELS2++;K9=1;}else if(LEVELS2>=0){LEVELS2=0;}
if((PLANEBOX.intersectsMesh(PORTKEY3, false))&&(PLANE.position.x<0)&&(LEVELS3==0)&&(monsterKILLED==0)){BOUTTON1.play();LEVELS3++;K9=1;}else if(LEVELS3>=0){LEVELS3=0;}
if((PLANEBOX.intersectsMesh(PORTKEY4,false))&&(PLANE.position.x<0)&&(LEVELS4==0)&&(monsterKILLED==0)){BOUTTON1.play();LEVELS4++;K9=1;}else if(LEVELS4>=0){LEVELS4=0;}  
if((PLANEBOX.intersectsMesh(PORTKEY5, false))&&(PLANE.position.x<0)&&(LEVELS5==0)&&(monsterKILLED==0)){BOUTTON1.play();LEVELS5++;K9=1;}else if(LEVELS5>=0){LEVELS5=0;}
if((PLANEBOX.intersectsMesh(PORTKEY6,false))&&(PLANE.position.x<0)&&(LEVELS6==0)&&(monsterKILLED==0)){BOUTTON1.play();LEVELS6++;K9=1;}else if(LEVELS6>=0){LEVELS6=0;}  
if((PLANEBOX.intersectsMesh(PORTKEY7, false))&&(PLANE.position.x<0)&&(LEVELS7==0)&&(monsterKILLED==0)){BOUTTON1.play();LEVELS7++;K9=1;}else if(LEVELS7>=0){LEVELS7=0;}
		
       //if  ((PLANEBOX.intersectsMesh(RAWST, false))&&(PLANE.position.x<0)) {BONT++;} 
		 //if  ((PLANEBOX.intersectsMesh(RAWSW, false))&&(PLANE.position.x<0)) {BONW++;} 
		 if  ((PLANEBOX.intersectsMesh(BIGKEY, false))&&(STARTER>=1)  ){monsterKILLED++;} 
		 
		 //if (   (PLANEBOX.intersectsMesh(PLANEMBOX, false))  &&  (CAMX.innerHTML!=104)  ) {monsterKILLED++;} 
		 
		 //if  (PLANEBOX.intersectsMesh(BUILDBOMB, false)) {boombTOUCH++;} 
		 
		 
		 
		
		if (ROT3D==1){WALK++;	
	if ((ROT3D==1)&&(WALK>=31)){MONST.rotation.y=WALK*Math.PI/100;PLANE.rotation.y=(-Math.PI/2)+(WALK*Math.PI/100);}
   		     if(WALK % 11 <= 4){DAILDORSN.visibility=DAILDORS.visibility=DAILDOR2S.visibility=DAWL1N.visibility = DAWR1N.visibility =1;}//DAILDORSF.visibility=DAILDORSF2.visibility=
		     if(WALK % 25 <= 10){DAILDORSN.visibility=DAILDORS.visibility=DAILDOR2S.visibility=DAWL1N.visibility = DAWR1N.visibility =0;}  }
      
	var size = scene.meshes.length;  
	var i=0;
	
	while (i < size ) {  
		if (  (scene.meshes[i].TREE && PLANEBOX.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=23)   )  {
				treesTOUCH++;}
				
				
		if (  (scene.meshes[i].BARELBOMBS && PLANEBOX.intersectsMesh(scene.meshes[i], false))&&(CAMX.innerHTML!=110)   )  {
				boombTOUCH++;}
				
		
		
		
		
		
		
		
		
		
		
		
		
		
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
		
		
		
		

		 
		 STOPicon.style.width = STOPicon.style.height = 0 + 'px';ENERGIE=600;SPEEDC=1;
		 if(RESTART==1){RESTARTicon.style.width = RESTARTicon.style.height = 0 + 'px';RESTART=2;FIRSTANM=0;}
		// ENERG.style.height = ENERGIE + 'px';
		 STARTicon.style.width = STARTicon.style.height = 60 + 'px';
		 ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
		 
		 document.getElementById("BOUSL").style.transform = document.getElementById("RAKAS").style.transform = "rotate(0deg)";
		 document.getElementById("RAKAS2").style.transform = "rotate(-122deg)";
         document.getElementById("RAKASGAS").style.transform = "rotate(102deg)";		 
		 
		 //ENERGicon.style.left = 170 + 'px';ENERGicon.style.top = 385 + 'px';
		 	BIGKEYRANDPOS=parseInt(random(0, 5));
	                        if(BIGKEYRANDPOS<=1){XXm= random(-13700, -10700);YYm=random(-13700, 13700);}
							if(BIGKEYRANDPOS==2){XXm= random(10700, 13700);YYm=random(-13700, 13700);}
	                        if(BIGKEYRANDPOS==3){XXm= random(-13700, 13700);YYm=random(-13700, -10700);}
                        	if(BIGKEYRANDPOS>=4){XXm= random(-13700, 13700);YYm=random(10700, 13700);}
	BIGKEY.position = KEY1.position = new BABYLON.Vector3(XXm, 95, YYm);
		 RADAR.pause();KEYMOVING=0;K9=0;
		 monsterPOS.style.opacity=monsterPOS2.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=
		 monsterPOS5.style.opacity=monsterPOS6.style.opacity=monsterPOS7.style.opacity=0;

		 
		/*DELTAY0=DELTAY12=-24;LEVELS=2;
		 groundMEGA.material = groundMaterialGRASS;groundMEGAROCK.material = groundMaterialROCKG1; 	
				 groundMEGA.position.y = -2;
			     groundMEGAROCK.position.y = -14.5;
				 RAWSS1.position.y =  8;
                 RAWSG.position.y = LOADENERG.position.y = 12;	 
			      BON1=7;KEY1.size = 120;KEY2.size = KEY3.size = KEY4.size = KEY5.size = KEY6.size = KEY7.size =  0;       
				  KEY=1;//scene.fogDensity = 0.0;
				  KEYicon1.style.opacity=KEYicon2.style.opacity=KEYicon3.style.opacity=KEYicon4.style.opacity=
				  KEYicon5.style.opacity=KEYicon6.style.opacity=KEYicon7.style.opacity=0.3;	 	 
			   groundMEGAWTR.position = new BABYLON.Vector3(0,0.5,0);groundMEGAWTR.visibility=1;scene.fogDensity =0;
			   
			   				 PORTKEY1.position.y=PORTKEY2.position.y=PORTKEY3.position.y=PORTKEY4.position.y=
                 PORTKEY5.position.y=PORTKEY6.position.y=PORTKEY7.position.y=10;		
		         KEY10.position.y=KEY11.position.y=KEY12.position.y=KEY13.position.y=
		         KEY14.position.y=KEY15.position.y=KEY16.position.y=20;	*/			   
				 
				 
				 
				 
                DELTAY0=DELTAY12=-2300;LEVELS=3;
				groundMEGA.material = groundMaterialSAHARA ;groundMEGAROCK.material=groundMaterialROCKSH2;
				groundMEGAWTR.position = new BABYLON.Vector3(0,-2000.2,0);groundMEGAWTR.visibility=1;
								
			     BON1=7;//planeUPER=1;  
				 groundMEGA.position.y = -2002;
			     groundMEGAROCK.position.y = -2014.5;
				 RAWSS1.position.y = -1992;
                 RAWSG.position.y = LOADENERG.position.y = -1988;
				 PORTKEY1.position.y=PORTKEY2.position.y=PORTKEY3.position.y=PORTKEY4.position.y=
                 PORTKEY5.position.y=PORTKEY6.position.y=PORTKEY7.position.y=-1988;		
		         KEY10.position.y=KEY11.position.y=KEY12.position.y=KEY13.position.y=
		         KEY14.position.y=KEY15.position.y=KEY16.position.y=-1978; 
			     scene.fogDensity =0.001;	 
				 
				
				 


                PORTKEY1.visibility=PORTKEY2.visibility=PORTKEY3.visibility=PORTKEY4.visibility=
				PORTKEY5.visibility=PORTKEY6.visibility=PORTKEY7.visibility=1;	

                LEVELS1=LEVELS2=LEVELS3=LEVELS4=LEVELS5=LEVELS6=LEVELS7=0;				
				 
			KEYNUMBER.innerHTML=0;	 
			TOPmenu2.style.height = TOPmenu2.style.width = 0 + 'px';
            TOPmenu2.style.opacity = 0;
            TIMEKEYVIS=100;				
				 
				 
				 
		if(LEVELS==1){
		     camera.position = new BABYLON.Vector3(-29, 2008, 16);
		     PLANE.position = new BABYLON.Vector3(0, 2002.0, -1);}
		if(LEVELS==2){
		     camera.position = new BABYLON.Vector3(-29, 8, 16);
		     PLANE.position = new BABYLON.Vector3(0, 2.0, -1);}
		if(LEVELS==3){
		     camera.position = new BABYLON.Vector3(-29, -1992, 16);
		     PLANE.position = new BABYLON.Vector3(0, -1998.0, -1);}
		 
		 
		 MONST.position  = new BABYLON.Vector3(-83, 1.5, -608); //MONSTER0.position  = 
		
		// MAN1.position = new BABYLON.Vector3(50, 1.5, 520);MAN1.rotation.y=3.9;
		 //PLANEM.position = new BABYLON.Vector3(50, 1.5, 520);PLANEM.rotation.y=1.9;
		
		
		 DXXm=DYYm=0;
		 
		 //XXm=50;YYm=520;ZZm=-3; 
		 
		 monsterKILLED=mT1=0;
         
		 
		 //DELTAXm = -11;DELTAYm =-13;		
         DELTAXm = -0.3;DELTAYm =-0.3;				 
	     treesTOUCH=TT=TT1=0;//scene.fogDensity = 0;
		 ALERT.pause();//KEYF.size=0;
		 
		 UPRR3=0;
		 BOMB.stopAnimation();BOMB.size=0;bb=boombTOUCH=0;
		
		 }	


	if (ANIMR==1)
	    {anim ++; //0.0805
	    if(anim<40){camera.rotation.y+=0.0701;camera.position.x+=1.35;camera.position.y+=-0.0;camera.position.z+=-0.5;} 
		if(anim==40) {//camera.position = new BABYLON.Vector3(106, 7.5, 544);
		ANIMR=anim=0;STARTER=0;
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
    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW3.png", scene);//RAW0
    materialRAW.diffuseTexture.hasAlpha = true;
    materialRAW.backFaceCulling = false; 		 		  
	RAWD1.material = materialRAW;MOTTO=0;}
	
 if(MOTTO==3){
    materialRAW.diffuseTexture = new BABYLON.Texture("img_game/RAW0.png", scene);//RAW0
    materialRAW.diffuseTexture.hasAlpha = true;
    materialRAW.backFaceCulling = false; 		 		  
	RAWD1.material = materialRAW;MOTTO=0;}


 
	
	
  
     if ((START==1)&&(anim==0)){
	 
	 if(STARTER<=3){STARTER++};
	 

	 if(HANDCONTROL==0){
		 //WALK++;
		 if  (keys.back==0){
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
		 RAWD4.rotate(BABYLON.Axis.Z, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL); } }			 
		 
		 
		 
	
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
		 RAWD4.rotate(BABYLON.Axis.Z, 0.1*((SPEEDC/15)+1), BABYLON.Space.LOCAL);}	}	

           catch(e){}
		    

             }











		 
		 
		 
		 

		
       // if(ENERGIE>=0){ENERGIE-=0.001*SPEEDC;}
		if(ENERGIE>0){ENERGIE-=0.005*SPEEDC;score1=((ENERGIE/2)-80)/2.2;}//0.0075     0.01
		if(score1<=2){score1=2;}
		//ENERG.style.height = ENERGIE + 'px';score1+=SPEEDC;
		
		score.innerHTML = parseInt(score1);
		speed.innerHTML = parseInt(SPEEDC*8);//12

		if  (treesTOUCH>=2){TT1=1;}
		 if(TT1>=1){TT++;}
	     if(TT==1){CARCRASH.play();ENERGIE-=10;if(SPEEDC>=5){SPEEDC+=-5;}}//scene.fogDensity = 0.007;CHANGE.play();
	     if(TT==2){HAHA.play();}
		 if((TT>=1)&&(TT<=11)&&(DROT<=2)){PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;}
		 if((TT>=1)&&(TT<=11)&&(DROT>2)){PLANE.rotation.y+=-0.15;MONST.rotation.y+=-0.15;}
		 
		if((TT>=1)&&(TT<=11)){if(PLANE.rotation.z<0.3){PLANE.rotation.z+=0.05;MONST.rotation.z+=0.05;}} 
		 
		 if(TT>=12){treesTOUCH=TT=0;TT1=0;DROT++;
		           if(DROT>=5){DROT=0;}}
        if((TT==0)&&(PLANE.rotation.z>0.1)&&(planeUPER==0)&&(INCLINUP==0)&&(INCLINDN==0)){PLANE.rotation.z+=-0.05;MONST.rotation.z+=-0.05;}
			   
		 
		 
		 
		 
		 

	if(boombTOUCH>=1){bb++;//&&(ENERGIE<=295))
	     if(bb==1){//LIGHTmov.diffuse = new BABYLON.Color3(0.1, 0, 0);	
			 EXPLOS1.play();BOMB.position = new BABYLON.Vector3(PLANE.position.x,11,PLANE.position.z);BOMB.playAnimation(0, 15, true, 80);BOMB.size=15;}
		 
		 if(bb<25) {UPRR3+=0.5;}
		 if(bb>=25){UPRR3+=-0.5;}
		 if(bb<50){PLANE.rotation.x+=0.1;
		            PLANE.rotation.y+=0.15;MONST.rotation.y+=0.15;//camera.rotation.y+=0.0805;camera.rotation.x+=0.0805;
		            BOMB.position = new BABYLON.Vector3(PLANE.position.x,11,PLANE.position.z);}  }
		 if(bb>=50){PLANE.rotation.x=0;UPRR3=0;}
		 if(bb>=70){BOMB.stopAnimation();BOMB.size=0;bb=boombTOUCH=0;}
		 
		 
		 /*
		 			if  (monsterKILLED>=1) 
	        {mT1++;}  
	     if(mT1==1){CANON.play();BOMB.playAnimation(0, 15, true, 100);BOMB.size = 60;}
				   		   
	    if(mT1==5){EXPLOS1.play();//BONUS.play();
		  }
		 
		 if(mT1>0){
	            MAN2.rotation.x+=-0.2;
	            BOMB.position = new BABYLON.Vector3(MAN1.position.x, 21, MAN1.position.z);}

		 if(mT1>=210){monsterKILLED=mT1=0;particleSystem.stop();XXm= random(-1700, 1700);YYm=random(-1700, 1700);DXXm=DYYm=0;
		              BOMB.size = 0;BOMB.stopAnimation();MAN2.rotation.x=0;} */
		 

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
			
		    PLANE.position.x +=DIR1.x * (SPEEDC+DISTANCE+SPEEDCM);
	        PLANE.position.z +=DIR1.z * (SPEEDC+DISTANCE+SPEEDCM);			
			DELTAY0 = groundMEGA.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);
			PLANE.position.y = DELTAY0+UPRR-UPRR1;
			
	//if( (PLANE.position.x>0)&&(PLANE.position.z>0) ){DELTAY11 = groundMEGAF.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
	//if( (PLANE.position.x>0)&&(PLANE.position.z<=0) ){DELTAY12 = groundMEGAR.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
		
       //if( (PLANE.position.x>=-1000)&&(PLANE.position.x<=1000)&&(PLANE.position.z>=-1000)&&(PLANE.position.z<=1000) ){}		
	            DELTAY12 = groundMEGAROCK.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);
	if((DELTAY12>DELTAY0)&&(DELTAY12!=0))//&&(mT1==0) 
	           {buildingsTOUCH++;STOPbuilding++;SS2=0;SPEEDC=0;if(buildingsTOUCH==1){CARACCE.volume=0.0;CARCRASH.play();}}
	if(DELTAY0>=DELTAY12){STOPbuilding=0;STOPbuilding2=0;buildingsTOUCH=0;}
	
//TEST1.innerHTML=parseInt(DELTAY0);
//TEST2.innerHTML=parseInt(DELTAY12);
//TEST3.innerHTML=mT1;
			 /*if( (DELTAY11>DELTAY0) || (DELTAY12>DELTAY0) ){buildingsTOUCH++;STOPbuilding++;SS2=0;SPEEDC=0;if(buildingsTOUCH==1){CARACCE.volume=0.0;CARCRASH.play();}}
			 if ( (DELTAY0>=DELTAY11)&&(DELTAY0>=DELTAY12) ){STOPbuilding=0;STOPbuilding2=0;buildingsTOUCH=0;}*/
			 
			 
			//DELTAY11 = groundMEGAS2.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);
			//DELTAY1 = groundMEGAS.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);
			
			
			/*if(GRASSE==0){PLANE.position.x +=DIR1.x * (SPEEDC+DISTANCE+CAMDELTAY+CAMDELTAY1);
	                      PLANE.position.z +=DIR1.z * (SPEEDC+DISTANCE+CAMDELTAY+CAMDELTAY1);
			              DELTAY1 = groundMEGA.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
						  
			if(GRASSE==1){DELTAY0 = groundMEGAT.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);
			              PLANE.position.x +=DIR1.x * (SPEEDC+DISTANCE+CAMDELTAY+CAMDELTAY1);
	                      PLANE.position.z +=DIR1.z * (SPEEDC+DISTANCE+CAMDELTAY+CAMDELTAY1);
			              DELTAY1 = groundMEGAT.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}
						  
			if(GRASSE==2){DELTAY0 = groundMEGAW.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);
			              PLANE.position.x +=DIR1.x * (SPEEDC+DISTANCE+CAMDELTAY+CAMDELTAY1);
	                      PLANE.position.z +=DIR1.z * (SPEEDC+DISTANCE+CAMDELTAY+CAMDELTAY1);
			              DELTAY1 = groundMEGAW.getHeightAtCoordinates(PLANE.position.x, PLANE.position.z);}*/
			
	
             //PLANE.position.y = DELTAY1;
			
			
			/*if(GRASSE>=1){
			if(    ( (DELTAY1-DELTAY0)>=1 )&&(PLANE.position.y>=16)&&(PLANE.position.y<=420)  )    {INCLINUP++;INCLINDN=INCLIN=0;if(SPEEDC>=5){SPEEDC+=-0.3;}}//SPEEDC=3.1;
			if(    ( (DELTAY1-DELTAY0)<=-1 )&&(PLANE.position.y>=16)&&(PLANE.position.y<=420)  )    {INCLINDN++;INCLINUP=INCLIN=0;if(SPEEDC>=5){SPEEDC+=-0.3;}}//SPEEDC=3.1;
			if (   (PLANE.position.y<16)||(PLANE.position.y>440)||  ( ((DELTAY1-DELTAY0)<2)  && ((DELTAY1-DELTAY0)>-2)  )  )  {INCLIN++;INCLINUP=INCLINDN=0;}
			
			
			if((INCLINUP>=1)&&(camera.rotation.x>=-0.95)){PLANE.rotation.z +=0.1;CAMDELTAY1 +=0.78;camera.rotation.x +=-0.1;INCLINDN=INCLIN=0;}
			if((INCLINDN>=1)&&(camera.rotation.x<=0.8)){PLANE.rotation.z +=-0.1;CAMDELTAY +=-1.1;camera.rotation.x +=0.08;}
			if(INCLINUP==10){PLANE.rotation.z=0.9;}
			if(INCLINDN==10){PLANE.rotation.z=-0.9;   CAMDELTAY=-11;camera.rotation.x =0.8;}
	
		
			if((INCLIN>=1)&&(camera.rotation.x<0)){PLANE.rotation.z +=-0.1;CAMDELTAY1 +=-0.78;camera.rotation.x +=0.1;}
			if((INCLIN>=1)&&(camera.rotation.x>0)){PLANE.rotation.z +=0.1;CAMDELTAY +=1.1;camera.rotation.x +=-0.08;}
			if(INCLIN==10){PLANE.rotation.z = Math.PI/30;CAMDELTAY = CAMDELTAY1 = 0;camera.rotation.x =0;} 
			}*/
			
			
			
			//camera.position.y =PLANE.position.y+6-(1.3*CAMDELTAY)-(2.47*CAMDELTAY1);
			camera.position.y = PLANE.position.y+6-UPRR+UPRR1;
			
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

 

	 if ((keys.forward==1)&&(SPEEDC<20)&&(ENERGIE>80)&&(INCLINUP==0)&&(INCLINDN==0)){SPEEDC+=0.3;}
	 if ((keys.forward==0)&&(SPEEDC>1)){SPEEDC+=-0.5;
	                                   if(SS1<2){SS1++;SS2=0;
	                                         if(SS1==1){CARSTOP.play();CARACCE.volume=0.0;}}}
	 if ((keys.forward==1)&&(ENERGIE>80)&&(SS2<2)){SS2++;
	                                   if(SS2==1){CARACCE.currentTime = 0;CARACCE.volume=1;CARACCE.play();CARACCE.loop= true;SS1=0;}}
	
	if ((keys.forward==1)&&(SPEEDC>1)&&(ALRTf<2)){DAILDORSN.visibility=1;}//DAILDORSF.visibility=DAILDORSF2.visibility=0;}//&&(ALRTf<2)
	if ((keys.forward==0)&&(ALRTf<2))               {DAILDORSN.visibility=0;}//DAILDORSF.visibility=DAILDORSF2.visibility=0;
	                                   
     
 
 
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
			
	  
	   if ((PLANE.position.x>=14500) ||(PLANE.position.x<=-14500) )
	       {camera.position.x=-camera.position.x;BOUTTON1.play();}
	   if ((PLANE.position.z>=14500) || (PLANE.position.z<=-14500)  )
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
		  
	if (ENERGIE<=80) {//SPEEDC+=-0.1;  &&(SPEEDC>=3)
	                          SPEEDC=1;ENERGicon.style.width = ENERGicon.style.height = 80 + 'px';
                                        //ENERGicon.style.left = 153 + 'px';ENERGicon.style.top = 369 + 'px';
										CARACCE.volume=0.0;} 	
		

		
/*	if(LOADENERGS>=1){LOADENERGS++;}
	if(LOADENERGS==2){ENERGIE=300;//SPEEDC=10;
	BOUTTON.play();
	LOADENERGS=0;} */
	
	
	if(ALRTf>=2){ALRTf++;
		 if(ALRTf % 11 <= 4){DAILDORSN.visibility=0;DAILDORS.visibility=DAILDOR2S.visibility=DAWL1N.visibility = DAWR1N.visibility = 1;}
		 if(ALRTf % 25 <= 10){DAILDORSN.visibility=1;DAILDORS.visibility=DAILDOR2S.visibility=DAWL1N.visibility = DAWR1N.visibility = 0;}    }
		
//################################# NEW LEVEL  ###########################
//################################# NEW LEVEL  ###########################
//################################# NEW LEVEL  ###########################
//################################# NEW LEVEL  ###########################

/*
		if  (monsterKILLED>=1){mT1++;}  
	         if(mT1==1){YEHAW.play();} //BOMB.playAnimation(0, 15, true, 100);BOMB.size = 60; 		   
	         if(mT1==5){KEY++;
			 	     BIGKEYRANDPOS=parseInt(random(0, 5));DXXm=0;DYYm=0;camera.position.x=23;camera.position.z=-3;
	                        if(BIGKEYRANDPOS<=1){XXm= random(-13700, -10700);YYm=random(-13700, 13700);}
							if(BIGKEYRANDPOS==2){XXm= random(10700, 13700);YYm=random(-13700, 13700);}
	                        if(BIGKEYRANDPOS==3){XXm= random(-13700, 13700);YYm=random(-13700, -10700);}
                        	if(BIGKEYRANDPOS>=4){XXm= random(-13700, 13700);YYm=random(10700, 13700);}
                            KEYMOVING=0;BOUTTON1.play();ENERGIE=600;ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
			            
			                    
	             if(KEY==2){BON1=1;KEY2.size = 120;KEY1.size=KEY3.size=KEY4.size=KEY5.size=KEY6.size=KEY7.size=0;
				                   KEYicon1.style.opacity=1;groundMEGAROCK.material=groundMaterialROCKS1;}
	             if(KEY==3){BON1=2;KEY3.size = 120;KEY1.size=KEY2.size=KEY4.size=KEY5.size=KEY6.size=KEY7.size=0;
				                    KEYicon2.style.opacity=1;groundMEGAROCK.material=groundMaterialROCKSH1;}						
	             if(KEY==4){BON1=0;KEY4.size = 120;KEY1.size=KEY2.size=KEY3.size=KEY5.size=KEY6.size=KEY7.size=0;
				                    KEYicon3.style.opacity=1;groundMEGAROCK.material=groundMaterialROCKG2;}
	             if(KEY==5){BON1=1;KEY5.size = 120;KEY1.size=KEY2.size=KEY3.size=KEY4.size=KEY6.size=KEY7.size=0;
				                    KEYicon4.style.opacity=1;groundMEGAROCK.material=groundMaterialROCKS2;}
	             if(KEY==6){BON1=2;KEY6.size = 120;KEY1.size=KEY2.size=KEY3.size=KEY4.size=KEY5.size=KEY7.size=0;
				                    KEYicon5.style.opacity=1;groundMEGAROCK.material=groundMaterialROCKSH2;}
	             if(KEY==7){BON1=0;KEY7.size = 120;KEY1.size=KEY2.size=KEY3.size=KEY4.size=KEY5.size=KEY6.size=0;
				                    KEYicon6.style.opacity=1;groundMEGAROCK.material=groundMaterialROCKG3;}
				 if(KEY>7){BON1=0;KEY1.size = 120;KEY2.size=KEY3.size=KEY4.size=KEY5.size=KEY6.size=KEY7.size=0;
				             KEY=1;
				             KEYicon1.style.opacity=KEYicon2.style.opacity=KEYicon3.style.opacity=KEYicon4.style.opacity=
				             KEYicon5.style.opacity=KEYicon6.style.opacity=KEYicon7.style.opacity=0.3;}
							 
							 
							 
		    if(BON1==1){DELTAY0=DELTAY12=0;LEVELS=1;groundMEGA.material = groundMaterialSNOW;  
			     groundMEGA.position.y = 1998;
			     groundMEGAROCK.position.y = 1985.5;
				 RAWSS1.position.y = 2008;
                 RAWSG.position.y = LOADENERG.position.y = 2012;} 							 
							 
		    if(BON1==0){DELTAY0=DELTAY12=-24;LEVELS=2;groundMEGA.material = groundMaterialGRASS; 
				 groundMEGA.position.y = -2;
			     groundMEGAROCK.position.y = -14.5;
				 RAWSS1.position.y =  8;
                 RAWSG.position.y = LOADENERG.position.y = 12;} 
		
		    if(BON1==2){DELTAY0=DELTAY12=-2300;LEVELS=3;groundMEGA.material = groundMaterialSAHARA; 
				 groundMEGA.position.y = -2002;
			     groundMEGAROCK.position.y = -2014.5;
				 RAWSS1.position.y = -1992;
                 RAWSG.position.y = LOADENERG.position.y = -1988;} 
							 
			 
			 }
		 
		     //if(mT1>0){BOMB.position = new BABYLON.Vector3(PLANE.position.x, PLANE.position.y+10, PLANE.position.z);}
             if(mT1>=100){monsterKILLED=mT1=0;//BOMB.size = 0;BOMB.stopAnimation();
			   BIGKEY.position=KEY1.position=KEY2.position=KEY3.position=KEY4.position=
			   KEY5.position=KEY6.position=KEY7.position=new BABYLON.Vector3(XXm, 85, YYm);			   }
	
	
	*/
	  
	
        if(LEVELS1==1){BON1=0;KEY1.size = 120;KEY2.size=KEY3.size=KEY4.size=KEY5.size=KEY6.size=KEY7.size=0;LEVELS1=2;KEY=1;
				              groundMEGAROCK.material=groundMaterialROCKG1;groundMEGA.material = groundMaterialGRASS;
                              groundMEGAWTR.position = new BABYLON.Vector3(0,0.5,0);groundMEGAWTR.visibility=1;scene.fogDensity =0;}
        if(LEVELS2==1){BON1=1;KEY2.size = 120;KEY1.size=KEY3.size=KEY4.size=KEY5.size=KEY6.size=KEY7.size=0;LEVELS2=2;KEY=2;
				                groundMEGAROCK.material=groundMaterialROCKS1;groundMEGA.material = groundMaterialSNOW;
								groundMEGAWTR.visibility=0;scene.fogDensity = 0;}
        if(LEVELS3==1){BON1=2;KEY3.size=120;KEY1.size=KEY2.size=KEY4.size=KEY5.size=KEY6.size=KEY7.size=0;LEVELS3=2;KEY=3;
				               groundMEGAROCK.material=groundMaterialROCKSH1;groundMEGA.material=groundMaterialSAHARA;
							   groundMEGAWTR.visibility=0;scene.fogDensity = 0.001;}						
        if(LEVELS4==1){BON1=0;KEY4.size = 120;KEY1.size=KEY2.size=KEY3.size=KEY5.size=KEY6.size=KEY7.size=0;LEVELS4=2;KEY=4;
				                groundMEGAROCK.material=groundMaterialROCKG2;groundMEGA.material=groundMaterialGRASS;
								groundMEGAWTR.visibility=1;scene.fogDensity = 0.001;}
        if(LEVELS5==1){BON1=1;KEY5.size = 120;KEY1.size=KEY2.size=KEY3.size=KEY4.size=KEY6.size=KEY7.size=0;LEVELS5=2;KEY=5;
				                groundMEGAROCK.material=groundMaterialROCKS2;groundMEGA.material = groundMaterialSNOW;
								groundMEGAWTR.position = new BABYLON.Vector3(0,2000.8,0);groundMEGAWTR.visibility=1;scene.fogDensity = 0;}
        if(LEVELS6==1){BON1=2;KEY6.size = 120;KEY1.size=KEY2.size=KEY3.size=KEY4.size=KEY5.size=KEY7.size=0;LEVELS6=2;KEY=6;
				                groundMEGAROCK.material=groundMaterialROCKSH2;groundMEGA.material = groundMaterialSAHARA ;
								groundMEGAWTR.position = new BABYLON.Vector3(0,-2000.2,0);groundMEGAWTR.visibility=1;scene.fogDensity=0;}
        if(LEVELS7==1){BON1=0;KEY7.size = 120;KEY1.size=KEY2.size=KEY3.size=KEY4.size=KEY5.size=KEY6.size=0;LEVELS7=2;KEY=7;
				                groundMEGAROCK.material=groundMaterialROCKG3;groundMEGA.material = groundMaterialGRASS2; 
								groundMEGAWTR.visibility=0;scene.fogDensity = 0.001;}
	
		if( K9==1 )
  		      {monsterPOS.style.opacity=monsterPOS2.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=
		       monsterPOS5.style.opacity=monsterPOS6.style.opacity=monsterPOS7.style.opacity=0;K9=2;RADAR.pause();KEYMOVING=0;}
		 
							 
		    if(BON1==1){DELTAY0=DELTAY12=0;LEVELS=1;//groundMEGA.material = groundMaterialSNOW; 
			    BON1=7;planeUPER=1; 
			     groundMEGA.position.y = 1998;
			     groundMEGAROCK.position.y = 1985.5;
				 RAWSS1.position.y = 2008;
                 RAWSG.position.y = LOADENERG.position.y = 2012;
				 PORTKEY1.position.y=PORTKEY2.position.y=PORTKEY3.position.y=PORTKEY4.position.y=
                 PORTKEY5.position.y=PORTKEY6.position.y=PORTKEY7.position.y=2012;		
		         KEY10.position.y=KEY11.position.y=KEY12.position.y=KEY13.position.y=
		         KEY14.position.y=KEY15.position.y=KEY16.position.y=2022;} 					 
							 
		    if(BON1==0){DELTAY0=DELTAY12=-24;LEVELS=2;//groundMEGA.material = groundMaterialGRASS; 
			     BON1=7; planeUPER=1; 
				 groundMEGA.position.y = -2;
			     groundMEGAROCK.position.y = -14.5;
				 RAWSS1.position.y =  8;
                 RAWSG.position.y = LOADENERG.position.y = 12;
				 PORTKEY1.position.y=PORTKEY2.position.y=PORTKEY3.position.y=PORTKEY4.position.y=
                 PORTKEY5.position.y=PORTKEY6.position.y=PORTKEY7.position.y=10;		
		         KEY10.position.y=KEY11.position.y=KEY12.position.y=KEY13.position.y=
		         KEY14.position.y=KEY15.position.y=KEY16.position.y=20;} 
		
		    if(BON1==2){DELTAY0=DELTAY12=-2300;LEVELS=3;//groundMEGA.material = groundMaterialSAHARA ;
			     BON1=7;planeUPER=1;  
				 groundMEGA.position.y = -2002;
			     groundMEGAROCK.position.y = -2014.5;
				 RAWSS1.position.y = -1992;
                 RAWSG.position.y = LOADENERG.position.y = -1988;
				 PORTKEY1.position.y=PORTKEY2.position.y=PORTKEY3.position.y=PORTKEY4.position.y=
                 PORTKEY5.position.y=PORTKEY6.position.y=PORTKEY7.position.y=-1988;		
		         KEY10.position.y=KEY11.position.y=KEY12.position.y=KEY13.position.y=
		         KEY14.position.y=KEY15.position.y=KEY16.position.y=-1978;} 				 
							 
			 
			 
	
	
			 if  (monsterKILLED>=1){mT1++;SPEEDC=2;}  
			 if  (mT1<=100){TOPmenu2.style.height = (3*mT1) + 'px';}  
	         if(mT1==1){YEHAW.play(); KEYNUMBER.innerHTML ++;TIMEKEYVIS-=10;DELTAXm = Math.abs(DELTAXm)+3;DELTAYm = Math.abs(DELTAYm)+3;
                     TOPmenu2.style.width = 500 + 'px';TOPmenu2.style.opacity = 0.7;
			         BIGKEYRANDPOS=parseInt(random(0, 5));DXXm=0;DYYm=0;camera.position.x=320;camera.position.z=-110;
					 //XXm= random(-700, 700);YYm=random(-700, 700);
	                        if(BIGKEYRANDPOS<=1){XXm= random(-13700, -10700);YYm=random(-13700, 13700);}
							if(BIGKEYRANDPOS==2){XXm= random(10700, 13700);YYm=random(-13700, 13700);}
	                        if(BIGKEYRANDPOS==3){XXm= random(-13700, 13700);YYm=random(-13700, -10700);}
                        	if(BIGKEYRANDPOS>=4){XXm= random(-13700, 13700);YYm=random(10700, 13700);}
                            KEYMOVING=0;BOUTTON1.play();ENERGIE=600;ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';
			                KEY1.size=KEY2.size=KEY3.size=KEY4.size=KEY5.size=KEY6.size=KEY7.size=0;
							RADAR.pause();KEYMOVING=0;K9=0;
							monsterPOS.style.opacity=monsterPOS2.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=
		                    monsterPOS5.style.opacity=monsterPOS6.style.opacity=monsterPOS7.style.opacity=0;
			       
				 if(KEY==1){LEVELS1=-1;KEYicon1.style.opacity=1;PORTKEY1.visibility=0.3;}				 
	             if(KEY==2){LEVELS2=-1;KEYicon2.style.opacity=1;PORTKEY2.visibility=0.3;}	
	             if(KEY==3){LEVELS3=-1;KEYicon3.style.opacity=1;PORTKEY3.visibility=0.3;}	
				 if(KEY==4){LEVELS4=-1;KEYicon4.style.opacity=1;PORTKEY4.visibility=0.3;}	
	             if(KEY==5){LEVELS5=-1;KEYicon5.style.opacity=1;PORTKEY5.visibility=0.3;}	
	             if(KEY==6){LEVELS6=-1;KEYicon6.style.opacity=1;PORTKEY6.visibility=0.3;}	
	             if(KEY==7){LEVELS7=-1;KEYicon7.style.opacity=1;PORTKEY7.visibility=0.3;}
                             //particleSystem.start();
					//MONST.rotation.y=1.14159;
		           //PLANE.rotation.z = Math.PI/30;camera.rotation.x =0;
		           //camera.rotation.y=2.090796;//
				   //PLANE.rotation.y=3.24159;
			
							 
				
							 }
		 
		     if( (mT1>=250)&&(KEYNUMBER.innerHTML<7) ){monsterKILLED=mT1=0;//particleSystem.stop();
			   BIGKEY.position=KEY1.position=KEY2.position=KEY3.position=KEY4.position=
			   KEY5.position=KEY6.position=KEY7.position=new BABYLON.Vector3(XXm, 85, YYm);	
               TOPmenu2.style.height = TOPmenu2.style.width = 0 + 'px';
                TOPmenu2.style.opacity = 0;			   }
			   
	
	//TEST3.innerHTML=BIGKEYRANDPOS;		
			
   
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################
//################################# MONSTER MOVE ###########################

	
if ( (KEYMOVING<=900)&&(K9==2) ){KEYMOVING++;}
if(KEYMOVING==1){KEYMOVING=2;RADAR.play();RADAR.loop= true;
                 if(KEY==1){monsterPOS.style.opacity=1;}
				 if(KEY==2){monsterPOS2.style.opacity=1;}
                 if(KEY==3){monsterPOS3.style.opacity=1;}
				 if(KEY==4){monsterPOS4.style.opacity=1;}
                 if(KEY==5){monsterPOS5.style.opacity=1;}
				 if(KEY==6){monsterPOS6.style.opacity=1;}
                 if(KEY==7){monsterPOS7.style.opacity=1;}
				 }
				 
if(KEYMOVING==TIMEKEYVIS){monsterPOS.style.opacity=monsterPOS2.style.opacity=monsterPOS3.style.opacity=monsterPOS4.style.opacity=
		           monsterPOS5.style.opacity=monsterPOS6.style.opacity=monsterPOS7.style.opacity=0;RADAR.pause();}
if(KEYMOVING>=900){KEYMOVING=0;}

	DXXm+=DELTAXm;
	DYYm+=DELTAYm;
	ZZm1 = groundMEGA.getHeightAtCoordinates(XXm+DXXm, YYm+DYYm);
	ZZm2 = groundMEGAROCK.getHeightAtCoordinates(XXm+DXXm, YYm+DYYm);
	
	BIGKEY.position=KEY1.position=KEY2.position=KEY3.position=KEY4.position=
	KEY5.position=KEY6.position=KEY7.position = new BABYLON.Vector3(XXm+DXXm,ZZm1+70,YYm+DYYm);

	   if ((ZZm2>ZZm1)&&(ZZm2!=0)){DELTAXm=-DELTAXm;DELTAYm=-DELTAYm;}	
	   if ((BIGKEY.position.x>=14000)  || (BIGKEY.position.x<=-14000)){DELTAXm=-DELTAXm;}
       if ((BIGKEY.position.z>=14000)  || (BIGKEY.position.z<=-14000)){DELTAYm=-DELTAYm;}
	   
	  
	   
	   /*	   if ((MAN1.position.x>=14000)  || (MAN1.position.x<=-14000)){DELTAXm=-DELTAXm;}
       if ((MAN1.position.z>=14000)  || (MAN1.position.z<=-14000)){DELTAYm=-DELTAYm;} */

	   
   
   
     

		
	
	
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
	if(UPER==9){YEHAW.play();}
	if(UPER>=80){UPRR=UPRR1=0;}
	if(UPER>=90){planeUPER=UPER=UPRR=UPRR1=0;PLANE.rotation.z=0.0;camera.rotation.x =0;SPEEDC=10;
	            PLANE.rotation.z = Math.PI/30;camera.position.y = PLANE.position.y+6;}
	
	
	if((UPER>=1)&&(UPER<40)){UPRR+=1.3;camera.rotation.x +=-0.03;PLANE.rotation.z+=0.08;PLANE.rotation.y+=0.1;MONST.rotation.y+=0.1;}           
	if((UPER>=40)&&(UPER<80)){UPRR1+=1.3;camera.rotation.x +=0.03;PLANE.rotation.z+=0.08;PLANE.rotation.y+=0.1;MONST.rotation.y+=0.1;}  
	

	
	if((UPER>=80)&&(UPER<85)){camera.rotation.x +=-0.075;}
	if((UPER>=85)&&(UPER<=90)){camera.rotation.x +=0.075;}	

		 
		if(planeDOWN>0){DOWN++;} //can't up
		if(DOWN>=70){planeDOWN=DOWN=0;} 

//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################
//####################################### EAT FRUIT && BOMB ####################################################################	
	if(BON>0){BON11++;} 
		if(BON11==1){BOUTTON1.play();ENERGIE=600;ENERGicon.style.width = ENERGicon.style.height = 0 + 'px';} 
		  if(BON11==3){BON=BON11=0;} 

	   
	   
	   
    }//end START

  
	CAMX.innerHTML=parseInt(camera.position.x);CAMY.innerHTML=parseInt(camera.position.z); 
	MX=parseInt(BIGKEY.position.x);MY=parseInt(BIGKEY.position.z);
	//TEST1.innerHTML=MX;TEST2.innerHTML=MY;

		if(START>=1){	
	document.getElementById("BOUSL").style.transform = document.getElementById("RAKAS").style.transform = "rotate(" + (-DIRXZ) + "deg)";
	document.getElementById("RAKAS2").style.transform = "rotate(" + (12*SPEEDC-120) + "deg)";//12*SPEEDC-140
	document.getElementById("RAKASGAS").style.transform = "rotate(" + (0.6*(ENERGIE/2)+290) + "deg)";}
	
	if(SMALLSCREEN==1){
	BOUSL.style.top = playerPOS.style.top= ((0.0044*CAMX.innerHTML)+170)-90+ 'px';//(0.0132*CAMX.innerHTML)
	BOUSL.style.left = playerPOS.style.left= ((0.0044*CAMY.innerHTML)+156)+ 'px';//160 
	     monsterPOS.style.top = monsterPOS2.style.top = monsterPOS3.style.top = monsterPOS4.style.top =
	     monsterPOS5.style.top = monsterPOS6.style.top = monsterPOS7.style.top = ((0.0044*MX)+170)-90+ 'px';
	     monsterPOS.style.left = monsterPOS2.style.left = monsterPOS3.style.left = monsterPOS4.style.left = 
		 monsterPOS5.style.left = monsterPOS6.style.left = monsterPOS7.style.left = ((0.0044*MY)+156)+ 'px';
		 
		 
		 
	//monsterPOS.style.top = ((0.0053*MX)+170)-100+ 'px';	
	//monsterPOS.style.left =((0.0053*MY)+145)+ 'px';
	//monsterPOS.style.top = ((0.016*MX)+170)-100+ 'px';monsterPOS.style.left =((0.016*MY)+145)+ 'px'; 
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
	 sMaterial.reflectionTexture = new BABYLON.CubeTexture("img_game/img_game_skybox", scene);
     sMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
     sMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
     sMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	var skybox = BABYLON.Mesh.CreateBox("skybox", 2800, scene);
	skybox.material = sMaterial; }    
	
	


	
function createDemoScene(scene) {
	var skyMaterial = scene.getMaterialByName("skyboxMaterial");

	
	
/*
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
	SK5.checkCollisions = true;*/	
	
	
	
	var SK1 = BABYLON.Mesh.CreatePlane("1groundGRoutBOG", 4005, scene);
	SK1.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK1.rotation.y = Math.PI / 2;
	SK1.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK1.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/skybox_nx.jpg", scene);
	SK1.position = new BABYLON.Vector3(2000,1000,0);
	SK1.checkCollisions = true;
	
	var SK2 = BABYLON.Mesh.CreatePlane("3groundGRoutBOG", 4005, scene);
	SK2.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK2.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK2.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/skybox_nz.jpg", scene);
	SK2.position = new BABYLON.Vector3(0,1000,2000);
	SK2.checkCollisions = true;
	
	var SK3 = BABYLON.Mesh.CreatePlane("6groundGRoutBOG", 4005, scene);
	SK3.scaling = new BABYLON.Vector3(1,0.5,0.004);
	SK3.rotation.y = Math.PI;
	SK3.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK3.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/skybox_pz.jpg", scene);
	SK3.position = new BABYLON.Vector3(0,1000,-2000);
	SK3.checkCollisions = true;
	
	var SK4 = BABYLON.Mesh.CreatePlane("1groundGRoutBOG", 4005, scene);
	SK4.scaling = new BABYLON.Vector3(1,0.5,0.001);
	SK4.rotation.y = -Math.PI/2 ;SK4.rotation.z = -2*Math.PI ;
	SK4.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK4.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/skybox_px.jpg", scene);
	SK4.position = new BABYLON.Vector3(-2000,1000,0);
	SK4.checkCollisions = true;
	
	var SK5 = BABYLON.Mesh.CreatePlane("1groundGRoutBOG", 4001, scene);
	SK5.scaling = new BABYLON.Vector3(1,1,0.0001);
	SK5.rotation.x = -Math.PI/2 ;SK5.rotation.z = -Math.PI/2 ;
	SK5.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK5.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/skybox_ny.jpg", scene);
	SK5.position = new BABYLON.Vector3(0,1990,0);//(0,1990,0);
	SK5.checkCollisions = true;
	
	/*var SK6 = BABYLON.Mesh.CreatePlane("1groundGRoutBOG", 4000, scene);
	SK6.rotation.x = Math.PI/2 ;SK5.rotation.z = -Math.PI/2 ;
	//SK6.rotation.x = Math.PI/2 ;
	SK6.position = new BABYLON.Vector3(0,-100,0);
	SK6.material = new BABYLON.StandardMaterial("gMaterial", scene);
	SK6.material.diffuseTexture = new BABYLON.Texture("img_game/img_game_skybox/5.jpg", scene);
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
		
