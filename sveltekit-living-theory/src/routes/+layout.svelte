<script>
	import 'bulma/css/bulma.css';
	import MainMenu from '$lib/components/MainMenu.svelte';
	import { createVegetableStore } from './(part-b)/global-state/vegetables.store';

	const title = 'Svelte';

	// Zainicjowanie stanu globalnego aplikacji potrzebnego do części B.
	const myVeggies = createVegetableStore([{ name: 'Onions' }]);
	// Zauważ, że o tym czy będzie to stan globalny czy nie - będzie decydował moment jego inicjalizacji.
	const { itemsCount } = myVeggies;
</script>

<main class="container mb-5">
	<header class="hero is-info">
		<div class="hero-body">
			<h1 class="title">SvelteKit Live Theory ({$itemsCount})</h1>
			<h4 class="subtitle">sprawdź jak działa {title}!...</h4>
		</div>
	</header>
	<section class="columns mt-5">
		<MainMenu />
		<div class="column is-9 content">
			<slot />
		</div>
	</section>
</main>
