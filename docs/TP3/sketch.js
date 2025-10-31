// Elementare Variablentypen
// Boolean bool : true oder false
// Integer int : ganze Zahlen 1, 2, 3, -5, 0, ...
// Float float : Kommazahlen 0.5, 3.14, -2.7, ...
// Character char : einzelne Zeichen 'a', 'b', '1', '#', ' ', ...

// Objekten
// String "Zeichenkette" : Text "Hallo", "123", "P5.js ist toll!", "", ..
// p5.image : Bildobjekte
// p5.font : Schriftartobjekte

// in Typstrengen Programmiersprachen muss der Typ der Variable angegeben werden
// String myname;

// in JavaScript geben wir nur "let" als Schlüsselwort an
let myName;
let myAge = 25;

let xPosition = 100;
let font;
let gif;


function preload() {
  font = loadFont("assets/Merriweather.ttf");
  gif = loadImage("assets/pac-man-halloween.gif");
}


function setup() {
  createCanvas(400, 400);
  myName = "Max Mustermann";

  textFont(font);
  textSize(32);

  gif.pause();
}

function draw() {
  background(220);
  ellipse(xPosition, 300, 60, 60);

  // Bild in halber Größe zeichnen
  // zugriff auf die "Felder" .width und .height
  image(gif, 50, 100, gif.width/2, gif.height/2);

  fill(255);
  // mit + kann ich Strings miteinander verketten
  text("Hello " + myName, 20, 50);

  xPosition = xPosition + 2;
  if (xPosition >= width + 30) {
    xPosition = -30;
  }

  if(mouseIsPressed){
    gif.play();
  } else {
    gif.pause();
  }
}
