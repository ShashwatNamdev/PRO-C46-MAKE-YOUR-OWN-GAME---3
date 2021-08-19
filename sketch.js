var database;
var gameState = 0;
var playerCount = 0;

var player,form,game;
var bgImg;
var allPlayers;
var player1,player2;
var playerImg;
var players;
var enemy,enemyGroup;
var enemyImg;

var bullet,bulletImg;

function preload(){
  bgImg = loadImage("images/backgroundImg_game.jpg");
  playerImg = loadImage("images/playerImg.png");
  enemyImg = loadImage("images/enemyImg.png");
}

function setup(){
  createCanvas(windowWidth-40,windowHeight-40);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  enemyGroup = new Group();
}
function draw(){
  background("green");
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}