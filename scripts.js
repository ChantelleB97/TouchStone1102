// Initialize cart total
let cartTotal = 0;

// Function to add to cart and update total
function addToCart(price) {
    cartTotal += price;
    document.querySelector('.cart-total').textContent = `$${cartTotal.toFixed(2)}`;
}

// Reset cart total on load (for demonstration purposes)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.cart-total').textContent = `$${cartTotal.toFixed(2)}`;
});
