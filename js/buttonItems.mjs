const templateBtn = `
  <li class="filter__item">
    <button type="button"
      data-btn-category={{category}}
      class="filter__btn">
        {{textBtn}}
      </button>
  </li>`;

function generateBtnHTML(data) {
	const htmlBtn = templateBtn.replace("{{textBtn}}", data.text).replace("{{category}}", data.category);
	return htmlBtn;
}

export function innerBtn(data) {
	const filterBtn = document.querySelector(".filter");
	const generatedBtnHTML = data.map(item => generateBtnHTML(item));
	filterBtn.innerHTML = generatedBtnHTML.join("");
}
