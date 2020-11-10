const getValue = document.querySelector("#value");
let counterValue = 0;
const addingValue = document.querySelector("[data-action='increment']");
addingValue.addEventListener("click", () => {
  counterValue += 1;
  getValue.textContent = counterValue;
});

const valueRemover = document.querySelector("[data-action='decrement']");
valueRemover.addEventListener("click", () => {
  counterValue -= 1;
  getValue.textContent = counterValue;
});
