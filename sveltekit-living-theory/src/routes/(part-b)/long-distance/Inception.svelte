<script>
	import { setContext } from 'svelte';
	import FirstDream from './FirstDream.svelte';

	setContext('my-idea', Math.random());
</script>

<FirstDream />
