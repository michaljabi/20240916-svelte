<script>
	const helloWorld = "<em>Hello</em> <strong>World</strong>"

	let  mySampleObject = {
		this: 'is',
		sample: 'thing',
		to: 'debug...'
	}
</script>

<!-- uwaga, tutaj podajemy identifier a nie expression -->
{@debug mySampleObject}
<!-- ten zapis umieszczamy poza HTML -->

<h2>Tagi specjalne</h2>
<h3 class="subtitle is-family-monospace">(part-a)/special-tags/+page.svelte</h3>
<div class="box">
	<h4><code>@html</code></h4>
	<blockquote>Interpretacja HTML zapisanego jako string</blockquote>
	<div>
		{helloWorld}
		{@html helloWorld}
	</div>
</div>

<div class="box">
	<h4><code>@debug</code></h4>
	<blockquote>alternatywa dla <code>console.log(...)</code>. Wyloguje zawartość jeśli się zmieni.
		Zatrzyma program jeśli mamy devTools otwarte</blockquote>
	<div>

	</div>
</div>


<div class="box">
	<h4><code>@const</code></h4>
	<blockquote>Dodatkowa zmienna lokalna w zakresie bloku logicznego w template</blockquote>
	<div>
		{#each [1, 2, 3, 4, 5] as count}
			{@const doubleCount = count * 2}
			{@const tripleCount = count * 3}
			{doubleCount}, {tripleCount},
		{/each}
	</div>
</div>