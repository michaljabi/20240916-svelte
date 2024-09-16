<script lang="ts">
	// @DOC: https://superforms.rocks/
	import { superForm } from 'sveltekit-superforms';

	export let data;

	// @DOC: https://superforms.rocks/concepts/enhance
	const { form, errors, constraints, enhance } = superForm(data.form, {resetForm: true});
</script>

<h2>Formularze budowane z inną biblioteką</h2>
<h3 class="subtitle is-family-monospace">(part-d)/third-party-forms/+page.svelte</h3>
<div class="box">
	Pomimo tego, że formularze w SvelteKit działają dobrze jeśli chodzi o komunikację z serwerem.
	Warto zobaczyć biblioteki służące do budowania formularzy jak np. <strong>Superforms</strong>, tak aby
	dodać np. walidację w oparciu o przygotowany schemat danych.
	<hr />
	W tym przykładzie mamy do formularza dodaną walidację w JS.
</div>
<div class="box">
	<!-- @DOC: https://superforms.rocks/get-started#displaying-the-form -->
	<form method="POST" action="?/login" novalidate use:enhance>
		<label class="label">
			Email:
			<!-- @DOC: https://superforms.rocks/concepts/client-validation#built-in-browser-validation -->
			<input class="input" class:is-danger={$errors.email} name="email" type="email" bind:value={$form.email} {...$constraints.email} >
		</label>
		<!-- https://superforms.rocks/concepts/error-handling -->
		{#if $errors.email}
			<p class="help is-danger">{$errors.email}</p>
		{/if}
		<label class="label">
			Password:
			<input class="input"  class:is-danger={$errors.password}  name="password" type="password" bind:value={$form.password} {...$constraints.password}>
		</label>
		{#if $errors.password}
			<p class="help is-danger">{$errors.password}</p>
		{/if}
		<button class="button is-primary">Log in</button>
	</form>
</div>