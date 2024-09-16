<script lang="ts">
	import { fade } from 'svelte/transition';

	interface Fruit {
		amount: number;
		name: string;
	}

	let isVisible = true;

	function toggleVisible() {
		isVisible = !isVisible;
	}

	const fruits: Fruit[] = [
		{ amount: 2, name: 'bananas' },
		{ amount: 1, name: 'apple' },
		{ amount: 10, name: 'cherries' }
	];

	const promise = new Promise<number>(resolve => { setTimeout(() => resolve(123), 4000); });

	let value = 1
	setInterval(() => {
		value++
	}, 1000)
</script>

<h2>Bloki logiczne w template</h2>
<h3 class="subtitle is-family-monospace">(part-a)/template-logic-blocks/+page.svelte</h3>
<div class="box">
	<h4><code>#if</code></h4>
	<blockquote>Pokazanie / ukrywanie elementów widoku (lifecycle elementu):</blockquote>
	<button class="button" on:click={toggleVisible}>{isVisible ? 'Ukryj' : 'Pokaż'} element</button>
	<div class="mt-3">
		{#if isVisible}
			📦!
		{:else}
			<span>...</span>
		{/if}
	</div>
</div>
<div class="box">
	<h4><code>#each</code></h4>
	<blockquote>Iterowanie po kolekcji i renderowanie elementów tej kolekcji</blockquote>
	<div class="mt-3">
		{#each ['a', 'b', 'c', 'd'] as letter}
			<div>{ letter }</div>
		{/each}
	</div>
	<div class="panel mt-6">
		{#each fruits as fruit, index (fruit.name)}
			<div class="panel-block">
				{index + 1}. { fruit.name } - {fruit.amount }szt.
			</div>
		{/each}
	</div>
</div>

<div class="box">
	<h4><code>#await</code></h4>
	<blockquote>Resolve / Reject od <code>Promise</code> na widoku</blockquote>
	{#await promise}
		<!-- Czekamy na asynchroniczny wynik -->
		<p>Oczekiwanie na dane...</p>
	{:then someNumber}
		<!-- Otrzymaliśmy wynik (resolve) -->
		<p>Wynik to {someNumber}</p>
	{:catch anyError}
		<!-- Otrzymaliśmy błąd (reject) -->
		<p>Coś poszło nie tak: {anyError.message}</p>
	{/await}
</div>


<div class="box mb-6">
	<h4><code>#key</code></h4>
	<blockquote>Tworzenie bloku kodu template (DOM) na nowo jeśli wartość się zmienia</blockquote>
	{#key value}
		<!-- Przydatne jeśli animujemy zmianę na DOM (tutaj zanikanie) -->
		<span style="font-size: 20px" in:fade>{value}</span>
	{/key}
</div>