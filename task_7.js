const inputRef = document.querySelector("#font-size-control");
const validationInput = document.querySelector("#text");
function inputRange() {
  validationInput.style.fontSize = `${inputRef.value}px`;
}
inputRef.addEventListener("input", inputRange);
