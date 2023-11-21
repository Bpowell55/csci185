
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


// required to set up the canvas:
function setup() { 
    createCanvas(canvasWidth, canvasHeight);
   

}


function draw() {
    // clear the canvas:
    clear();
    
    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);    
     background('#8DD7BF');

    fill(' #A1662F');  
    rect(0, 450, 1300, 1000);
    

    fill ('#e09f69');             //boxes
    square(250, 400, 150); 
    square(1000,400, 150);

    fill('#5c5647');                 //box insides
    rect(250, 400, 150, 40); 
    rect(1000, 400, 150, 40); 

    
    
    fill('#f5f3d5')//egg man
    ellipse(700, 300, 250,300);

    fill('#66604f') //feets
    ellipse(625,450,100,50);
    ellipse(775,450,100,50);

    fill('white')   //eyes
    circle(650,250, 50);
    circle(750,250, 50);
    
    fill('black') //pupil eyes
    circle(655, 250, 5);
    circle(755, 250, 5);


    strokeWeight(6); //mouth
    line(650, 350, 750, 350); 
}





