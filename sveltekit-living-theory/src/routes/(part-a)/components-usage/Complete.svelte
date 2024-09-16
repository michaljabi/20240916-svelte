<script context="module">
	// @DOC: https://svelte.dev/docs/svelte-components#script-context-module
	console.log('I will run only ONCE in the entire App lifecycle...')
	// Nic stąd nie zostanie rozpatrzone jako reaktywne.
</script>

<script>
	// Ta część kodu uruchomi się ZAWSZE jeśli osadzimy ten komponent na widoku
	console.log('I will run on EVERY component instance')
</script>

<h5>Hello from <code>Complete</code>, check out <code>console</code></h5>