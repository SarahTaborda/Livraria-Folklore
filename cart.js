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
		document.querySelector(".cart span").textContent = productNumbers;
	}
}

function cartNumbers(product) {
	let productNumbers = localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem("cartNumbers", productNumbers + 1);
		document.querySelector(".cart span").textContent = productNumbers + 1;
	} else {
		localStorage.setItem("cartNumbers", 1);
		document.querySelector(".cart span").textContent = 1;
	}
	setItems(product);
}

function setItems(product) {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		if (cartItems [product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart += 1;
	} else {
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
	}
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
	//console.log ("O preço do produto é", product.price);
	let cartCost = localStorage.getItem("totalCost");
	console.log("Meu valor total é", cartCost);
	console.log(typeof cartCost);

	if(cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);
	}
}

function displayCart () {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".cart-content");
	let cartCost = localStorage.getItem("totalCost");
	console.log(cartItems);
	if(cartItems && productContainer) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
				<div class="cart-box">
					<img src="Livros/${item.name}.jpg" class="cart-img">
					<div class="detail-box">
						<div class="cart-product-title">${item.name}</div>
						<div class="cart-price">R$ ${item.price},00</div>
						<div class="cart-quantity">
							<p class="quantidade">Quantidade:${item.inCart}</p>
							
						</div>
					</div>
					<!--Remover do Carrinho-->
					<i class="fa-solid fa-trash cart-remove"></i>
				</div>
			`;
		});

		productContainer.innerHTML += `
		<div class="total">
			<div class="total-title">Total</div>
			<div class="total-price">R$${cartCost},00</div>
		</div>`
	}
}

onLoadCartNumbers();
displayCart();

let products = [
	
	{
		name: 'Harry Potter e a Pedra Filosofal',
		tag: 'Harry Potter Livro',
		price: 48, 
		inCart: 0
	},
	{
		name: 'Pearcy Jackson - O Ladrão de Raios',
		tag: 'Pearcy Jackson Livro',
		price: 20, 
		inCart: 0
	},
	{
		name: 'A Rainha Vermelha',
		tag: 'A Rainha Vermelha Livro',
		price: 31, 
		inCart: 0
	},
	{
		name: 'Duna - Vol 1',
		tag: 'Duna - Vol 1 Livro',
		price: 70, 
		inCart: 0
	},
	{
		name: 'O Senhor dos Anéis - A Sociedade do Anél',
		tag: 'O Senhor dos Anéis Livro',
		price: 30, 
		inCart: 0
	},
	{
		name: 'Tithe',
		tag: 'tithe',
		price: 69, 
		inCart: 0
	},
	{
		name: 'Quarta Asa',
		tag: 'quarta asa',
		price: 80, 
		inCart: 0
	},
	{
		name: 'O Trono do Prisioneiro',
		tag: 'o trono do prisioneiro',
		price: 40, 
		inCart: 0
	},
	{
		name: 'Casa de chama e sombra',
		tag: 'casa de chama e sombra',
		price: 76, 
		inCart: 0
	},
	{
		name: 'A serpente e as asas feitas de noite',
		tag: 'a serpente e as asas feitas de noite',
		price: 40, 
		inCart: 0
	}
]

