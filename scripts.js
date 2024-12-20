let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
    if (!item || typeof item.price !== 'number' || typeof item.qty !== 'number') {
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

function clearCart(showAlert = true) {
    cart = [];
    localStorage.removeItem('cart');
    updateCartTotal();
    renderCartItems();
    if (showAlert) {
        alert('Cart Cleared!');
    }
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartTotal();
        renderCartItems();
    } else {
        console.error('Invalid index for cart item removal');
    }
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

function showOrderForm() {
    if (cart.length === 0) {
        alert('Cart is empty.');
        return;
    }

    document.getElementById('order-form-view').style.display = 'block';
    document.getElementById('cart-view').classList.add('order-form-active');
    document.getElementById('clear-cart-btn').style.display = 'none';
    document.querySelector('h2').innerText = 'Your Cart';
}

function hideOrderForm() {
    document.getElementById('order-form-view').style.display = 'none';
    document.getElementById('cart-view').classList.remove('order-form-active');
    document.getElementById('clear-cart-btn').style.display = 'inline-block';
}

function processOrder(event) {
    event.preventDefault();

    const name = document.getElementById('customer-name').value;
    const address = document.getElementById('customer-address').value;
    const phone = document.getElementById('customer-phone').value;

    const orderId = Math.floor(Math.random() * 1000000);

    alert(`Order number ${orderId}. Thank you for your order, ${name}!`);

    console.log('Order Details:', { orderId, name, address, phone, cart });

    // Clear the cart without showing the alert
    clearCart(false);
    document.getElementById('order-form').reset();
    hideOrderForm();
    document.getElementById('cart-view').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartTotal();

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form data:', { name, email, message });

        alert('Thank you for your message.');
        form.reset();
    });
});