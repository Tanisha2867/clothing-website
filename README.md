# StyleHub - Responsive Clothing Website

A modern, fully responsive e-commerce website built with HTML, CSS, and JavaScript for a professional clothing business.

## Features

✨ **Responsive Design**
- Mobile-first approach
- Works seamlessly on all devices (phones, tablets, desktops)
- Adaptive layouts and navigation

🛍️ **Shopping Features**
- Product catalog with categories
- Shopping cart functionality
- Add/remove items from cart
- Quantity management
- Local storage for cart persistence
- Price display and discounts

🎨 **Modern UI/UX**
- Professional gradient backgrounds
- Smooth animations and transitions
- Star ratings for products
- Product badges (New, Sale, Hot)
- Intuitive navigation

📱 **User-Friendly Interface**
- Easy product browsing
- Quick add-to-cart functionality
- Newsletter subscription
- Contact form
- Social media links

## Pages

### 1. **index.html** - Home Page
- Navigation bar with shopping cart
- Hero section with call-to-action
- Product categories
- Featured products grid
- About section
- Newsletter subscription
- Contact information
- Footer with links

### 2. **cart.html** - Shopping Cart
- View all cart items
- Adjust quantities
- Remove items
- Cart summary with totals
- Checkout button
- Empty cart state

## File Structure

```
clothing-website/
├── index.html           # Home page
├── cart.html            # Shopping cart page
├── css/
│   └── style.css        # All styles (responsive)
├── js/
│   └── script.js        # JavaScript functionality
└── README.md            # Documentation
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive styling with media queries
- **JavaScript (ES6)** - Interactive features
- **Font Awesome** - Icons
- **LocalStorage** - Cart persistence

## Features Breakdown

### Responsive Design
- **Desktop** (1200px+): Full multi-column layouts
- **Tablet** (768px-1199px): 2-column grids
- **Mobile** (below 768px): Single column, hamburger menu

### Shopping Cart
- Products persist in browser's local storage
- Cart count updates in real-time
- Add/remove items functionality
- Quantity adjustment
- Total price calculation

### Navigation
- Sticky navigation bar
- Mobile hamburger menu
- Search and cart icons
- User account icon
- Smooth scrolling

### Products
- 6 featured products with images
- Product ratings (5-star system)
- Price display with discounts
- Category badges
- Hover effects

## How to Use

1. **Clone or Download** the repository
2. **Open index.html** in your web browser
3. **Browse Products** and click "Add to Cart"
4. **View Cart** by clicking the shopping cart icon
5. **Manage Items** - adjust quantities or remove items
6. **Checkout** to complete your purchase

## Customization

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --light-bg: #f5f7fa;
}
```

### Add Products
Edit the products grid in `index.html` and add more `.product-card` elements

### Update Content
- Change business name "StyleHub" to your brand
- Update contact information
- Add your actual product images
- Customize company description

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading for images
- CSS animations (GPU accelerated)
- Optimized media queries
- Minimal JavaScript
- Local storage caching

## Future Enhancements

- Backend integration with payment gateway
- User authentication and profiles
- Product search and advanced filtering
- Product reviews and comments
- Wishlist functionality
- Order tracking
- Admin dashboard
- Inventory management
- Email notifications

## License

This project is free to use and modify for your personal or business use.

## Support

For questions or issues, please contact support@stylehub.com

---

**Made with ❤️ by StyleHub Team**
