// mods-plugins.js - Handles Minecraft mods and plugins

document.addEventListener('DOMContentLoaded', function() {
    // Load mods
    fetch('mods.json')
        .then(response => response.json())
        .then(data => {
            displayProducts(data.mods, '.mods-grid');
        });

    // Load plugins
    fetch('plugins.json')
        .then(response => response.json())
        .then(data => {
            displayProducts(data.plugins, '.plugins-grid');
        });

    // Category filtering for plugins
    const categoryItems = document.querySelectorAll('.category-item');
    if (categoryItems) {
        categoryItems.forEach(item => {
            item.addEventListener('click', function() {
                categoryItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                const category = this.textContent.trim();
                filterPlugins(category);
            });
        });
    }

    // Sort functionality for plugins
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortPlugins(this.value);
        });
    }
});

function filterPlugins(category) {
    if (category === 'ALL') {
        document.querySelectorAll('.plugin-card').forEach(card => {
            card.style.display = 'block';
        });
    } else {
        document.querySelectorAll('.plugin-card').forEach(card => {
            const cardCategory = card.dataset.category;
            card.style.display = cardCategory === category ? 'block' : 'none';
        });
    }
}

function sortPlugins(criteria) {
    const container = document.querySelector('.plugins-grid');
    const cards = Array.from(document.querySelectorAll('.plugin-card'));
    
    cards.sort((a, b) => {
        switch(criteria) {
            case 'POPULARITY':
                return parseInt(b.dataset.downloads) - parseInt(a.dataset.downloads);
            case 'NEWEST':
                return new Date(b.dataset.date) - new Date(a.dataset.date);
            case 'PRICE_ASC':
                return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
            case 'PRICE_DESC':
                return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
            case 'RATING':
                return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
            default:
                return 0;
        }
    });

    cards.forEach(card => container.appendChild(card));
}