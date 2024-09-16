<script lang="ts">

	const largeStyle = 'font-size: 20px; margin: auto 10px;';
	// Dowolny identifier zadeklarowany ze słowem kluczowym `let` jest "reaktywny"
	// @DOC: https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive
	let someNumber = 1;

	// oznacza to, że jeśli zmieni się w czasie, będziemy te zmiany mogli automatycznie obserwować na widoku:
	setInterval(() => {
		someNumber++;
	}, 2000)

	// Lokalny stan wyliczony na podstawie już istniejącego:
	// @DOC: https://svelte.dev/docs/svelte-components#script-3-$-marks-a-statement-as-reactive
	$: someNumberPowered = someNumber * someNumber;

	// Okazuje się, że to poprawny syntax w JS:
	// @DOC: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label

	// Możemy również wykorzystać ten zapis do wywoływania efektów ubocznych (tzw. side effects)
	$: {
		console.log(`Wykonam się zawsze jak zaktualizuje się ${someNumber}`);
	}
</script>

<h2>Stan lokalny komponentu</h2>
<h3 class="subtitle is-family-monospace">(part-a)/local-state/+page.svelte</h3>
<div class="box">
	Wartość stanu: <code style={largeStyle}>{someNumber}</code> zmienia się w czasie...
</div>

<div class="box">
	Na podstawie stanu obliczam inną wartość: <code style={largeStyle}>{someNumberPowered}</code> i to też aktualizuje się w czasie...
</div>
