import { getAllPosts } from '$lib/server/posts/posts.service';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return { advicePosts: await getAllPosts(), sample: 'test', luckyNumber: 234 };
}) satisfies PageServerLoad;
