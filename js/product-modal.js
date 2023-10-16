const productList = document.querySelector(".product");
const modal = document.getElementById("product__modal");
const modalContent = modal.querySelector(".modal__body");
const closeModal = modal.querySelector(".modal__close");
const backdropPrd = document.querySelector("[data-backdrop]");

productList.addEventListener("click", e => {
	e.preventDefault();
	if (e.target.closest(".product__item")) {
		const category = e.target.closest(".product__item").getAttribute("data-category");
		const imgSrc = e.target.closest(".product__item").querySelector(".card__photo").getAttribute("src");
		const text = e.target.closest(".product__item").querySelector(".card__txt").textContent;
		const title = e.target.closest(".product__item").querySelector(".card__name").textContent;
		const description = e.target.closest(".product__item").querySelector(".card__description").textContent;

		const modalHTML = `
      <div class="modal-content-inner">
        <img src="${imgSrc}" alt="${category}" class="modal-img">
        <h2 class="modal-title">${title}</h2>
        <p class="modal-description">${description}</p>
        <p class="modal-text">${text}</p>
      </div>
    `;

		modalContent.innerHTML = modalHTML;

		toggleModal();
	}
});

function toggleModal() {
	document.body.classList.toggle("lock-form");
	backdropPrd.classList.toggle("is-hidden");
}

closeModal.addEventListener("click", () => {
	toggleModal();
});

window.addEventListener("click", e => {
	if (e.target === backdropPrd) {
		toggleModal();
	}
});
