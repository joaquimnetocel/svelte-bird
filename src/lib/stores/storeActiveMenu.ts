// import { functionIsRunningOnBrowser } from '../functionIsRunningOnBrowser.js';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

const symbolContextKey = Symbol();

export function functionCreateActiveMenuStore() {
	const storeReturn = writable<string>('');
	// if (functionIsRunningOnBrowser()) {
	// 	storeReturn.set(localStorage.storageActiveMenu ?? '');
	// 	storeReturn.subscribe((value) => {
	// 		localStorage.storageActiveMenu = value;
	// 	});
	// }
	setContext(symbolContextKey, storeReturn);
}

export function functionReadActiveMenuStore<genericT = string>() {
	return getContext<Writable<genericT>>(symbolContextKey);
}
