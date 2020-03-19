const incButton = document.getElementById('inc');
const decButton = document.getElementById('dec');
const asyncButton = document.getElementById('async');
const themeButton = document.getElementById('theme');
const body = document.querySelector('body');

const counter = document.getElementById('counter');

let counterValue = 0;

counter.innerHTML = counterValue;

const increase = () => {
  counterValue++;
  counter.innerHTML = counterValue;
};
const decrease = () => {
  counterValue--;
  counter.innerHTML = counterValue;
};

const async = () => {
  setTimeout(() => {
    counterValue++;
    counter.innerHTML = counterValue;
  }, 2000);
};

incButton.onclick = () => increase();
decButton.onclick = () => decrease();
asyncButton.onclick = () => async();

themeButton.onclick = () => {
  console.log('theme');
  body.classList.toggle('dark');
};
