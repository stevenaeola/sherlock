let glass = {
    width : 50,
    centre_x : 150,
    centre_y : 250};

glass.draw = function(){
    ellipse(this.centre_x, this.centre_y, this.width, this.width);
    line(this.centre_x, this.centre_y + this.width/2, this.centre_x, this.centre_y + 2* this.width);
}

function setup(){
    createCanvas(500, 500);
}

function draw(){
    glass.draw();
}
