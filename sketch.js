let mySound, amplitude;

function preload() {
  mySound = loadSound(Math.random() > .5 ? "Tropical House.wav" : "music.mp3");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log("setup");
  amplitude = new p5.Amplitude();
}

function draw() {
  background(2); //black background
  let level = amplitude.getLevel();
  let diam = map(level, 0, 1, 10, 400);
  fill("red"); // red circle
  ellipse(150, 150, diam, diam);
  console.log(mySound);
}

function mousePressed() {
  if (mySound.isPlaying()) {
    mySound.stop();
  } else {
    mySound.play();
  }
}
