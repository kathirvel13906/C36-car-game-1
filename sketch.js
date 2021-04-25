var canvas;
var playerCount;
var database;
var gameState = 0;
var form, player, game;

function setup() {
  canvar = createCanvas(400,400);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(128, 128, 128);
}
