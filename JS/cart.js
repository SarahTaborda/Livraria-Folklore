let carts = document.querySelectorAll('.add-cart');

for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers(products[i]);
		totalCost(products[i])
	})
}

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	if(productNumbers) {
		document.querySelector('.carrinho span').textContent = productNumbers;
	}
}

function cartNumbers(product) {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	if(productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.carrinho span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.carrinho span').textContent = 1;
	}
	setItems(product);
}

function setItems(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	if(cartItems != null) {
		if(cartItems[product.name] == undefined) {
			cartItems = {
				...cartItems,
				[product.name]: product
			}
		}
		cartItems[product.name].inCart += 1;
	} else {
		product.inCart = 1;
		cartItems = {
			[product.name]: product
		}
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//Soma do preço
function totalCost(product) {
	let cartCost = localStorage.getItem('totalCost');

	console.log("My cartCost is",cartCost);
	console.log(typeof cartCost);

	if(cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);
	}
}

function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".products");
	let cartCost = localStorage.getItem('totalCost');

	console.log(cartItems);
	if(cartItems && productContainer) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {

			productContainer.innerHTML += `
			<div class="product">
				<i class="fa-solid fa-trash"></i>
				<img src="../Livros/${item.name}.jpg">
				<span>${item.name}</span>
			</div>
			<div class="price">${item.price}</div>
			<div class="quantity">
				<span>${item.inCart}</span>
			</div>
			<div class="total">
			${item.inCart * item.price}
			</div>
			`;
		});

		productContainer.innerHTML += `
			<div class="basketTotslContainer">
				<h4 class="basketTotalTitle">
					Valor Total
				</h4>
				<h4 class="basketTotal">
					${cartCost}
				</h4>
			</div>
		`;
	}
}

onLoadCartNumbers();
displayCart();

let products = [
	{
		name: 'Harry Potter e a Pedra Filosofal',
		price: 48.12,
		inCart: 0
	},

	{
		name: 'Pearcy Jackson - O Ladrão de Raios',
		price: 20.00,
		inCart: 0
	},

	{
		name: 'A Rainha Vermelha',
		price: 31.90,
		inCart: 0
	},

	{
		name: 'Duna - Vol 1',
		price: 70.90,
		inCart: 0
	},

	{
		name: 'Senhor dos Anéis - A Sociedade do Anél',
		price: 30.90,
		inCart: 0
	}
]