import { superValidate, fail } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import type { RequestEvent } from '@sveltejs/kit';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	age: z.number()
});


export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	async login({ request }: RequestEvent) {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	}
};
