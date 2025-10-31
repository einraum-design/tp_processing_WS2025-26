
let xPos = 200;
let yPos = 200;
let xSpeed = 3;
let ySpeed = 2;
let radius = 20;


function setup() {

  createCanvas(400, 400);

  // zahl = random(START, END); -> zufällige Zahl zwischen START und END
  // zahl = random(END); -> zufällige Zahl zwischen 0 und END
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);
  radius = random(10, 50);

}

function draw() {
  //background(220);
  
  ellipse(xPos, yPos, radius * 2, radius * 2);

  xPos = xPos + xSpeed; 
  yPos += ySpeed;
  // Kurzschreibweise:
  // xPos += xSpeed;

  // Verknüpfungsoperatoren um Bedingungen zu verbinden
  // ConditionA && ConditionB -> UND -> wenn ConditionA UND ConditionB wahr sind
  // ConditionA || ConditionB -> ODER -> wenn ConditionA ODER ConditionB wahr ist
  // (Bei ODER dürfen auch beide Bedingungen wahr sein)

  /*if(xPos + radius >= width){
    xSpeed = -xSpeed;
  }
  if(xPos - radius <= 0){
    xSpeed = -xSpeed;
  }*/
  // wenn eine der beiden Fälle eintritt, dann soll die Richtung geändert werden
  if(xPos + radius >= width  ||  xPos - radius <= 0){
    xSpeed = -xSpeed;
  }

  /*if(yPos + radius >= height){  
    ySpeed = -ySpeed;
  }
  if(yPos - radius <= 0){
    ySpeed = -ySpeed;
  }*/
  if(yPos + radius >= height || yPos - radius <= 0){
    ySpeed = -ySpeed;
  }


}
