const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleButton.innerHTML = isDarkMode ? '<i class="bi bi-sun"></i> Modo Claro' : '<i class="bi bi-moon"></i> Modo Oscuro';
});

// Carrito

let cart = [];
let totalAmount = 0;

function addToCart(price) {
    cart.push(price);
    totalAmount += price;
    updateCartDisplay();
}

function removeFromCart(index) {
    totalAmount -= cart[index];
    cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Limpiar el contenido actual

    cart.forEach((price, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            Producto ${index + 1}: $${price.toFixed(2)} 
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    document.getElementById('total-amount').innerText = `Total: $${totalAmount.toFixed(2)}`;
}

function buy() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    alert(`Compra realizada por un total de $${totalAmount.toFixed(2)}`);
    // Aquí puedes agregar la lógica para procesar la compra
    cart = []; // Vaciar el carrito
    totalAmount = 0;
    updateCartDisplay();
}


