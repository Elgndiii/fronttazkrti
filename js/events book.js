const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartList = document.querySelector(".cart ul");
const total = document.querySelector("#total");

let cartItems = [];
let cartTotal = 0;

function renderCart() {
  cartList.innerHTML = "";
  cartItems.forEach((item, index) => {
    const cartItem = document.createElement("li");

    const removeButton = document.createElement("button");
    removeButton.className = "remove-from-cart";
    removeButton.textContent = "حذف";
    removeButton.addEventListener("click", () => removeCartItem(index));

    cartItem.textContent = `${item.title} x${item.quantity} :${item.price} L.E`;
    cartItem.appendChild(removeButton);

    cartList.appendChild(cartItem);
  });

  total.textContent = `${cartTotal.toFixed(2)} L.E`;
}

function removeCartItem(index) {
  const item = cartItems[index];
  cartTotal -= Number.parseFloat(item.price);

  if (item.quantity === 1) {
    cartItems.splice(index, 1);
  } else {
    item.quantity--;
  }
  renderCart();
}

addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const itemId = button.getAttribute("data-id");
    const menuItem = button.parentElement;
    const itemTitle = menuItem.querySelector("h3").textContent;
    const itemPrice = menuItem.querySelector(".price").textContent;
    const item = { title: itemTitle, price: itemPrice, itemId: itemId, quantity: 1 };

    const existingItem = cartItems.find((i) => i.itemId === itemId);

    if (existingItem) {
      existingItem.quantity++;
      cartTotal += Number.parseFloat(itemPrice);
    } else {
      cartItems.push(item);
      cartTotal += Number.parseFloat(itemPrice);
    }

    renderCart();
  });
});
