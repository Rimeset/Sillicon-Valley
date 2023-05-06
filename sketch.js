var backImg;

var riyalImg;
var riyal1, riyal2, riyal3, riyal4, riyal5;

var spin, spinImg, spinAnim, spinAnimImg;

var line, lineImg;

var hand, handImg;

var ENTRY = 0;
var PLAY = 1;
var END = 2;
var gameState = ENTRY;

function preload() {
  backImg = loadImage("./img/back.jpg");
  spinImg = loadImage("./img/spin.png");
  riyalImg = loadImage("./img/riyal.png");
  lineImg = loadImage("./img/line.png");
  spinAnimImg = loadAnimation("./img/spin.gif");
  handImg = loadImage("./img/hand.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

 spin = createSprite(windowWidth/2 - 600, windowHeight/2 - 10);
 spin.addImage("spin", spinImg);
  spin.scale=0.48;

  // riyal Images
 riyal1 = createSprite(windowWidth/2 - 100, windowHeight/2 - 200);
 riyal1.addImage("riyal",riyalImg);
 riyal1.scale=0.4;

 riyal2 = createSprite(windowWidth/2 + 100, windowHeight/2 + 200);
 riyal2.addImage("riyal",riyalImg);
 riyal2.scale=0.4;

 riyal3 = createSprite(windowWidth/2 - 300, windowHeight/2 + 200);
 riyal3.addImage("riyal",riyalImg);
 riyal3.scale=0.4;

 riyal4 = createSprite(windowWidth/2 + 200, windowHeight/2 - 150);
 riyal4.addImage("riyal",riyalImg);
 riyal4.scale=0.4;

 riyal5 = createSprite(windowWidth/2, windowHeight/2);
 riyal5.addImage("riyal", riyalImg);
 riyal5.scale=0.4;

 line = createSprite(windowWidth/2 + 500, windowHeight/2);
 line.addImage("line", lineImg);

}

function draw() {
  background(backImg);  
  drawSprites();

 /* createEdgeSprites();
 hand.bounceOff(edges);*/

// showing the hand
document.addEventListener('keydown', function(event) {
  var keyCode = event.keyCode;

  if (keyCode === 13) {

    spin.visible=false;

    spinAnim = createSprite(windowWidth/2 - 600, windowHeight/2 - 10);
 spinAnim.addAnimation("rotating", spinAnimImg);
  spinAnim.scale=0.48;

  hand = createSprite(windowWidth/2 - 655, windowHeight/2 + 20);
  hand.addImage("hand", handImg);
  hand.scale=0.5;
  }
});
// showing the hand 


// movements
  // up
  document.addEventListener('keydown', function(event) {
   var keyCode = event.keyCode;
  
    if (keyCode === 38) {
hand.y=hand.y-5;
spinAnim.y=spinAnim.y-5;
    }
  });
  //down
 document.addEventListener('keydown', function(event) {
    var keyCode = event.keyCode;
  
    if (keyCode === 40) {
hand.y=hand.y+5;
spinAnim.y=spinAnim.y+5;
    }
  });
  //left
  document.addEventListener('keydown', function(event) {
    var keyCode = event.keyCode;
  
    if (keyCode === 37) {
hand.x=hand.x-5;
spinAnim.x=spinAnim.x-5;
    }
  });
  //right
document.addEventListener('keydown', function(event) {
   var keyCode = event.keyCode;

    if (keyCode === 39) {
hand.x=hand.x+5;
spinAnim.x=spinAnim.x+5;
    }
 });
//movements

 // collidions
if(hand.collide(riyal1)) {
  riyal1.visible=false;
 }
}