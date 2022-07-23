const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayOfIngredients = document.querySelector("#ingredients");
const newArray = [];

const stringOfIngredients = ingredients.forEach((el) => {
  const ingredient = document.createElement("li");

  ingredient.textContent = el;
  ingredient.classList.add("item");
  newArray.push(ingredient);
});

arrayOfIngredients.append(...newArray);

// arrayOfIngredients.insertAdjacentHTML("afterbegin", stringOfIngredients);
