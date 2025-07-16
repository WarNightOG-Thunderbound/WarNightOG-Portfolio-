// products.js - Handles product display and filtering

document.addEventListener('DOMContentLoaded', function() {
    // Load products from JSON
    fetch('inventions.json')
        .then(response => response.json())
        .then(data => {
            displayProducts(data.inventions, '.inventory-grid');
        });

    // Filter functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    if (filterTabs) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                filterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const category = this.textContent.trim();
                filterProducts(category);
            });
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            searchProducts(searchTerm);
        });
    }
});

function displayProducts(products, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        if (product.category === 'minecraft') {
            productCard.classList.add('minecraft-card');
        }

        let badge = '';
        if (product.badge) {
            badge = `<div class="product-badge ${product.badge.class}">${product.badge.text}</div>`;
        }

        let price = `<div class="product-price">$${product.price.toFixed(2)}</div>`;
        if (product.oldPrice) {
            price = `
                <div class="product-price old">$${product.oldPrice.toFixed(2)}</div>
                <div class="product-price new">$${product.price.toFixed(2)}</div>
            `;
        }

        productCard.innerHTML = `
            ${badge}
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-meta">
                <span><i class="fas fa-download"></i> ${product.downloads}+</span>
                <span><i class="fas fa-star"></i> ${product.rating}</span>
            </div>
            <div class="product-footer">
                ${price}
                <a href="${product.purchaseLink}" class="product-button" target="_blank">
                    <i class="fas fa-shopping-cart"></i> BUY_NOW
                </a>
            </div>
        `;

        container.appendChild(productCard);
    });
}

function filterProducts(category) {
    if (category === 'ALL') {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.display = 'block';
        });
    } else {
        document.querySelectorAll('.product-card').forEach(card => {
            const cardCategory = card.classList.contains('minecraft-card') ? 'MINECRAFT' : 'WEB';
            card.style.display = cardCategory === category ? 'block' : 'none';
        });
    }
}

function searchProducts(term) {
    document.querySelectorAll('.product-card').forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const description = card.querySelector('.product-description').textContent.toLowerCase();
        card.style.display = title.includes(term) || description.includes(term) ? 'block' : 'none';
    });
}