// шаблон HTML
const productTemplate = `
  <li class="product__item" data-category="{{category}}" data-open-modal id='{{id}}'>
    <a href="" class="card">
      <div class="card__img-txt">
        <picture>
          {{pictureSources}}
          <img class="card__photo" src="{{imgSrc}}" alt="{{imgAlt}}">
        </picture>
        <p class="card__txt">{{text}}</p>
      </div>
      <div class="card__title">
        <h2 class="card__name">{{title}}</h2>
        <p class="card__description">{{description}}</p>
      </div>
    </a>
  </li>
`;

// Функція для генерації HTML на основі шаблону і даних
function generateProductHTML(data) {
	const pictureSources = data.picture.source
		.map(
			source => `
        <source srcset="${source.srcset}" media="${source.media}" sizes="${source.sizes}" type="${source.type}">
      `,
		)
		.join("\n");

	const html = productTemplate
		.replace("{{pictureSources}}", pictureSources)
		.replace("{{imgSrc}}", data.picture.img.src)
		.replace("{{imgAlt}}", data.picture.img.alt)
		.replace("{{text}}", data.text)
		.replace("{{title}}", data.title)
		.replace("{{description}}", data.description)
		.replace("{{category}}", data.category)
		.replace("{{id}}", data.id);

	return html;
}

export function innerProducts(data) {
	const productList = document.querySelector(".product");

	const generatedProductHTML = data.map(item => generateProductHTML(item));
	productList.innerHTML = generatedProductHTML.join("");
}
