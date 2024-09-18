import { getAllAuctions } from '$lib/server/auction.service';
import { getAllPosts } from '$lib/server/posts/posts.service';

export async function load() {
	return { auctions: getAllAuctions(), posts: await getAllPosts() };
}
