import style from './Product.css';

export enum Attribute {
	'uid' = `uid`,
	'totle' = `totle`,
	'price' = `price`,
	'category' = `category`,
	'description' = `description`,
	'image' = `image`,
}

class products extends HTMLElement {
	uid?: number;
	totle?: string;
	price?: string;
	category?: string;
	description?: string;
	image?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			uid: null,
			totle: null,
			price: null,
			category: null,
			description: null,
			image: null,
		};

		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string = '') {
		switch (propName) {
			case Attribute.uid:
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
                    </div>
               </section>
               `;
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = style;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

export default products;
customElements.define('product ', products);
