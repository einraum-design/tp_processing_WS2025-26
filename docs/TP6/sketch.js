function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  // rotwert soll abhängig von der Mausposition sein
  // Bei MouseX = 0 soll rotwert 0 sein 
  // Bei MouseX = width soll rotwert 255 sein

  let rotwert = map(mouseX, 0, width, 255, 0);
  fill(rotwert, 0, 0);
  ellipse(200, 400, 100, 100);


  ellipse(10, 200, 20, 20);
  ellipse(30, 200, 20, 20);
  ellipse(50, 200, 20, 20);
  ellipse(70, 200, 20, 20);
  ellipse(90, 200, 20, 20);

  // while Schleife
  // while(CONDITION) { solange die CONDITION true ist, wird der code immer wieder ausgeführt }
  
  // Counter Variable
  let x = 10;
  // Bedingung
  while(x < width){
    let redvalue = map( x, 10, width - 10, 0, 255);
    fill(redvalue, 0, 0);
    ellipse(x, 250, 20, 20);
    // Inkrementierung
    x = x + 20;
  }

  let peakLength = 170;
  let triangleBase = mouseY/4;
  let peakCount = round(mouseX/10);


  push();

  translate(600, 140);
  noStroke();
  fill(255, 255, 0);

  let i = 0;
  while(i < peakCount){
    triangle(0, -peakLength, triangleBase/2, 0, -triangleBase/2, 0);
    rotate(360.0 / peakCount);
    i = i + 1;
    // i += 1; // shortcut
    // i++;    // even shorter shortcut
  }

  pop();
}
