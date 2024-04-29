import { Actions, AppState, productActions, shoppingActions } from '../types/store';
import { appState } from './index';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;
	console.log(action, payload);
	switch (action) {
		case productActions.getPRODUCTS:
			return {
				...currentState,
				products: payload,
			};
		case shoppingActions.getSHOPPING:
			return {
				...currentState,
				shopping: payload,
			};

		default:
			return currentState;
	}
};
