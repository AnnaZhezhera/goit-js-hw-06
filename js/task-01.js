const categoriesArray = document.querySelectorAll("#categories li.item");
const categoriesCount = categoriesArray.length;
// console.log(categoriesArray);
console.log(`Number of categories: ${categoriesCount}`);

const subCategory = categoriesArray.forEach((category) => {
  console.log(`Categry: `, category.querySelector("h2").textContent);
  console.log(`Elements:`, category.querySelectorAll("li").length);
});
