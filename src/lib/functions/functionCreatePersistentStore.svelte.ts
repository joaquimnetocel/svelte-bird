import type { typeContext } from '$lib/types/typeContext.js';
import { BROWSER } from 'esm-env';

import { setContext } from 'svelte';

export function functionCreatePersistentStore<genericT>(
	parInitialValue: genericT,
	parContext: typeContext,
) {
	const state = $state({ value: parInitialValue });

	if (BROWSER) {
		const stringBrowserValue = localStorage.getItem(parContext);
		if (stringBrowserValue !== null) {
			state.value = JSON.parse(stringBrowserValue);
		}
	}

	$effect(() => {
		localStorage.setItem(parContext, JSON.stringify(state.value));
	});

	setContext(parContext, state);
}
