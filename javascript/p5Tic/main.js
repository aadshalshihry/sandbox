function setup() {
  createCanvas(600, 400)
}

var a = 0;
var b = 60;
var c = 180;



function funA() {
  fill(a)
  rect(40,40, 80, 80);
  function mousePressed() {
    a+= 20;
  }
}


function draw() {
  background(0);
  fill(225)
  rect(30, 30, 300,350)
  funA();
  fill(b)
  rect(130,40, 80, 80);
  fill(c)
  rect(220,40, 80, 80);
}
