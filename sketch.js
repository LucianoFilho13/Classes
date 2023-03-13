//Teste e Classes
var player;


let coinImgPl;

var score;
let coinClass1, coinClass2;

var randomPositionX, randomPositionY

var positionX, positionY;

var gameState;

function preload(){ // função que carregar todas as imagens e animações
  coinImgPl = loadImage('./assets/coin.png')
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,600); //Tela

  gameState = 'game'


  /*Obs: 
  Não precisa criar uma var para criar uma classe, ex: "coinClass";
  Tem que chamar a classe no "index.html";
  Nome da classe no .js tem que ser igual no new, ex: "class CoinClass {...}, coinClass = new CoinClass()"
  */

  coinClass = new CoinClass();
  // coinClass = new CoinClass();
  // coinClass = new CoinClass();
  // coinClass = new CoinClass();
  // coinClass = new CoinClass();


  player = createSprite(300,300,70,70)

  
  score = 0;

}

function draw(){
  //text() tem que estar dentro da função draw()
  background("#1C1C1C");
  positionX = player.x;
  positionY = player.y;

  // this.coinClass.coin.debug = true; // Aparecer area de colisão

  // this.coinClass.display();


  drawSprites(); 
  allFunction(); //Todas as Funções
}


function allFunction(){
  function keyboard(){
    if (gameState === 'game'){
    if (keyDown('A')){
      player.x -= 8
    }
    if (keyDown('D')){
      player.x += 8
    }
    if (keyDown('W')){
      player.y -= 8
    }
    if (keyDown('S')){
      player.y += 8
    }
    } else {
      
    }

  } //Fim da função
  function menuFunction(){
    if (gameState === 'game'){
      if (keyDown('Esc')){
        gameState = 'pause';
      }
    } else {
      textSize(50)
      text('Jogo Pausado', 140,100)
      textSize(20)
      text('Pontos: ' + score, 260,200) // text(); tem que estar dentro da função draw()
      
      if (keyDown('esc')){
        gameState = 'game';
      }
    } 
  } //Fim da função
  function touchCoin(){
    if (player.collide(this.coinClass.coin)){
      this.coinClass.coin.x = -100
      score += this.coinClass.value;
    }
  }

  //Chamar Funções
  keyboard();
  menuFunction();
  touchCoin();
}