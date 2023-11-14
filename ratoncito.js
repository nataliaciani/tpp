class Ratoncito {
  constructor() { //declaro las propiedades/variables y les asigno valor
    this.x= 250;
    this.y= 510;
    this.ancho=75;
    this.alto=92;
    this.velocidad =2;
    this.limiteY=20;
    this.imagenRaton=[21];
  }
  flechas(teclas) {
    if (keyCode === UP_ARROW && this.y > this.limiteY) {
      this.y -=  this.velocidad;
      this.imagenRaton= [21];
    } else if (keyCode === DOWN_ARROW) {
      this.y  +=  this.velocidad;
      this.imagenRaton= [23];
    } else if (keyCode === LEFT_ARROW ) {
      this.x -=  this.velocidad;
      this.imagenRaton= [20];
    } else if (keyCode === RIGHT_ARROW) {
      this.x += this.velocidad;
      this.imagenRaton= [22];
    }
    this.x = constrain(this.x, 0, width - this.ancho);
    this.y = constrain( this.y, this.limiteY, height -  this.alto);
  }
  dibujar (imgArray) {
    image(imgArray[this.imagenRaton], this.x, this.y, this.ancho, this.alto);
  }
}
