var total_x = 800
var total_y = 200
var band_w = 22
var edge = 5
//middle circle color
var colour_library_1 = [[118,82,110],
						[230,198,86], 
						[164,113,153], 
						[150,143,149], 
						[112,125,178],  
						[95,70,57], 
						[203,118,128], 
						[133,172,212]
						]
//left circle color
var colour_library_2 = [[189,194,224],
						[215,134,169], 
						[103,136,194], 
						[198,104,114], 
						[213,208,150],  
						[116,155,87], 
						[249,241,216], 
						[171,169,173]
						]
//right circle color 
var colour_library_3 = [[76,72,84],
						[163,155,154], 
						[192,120,75], 
						[74,80,139], 
						[217,163,75],  
						[188,189,149], 
						[183,147,94], 
						[203,107,188]
						]
function setup() {
  createCanvas(total_x, total_y)
}

function draw() {
	noStroke();
	//middle circle
	for(var r = total_y-edge; r >= 0; r-= band_w){
		var cir_num = Math.floor((r)/band_w);
		
		fill(colour_library_1[cir_num%8][0], 
			 colour_library_1[cir_num%8][1], 
			 colour_library_1[cir_num%8][2],
			 colour_library_1[cir_num%8][3], 
			 colour_library_1[cir_num%8][4], 
			 colour_library_1[cir_num%8][5],
			 colour_library_1[cir_num%8][6], 
			 colour_library_1[cir_num%8][7]);
		ellipse(total_x/2,total_y/2,r,r);
	}
	//left circle
	for(var r = total_y-edge; r >= 0; r-= band_w){
		var cir_num = Math.floor((r)/band_w);
		
		fill(colour_library_2[cir_num%8][0], 
			 colour_library_2[cir_num%8][1], 
			 colour_library_2[cir_num%8][2],
			 colour_library_2[cir_num%8][3], 
			 colour_library_2[cir_num%8][4], 
			 colour_library_2[cir_num%8][5],
			 colour_library_2[cir_num%8][6], 
			 colour_library_2[cir_num%8][7]);
		ellipse(total_x/2.7,0,r,r);
	}
	//right circle
	for(var r = total_y-edge; r >= 0; r-= band_w){
		var cir_num = Math.floor((r)/band_w);
		
		fill(colour_library_3[cir_num%8][0], 
			 colour_library_3[cir_num%8][1], 
			 colour_library_3[cir_num%8][2],
			 colour_library_3[cir_num%8][3], 
			 colour_library_3[cir_num%8][4], 
			 colour_library_3[cir_num%8][5],
			 colour_library_3[cir_num%8][6], 
			 colour_library_3[cir_num%8][7]);
		ellipse(total_x*0.63,total_y,r,r);
	}
	//light blue semi circle 
	fill(189,194,224);
	rect(200,0,100,13);
	rect(290,0,13,90);
	//orange rect
	fill(255,161,79);
	rect(303,0,13,97);
	rect(303,0,95,13);
	rect(303,84,95,13);
	rect(388,0,13,97);
	//purple semi circle
	fill(121,85,114);
	rect(303,97,97,13);
	rect(388,97,13,97);
	//dark green semi circle
	fill(81,117,143);
	rect(401,0,13,97);
	rect(401,84,97,13);
	noFill();
	stroke(81,117,143)
	strokeWeight(10);
	arc(total_x/2,total_y/2,200,200,PI+0.55*PI,TWO_PI*.985);
	//grey rect
	noStroke();
	fill(179,174,169);
	rect(401,97,13,102);
	rect(490,96,13,110);
	rect(401,96,100,13);
	rect(401,190,100,13);
	//pink semi circle 
	fill(200,104,118);
	rect(502,190,100,13);
	rect(502,97,13,100);
	noFill();
	stroke(200,104,118)
	strokeWeight(10);
	arc(502,200,200,200,PI+0.548*PI,TWO_PI);

}