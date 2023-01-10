const SCREEN_WIDTH = 1200;
const SCREEN_HEIGHT = 1200;

const TREE_ROOT_X = 500;
const TREE_ROOT_Y = 800;

const ANGLE = 10;


var root;


function setup(){

    createCanvas(SCREEN_WIDTH,SCREEN_HEIGHT);
    background(64);

    var begin = createVector(TREE_ROOT_X,TREE_ROOT_Y);
    var end = createVector(TREE_ROOT_X,TREE_ROOT_Y-300);

    root = new Branch(begin,end,begin.dist(end));
    root.setBranch();
}



function draw(){
    root.draw();
    
    
}


function fractal(branch_length,angle){

    
}