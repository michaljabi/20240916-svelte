<script lang="ts">
	import type { AuctionItem } from '$lib/model/AuctionItem';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
	import { createEventDispatcher } from 'svelte';

	export let auction: AuctionItem;

	// tutaj chcemy miec dispatcher eventu nazwanego
	// - wymysl nazwe na event dodajcy element do koszyka
	// - wysylaj tym eventem CAŁĄ auction!

	const dispatch = createEventDispatcher<{ addToCart: AuctionItem }>()
</script>

<div class="card">
	<div class="card-header">{auction.title}</div>
	<img class="card-img" src={auction.imgUrl} alt={auction.title} />
	<div class="card-body">
		<p class="card-text">{auction.description}</p>
		<div class="d-flex justify-content-between align-content-center">
			<strong> {auction.price} zł</strong>
			<button class="btn btn-primary" on:click={() => dispatch('addToCart', auction)}>
				<FontAwesomeIcon icon={faCartPlus} />
			</button>
		</div>
	</div>
</div>
