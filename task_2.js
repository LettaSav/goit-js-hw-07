const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngredientsList = (ingredient) => {
  const ingredientsRef = document.createElement("li");
  ingredientsRef.textContent = ingredient;

  return ingredientsRef;
};
const ingredientsListCard = ingredients.map((ingredient) =>
  createIngredientsList(ingredient)
);
const ingredientsListRef = document.querySelector(".js-ingredients");
ingredientsListRef.append(...ingredientsListCard);
