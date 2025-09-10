document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const suggestionsBox = document.getElementById('suggestions-box');

    if(searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            suggestionsBox.innerHTML = '';

            if (query.length > 1) {
                const filteredProducts = allProducts.filter(product =>
                    product.name.toLowerCase().includes(query)
                );

                if (filteredProducts.length > 0) {
                    filteredProducts.forEach(product => {
                        const suggestionItem = document.createElement('a');
                        suggestionItem.href = `product.html?id=${product.id}`; // You'll need to create this page
                        suggestionItem.className = 'suggestion-item';
                        suggestionItem.innerHTML = `
                            <img src="${product.image}" alt="${product.name}" class="suggestion-image">
                            <div class="suggestion-details">
                                <span class="suggestion-name">${product.name}</span>
                                <span class="suggestion-price">${product.price}</span>
                            </div>
                        `;
                        suggestionsBox.appendChild(suggestionItem);
                    });
                    suggestionsBox.style.display = 'block';
                } else {
                    suggestionsBox.style.display = 'none';
                }
            } else {
                suggestionsBox.style.display = 'none';
            }
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target)) {
                suggestionsBox.style.display = 'none';
            }
        });
    }
});

