let cart = [];

let buttons = document.getElementsByClassName("add-to-cart");
for (let i = 0; i < buttons.length; i++) {
	let button = buttons[i];
	button.addEventListener("click", function () {
		let name = button.getAttribute("data-name");
		let price = button.getAttribute("data-price");

		addToCart(name, price);
	});
}

function addToCart(name, price) {


	// Check if product already exists in cart
	for (let i = 0; i < cart.length; i++) {
		let item = cart[i];
		if (item.name === name) {
			item.quantity++;
			draw();
			return;
		}
	}

	// If product does not exist in cart, add it
	let item = {
		name: name,
		price: price,
		quantity: 1
	};
	cart.push(item);
	draw();


}


function removeFromCart(name) {
	for (let i = 0; i < cart.length; i++) {
		let item = cart[i];
		if (item.name === name) {
			if (item.quantity > 1) {
				item.quantity--;
			} else {
				cart.splice(i, 1);
			}
			draw();
			return;
		}
	}
}

function draw() {
	let cartList = document.getElementsByClassName("cart-list")[0];
	cartList.innerHTML = "";
	let totalPrice = 0;
	let totaltax = 0;
	let TotalPricewithTax = 0;
	for (let i = 0; i < cart.length; i++) {
		let item = cart[i];
		let li = document.createElement("li");
		let span1 = document.createElement("span");
			span1.innerHTML =  item.name;
		
		let span2 = document.createElement("span");
		span2.innerHTML = "L.E" + item.price + "  ضريبه=14%=" + (item.price * 0.14).toFixed(1);;
		let span3 = document.createElement("span");
		span3.innerHTML = "x" + item.quantity;
		span3.setAttribute("class", "quantity");
		let removeButton = document.createElement("button");
		removeButton.innerHTML = "حذف";
		removeButton.addEventListener("click", function () {
			removeFromCart(item.name);
		});
		li.appendChild(span1);
		li.appendChild(span2);
		li.appendChild(span3);
		li.appendChild(removeButton);
		cartList.appendChild(li);
		totalPrice += (item.price * item.quantity);
		totaltax = (totalPrice * 0.14).toFixed(2);
		TotalPricewithTax += (item.price * item.quantity) + (item.price * item.quantity * 0.14);



	}
	let totalSpan = document.getElementsByClassName("total-price")[0];
	totalSpan.innerHTML = "L.E" + totalPrice + "<br>اجمال الضريبه= L.E" + totaltax + "<br>اجمالي المدفوعات= L.E" + TotalPricewithTax;
}

let clearButton = document.getElementsByClassName("clear-cart")[0];
clearButton.addEventListener("click", function () {
	cart = [];
	draw();
});
function success(){
	n=document.getElementById("send").value;
	  document.getElementById("a3").innerHTML="<div id='a1'><b id='a2'> كود الدفع عن طريق فوري 9260337700</b></div>";
	  setTimeout(function() {
		  a3.style.display = "none";
		}, 5000);
		
   
  
  
  }