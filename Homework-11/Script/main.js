// Define canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Define square properties
var x = 50;
var y = 50;
var squareSize = 20;
var speed = 3; // Adjust speed here

// Define score and collectibles
var score = 0;
var collectibles = [];

// Set up canvas and square color
ctx.fillStyle = "#0000FF";

// Collectible class
class Collectible {
  constructor(xCoord, yCoord, objectHeight, objectWidth, color, value) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.objectHeight = objectHeight;
    this.objectWidth = objectWidth;
    this.color = color;
    this.value = value;
    this.collected = false;
  }
}

// Create collectibles
let collectible1 = new Collectible(100, 100, 20, 20, "#FF0000", 10);
collectibles.push(collectible1);

// Draw collectibles
function drawCollectibles() {
  collectibles.forEach((collectible) => {
    if (!collectible.collected) {
      ctx.fillStyle = collectible.color;
      ctx.fillRect(collectible.xCoord, collectible.yCoord, collectible.objectWidth, collectible.objectHeight);
    }
  });
}

class GameObject {
  constructor(x, y, height, width, color, value) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.value = value;
    this.collected = false;
  }
}

let gameObjects = []; // Array to store objects

// Parse JSON and create objects
fetch('objects.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(obj => {
      let gameObject = new GameObject(obj.x, obj.y, obj.height, obj.width, obj.color, obj.value);
      gameObjects.push(gameObject);
    });
  });

// keydown events
var keyState = {};
document.addEventListener("keydown", function(event) {
  keyState[event.key] = true;
});

document.addEventListener("keyup", function(event) {
  keyState[event.key] = false;
});

// Update square position based on key state
function moveSquare() {
  if (keyState["w"] && y > 0) y -= speed; // Move up
  if (keyState["s"] && y < canvas.height - squareSize) y += speed; // Move down
  if (keyState["a"] && x > 0) x -= speed; // Move left
  if (keyState["d"] && x < canvas.width - squareSize) x += speed; // Move right

  // Check for collisions with collectibles
  collectibles.forEach((collectible) => {
    if (!collectible.collected && x < collectible.xCoord + collectible.objectWidth &&
      x + squareSize > collectible.xCoord && y < collectible.yCoord + collectible.objectHeight &&
      y + squareSize > collectible.yCoord) {
      collectible.collected = true;
      score += collectible.value;
    }
  });
}

// Draw score on the canvas
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("Score: " + score, 10, 20);
}

// Update loop to move square, check collisions, and draw everything
function update() {
  requestAnimationFrame(update);
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
  ctx.fillRect(x, y, squareSize, squareSize); // Draw square
  drawCollectibles();
  moveSquare();
  drawScore();
}

// Start the update loop
update();
