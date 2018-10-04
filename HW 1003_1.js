function setup() {
createCanvas(600,600);
background(200);
}

function draw() {
	line(0,300,600,300);
	rectMode(CENTER);
	angleMode(DEGREES);
	

	push();
	translate(100,300);
	rotate(30);
	rect(0,0,100,100);
	pop();
	

	push();
	translate(300,300);
	rotate(50);
	rect(0,0,100,100);
	pop();

	push();
	translate(500,300);
	rotate(70);
	rect(0,0,100,100);
	pop();
}