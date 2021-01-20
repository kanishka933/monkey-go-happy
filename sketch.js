
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,ground,score;
var survivalTime=0;

function preload(){
  
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
 
  //create Obstacle and Food Groups
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  

  
}


function draw() {
background(255);
  if(ground.x<0){
    ground.x=ground.width/2;
    
  }
  if(keyDown("space")){
    monkey.velocityY = -12;
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if(obstaclesGroup.isTouching(monkey)){
        gameState = END;
  }
  
  
 spawnbanana();
spawnobstacle();
  
  
 
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
  
  switch(score){
    case 10:monkey.scale = 0.12
            break;
    case 20:monkey.scale = 0.14
            break;
            case 30:monkey.scale = 0.16
            break;
            case 40:monkey.scale = 0.18
            break;
            default:break;
    
  }
   stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  
  drawSprites();
  
  
}

 

function spawnbanana() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     banana= createSprite(600,100,40,10);
    banana.y = Math.round(random(10,60));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
   }}

function spawnobstacle() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     obstacle= createSprite(200,330,20,20);
    obstacle.X = Math.round(random(10,60));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 100;
   }}



