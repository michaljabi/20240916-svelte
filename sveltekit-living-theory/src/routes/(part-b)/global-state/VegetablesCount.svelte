<script>
	import { getVegetableStore } from './vegetables.store';

	const { itemsCount } = getVegetableStore()
</script>

<!-- Zapis z $itemsCount pozwala nam zasubskrybować się w widoku do tego store: -->
<p class="mt-3">Total vegetables: <code>{$itemsCount}</code></p>