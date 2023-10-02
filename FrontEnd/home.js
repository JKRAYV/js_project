const computerHardwareProducts = [
        // Monitors
        {
            id: 1,
            name: 'ASUS TUF Gaming 27-inch Gaming Monitor',
            description: '144Hz gaming monitor with QHD resolution.',
            price: 399.99,
            brand: 'ASUS',
            category: 'Monitors',
            image: '27-inch Gaming Monitor.jpg',
        },
        {
            id: 2,
            name: 'Dell 24-inch Office Monitor',
            description: 'Full HD monitor for productivity and office use.',
            price: 179.99,
            brand: 'Dell',
            category: 'Monitors',
            image: 'office-monitor.jpg',
        },
        {
            id: 3,
            name: 'LG 32-inch 4K Monitor',
            description: 'Ultra HD monitor for content creators and professionals.',
            price: 499.99,
            brand: 'LG',
            category: 'Monitors',
            image: '4k-monitor.jpg',
        },
        {
            id: 4,
            name: 'SAMSUNG Odyssey UltraWide Curved Monitor',
            description: '34-inch curved monitor for immersive multimedia experience.',
            price: 999.99,
            brand: 'Samsung',
            category: 'Monitors',
            image: 'ultrawide-monitor.jpg',
        },
        {
            id: 5,
            name: 'acer 24-inch IPS Monitor',
            description: 'IPS panel monitor with accurate color reproduction.',
            price: 229.99,
            brand: 'Acer',
            category: 'Monitors',
            image: 'ips-monitor.jpg',
        },
    
        // Graphics Cards
        {
            id: 6,
            name: 'RTX 3080 Founders Edition',
            description: 'High-end graphics card for gaming enthusiasts.',
            price: 870.35,
            brand: 'NVIDIA',
            category: 'Graphics Cards',
            image: 'rtx-3080.jpg',
        },
        {
            id: 7,
            name: 'XFX Speedster SWFT 319 AMD Radeon RX 6900 XT',
            description: 'Top-tier AMD graphics card for gaming and content creation.',
            price: 799.99,
            brand: 'AMD',
            category: 'Graphics Cards',
            image: 'rx-6900xt.jpg',
        },
        {
            id: 8,
            name: 'NVIDIA GeForce GTX 1660',
            description: 'Mid-range graphics card for budget gaming PCs.',
            price: 299.99,
            brand: 'NVIDIA',
            category: 'Graphics Cards',
            image: 'gtx-1660.jpg',
        },
        {
            id: 9,
            name: 'ASUS ROG Strix AMD Radeon RX 570',
            description: 'Entry-level AMD graphics card for casual gaming.',
            price: 149.99,
            brand: 'AMD',
            category: 'Graphics Cards',
            image: 'rx-570.jpg',
        },
        {
            id: 10,
            name: 'NVIDIA Quadro P5000',
            description: 'Workstation-grade graphics card for professionals.',
            price: 999.99,
            brand: 'NVIDIA',
            category: 'Graphics Cards',
            image: 'quadro-p5000.jpg',
        },
    
        // Keyboards
        {
            id: 11,
            name: 'Corsair Wired K60 RGB Pro Mechanical Gaming Keyboard',
            description: 'RGB mechanical keyboard for gamers with customizable switches.',
            price: 129.99,
            brand: 'Corsair',
            category: 'Keyboards',
            image: 'mechanical-keyboard.jpg',
        },
        {
            id: 12,
            name: 'Logitech K780 Multi-Device Wireless Bluetooth Keyboard',
            description: 'Compact wireless keyboard for mobile and office use.',
            price: 49.99,
            brand: 'Logitech',
            category: 'Keyboards',
            image: 'bluetooth-keyboard.jpg',
        },
        {
            id: 13,
            name: 'Razer BlackWidow V3 Tenkeyless Mechanical Keyboard',
            description: 'Compact mechanical keyboard without the numeric keypad.',
            price: 73.95,
            brand: 'Razer',
            category: 'Keyboards',
            image: 'tenkeyless-keyboard.jpg',
        },
        {
            id: 14,
            name: 'Microsoft Ergonomic Split Keyboard',
            description: 'Split design keyboard for improved typing ergonomics.',
            price: 149.99,
            brand: 'Microsoft',
            category: 'Keyboards',
            image: 'split-keyboard.jpg',
        },
        {
            id: 15,
            name: 'SteelSeries Apex 7 Backlit Gaming Keyboard',
            description: 'Gaming keyboard with customizable RGB lighting.',
            price: 79.99,
            brand: 'SteelSeries',
            category: 'Keyboards',
            image: 'backlit-keyboard.jpg',
        },
    
        // Mice
        {
            id: 16,
            name: 'Razer Mamba Elite Wired Gaming Mouse',
            description: 'High-precision gaming mouse with customizable DPI.',
            price: 59.99,
            brand: 'Razer',
            category: 'Mice',
            image: 'gaming-mouse.jpg',
        },
        {
            id: 17,
            name: 'Wireless Optical Mouse',
            description: 'Wireless optical mouse with long battery life.',
            price: 29.99,
            brand: 'Logitech',
            category: 'Mice',
            image: 'wireless-mouse.jpg',
        },
        {
            id: 18,
            name: 'Ergonomic Vertical Mouse',
            description: 'Vertical mouse design for reduced wrist strain.',
            price: 39.99,
            brand: 'Anker',
            category: 'Mice',
            image: 'vertical-mouse.jpg',
        },
        {
            id: 19,
            name: 'Programmable MMO Mouse',
            description: 'Mouse with extra buttons for MMO gaming and macros.',
            price: 69.99,
            brand: 'Corsair',
            category: 'Mice',
            image: 'mmo-mouse.jpg',
        },
        {
            id: 20,
            name: 'Ambidextrous Gaming Mouse',
            description: 'Gaming mouse suitable for both left and right-handed users.',
            price: 49.99,
            brand: 'SteelSeries',
            category: 'Mice',
            image: 'ambidextrous-mouse.jpg',
        },
    
        // Headphones
        {
            id: 21,
            name: 'Over-Ear Noise-Canceling Headphones',
            description: 'High-quality headphones with active noise cancellation.',
            price: 249.99,
            brand: 'Sony',
            category: 'Headphones',
            image: 'noise-canceling-headphones.jpg',
        },
        {
            id: 22,
            name: 'In-Ear Wireless Earbuds',
            description: 'Wireless earbuds with crystal clear audio and long battery life.',
            price: 129.99,
            brand: 'Apple',
            category: 'Headphones',
            image: 'wireless-earbuds.jpg',
        },
        {
            id: 23,
            name: 'Gaming Headset',
            description: 'Immersive gaming headset with surround sound and microphone.',
            price: 79.99,
            brand: 'HyperX',
            category: 'Headphones',
            image: 'gaming-headset.jpg',
        },
        {
            id: 24,
            name: 'On-Ear DJ Headphones',
            description: 'DJ-style headphones for professional audio monitoring.',
            price: 149.99,
            brand: 'Audio-Technica',
            category: 'Headphones',
            image: 'dj-headphones.jpg',
        },
        {
            id: 25,
            name: 'Sports Wireless Headphones',
            description: 'Wireless headphones designed for sports and workouts.',
            price: 59.99,
            brand: 'JBL',
            category: 'Headphones',
            image: 'sports-headphones.jpg',
        },
    
        // SSDs
        {
            id: 26,
            name: '1TB SATA SSD',
            description: 'High-speed SATA SSD for storage upgrades.',
            price: 119.99,
            brand: 'Samsung',
            category: 'Storage',
            image: 'sata-ssd.jpg',
        },
        {
            id: 27,
            name: '500GB NVMe M.2 SSD',
            description: 'Ultra-fast NVMe M.2 SSD for rapid data access.',
            price: 89.99,
            brand: 'Western Digital',
            category: 'Storage',
            image: 'nvme-ssd.jpg',
        },
        {
            id: 28,
            name: '2TB External SSD',
            description: 'Portable external SSD for data storage and backups.',
            price: 249.99,
            brand: 'SanDisk',
            category: 'Storage',
            image: 'external-ssd.jpg',
        },
        {
            id: 29,
            name: '256GB mSATA SSD',
            description: 'Compact mSATA SSD for laptops and embedded systems.',
            price: 69.99,
            brand: 'Crucial',
            category: 'Storage',
            image: 'msata-ssd.jpg',
        },
        {
            id: 30,
            name: '1TB PCIe M.2 SSD',
            description: 'High-capacity PCIe M.2 SSD for fast storage.',
            price: 149.99,
            brand: 'Kingston',
            category: 'Storage',
            image: 'pcie-m2-ssd.jpg',
        },
    
        // HDDs
        {
            id: 31,
            name: '4TB Desktop HDD',
            description: 'High-capacity HDD for desktop computers and storage servers.',
            price: 99.99,
            brand: 'Seagate',
            category: 'Storage',
            image: 'desktop-hdd.jpg',
        },
        {
            id: 32,
            name: '2TB Laptop HDD',
            description: '2.5-inch laptop HDD for additional storage capacity.',
            price: 69.99,
            brand: 'Toshiba',
            category: 'Storage',
            image: 'laptop-hdd.jpg',
        },
        {
            id: 33,
            name: '6TB NAS HDD',
            description: 'Network-attached storage (NAS) HDD for data backup and sharing.',
            price: 149.99,
            brand: 'WD Red',
            category: 'Storage',
            image: 'nas-hdd.jpg',
        },
        {
            id: 34,
            name: '1TB Surveillance HDD',
            description: 'HDD optimized for surveillance systems and CCTV.',
            price: 79.99,
            brand: 'Seagate',
            category: 'Storage',
            image: 'surveillance-hdd.jpg',
        },
    
        // M.2 Drives
        {
            id: 35,
            name: '512GB NVMe M.2 Drive',
            description: 'Fast NVMe M.2 drive for laptops and desktops.',
            price: 79.99,
            brand: 'Kingston',
            category: 'Storage',
            image: 'm2-drive.jpg',
        },
        {
            id: 36,
            name: '256GB SATA M.2 Drive',
            description: 'SATA M.2 drive for affordable storage upgrades.',
            price: 49.99,
            brand: 'Crucial',
            category: 'Storage',
            image: 'sata-m2-drive.jpg',
        },
        {
            id: 37,
            name: '1TB PCIe M.2 Drive',
            description: 'High-capacity PCIe M.2 drive for data-intensive tasks.',
            price: 149.99,
            brand: 'Samsung',
            category: 'Storage',
            image: 'pcie-m2-drive.jpg',
        },
        {
            id: 38,
            name: '128GB NVMe M.2 Drive',
            description: 'Compact NVMe M.2 drive for system boot and applications.',
            price: 39.99,
            brand: 'Western Digital',
            category: 'Storage',
            image: 'nvme-m2-drive.jpg',
        },
    
        // CPUs
        {
            id: 39,
            name: 'Intel Core i9-11900K',
            description: 'High-performance Intel Core processor for gaming and multitasking.',
            price: 499.99,
            brand: 'Intel',
            category: 'Processors',
            image: 'core-i9.jpg',
        },
        {
            id: 40,
            name: 'AMD Ryzen 9 5900X',
            description: 'Powerful AMD Ryzen processor with Zen 3 architecture.',
            price: 549.99,
            brand: 'AMD',
            category: 'Processors',
            image: 'ryzen-9.jpg',
        },
        {
            id: 41,
            name: 'Intel Core i5-11600K',
            description: 'Mid-range Intel Core processor for gaming and productivity.',
            price: 299.99,
            brand: 'Intel',
            category: 'Processors',
            image: 'core-i5.jpg',
        },
        {
            id: 42,
            name: 'AMD Ryzen 5 5600X',
            description: 'Budget-friendly AMD Ryzen processor with excellent performance.',
            price: 249.99,
            brand: 'AMD',
            category: 'Processors',
            image: 'ryzen-5.jpg',
        },
        {
            id: 43,
            name: 'Intel Core i3-10100',
            description: 'Entry-level Intel Core processor for basic computing tasks.',
            price: 129.99,
            brand: 'Intel',
            category: 'Processors',
            image: 'core-i3.jpg',
        },
    ];
    
    module.exports = computerHardwareProducts;
     // Function to display products based on filters
     function filterProducts() {
            const productName = document.getElementById("productName").value.trim().toLowerCase();
            const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
            const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Number.MAX_VALUE;
            const category = document.getElementById("category").value;

            const filteredProducts = computerHardwareProducts.filter(product => {
                const nameMatch = product.name.toLowerCase().includes(productName);
                const priceInRange = product.price >= minPrice && product.price <= maxPrice;
                const categoryMatch = category === "" || product.category === category;
                return nameMatch && priceInRange && categoryMatch;
            });

            displayProducts(filteredProducts);
        }

        // Function to display products
        function displayProducts(products) {
const productList = document.getElementById("productList");
            productList.innerHTML = "";

            if (products.length === 0) {
                productList.innerHTML = "<p>No products match your criteria.</p>";} else {
                products.forEach(product => {
                    const productCard = `
                        <div class="card mb-3 border-dark" id="product">
                            <img src="static/images/${product.image}" "card-img-overlay img-fluid" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text"><strong>Price: $${product.price}</strong></p>
                            </div>
                        </div>
                    `;
                    productList.innerHTML += productCard;
                });
            }
        }

        // Function to reset filters and display all products
        function resetFilters() {
            document.getElementById("productName").value = "";
            document.getElementById("minPrice").value = "";
            document.getElementById("maxPrice").value = "";
            document.getElementById("category").value = "";
            displayProducts(computerHardwareProducts);
        }

        // Initial display of all products
        displayProducts(computerHardwareProducts);
// Function to toggle between querying/searching contents and cart contents


function toggleCartView() {
    const mainContent = document.getElementById("main");
    const cartContent = document.getElementById("cart");
    const toggleButton = document.getElementById("toggleCartButton");
    
    if (mainContent.style.display === "none" || !mainContent.style.display) {
        mainContent.style.display = "block";
        cartContent.style.display = "none";
        toggleButton.textContent = "View Cart";
    } else {
        mainContent.style.display = "none";
        cartContent.style.display = "block";
        toggleButton.textContent = "Back to Products";
        displayCartContents();
    }
}

    const mainContent = document.getElementById("main");
    const cartContent = document.getElementById("cart");
    const toggleButton = document.getElementById("toggleCartButton");
    
    if (mainContent.style.display === "none") {
        mainContent.style.display = "block";
        cartContent.style.display = "none";
        toggleButton.textContent = "View Cart";
    }

// Adding event listener to the "View Cart" button
document.getElementById("toggleCartButton").addEventListener("click", toggleCartView);

// Initialize balance
let balance = 1200;

// Function to update balance display
function updateBalanceDisplay() {
    const balanceDisplay = document.getElementById("balanceAmount");
    balanceDisplay.textContent = "$" + balance;
}

// Call the function to set the initial balance display
updateBalanceDisplay();

// Cart array to store added products
let cart = [];

// Function to handle adding products to the cart
function addToCart(productId) {
    const product = computerHardwareProducts[productId];
    if (product && product.price <= balance) {
        cart.push(product);
        balance -= product.price;
        updateBalanceDisplay();
        alert(product.name + " added to cart!");
    } else {
        alert("Insufficient funds or invalid product.");
    }
}

// Add event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
addToCartButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        const productId = btn.getAttribute("data-product-id");
        addToCart(productId);
    });
});

// Function to display the cart contents
function displayCartContents() {
    const cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = ""; // Clear existing items
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }
    
    cart.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "cart-item";
        productDiv.innerHTML = `
            <h5>${product.name}</h5>
            <p>${product.price}</p>
        `;
        cartItemsDiv.appendChild(productDiv);
    });
}

// Add event listener to the "Checkout" button
document.getElementById("checkoutButton").addEventListener("click", function() {
    document.getElementById("balanceDisplay").style.display = "block";
});

// Update the toggleCartView function to include displaying the cart contents


function toggleCartView() {
    const mainContent = document.getElementById("main");
    const cartContent = document.getElementById("cart");
    const toggleButton = document.getElementById("toggleCartButton");
    
    if (mainContent.style.display === "none" || !mainContent.style.display) {
        mainContent.style.display = "block";
        cartContent.style.display = "none";
        toggleButton.textContent = "View Cart";
    } else {
        mainContent.style.display = "none";
        cartContent.style.display = "block";
        toggleButton.textContent = "Back to Products";
        displayCartContents();
    }
}

    
    displayCartContents();


// Ensure event listeners are added for new "Add to Cart" buttons
function addEventListenersForButtons() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const productId = btn.getAttribute("data-product-id");
            addToCart(productId);
        });
    });
}

// Call the function to add event listeners for existing buttons
addEventListenersForButtons();

// Update the displayProducts function to also add event listeners for new buttons
const originalDisplayProducts = displayProducts;
displayProducts = function(products) {
    originalDisplayProducts(products);
    addEventListenersForButtons();
};
