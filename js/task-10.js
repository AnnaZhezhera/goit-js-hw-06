function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.getElementById("controls");
const input = document.querySelector("input[type='number']");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const boxes = document.getElementById("boxes");

createBtn.addEventListener("click", handleCreateOnClick);

function handleCreateOnClick() {
  createBoxes(input.value);
}

function createBoxes(amount) {
  // const color = getRandomHexColor();
  const array = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    array.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`
    );
  }
  boxes.insertAdjacentHTML("beforeend", array.join(""));
}

destroyBtn.addEventListener("click", handleDestroyOnClick);

function handleDestroyOnClick(event) {
  destroyBoxes();
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
