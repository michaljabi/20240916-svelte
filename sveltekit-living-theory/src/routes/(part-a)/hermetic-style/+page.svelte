
<div class="title is-3">Hermetyczność styli</div>
<h3 class="subtitle is-family-monospace">(part-a)/hermetic-style/+page.svelte</h3>
<div>
	<h1>Style w tym</h1>
	<h2>komponencie</h2>
	<h3>Nie obowiązują w innych</h3>
</div>
<div>
	<blockquote>
		Pomimo tego, że zmieniamy style tagów: <code>h1</code>, <code>h2</code> oraz <code>h3</code>
	</blockquote>
</div>

<style>
    h1 {
        background-color: chocolate;
        color: white;
        padding-left: 20px;
    }
    h2 {
        background-color: cornflowerblue;
        font-family: Consolas, monospace;
        font-size: small;
        text-align: center;
        color: white;
        padding: 2rem;
    }
    h3 {
        text-align: right;
    }
</style>