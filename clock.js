const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function init() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  // animation - delay 设置为负值可以让动画提前运行，单位是s
  secondHand.style.animationDelay = `-${seconds}s`;
  minuteHand.style.animationDelay = `-${minutes * 60 + seconds}s`;
  hourHand.style.animationDelay = `-${
    hours * 60 * 60 + minutes * 60 + seconds
  }s`;
}

init();
