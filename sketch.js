  var screen_height =1024;
  var screen_width = 1024;
  
function setup() {
  createCanvas (screen_width, screen_height);
}

function draw() {
  if (mouseIsPressed) {
    fill(125, 125, 125);
  } else {
    fill(190, 147, 147);
    stroke(125);
  }
  translate(width/2, height/2); // make this corrdinate as the center
  
  var posX = 0;
  var posY = 0;
  
  var K = 15; // density
  var golden_ratio = 1.168034;
  
  // var C = TWO_PI / 3.14; // divergence
  var C = sqrt(5);
  var A = 1;
  var R = 1;

  for (var s = 0; s < 600; s++) {
    R = K * sqrt(A);
    for (var t = 0; t < 3; t++){
      var AA = TWO_PI*t/6 + A;
      var RR = 1;

      posX = RR*cos(AA) + R*cos(A);
      posY = RR*sin(AA) + R*sin(A);

      // star (mouseX, mouseY, 20, 40, 5);
      star (posX, posY, t*2, 2*(t+2), 5);
    }
    A = A + C;
  }

}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
