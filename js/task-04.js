let counterValue = 0;

const counter = document.querySelector("#counter");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterOfClicks = document.querySelector("#value");

function handleIncreaseBtnClick() {
  counterValue += 1;
  counterOfClicks.innerHTML = counterValue;
}

function handleDecreaseBtnClick() {
  counterValue -= 1;
  counterOfClicks.innerHTML = counterValue;
}

decrementBtn.addEventListener("click", handleDecreaseBtnClick);
incrementBtn.addEventListener("click", handleIncreaseBtnClick);
