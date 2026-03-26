let total = 0;

function addToCart(item, price) {
    let cartItems = document.getElementById("cartItems");

    let li = document.createElement("li");
    li.textContent = item + " - ₹" + price;
    cartItems.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}

function checkout() {
    if (total === 0) {
        alert("Cart is empty!");
    } else {
        alert("Order placed successfully! Total: ₹" + total);
        location.reload();
    }
}