<script lang="ts">

	import ShowOrHideMe from './ShowOrHideMe.svelte';

	let isShown = true;

	$: text = isShown ? 'Schowaj' : 'Pokaż';

	// @DOC: https://svelte.dev/docs/svelte#onmount
</script>

<h2>Cykl życia komponentu</h2>
<h3 class="subtitle is-family-monospace">(part-c)/component-lifecycle/+page.svelte</h3>
<div class="box">
	Instancja komponentu <code>ShowOrHideMe</code> jest tworzona za każdym razem gdy <code>isShown</code> zmieni się z
	<code>false</code> na <code>true</code>. W odwrotnej sytuacji - ulega ona "zniszczeniu" <code>onDestroy</code> podczas
	odmontowania z DOM.
	<hr />
	Svelte daje nam kilka funkcji przyjmujących <em>callback'i</em>, wywoływane w odpowiednich momentach tzw. cyklu życia komponentu.
	<ul>
		<li><code>onMount</code> - Pojawienie się komponentu na DOM</li>
		<li><code>beforeUpdate</code> - Aktualizacja stanu wewnętrznego</li>
		<li><code>afterUpdate</code> - Po aktualizacji stanu wewnętrznego</li>
		<li><code>onDestroy</code> - Usuwanie komponentu z DOM</li>
	</ul>
	<hr />
	Zobacz na konsoli w jakich sytuacjach występują wiadomości informujące o tych zdarzeniach, skorzystaj z pomocniczego przycisku: <em>Pokaż</em> / <em>Schowaj</em> <em>komponent</em>
</div>
<div class="box">

	<div class="my-5">
		{#if isShown}
			<ShowOrHideMe />
		{/if}
	</div>
	<button class="button" on:click={() => isShown = !isShown}>{text} komponent</button>

</div>