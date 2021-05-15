let yLoc;
let xSpeed;

function setup() {
	createCanvas(windowWidth, 600);
	this.yLoc = 330;
	this.xSpeed = 1;
	this.xLoc = 270;
}

function draw() {
	background(243, 238, 218);
	push();
	scale(0.5);
	volleyball();
	pop();
}

function volleyball(){
	strokeWeight(2.5);
	fill(255);
	ellipse (this.xLoc + 30, this.yLoc - 30, 200, 200);
	
	// outlines:
	bezier(this.xLoc, this.yLoc, this.xLoc + 20, this.yLoc + 25, this.xLoc + 100, this.yLoc + 35, this.xLoc + 116, this.yLoc + 20); // middle, bottom
	bezier(this.xLoc, this.yLoc, this.xLoc - 15, this.yLoc - 30, this.xLoc - 15, this.yLoc - 70, this.xLoc + 20, this.yLoc - 100); // middle, side
	bezier(this.xLoc + 20, this.yLoc - 100, this.xLoc + 60, this.yLoc - 115, this.xLoc + 100, this.yLoc - 95, this.xLoc + 116, this.yLoc - 80); // middle, top
	bezier(this.xLoc + 20, this.yLoc - 100, this.xLoc + 5, this.yLoc - 115, this.xLoc - 10, this.yLoc - 115, this.xLoc - 20, this.yLoc - 116); // top left connecter
	bezier(this.xLoc, this.yLoc, this.xLoc - 5, this.yLoc + 10, this.xLoc - 10, this.yLoc + 30, this.xLoc - 41, this.yLoc + 40); // bottom left connecter
	
	// left:
	bezier(this.xLoc, this.yLoc - 113, this.xLoc - 40, this.yLoc - 80, this.xLoc - 60, this.yLoc - 20, this.xLoc - 25, this.yLoc + 31);
	
	// lower:
	bezier(this.xLoc + 30, this.yLoc + 18, this.xLoc + 33, this.yLoc + 45, this.xLoc + 10, this.yLoc + 60, this.xLoc, this.yLoc + 65); // left
	bezier(this.xLoc + 70, this.yLoc + 28, this.xLoc + 68, this.yLoc + 45, this.xLoc + 58, this.yLoc + 60, this.xLoc + 40, this.yLoc + 69); //right
	
  // middle:
	bezier(this.xLoc - 6, this.yLoc - 60, this.xLoc + 26, this.yLoc - 84, this.xLoc + 94, this.yLoc - 70, this.xLoc + 128, this.yLoc - 40);
	bezier(this.xLoc - 8, this.yLoc - 40, this.xLoc + 26, this.yLoc - 16, this.xLoc + 94, this.yLoc + 4, this.xLoc + 129, this.yLoc - 20);
	
	// top:
	bezier(this.xLoc + 40, this.yLoc - 105, this.xLoc + 38, this.yLoc - 110, this.xLoc + 35, this.yLoc - 120, this.xLoc + 15, this.yLoc - 128);
	bezier(this.xLoc + 85, this.yLoc - 99, this.xLoc + 75, this.yLoc - 115, this.xLoc + 70, this.yLoc - 122, this.xLoc + 60, this.yLoc - 125);
	

	this.xLoc = this.xLoc + this.xSpeed;
	
  if(this.xLoc>= windowWidth || this.xLoc<= 0){
    this.xSpeed = this.xSpeed * -1;
  }
	
}