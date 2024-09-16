<script>
	// @DOC: https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop
	export let title = "Hello"
	export let favNumber = 1
</script>

<section>
	<h4> Sample {title} </h4>
	<div>My favourite number is {favNumber} </div>
</section>