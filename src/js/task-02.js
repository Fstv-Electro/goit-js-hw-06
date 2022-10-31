const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const arrayItems = [];

ingredients.forEach(item => {
  const itemLi = document.createElement(`li`);
  itemLi.className = 'item';
  itemLi.textContent = item;
  arrayItems.push(itemLi);
});

ingredientsList.append(...arrayItems);
