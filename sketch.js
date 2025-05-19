let canvas;
let coheteImg;

function preload(){
  coheteImg = loadImage ("img/cohete.png")
}

function setup() {
  canvas = createCanvas(1000, 400);
  canvas.parent("arte-generativo");
  noStroke();
  background(10);
}

function draw() {
  fill(10, 10, 10, 20);
  rect(0, 0, width, height);

  if (mouseX < width / 2 && mouseY < height / 2) {
    fill(0, 255, 180); // Celeste
    circle(mouseX, mouseY, 40);
  } else if (mouseX >= width / 2 && mouseY < height / 2) {
    fill(255, 100, 150); // Rosa
    rect(mouseX - 20, mouseY - 20, 40, 40);
  } else if (mouseX < width / 2 && mouseY >= height / 2) {
    fill(100, 150, 255); // Azul suave
    ellipse(mouseX, mouseY, 50, 25);
  } else {
    fill(200, 100, 255); // Lila
    triangle(
      mouseX, mouseY - 20,
      mouseX - 20, mouseY + 20,
      mouseX + 20, mouseY + 20
    );
  }
}

function clearCanvas() {
  background(10);
}

function windowResized() {
  resizeCanvas(1000, 400);
}


let sketch2 = function(p) {
  let posX, posY;

  p.setup = function() {
    p.createCanvas(400, 400).parent("arte-generativo-2");
    posX = 10;
    posY = p.height / 2;
  };

  p.draw = function() {
    p.background(220);

    // Líneas divisorias
    p.line(p.width / 4, 0, p.width / 4, p.height);
    p.line(p.width / 2, 0, p.width / 2, p.height);
    p.line((p.width / 4) * 3, 0, (p.width / 4) * 3, p.height);

    // Color según sección
    if (posX < p.width / 4) {
      p.fill('red');
    } else if (posX < p.width / 2) {
      p.fill('green');
    } else if (posX < (p.width / 4) * 3) {
      p.fill('blue');
    } else {
      p.fill('purple');
    }

    p.circle(posX, posY, 50);

    posX += 2;
    if (posX > p.width) {
      posX = 0;
    }
  };
};


new p5(sketch2);

