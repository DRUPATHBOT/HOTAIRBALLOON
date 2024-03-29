var balloon,balloonImage1,balloonImage2;

var database;

var position;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


function setup() {
  createCanvas(1500,700);
  database= firebase.database();
 

  
  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  var balloonPosition= database.ref('balloon/position')
  balloonPosition.on("value",readPosition, showError)

  textSize(20); 
}


function draw() {
  background(bg);


  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0)
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0)
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale -0.01;
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,+10)
    balloon.addAnimation("hotAirBalloon",balloonImage2)
    balloon.scale=balloon.scale+0.01
  }
  console.log(balloon.x)
  console.log(balloon2.y)
  drawSprites();
  
  } 

function updateHeight(x,y){
  database.ref('balloon/position').set({
    'x': position.x+ x,
    'y': position.y+ y
  })

  }
  function readPosition(data){
    position=data.val();
    balloon.x = position.x;
    balloon.y = position.y;
  }
function showError(){
  console.log("Error in writing to the database");
  } 

