import type { LayoutServerLoad } from './$types';

export const load = (async (ev) => {
	// projektuje sobie coś co server side odpowie czy user jest zalogowany
	// jeśli tak to WSZYSCY co mają ten layout,
	// Wszystkie pages,
	// A tak sie składa że WSZSTKIE GO MAJA bo to topmost +layout.server
	// będą miały isAuth w data.

	// przykład hipotetyczny
	let isAuth = false;
	const sessionId = ev.cookies.get('sessionId');
	if (sessionId) {
		isAuth = true;
	} else {
		//
		ev.cookies.set('sessionId', '678', { path: '' });
	}

	// console.log(ev.request.headers);

	return { isAuth };
}) satisfies LayoutServerLoad;
