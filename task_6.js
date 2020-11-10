const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", (el) => {
  console.log(inputRef.value.length);
  inputRef.getAttribute("data-length") > inputRef.value.length
    ? inputRef.classList.add("invalid")
    : inputRef.classList.add("valid");
});
