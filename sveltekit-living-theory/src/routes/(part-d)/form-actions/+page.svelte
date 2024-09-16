<script lang="ts">
	import type { ActionData } from './$types';

	// Do sprawdzenia jak zachowuje się lokalny stan danych
	let numeric = 0;

	export let form: ActionData;
</script>

<h2>Akcje formularza</h2>
<h3 class="subtitle is-family-monospace">(part-d)/form-actions/+page.svelte</h3>
<div class="box">
 Formularze w SvelteKit mają łatwe połączenie z <code>server-side</code> poprzez tzw. <em>Akcje</em>.
 Dają nam one możliwość odbioru danych wpisanych po stronie klienta. Co więcej - dostaniem pod <code>form: ActionData</code>
	informacje zwrotną odnośnie wypełnienia formularza.
	<hr />
	Element, na który musimy zwrócić uwagę, to zachowanie stanu lokalnego komponentu. Spróbuj kliknąć kilka razy na <em>+</em>
	aby przekonać się, że gubimy stan. Dzieje się tak dlatego, że formularz wysyłany jest natywną metodą <code>POST</code> w przeglądarce.
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
		<form method="POST" action="?/login">
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