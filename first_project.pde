int x = 30;//x position of the key
int y = 40;//y position of the key
float degree = 0;//degree of rotation(in radians) 
int sum = 0;//passcodes
boolean thirdLight = false;//order of passcodes

void setup(){
 size(800,600);
}
void draw(){
//ground
fill(88);//ground color
rect(0,300,800,600);
//seiling
  fill(206,196,162);//seiling color
  beginShape();
  vertex(0,0);
  vertex(170,100);
  vertex(630,100);
  vertex(800,0);
  endShape();
//wall(left side)
  fill(152,150,144);//wall color
  beginShape();
  vertex(0,0);
  vertex(170,100);
  vertex(170,450);
  vertex(0,570);
  endShape();
//wall(right side)
  beginShape();
  vertex(800,0);
  vertex(630,100);
  vertex(460,400);
  vertex(800,550);
  endShape();
//clues and hints
  fill(0);
  text("-Try to turn all the red lights into green",140,30);//hint
  text("-please enter the passcode first and then turn the dial",140,53);//hint
  text("-Finally, use the ket to unlock the safe :) ",140,77);//hint
  text("2/(2/5)",50,300);//clue(number 5)
  text("4*0.5",400,550);//clue(number 2)
  text("(3+0.5)*2",670,290);//clue(number 7)
//safeShape
  stroke(0);
  fill(100);//safe color
  strokeWeight(2);
  rect(150,100,500,400);
  fill(150);
  rect(170,120,460,360);
//turnplateShape
  fill(221);//turnplae color
  ellipse(width/2, height/2,100,100);
  ellipse(width/2, height/2,70,70);
  fill(229,35,35);
  triangle(400,268,390,280,410,280);
  pushMatrix();
  translate(400,300);
  rotate(degree);
  rect(35,0,15,5);
  popMatrix();
//lockerShape
  fill(0);//lock color
  ellipse(320,280,20,20);
  triangle(320,275,312,330,329,330);
//numberPadShapr
  fill(200);//number pad color(outer)
  rect(475,255,80,90);
  fill(150);//nuber pad color 
  rect(480,260,70,20);
  rect(480,285,70,55);
  line(503,285, 503,340);
  line(526,285,526,340);
  line(480,303,550,303);
  line(480,321,550,321);
  fill(0);//character color
  textSize(18);//characterize
  text("1",486,301);//location of character 1
  text("2",510,301);//location of character 2
  text("3",534,301);//location of character 3
  text("4",486,320);//location of character 4
  text("5",510,320);//location of character 5
  text("6",534,320);//location of character 6
  text("7",486,339);//location of character 7
  text("8",510,339);//location of character 8
  text("9",534,339);//location of character 9
  if(mouseX > 480 && mouseX < 503 && mouseY > 285 && mouseY < 303){
  println("1");
}
  if(mouseX > 503 && mouseX < 526 && mouseY > 285 && mouseY < 303){
  println("2");
}
  if(mouseX > 526 && mouseX < 550 && mouseY > 285 && mouseY < 303){
  println("3");
}
  if(mouseX > 480 && mouseX < 503 && mouseY > 303 && mouseY < 321){
  println("4");
}
  if(mouseX > 503 && mouseX < 526 && mouseY > 303 && mouseY < 321){
  println("5");
}
  if(mouseX > 526 && mouseX < 550 && mouseY > 303 && mouseY < 321){
  println("6");
}
  if(mouseX > 480 && mouseX < 503 && mouseY > 321 && mouseY < 340){
  println("7");
}
  if(mouseX > 503 && mouseX < 526 && mouseY > 321 && mouseY < 340){
  println("8");
}
  if(mouseX > 526 && mouseX < 550 && mouseY > 321 && mouseY < 340){
  println("9");
}  
//key
  fill(255,210,46);//key color
  noStroke();
  ellipse(x,y,25,25);
  rect(x+5,y-5,60,10);
  rect(x+56,y,8,20);
  rect(x+38,y,8,20);
//indicator lights
   fill(255,0,0);//red light color
   ellipse(350,150,10,10);//left indicator light
   ellipse(400,150,10,10);//middle indicator light
   ellipse(450,150,10,10);//right indicator light
//red light turn green(key unlocks the lock)
  if (x > 312 && x < 330 && y >272 && y < 333){
   fill(0,255,0);
   ellipse(350,150,10,10); 
}
 //red light turn green (when the red indicator line aline with the red triangle )
 if (degree > 4.5 && degree < 4.8){
   fill(0,255,0);
   ellipse(400,150,10,10);
}
 //red light turn green (when enter the passcode in the correct order)
 if(thirdLight == true){
     fill(0,255,0);
     ellipse(450,150,10,10);
}
}
//the motion of dragging the key  
  void mouseDragged(){
   x = mouseX;
   y = mouseY;
}
//the motion of rotate the plate
  void mouseClicked(){
  if(mouseX >350 && mouseX < 450 && mouseY > 250 && mouseY < 350 )
{degree = degree + 0.27;
 // println(degree);
}
  else {
    degree = 0;
}
//the motion when enter the right passcode
   //press 5
   if(mouseX > 503 && mouseX < 526 && mouseY > 303 && mouseY < 321){
   sum = 5;
}
   //press 2(before press 5)
   if(mouseX > 503 && mouseX < 526 && mouseY > 285 && mouseY < 303){
   if (sum == 5){
   sum = 2; 
}
}
   //press 7(brfore press 5 and 2) 
   if(mouseX > 480 && mouseX < 503 && mouseY > 321 && mouseY < 340){
   if(sum == 2){
     sum = 7;
     thirdLight = true;
}
}
}
 
 
