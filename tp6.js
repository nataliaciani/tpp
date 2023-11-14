let mb = []; //ARRAY DE IMAGENES ;)
let a; //declaro un objeto de la clase AVENTURA
let texto = [];
let j;
function setup() {
  createCanvas(600, 600);
  a = new Aventura(mb, texto);
  j = new Juego();
}


function draw() {
  a.dibujar(mb, texto);
}
function mousePressed() {
  a.botonPresionado();
}
function preload() {
  for (let i = 0; i < 26; i++) {
    mb[i] = loadImage('assets/mb'+ i +'.png');
    for (let x = 0; x < 16; x++) {
      texto = loadStrings('assets/texto.txt');
    }
  }
}
