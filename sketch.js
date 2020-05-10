var ball;
var database, Position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var ballRef = database.ref("Ball/Position");
    ballRef.on("value",readPosition,showError);
}

function readPosition(data){
Position = data.val();
ball.x = Position.x;
ball.y = Position.y;
}

function showError(){
console.log("read is not sucessfull")
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Ball/Position").set(
{x:Position.x+x,
 y:Position.y+y})
}
