let cartTotal = 0;

function addToCart(price) {
    cartTotal += price;
    document.querySelector('.cart-total').innerText = `$${cartTotal.toFixed(2)}`;
}

// Optional: You can add functions to clear the cart or perform other actions if needed
