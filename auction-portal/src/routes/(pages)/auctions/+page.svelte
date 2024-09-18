<script lang="ts">
	import BasePage from '$lib/components/BasePage.svelte';
	import type { AuctionItem } from '$lib/model/AuctionItem';
	import AuctionCard from './AuctionCard.svelte';

	export let data;
	// export let error;

	// let errorMessage = '';
	function handleAddToCart(ev: CustomEvent<AuctionItem>) {
		console.log(ev.detail)
	}
</script>

<BasePage title="Aukcje">
	<section>
		<div class="row">
			<!-- {#if isLoading}
				<div class="col-12">
					<div class="alert alert-info">Ładuję aukcje...</div>
				</div>
			{/if}
			{#if errorMessage}
				<div class="col-12">
					<div class="alert alert-danger">{errorMessage}</div>
				</div>
			{/if} -->
			{#each data.auctions as auction (auction.id)}
				{@const discountPrice = auction.isPromoted ? '10%' : '0%'}

				<div class="col-12 col-sm-6 col-md-4 col-lg-3">
					<AuctionCard
						{auction}
						on:addToCart={handleAddToCart}
					/>
					<!-- 
					Wariant nr 2: inline....
					<AuctionCard
						{auction}
						on:addToCart={(ev) => {
							console.log(ev.detail);
						}}
					/> -->
					Discount is: {discountPrice}
					<!-- <AuctionCard auction={auction} /> -->
				</div>
			{/each}
		</div>
	</section>
</BasePage>
