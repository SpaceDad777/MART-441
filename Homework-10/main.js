$(document).ready(function () {
    // Get the audio element
    var audio = document.getElementById("song");

    // volume (between 0 and 1, where 0 is mute and 1 is full volume)
    audio.volume = 0.1; //  0.5 for half volume
});

class Square {
    constructor(x, y, width, height, color) {
        this.theX = x;
        this.theY = y;
        this.theWidth = width;
        this.theHeight = height;
        this.theColor = color;
    }

    setX(x) {
        this.theX = x;
    }

    setY(y) {
        this.theY = y;
    }

    setWidth(width) {
        this.theWidth = width;
    }

    setHeight(height) {
        this.theHeight = height;
    }
}

// Declare canvas and context as global variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Define other global variables
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;


createSquares();

drawSquare();

// timer will move the second square around
setInterval(moveGreenSquare, 1000);


function createSquares() {
    square1 = new Square(x, y, 20, 20, "blue");
    square2 = new Square(x2, y2, 50, 50, "green");
}

// this function will randomly move the second square around the canvas
function moveGreenSquare() {
    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();
}

// this function draws the squares to the canvas in their locations
function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}

// using jQuery for keystrokes
$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

// this function checks which key was pressed
function getKey(event) {
    // only checking collision when a key is pressed
    var didCollide = hasCollided(square1, square2);
    // if a collision happens
    if (didCollide) {
        // change the background color
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        // change the size of the squares
        square1.setWidth(square1.theWidth - 1);
        square1.setHeight(square1.theHeight - 1);
        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);
    }
    // move the first square depending on what key was pressed
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    // to draw the squares again
    drawSquare();
}

function moveUp() {
    square1.setY(Math.max(0, square1.theY - 30));
}

function moveDown() {
    square1.setY(Math.min(canvas.height - square1.theHeight, square1.theY + 30));
}

function moveLeft() {
    square1.setX(Math.max(0, square1.theX - 30));
}

function moveRight() {
    square1.setX(Math.min(canvas.width - square1.theWidth, square1.theX + 30));
}

// collision function that checks for corners overlapping
function hasCollided(object1, object2) {
    return !(
        ((object1.theY + object1.theHeight) < (object2.theY)) ||
        (object1.theY > (object2.theY + object2.theHeight)) ||
        ((object1.theX + object1.theWidth) < object2.theX) ||
        (object1.theX > (object2.theX + object2.theWidth))
    );
}
