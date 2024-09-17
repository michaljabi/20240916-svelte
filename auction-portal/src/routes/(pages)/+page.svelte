<script lang="ts">
	import BasePage from '$lib/components/BasePage.svelte';

	// let x = 256
	// let myTitle = 'To jest tytuł, po najechaniu'
	// // debugger; //check in config (not working)
	// console.log(x);

	// // console.log(document) later...

	// setTimeout(() => {
	// 	x = 2;
	// 	myTitle = 'To jest tytuł 3'
	// }, 3000)
	let mySign = '📦';
</script>

<BasePage title="Strona Główna">
	<h3 slot="title">tutaj będzie redirect (TODO)</h3>
	<p>pusto tutaj...</p>
</BasePage>

<!-- zadanie: przenieś do +layout.svelte -->
<!-- zdecyduj gdzie będzie <slot /> -->
<!-- <Header sign="👻" luckyNumber={9} /> 
<main class="container">
	<MainMenu/>
</main> -->
<!-- <Header sign={mySign} /> 
<Header title="sample hello" />  -->
<!-- <a href="/auctions" title={myTitle}>Aukcje {x}</a>


<div on:click={() => x = 23333} > Mój szczęśliwy numer to: {x}</div> -->
