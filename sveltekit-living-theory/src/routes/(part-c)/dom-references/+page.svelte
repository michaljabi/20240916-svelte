<script lang="ts">

	import { onMount } from 'svelte';

	let myInputRef: HTMLInputElement;
	
	onMount(() => {
		// spróbuj dla porównania zakomentować linię poniżej:
		myInputRef.focus()
	})
</script>

<h2>Referencja do elementu DOM</h2>
<h3 class="subtitle is-family-monospace">(part-c)/dom-references/+page.svelte</h3>
<div class="box">
	Używając składni <code>bind:this</code> jesteśmy w stanie otrzymać referencje do natywnego elementu DOM.
	Element musi być osadzony na dokumencie, dlatego akcje na nim możemy wykonywać dopiero w momencie
	<code>onMount</code> cyklu życia komponentu.
</div>
<div class="box">
	<label>
		Element będzie miał od razu focus:
		<input class="input mt-2" bind:this={myInputRef} />
		<!-- @DOC: https://svelte.dev/docs/element-directives#bind-this -->
	</label>
</div>