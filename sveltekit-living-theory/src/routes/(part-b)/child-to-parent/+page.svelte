<script lang="ts">

import SampleChildWithEvent from './SampleChildWithEvent.svelte';

let newFruit = '';

function handleAddFruit(event: CustomEvent<string>): void {
	newFruit = event.detail
}

</script>

<h2>Komunikacja (from) child (to) parent</h2>
<h3 class="subtitle is-family-monospace">(part-b)/child-to-parent/+page.svelte</h3>
<div class="box">
	Przekazania danych z komponentu <em> Child </em> do komponentu <em> Parent </em> następuje za pomocą tzw. <code>EventDispatcher'a</code>.
	Pozwala on na rozgłoszenie <code>CustomEvent</code>, który może być wychwycony przez komponent <em> Parent </em>. Event ten posiadać będzie
	dane wpisane w propery <code>.detail</code>, wysłane z komponentu <em>Child</em>.
</div>
<div class="box">
		<span> We need to add: {newFruit} </span>
		<SampleChildWithEvent on:addNewFruit={handleAddFruit} />
</div>
