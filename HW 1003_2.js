var xPos;
var yPos;

function setup() {
	createCanvas(600,600);
	background(200);
}

function draw() {
	line(0,300,600,300);
	rectMode(CENTER);
	angleMode(DEGREES);


for (var i = 0; i < 3; i++){
	xPos = 100+(200*i);
	yPos = 300;
		push();
			translate(xPos,yPos);
			rotate(30+(20*i));
			rect(0,0,100,100);
		pop();
}
}