<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData } from './$types';

	// Do sprawdzenia jak zachowuje się lokalny stan danych
	let numeric = 0;

	export let form: ActionData;
</script>

<h2>Progressive enhancement</h2>
<h3 class="subtitle is-family-monospace">(part-d)/enhanced-forms/+page.svelte</h3>
<div class="box">
	Tutaj na formularzu użyty jest zapis <code>use:enhance</code> sprawiający, że nie zgubimy stanu lokalnego
	ani stanu globalnego
</div>
<div class="box">
	<div class="is-flex mb-3 is-align-items-center">
		Zobacz jak zachowa się stan: <code class="mx-3">{numeric}</code> <button class="button" on:click={() => numeric++}>+</button>
	</div>
	{#if form?.success}
		<div class="notification is-success">
			Formularz odebrany, {form.email} zalogowany!
		</div>
	{:else}
		<!-- use:enhanced - sprawi że formularz będzie wysłany przez AJAX, i nie zgubimy stanu lokalnego -->
		<!-- @DOC: https://kit.svelte.dev/docs/form-actions#progressive-enhancement -->
		<form method="POST" action="?/login" use:enhance>
			<label class="label">
				Email:
				<input class="input" name="email" type="email">
			</label>
			<label  class="label">
				Password:
				<input class="input"  name="password" type="password">
			</label>
			<button class="button is-primary">Log in</button>
		</form>
	{/if}
</div>