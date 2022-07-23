const fieldInput = document.querySelector("#validation-input");

fieldInput.addEventListener("blur", handleInputBlur);
console.log(fieldInput.getAttribute("data-length"));

function handleInputBlur(event) {
  if (fieldInput.value.length <= fieldInput.getAttribute("data-length")) {
    fieldInput.classList.add("invalid");
    fieldInput.classList.remove("valid");
  } else {
    fieldInput.classList.remove("invalid");
    fieldInput.classList.add("valid");
  }
}
