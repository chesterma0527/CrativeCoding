

function setup() {
	var stateIndex;
	createCanvas(1500,1000);
	noStroke();
	 background(82,184,245);
	 fill(235,80,66)//sun
	 ellipse(100,50,400,400);//sunColor

	 fill(74,157,100);//grassColor
	 push();
	 translate(0,-200);
	 beginShape();//grass
	 vertex(0,1000);
	 vertex(300,1050);
	 vertex(400,1030);
	 vertex(500,1070);
	 vertex(700,900);
	 vertex(1000,980);
	 vertex(1050,1020);
	 vertex(1200,1060);
	 vertex(1280,1033);
	 vertex(1400,1028);
	 vertex(1490,976);
	 vertex(1500,1070);
	 vertex(1500,1500);
	 vertex(0,1500);
	 vertex(0,1000);
	 endShape();
	 pop();

	 fill(249);
	 push();
	 translate(200,0);
	 beginShape();//cloud 1
	 vertex(400,100);
	 vertex(520,80);
	 vertex(570,97);
	 vertex(620,92);
	 vertex(660,142);
	 vertex(700,200);
	 vertex(650,210);
	 vertex(620,220);
	 vertex(580,180);
	 vertex(550,195);
	 vertex(525,200);
	 vertex(500,200);
	 endShape();
	 pop();

	 beginShape();//cloud 2
	 push();
	 translate(-300,-30);
	 vertex(400,100);
	 vertex(520,80);
	 vertex(570,97);
	 vertex(620,92);
	 vertex(660,122);
	 vertex(700,160);
	 vertex(650,215);
	 vertex(620,220);
	 vertex(580,190);
	 vertex(550,205);
	 vertex(525,200);
	 vertex(500,200);
	 endShape();
	 pop();

	 push();
	 translate(700,0);
	 beginShape();//cloud 3
	 vertex(400,100);
	 vertex(520,80);
	 vertex(570,97);
	 vertex(620,92);
	 vertex(660,142);
	 vertex(700,220);
	 vertex(650,230);
	 vertex(620,230);
	 vertex(580,190);
	 vertex(550,195);
	 vertex(525,200);
	 vertex(500,200);
	 endShape();
	 pop();


}

function draw() {
		
}

function mouseClicked(){
	stateIndex = int(random(1,20));
	if (stateIndex % 2 == 0){
		shapeDoge();
	}
	else if (stateIndex % 2 == 1){
		shapeHusky();
}

function shapeDoge(){
	noStroke();
//body
	push();
	translate(-5,-10);
	beginShape();
			fill(195,185,155);
			vertex(260+mouseX,68+mouseY);
			vertex(270+mouseX,81.8+mouseY);
			vertex(269+mouseX,98.9+mouseY);
			vertex(269+mouseX,106+mouseY);
			vertex(280+mouseX,131+mouseY);
			vertex(288+mouseX,187+mouseY);
			vertex(291+mouseX,190+mouseY);
			vertex(288+mouseX,209+mouseY);
			vertex(291+mouseX,243+mouseY);
			vertex(295+mouseX,257+mouseY);
			vertex(295+mouseX,278+mouseY);
			vertex(285+mouseX,301+mouseY);
			vertex(264+mouseX,326+mouseY);
			vertex(197+mouseX,337+mouseY);
			vertex(107+mouseX,337+mouseY);
			vertex(83.8+mouseX,311+mouseY);
			vertex(76.7+mouseX,280+mouseY);
			vertex(89.7+mouseX,249+mouseY);
			vertex(96.3+mouseX,239+mouseY);
			vertex(87.7+mouseX,225+mouseY);
			vertex(87.7+mouseX,208+mouseY);
			vertex(87.8+mouseX,195+mouseY);
			vertex(95.3+mouseX,176+mouseY);
			vertex(108+mouseX,190+mouseY);
			vertex(124+mouseX,202+mouseY);
			vertex(137+mouseX,210+mouseY);
			vertex(169+mouseX,210+mouseY);
			vertex(193+mouseX,207+mouseY);
			vertex(222+mouseX,182+mouseY);
			vertex(245+mouseX,159+mouseY);
			vertex(255+mouseX,138+mouseY);
			vertex(262+mouseX,117+mouseY);
			vertex(262+mouseX,91.6+mouseY);
			vertex(258+mouseX,70.7+mouseY);
	endShape();
	pop();
	
	//body
	push();
	translate(-5,-10);
	beginShape();
			fill(202,168,106);
			vertex(260+mouseX,68+mouseY);
			vertex(270+mouseX,81.8+mouseY);
			vertex(269+mouseX,98.9+mouseY);
			vertex(269+mouseX,106+mouseY);
			vertex(280+mouseX,131+mouseY);
			vertex(288+mouseX,187+mouseY);
			vertex(291+mouseX,190+mouseY);
			vertex(288+mouseX,209+mouseY);
			vertex(291+mouseX,243+mouseY);
			vertex(295+mouseX,257+mouseY);
			vertex(295+mouseX,278+mouseY);
			vertex(285+mouseX,301+mouseY);
			vertex(272+mouseX,305+mouseY);
			vertex(272+mouseX,283+mouseY);
			vertex(270+mouseX,273+mouseY);
			vertex(264+mouseX,265+mouseY);
			vertex(257+mouseX,262+mouseY);
			vertex(257+mouseX,254+mouseY);
			vertex(270+mouseX,248+mouseY);
			vertex(281+mouseX,234+mouseY);
			vertex(285+mouseX,221+mouseY);
			vertex(282+mouseX,216+mouseY);
			vertex(279+mouseX,200+mouseY);
			vertex(271+mouseX,198+mouseY);
			vertex(259+mouseX,200+mouseY);
			vertex(248+mouseX,205+mouseY);
			vertex(237+mouseX,208+mouseY);
			vertex(237.3+mouseX,194+mouseY);
			vertex(237.1+mouseX,175+mouseY);
			vertex(241+mouseX,162+mouseY);
			vertex(251+mouseX,155+mouseY);
			vertex(251+mouseX,139+mouseY);
			vertex(251+mouseX,121+mouseY);
			vertex(254+mouseX,109+mouseY);
			vertex(254+mouseX,87.3+mouseY);
			vertex(260+mouseX,69.8+mouseY);
	endShape();
	pop();
	//head 1
	beginShape();
		fill(203,194,161);
		vertex(152+mouseX,39.5+mouseY);
		vertex(144+mouseX,46.8+mouseY);
		vertex(133+mouseX,52.9+mouseY);
		vertex(123+mouseX,58.0+mouseY);
		vertex(113+mouseX,61.1+mouseY);
		vertex(104+mouseX,66.4+mouseY);
		vertex(100+mouseX,73.1+mouseY);
		vertex(90.6+mouseX,106+mouseY);
		vertex(86+mouseX,132+mouseY);
		vertex(90.5+mouseX,164+mouseY);
		vertex(102+mouseX,183+mouseY);
		vertex(116+mouseX,197+mouseY);
		vertex(130+mouseX,208+mouseY);
		vertex(153+mouseX,212+mouseY);
		vertex(174+mouseX,213+mouseY);
		vertex(200+mouseX,203+mouseY);
		vertex(223+mouseX,182+mouseY);
		vertex(240+mouseX,168+mouseY);
		vertex(254+mouseX,152+mouseY);
		vertex(259+mouseX,130+mouseY);
		vertex(262+mouseX,115+mouseY);
		vertex(265+mouseX,97.3+mouseY);
		vertex(257+mouseX,70.6+mouseY);
		vertex(241+mouseX,46.8+mouseY);
		vertex(216+mouseX,43.8+mouseY);
		vertex(187+mouseX,42.9+mouseY);
		vertex(166+mouseX,40.5+mouseY);
		vertex(152+mouseX,40+mouseY);
	endShape();

	//head 2
	beginShape();
		fill(208,167,96);
		vertex(152+mouseX,39.5+mouseY);
		vertex(144+mouseX,46.8+mouseY);
		vertex(133+mouseX,52.9+mouseY);
		vertex(123+mouseX,58.0+mouseY);
		vertex(113+mouseX,61.1+mouseY);
		vertex(104+mouseX,66.4+mouseY);
		vertex(100+mouseX,73.1+mouseY);
		vertex(90.6+mouseX,106+mouseY);
		vertex(90.3+mouseX,117+mouseY);
		vertex(95.4+mouseX,102+mouseY);
		vertex(102+mouseX,89.8+mouseY);
		vertex(108+mouseX,81.8+mouseY);
		vertex(113+mouseX,80.2+mouseY);
		vertex(117+mouseX,83.5+mouseY);
		vertex(113+mouseX,89.4+mouseY);
		vertex(111+mouseX,94.7+mouseY);
		vertex(110+mouseX,103+mouseY);
		vertex(115+mouseX,110+mouseY);
		vertex(122+mouseX,111+mouseY);
		vertex(132+mouseX,115+mouseY);
		vertex(143+mouseX,118+mouseY);
		vertex(154+mouseX,123+mouseY);
		vertex(160+mouseX,123+mouseY);
		vertex(166+mouseX,125+mouseY);
		vertex(173+mouseX,122+mouseY);
		vertex(185+mouseX,120+mouseY);
		vertex(196+mouseX,122+mouseY);
		vertex(204+mouseX,114+mouseY);
		vertex(207+mouseX,105+mouseY);
		vertex(218+mouseX,108+mouseY);
		vertex(229+mouseX,110+mouseY);
		vertex(238+mouseX,107+mouseY);
		vertex(247+mouseX,109+mouseY);
		vertex(253+mouseX,114+mouseY);
		vertex(257+mouseX,122+mouseY);
		vertex(265+mouseX,97.3+mouseY);
		vertex(257+mouseX,70.6+mouseY);
		vertex(241+mouseX,46.8+mouseY);
		vertex(216+mouseX,43.8+mouseY);
		vertex(187+mouseX,42.9+mouseY);
		vertex(166+mouseX,40.5+mouseY);
		vertex(152.4+mouseX,40+mouseY);
	endShape();


	//ear (left)
	beginShape();
		fill(193,154,85);
		vertex(134+mouseX,52+mouseY);
		vertex(138+mouseX,36.8+mouseY);
		vertex(139+mouseX,27.8+mouseY);
		vertex(138+mouseX,18.2+mouseY);
		vertex(139+mouseX,7.0+mouseY);
		vertex(146+mouseX,6.8+mouseY);
		vertex(150+mouseX,10.5+mouseY);
		vertex(152+mouseX,14.4+mouseY);
		vertex(156+mouseX,22.1+mouseY);
		vertex(160+mouseX,29.5+mouseY);
		vertex(164+mouseX,34.5+mouseY);
		vertex(170+mouseX,40+mouseY);
	endShape();

	//ear (right)
	beginShape();
		fill(193,154,85);
		vertex(209+mouseX,45.9+mouseY);
		vertex(216+mouseX,43.0+mouseY);
		vertex(222+mouseX,36.6+mouseY);
		vertex(230+mouseX,29.9+mouseY);
		vertex(235+mouseX,24.7+mouseY);
		vertex(242+mouseX,16.3+mouseY);
		vertex(248+mouseX,13.5+mouseY);
		vertex(251+mouseX,12.8+mouseY);
		vertex(259+mouseX,13.9+mouseY);
		vertex(258+mouseX,15.9+mouseY);
		vertex(261+mouseX,24.0+mouseY);
		vertex(263+mouseX,30.2+mouseY);
		vertex(264+mouseX,36.1+mouseY);
		vertex(264.5+mouseX,57.2+mouseY);
		vertex(260+mouseX,65.7+mouseY);
		vertex(259+mouseX,71.7+mouseY);
		vertex(251+mouseX,77.1+mouseY);
		vertex(250+mouseX,87.9+mouseY);
		vertex(241+mouseX,80.7+mouseY);
		vertex(226+mouseX,70.8+mouseY);
		vertex(218+mouseX,60+mouseY);
		vertex(213+mouseX,55.5+mouseY);
		vertex(209+mouseX,45.9+mouseY);
	endShape();

	//eye (left 1)
	beginShape();
		fill(202,196,179);
		vertex(119+mouseX,86.1+mouseY);
		vertex(122+mouseX,82.6+mouseY);
		vertex(124+mouseX,79.5+mouseY);
		vertex(127+mouseX,78.5+mouseY);
		vertex(130+mouseX,78.2+mouseY);
		vertex(133+mouseX,80.9+mouseY);
		vertex(136+mouseX,84.8+mouseY);
		vertex(135+mouseX,90.4+mouseY);
		vertex(132+mouseX,94.2+mouseY);
		vertex(127+mouseX,96.2+mouseY);
		vertex(121+mouseX,93.8+mouseY);
		vertex(119+mouseX,91.2+mouseY);
	endShape();

//eye (left 2)
	beginShape();
		fill(55,52,46);
		vertex(127+mouseX,78.5+mouseY);
		vertex(128+mouseX,78.2+mouseY);
		vertex(135+mouseX,80.9+mouseY);
		vertex(136+mouseX,84.8+mouseY);
		vertex(135+mouseX,90.4+mouseY);
		vertex(132+mouseX,94.2+mouseY);
		vertex(124+mouseX,94+mouseY);
		vertex(123+mouseX,91+mouseY);
		vertex(122+mouseX,89.6+mouseY);
		vertex(124+mouseX,84.3+mouseY);
		vertex(126+mouseX,81.8+mouseY);
		vertex(127+mouseX,78.5+mouseY);
	endShape();

	//eye (right 1)
	beginShape();
		fill(202,196,179);
		vertex(172+mouseX,100+mouseY);
		vertex(175+mouseX,95.6+mouseY);
		vertex(178+mouseX,93.7+mouseY);
		vertex(182+mouseX,90.3+mouseY);
		vertex(186+mouseX,89.5+mouseY);
		vertex(191+mouseX,91.5+mouseY);
		vertex(194+mouseX,93.6+mouseY);
		vertex(197+mouseX,96.4+mouseY);
		vertex(198+mouseX,97.8+mouseY);
		vertex(195+mouseX,102+mouseY);
		vertex(191+mouseX,106+mouseY);
		vertex(185+mouseX,107+mouseY);
		vertex(178+mouseX,106+mouseY);
		vertex(174+mouseX,104+mouseY);
		vertex(172+mouseX,100+mouseY);
	endShape();

	//eye (right 2)
	beginShape();
		fill(55,52,46);
		vertex(183+mouseX,91.4+mouseY);
		vertex(182+mouseX,93.2+mouseY);
		vertex(181+mouseX,95.9+mouseY);
		vertex(180.4+mouseX,99.5+mouseY);
		vertex(180.5+mouseX,102+mouseY);
		vertex(182+mouseX,105+mouseY);
		vertex(187+mouseX,106+mouseY);
		vertex(192+mouseX,105+mouseY);
		vertex(196+mouseX,102+mouseY);
		vertex(198+mouseX,97.8+mouseY);
		vertex(193+mouseX,92.7+mouseY);
		vertex(189+mouseX,90.7+mouseY);
		vertex(183+mouseX,91.4+mouseY);
	endShape();

//nose 1
	beginShape();
		fill(27,26,22);
		vertex(106+mouseX,120+mouseY);
		vertex(108+mouseX,116+mouseY);
		vertex(114+mouseX,116+mouseY);
		vertex(118+mouseX,116.7+mouseY);
		vertex(124+mouseX,118+mouseY);
		vertex(130+mouseX,120+mouseY);
		vertex(133+mouseX,124+mouseY);
		vertex(136+mouseX,129+mouseY);
		vertex(133+mouseX,133+mouseY);
		vertex(128+mouseX,137+mouseY);
		vertex(121+mouseX,139+mouseY);
		vertex(116+mouseX,138+mouseY);
		vertex(112+mouseX,136+mouseY);
		vertex(107+mouseX,133+mouseY);
		vertex(105.7+mouseX,128+mouseY);
		vertex(105.6+mouseX,123+mouseY);
		vertex(106+mouseX,120+mouseY);
	endShape();

//nose 2
	beginShape();
		fill(66,61,54);
		vertex(108+mouseX,116+mouseY);
		vertex(114+mouseX,116+mouseY);
		vertex(118+mouseX,116.7+mouseY);
		vertex(124+mouseX,118+mouseY);
		vertex(130+mouseX,120+mouseY);
		vertex(133+mouseX,124+mouseY);
		vertex(134+mouseX,130+mouseY);
		vertex(137+mouseX,127+mouseY);
		vertex(139+mouseX,125+mouseY);
		vertex(139+mouseX,119+mouseY);
		vertex(134+mouseX,117+mouseY);
		vertex(127+mouseX,113+mouseY);
		vertex(121+mouseX,112+mouseY);
		vertex(115+mouseX,112.4+mouseY);
		vertex(110+mouseX,115+mouseY);
		vertex(108+mouseX,116+mouseY);
	endShape();

//mouse
	beginShape();
		fill(10,11,6);
		vertex(110+mouseX,148+mouseY);
		vertex(117+mouseX,148+mouseY);
		vertex(122+mouseX,149+mouseY);
		vertex(128+mouseX,152+mouseY);
		vertex(133+mouseX,152+mouseY);
		vertex(141+mouseX,155+mouseY);
		vertex(146+mouseX,157+mouseY);
		vertex(156+mouseX,156+mouseY);
		vertex(165+mouseX,156+mouseY);
		vertex(170+mouseX,155+mouseY);
		vertex(170+mouseX,156+mouseY);
		vertex(162+mouseX,157+mouseY);
		vertex(156+mouseX,158+mouseY);
		vertex(145+mouseX,161+mouseY);
		vertex(129+mouseX,161+mouseY);
		vertex(118+mouseX,160+mouseY);
		vertex(112+mouseX,159+mouseY);
		vertex(108+mouseX,154+mouseY);
		vertex(108+mouseX,150+mouseY);
		vertex(110+mouseX,147+mouseY);
	endShape();

//leg
	beginShape();
		fill(10,11,6);
		vertex(110+mouseX,148+mouseY);
		vertex(117+mouseX,148+mouseY);
		vertex(122+mouseX,149+mouseY);
		vertex(128+mouseX,152+mouseY);
		vertex(133+mouseX,152+mouseY);
		vertex(141+mouseX,155+mouseY);
		vertex(146+mouseX,157+mouseY);
		vertex(156+mouseX,156+mouseY);
		vertex(165+mouseX,156+mouseY);
		vertex(170+mouseX,155+mouseY);
		vertex(170+mouseX,156+mouseY);
		vertex(162+mouseX,157+mouseY);
		vertex(156+mouseX,158+mouseY);
		vertex(145+mouseX,161+mouseY);
		vertex(129+mouseX,161+mouseY);
		vertex(118+mouseX,160+mouseY);
		vertex(112+mouseX,159+mouseY);
		vertex(108+mouseX,154+mouseY);
		vertex(108+mouseX,150+mouseY);
		vertex(110+mouseX,147+mouseY);
	endShape();

}

function shapeHusky(){
	noStroke();
	//head
	fill(0);
	beginShape();
	vertex(138.64+mouseX,0.92+mouseY);
	vertex(146.57+mouseX,11.89+mouseY);
	vertex(179.24+mouseX,14.29+mouseY);
	vertex(198.91+mouseX,0+mouseY);
	vertex(202.47+mouseX,3.55+mouseY);
	vertex(184.45+mouseX,15.57+mouseY);
	vertex(194.27+mouseX,32.49+mouseY);
	vertex(203.56+mouseX,57.7+mouseY);
	vertex(201.38+mouseX,71.77+mouseY);
	vertex(194.27+mouseX,80.98+mouseY);
	vertex(188.61+mouseX,49.58+mouseY);
	vertex(155.27+mouseX,16.93+mouseY);
	vertex(142.61+mouseX,20.73+mouseY);
	vertex(131.45+mouseX,31.89+mouseY);
	vertex(123.23+mouseX,32.32+mouseY);
	vertex(113.74+mouseX,45.1+mouseY);
	vertex(116.16+mouseX,31.02+mouseY);
	vertex(138.73+mouseX,14.28+mouseY);
	vertex(134.32+mouseX,2.49+mouseY);
	vertex(138.64+mouseX,0.92+mouseY);
	endShape();
	//ear
	fill(255);
	beginShape();
	vertex(202.47+mouseX,3.55+mouseY);
	vertex(202.47+mouseX,25.03+mouseY);
	vertex(194.27+mouseX,32.49+mouseY);
	vertex(184.45+mouseX,15.57+mouseY);
	vertex(202.47+mouseX,3.55+mouseY);
	endShape();

	//face
	fill(255);
	beginShape();
	vertex(155.27+mouseX,16.93+mouseY);
	vertex(188.61+mouseX,49.58+mouseY);
	vertex(194.27+mouseX,80.98+mouseY);
	vertex(187.17+mouseX,88.77+mouseY);
	vertex(192.53+mouseX,112.14+mouseY);
	vertex(192.13+mouseX,152.78+mouseY);
	vertex(187.17+mouseX,191.07+mouseY);
	vertex(219.68+mouseX,226.36+mouseY);
	vertex(239.26+mouseX,262.43+mouseY);
	vertex(237.36+mouseX,274.47+mouseY);
	vertex(212.1+mouseX,263.07+mouseY);
	vertex(200.49+mouseX,233.62+mouseY);
	vertex(161.13+mouseX,219.11+mouseY);
	vertex(157.31+mouseX,212.2+mouseY);
	vertex(147.4+mouseX,232.31+mouseY);
	vertex(174.24+mouseX,285.43+mouseY);
	vertex(171.82+mouseX,293.72+mouseY);
	vertex(172.35+mouseX,301.63+mouseY);
	vertex(149.91+mouseX,326.47+mouseY);
	vertex(156.66+mouseX,333.88+mouseY);
	vertex(198.93+mouseX,349.13+mouseY);
	vertex(196.54+mouseX,355.89+mouseY);
	vertex(177.8+mouseX,359.81+mouseY);
	vertex(149.25+mouseX,351.97+mouseY);
	vertex(122.34+mouseX,334.66+mouseY);
	vertex(121.7+mouseX,320.26+mouseY);
	vertex(103.72+mouseX,326.47+mouseY);
	vertex(88.46+mouseX,318.85+mouseY);
	vertex(79.31+mouseX,321.68+mouseY);
	vertex(61.66+mouseX,341.29+mouseY);
	vertex(54.25+mouseX,367.38+mouseY);
	vertex(57.74+mouseX,378.98+mouseY);
	vertex(34.92+mouseX,412.54+mouseY);
	vertex(16.12+mouseX,417.55+mouseY);
	vertex(0+mouseX,411.89+mouseY);
	vertex(8.28+mouseX,401.43+mouseY);
	vertex(18.96+mouseX,399.68+mouseY);
	vertex(31.92+mouseX,391.4+mouseY);
	vertex(37.92+mouseX,376.95+mouseY);
	vertex(25.92+mouseX,357.81+mouseY);
	vertex(24.19+mouseX,345.96+mouseY);
	vertex(46.48+mouseX,305.71+mouseY);
	vertex(54.32+mouseX,284.89+mouseY);
	vertex(52.75+mouseX,261.38+mouseY);
	vertex(64.17+mouseX,253.54+mouseY);
	vertex(90.14+mouseX,252.42+mouseY);
	vertex(101.11+mouseX,228.69+mouseY);
	vertex(86.11+mouseX,207.42+mouseY);
	vertex(76.26+mouseX,177.42+mouseY);
	vertex(73.8+mouseX,145.18+mouseY);
	vertex(82.31+mouseX,133.54+mouseY);
	vertex(89.92+mouseX,162.87+mouseY);
	vertex(95.52+mouseX,142.04+mouseY);
	vertex(96.41+mouseX,119.43+mouseY);
	vertex(113.25+mouseX,110.25+mouseY);
	vertex(102.36+mouseX,86.6+mouseY);
	vertex(110.34+mouseX,68.14+mouseY);
	vertex(113.74+mouseX,45.1+mouseY);
	vertex(123.23+mouseX,32.32+mouseY);
	vertex(131.45+mouseX,31.89+mouseY);
	vertex(142.61+mouseX,20.73+mouseY);
	vertex(155.27+mouseX,16.93+mouseY);
	endShape();

	fill(0);
	beginShape();
	vertex(133.35+mouseX,33.37+mouseY);
	vertex(138.41+mouseX,32.1+mouseY);
	vertex(141.57+mouseX,36.32+mouseY);
	vertex(139.04+mouseX,38.7+mouseY);
	vertex(133.14+mouseX,39.9+mouseY);
	vertex(133.35+mouseX,33.37+mouseY);
	endShape();
	beginShape();
	vertex(163.91+mouseX,29.79+mouseY);
	vertex(170.23+mouseX,34.21+mouseY);
	vertex(161.53+mouseX,39.3+mouseY);
	vertex(157.58+mouseX,35.27+mouseY);
	vertex(163.91+mouseX,29.79+mouseY);
	endShape();
	beginShape();
	vertex(136.52+mouseX,42.64+mouseY);
	vertex(142.61+mouseX,42.64+mouseY);
	vertex(148.94+mouseX,46.64+mouseY);
	vertex(140.3+mouseX,57.81+mouseY);
	vertex(134.41+mouseX,57.6+mouseY);
	vertex(132.3+mouseX,46,43+mouseY);
	vertex(136.52+mouseX,42.64+mouseY);
	endShape();

	fill(0);
	beginShape();
	vertex(139.57+mouseX,61.71+mouseY);
	vertex(147.68+mouseX,67.09+mouseY);
	vertex(160.74+mouseX,67.09+mouseY);
	vertex(157.79+mouseX,83.31+mouseY);
	vertex(144.52+mouseX,85.74+mouseY);
	vertex(139.57+mouseX,78.93+mouseY);
	vertex(139.57+mouseX,61.71+mouseY);
	endShape();

	fill(224,108,97);
	beginShape();
	vertex(143.62+mouseX,64.4+mouseY);
	vertex(147.68+mouseX,67.09+mouseY);
	vertex(154.21+mouseX,67.09+mouseY);
	vertex(151.16+mouseX,82.33+mouseY);
	vertex(145.77+mouseX,83.32+mouseY);
	vertex(142.61+mouseX,78.93+mouseY);
	vertex(143.62+mouseX,64.4+mouseY);
	endShape();

	fill(0);
	beginShape();
	vertex(102.36+mouseX,86.6+mouseY);
	vertex(113.25+mouseX,110.25+mouseY);
	vertex(96.41+mouseX,119.43+mouseY);
	vertex(95.52+mouseX,142.04+mouseY);
	vertex(89.92+mouseX,162.87+mouseY);
	vertex(82.31+mouseX,133.54+mouseY);
	vertex(73.8+mouseX,145.18+mouseY);
	vertex(76.26+mouseX,177.42+mouseY);
	vertex(86.11+mouseX,207.42+mouseY);
	vertex(101.11+mouseX,228.69+mouseY);
	vertex(90.14+mouseX,252.42+mouseY);
	vertex(64.17+mouseX,253.54+mouseY);
	vertex(52.75+mouseX,261.38+mouseY);
	vertex(54.32+mouseX,284.89+mouseY);
	vertex(46.48+mouseX,305.71+mouseY);
	vertex(24.19+mouseX,345.96+mouseY);
	vertex(20.09+mouseX,317.78+mouseY);
	vertex(31.74+mouseX,287.94+mouseY);
	vertex(30.28+mouseX,261+mouseY);
	vertex(53.57+mouseX,227.53+mouseY);
	vertex(63.03+mouseX,142.38+mouseY);
	vertex(87.05+mouseX,122+mouseY);
	vertex(102.36+mouseX,86.6+mouseY);
	endShape();

}
}