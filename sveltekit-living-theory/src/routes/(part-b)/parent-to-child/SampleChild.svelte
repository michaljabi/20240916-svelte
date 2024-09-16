<script lang="ts">
	interface User {
    	name: string;
    	lastName: string;
	}

	export let someUser: User = { name: "Unknown", lastName: "" };

</script>

<section>
	<div>{someUser.name} {someUser.lastName}</div>
</section>