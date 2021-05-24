var ball;
var database,position;

function setup(){
   database = firebase.database();
   console.log("database");
    createCanvas(500,500);
   ball = createSprite(250,250,10,10);
   ball.shapeColor = "red";
   
   var ballPosition = database.ref("ball/position");
   ballPosition.on("value",readPosition);

}

function draw(){

    background("white");

    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    if(keyDown(DOWN_ARROW)){
        writeposition(0,1);
    }
    if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }

    drawSprites();
}


function writeposition(x,y){
database.ref("ball/position").set({
      "x":position.x+x,
      "y":position.y+y

  })
       
   
}

function readPosition(data){
    position = data.val();
    ball.x-position.x;
    ball.y=position.y;
}




























