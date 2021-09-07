function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const body = document.querySelector('body');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
let timer = null;

start.addEventListener('click', () => {
    start.disabled = true;
    timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
}, 1000);});
stop.addEventListener('click',() => {
    start.disabled = false;
    clearInterval(timer);
})



