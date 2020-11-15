const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", colorChanger);
function colorChanger() {
  if (this.getAttribute("data-length") > this.value.length) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
}
