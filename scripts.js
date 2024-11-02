let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
    // Ensure item has valid price and qty
    if (typeof item.price !== 'number' || typeof item.qty !== 'number') {
        console.error('Invalid item properties');
        return;
    }

    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTotal();
    alert('Item added to the cart.');
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
    alert('Cart Cleared!');
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

function processOrder() {
    // Implement order processing logic here
    alert('Order processed successfully!');
    clearCart();
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartTotal();

    // Form submission handler for Contact Us
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Save data logic here (e.g., send to a server)
        console.log('Form data:', { name, email, message });

        // Show alert
        alert('Thank you for your message.');

        // Optionally, reset the form
        form.reset();
    });
});