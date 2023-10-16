// import test from "./prtfolio-Item";

const templateBtn = `
  <li class="filter__item">
    <button type="button"
      data-category={{category}}
      class="filter__btn">
        {{textBtn}}
      </button>
  </li>`;

function generateBtnHTML(data) {
	const htmlBtn = templateBtn.replace("{{textBtn}}", data.text).replace("{{category}}", data.category);
	return htmlBtn;
}

function innerBtn(data) {
	const filterBtn = document.querySelector(".filter");
	const generatedBtnHTML = data.map(item => generateBtnHTML(item));
	filterBtn.innerHTML = generatedBtnHTML.join("");
}

// Завантаження JSON-даних і генерація кнопок
fetch("../data/filterButtons .json")
	.then(response => response.json())
	.then(data => {
		innerBtn(data);
		addListener();
	})
	.catch(error => {
		console.error("Помилка завантаження JSON: ", error);
	});

function addListener() {
	const button = document.querySelectorAll(".filter__btn");
	button.forEach(item =>
		item.addEventListener("click", () => {
			const selectedCategory = item.dataset.category;
			filterProducts(selectedCategory);
		}),
	);
}

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
