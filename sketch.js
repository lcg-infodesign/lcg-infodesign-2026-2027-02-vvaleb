function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  angleMode(DEGREES);
  
  // colore sfondo
  background(15, 75, 160);
  
  // glifi
  let numeroGlifi = 90;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = ceil(sqrt(numeroGlifi));
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for (let g = 0; g < numeroGlifi; g++) {
    Comingolo(xCorrente + dimColonna / 2, yCorrente + dimRiga / 2, 40);
    
    xCorrente = xCorrente + dimColonna;

    if (xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}

function draw() {

}

// funzione glifo
function Comingolo(_x, _y, _size) {
  push();

  translate(_x, _y);

  let inclinazione = random(-12, 12);
  rotate(inclinazione);

  noStroke();

  // palette
  let coloriCappello = [
    color(175, 50, 30),   // arancio
    color(110, 120, 130), // grigio 
    color(105, 0, 0),    // rosso
    color(210, 130, 45)   // giallo
  ];
  let coloreScelto = random(coloriCappello);

  // varie dimensioni
  let larghezzaBase = _size * random(0.3, 0.45);
  let altezzaBase = _size * random(0.6, 0.85);
  let larghezzaCappello = larghezzaBase * random(1.3, 2.0);
  let altezzaCappello = _size * random(0.2, 0.35);
  let tipoCappello = floor(random(3)); 

  // 1. BASE COMIGNOLO 
  fill(230, 225, 215); 
  rectMode(CENTER);
  rect(0, 10, larghezzaBase, altezzaBase, 2);

  // ombra sotto
  fill(0, 35);
  rect(0, 10 - altezzaBase / 2, larghezzaBase + 2, 3);

  // 2. CAPPELLO COMIGNOLO
  fill(coloreScelto);
  push();
  translate(0, 10 - altezzaBase / 2);

  if (tipoCappello === 0) {
    
    arc(0, 0, larghezzaCappello, altezzaCappello * 2, 180, 360, CHORD);
  } else if (tipoCappello === 1) {
    
    triangle(
      -larghezzaCappello / 2, 0,
      larghezzaCappello / 2, 0,
      0, -altezzaCappello
    );
  } else {
    
    rect(0, -altezzaCappello / 2, larghezzaCappello, altezzaCappello, 2);
  }
  pop();

  pop();
}


