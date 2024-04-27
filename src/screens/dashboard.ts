import { getShoppingCart } from '../services/getProducts';
import { CardProducts } from '../components/Product/Product';
import styles from './styles.css';
import { appState } from '../store/index';

export class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
		}

		// appState.forEach((product: any) => {
		// 	const card = this.ownerDocument.createElement('my-product');
		// 	card.setAttribute(CardProducts.image, product.image);
		// 	card.setAttribute(CardProducts.totle, product.title);
		// 	card.setAttribute(CardProducts.category, product.category);
		// 	card.setAttribute(CardProducts.description, product.description);
		// 	card.setAttribute(CardProducts.price, product.price);
		// 	card.setAttribute(CardProducts.rating, product.rating.rate);
		//   this.shadowRoot?.appendChild(card);
		// });

		const cssDashboard = this.ownerDocument.createElement('style');
		cssDashboard.innerHTML = styles;
		this.shadowRoot?.appendChild(cssDashboard);
	}
}
customElements.define('card-dashboard', Dashboard);
