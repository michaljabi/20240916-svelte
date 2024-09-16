import { describe, it, expect } from 'vitest';

describe('sum test', () => {

	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});

});

// Funkcja przyjmuje funkcje 
// naprostrzy motyw asynchroniczności w JS:
setTimeout(() => {
	console.log('!')
}, 3000)

// 3 levele asynchroniczności w JS:

// 1. Callback
// 2. Promises (2x callback -> 1x Resolve -> 1x Reject)  || async / await keywords !
// 3. Observable (Streams) [library] | RxJs | Svelte ... inna