// INTRO
function start(){
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "flex";
}

// WHATSAPP CONFIRM
function confirmar(){
  const msg = `Olá! Quero confirmar a presença no aniversário da Leonor ❄️🧊`;

  const phone = "351963259779";

  const urls = [
    `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
    `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`
  ];

  // tenta abrir primeira opção
  const win = window.open(urls[0], "_blank");

  // fallback caso bloqueie popup
  if(!win){
    window.location.href = urls[1];
  }
}

// COUNTDOWN
const eventDate = new Date("2026-07-18T16:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff % (1000*60*60))/(1000*60));
  const s = Math.floor((diff % (1000*60))/1000);

  document.getElementById("countdown").innerHTML =
  `⏳ ${d}d ${h}h ${m}m ${s}s`;
}, 1000);

// SNOW EFFECT
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snow = [];

for(let i=0;i<120;i++){
  snow.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*4+1,
    d: Math.random()*1
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";

  for(let i=0;i<snow.length;i++){
    let f = snow[i];
    ctx.beginPath();
    ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
    ctx.fill();
  }

  move();
}

function move(){
  for(let i=0;i<snow.length;i++){
    snow[i].y += snow[i].d + 1;

    if(snow[i].y > canvas.height){
      snow[i].y = 0;
      snow[i].x = Math.random()*canvas.width;
    }
  }
}

setInterval(draw, 25);

let index = 0;

const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides.forEach(s => s.classList.remove("active"));

  index++;

  if(index >= slides.length){
    index = 0;
  }

  slides[index].classList.add("active");

}, 3000);