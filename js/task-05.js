const nameInputEl = document.getElementById("name-input");
const nameOutputEl = document.getElementById("name-output");

nameInputEl.addEventListener("input", handleNameChangeInput);

function handleNameChangeInput(event) {
  console.log(event);
  if (event.currentTarget.value.trim().length === 0) {
    nameOutputEl.textContent = "Anonymous";
  } else {
    nameOutputEl.textContent = event.currentTarget.value.trim();
  }
}
