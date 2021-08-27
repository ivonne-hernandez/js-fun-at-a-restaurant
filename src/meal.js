function nameMenuItem(name) {
  return "Delicious " + name;
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  };
}

function addIngredients(ingredient, ingredients) {

  //iterate through the array using a for loop
  //if ingredient is in the array dont add it (its a duplicate)
  // otherwise add it to the array
  var isDuplicate = false;

//this block of code is just checking to see if this ingredient is already in the ingredients array then isDuplicate would be true
  for (var i = 0; i < ingredients.length; i++) {
    if (ingredient === ingredients[i]) {
      isDuplicate = true;
    }
  }

//based on the isDuplicate value, if it's false, then push that ingredient to the array since it's not a duplicate
  if (isDuplicate === false) {
    ingredients.push(ingredient);
  }
}

function formatPrice(initialPrice) {
  return '$' + initialPrice;
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
