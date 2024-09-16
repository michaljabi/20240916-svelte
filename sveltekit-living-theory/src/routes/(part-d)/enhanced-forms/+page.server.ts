import type { RequestEvent } from '@sveltejs/kit';

// @DOC: https://kit.svelte.dev/docs/form-actions
export const actions = {
	async login({ request }: RequestEvent) {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		console.log('Server received:', { email, password });

		return { email, success: true };
	}
};
