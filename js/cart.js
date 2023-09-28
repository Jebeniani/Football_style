function addToCart(productId, productName, productPrice, productQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(item => item.productId === productId);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += productQuantity;
    } else {
        cart.push({ productId, name: productName, price: productPrice, quantity: productQuantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeCartItem(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const itemIndex = cart.findIndex(item => item.productId === productId);

    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }
}

function handleAddToCartClick() {
    const productId = $(this).data('product-id');
    const productName = $(this).data('product-name');
    const productPrice = parseFloat($(this).data('product-price'));
    const productQuantity = parseInt($(this).data('product-quantity'));

    addToCart(productId, productName, productPrice, productQuantity);

    alert(`Added ${productQuantity} x ${productName} to the cart!`);
}

$(document).on('click', '.add-to-cart', handleAddToCartClick);


function renderCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsContainer = document.getElementById('cart-items');

    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>No items found yet.</p>';
    } else {
        let totalPrice = 0;
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'media';

            const removeButtonId = `remove-item-${item.productId}`;

            cartItemElement.innerHTML = `
                <a href="#">
                    <img class="media-object img- mr-3" src="images/shop/cart/cart-1.jpg" alt="image" />
                </a>
                <div class="media-body">
                    <h6>${item.name}</h6>
                    <div class="cart-price">
                        <span>${item.quantity} x</span>
                        <span>${item.price.toFixed(2)}</span>
                    </div>
                </div>
                <a href="#" class="remove" id="${removeButtonId}"><i class="fas fa-times"></i></a>
            `;
            cartItemsContainer.appendChild(cartItemElement);

            totalPrice += item.price * item.quantity;

            const removeButton = document.getElementById(removeButtonId);
            removeButton.addEventListener('click', function (event) {
                event.preventDefault();
                removeCartItem(item.productId);
                renderCartItems();
            });
        });

        const cartTotalElement = document.getElementById('cart-total');
        cartTotalElement.textContent = '$' + totalPrice.toFixed(2);
    }
}

document.addEventListener('DOMContentLoaded', renderCartItems);

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const tableBody = document.getElementById('cart-table-body');

    tableBody.innerHTML = '';

    if (cartItems.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6">No items found yet.</td></tr>';
    } else {

        cartItems.forEach(item => {
            const newRow = document.createElement('tr');
            newRow.className = 'cart_item';

            newRow.innerHTML = `
                <td class="product-thumbnail" data-title="Thumbnail">
                    <a href="#"><img src="images/shop/cart/${item.image}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt=""></a>
                </td>
                <td class="product-name" data-title="Product">
                    <a href="#">${item.name}</a>
                </td>
                <td class="product-price" data-title="Price">
                    <span class="amount"><span class="currencySymbol">$</span>${item.price.toFixed(2)}</span>
                </td>
                <td class="product-quantity" data-title="Quantity">
                    <div class="quantity">
                        <label class="sr-only">Quantity</label>
                        <input type="number" class="input-text qty text" step="1" min="0" max="9" value="${item.quantity}" title="Qty" size="4" data-product-id="${item.productId}"> <!-- Add data-product-id attribute -->
                    </div>
                </td>
                <td class="product-subtotal" data-title="Total">
                    <span class="amount"><span class="currencySymbol">$</span>${(item.price * item.quantity).toFixed(2)}</span>
                </td>
                <td class="product-remove" data-title="Remove">
                    <a href="#" class="remove" aria-label="Remove this item" data-product-id="${item.productId}" data-product_sku="">×</a>
                </td>
            `;

            tableBody.appendChild(newRow);

            const quantityInput = newRow.querySelector('.product-quantity input');
            quantityInput.addEventListener('change', function () {
                const newQuantity = parseInt(quantityInput.value);
                updateCartItemQuantity(item.productId, newQuantity);
            });
        });
    }
}

function updateCartItemQuantity(productId, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const item = cart.find(item => item.productId === productId);

    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
    }
}

document.addEventListener('DOMContentLoaded', loadCartItems);

function updateCartTotals() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const shipping = 0;
    const total = subtotal + shipping;

    document.getElementById('cart-subtotal').textContent = '$' + subtotal.toFixed(2);
    const totalElements = document.querySelectorAll('.cart-info .list-unstyled li span');
    if (totalElements.length === 3) {
        totalElements[2].textContent = '$' + total.toFixed(2);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateCartTotals();
});

document.addEventListener('DOMContentLoaded', function () {
    const removeButtons = document.querySelectorAll('.product-remove a.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const productId = $(this).data('product-id');
            removeCartItem(productId);
        });
    });
});
