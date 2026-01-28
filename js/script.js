// ============================================================================
// MENU DATA
// ============================================================================
const MENU_ITEMS = [
  // Starters
{ id: 'french-fries', name: 'French Fries', price: 200, category: 'Starters', image: 'public/buffalo-chicken-burger.jpg' },
{ id: 'garlic-fries', name: 'Garlic Fries', price: 280, category: 'Starters', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'loaded-fries', name: 'Loaded Fries', price: 550, category: 'Starters', image: 'public/bbq-chicken-wrap.jpg' },
{ id: 'special-cheese-fries', name: 'Special Sheese Fries', price: 650, category: 'Starters', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'hot-wings', name: 'Hot Wings (5 pcs)', price: 300, category: 'Starters', image: 'public/classic-beef-burger.png' },
{ id: 'hot-shots', name: 'Hot Shots', price: 280, category: 'Starters', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'nuggets', name: 'Nuggets (5 pcs)', price: 280, category: 'Starters', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'peri-peri', name: 'Peri Peri', price: 600, category: 'Starters', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'honey-wings', name: 'Honey Wings', price: 600, category: 'Starters', image: 'public/large-chicken-nuggets.jpg' },


  // Burgers
  { id: 'crispy-burger', name: 'Crispy Burger', price: 299, category: 'Burgers', image: 'public' },
  { id: 'chicken-burger', name: 'Chicken Burger', price: 299, category: 'Burgers', image: 'public/buffalo-chicken-burger.jpg' },
  { id: 'zinger-burger', name: 'Zinger Burger', price: 399, category: 'Burgers', image: 'https://i.postimg.cc/zDc982z1/Whats-App-Image-2026-01-07-at-2-33-25-AM.jpg' },
  { id: 'zinger-cheese-burger', name: 'Zinger Cheese Burger', price: 480, category: 'Burgers', image: 'public/buffalo-chicken-burger.jpg' },
  { id: 'grill-cheese-burger', name: 'Grill Cheese Burger', price: 460, category: 'Burgers', image: 'public/large-chicken-nuggets.jpg' },
  { id: 'fillet-king-burger', name: 'Fillet King Burger', price: 620, category: 'Burgers', image: 'public/bbq-chicken-wrap.jpg' },
  { id: 'double-decker-burger', name: 'Double Decker Burger', price: 580, category: 'Burgers', image: 'public/bbq-chicken-wrap.jpg' },
  { id: 'american-delight', name: 'American Delight', price: 680, category: 'Burgers', image: 'public/large-chicken-nuggets.jpg' },
  { id: 'grand-king-burger', name: 'Grand King Burger', price: 640, category: 'Burgers', image: 'public/buffalo-chicken-burger.jpg' },
  { id: 'garden-burger', name: 'Garden Burger', price: 450, category: 'Burgers', image: 'public/large-chicken-nuggets.jpg' },

  // Wraps
 { id: 'cheese-wrap-bbq', name: 'BBQ Cheese Wrap', price: 520, category: 'Wraps', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'cheese-wrap-grill', name: 'Grill Cheese Wrap', price: 520, category: 'Wraps', image: 'public/bbq-chicken-wrap.jpg' },
{ id: 'wrap-crispy', name: 'Fried Crispy Wrap', price: 550, category: 'Wraps', image: 'public/large-chicken-nuggets.jpg' },

  // Shawarma & Rolls
{ id: 'shawarma-chicken', name: 'Chicken Shawarma', price: 260, category: 'Shawarma & Rolls', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'shawarma-chicken', name: 'Chicken cheese Shawarma', price: 300, category: 'Shawarma & Rolls', image: 'public/buffalo-chicken-burger.jpg' },
{ id: 'chicken-paratha-roll', name: 'Chicken Shawarma', price: 300, category: 'Shawarma & Rolls', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'shawarma-zinger', name: 'Zinger Shawarma', price: 360, category: 'Shawarma & Rolls', image: 'public/bbq-chicken-wrap.jpg' },
{ id: 'roll-paratha', name: 'Zinger Paratha Roll', price: 380, category: 'Shawarma & Rolls', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'shawarma-platter-chicken', name: 'Chicken Platter Shawarma', price: 500, category: 'public/buffalo-chicken-burger.jpg' },


  // Pasta
 { id: 'pasta-alfredo', name: 'Chicken Alfredo Pasta', price: 550, category: 'Pasta', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'pasta-creamy', name: 'Chicken Creamy Pasta', price: 600, category: 'Pasta', image: 'public/bbq-chicken-wrap.jpg' },
{ id: 'pasta-lazania', name: 'Chicken Lazania Pasta', price: 650, category: 'Pasta', image: 'public/large-chicken-nuggets.jpg' },

  // Sandwiches
 { id: 'sandwich-club', name: 'Club Sandwich', price: 500, category: 'Sandwiches', image: 'public/buffalo-chicken-burger.jpg' },
{ id: 'sandwich-panini', name: 'Panini Sandwich', price: 500, category: 'Sandwiches', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'sandwich-peri', name: 'Peri Peri Sandwich', price: 550, category: 'Sandwiches', image: 'public/bbq-chicken-wrap.jpg' },
{ id: 'chicken-grill-sandwich', name: 'Chicken Grill Sandwich', price: 550, category: 'Sandwiches', image: 'public/large-chicken-nuggets.jpg' },

  // Pizza
 { id: 'pizza-small', name: 'Small Pizza', price: 490, category: 'Pizza', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'pizza-medium', name: 'Medium Pizza', price: 900, category: 'Pizza', image: 'public/bbq-chicken-wrap.jpg' },
{ id: 'pizza-large', name: 'Large Pizza', price: 1450, category: 'Pizza', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'pizza-family', name: 'Family Pizza', price: 2100, category: 'Pizza', image: 'public/buffalo-chicken-burger.jpg' },

// Newly Launched
{ id: 'new-finger-fish-half', name: 'Finger Fish (Half)', price: 1500, category: 'Newly Launched', image: 'public/buffalo-chicken-burger.jpg' },
{ id: 'new-finger-fish-full', name: 'Finger Fish (Full)', price: 3000, category: 'Newly Launched', image: 'public/large-chicken-nuggets.jpg' },
{ id: 'new-fish-burger', name: 'Fish Burger', price: 650, category: 'Newly Launched', image: 'public/bbq-chicken-wrap.jpg' },
{ id: 'new-fish-wrap', name: 'Fish Wrap', price: 650, category: 'Newly Launched', image: 'public/large-chicken-nuggets.jpg' },


];

const BRANCHES = [
  { name: 'Fringos Location', phone: '055-3250057', address: 'Mumtaz Market, Near Capri Cinema, G.T Road, Gujranwala' },
];

// ============================================================================
// STATE MANAGEMENT
// ============================================================================
let cart = [];
let activeCategory = 'Burgers';

// ============================================================================
// DOM ELEMENTS
// ============================================================================
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const menuCategories = document.getElementById('menuCategories');
const menuItemsGrid = document.getElementById('menuItemsGrid');
const branchesGrid = document.getElementById('branchesGrid');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNavMenu = document.getElementById('mobileNavMenu');
const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn.querySelector('.close-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// ============================================================================
// INITIALIZATION
// ============================================================================
function init() {
  renderCategories();
  renderMenuItems();
  renderBranches();
  setupEventListeners();
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================
function setupEventListeners() {
  cartBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  checkoutBtn.addEventListener('click', checkout);
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
  document.addEventListener('scroll', () => {
    if (mobileNavMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });
}

// ============================================================================
// MOBILE MENU
// ============================================================================
function toggleMobileMenu() {
  if (mobileNavMenu.classList.contains('active')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  mobileNavMenu.classList.add('active');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
}

function closeMobileMenu() {
  mobileNavMenu.classList.remove('active');
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
}

// ============================================================================
// CATEGORY RENDERING
// ============================================================================
function renderCategories() {
const categories = [
  'Starters',
  'Burgers',
  'Wraps',
  'Shawarma & Rolls',
  'Pasta',
  'Sandwiches',
  'Pizza',
  'Newly Launched'
];
  
  menuCategories.innerHTML = categories.map(category => `
    <button class="category-btn ${category === activeCategory ? 'active' : ''}" data-category="${category}">
      ${category}
    </button>
  `).join('');

  menuCategories.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeCategory = e.target.dataset.category;
      menuCategories.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderMenuItems();
    });
  });
}

// ============================================================================
// MENU RENDERING
// ============================================================================
function renderMenuItems() {
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);
  
  menuItemsGrid.innerHTML = filteredItems.map(item => {
    const quantity = getItemQuantity(item.id);
    return `
      <div class="menu-item">
        <div class="menu-item-image">
          <img src="${item.image}" alt="${item.name}">
          <div class="menu-item-price-badge">Rs. ${item.price}</div>
        </div>
        <h4 class="menu-item-name">${item.name}</h4>

        <div class="menu-item-footer">
          <div class="menu-item-price">Rs. ${item.price}</div>
          <button class="add-btn" data-id="${item.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  menuItemsGrid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = e.currentTarget.dataset.id;
      addToCart(itemId);
    });
  });
}

// ============================================================================
// BRANCHES RENDERING
// ============================================================================
function renderBranches() {
  branchesGrid.innerHTML = BRANCHES.map(branch => `
    <div class="branch-card">
      <div>
        <h3 class="branch-name">${branch.name}</h3>
        <div class="branch-address">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${branch.address}</span>
        </div>
        <div class="branch-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>${branch.phone}</span>
        </div>
      </div>
      <a href="tel:${branch.phone.replace(/-/g, '')}" class="call-btn">Call Now</a>
    </div>
  `).join('');
}

// ============================================================================
// CART MANAGEMENT
// ============================================================================
function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  const existingItem = cart.find(i => i.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  updateCart();
  openCart();
}

function updateQuantity(itemId, delta) {
  const item = cart.find(i => i.id === itemId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeItem(itemId);
    } else {
      updateCart();
    }
  }
}

function removeItem(itemId) {
  cart = cart.filter(i => i.id !== itemId);
  updateCart();
}

function updateCart() {
  updateCartCount();
  renderCartItems();
  updateTotal();
}

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = total;
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalPrice.textContent = `Rs. ${total}`;
  checkoutBtn.disabled = cart.length === 0;
}

function renderCartItems() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-header">
          <h3 class="cart-item-name">${item.name}</h3>
          <span class="cart-item-price">Rs. ${item.price * item.quantity}</span>
        </div>
        <div class="cart-item-controls">
          <div class="quantity-control">
            <button class="quantity-btn" data-id="${item.id}" data-action="decrease">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" data-id="${item.id}" data-action="increase">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
          <button class="remove-btn" data-id="${item.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Attach event listeners
  cartItems.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = e.currentTarget.dataset.id;
      const action = e.currentTarget.dataset.action;
      updateQuantity(itemId, action === 'increase' ? 1 : -1);
    });
  });

  cartItems.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = e.currentTarget.dataset.id;
      removeItem(itemId);
    });
  });
}

// ============================================================================
// CART DRAWER
// ============================================================================
function openCart() {
  cartDrawer.classList.add('active');
}

function closeCart() {
  cartDrawer.classList.remove('active');
}

// ============================================================================
// CHECKOUT
// ============================================================================
function checkout() {
  if (cart.length === 0) return;

  const message = 
    `*New Order from Fringos Website*\n` +
    `----------------------------------\n` +
    cart.map(item => `• ${item.name}\n  Qty: ${item.quantity} | Rs. ${item.price * item.quantity}`).join('\n\n') +
    `\n----------------------------------\n` +
    `*TOTAL: Rs. ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}*\n\n` +
    `Please confirm my order. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/923217422182?text=${encodedMessage}`, '_blank');
}

// ============================================================================
// GET ITEM QUANTITY
// ============================================================================
function getItemQuantity(itemId) {
  return cart.find(i => i.id === itemId)?.quantity || 0;
}

// ============================================================================
// START APP
// ============================================================================
document.addEventListener('DOMContentLoaded', init);
