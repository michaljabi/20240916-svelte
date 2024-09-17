<script lang="ts">
	let isMenuOpen = false;

	// przedrostek "hanlde" wskazuje że korzystam z tego na widoku jako event-handler
	// jes to po prostu konwencja nazewnicza (coding standard).
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
	const handleChangeFlag = () => (isMenuOpen = !isMenuOpen);
	// variant2: Mogę to też zapisa tak:

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
	// function handleChangeFlag (){
	// 	isMenuOpen = !isMenuOpen
	// }

	// To jaki wariant wybierzemy nie ma znaczenia (może byc tez inline).
	// Nie ma znaczenia z perspektywy np. testowania tego komponentu.

	/*
	interface Sample {
		(): number
	}

	const myexample: Sample = () => 20
	*/

	// Jedna z różnic pomiędzy type a interface w TypeScript to fakt że interface jest ZAWSZE obiektowy!!!
	// type Money = number;
	// type Money = { amount: number, currency: 'PLN' | 'USD' };

	/* 
	// można też tak:
	type MenuLink = {
		label: string
		link: string
	}
	*/

	interface MenuLink {
		label: string;
		link: string;
	}

	const menuLinks: MenuLink[] = [
		{ label: 'Aukcje', link: '/auctions' },
		{ label: 'Promocje', link: '/promotions' },
		{ label: 'Podpowiadamy', link: '/advices' }
	];
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
	<button class="navbar-toggler" type="button" on:click={handleChangeFlag}>
		<!-- <button class="navbar-toggler" type="button" on:click={() => isMenuOpen = !isMenuOpen}> -->
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" class:show={isMenuOpen}>
		<ul class="navbar-nav">
			<!-- generuj poniższe za pomocą kodu:-->
			{#each menuLinks as item (item.label)}
				<li class="nav-item">
					<a class="nav-link" href={item.link}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	/* Przykład selektora po atrybucie + pseudoelement ::before */
	a[href='/promotions']::before {
		content: '🔨';
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
