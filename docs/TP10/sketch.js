let input;

function setup() {
  let canvas = createCanvas(400, 400);
  // find the element with id 'p5jscanvas' and attach the canvas to it
  canvas.parent('p5jscanvas');
  input = createInput("hier Wort eingeben", "text");
  input.parent('eingebeFeld');
  //input.position(width/2, height/2);
}

function draw() {
  // background(220);
  ellipse(mouseX, mouseY, 50, 50);

//  text(input.value(), 10, 10);
  if(input.value().trim().toLowerCase() == "frauen"){
    rect(0, 0, 100, 100);
  }
}
