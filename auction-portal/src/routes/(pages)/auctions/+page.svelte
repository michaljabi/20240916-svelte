<script lang="ts">
	import BasePage from '$lib/components/BasePage.svelte';
	import type { AuctionItem } from '$lib/model/AuctionItem';
	import { onMount } from 'svelte';
	// import { getAllAuctions } from '$lib/server/auction.service';

	async function callAuctions() {
		const response = await fetch('/api/auctions');
		const auctions = await response.json();
		return auctions;
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
			{JSON.stringify(myAuctions)}
			<div class="col-12 col-sm-6 col-md-4 col-lg-3">
				1
				<div class="card">
					<div class="card-header">Tytuł</div>
					<img class="card-img" src="https://picsum.photos/id/36/200/200" alt="" />
					<div class="card-body">
						<p class="card-text">Opis aukcji</p>
						<div class="d-flex justify-content-between align-content-center">
							<strong> 0 zł</strong>
							<button class="btn btn-primary">
								<i class="fa fa-cart-plus"></i>
							</button>
						</div>
					</div>
				</div>
				<!-- <AuctionCard auction={auction} /> -->
			</div>
	</section>
</BasePage>
