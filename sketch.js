'use strict';

let state = 'title'
let cnv;
let points = 0;
let w = 600; //Width
let h = 600; //Height
let player;

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();

}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'You Win!':
      youWin();
      cnv.mouseClicked(youWinMouseClicked)
      break;
    default:
      break;
  }
}

function title() {
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('Proper Parent', w / 2, h / 5);

  textSize(30);
  text('Click Anywhere to Start', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('Canvas is Clicked on Title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  // text('Click For Points', w * 0.5, h - 30);

  player.display();

}

function level1MouseClicked() {
  points++;
  console.log('points = ' = points);

  if (points >= 10) {
    state = 'You Win!';
  }
}

function youWin() {
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('You Win!', w * 0.5, h * 0.5);

  textSize(30);
  text('Click Anywhere to Restart', w * 0.5, h * 0.75);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
