<script>
	import { getContext } from 'svelte';

	const place = getContext('place');
	const myIdea = getContext('my-idea');
	const value = getContext('change-in-time');
</script>

<h5>The dream place is: {place}</h5>
<h6>This value will change .... -> {$value}</h6>
<div>
	Co się dzieje: {myIdea}
</div>
