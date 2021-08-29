class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(custName, isMorningTime) {
   if (isMorningTime) {
     return `Good morning, ${custName}!`;
   } else {
      return `Hello, ${custName}!`;
   }
 }

 checkForFood(foodItemObject) {
   for (var i = 0; i < this.restaurant.menus[foodItemObject.type].length; i++) {
     if(foodItemObject.name === this.restaurant.menus[foodItemObject.type][i].name) {
       return `Yes, we're serving ${foodItemObject.name} today!`;
     }
   }
   return `Sorry, we aren't serving ${foodItemObject.name} today.`;
 }
}

module.exports = Chef;
