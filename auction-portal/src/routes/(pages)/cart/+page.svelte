<script lang="ts">
	import BasePage from '$lib/components/BasePage.svelte';

	export let data;
</script>

<BasePage title="Koszyk">
	{#if data.isAuth}
		<div>User jest zalogowany...</div>
	{/if}
</BasePage>
