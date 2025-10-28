// Processing Variablen
// mouseX -> aktuelle Maus x-Koordinate innerhalb des canvas Elements
// mouseY -> aktuelle Maus y-Koordinate ...
// width -> Breite vom Canvas Element
// height -> Höhe vom Canvas Element
// displayWidth, displayHeight -> Bildschirm
// windowWidth, windowHeight -> Fenster

// mousePressed -> Boolwerte: true / false


function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  
  // Standart ist 60 fps
  // frameRate(1);
}

function draw() {
  background(220);
  
  // if Condition
  // if(CONDITION){ wenn die CONDITION erfüllt ist, wird der Inhalt des Rumpfs ausgeführt }
  // an die if Bedingung kann immer noch eine else Block angehängt werden
  
  if(mouseIsPressed){
    fill(0, 0, mouseY, 40);
  } else {
    fill(255, mouseX, 0, 10);
  }
  
  
  ellipse(mouseX, mouseY, 100, mouseX);
  
  
  fill(255);
  
  // Rechenzeichen:
  // + - * / % (Modulo)
  
  rectMode(CENTER);
  rect(width/2, height/2, 100, 100);
  
  // Vergleichsoperatoren
  // A == B --> A ist gleich B
  // A < B  --> A ist kleiner B
  // A <= B --> A ist kleiner oder gleich B
  // A > B  --> A ist größer B
  // A >= B --> A ist größer oder gleich B
  // A != B --> A ist nicht gleich B
  
  if(mouseY > height/2){
    rect(width/2, height - 50/2, width, 50);
  } 
}