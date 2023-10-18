const productTemplate = `
  <li class="social-links__item">
    <a
      href="{{mainHref}}"
      class="social-links__link"
      target="_blank"
      rel="noopener noreferrer"
      title="Соцмережа">
      <svg class="icon social-item__icon" width="20" height="20">
        <use href="{{svgHref}}"></use>
      </svg>
    </a>
  </li>
`;

function generateProductHTML(data) {
	const html = productTemplate.replace("{{mainHref}}", data.mainHref).replace("{{svgHref}}", data.svgHref);

	return html;
}

export function innerSocialLink(data) {
	const productList = document.querySelector(".product");

	const generatedProductHTML = data.map(item => generateProductHTML(item));
	productList.innerHTML = generatedProductHTML.join("");
}
