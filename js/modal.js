const openModalBtn = document.querySelector("[data-open-modal]");
const closeModalBtn = document.querySelector("[data-close-modal]");
const backdrop = document.querySelector("[data-backdrop]");

openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
	document.body.classList.toggle("lock-form");
	backdrop.classList.toggle("is-hidden");
}
window.addEventListener("click", e => {
	if (e.target === backdrop) {
		toggleModal();
	}
});
