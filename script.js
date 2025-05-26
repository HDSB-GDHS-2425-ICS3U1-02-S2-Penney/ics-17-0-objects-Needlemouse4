/**** SETUP CODE ****/

// Call the init function when the HTML window loads
window.onload = init;

function init() {
  // Init function that sets up our canvas. 
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  // Start the first frame request to begin the game loop
  window.requestAnimationFrame(gameLoop);
}

/**** OBJECT CREATION FUNCTIONS ****/

// Write the circle object function here
function circle(x, y, color, size) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.size = size; 
}


// Write the createCircle function here. 
const objs = [];
let currentcircle = 0;

function createCircle() {
  objs[currentcircle] = new circle(randomInteger(0, 1500), randomInteger(0, 1000), randomColor(), randomInteger(0, 50));

  ctx.beginPath();
  ctx.arc(objs[currentcircle].x, objs[currentcircle].y, objs[currentcircle].size, 0, Math.PI * 2);
  ctx.fillStyle = objs[currentcircle].color;
  ctx.fill();
  console.log(objs[currentcircle].color);
}

// Write the randomInteger function here. 
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function randomColor() {
  let r = Math.round(Math.random() * 256);
  let g = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let a = Math.random();
  return "rgba("+r+","+g+","+b+", "+a+")";
}
/**** GAMELOOP ****/

function gameLoop(timestamp) {

  // Call the createCircle function here.
  createCircle();

  // This causes the game to loop every frame (Do not change this)
  window.requestAnimationFrame(gameLoop);
}



