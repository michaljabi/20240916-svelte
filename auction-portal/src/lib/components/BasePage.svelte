<script lang="ts">
	export let title: string;
</script>

<slot name="title">
	<h2 class="my-4 p-2 border-bottom border-primary">{title}</h2>
</slot>
<slot>fallback content...</slot>
