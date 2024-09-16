import { derived, writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

interface Veggie {
	name: string;
}

// @DOC: https://svelte.dev/docs/svelte-store
const CTX_VEGGIES = 'CTX_VEGGIES';

// Łączymy tutaj wszystkie mechanizmy store + kontekst.
// Tak, aby dowolny komponent mógł skorzystać z tego store.
// UWAGA: o tym czy będzie to stan globalny decyduje moment, w którym wywołamy createVegetableStore
// oraz fakt ile razy wywołamy ten metodę (dla kontekstu globalnego powinno być to tylko 1 raz !)
export function createVegetableStore(initial: Veggie[]) {
	const items = writable<Veggie[]>(initial);
	const allItems = derived(items, (items) => items);
	const itemsCount = derived(items, (items) => items.length);

	const combinedStore = {
		allItems, // nie chcemy, żeby nasz store dało się modyfikować z zewnątrz
		itemsCount, // źródło prawdy odnośnie do ilości elementów
		addVegetable: (newVegetable: Veggie) => {
			// to jedyna metoda pozwalająca na modyfikacje przez nasze API
			items.update((veggies) => [...veggies, newVegetable]);
		}
	};

	// To pozwala nam na dobranie się do instancji tego store w innych komponentach:
	setContext(CTX_VEGGIES, combinedStore);

	return combinedStore;
}

// helper function do pobrania store z kontekstu (żebyśmy np. nie zrobili literówki etc.)
export function getVegetableStore() {
	return getContext<ReturnType<typeof createVegetableStore>>(CTX_VEGGIES);
}

// To mógłby być dobry pomysł ale nie w aplikacji SSR !!:
// export const myGlobalStore = createVegetableStore([])

// W tym układzie mielibyśmy "shared" state w całym cyklu życia aplikacji, nie tylko per request użytkownika.
// Dużo lepiej "uruchomić" stan globalny na głównym +layout.svelte aplikacji,
// tak aby upewnić się, że każdy USER ma własny "Stan globalny".
