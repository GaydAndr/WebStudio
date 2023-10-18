import { productModalBody } from "../modals/product-modal.mjs";

const openModalBtn = document.querySelector("[data-open-modal]");
const closeModalBtn = document.querySelector("[data-close-modal]");
const backdrop = document.querySelector("[data-backdrop]");
const modalContent = document.getElementById("modal__body");

openModalBtn.addEventListener("click", e => {
	const targetElement = e.target;
	if (e.target.closest(".product__item")) {
		e.preventDefault();
		const modalHTML = productModalBody(targetElement);
		modalContent.innerHTML = modalHTML;
		toggleModal();
	}
	if (e.target.closest(".hero__btn")) {
		toggleModal();
		// modalContent.innerHTML = modalHTML;
	}
});

closeModalBtn.addEventListener("click", toggleModal);

window.addEventListener("click", e => {
	if (e.target === backdrop) {
		toggleModal();
	}
});

function toggleModal() {
	document.body.classList.toggle("lock-form");
	backdrop.classList.toggle("is-hidden");
}
