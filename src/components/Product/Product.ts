import style from './Product.css';

export enum CardProducts {
	'uid' = `uid`,
	'totle' = `totle`,
	'price' = `price`,
	'category' = `category`,
	'description' = `description`,
	'image' = `image`,
	'rating' = 'rating',
}

class products extends HTMLElement {
	uid?: number;
	totle?: string;
	price?: string;
	category?: string;
	description?: string;
	image?: string;
	rating?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	static get observedAttributes() {
		const attrs: Record<CardProducts, null> = {
			uid: null,
			totle: null,
			price: null,
			category: null,
			description: null,
			image: null,
			rating: null,
		};

		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: CardProducts, oldValue: string | undefined, newValue: string = '') {
		switch (propName) {
			case CardProducts.uid:
				this.uid = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
		}
	}

	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

                    <div class='info-container '>
                        <p><b> Id: </b>${this.uid}</p>
                        <p><b> Title: </b>${this.totle}</p>
                        <p><b> Price: </b>${this.price}</p>
                        <p><b> Category: </b>${this.category}</p>
                        <p><b> Description: </b>${this.description}</p>
                        <p><b> Image: </b>${this.image}</p>
												<h3> Raiting: ${this.rating}</h3>
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
