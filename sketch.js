'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600; //Width
let h = 600; //Height
let player;
let coins = [];

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();

  // coins[0] = new Coin();
  coins.push(new Coin());
}

function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'Level 1':
      level();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'You Win!':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }
}

function keyPressed() {
  if (key == LEFT_ARROW) {
    player.direction = 'left';
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right';
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up';
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down';
  } else if (key == ' ') {
    player.direction = 'still';
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
  state = 'level 1';
}

function level1() {
  background(50, 150, 200);

  if (random(1)) <= 0.01); {

}

player.display();
player.move();



for (let i = 0; i < coins.lenth; i++) {
  coins[i].display();
  coins[i].move();
}

// check for collion, if there is a collision increase points by 1
if (dist(player.x, player.y, coins[0].x, coins[0].y) <= (player.r + coins[0].r) / 2) {
  points++;
  console.log(points);
}

text(`Points: ${points}`, w * 0.25, h - 30);

}

function level1MouseClicked() {
  // points++;
  // console.log('points = ' = points);
  //
  // if (points >= 10) {
  //   state = 'You Win!';
  // }
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
