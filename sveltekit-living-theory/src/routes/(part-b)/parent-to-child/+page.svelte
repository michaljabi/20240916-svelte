<script lang="ts">

	import SampleChild from './SampleChild.svelte';
	import ManyProps from './ManyProps.svelte';

	const someUser = {
		name: "John",
		lastName: "Kowalsky"
	}
</script>

<h2>Relacja (from) parent (to) child</h2>
<h3 class="subtitle is-family-monospace">(part-b)/parent-to-child/+page.svelte</h3>
<div class="box">
	Przekazania danych z komponentu <em> Parent </em> do komponentu <em> Child </em> następuje za pomocą tzw. <code>props</code>.
	Jeśli komponent posiada zdefiniowany <code>identifier</code> o ustalonej nazwie wraz ze składnią <code>export let</code>, to oznacza to
	że inny komponent (osadzający go na widoku - czyli jego tzw. parent) będzie mógł przekazać dane do jego wnętrza.
	Składnia przypomina zapis atrybutów w HTML.
	<!-- @DOC: https://svelte.dev/docs/basic-markup#attributes-and-props -->
	<hr />
	<SampleChild someUser={someUser} />
	<hr />
	<SampleChild {someUser} />
	<hr />
	<SampleChild />
	<hr />
	<ManyProps title="h4 title" favNumber={99} />
</div>
