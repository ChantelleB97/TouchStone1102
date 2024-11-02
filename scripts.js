let cartTotal = 0;

function addToCart(price) {
    cartTotal += price;
    document.querySelector('.cart-total').textContent = `$${cartTotal.toFixed(2)}`;
}
