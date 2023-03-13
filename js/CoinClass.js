class CoinClass {
    constructor(value, coin, x, y){
      this.randomPosition();
      this.randomValue();
  
      this.x = this.randomPositionX;
      this.y = this.randomPositionY;
  
      //Propriedas básicas da moeda como (Valor, Sprites, Imagem, e escala de Imagem)
      this.value = this.coinValue; //Primeramente adiciona a função da classe e depois pega o 'this.value'
      this.coin = createSprite(this.x,this.y,50,50)
      this.coin.addImage(coinImgPl)
      this.coin.scale = 0.03
      this.coin.setCollider('circle') //Setar colisão, suas props são (forma:'rectangle ou circle', x, y, width, height)
  
      this.px = positionX;
  
      // this.coin.shapeColor = '#B8860B'
      this.touchCollide();
      
  
    }
    randomPosition(randomPositionX, randomPositionY){
      this.randomPositionX = Math.round(random(0,600 -50))
      this.randomPositionY = Math.round(random(0,600 -50))
  
      // console.log(this.randomPositionX, this.randomPositionY)
    }
    touchCollide(){
      
    }
    randomValue(){
      this.coinValue = Math.round(random(20,30))
    }
    display(){
      this.value;
      this.coin;
      
    }
  }