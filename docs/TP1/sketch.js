// ich bin ein einzeiliger Kommentar

/*
ich bin ein
mehrzeiliger
Kommentar
*/

function setup() {
  createCanvas(500, 400);
  
  // statt in Bogenmaß mit Gradzahl arbeiten
  // DEGREES / RADIANS
  angleMode(DEGREES);
  
  // Übermalt das Canas in der Farbe
  // rot 0, grün 0 und blau 200 
  // Rot, grün und blau jeweils Werte von 0 - 255
  background(0, 200, 200);
  
  // Füllfarbe
  // fill(red, green, blau, alpha);
  // stroke(red, green, blau, alpha);
  fill(255, 100, 0);
  stroke(255);
  rect(100, 50, 50, 30);
  
  ellipse(100, 50, 50, 30);
  
  // Positionsreferenz für Ellipsen und Bögen umstellen -> CENTER, CORNER, ...
  // stellt den Modus ab dem Aufruf um, alles davor wird in der vorherigen / default Einstellung gezeichnet
  ellipseMode(CORNER);
  
  // Füllfarbe mit Transparenz
  fill(0, 0, 255, 100);
  ellipse(100, 50, 100, 100);
  
  // analog dazu rectMode -> CENTER, CORNER ...
  
  
  noFill();
  noStroke();
  
  
  stroke(50, 50, 255);
  triangle(300, 50, 300, 300, 50, 300);
  

  // beachte bei line und point 
  // haben keine Füllung nur Kontur
  line(50, 200, 400, 200);
  
  strokeWeight(10);
  point(420, 100);
  
  
  //noStroke();
  fill(255, 255, 0);
  // Winkel mit angleMode(DEGREES) auf Gradzahlen umstellen (default ist RADIANS)
  // Bogen: x, y, w, h, startWinkel, endwinkel
  arc(400, 300, 100, 100, 45, 360 - 45, PIE);
  
  
  
}

function draw() {
}