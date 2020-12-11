
//loading animation
$(document).ready(function() {
  $('.js--loader').removeClass('loader');
  $('.js--loader__box').removeClass('loader__box');
  $(window).load()
});

//init AOS
AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});

// Some random colors
const colors = ["#A8DADC", "#457B9D", "#1D3557", "#E63946"];

const numBalls = 20;
const balls = [];

for (let i = 0; i < numBalls; i++) {
let ball = document.createElement("div");
ball.classList.add("ball");
ball.style.background = colors[Math.floor(Math.random() * colors.length)];
ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
ball.style.transform = `scale(${Math.random()})`;
ball.style.width = `${Math.random()}em`;
ball.style.height = ball.style.width;

balls.push(ball);
document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
let to = {
x: Math.random() * (i % 2 === 0 ? -11 : 11),
y: Math.random() * 12
};

let anim = el.animate(
[
  { transform: "translate(0, 0)" },
  { transform: `translate(${to.x-10}rem, ${to.y-10}rem)` }
],
{
  duration: (Math.random() + 1) * 2000, // random duration
  direction: "alternate",
  fill: "both",
  iterations: Infinity,
  easing: "ease-in-out"
}
);
});

//scroll function
function autoScrollTo(el) {
  var top = $(el).offset().top;
  $('html, body').animate({
      scrollTop: top-100
  }, 1200);
};

