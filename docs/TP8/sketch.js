function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  star(100, 150, 60);
  star(300, 100, 100, 5);
  star(220, 300, 30, 12, color(255, 0, 0));

  // 2. Funktion soll ein Objekt "Person" empfangen und eine Begrüß8ng ausgeben
  let person1 = {
    name: "Anna",
    greeting: "Hallo",
    x: 100,
    y: 200
  };  

  let person2 = {
    name: "Peter",
    greeting: "Hey",
    x: 300,
    y: 250
  };  

  greet(person1);
  greet(person2);


  // function with return value
  let val = sum(4, 6);
  text("Ergebnis: " + val, 200, 50);
}


// Definition of new function "star"
// keyword "function" + functionName + ( optional parameters ) + { BODY };
function star(x, y, radius, peaks = 7, c = color(255, 255, 0)){
  //let x = xPos;
  //let y = yPos;
  //let peaks = 33;
  //let radius = 80;
  push();
  translate(x, y);
  fill(c);
  noStroke();
  
  for(let i = 0; i<peaks; i++){
    triangle(0, -radius, radius*0.1, 0, -radius*0.1, 0);
    rotate(360.0/peaks);
  }
  pop();
}

function greet(o){
  textAlign(CENTER, CENTER);
  text(o.greeting + " " + o.name , o.x, o.y);
}

function sum(a, b){
  let result = a + b;

  // return the result to the caller
  // keywoard "return"
  return result;
}