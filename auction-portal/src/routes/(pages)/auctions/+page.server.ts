import { getAllAuctions } from '$lib/server/auction.service';
import { error } from '@sveltejs/kit';
// import { getAllPosts } from '$lib/server/posts/posts.service';

const mySuperSicretAPIKEy = 'secret-API-key-007';

function callDb() {
	throw new Error('DB not connected');
}

export async function load() {
	console.log(mySuperSicretAPIKEy);

	// Jeśli masz call po jakąś logikę która może rzuci błędem, możesz go tutaj obsłuży i wysłac do +page.svelte
	try {
		callDb();
	} catch (e: any) {
		// console.log(e);
		// error(500, e);
	}

	return {
		auctions: getAllAuctions()
		// posts: await getAllPosts()
	};
}
