<script lang="ts">
	import AuctionCard from './AuctionCard.svelte';

	import BasePage from '$lib/components/BasePage.svelte';
	import type { AuctionItem } from '$lib/model/AuctionItem';
	import { onMount } from 'svelte';
	// import { getAllAuctions } from '$lib/server/auction.service';

	let errorMessage = '';

	async function callAuctions() {
		try {
			const response = await fetch('/api/auctions');
			if (!response.ok) {
				// To jest konieczne z każdym razem, bo fetch nie rzuca wyjątku jak serwer odpowiada 400 i wyżej...
				const error = await response.json();
				throw new Error(error.message);
			}
			const auctions = await response.json();
			console.log(auctions);
			return auctions;
		} catch (e) {
			// niebezpieczny zapis (asercja typu) // @DOC: ts. -> type assertions
			// errorMessage = (e as Error).message;
			if (e instanceof Error) {
				// @DOC ts. -> instace guard (działa Runtime)
				errorMessage = e.message;
			}
			return [];
		}
	}

	let isLoading = true;
	let myAuctions: AuctionItem[] = [];

	// Wrócimy do tego dlaczego to trzeba potem poprawic (w kontekscie onMount ->)
	onMount(async () => {
		myAuctions = await callAuctions();
		isLoading = false;
	});

	// console.log(data);
</script>

<BasePage title="Aukcje">
	<!-- <svelte:fragment slot="title">
		<h3 style="color: red">Aukcje</h3>
		<h3 style="color: red">?</h3>
	</svelte:fragment> -->
	<section>
		<div class="row">
			{#if isLoading}
				<div class="col-12">
					<div class="alert alert-info">Ładuję aukcje...</div>
				</div>
			{/if}
			{#if errorMessage}
				<div class="col-12">
					<div class="alert alert-danger">{errorMessage}</div>
				</div>
			{/if}
			{#each myAuctions as auction (auction.id)}
				{@const discountPrice = auction.isPromoted ? '10%' : '0%'}

				<div class="col-12 col-sm-6 col-md-4 col-lg-3">
					<AuctionCard {auction} />
					Discount is: {discountPrice}
					<!-- <AuctionCard auction={auction} /> -->
				</div>
			{/each}
		</div>
	</section>
</BasePage>
