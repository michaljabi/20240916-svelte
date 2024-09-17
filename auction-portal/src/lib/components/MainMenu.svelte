<script lang="ts">
	let isMenuOpen = false

	// przedrostek "hanlde" wskazuje że korzystam z tego na widoku jako event-handler
	// jes to po prostu konwencja nazewnicza (coding standard).
	const handleChangeFlag = () => isMenuOpen = !isMenuOpen;
	// variant2: Mogę to też zapisa tak:
	// function handleChangeFlag (){
	// 	isMenuOpen = !isMenuOpen
	// }

	// To jaki wariant wybierzemy nie ma znaczenia (może byc tez inline). 
	// Nie ma znaczenia z perspektywy np. testowania tego komponentu.
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
	<button class="navbar-toggler" type="button" on:click={handleChangeFlag}>
	<!-- <button class="navbar-toggler" type="button" on:click={() => isMenuOpen = !isMenuOpen}> -->
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" class:show={isMenuOpen}>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href="/auctions">Aukcje</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/promotions">Promocje</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/advices">Podpowiadamy</a>
			</li>
		</ul>
	</div>
</nav>

<style>

    /* Przykład selektora po atrybucie + pseudoelement ::before */
	a[href="/promotions"]::before {
		content: "🔨";
	}
	/*
	a {
		color: red
	}

	a:hover {
		color: lightcoral
	}
	*/
</style>

