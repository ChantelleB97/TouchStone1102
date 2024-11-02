let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTotal();
}

function updateCartTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    document.querySelector('.cart-total').innerText = `$${total.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    updateCartTotal();
    renderCartItems();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTotal();
    renderCartItems();
}

function toggleCartView() {
    const cartView = document.getElementById('cart-view');
    cartView.style.display = cartView.style.display === 'none' ? 'block' : 'none';
    renderCartItems();
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.name}" style="width:50px;height:50px;"> ${item.name} - $${item.price} x ${item.qty} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsContainer.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartTotal();
});
