var paddle2 =10,paddle1=10;

var song = "";

var paddle1X = 10,paddle1Height = 110;
var paddle2Y = 685,paddle2Height = 70;

var score1 = 0, score2 =0;
var paddle1Y;

var  playerscore =0;
var audio1;
var pcscore =0;

var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}

function preload()
{
song = loadSound("hello.mp3");
song.setVolume(1);
song.rate(1);
}

function start()
{
  song.play();
}

function pause()
{
  song.pause();
}

function setup()
{
  var canvas =  createCanvas(700,600);
  canvas.center()
}


function draw()
{

 background(0); 

 fill("black");
 stroke("black");
 rect(680,0,20,700);

 fill("black");
 stroke("black");
 rect(0,0,20,700);
 

   paddleInCanvas();
 
 
   fill("#00bfff");
    stroke("#00bfff");
    strokeWeight(0.5);
   paddle1Y = mouseY; 
   rect(paddle1X,paddle1Y,paddle1,paddle1Height,100);
    fill("#FFA500");
    stroke("#FFA500");
   var paddle2y =ball.y-paddle2Height/2;  rect(paddle2Y,paddle2y,paddle2,paddle2Height,100);
    midline();
   drawScore();
   models();
    move();
}

function reset()
{
    ball.x = width/2+100;
    ball.y = height/2+100;
    ball.dx=3;
    ball.dy = 3;
}

function midline(){
    for(i=0;i<480;i+=10) {
    var y = 0;
    fill("white");
    stroke(0);
    rect(width/2,y+i,10,480);
    }
}

function drawScore()
{
    textAlign(CENTER);
    textSize(20);
    fill("white");
    stroke(250, 0, 0)
    text("Player : ", 100, 50);
    text(playerscore,140,50);
    text("Computer : ", 500, 50);
    text(pcscore,555,50);
}

function move(){
  fill(50,350,0);
  stroke(255,0,0);
  strokeWeight(0.5);
  ellipse(ball.x,ball.y,ball.r,20)
  ball.x = ball.x + ball.dx;
  ball.y = ball.y + ball.dy;
  if(ball.x+ball.r>width-ball.r/2){
      ball.dx=-ball.dx-0.5;       
  }
 if (ball.x-2.5*ball.r/2< 0){
 if (ball.y >= paddle1Y&& ball.y <= paddle1Y + paddle1Height) {
   ball.dx = -ball.dx+0.5; 
 }
 else{
   pcscore++;
   reset();
   navigator.vibrate(100);
 }
}
if(pcscore ==5){
   fill("#00008b");
   stroke(0)
   rect(0,0,width,height-1);
   fill("white");
   stroke("white");
   textSize(25)
   text("Game Over!☹☹",width/2,height/2);
   text("Reload The Page!",width/2,height/2+30)
   noLoop();
   pcscore = 0;
}
  if(ball.y+ball.r > height || ball.y-ball.r <0){
      ball.dy =- ball.dy;
  }   
  }

  function models()
  {
    textSize(18);
    fill(255);
    noStroke();
    text("Width: "+width, 145, 15);
    text("Speed: "+abs(ball.dx), 50, 15);
    text("Height: "+height, 245, 15);
  }

  function paddleInCanvas()
  {
    if(mouseY+paddle1Height > height)
    {
         mouseY = height-paddle1Height;
    }
    if(mouseY < 0)
    {
      mouseY = 0;
    }
  }

  function zeroPointFive() {
    song.setVolume(0.5);
  }

  function one() {
    song.setVolume(1);
  }

  function onePointFive() {
    song.setVolume(1.5);
  }

  function two() {
    song.setVolume(2);
  }

  function twoPointFive() {
    song.setVolume(2.5);
  }

  function three() {
    song.setVolume(3);
  }

/8hello8/
