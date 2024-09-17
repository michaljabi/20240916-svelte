<script context="module">
	console.log('I run only once in app lifetime...');
</script>

<script>
	console.log('I am instance !');
	let myNumber = 20;
</script>

<h1>Auction Portal {myNumber}</h1>

<div>
	{new Date()}
</div>

<div>
	{null}
</div>

<div>
	{undefined}
</div>

<div>
	{JSON.stringify({ name: 'Michał ' })}
</div>

<div>
	<!-- co by byo jakbym chcia renderowa / interpolowa obiekt ? -->
</div>

<!-- div[title=hello]>p.article#para -->
