import { productData } from "../../data/productData.mjs";

export function productModalBody(targetElement) {
	const elId = targetElement.closest(".product__item").id;
	const findEl = productData.find(item => item.id === elId);

	const { picture, text, title, description, id } = findEl;
	const { source, img } = picture;

	const pictureSources = source
		.map(
			source => `
	    	<source srcset="${source.srcset}" 
				media="${source.media}" 
				sizes="${source.sizes}" 
				type="${source.type}">
	  	`,
		)
		.join("\n");

	const modalHTML = `
		<div class="modal-body" id="${id}">
			<picture>
				${pictureSources}
				<img class="modal-img" src="${img.src}" alt="${img.alt}">
			</picture>
			<div class="modal-content-text" >
				<h2 class="modal-title">
					${title}
				</h2>
				<p class="modal-description">
					${description}
				</p>
				<p class="modal-text">
					${text}
				</p>
			</div>
		</div>
	`;

	return modalHTML;
}
