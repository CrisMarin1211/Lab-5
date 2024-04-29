import Card, { CardProducts } from '../components/Product/Product';
import { addObserver, appState, dispatch } from '../store/index';
import { GetProductsData, GetshoppingData, SaveshoppingData } from '../store/actions';
import storage from '../utils/storage';

class Dashboard extends HTMLElement {
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

		const actionget = await GetshoppingData();
		dispatch(actionget);
		const Storageget = JSON.stringify(appState);
		localStorage.setItem('Appstate', Storageget);
	}
	render() {
		const localstorage: any = window.localStorage;
		const local = JSON.parse(localstorage.getItem('Appstate'));

		local.products.forEach((products: any) => {
			const card = this.ownerDocument.createElement('my-product') as Card;
			card.setAttribute(CardProducts.image, products.image);
			card.setAttribute(CardProducts.title, products.title);
			card.setAttribute(CardProducts.description, products.description);
			card.setAttribute(CardProducts.category, products.category);
			card.setAttribute(CardProducts.price, JSON.stringify(products.price));
			card.setAttribute(CardProducts.ratingcount, JSON.stringify(products.rating.rate));
			card.setAttribute(CardProducts.ratingrate, JSON.stringify(products.rating.count));
			this.shadowRoot?.appendChild(card);
		});
	}
}

customElements.define('card-dashboard', Dashboard);
