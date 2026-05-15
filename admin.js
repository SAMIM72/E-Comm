let products =
JSON.parse(localStorage.getItem("products")) || [];


/* DISPLAY */

function displayProducts(){

const container =
document.getElementById("admin-products");

container.innerHTML = "";

products.forEach((product,index)=>{

const div =
document.createElement("div");

div.className = "admin-product fade-in";

div.innerHTML = `

<img src="${product.image}">

<div>

<h4>${product.name}</h4>

<p>
₹${product.price}
</p>

<p class="category">
${product.category}
</p>

</div>

<button onclick="deleteProduct(${index})"
class="delete-btn">

Delete

</button>

`;

container.appendChild(div);

});

}


/* ADD */

function addProduct(){

const name =
document.getElementById("name").value;

const price =
document.getElementById("price").value;

const image =
document.getElementById("image").value;

const category =
document.getElementById("category").value;

if(!name || !price || !image){

alert("Please fill all fields");

return;

}

products.push({

id: Date.now(),

name,

price: Number(price),

image,

category

});

localStorage.setItem("products",
JSON.stringify(products));

displayProducts();

}


/* DELETE */

function deleteProduct(index){

if(confirm("Delete this product?")){

products.splice(index,1);

localStorage.setItem("products",
JSON.stringify(products));

displayProducts();

}

}


displayProducts();
