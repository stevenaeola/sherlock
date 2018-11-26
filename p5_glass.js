let glass = {
    width : 50,
    centre_x : 150,
    centre_y : 250};

function setup(){
    createCanvas(500, 500);
}

function draw(){
    ellipse(glass.centre_x, glass.centre_y, glass.width, glass.width);
    line(glass.centre_x, glass.centre_y + glass.width/2, glass.centre_x, glass.centre_y + 2* glass.width);
}
