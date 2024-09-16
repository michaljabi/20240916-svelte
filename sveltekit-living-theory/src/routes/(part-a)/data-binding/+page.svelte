<script>
	const logic = 'Logiką';
	const myTitle = 'Witaj w Svelte';
	let increment = 0; // to jest stan danych słowo "let" wskazuje, że możemy nadpisać tę wartość.

	function handleButtonClick() {
		increment++;
	}
</script>

<h2>Koncepcja bindowania widoku</h2>
<h3 class="subtitle is-family-monospace">(part-a)/data-binding/+page.svelte</h3>
<div>
	<p class="notification is-info">
		Widok komunikuje się z { logic } za pomocą specjalnego syntaxu.
	</p>
	<div class="box">
		<div title={myTitle}>Najedź na mnie aby zobaczyć tooltip !</div>
	</div>
	<div class="box">
		<div class="mb-3">
			<h6 class="title is-5">
				Svelte natychmiastowo odpowiada na zmiany: { increment }
			</h6>
		</div>
		<button class="button" on:click={handleButtonClick}>
			Kliknij po przykładowy event ({ increment })
		</button>
	</div>

	<div class="box">
		Znaki nawiasów klamrowych, można traktować jako
		<mark>portal w którym działa JavaScript</mark>
		<p class="notification">
			Przykładowo:
			<code>{ 2 + 3 + '!'.repeat(22) + 'a'.toUpperCase() }</code>
		</p>
		<p class="notification is-success">
			A dla atrybutów:
			<a
				class="has-text-link"
				href={['http://regex101', 'com'].join('.')}
				target={'_' + 'blank'}>
				Link Test...
			</a>
		</p>
	</div>
</div>
