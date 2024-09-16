<script>
	// ZASADA:
	// komponenty będziemy pisać zawsze wielką literą:
	import SampleComponent from './SampleComponent.svelte';
	import Complete from './Complete.svelte';
	// To sprawi, że np. Header to co innego niż HTMLowy: header

	/*
	  wyjątkiem są elementy specjalne SvelteKit takie jak: +pages.svelte czy +layout.svelte
	  są to komponenty specjalnego przeznaczenia reprezentujące strony oraz layouty.

	  sami nie osadzamy tych elementów na innych stronach (tak jak standardowe komponenty).
	  Nie musimy ich również nigdzie importować.

	*/
</script>

<h2>Używanie komponentów na widoku</h2>
<h3 class="subtitle is-family-monospace">(part-a)/components-usage/+page.svelte</h3>
<div>
	Komponent można zaimportować i użyć ile razy chcemy na widoku:
	<hr />

	<!-- Możemy używać komponentu, ponieważ go zaimportowaliśmy powyżej -->
	<SampleComponent/>
	<SampleComponent/>
	<SampleComponent/>

	<div class="my-3">
		W ten sposób przygotowujemy re-używalne części widoku oraz logiki.
		Mamy również możliwość przekazywania do nich, i odbierania od nich danych, co jest pokazane w części <code>B</code>.
		Gdzie pokazana jest komunikacja pomiędzy komponentami
	</div>

	<Complete />
	<Complete />
	<Complete />
</div>