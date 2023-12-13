
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

let eggX;
let eggY;
let EggSize = 400;  //egg size
let overEgg = false;
let locked = false;


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    cursor('grab')   // made cursor grabeggY hand

    eggX = width / 2.0;
    eggY = height / 3.0;

    strokeWeight(4);
}


function draw() {

    background(226, 198, 247);   //set  background color

    fill(' #A1662F');               //floor
    rect(0, 450, 1300, 1000);

    fill('#e09f69');       //Eggs
    square(250, 400, 150);
    square(1000, 400, 150);

    fill('#5c5647');           //Egg insides
    rect(250, 400, 150, 40);        //Egg ON LEFT
    rect(1000, 400, 150, 40);                   ///Egg on RIGHT


    fill('#f5f3d5')         //egg man body
    ellipse(700, 300, 250, 300);


    fill('#66604f')      //feets
    ellipse(625, 450, 100, 50);
    ellipse(775, 450, 100, 50);

    fill('white')        //eyes
    circle(650, 250, 50);
    circle(750, 250, 50);

    fill('black')       //pupil eyes
    circle(655, 250, 5);
    circle(755, 250, 5);

    // mouth open:
    // fill ('black')
    // ellipse(700, 350, 105, 60);           //mouth coordinate
    strokeWeight(6); //mouth

    //Text for feed egg
    line(650, 350, 750, 350);
    textSize(32);
    fill(255);
    stroke(5);
    strokeWeight(4);
    text('Feed me eggs!', 500, 50);

    //text for Egg 1:
    textSize(15);
    fill(255);
    stroke(2);
    strokeWeight(2);
    text('One Free Egg', 270, 500);

    //text Egg 2:
    textSize(20);
    fill(255);
    stroke(2);
    strokeWeight(2);
    text('No Eggs', 1027, 500);


    // Egg to move around
    fill('#C4FFF7')
    ellipse(eggX, eggY, 30, 40);

    //(x coor, y-coor, width, height) this is moving egg

    if (
        mouseX > eggX - 40 &&             //eggX :egg's x-coor  
        mouseX < eggX + 40 &&             //mouseX : always contains the current horizontal position of the mouse, relative to (0, 0) of the canvas
        mouseY > eggY - 40 &&             //
        mouseY < eggY + EggSize           //Egg size is 400
    ) {
        overEgg = true;                          //lets egg move
        if (!locked) {
        }
    } else {
        overEgg = false;
    }

    if ((eggX >= 695 && eggX <= 705 ) && (eggY >= 345 && eggY <= 355)) {
        fill('black')
        ellipse(700, 350, 105, 60);

        line(650, 350, 750, 350);
        textSize(32);
        fill(245, 66, 105);
        stroke(5);

        text('I am not a cannibal! Take it out!!', 400, 100);
    }
    else if ((mouseX >= 720 && mouseX <= 730) && (mouseY <= 320 && mouseY >= 310)) {
        fill('black')
        ellipse(700, 350, 105, 60);

        line(650, 350, 750, 350);
        textSize(32);
        fill(245, 66, 105);
        stroke(5);

        text('Put the egg in my mouth, please!', 440, 550);
    }
}

function mousePressed() {
    if (overEgg) {
        locked = true;            //if mouse is pressed over egg, then locked on is true and egg moves.

    } else {                        // if mouse is not pressed, egg is not locked on
        locked = false;
    }

}

function mouseDragged() {
    if (locked) {
        eggX = mouseX;               //allows egg to be dragged
        eggY = mouseY;
    }


}

function mouseReleased() {

    locked = false;                 // relase the egg, stop control

}



