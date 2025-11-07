function setup() {
  angleMode(DEGREES);
  createCanvas(800, 800);
}

function draw() {
 // background(220);
  fill(255);
  rect(200, 250, 100, 70);


  fill(255, 0, 0);
  // move the origin of the coordinate system to (200, 250)
  translate(200, 250);

  // rotate the coordinate system by an angle based on mouseX
  rotate(mouseX);

  //rectMode(CENTER);
  rect(0, 0, 100, 70);

  fill(0, 0, 255);
  rect(-50, -37, 100, 70);


  fill(0, 255, 0);
  rect(0, 0, 200, 40); 

  translate(200, 0);
  rotate(mouseY);
  rect(0, 0, 180, 25);

  // resets all transformations (translate / rotate / scale ) 
  // applied to the coordinate system 
  resetMatrix();
  fill(0);
  textSize(32);
  text("Hello World", 400, 300);
}
