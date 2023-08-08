import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import { functionIsRunningOnBrowser } from '../functions/functionIsRunningOnBrowser.js';

const symbolContextKey = Symbol();

export function functionCreateDarkModeStore(parInitialValue = false) {
	const storeReturn = writable<boolean>(parInitialValue);
	if (functionIsRunningOnBrowser()) {
		storeReturn.set(localStorage.storageDarkMode === 'true' ? true : false);
		storeReturn.subscribe((value) => {
			localStorage.storageDarkMode = value;
		});
	}
	setContext(symbolContextKey, storeReturn);
}
export function functionReadDarkModeStore() {
	return getContext<Writable<boolean>>(symbolContextKey);
}
