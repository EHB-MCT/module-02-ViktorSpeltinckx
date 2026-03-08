let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball
let x = 100;
let y = 300;

let speedX = 5;
let directionX = 1;

// (extra axis voor later)
let speedY = 0;
let directionY = 1;

//2. Add variables (size, speed, colorVal) for controlling the sketch
let size = 50;
let speed = 5;
let colorVal = "#ff0000";


function setup() {
    //Creating a canvas to draw on, using the existing canvas element.
    createCanvas(600, 600, canvasElement);
    noStroke();

    console.log("Setup!", width);
}

function draw() {
    background(220);

    // 3.1 Animate position
    x = x + speed * directionX;

    // 3.2 Bounce logic: check the edges
    if (x + size / 2 > width || x - size / 2 < 0) {
        directionX = directionX * -1;
    }

    // 3.3 Draw
    fill(colorVal);
    circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements
let sizeInput = document.querySelector("#size-input");
let speedInput = document.querySelector("#speed-input");
let colorInput = document.querySelector("#color-input");


// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging
sizeInput.addEventListener("input", function () {
    size = Number(sizeInput.value);
});

speedInput.addEventListener("input", function () {
    speed = Number(speedInput.value);
});

colorInput.addEventListener("input", function () {
    colorVal = colorInput.value;
});