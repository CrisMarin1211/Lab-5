import Card, { CardProducts } from '../components/Product/Product';
import { GetProductsData } from '../store/actions';
import styles from './styles.css';
import { addObserver, appState, dispatch } from '../store/index';

export class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async connectedCallback() {
		const action = await GetProductsData();
		dispatch(action);
		const Storage = JSON.stringify(appState);
		localStorage.setItem('Appstate', Storage);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
		}

		appState.forEach((product: any) => {
			const card = this.ownerDocument.createElement('my-product') as Card;
			card.setAttribute(CardProducts.image, product.image);
			card.setAttribute(CardProducts.totle, product.title);
			card.setAttribute(CardProducts.category, product.category);
			card.setAttribute(CardProducts.description, product.description);
			card.setAttribute(CardProducts.price, product.price);
			card.setAttribute(CardProducts.rating, product.rating.rate);
			this.shadowRoot?.appendChild(card);
		});

		const cssDashboard = this.ownerDocument.createElement('styles');
		cssDashboard.innerHTML = styles;
		this.shadowRoot?.appendChild(cssDashboard);
	}
}
customElements.define('card-dashboard', Dashboard);
