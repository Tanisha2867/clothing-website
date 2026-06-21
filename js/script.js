// Shopping Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    const product = {
        id: Date.now(),
        name: productName,
        price: price,
        quantity: 1
    };

    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Product added to cart!');
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 2000;
        animation: slideInDown 0.3s ease;
    `;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    setupMobileMenu();
    setupFormValidation();
});

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// Form Validation
function setupFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '#e0e0e0';
                }
            });

            if (isValid) {
                showNotification('Message sent successfully!');
                form.reset();
            } else {
                showNotification('Please fill all fields');
            }
        });
    });
}

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    });
});

// Price filter functionality
function filterProductsByPrice(maxPrice) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const priceText = product.querySelector('.price').textContent;
        const price = parseFloat(priceText.replace('$', ''));
        product.style.display = price <= maxPrice ? 'block' : 'none';
    });
}

// Search functionality
function searchProducts(query) {
    const products = document.querySelectorAll('.product-card');
    const searchTerm = query.toLowerCase();

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const category = product.querySelector('.category').textContent.toLowerCase();
        
        if (productName.includes(searchTerm) || category.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑';
backToTopBtn.id = 'backToTop';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #667eea;
    color: white;
    border: none;
    padding: 12px 15px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all 0.3s ease;
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
