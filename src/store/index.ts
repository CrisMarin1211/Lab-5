import Storage, { PersistanceKeys } from '../utils/storage';
import { Actions, AppState, Observer } from '../types/store';
import { reducer } from './reducer';

export let appState: AppState = {
	products: [],
	shopping: [],
};

let observers: Observer[] = [];

export const dispatch = (action: Actions) => {
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o) => o.render());
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};
