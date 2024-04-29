import './components/indexPadre';
import './screens/dashboard';
import styles from './IndexAbuelo.css';
import { appState } from './store/index';
import { AppState } from './types/store';
import './components/indexPadre';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('card-dashboard');
		this.shadowRoot?.appendChild(something);

		const cssAbuelo = this.ownerDocument.createElement('styles');
		cssAbuelo.innerHTML = styles;
		this.shadowRoot?.appendChild(cssAbuelo);
	}
}

customElements.define('app-container', AppContainer);
