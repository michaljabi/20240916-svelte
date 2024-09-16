<script lang="ts">
	import { faSearch, faAmbulance } from '@fortawesome/free-solid-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<h2>Ikony z podłączonej biblioteki</h2>
<h3 class="subtitle is-family-monospace">(part-e)/icons/+page.svelte</h3>
<div class="box">
	Tutaj możemy zobaczyć jak dołączyć przykładową zewnętrzną bibliotekę z ikonami. Biblioteka ta,
	zawiera jeden pomocniczy komponent dedykowany pod wykorzystanie w Svelte.
	<code>FontAwesomeIcon</code> pozwala nam na renderowanie wybranej z <code>svg</code> ikony.
</div>
<div class="box">
	Przykład ikony <code>faSearch</code>: <FontAwesomeIcon class="ml-3" icon={faSearch} />
	<hr />
	Przykład ikony <code>faAmbulance</code>: <FontAwesomeIcon class="ml-3" icon={faAmbulance} />
</div>