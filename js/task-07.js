const fontSizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

fontSizeControlEl.addEventListener("input", handleTextSizeInput);

function handleTextSizeInput(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
