function setup() {
    createCanvas(400, 400);
  }
  inicializaCores                  ( )
      fundo ( "branco" )
      preencher ( "preto" );
      textSize(64);
      textAlign (CENTER, CENTER);
  
  
  function draw() {
     
      
  
      
      let maximo = width;
      let minimo = 0;
      // mouseX, 0, width ==> 0, palavra.length
      let palavra = "Caminhante";
      let quantidade = map(mouseX, 0, width, 1, palavra.length);
      //console.log(quantidade);
      let parcial = palavra.substring(0, quantidade);
    
      text(parcial, 200, 200);
  }
  function draw() {
    background("white");
    fill("black");
    textSize(64);
    textAlign(CENTER, CENTER);
    
    let maximo = width;
    let minimo = 0;
    // mouseX, 0, width ==> 0, palavra.length
    let palavra = "GABRIELLA";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    console.log(quantidade);
    let parcial = palavra.substring(0, quantidade);
    text(parcial, 200, 200);
    
    // if(mouseX < 50) {
    //   let palavra = "Caminhante";
    //   text(palavra, 200, 200);
    // } else if(mouseX < 100) {
    //   let palavra = "Caminhante";
    //   text(palavra, 200, 200);
    // } else {
    //   let palavra = "Caminhante";
    //   text(palavra, 200, 200);
    // }
  
  }