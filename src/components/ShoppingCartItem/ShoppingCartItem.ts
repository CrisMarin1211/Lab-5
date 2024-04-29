import styles from './ShoppingCartItem.css';

export enum AttributeItem {
	'totle' = `totle`,
	'image' = `image`,
	'price' = `price`,
}

class shoppingItem extends HTMLElement {
	totle?: string;
	image?: string;
	price?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeItem, null> = {
			totle: null,
			image: null,
			price: null,
		};

		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: AttributeItem, oldValue: string, newValue: string) {
		switch (propName) {
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

                  <div class='info-container '>
                      <p><b> Title: </b>${this.totle}</p>
                      <p><b> Image: </b>${this.image}</p>
                      <p><b> Price: </b>${this.price}</p>
                  </div>
             </section>
             `;

			const cssItems = this.ownerDocument.createElement('style');
			cssItems.innerHTML = styles;
			this.shadowRoot?.appendChild(cssItems);
		}
	}
}

export default shoppingItem;
customElements.define('shopping-item', shoppingItem);
