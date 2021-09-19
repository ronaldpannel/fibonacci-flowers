/**@type{HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//screen scaling on window size change
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

c.globalCompositeOperation = "destination=over";
let hue = Math.random() * 360;
let number = 10;
let scale = 10;
//Draw Shape
function drawFlower() {
  let angle = number * 137;
  let radius = scale * Math.sqrt(number);
  let posX = radius * Math.sin(angle) + canvas.width / 2;
  let posY = radius * Math.cos(angle) + canvas.height / 2;

  c.fillStyle = "hsl(" + hue + ", 100%, 50%)";
  c.strokeStyle = "black";

  c.lineWidth = 2;
  c.beginPath();
  c.arc(posX, posY, 10, 0, Math.PI * 2);
  c.closePath;
  c.fill();
  c.stroke();

  number++;
  hue++;
}
//Slider Controls//
const slider = document.getElementById("slider");
slider.value = scale;
const ShowScaleValue = document.getElementById("ShowScaleValue");
ShowScaleValue.innerHTML = scale;
slider.addEventListener("change", function (e) {
  // console.log(e.target.value);
  scale = e.target.value;
  ShowScaleValue.innerHTML = scale;
  console.log(scale);
});

const slider1 = document.getElementById("slider1");
slider.value = number;
const ShowIndexValue = document.getElementById("ShowIndexValue");
ShowIndexValue.innerHTML = number;
index.addEventListener("change", function (e) {
  // console.log(e.target.value);
  scale1 = e.target.value;
  ShowIndexValue.innerHTML = number;
  // console.log(number);
});

//Controls End

function animate() {
  //c.clearRect(0, 0, canvas.width, canvas.height);
  //size += 0.1;
  if (number > 500) {
    number = 0 && c.clearRect(0, 0, canvas.width, canvas.height);
    // return;
  }

  drawFlower();
  requestAnimationFrame(animate);
}

animate();
