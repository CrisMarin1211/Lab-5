import { products } from './products';
import { shopping } from './Shopping';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	products: products[];
	shopping: shopping[];
};

export enum productActions {
	'getPRODUCTS' = 'getPRODUCTS',
}

export enum shoppingActions {
	'getSHOPPING' = 'getSHOPPING',
	'saveSHOPPING' = 'saveSHOPPING',
}

export interface getPRODUCTSAction {
	action: productActions.getPRODUCTS;
	payload: products[];
}

export interface getSHOPPINGAction {
	action: shoppingActions.getSHOPPING;
	payload: shopping[];
}

export interface saveSHOPPINGAction {
	action: shoppingActions.saveSHOPPING;
	payload: shopping[];
}

export type Actions = getPRODUCTSAction | getSHOPPINGAction | saveSHOPPINGAction;
