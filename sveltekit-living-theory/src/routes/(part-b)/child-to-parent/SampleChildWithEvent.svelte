<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ addNewFruit: string }>();

	let fruit = "apple"

	function sendEvent() {
		dispatch('addNewFruit', fruit)
		fruit = "";
	}
</script>

<section class="field mt-6">
	<label>
		Fruit name:
		<!-- tutaj bind:value pozwala na osiągnięcie tzw. two-way-data-binding -->
		<!-- @DOC: https://svelte.dev/docs/component-directives#bind-property -->
		<input class="input" bind:value={fruit} />
		<!--
				jeśli zabierzesz bind: stąd, to wartość do input zostanie przekazana 1 raz.
				To tak jak w klasycznych `props`.

				bind: powoduje że w momencie aktualizacji value przez input - zaktualizuje się również
				wartość fruit w logice komponentu.
		-->

	</label>
	<button class="button mt-3" on:click={sendEvent}>Send: "{fruit}"</button>
</section>