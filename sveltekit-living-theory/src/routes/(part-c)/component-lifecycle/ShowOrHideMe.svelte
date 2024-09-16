<script lang="ts">

	import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte';


	onMount(() => {
		console.log('ShowOrHideMe mounted');

		return () => console.log('ShowOrHideMe unmounted');
	});

	// Możemy użyć więcej niż 1 jednego callback na każdy etap cyklu np.
	// onMount(() => {
	// 	console.log('ShowOrHideMe mounted 2nd');
	//
	// 	return () => console.log('ShowOrHideMe unmounted 2nd');
	// });

	beforeUpdate(() => {
		console.log('ShowOrHideMe is about to update');
	});

	afterUpdate(() => {
		console.log('ShowOrHideMe just updated');
	});

	onDestroy(() => {
		console.log('ShowOrHideMe is being destroyed');
	});

	let state = 1;

</script>

<section class="is-flex is-align-items-center">
	Hello from ShowOrHideMe <button class="button is-small mx-3" on:click={() => state++}>{state}</button> !
</section>