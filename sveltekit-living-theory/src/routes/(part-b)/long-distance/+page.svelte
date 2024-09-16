<script lang="ts">
	import { setContext } from 'svelte';
	import Inception from './Inception.svelte';
	import { writable } from 'svelte/store';

	// @DOC: https://svelte.dev/docs/svelte#setcontext
	// Ta wartość po kluczu "place" jest dostępna dla wszystkich Children i GrandChildren tego komponentu,
	// będzie również dostępna dla komponentów wczepionych jako <slot />
	setContext('place', 'cozy bed');

	// Dla reaktywności 2gi kontekst jest podłączony jako store
	// @DOC: https://svelte.dev/docs/svelte-store
	const changeStore =  writable('thing');
	setContext('change-in-time', changeStore);
	setTimeout(() => {
		changeStore.set('BOOM !')
	}, 3000)
</script>

<h2>Komunikacja na dalekie odległości</h2>
<h3 class="subtitle is-family-monospace">(part-b)/long-distance/+page.svelte</h3>
<div class="box">
	Mechanizm w Svelte nazwany <code>Context</code> pozwala nam na komunikację pomiędzy komponentami na dalekie odległości.
	<code>Context</code> najlepiej jest połączyć z mechanizmem <code>store</code> aby był on reaktywny i pozwalał nam
	na obserwowanie zmian w czasie.
</div>
<div class="box">
	<code>Context</code> zależny jest od miejsca w którym występuje w hierarchii komponentów, możemy więc tworzyć niezależne grupy
	komponentów połączone na osobnych gałęziach drzewa DOM, które będą miały osobne konteksty per instancja głównego komponentu.
</div>
<div class="box">
	<Inception />
</div>
