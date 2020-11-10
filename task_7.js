const inputRef = document.querySelector("font-size-control");
const validationInput = document.querySelector("text");
inputRef.addEventListener("input", (event) => {
  validationInput.textContent = event.target.value;
});
