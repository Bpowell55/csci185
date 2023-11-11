const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];  //arrays starts at 0,1,2,.... fill(colors[2])

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(2);
//    //let counter = 0;
//     while (counter < 500) {
//     const i =randomInt (0, 4);
//     console.log("the index is:", i);
//     fill(colors[i]);
    
    // draw a random circle:
    // let x = randomInt(0, canvasWidth);
    // let y = randomInt(0, canvasHeight);
    // let size = randomFloat(25, 125);
    // let multiplier1 = randomInt (-1, 1);
    // let multiplier2 = randomInt (-1, 1 );
    // if (counter % 3 == 0) {
    //     square (x, y, size);
    // } else if (counter % 3 ==1) {
    //     circle (x, y, x + multiplier1*size, y + multiplier2 * size);
    // }
    // console.log(x,y,size);
    // circle(x, y, size);
    // square(x, y, size);
    // triangle(
    //     x, y - size / 2, 
    //     x - size / 2.25, y + size / 4.3,
    //     x + size / 2.25, y + size / 4.3
    // );

    // counter+=1; //changes counter value by addin one so it does not repeat indefinietly
}



// // anything that you want to animate goes in this function:  
//insert counter before draw below 
let counter = 0;
function draw() {
    const i =randomInt (0, 4);
   
    fill(colors[i]);
    

    // draw a random circle:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(25, 125);
 
  
   
    circle(x, y, size);
   
    counter+=1;
}




 
// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);