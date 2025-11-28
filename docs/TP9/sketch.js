let sound;

let video;

let colorPicker;

function preload() {
  sound = loadSound('assets/bike-bell.mp3');
}

function setup() {
  createCanvas(400, 400);
  // Attach the event listener for when the sound ends
  // call the logEnd function without parentheses!
  // sound.onended(logEnd);

  // optional call a anannymous function
  sound.onended(() => {
    console.log('The sound has finished playing. (anonymous function)');
  });

  video = createVideo('assets/video.mp4');
  video.showControls();
  // Hide the default video player element
  video.hide();

  let button = createButton('play sound');
  button.mouseClicked(() => {
    if(sound.isPlaying()){
      sound.stop();
    }
    sound.play();
  });
  

  let buttonVideo = createButton('play video');
  buttonVideo.mouseClicked(() => {
    video.loop();
  });

  colorPicker = createColorPicker(color(0, 0, 0));
}

function draw() {
  let c = colorPicker.color();
  background(c);

  image(video, mouseX, mouseY, 100, 80);
}

function mousePressed() {
}


function logEnd() {
  console.log('The sound has finished playing.');
  background(random(255));
}
