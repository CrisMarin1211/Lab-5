import styles from './ShoppingCartItem.css';

export enum AttributeItem {
	'image' = 'image',
	'title' = 'Title',
	'price' = 'price',
}

class shoppingItem extends HTMLElement {
	image?: string;
	Title?: string;
	price?: number;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeItem, null> = {
			image: null,
			Title: null,
			price: null,
		};

		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: AttributeItem, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case AttributeItem.price:
				this.price = newValue ? Number(newValue) : undefined;
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

                  <div class='card-shopping'>
									<img class="image" src="${this.image}" alt="">
				          <h1 class="title">Title: ${this.title}</h1>
				          <h3>Price: ${this.price}</h3>
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
