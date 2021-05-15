let yLoc;
let ySpeed;

function setup() {
	createCanvas(500, 600);
	this.yLoc = 330;
	this.ySpeed = 1;
}

function draw() {
	background(243, 238, 218);
	volleyball();
}

function volleyball(){
	strokeWeight(2.5);
	fill(255);
	ellipse (300, this.yLoc - 30, 200, 200);
	
	// outlines:
	bezier(270, this.yLoc, 290, this.yLoc + 25, 370, this.yLoc + 35, 386, this.yLoc + 20); // middle, bottom
	bezier(270, this.yLoc, 255 , this.yLoc - 30, 255, this.yLoc - 70, 290, this.yLoc - 100); // middle, side
	bezier(290, this.yLoc - 100, 330, this.yLoc - 115, 370, this.yLoc - 95, 386, this.yLoc - 80); // middle, top
	bezier(290, this.yLoc - 100, 275, this.yLoc - 115, 260, this.yLoc - 115, 250, this.yLoc - 116); // top left connecter
	bezier(270, this.yLoc, 265, this.yLoc + 10, 260, this.yLoc + 30, 229, this.yLoc + 40); // bottom left connecter
	
	// left:
	bezier(270, this.yLoc - 113, 230, this.yLoc - 80, 210, this.yLoc - 20, 245, this.yLoc + 31);
	
	// lower:
	bezier(300, this.yLoc + 18, 303, this.yLoc + 45, 280, this.yLoc + 60, 270, this.yLoc + 65); // left
	bezier(340, this.yLoc + 28, 338, this.yLoc + 45, 328, this.yLoc + 60, 310, this.yLoc + 69); //right
	
  // middle:
	bezier(264, this.yLoc - 60, 296, this.yLoc - 84, 364, this.yLoc - 70, 398, this.yLoc - 40);
	bezier(262, this.yLoc - 40, 296, this.yLoc - 16, 364, this.yLoc + 4, 399, this.yLoc - 20);
	
	// top:
	bezier(310, this.yLoc - 105, 308, this.yLoc - 110, 305, this.yLoc - 120, 285, this.yLoc - 128);
	bezier(355, this.yLoc - 99, 345, this.yLoc - 115, 340, this.yLoc - 122, 330, this.yLoc - 125);
	

	this.yLoc = this.yLoc + this.ySpeed;
	
  if(this.yLoc>= 530 || this.yLoc<= 130){
    this.ySpeed = this.ySpeed * -1;
  }
	
}