const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleButton.innerHTML = isDarkMode ? '<i class="bi bi-sun"></i> Modo Claro' : '<i class="bi bi-moon"></i> Modo Oscuro';
});

// Carrito

let total = 0;

function addToCart(price) {
    total += price;
    document.getElementById('total-amount').innerText = 'Total: $' + total.toFixed(2);
    document.getElementById('buy-button').style.display = 'block';
}

function buy() {
    alert('Gracias por tu compra! Total: $' + total.toFixed(2));
    total = 0;
    document.getElementById('total-amount').innerText = 'Total: $0.00';
    document.getElementById('buy-button').style.display = 'none';
}




