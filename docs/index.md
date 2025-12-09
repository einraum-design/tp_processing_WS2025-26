## 24.10.2025 – Einfache Formen und Farben
- [TP 1](https://einraum-design.github.io/tp_processing_WS2025-26/TP1/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP1/sketch.js)


### Kommentare  
werden vom Compiler ignoriert:
```
// one line comment
```

``` 
/* block comment 
 long 
 comment 
 to 
 explaine
 something  
or to 
ignore 
a longer
part of 
the application */
```


### Sketchgröße

Die Fenstergröße einer Anwendung mit der createCanvas() Funktion definiert.
Der erste Parameter ist die Skechtbreite, der zweite die Höhe. Alle Größen- und Positionsangaben sind Pixelmaße.
```
createCanvas(800, 600);
```
  
Die createCanvas Function wird bin bestimmte Fällen noch mit einem dritten Parameter aufgerufen.
zB. Wenn der Sketch ein PDF erstellt, eine 3D Szene gezeigt oder ein performanterer Renderer genutzt werden soll.



### Shapes

Die Rechtecks Funktion kann mit 
- 4 Parametern: xPosition, yPosition, width, height
- 5 Parametern: xPosition, yPosition, width, height, cornerRadius
- 8 Parametern: xPosition, yPosition, width, height, cornerRadius1, cornerRadius2, cornerRadius3, cornerRadius4
aufgerufen werden.


Standartmäßig wird das Rechteck von der linken oberen Ecke als Referenzpunkt gezeichnet.

Über den rectMode() lässt sich das aber auch auf Zeichnen von der Mitte aus umstellen.

```
rectMode(CENTER); // alle Rechtecke nach dem Aufruf werden von der Rechtecks Mitte aus
rectMode(CORNER); // (Processing default)alle Rechtecke nach dem Aufruf werden von der linken oberen Ecke aus gezeichnet
```

Über den ellipseMode() lässt sich das aber auch auf Zeichnen von der linken oberen Ecke aus umstellen.

```
ellipseMode(CENTER); // (Processing default) alle Rechtecke nach dem Aufruf werden von der Rechtecks Mitte aus
ellipseMode(CORNER); // alle Rechtecke nach dem Aufruf werden von der linken oberen Ecke aus gezeichnet
```

Wechsel vom ellipseMode / rectMode wirkt sich immer auf die nach dem Aufruf gezeichneten Formen aus.


Hinweis zu arc():
Die Winkel von Start und Ende vom Bogen werden nicht in Grad sondern in Bogenmaß erwartet. 
Ihr könnt euch mit der Funktion radians(GRADZAHL) eine Gradzahl in Bogenmaß umrechnen lassen.
```
// arc (xPosition, yPosition, breite, höhe, Startwinkel, Endwinkel, Zeichentyp)  
arc(300, 300, 400, 400, radians(45), radians(360-45), PIE);
```


Colors
Standardeinstellung von Processing ist, dass alle Formen mit einer weißen Füllfarbe und schwarzer Kontur mit 1px Strichstärke gezeichnet werden.

Um eigene Farbe für Formen festzulegen gibt es die fill und stroke Funktionen.
Standartmäßig nutzt Processing das RGB Farbsystem und erwartet Zahlen im 8Bit Bereich als Farbwerte: 0 - 255
(Ihr könnt den Zahlenbereich und auch das Farbsystem mit der coloMode() Funktion umstellen.)

fill() und stroke() können mit 
- 1 Parameter aufgerufen werden: Grauwert - schwarz bis weiß - 0 - 255
- 3 Parametern: rotwert, grünwert, blauwert -> je 0 - 255
- 4 Parametern: rotwert, grünwert, blauwert, alpha -> je 0 - 255. Alpha definiert die Transparenz.

fill() und stroke() müssen jeweils bevor eine Form gezeichnet wird festgelegt werden. Nach einem Aufruf werden alle Formen in diesen Farben gezeichnet, bis fill() oder stroke() mit neuen Werten aufgerufen werden.

Mit noFill() und noStroke() kann auch keine Füllfarb oder keine Kontur festgelegt werden.


## Grundstruktur setup & draw. Systemvariablen
- [TP 2](https://einraum-design.github.io/tp_processing_WS2025-26/TP2/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP2/sketch.js)


### function setup & draw

```
function setup(){

}

function draw(){

}
```
Die beiden Funktionen sind das Grundgerüst jeder Processing Anwendung.
Alles was im Funktionsrumpf der function setup() – zwische den geschweiften Klammern steht – wird zum Programmstart einmal ausgeführt. Hier werden alles Grundeinstellungen für das Programm gesetzt und das Canvas Elemet erstellt.

```
createCanvas(600, 400);

```

Nach Ablauf der function setup() wird der Inhalt der function draw() ausgeführt. 
Alles was in der function draw() steht wird immer wieder auf's Neue ausgeführt – standartmäßig 60 Mal pro Sekunde. 
Die function draw() beginnt meistens mit der background function, die alles aus dem vorherigen Frame übermalt und für jeden neuen Frame eine neue Zeichenfläche bereitstellt.

### Processing Variablen

Processing bietet mehrere Variablen die von Processing vordefiniert sind.
Diese könne einfach als Platzhalter im Skript eingesetzt werden und werden während der Laufzeit 
des Programmes mit den aktuellen Werten ersetzt.

mouseX -> Maus x - Position innerhalb vom Sketch  Zahlenwert Ganzzahlen (Integer)
mouseY -> Maus y - Position innerhalb vom Sketch  Zahlenwert Ganzzahlen (Integer)
width ->  Sketchbreite Zahlenwert Ganzzahlen (Integer)
height -> Sketchhöhe Zahlenwert Ganzzahlen (Integer)


width und height sollten verwendet werden, um Positionen von graphischen Elementen in der Anwendung unabhängig von der Fenstergröße zu berechnen.


## if-Bedingungen 
Mit if-Bedinungen lassen sich ein Programm steuern. 
Über Bedingungen lässt sich steuern, welche Programmteile ausgeführt werden.

```
// if-Bedingungen
// if(CONDITION) { wenn CONDITION erfüllt ist, wird alles im Rumpf (zwischen den {}) ausgeführt}
if(mouseX > 300){
    ellipse(mouseX, mouseY, 50, 50);
}
```

Um Bedingungen zu formulieren gibt es ***Vergleichsoperatoren***
- A > B  --> wenn A größer als B ist
- A < B  --> wenn A kleiner als B ist
- A >= B --> wenn A größer oder gleich B ist
- A <= B --> wenn A kleiner oder gleich B ist
- A == B --> wenn der Wert von A gleich B ist
- A === B --> wenn der Wert von A gleich B ist und der Typ von A und B gleich ist
- A != B --> wenn der Wert von A nicht gleich B ist


### If - else
Jeder if-Bedingung kann ein else Block angehängt werden. 
Ist die Bedingung nicht erfüllt, wird der else-Block ausgeführt.

```
if(mouseIsPressed) {
    // wenn Maus gedrückt ist Füllfarbe rot
    fill(255, 0, 0);
} else {
    // ansonsten Füllfarbe weiß
    fill(255);
}
```


## 31.10.2025 Variablentypen & if-Bedingungen Verknpfungen

- [TP 3](https://einraum-design.github.io/tp_processing_WS2025-26/TP3/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP3/sketch.js)
- [TP 4](https://einraum-design.github.io/tp_processing_WS2025-26/TP4/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP4/sketch.js)

### Variablen
***elementaren Variablen***
- Ganzzahlen Integers int --> 1, 3, 34, -23
- Fließkommazahlen FloatingPointNumbers float --> 0.234, 123.234, 1.0, -234.234
- Boolean bool --> true / false
- Character char --> 'a', 'b', ' ', '+', '\'' (escapen von sonderzeichen über \Sonderzeichen)

***Objekte***
- Textkette String --> "Hello World", " ", "8ohasdf"
- p5.image (PImage) Bilder
- p5.font (PFont) Schriften


Variablen Definition in den meisten Programmiersprachen
```
// Typ variablenNamen ( = Wert);
int alter = 18;
```

Variabeln Definition in p5js
```
let myXPos = 40.0;
let myYPos = 60;
let xSpeed, ySpeed;
```


### Bedingungen Verknüpfen
Um mehrere Bedingung miteinander zu verbinden gibt es ***Verknüpfungsoperatoren***
- CONDITION_A && CONDITION_B --> Wenn Bedingung A UND Bedingung B erfüllt sind
- CONDITION_A &#124;&#124; CONDITION_B --> Wenn Bedingung A ODER Bedingung B (oder beide) erfüllt sind


### Die random-Funktion
Die Random Funktion git bei jedem Aufruf eine neue zufällige Zahl zurück.
```
random(400); // gibt eine Zahl zwischen 0 und 400 zurück
random(200, 400); // gibt eine Zahl zwischen 200 und 400 zurück
```


## 7.11.2025 Transformationen  (verschieben, rotieren, skalieren)

- [TP 5](https://einraum-design.github.io/tp_processing_WS2025-26/TP5/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP5/sketch.js)
- [TP 5_2](https://einraum-design.github.io/tp_processing_WS2025-26/TP5_2/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP5_2/sketch.js)

Um Zeichenelemente im Processing Sketch zu bewegen, gibt es einige Transformations Tools.

Transformationen werden immer vom Nullpunkt des Koordinatensystems ausgeführt.
Zu Beginn der void draw ist das Koordinatensystem immer in der linken oberen Ecke.
Wird ein rotate(float Winkel) Befehl ausgeführt wird also alles um diese Ecke rotiert. 

Um um einen anderen Mittelpunkt rotieren zu können, muss zuerst das Zeichenkoordinatensystem 
an den gewünschten Mittelpunkt verschoben werden.
Die geschieht über den translate(float x, float y) Befehl. Translate kann das Zeichenkoordinatensystem
in x und y Richtung verschieben.

Als drittes Transformationstool gibt es den scale(float x, float y) Befehl. 
Dieser Skaliert das Koordinatensystem. Scale funktioniert mit positiven wie auch negativen Werten. Damit lassen sich Inhalte auch spiegeln. 

Es können beliebig viele Transformationen hintereinander ausgeführt werden. 
Jede Verschiebung und Rotation wird aber auf die vorherigen aufaddiert!
Wenn das Koordinatensystem mit rotate() verdreht wurde und anschließend wieder 
ein translate ausgeführt wird, wird das Koordinatensystem in die rotierte Richtung verschoben.

Bei jedem Neustart der void draw() wird das Koordinatensystem wieder auf das Standart Koordinatensystem zurück gesetzt.

Das Zeichenkoordiantensystem lässt sich innerhalb der void draw wieder auf Standartposition, Rotation und Skalierung zurücksetzen:

```
 resetMatrix();
```

Um einen Zwischenstand einer Transformatione zu speichern und später wieder auf diesen Stand zurückwechseln zu können können die funktionen push() und pop() verwendet werden. 
Wichtig ist: Jede push() Funktion muss auch wieder mit einer pop() Funkition aufgelöst werden.

```
 push();
 // dazwischen können beliebige Transforamtionen oder 
 // Style Änderungen gemacht werden. 
 pop();

 // Nach dem pop() ist die Transformation und alle 
 // Style Regeln wieder wie beim letzten Aufruf 
 // von push();
```

### 3D Raum
Um im dreidimensionalen Raum zu zeichnen, muss bei der createCanvas Funktion der WEBGL Renderer gestartet werden: 
```
 createCanva(800, 600, WEBGL);
```

Dann können Transformationen auch in die 3. Achse ausgeführt werden. 
Beim translate und scale Befehl gilt der dritte Paramter für die z-Achse. 
Für die Rotationen gibt es die zusätzlichen Befehle
```
 rotateX();
 rotateY();
 rotateZ();
```

Die Darstellung der 3D Szene kann durch Kameraeinstellungen (perspektiv / ortogonal / Brennweite) und Beleuchtung der Szene gesteuert werden. Siehe Referenz unter Camera und Lights.


## 14.11.2025 Wiederhol-Schleifen
Um Funktionen mehrfach auszuführen, gibt es unterschiedliche Schleifen Konstrukte (while-loop, do-while-loop, for-loop und for-each-loop).

- [TP 6](https://einraum-design.github.io/tp_processing_WS2025-26/TP6/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP6/sketch.js)

### WHILE-LOOP:

Die while loop ist von der Syntax am einfachsten aufgebaut. 
```
  while (CONDITION) {
    /* do something - Schleifenrumpf */
  }
```
Die Bedingung wird überprüft - wenn die Bedingung true ist, wird der Schleifenrumpf ausgeführt.
Anschließend wird die Bedingung erneut überprüft und der Schleifenrumpf erneut ausgeführt etc.
Ist die Bedingung nicht erfüllt, wird die Wiederholung unterbrochen und das Programm nach der Schleife fortgesetzt.


## 21.11.2025 Erweitunge: 
- [TP 7](https://einraum-design.github.io/tp_processing_WS2025-26/TP7/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP7/sketch.js)


### FOR-LOOP
Die for Schleife hat drei Parameter
- Im ersten Teile kann eine Variable erstellt werden, die dann nur innerhalb der for-schleife gültig ist
- Die Bedingung ist analog zur while-Schleife
- im Incrementor Teil, wird angegeben, was jeweils einer Auführung des Schleifenrumps ausgeführt werden soll (üblicherweise die Variale eins hochzählen)
```
  for (VARIABLENDEFINITION; CONDITION; INCREMENTOR) {
    /* do something - Schleifenrumpf */
  }

  // zB:
  for(let i = 0; i < 10; i++){
    console.log(i); // gibt 0, 1, 2, ... 9 aus
  } 
```

### foreach
Hier gibt es keine "Zählervariable". stattdessen werden einfach die Werte des Arrays Wert für Wert abgearbeitet.
```
  myarray.forEach(element => {
      console.log(element);
  });
```


## Erweiterung zu Variaben: Arrays und Objekte

### Arrays
Bisher hatten wir Variablen in der Form kennengelernt, dass in jede Variable ein Wert gespeichert wird. 
Um viele Werte unter einem Variablennamen speichern zu können verwendet man Arrays. Bei einem Array können viele Werte wie in einem Regal mit vielen Fächern abgelegt werden. Jeder Wert kann über einen Index (Zahl von 0 - n) als Schlüssel angesprochen werden.
Arrays werden über eckige Klammern gekennzeichnet:

```
 let myArray = [];
```

Arrays mit Werten initialisieren:
```
 let namesArray = ["Andres", "Tina", "Philipp"];
```
Der Zugriff auf die Werte erfolg über die den Index in den eckigen Klammern:
```
 let myArray[0] = "hello"; // wert "hello" an der Stelle 0 im Array
```
Bei Arrays kann man über das Attribut **length** abrufen, wie viele Werte in dem Array aktuell enthalten sind.
Mit der Methode **.push()** lassen sich neue Werte an das Array hinten anhängen.


### Objekte
Objekte sind noch etwas allgemeiner gefasst. Hier sind die Schlüssel, um auf die einzelnen Werte von dem Objekt zugreifen zu können nicht festgelegt auf durchnummerierte Zahlen, sondern können jeder Begriff sein.
Objekt werden über die geschweiften Klammern definiert:

```
 let myObject = {};
```
Schlüssel - Wert - Paare lassen sich einfach über den Punkt-Operator hinzufügen:
```
 let myObject = {}
 myObject.name = "Otto";
 myObject.alter = 43;

 // oder über den Schlüssel als String ("") in eckigen Klammern hinzufügen:
 myObject["sex"] = "male";
```

## Event Listener

Soll ein Zähler je Mausklick oder Tastendruck – je Event (zB. Click) um eins hochgezählt werden, muss beachtet werden, dass der Wechsel nicht innerhalb der void draw mehrfach ausgeführt wird.
Deshalb gibt es Event Händler, die auf bestimmte Events hin jeweils einmal ausgeführt werden. Diese stehen außerhalb der function setup() und der function draw().
```
// wird in dem Moment aufgerufen, wenn die Maustaste gedrückt wird.
void mousePressed() {
    // der Inhalt im Funktionsrumpf wird pro Maustraste drücken einmal ausgeführt.
}

void mouseReleased() {
    // der Inhalt im Funktionsrumpf wird pro Maustaste loslassen einmal ausgeführt.
}

void keyPressed() {
    // der Inhalt im Funktionsrumpf wird je Tastendruck einmal ausgeführt.
}
```

Weiter Eventhandler für Maus- und TastaturEvents sind in der Referenz zu finden.


## 28.11.2025 functions, play sound and videos, html-UI Elements and listener: 
- [TP 8](https://einraum-design.github.io/tp_processing_WS2025-26/TP8/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP8/sketch.js)


### Funktionen definieren
Processing bietet einige vordefinierte Funktionen, wie zb. die ellipse(), map(), fill() … Funktionen.
Wir können jedoch auch beliebig eigene Funktionen definieren.

Sobald ein Programmteil mehrfach genutzt wird, sollte dieser Teil als Funktion ausgelagert werden um doppelten Code (der das Programm unübersichtlich macht und kopierfehler begünstigt) zu vermeiden. 

Es können auch logische Programmteile zusammengefasst werden und als Funktion ausgelagert werden, um das Programm übersichtlicher zu gestalten. ZB. der Programmteil der ein Menü zeichnet ... 


Eine Funktionsdefinition besteht aus vier Teilen:
**Deklaration "function"**

**Funktionsname**
- beginnt mit einem Kleinbuchstaben
- ein Wort! (Keine Leerzeichen/Kommas/Punkte)

**Klammern (optional Paramater …)**

```
function myFunction (parameter1, parameter2){
    // optional Rückgabewert
    return result;

}
```

Es lassen sich auch optionale Parameter in der Funktion definieren:
```
function myFunction (parameter1 = 100){
    ...
}
```
Wenn ein Parameter beim Funktionsaufruf mitgegeben wird, wird dieser als parameter1 gesetzt. Ansonsten wird der Standartwert – in diesem Fall "100" genutzt.


Es lassen sich zwei Funktionstypen unterscheiden: 

- Funktionen ohne Rückgabetyp:
Bei Funktionsaufruf wird alles was im Rumpf steht einfach ausgeführt und danach kehrt das Programme wieder an die Stelle, an der die Funktion aufgerufen wurde zurück und führt die nächsten Befehle aus ...

- Funktionen mit Rückgabetyp
Am Ende des Funktionsaufrufs muss ein ein „return" mit dem Rückgabewert stehen. 
die random() Funktion liefert zB. ein Fließkommerzahl zurück ...

- [TP 9](https://einraum-design.github.io/tp_processing_WS2025-26/TP9/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP9/sketch.js)

### HTML Elemente mit p5js erstellen
Im p5js Sketch lassen sich beliebig weitere HTML Elemente erstellen. Der Vorteil der HTML Element ist, dass sie im Gegensatz von auf dem Canvas gezeichneten Formen direkte Event Listener haben. Das heißt, dass wir direkt auf MouseOver oder Click reagiert werden kann. 
Beispiel Button:

```
// Button erstellen:
let button = createButton("click me");
// An HTML Objekte kann direkt ein EventListener gehängt werden. Auf jeden Mausklick auf den button wird ausgeführt, wass in den Klammer angegeben wird.
button.mousePressed( /* to do */ );
```

In den Klammern vom EventListener kann entweder eine *anonyme Funktion* oder ein Funktionsname angegeben werden:
```
// anonyme Funktion:
button.mousePressed( ()=> { console.log("button wurde geklickt");} );

// Funktionsaufruf
button.mousePressed(meineFunktion); // meineFunktion(); muss dann im Programm definiert werden
```

### Videos einbinden

Video können als eigenständiges HTML Element in eine Webseite eingebunden werden. 
Ein Vidoe Element lässt sich mit folgender Zeile in p5js erstellen:
```
video = createVideo("assets/launch2.mp4");
// es können auch Steuerungselemente beim HTML Video eingeblendet werden:
video.showControls(true);
```

Wenn das Video allerdings auf das canvas Element gezeichnet werden soll, muss trotzdem ein Video Element erstellt werden. Hier wird das video allerdings im HTML ausgeblendent und dann nur auf den inhalt des Videoplayer zugegriffen.
Das Video kann dann mit der image funktion auf das Canvas Element gezeichnet werden:
```
video = createVideo("assets/launch2.mp4");
video.hide();

// innerhalb der function draw()
image(video, 0, 0);
```

MediaPlayer habe haben eigene Eventhandler, über die auf zB. Ende des Videos reagiert werden kann: 
```
// Listener der aufgerufen wird, wenn ein Video zu Ende gespielt ist
video.onended(tue_etwas);

// die function "tue_etwas" muss dann noch außerhalb der function setup() definiert werden
function tue_etwas(elt){
  console.log("Video ist zu Ende - schlafen gehen");
  // zB. Videoelement ausblenden ...
  elt.hide();
}
```

```
//alternativ kann eine "anonyme Funktion" aufgerufen werden
video.onended(() => {
  console.log("Video ended ...");
});
```

### SoundFiles

Audiowiedergabe ist nicht in der Standart p5js Bibliothek enthalten. Die Soundfunktionalität ist in einer eigenen Bibliothe. 
Standartmäßig ist die Bibliothek aber dabei und schon in der index.html Datei verlinkt.

Sound können ähnlich wie Bilder dem Sketch hinzugefügt werden.
Es muss eine Variable für die Sounddatei angelegt werden.
Anschließden kann der Sound abgespielt, geloopt oder pausiert oder gestoppt werden ...


## 4.12.2025  – HTML & CSS Basics
- [TP 9](https://einraum-design.github.io/tp_processing_WS2025-26/TP9/index2.html) [(--> Code)](https://github.com/einraum-design/tp_processing_WS2025-26/blob/main/docs/TP9/index2.html)

### HTML - Hypertext Markup Language
Ein html Dokument enthält den Textinhalte und Verlinkungen zu Bildern, Vidoes und weitern Multimedia Inhalten. 
Eine html Seite beinhaltet eine Head und einen Body Bereich. Die Seite wird mit "HTML-Tags" aufgebaut und gegliedert.

```
<!DOCTYPE html>
<html lang="de-DE" >
    <head>
        <title>Titel der Webseite</title>

        <!-- Angabe über die Zeichencodierung - damit Sonderzeiten - zB. Umlaute – richtig dargestellt werden -->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 

        <!-- hier können Stylesheets, Scripte und Bibliotheken verknüpft werden ... -->
    </head>
    <body>
        <!-- Inhalt der Webseite die im Browserfenster zu sehen sind -->
    </body>
</html> 
```

Auch die Inhalte werden mit den "Tags" ausgezeichnet/geliedert.
Ein Überschrift wird beispielsweise mit einerm beginnenden und einem schließenden h1 (Headline 1. Ordnung) umgeben:
```
<h1>Inhalt der Überschrift</h1> 
```
Es gibt vorgegebenen Tags für unterschiedliche Inhalte, zB. Überschriften: <h1>, <h2>, <h3>, <h4>, ... oder Textabsätze: <p></p>
Mehrere Element lassen sich mit <div></div> Blöcken gruppieren und strukturieren.  
Teile innerhalb eines Inhaltes lassen sich mit <span> Elemente markieren:
```
<p>Ein Textabsatz kann beliebig lang sein. Einzelne Text können mit einem <span>span-Element</span> markiert werden</p> 
```
Für Medieninlate wie zB. Bilder gibt es eigenen Elemente 
Mit einem <img> Element werden zB. Bilder in die Seite verlinkt. 
```
<img src="Dateipfad/des/Bildes/bild.jpg" alt="Beschreibung des Bildinhalts für Lesegeräte" /> 
```
Elemente wie das img-Element hat keinen Inhalt zwischen den den Tags - die Bildverlinkung ist eine Attribut innerhalb des Tags. Deshalb wird das Bild nicht mit einem einem schließenden Tag <img></img> beendet, sonder das img-Tag wird direkt im ersten Tag mit einem / beendet. --> <img src="..." />

Die Besonderheit der "Hypertext"-MarkupLanguage" (HTML) sind die Verlinkungen zwischen unterschiedlichen Webseiten.
Dafür gibt es die a-Tags. Mit diesen Tags kann auf andere Webseiten oder auf Stellen innhalb einer Seite verlinkt werden. 
Mit dem href Attribut wird das Ziel des Links definiert. Das Target gibt an, ob die Zielseite im gleichen Tab oder in einem anderen Tab geöffnet werden soll.
```
<!-- externer link -->
<a href="https://p5js.org" target="_blank">Link zu einer anderen Webseite</a> 
<!-- link auf eine weiter Seite im gleichen Verzeichnis -->
<a href="seite2.html" target="_blank">Link zu einer anderen Webseite</a> 
<!-- link zu einer ID innerhalb einer Seite -->
<!-- Damit der Link funktioniert muss die ID auf der Seite irgendwo vergeben sein -->
<a href="#ziel" target="_blank">Link zu einer anderen Webseite</a> 
```

### CSS - Cascading Style Sheet
Mit Stylesheets wird die Erscheinung der Webseite gesteuert. Es werden Farben, Abstände, Schriftarten, Größen etc festgelegt. 
Styles können an unterschiedlichen Stellen geschrieben werden. 

Direkt im HTML
```
<p style="color: #ff0000">Ein Textabsatz</p> 
```

Im head Bereich der Seite
```
<!DOCTYPE html>
<html lang="de-DE" >
    <head>
        <title>Titel der Webseite</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 

        <!-- hier können Style Regeln definiert werden: -->
        <style type="text/css">
            #content {
                background-color: rgb(224, 224, 224);
                padding: 15px;
                border: 3px solid #333333;
                margin: 30px;
            }
            h1, h2, h3, * {
                font-family: Arial, Helvetica, sans-serif;
            }
        </style>
    </head>
    <body>
        <!-- Inhalt der Webseite die im Browserfenster zu sehen sind -->
    </body>
</html> 
```

Eine eigenständige .css Datei kann im head-Bereich der Seite verknüpft werden. Dies hat den Vorteil, dass die Datei für viele Seiten verwendent werden kann
```
<!DOCTYPE html>
<html lang="de-DE" >
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <!-- Inhalt der Webseite die im Browserfenster zu sehen sind -->
    </body>
</html> 
 ```

Mit CSS kann man auf viele Arten Regeln für die Gestaltung der HTML Inhalte definieren:
zB. eine Schriftart und Schriftfarbe für alle p Elemente festlegen:
```
p {
    color: rgb(20, 20, 20);
    font-family: Arial, Helvetica, sans-serif;
}
```


Tutorials und und eine Referenz für HTML, CSS (und weitere Web Sprachen): [w3schools](https://www.w3schools.com/)

Tutorials zu den verschiedenen Themen: 
[Einführung HTML / CSS](https://www.youtube.com/watch?v=jEHYBXe3sMU)
[HTML](https://www.youtube.com/watch?v=F6JwGj5LJMY)
[Bilder einfügen](https://www.youtube.com/watch?v=SaiXrpBBp8o&list=PLsfa2ln4Ba7iexfOAlvAXyr0iF10d0fEW&index=9)
[Links erstellen](https://www.youtube.com/watch?v=gLtAQ3HSOV0)
[CSS](https://www.youtube.com/watch?v=iAZRLNpqnTc)