var x = 600;
var y = 500;
function setup() {
createCanvas(600,500);
background(0);
}

function draw() {
if(mouseX < x/2 && mouseY < y/3){
	fill(205,88,63);
	rect(0,0,x/2,y/3);
}
else{
	fill(0);
	rect(0,0,x/2,y/3);
}	
if(mouseX < x/2 && mouseY > y/3){
	fill(105,226,68);
	rect(0,y/3,x/2,333);
}
else{
	fill(0);
	rect(0,y/3,x/2,333);
}
if(mouseX > 300){
	fill(142,211,247);
	rect(300,0,x/2,y);
}
else{
	fill(0);
	rect(300,0,x/2,y);
}
if(mouseX == 500){
	line(500,0,500,500);
}
}