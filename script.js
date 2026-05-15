/* PRODUCTS DATABASE */

let defaultProducts = [

/* ELECTRONICS */

{id:1,name:"MacBook Laptop",price:80000,category:"electronics",image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"},
{id:2,name:"iPhone",price:70000,category:"electronics",image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"},
{id:3,name:"Android Phone",price:25000,category:"electronics",image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400"},
{id:4,name:"Tablet",price:30000,category:"electronics",image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"},
{id:5,name:"Monitor",price:15000,category:"electronics",image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400"},
{id:6,name:"Keyboard",price:2500,category:"electronics",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400"},
{id:7,name:"Gaming Keyboard",price:4500,category:"electronics",image:"https://images.unsplash.com/photo-1595225476474-87563907a212?w=400"},
{id:8,name:"Mouse",price:800,category:"electronics",image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"},
{id:9,name:"Gaming Mouse",price:2500,category:"electronics",image:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400"},
{id:10,name:"Webcam",price:3500,category:"electronics",image:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400"},

{id:11,name:"Headphones",price:3500,category:"electronics",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"},
{id:12,name:"Wireless Earbuds",price:4500,category:"electronics",image:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400"},
{id:13,name:"Bluetooth Speaker",price:4000,category:"electronics",image:"https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400"},
{id:14,name:"Camera",price:45000,category:"electronics",image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"},
{id:15,name:"Tripod",price:2000,category:"electronics",image:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400"},

/* FASHION */

{id:16,name:"T-Shirt",price:800,category:"fashion",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"},
{id:17,name:"Jeans",price:2200,category:"fashion",image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"},
{id:18,name:"Jacket",price:4000,category:"fashion",image:"https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400"},
{id:19,name:"Hoodie",price:2500,category:"fashion",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"},
{id:20,name:"Sweater",price:2000,category:"fashion",image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400"},

{id:21,name:"Formal Shirt",price:1800,category:"fashion",image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400"},
{id:22,name:"Casual Shirt",price:1500,category:"fashion",image:"https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400"},
{id:23,name:"Blazer",price:6000,category:"fashion",image:"https://images.unsplash.com/photo-1593032465171-8a7e84f7b91c?w=400"},
{id:24,name:"Dress",price:3500,category:"fashion",image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400"},
{id:25,name:"Skirt",price:1800,category:"fashion",image:"https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400"},

/* FOOTWEAR */

{id:26,name:"Running Shoes",price:4500,category:"footwear",image:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400"},
{id:27,name:"Sneakers",price:4000,category:"footwear",image:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400"},
{id:28,name:"Formal Shoes",price:5000,category:"footwear",image:"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400"},
{id:29,name:"Sandals",price:1500,category:"footwear",image:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400"},
{id:30,name:"Boots",price:6000,category:"footwear",image:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400"},

/* ACCESSORIES */

{id:31,name:"Watch",price:7000,category:"accessories",image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400"},
{id:32,name:"Smart Watch",price:8000,category:"accessories",image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400"},
{id:33,name:"Backpack",price:2500,category:"accessories",image:"https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=400"},
{id:34,name:"Handbag",price:3500,category:"accessories",image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"},
{id:35,name:"Wallet",price:1800,category:"accessories",image:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=400"},

{id:36,name:"Sunglasses",price:1500,category:"accessories",image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"},
{id:37,name:"Cap",price:600,category:"accessories",image:"https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400"},
{id:38,name:"Ring",price:3500,category:"accessories",image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400"},
{id:39,name:"Bracelet",price:2000,category:"accessories",image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400"},
{id:40,name:"Necklace",price:4500,category:"accessories",image:"https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400"},

/* EXTRA ELECTRONICS */

{id:41,name:"Printer",price:9000,category:"electronics",image:"https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400"},
{id:42,name:"Power Bank",price:2000,category:"electronics",image:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400"},
{id:43,name:"Phone Charger",price:900,category:"electronics",image:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400"},
{id:44,name:"Microphone",price:4500,category:"electronics",image:"https://images.unsplash.com/photo-1580894908361-967195033215?w=400"},
{id:45,name:"Gaming Chair",price:15000,category:"electronics",image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400"},

/* LIFESTYLE */

{id:46,name:"Perfume",price:3000,category:"accessories",image:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400"},
{id:47,name:"Water Bottle",price:800,category:"accessories",image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400"},
{id:48,name:"Coffee Mug",price:600,category:"accessories",image:"https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400"},
{id:49,name:"Desk Lamp",price:1800,category:"electronics",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400"},
{id:50,name:"Office Chair",price:9000,category:"electronics",image:"https://images.unsplash.com/photo-1505842465776-3d90f616310d?w=400"},

/* BONUS */

{id:51,name:"External Hard Drive",price:6000,category:"electronics",image:"https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=400"},
{id:52,name:"USB Flash Drive",price:900,category:"electronics",image:"https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400"},
{id:53,name:"Wireless Charger",price:2500,category:"electronics",image:"https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400"},
{id:54,name:"VR Headset",price:20000,category:"electronics",image:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400"},
{id:55,name:"Gaming Controller",price:4500,category:"electronics",image:"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400"},
{id:56,name:"Laptop Stand",price:1500,category:"electronics",image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"},
{id:57,name:"Tablet Cover",price:1200,category:"accessories",image:"https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400"},
{id:58,name:"Phone Case",price:800,category:"accessories",image:"https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?w=400"},
{id:59,name:"Fitness Band",price:3500,category:"accessories",image:"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"},
{id:60,name:"Smart Home Speaker",price:9000,category:"electronics",image:"https://images.unsplash.com/photo-1543512214-318c7553f230?w=400"}

];


let products = JSON.parse(localStorage.getItem("products")) || defaultProducts;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


/* DISPLAY PRODUCTS */

function displayProducts(list){

const container = document.getElementById("product-list");

container.innerHTML="";

list.forEach(p=>{

container.innerHTML+=`
<div class="product">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Cart</button>
<button onclick="addWishlist(${p.id})">❤️</button>
</div>
`;

});

}


/* FILTER FUNCTION */

function applyFilters(){

let filtered = products;

const category =
document.getElementById("category-filter").value;

const search =
document.getElementById("search").value.toLowerCase();

const minPrice =
Number(document.getElementById("min-price").value) || 0;

const maxPrice =
Number(document.getElementById("max-price").value) ||
Number(document.getElementById("price-range").value);


/* CATEGORY FILTER */

if(category!="all"){

filtered = filtered.filter(p =>
p.category == category);

}


/* PRICE FILTER */

filtered = filtered.filter(p =>
p.price >= minPrice &&
p.price <= maxPrice
);


/* SEARCH FILTER */

if(search){

filtered = filtered.filter(p =>
p.name.toLowerCase().includes(search));

}


displayProducts(filtered);

}

function updateRangeValue(value){

document.getElementById("range-value").innerText =
"₹" + value;

applyFilters();

}



/* CART */

function addToCart(id){

const item = cart.find(p=>p.id==id);

if(item)item.qty++;
else cart.push({...products.find(p=>p.id==id),qty:1});

saveCart();

}

function changeQty(index,change){

cart[index].qty+=change;

if(cart[index].qty<=0)
cart.splice(index,1);

saveCart();

}

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

updateCounts();

}

function displayCart(){

const container=document.getElementById("cart-items");

container.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total+=item.price*item.qty;

container.innerHTML+=`
<div>
${item.name}
<div class="qty">
<button onclick="changeQty(${index},-1)">−</button>
${item.qty}
<button onclick="changeQty(${index},1)">+</button>
</div>
₹${item.price*item.qty}
</div>
`;

});

document.getElementById("cart-total").innerText=total;

}


/* WISHLIST */

function addWishlist(id){

wishlist.push(products.find(p=>p.id==id));

localStorage.setItem("wishlist",JSON.stringify(wishlist));

displayWishlist();

updateCounts();

}

function displayWishlist(){

const container=document.getElementById("wishlist-items");

container.innerHTML="";

let total=0;

wishlist.forEach((item,index)=>{

total+=item.price;

container.innerHTML+=`
<div>
${item.name} ₹${item.price}
<button onclick="removeWishlist(${index})">❌</button>
</div>
`;

});

document.getElementById("wishlist-total").innerText=total;

}

function removeWishlist(index){

wishlist.splice(index,1);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

displayWishlist();

updateCounts();

}


/* COUNTS */

function updateCounts(){

document.getElementById("cart-count").innerText=
cart.reduce((sum,item)=>sum+item.qty,0);

document.getElementById("wishlist-count").innerText=
wishlist.length;

}


/* TOGGLES */

function toggleCart(){
document.getElementById("cart").classList.toggle("active");
}

function toggleWishlist(){
document.getElementById("wishlist").classList.toggle("active");
}


/* DARK MODE */

function toggleDarkMode(){

document.body.classList.toggle("dark");

localStorage.setItem("dark",
document.body.classList.contains("dark"));

}

if(localStorage.getItem("dark")=="true")
document.body.classList.add("dark");


displayProducts(products);
displayCart();
displayWishlist();
updateCounts();
