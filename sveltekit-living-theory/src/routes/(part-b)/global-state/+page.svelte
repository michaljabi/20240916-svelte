<script lang="ts">
	import { getVegetableStore } from './vegetables.store';
	import AddVeggie from './AddVeggie.svelte';
	import VegetablesCount from './VegetablesCount.svelte';

	const {allItems} = getVegetableStore();

</script>

<h2>Stan globalny</h2>
<h3 class="subtitle is-family-monospace">(part-b)/global-state/+page.svelte</h3>
<div class="box">
	To czy nasz stan będzie dostępny globalnie, dla wszystkich czy tylko dla pewnej grupy komponentów. Zależne jest od momentu,
	w którym zdecydujemy się wykorzystać <code>setContext</code>
</div>
<div class="box">
	<h1>Vegetable List</h1>
	<VegetablesCount />

	<ul class="panel-list">
		{#each $allItems as veggie}
			<li class="panel-block">{veggie.name}</li>
		{/each}
	</ul>

	<AddVeggie />
	<VegetablesCount />
</div>
