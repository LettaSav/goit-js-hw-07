const inputRef = document.querySelector("#name-input");
const messageNameLabel = document.querySelector("#name-output");
inputRef.addEventListener("input", (event) => {
  messageNameLabel.textContent = event.target.value;
});
