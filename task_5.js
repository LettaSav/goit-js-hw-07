const inputRef = document.querySelector("#name-input");
let messageNameLabel = document.querySelector("#name-output");
function inputDefinder() {
  if (inputRef.value === "") {
    messageNameLabel.innerHTML = "Незнакомец";
  } else {
    messageNameLabel.innerHTML = inputRef.value;
  }
}
inputRef.addEventListener("input", inputDefinder);
