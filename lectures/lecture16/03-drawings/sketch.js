function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("lightyellow");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("brown")
    circle(300, 300, 400);
   
    fill("white")
    circle(200, 300, 100);
    fill("white")
    circle(400, 300, 100);

    fill("black")
    circle(200, 300, 50);

    fill("black")
    circle(400, 300, 50);
    


    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(30, 20, 55, 55);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve

    drawCreature();

    drawCreature(700, 300);
    drawCreature(900, 200);


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function drawCreature(x, y, color) {
    fill ("color");
    circle(x, y, 200);               //have to change to match parameters
    let size = 150;
    let eyeball=150/7.5;

    fill ("black");
    circle (x-eyeball, y-eyeball, 50);

    fill ("white");
    circle(x-eyeball, y - eyeball, 2* eyeball);


}
