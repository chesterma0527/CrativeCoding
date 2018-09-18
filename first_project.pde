void setup(){
 size(800,600);
 background(255);
//safe
  fill(100);
  strokeWeight(2);
  rect(150,100,500,400);
  fill(150);
  rect(170,120,460,360);
//turnplate
  fill(221);
  ellipse(width/2, height/2,100,100);
  ellipse(width/2, height/2,70,70);
  fill(229,35,35);
  triangle(400,268,390,280,410,280);
//lock
  fill(0);
    ellipse(320,280,20,20);
triangle(320,275,312,330,329,330);
//password
  fill(200);
  rect(475,255,80,90);
  fill(150);
  rect(480,260,70,20);
  rect(480,285,70,55);
  line(503,285, 503,340);
  line(526,285,526,340);
  line(480,303,550,303);
  line(480,321,550,321);
  fill(0);
  textSize(18);
  text("1",486,301);
  text("2",510,301);
  text("3",534,301);
  text("4",486,320);
  text("5",510,320);
  text("6",534,320);
  text("7",486,339);
  text("8",510,339);
  text("9",534,339);
//keyHole(For Now)
  noStroke();
  fill(242,197,15);
  rect(390,290,20,20);

}

void draw(){

  rect(20,20,20,20);
  if(mouseX >10 && mouseX < 30 && mouseY >10 && mouseY < 30  ){
    fill(255);
    rect(20,20,20,20);
   
  }
}

void mouseMoved(){
  if(mouseX >10 && mouseX < 30 && mouseY >10 && mouseY < 30  ){
    rect(20,20,20,20);
  }
  else{
    fill(242,197,15);
    rect(mouseX,mouseY,20,20);
  }
  }
