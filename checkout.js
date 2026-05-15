let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("checkout-items");

const totalElement = document.getElementById("checkout-total");

let total = 0;


/* DISPLAY ITEMS */

cart.forEach(item => {

const div = document.createElement("div");

div.className = "checkout-item";

div.innerHTML = `

<img src="${item.image}">

<div>

<h4>${item.name}</h4>

<p>
₹${item.price} × ${item.qty}
</p>

</div>

<span>
₹${item.price * item.qty}
</span>

`;

container.appendChild(div);

total += item.price * item.qty;

});

totalElement.innerText = total;


/* PAYMENT */

function payNow(){

const text = document.getElementById("pay-text");

const loader = document.getElementById("loader");

text.innerText = "Processing...";

loader.classList.remove("hidden");

setTimeout(()=>{

loader.classList.add("hidden");

document.querySelectorAll(".checkout-card")
.forEach(card=>card.style.display="none");

document.getElementById("success-box")
.classList.remove("hidden");

localStorage.removeItem("cart");

},2000);

}


/* HOME */

function goHome(){

window.location.href = "index.html";

}
