var fighterPlane;
var enemyPlane1,enemyPlane2,enemyPlane3;
var bomberPlane1,bomberPlane2;
var frendlyPlane;

var backgroundImg
var fighterPlaneImg;
var enemyPlane1Img,enemyPlane2Img,enemyPlane3Img;
var bomberPlane1Img,bomberPlane2Img;
var frendlyPlaneImg;

function preload(){
 fighterPlaneImg = loadImage("Assets/PlayablePlanes/FighterPlane.png");
 enemyPlane1Img = loadImage("Assets/EnemyPlanes/EnemyPlane1.png");
 backgroundImg = loadImage("Assets/Background.png");
}

function setup(){
 createCanvas(700,940);
 fighterPlane = createSprite(400,700,50,50);
 fighterPlane.addImage(fighterPlaneImg);
 fighterPlane.shapeColor = "blue"
 fighterPlane.scale = 1

 enemyPlane1 = createSprite(400,300,50,50);
 enemyPlane1.addImage(enemyPlane1Img);
 enemyPlane1.shapeColor = "red";
 enemyPlane1.scale = 1

}

function draw(){
background(backgroundImg)

if(keyDown(RIGHT_ARROW)){
 fighterPlane.x += 2
}


if(keyDown(LEFT_ARROW)){
 fighterPlane.x -= 2
}

   
drawSprites();
}