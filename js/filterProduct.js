function addListener() {
	const button = document.querySelectorAll(".filter__btn");
	button.forEach(item =>
		item.addEventListener("click", () => {
			const selectedCategory = item.dataset.category;
			filterProducts(selectedCategory);
		}),
	);
}

// fetch("../data/product-item.json")
// 	.then(response => response.json())
// 	.then(data => filterProducts(data))
// 	.catch(error => {
// 		console.error("Помилка завантаження JSON: ", error);
// 	});

function filterProducts(category) {
	const products = document.querySelectorAll(".product__item");

	products.forEach(product => {
		const productCategory = product.getAttribute("data-category");

		if (category === "усе" || productCategory === category) {
			product.style.display = "block";
		} else {
			product.style.display = "none";
		}
	});
}
