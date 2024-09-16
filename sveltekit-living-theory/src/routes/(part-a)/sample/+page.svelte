<script>
	// Kolejność nie ma znaczenia, tutaj będzie logika:

	// @DOC -> https://svelte.dev/docs/svelte-components
</script>


<h2>Oto przykładowy komponent</h2>
<h3 class="subtitle is-family-monospace">(part-a)/sample/+page.svelte</h3>
<div>
	Komponenty mają rozszerzenia pliku: <code>.svelte</code>.
	<div class="my-6">
		Komponent może zawierać w sobie  <code>3</code> elementy:
		<ul>
			<li>Widok: po prostu jako wpisany kod HTML w pliku</li>
			<li>Logikę (kod), w tagach: <code>&ltscript&gt &lt/script&gt</code></li>
			<li>Styl, w tagach: <code>&ltstyle&gt &lt/style&gt</code></li>
		</ul>
	</div>

	Specjalne tagi <code>script</code> oraz <code>style</code> muszą być oddzielone od pozostałej części HTML.
	I być zdefiniowane obok HTMLu widoku, tak jak tutaj poniżej i powyżej.

	<hr />
	Standardowo komponenty zaczynają nazwę <em>Dużą literą</em> np. <code>Header.svelte</code>. Jednak budując aplikację <em>SvelteKit</em>
	możemy napotkać specjalnie komponenty z początkiem na <code>+</code>
	np:
	<ul>
		<!--		@DOC: https://kit.svelte.dev/docs/routing#page -->
		<li><code>+page.svelte</code> - główny komponent osadzony na danej stronie routingu (tak jak ten)</li>
		<!--		@DOC: https://kit.svelte.dev/docs/routing#layout -->
		<li><code>+layout.svelte</code> - layout dla strony i jej podstron</li>
		<!--		@DOC: https://kit.svelte.dev/docs/routing#error -->
		<li><code>+error.svelte</code> - obsługa wyświetlania błędów dla danej strony</li>
	</ul>
</div>


<style>
	/* Kolejność nie ma znaczenia (tzn. możemy najpierw <script> potem HTML na koniec <style> etc...) */

	/* warto jednak trzymać się tej samej kolejności tych tagów jako pewien coding-standard w naszej aplikacji ... */
</style>