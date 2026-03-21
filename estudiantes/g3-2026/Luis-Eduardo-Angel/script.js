document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DEL TEMA (MODO OSCURO) ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeBtn.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // --- LÓGICA DEL CARRITO ---
    let cart = [];
    const cartToggleBtn = document.getElementById('cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');
    const buyButtons = document.querySelectorAll('.buy-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartCountEl = document.getElementById('cart-count');

    // Abrir/Cerrar Carrito
    cartToggleBtn.addEventListener('click', () => cartSidebar.classList.add('open'));
    closeCartBtn.addEventListener('click', () => cartSidebar.classList.remove('open'));

    // Añadir al carrito
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.closest('button').dataset.id;
            const name = e.target.closest('button').dataset.name;
            const price = parseFloat(e.target.closest('button').dataset.price);

            // Verificar si ya existe en el carrito
            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            updateCartUI();

            // Pequeña animación visual al añadir
            cartSidebar.classList.add('open');
            setTimeout(() => cartSidebar.classList.remove('open'), 1500);
        });
    });

    // Actualizar la interfaz del carrito
    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            count += item.quantity;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <button class="icon-btn remove-btn" data-index="${index}" style="color: #ff4757;">
                    <i class='bx bx-trash'></i>
                </button>
            `;
            cartItemsContainer.appendChild(div);
        });

        cartTotalEl.textContent = `$${total.toFixed(2)}`;
        cartCountEl.textContent = count;

        // Añadir eventos a los botones de eliminar
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.closest('button').dataset.index;
                cart.splice(index, 1);
                updateCartUI();
            });
        });
    }
});