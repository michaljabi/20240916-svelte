<script lang="ts">
	import BasePage from '$lib/components/BasePage.svelte';

	export let data;
</script>

<BasePage title="Podpowiadamy">
	<section class="row">
		<div class="col-12">
			<div class="alert alert-warning">
				Serwer mówi że szczęśliwy numerek to: <code>{data.luckyNumber}</code>
			</div>
		</div>
		<div class="col-12 col-sm-4">
			<ul class="list-group">
				{#each data.advicePosts as post}
					<li class="list-group-item">
						<a href={'advices/' + post.id}>{post.title}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="col-12 col-sm-8">Tutaj treśc wybranego posta...</div>
	</section>
</BasePage>
