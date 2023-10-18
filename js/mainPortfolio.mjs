import { innerProducts } from "./portfolioItems.mjs";
import { innerBtn } from "./buttonItems.mjs";
import { buttonData } from "../data/buttonData.mjs";
import { productData } from "../data/productData.mjs";
const filterBtn = document.querySelector(".filter");

innerBtn(buttonData);

filterBtn.addEventListener("click", e => {
	if (e.target.closest(".filter__item")) {
		const selectedCategory = e.target.dataset.btnCategory;
		filterProducts(selectedCategory, productData);
		activeBtn(selectedCategory);
	}
});

function filterProducts(category = "all", products = productData) {
	if (category == "all") {
		innerProducts(products);
		return;
	}
	const productList = products.filter(product => product.category === category);
	innerProducts(productList);
}
filterProducts();

function activeBtn(category) {
	const button = document.querySelectorAll(".filter__btn");

	if (!category) {
		button[0].classList.add("active");
		return;
	}

	button.forEach((item, i) => {
		if (item.dataset.btnCategory === category) {
			button[i].classList.add("active");
			return;
		}
		button[i].classList.remove("active");
	});
}
activeBtn();
