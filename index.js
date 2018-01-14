var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100) + 1;
var item_object = {};
item_object[item] = price;
cart.push(item_object);
console.log(item + " has been added to your cart.");
return cart;
}

function viewCart() {
 if (cart.length === 0) {
 console.log('Your shopping cart is empty.')
  }
	  var items = [];
	  		for (var i = 0; i < cart.length; i++) {
	    		var items = cart[i];
	    		var item = Object.keys(items)[0];
	    		var price = items[item];

	    items.push(`${item} at \$${price}`);
	  }
		  switch(items.length) {
		    case 1:
		      break;
		    case 2:
		      items = items.join(' and ');
		      break;
		    default:
		      items[l-1] = 'and '.concat(items[l-1]);
		      items = items.join(', ');
		  }
  console.log(`In your cart, you have ${items}.`)
}

function total() {
  let amount = 0; 

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
     amount += cart[i][item];
    }
  }
  console.log(amount);
  return amount;
}


function removeFromCart(item) {
 for(var i = 0, l = cart.length; i < l; i++)
 { 
   for(var list in cart[i]) {
   if (item === list) {
     cart.splice(i,1);
     return cart;
   }
 }
}
console.log('That item is not in your cart.');
return cart;
}

function placeOrder(cardNumber) {
 if (cardNumber === undefined) {
   console.log("Sorry, we don\'t have a credit card on file for you.");
 } else {
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
   cart.length = 0;
   return cart;
 }
}

