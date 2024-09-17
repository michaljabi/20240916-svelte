<script lang="ts">
	import MainMenu from '$lib/components/MainMenu.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header sign="👻" luckyNumber={9} />
<main class="container">
	<MainMenu />
	<slot />
</main>
