function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };

}

function addMenuItem(restaurantObject, itemObject) {
//since itemObject.type should be a key in the menus object, you can access those values dynamically with bracket notation

  var isDuplicate = false;
  for (var i = 0; i < restaurantObject.menus[itemObject.type].length; i++) {
    if (itemObject === restaurantObject.menus[itemObject.type][i]) {
      isDuplicate = true;
    }
  }
  if (isDuplicate === false) {
    restaurantObject.menus[itemObject.type].push(itemObject);
  }

}

function removeMenuItem(restaurantObject, itemObjectName, itemObjectType) {
//since itemObjectType should be a key in the menus object, you can access those values dynamically with bracket notation

  for (var i = 0; i < restaurantObject.menus[itemObjectType].length; i++) {
    if (itemObjectName === restaurantObject.menus[itemObjectType][i].name) {
      restaurantObject.menus[itemObjectType].splice(i, 1);
      return `No one is eating our ${itemObjectName} - it has been removed from the ${itemObjectType} menu!`;
    }
  }
  return `Sorry, we don't sell ${itemObjectName}, try adding a new recipe!`;

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
