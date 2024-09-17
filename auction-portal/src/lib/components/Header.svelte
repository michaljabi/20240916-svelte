<script lang="ts">
	/*
        Zadanie: za każdym razem po najechaniu na <h1> dodawaj ! do napisu Auction Portal.
    */
	export let title = 'Auction Portal';
	export let sign = '!';
	export let luckyNumber = 2;

	// Parametr to obiekt i ja mogę go natychmiast zdestrukturyzowac
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
	function handleTitleOver({ clientX, clientY }: MouseEvent) {
		title += sign;
		//console.log(ev); // dobieram się do natywnego eventu;
		//const { clientX, clientY } = ev;
		console.log(clientX, clientY);
		// console.log(ev.clientX, ev.clientY)
	}
</script>

<header class="mb-2 p-5 bg-warning">
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<h1 on:mouseover={handleTitleOver} title={String(luckyNumber)}>{title}</h1>
</header>
