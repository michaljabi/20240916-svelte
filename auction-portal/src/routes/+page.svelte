<script lang="ts">
	import Header from "$lib/components/Header.svelte";

	let x = 256
	let myTitle = 'To jest tytuł, po najechaniu'
	// debugger; //check in config (not working)
	console.log(x);

	// console.log(document) later...

	setTimeout(() => {
		x = 2;
		myTitle = 'To jest tytuł 3'
	}, 3000)


</script>

<Header /> 
<a href="/auctions" title={myTitle}>Aukcje {x}</a>


<div on:click={() => x = 23333} > Mój szczęśliwy numer to: {x}</div>