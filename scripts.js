let cartTotal = parseFloat(localStorage.getItem('cartTotal')) || 0;

function addToCart(price) {
    cartTotal += price;
    localStorage.setItem('cartTotal', cartTotal.toFixed(2));
    document.querySelector('.cart-total').innerText = `$${cartTotal.toFixed(2)}`;
}

// On page load, set the cart total
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.cart-total').innerText = `$${cartTotal.toFixed(2)}`;
});
