<script lang="ts">
	import type { AuctionItem } from '$lib/model/AuctionItem';

	export let auction: AuctionItem;
</script>

<div class="card">
	<div class="card-header">{auction.title}</div>
	<img class="card-img" src={auction.imgUrl} alt={auction.title} />
	<div class="card-body">
		<p class="card-text">{auction.description}</p>
		<div class="d-flex justify-content-between align-content-center">
			<strong> {auction.price} zł</strong>
			<button class="btn btn-primary">
				<i class="fa fa-cart-plus"></i>
			</button>
		</div>
	</div>
</div>
