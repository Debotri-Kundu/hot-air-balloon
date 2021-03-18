var balloon,database;
var position,balloonposition;
var bgimage,balloonimage;
function preload(){
  balloonimage=loadImage("hot-air-balloon image.png")
  bgimage=loadImage("c35BGimage.png")
}
function setup(){
    createCanvas(1400,800);
    database=firebase.database()
    balloon=createSprite(200,600,30,30);
    balloon.addImage(balloonimage)
    balloon.scale=0.5;
    balloonposition=database.ref("Balloon/position")
    balloonposition.on("value",readPosition)
}
function draw(){
    background(bgimage)
    if(position!==undefined){
    if(keyDown("UP")){
        writePosition(0,-2)
    }
    if(keyDown("DOWN")){
        writePosition(0,2)
    }
    if(keyDown("LEFT")){
        writePosition(-2,0)
    }
    if(keyDown("RIGHT")){
        writePosition(2,0)
    }

    drawSprites();
}
}
function readPosition(data){
    position=data.val()
    balloon.x=position.x
    balloon.y=position.y
}
function writePosition(x,y){
    database.ref("Balloon/position").set({
      "x":position.x+x,
      "y":position.y+y
    })
   
}