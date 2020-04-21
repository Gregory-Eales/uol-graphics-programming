var stepSize = 20;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){

	noStroke();
	var red = color(255, 0, 0);
	var blue = color(0, 0, 255);
	var scale = 1/(50+mouseX*2);

	for(var i=0; i<25; i++)
	  {
	  	for(var j=0; j<25; j++)
	  	{
	  		fill(lerpColor(blue, red, noise(i/25, j/25, frameCount*scale)));
	  		rect(i*stepSize, j*stepSize, stepSize, stepSize);
	  	}
	  }


}
///////////////////////////////////////////////////////////////////////
function compassGrid(){

	stroke(0);
	var s = 1/(1000+mouseX*100);
	translate(12.5, 12.5);

	for(var i=0; i<25; i++)
	  {
	  	for(var j=0; j<25; j++)
	  	{
	  		push();
	  		translate(i*stepSize, j*stepSize);
			rotate(map(noise(i/250, j/250, frameCount*s),0, 1, 0, 720));
	  		line(0, 0, stepSize, stepSize-stepSize);
	  		pop();
	  	}	
	  }
	
  
}
