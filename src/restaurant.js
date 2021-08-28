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
//should add an item to the lunch menu:
//to equal { Object (name, price, ...)
  // restaurantObject.menus.lunch.push(itemObject);

// should add menu items to the correct menu automatically
//if the type = lunch push the item onto the lunch menu
//if the type = breakfast push the item onto the breakfast menu
//shouldn't add the same menu item more than once

  if (itemObject.type === "breakfast") {
    var isDuplicate = false;
    for (var i = 0; i < restaurantObject.menus.breakfast.length; i++) {
      if (itemObject === restaurantObject.menus.breakfast[i]) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      restaurantObject.menus.breakfast.push(itemObject);
    }
  } else if (itemObject.type === "lunch") {
    var isDuplicate = false;
    for (var i = 0; i < restaurantObject.menus.lunch.length; i++) {
      if (itemObject === restaurantObject.menus.lunch[i]) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      restaurantObject.menus.lunch.push(itemObject);
    }
  } else if (itemObject.type === "dinner") {
    var isDuplicate = false;
    for (var i = 0; i < restaurantObject.menus.dinner.length; i++) {
      if (itemObject === restaurantObject.menus.dinner[i]) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      restaurantObject.menus.dinner.push(itemObject);
    }
  }

}

function removeMenuItem(restaurantObject, itemObjectName, itemObjectType) {
  //should remove an item from the menu to update it
  if (itemObjectType === "breakfast") {
    for (var i = 0; i < restaurantObject.menus.breakfast.length; i++) {
      if (itemObjectName === restaurantObject.menus.breakfast[i].name) {
        restaurantObject.menus.breakfast.splice(i, 1);
        return `No one is eating our ${itemObjectName} - it has been removed from the ${itemObjectType} menu!`;
      }
    }
    return `Sorry, we don't sell ${itemObjectName}, try adding a new recipe!`;
  } else if (itemObjectType === "lunch") {
    for (var i = 0; i < restaurantObject.menus.lunch.length; i++) {
      if (itemObjectName === restaurantObject.menus.lunch[i].name) {
        restaurantObject.menus.lunch.splice(i, 1);
        return `No one is eating our ${itemObjectName} - it has been removed from the ${itemObjectType} menu!`;
      }
    }
    return `Sorry, we don't sell ${itemObjectName}, try adding a new recipe!`;
  } else if (itemObjectType == "dinner") {
    for (var i = 0; i < restaurantObject.menus.dinner.length; i++) {
      if (itemObjectName === restaurantObject.menus.dinner[i].name) {
        restaurantObject.menus.dinner.splice(i, 1);
        return `No one is eating our ${itemObjectName} - it has been removed from the ${itemObjectType} menu!`;
      }
    }
    return `Sorry, we don't sell ${itemObjectName}, try adding a new recipe!`;
  }

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
