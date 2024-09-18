import type { PostDto } from '$lib/model/PostDto';

export async function getAllPosts(): Promise<PostDto[]> {
	// const posts: PostDto[] = [];
	// fetch('https://jsonplaceholder.typicode.com/posts/')
	//   .then(response => response.json())
	//   .then(json => console.log(json))
	// Zamiast tego url daje API swoje zapytanie do Java Server.....
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
	const posts: PostDto[] = await response.json();
	return posts;
}
