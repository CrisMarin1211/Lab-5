import { SaveshoppingData } from '../../store/actions';
import style from './Product.css';

export enum CardProducts {
	'image' = 'image',
	'title' = 'Title',
	'description' = 'description',
	'category' = 'category',
	'price' = 'price',
	'ratingcount' = 'ratingcount',
	'ratingrate' = 'ratingrate',
}
class products extends HTMLElement {
	image?: string;
	Title?: string;
	description?: string;
	category?: string;
	price?: number;
	ratingcount?: number;
	ratingrate?: number;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	static get observedAttributes() {
		const attrs: Record<CardProducts, null> = {
			image: null,
			Title: null,
			description: null,
			category: null,
			price: null,
			ratingcount: null,
			ratingrate: null,
		};

		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: CardProducts, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case CardProducts.price:
				this.price = newValue ? Number(newValue) : undefined;
				break;
			case CardProducts.ratingcount:
				this.ratingcount = newValue ? Number(newValue) : undefined;
				break;

			case CardProducts.ratingrate:
				this.ratingrate = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}

	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

			<section class="cardSection">

			<div class="card">

				 <img class="image" src="${this.image}" alt="">
				 <h1 class="title">Title: ${this.title}</h1>
				 <p class="text">Description: ${this.description}</p>
				 <p>Rating: rate: ${this.ratingcount} count: ${this.ratingrate}</p>
				 <h3>Price: ${this.price}</h3>
				 <button class="botonleg" type="button">ADD PRODUCT</button>
		 </div>
 </section>
               `;
		}

		const cssProduct = this.ownerDocument.createElement('style');
		cssProduct.innerHTML = style;
		this.shadowRoot?.appendChild(cssProduct);
	}
}

export default products;
customElements.define('my-product', products);
