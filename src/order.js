function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
}

function refundOrder(orderNum, deliveryOrders) {
  //if orderNum = order number property of that element then splice that element from the array
  var hasRefundableOrder = false;
  var matchingOrderIndex;

  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNum === deliveryOrders[i].orderNumber) {
       hasRefundableOrder = true;
       matchingOrderIndex = i;
    }
  }

  if (hasRefundableOrder === true) {
    deliveryOrders.splice(matchingOrderIndex,1);
  }

}

function listItems(deliveryOrders) {
  //should list out all of the order items by name
  var itemsList = [];

  for (var i = 0; i < deliveryOrders.length; i++) {
       itemsList.push(deliveryOrders[i].item);
  }

  return itemsList.join(', ');
}

function searchOrder(deliveryOrders, order) {
  //it should tell us if an order is in the list
  //is order in deliveryOrders list? if so then isOnList === true
  var isOnList = false;
  
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === order) {
      isOnList = true;
    }
  }

  return isOnList;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
