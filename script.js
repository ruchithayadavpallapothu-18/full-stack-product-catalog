const products = [
    {
        name: "Wireless Headphones",
        price: 1499,
        description: "High quality wireless headphones."
    },
    {
        name: "Smart Watch",
        price: 2499,
        description: "Smart watch with fitness tracking."
    },
    {
        name: "Laptop Backpack",
        price: 999,
        description: "Durable backpack for laptops."
    },
    {
        name: "Bluetooth Speaker",
        price: 1299,
        description: "Portable speaker with clear sound."
    }
];

const container = document.getElementById("product-container");

products.forEach(product => {
    const card = document.createElement("div");

    card.className = "product";

    card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>₹${product.price}</strong>
        <br><br>
        <button onclick="addToCart('${product.name}')">
            Add to Cart
        </button>
    `;

    container.appendChild(card);
});

function addToCart(productName) {
    alert(productName + " added to cart!");
}