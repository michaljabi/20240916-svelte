<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<slot name="title">
	<h2 class="my-4 p-2 border-bottom border-primary">{title}</h2>
</slot>
<slot>czekam na treś storny....</slot>
