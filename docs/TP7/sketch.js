
// leeres Array
let myarray = [];

// array mit 4 Elementen
let names = ["Anna", "Berta", "Cem", "Dora", "Peter"];

let posXArray = [30, 80, 130, 180];

let namesIndex = 0;

let randomValues = [];

// js Objekte
let person = {};
person.name = "Erich";
person.age = 22;
person.city = "Berlin";
person.kurs = ["Interactive Media", "Webentwicklung", "Design Grundlagen"];

let button = {
  x: 350,
  y: 100,
  width: 40,
  height: 30,
  color: "#ff0000",
  text: "Klick"
};

function preload() {
  person.image = loadImage("assets/erich.png");
}

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);

  // neuen Eintrag ans Ende des Arrays anhängen
  names.push("Eva");

  // befülle das randomValues Array mit 10 Zufallszahlen
  for(let i = 0; i<3600; i++){
    randomValues.push( random(height) );
  }
}

function draw() {
  background(220);

  textAlign(CENTER, CENTER);
  text(names[namesIndex], width / 2, height / 2);

  /* hier wird bei jedem Frame der Index erhöht
     also 60 mal pro Sekunde
  if(mouseIsPressed){
    namesIndex ++;
    console.log("namesIndex: " + namesIndex);
  }*/

  // für jeden Wert in posXArray ein Kreis zeichnen
  let index = 0;

  while (index < posXArray.length) {
    ellipse(posXArray[index], 0, 20, 20);
    index++;
  }

  // FOR Schleife statt WHILE Schleife
  // for(VARIABLENDEFINITION; BEDINGUNG; INKREMENTIERUNG){ ... }
  for(let i = 0; i < posXArray.length; i++){
    ellipse(posXArray[i], 40, 20, 20);
  }

  // foreach Schleife
  // für jedes Element in posXArray führe den Codeblock aus
  posXArray.forEach(element => {
      ellipse(element, 120, 20, 20);
  });



  textAlign(LEFT);
  text(person.name, 30, 100);
  text(person.age, 30, 120);
  text(person.city, 30, 140);
  image(person.image, 30, 220, person.image.width / 4, person.image.height / 4);
  // text(person.alter, 30, 160);
  // console.log(person.alter);

  fill(button.color);
  rect(button.x, button.y, button.width, button.height);
  textAlign(CENTER, CENTER);
  fill(0);
  text(button.text, button.x + button.width / 2, button.y + button.height / 2);


  push();
  stroke(255, 0, 0, 30);
  strokeWeight(5);
  strokeCap(SQUARE);

  translate(600, 200);
  // für jeden Wert in randomValues eine line zeichnen
  for( let i = 0; i < randomValues.length; i++){
    line(0, 0, 0, -randomValues[i]);
    rotate(1);
  }
  pop();
}

// Event Listener für Mausklick
// wird nur einmal pro Klick ausgeführt
function mousePressed() {
  namesIndex++;
  if (namesIndex >= names.length) {
    namesIndex = 0;
  }
  console.log("namesIndex: " + namesIndex);

  posXArray.push(mouseX);
}

// Event Listener für Tastendruck
function keyPressed() {
  // letztes Element entfernen
  posXArray.pop();
}