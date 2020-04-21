////////////////////////////////////////////////////////////////
function setupGround(){
  ground = Bodies.rectangle(500, 600, 1000, 40, {
    isStatic: true, angle: 0
  });
  World.add(engine.world, [ground]);
}

////////////////////////////////////////////////////////////////
function drawGround(){
  push();
  fill(128);
  drawVertices(ground.vertices);
  pop();
}
////////////////////////////////////////////////////////////////
function setupPropeller(){
  propeller = Bodies.rectangle(150, 480, 200, 15, {isStatic:true, angle:angle});
  World.add(engine.world, [propeller]);

}
////////////////////////////////////////////////////////////////
//updates and draws the propeller
function drawPropeller(){
  push();
  fill(128);
  angle += angleSpeed
  Body.setAngle(propeller, angle);
  Body.setAngularVelocity(propeller, angleSpeed);
  drawVertices(propeller.vertices);
  pop();
}
////////////////////////////////////////////////////////////////
function setupBird(){
  var bird = Bodies.circle(mouseX, mouseY, 20, {friction: 0,
      restitution: 0.95 });
  Matter.Body.setMass(bird, bird.mass*10);
  World.add(engine.world, [bird]);
  birds.push(bird);
}
////////////////////////////////////////////////////////////////
function drawBirds(){
  push();
  for(var i=0; i<birds.length; i++)
  {
    
    if(isOffScreen(birds[i]) )
    {
      removeFromWorld(birds[i]);
      birds.splice(i, 1)
      i-=1;
    }

    else
    {
      drawVertices(birds[i].vertices)
    }

  }
  pop();
}
////////////////////////////////////////////////////////////////
//creates a tower of boxes
function setupTower(){
  //you code here
  for(var i=0; i<6; i++)
  {
    for(var j=0; j<3; j++)
    { 
      colors.push(color(0, random(150,255), 0));
      boxes.push(Bodies.rectangle(750+j*80, 0, 80, 80));
    }
  }
  World.add(engine.world, boxes);
}
////////////////////////////////////////////////////////////////
//draws tower of boxes
function drawTower(){
  push();
  for(var i=0; i<18; i++)
  { 
    fill(colors[i]);
    drawVertices(boxes[i].vertices);
  }
  pop();
}
////////////////////////////////////////////////////////////////
function setupSlingshot(){
//your code here
slingshotBird = Bodies.circle(150, 200, 20, {friction: 0, restitution: 0.95 });
Matter.Body.setMass(slingshotBird , slingshotBird.mass*10);

var options = {bodyB:slingshotBird, pointA:{x:150, y:200}, stiffness:0.01, length:10,
 damping:0.0001}
slingshotConstraint = Constraint.create(options);




World.add(engine.world, [slingshotBird, slingshotConstraint]);
}
////////////////////////////////////////////////////////////////
//draws slingshot bird and its constraint
function drawSlingshot(){
  push();
  // your code here
  fill(255, 255, 255);
  drawVertices(slingshotBird.vertices);
  drawConstraint(slingshotConstraint);
  pop();
}
/////////////////////////////////////////////////////////////////
function setupMouseInteraction(){
  var mouse = Mouse.create(canvas.elt);
  var mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);
}
