<script>
	import { getVegetableStore } from './vegetables.store';

	const { addVegetable } = getVegetableStore();

	let newVegetable = '';

	// Function to add a new vegetable
	function addVeggie() {
		addVegetable({ name: newVegetable });
		newVegetable = ''; // Clear the input field after adding
	}
</script>

<input class="input" type="text" bind:value={newVegetable} placeholder="Add a vegetable" />
<button class="button mt-2" on:click={addVeggie}>Add Vegetable</button>