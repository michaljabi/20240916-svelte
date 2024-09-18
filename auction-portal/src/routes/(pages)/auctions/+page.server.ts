import { getAllAuctions } from '$lib/server/auction.service';
// import { getAllPosts } from '$lib/server/posts/posts.service';

const mySuperSicretAPIKEy = 'secret-API-key-007';

export async function load() {
	console.log(mySuperSicretAPIKEy);

	return {
		auctions: getAllAuctions()
		// posts: await getAllPosts()
	};
}
