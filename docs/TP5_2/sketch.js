function setup() {
  angleMode(DEGREES);
  // create a WEBGL canvas -> we can now rotate and move in 3D space
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);

  // mit Renderer WEBGL ist der Ursprung (0,0) in der Mitte des Canvas
  // und wir brauchen kein translate(width/2, height/2); auf die Mitte ...
  //translate(width/2, height/2);
  // skalieren und spiegeln des Koordinatensystems ..
  //scale(-2, 0.5);

  lights();

  pointLight(255, 0, 0, 50, -20, 20);

  rotateY(mouseX); // rotate the clock based on mouseX position


  fill(200);
  noStroke();
  ellipse(0, 0, width, width, 120);
  

  translate(0, 0, 10); // move "into" the screen by 10 units to avoid z-fighting
  sphere(20);
  // second() -> 0 - 59 seconds from current time 

  // OUTPUT = map(INPUT, INPUT_MIN, INPUT_MAX, OUTPUT_MIN, OUTPUT_MAX);
  let secondRotation = map(second(), 0, 60, 0, 360);
  rotate(secondRotation);

  strokeWeight(1.5);
  stroke(255, 0, 0);
  line( 0, 0, 0, -height/2);


  // reset the rotation of the second digit
  // Method 1: resetMatrix();
  // Method 2: rotate the secondRotation back
  rotate(-secondRotation);



  // Method 3: push() and pop()
  // each push() must have a corresponding pop()
  // save our current transformation state
  push();
  // minute() -> 0 - 59 minutes from current time 
  let minuteRotation = map(minute() + second()/60.0, 0, 60, 0, 360);
  rotate(minuteRotation);
  
  strokeWeight(4);
  stroke(0);
  line( 0, 0, 0, -height*0.4);

  // restore our previous transformation state
  pop();

  push();
  // hour() -> 0 - 23 hours from current time
  let hourRotation = map(hour() + minute()/60.0 , 0, 12, 0, 360);

  rotate(hourRotation);
  strokeWeight(6);
  stroke(0);
  line( 0, 0, 0, -height*0.3);
  pop();


}
