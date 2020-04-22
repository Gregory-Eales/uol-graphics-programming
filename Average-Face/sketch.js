var imgs = [];
var avgImg;
var numOfImages = 30;
var index;
var redC;
var sumR = 0;
var sumG = 0;
var sumB = 0;

//////////////////////////////////////////////////////////
function preload() { // preload() runs once
	for(var i=0; i<29; i++)
	{
		imgs.push(loadImage('assets/' + i + '.jpg'));
	}
}
//////////////////////////////////////////////////////////
function setup() {
    createCanvas(2*imgs[0].width, imgs[0].height);
    pixelDensity(1);
    avgImg = createGraphics(imgs[0].width, imgs[0].height);
}
//////////////////////////////////////////////////////////
function draw() {
    
    background(125);
    image(imgs[0], 0, 0);
    
    for(var i=0; i<imgs.length; i++)
    {
        imgs[i].loadPixels();
    }

    avgImg.loadPixels();
    
    for (let i = 0; i < avgImg.width; i++)
    {
        for (let j = 0; j < avgImg.height; j++)
        {
            
   
            index = (avgImg.width*j + i)*4
            sumR = 0.0;
            sumG = 0.0;
            sumB = 0.0;
            for(let k=0; k<imgs.length; k++)
            {
               
                sumR += imgs[k].pixels[index];
                sumG += imgs[k].pixels[index+1];
                sumB += imgs[k].pixels[index+2];
                
            }
                
           
            avgImg.pixels[index] = sumR/imgs.length;
            avgImg.pixels[index+1] = sumG/imgs.length;
            avgImg.pixels[index+2] = sumB/imgs.length;
            
            avgImg.pixels[index+3] = 255; 
            
            
            
        }
    }
    
    console.log(sumB, sumG, sumR, imgs.length)
    avgImg.updatePixels();
    console.log(avgImg.pixels)
    image(avgImg, imgs[0].width, 0, imgs[0].width, imgs[0].height);
    noLoop();
}
