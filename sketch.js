const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var Gafus, GafusImg;
var Toqq, ToqqImg;
var bgImage1, rockyBgImg2, waterBgImg3;
var meteorGroup;
var cometGroup;
var starGroup;
var brickGroup;
var gameState=0;
var Start;
var starImg;
var Flag=false;
var cometImg, meteorImg;
var world, engine;
var ToqqBody, brickBody;
function preload(){
  bgImage1=loadImage("Images/WelcomBG.jpg");
  GafusImg=loadAnimation("Images/Gafus1.png", "Images/Gafus2.png", "Images/Gafus3.png", "Images/Gafus4.png");
  cometImg=loadImage("Images/comet.png");
  meteorImg=loadImage("Images/meteor.png");
  ToqqImg=loadAnimation("Images/Toqq1.png","Images/Toqq2.png","Images/Toqq3.png","Images/Toqq4.png",
  "Images/Toqq5.png","Images/Toqq6.png","Images/Toqq7.png")
  rockyBgImg2=loadImage("Images/Rocky planet.jpg");
  waterBgImg3=loadImage("Images/Water planet.jpg")
  starImage=loadAnimation("Images/star1.png","Images/star2.png","Images/star3.png", "Images/star4.png",
 "Images/star5.png", "Images/star6.png", "Images/star7.png", "Images/star8.png");
  //loadAnimation
}
function setup() {
 createCanvas(displayWidth, displayHeight);
 engine =Engine.create();
  world=engine.world;
  Gafus=createSprite(displayWidth/6, displayHeight-100, 10, 10)
  Gafus.addAnimation("alien", GafusImg);
  Toqq=createSprite(displayWidth/2, displayHeight-400);
  Toqq.addAnimation("float", ToqqImg)
  Start=createButton("PLAY");
  Start.position(displayWidth/2, displayHeight-100);
  starGroup = new Group();
  brickGroup = new Group();
  cometGroup = new Group();
  ToqqBody = new StarToqq(Toqq.x, Toqq.y);

}
function draw() {
  if(gameState===0){
    background(bgImage1);
    text("PLANET VEXILIA IV")
    Start.mousePressed(()=>{
      gameState=1;
      Start.hide();
    })
  }
  if(gameState===1){
    background(rockyBgImg2);
    //first game level
    //different bg-rock planet
    Toqq.scale=0.5
    if(Flag===false){
      spawnBricks();
    }
  }
  drawSprites();

  ToqqBody.display();
  
  Engine.update(engine);
}
function spawnBricks(){
  for(var i=0; i<=12; i++){
    brick=createSprite(i*100, random(100, displayHeight-500), 50, 30);
    strokeWeight(5);
    brick.shapeColor="lightgreen";
    brickGroup.add(brick);
    
    console.log(brickBody);
  }
  gBrick=createSprite(random(50, displayWidth-100), random(100, displayHeight-500), 40, 20)
  gBrick.shapeColor="gold";
  Flag=true;
  brickBody= new Brick(100, 100);
  brickBody.display();
  Engine.update(engine);
}
function spawnStars(){
  star = createSprite(Toqq.x, Toqq.y, 10, 10)
}