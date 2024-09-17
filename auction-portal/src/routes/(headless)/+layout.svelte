<script lang="ts">
	// temat na późniejszy refactor w celu uniknięcia tzw. memory leak.
	// jak poznamy tzw. lifecycle methods.
	let bgColor = 'lime';
	const colors = ['lightblue', 'blueviolet', 'lightcoral', 'lime'];
	let idx = 0;
	setInterval(() => {
		bgColor = colors[idx];
		idx++;
		if (idx > colors.length - 1) {
			idx = 0;
		}
	}, 3000);

	/*
        kbeab-case
        snake_case
        camelCase
        PascalCase
    */
</script>

<!-- <div class="d-flex justify-content-center align-items-center" style="height: 100vh"> -->
<!-- Dlatego bindowanie styli jest cool, bo można je dynamicznie zmienic w trakcie dzialania aplikacji -->
<!-- stan danych sie zmienia a style:height - jest reaktywne -->
<div
	class="d-flex justify-content-center align-items-center"
	style:height="100vh"
	style:background-color={bgColor}
>
	<slot />
</div>

<style>
	/* w css stosujemy kebab-case */
	div {
		/* background-color: blueviolet;*/
	}
</style>
