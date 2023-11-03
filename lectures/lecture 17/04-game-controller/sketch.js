let x = 100;
let y = 200;
let width = 50;
let fillColor = "Color";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill(fillColor);
    noFill();
   // circle(x, y, width);
   drawCreature (x, y, fillColor, width);
   drawGrid(canvasWidth, canvasHeight);


}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // redraw circle:
    if (ev.code === "ArrowUp") {
        // do somthing:
        y = y - 10;
    } else if (ev.code === "ArrowDown") {
        // do somthing:
        y = y + 10;
    }else if (ev.code === "ArrowLeft") {
        // do somthing:
        x = x - 10;
    } else if (ev.code === "ArrowRight") {
        // do somthing:
        x = x + 10;
    }else if (ev.code === "Space") {
        width = width + 10;

    }else if (ev.code === "Escape") {
        width = width - 10;
    }else if (ev.code === "KeyR") {
        fillColor= "red";
    }else if (ev.code === "KeyB") {
        fillColor = "blue";
    }

    clear();
    fill(fillColor);
   // circle(x, y, width);
   drawCreature (x, y, fillColor, width);
    drawGrid(canvasWidth, canvasHeight);
}
function drawCreature(x, y, fillColor, width) {
    fill ("color");
    circle(x, y, 200);               //have to change to match parameters
    let size = 150;
    let eyeball=150/7.5;

    fill ("black");
    circle (x-eyeball, y-eyeball, 50);

    fill ("color");
    circle(x-eyeball, y - eyeball, 2* eyeball);


}



// Add event listener on keydown
document.addEventListener("keydown", moveController);
