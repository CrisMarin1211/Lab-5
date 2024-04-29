import './components/indexPadre';
import { Dashboard } from './screens/dashboard';
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
		const something = this.ownerDocument.createElement('div');
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);
