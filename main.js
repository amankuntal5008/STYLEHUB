// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Update cart count on page load
    updateCartCount();

    // Search functionality
    const searchForm = document.querySelector('.search-box form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });
    }
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('stylehub-cart')) || [];
    const product = findProductById(productId);

    if (product) {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('stylehub-cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} has been added to your cart!`);
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('stylehub-cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}