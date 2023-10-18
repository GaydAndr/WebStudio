import { innerSocialLink } from "./socialLink.mjs";

const productTemplate = `
  <li class="our-team__item" data-open-modal id='{{id}}'>
      <picture>
        {{pictureSources}}
        <img class="our-team__photo" src="{{imgSrc}}" alt="{{imgAlt}}">
      </picture>
      </div>
      <div class="our-team__info">
        <h3 class="our-team__name">{{name}}</h3>
        <p class="our-team__career">{{career}}</p>
				<ul class="social-links ">
					{{socialLinks}}
				</ul>
      </div>
  </li>
`;

function generateProductHTML(data) {
	const pictureSources = data.picture.source
		.map(
			source => `
				<source srcset="${source.srcset}" media="${source.media}" sizes="${source.sizes}" type="${source.type}">
			`,
		)
		.join("\n");

	const socialLinks = data.socialLinks.map(link => innerSocialLink(link)).join("\n");

	const html = productTemplate
		.replace("{{pictureSources}}", pictureSources)
		.replace("{{imgSrc}}", data.picture.img.src)
		.replace("{{imgAlt}}", data.picture.img.alt)
		.replace("{{career}}", data.career)
		.replace("{{name}}", data.name)
		.replace("{{id}}", data.id)
		.replace("{{socialLinks}}", socialLinks);

	return html;
}

export function innerPersonCard(data) {
	const productList = document.querySelector(".product");

	const generatedProductHTML = data.map(item => generateProductHTML(item));
	productList.innerHTML = generatedProductHTML.join("");
}
