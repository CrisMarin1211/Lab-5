import { getShoppingCart } from '../services/getProducts';
import {
	getPRODUCTSAction,
	getSHOPPINGAction,
	saveSHOPPINGAction,
	productActions,
	shoppingActions,
} from '../types/store';
import { Observer, AppState, Actions } from '../types/store';
import { shopping } from '../types/Shopping';

export const GetProductsData = async (): Promise<getPRODUCTSAction> => {
	const data = await getShoppingCart();
	return {
		action: productActions.getPRODUCTS,
		payload: data,
	};
};
export const GetshoppingData = async (): Promise<getSHOPPINGAction> => {
	const data = await getShoppingCart();
	return {
		action: shoppingActions.getSHOPPING,
		payload: data,
	};
};
export const SaveshoppingData = (product: shopping) => {
	return {
		action: shoppingActions.saveSHOPPING,
		payload: product,
	};
};
