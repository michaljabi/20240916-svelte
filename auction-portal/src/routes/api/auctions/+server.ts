import { getAllAuctions } from '$lib/server/auction.service.js';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(getAllAuctions());
}

export async function POST(event) {
	const { request } = event;
	try {
		const body = await request.json();
		// const auctions = await getAucitonsFormDb();
		return json({ recievedBody: body });
	} catch (e: unknown) {
		// console.log('Sth went wrong', e.message)
		if (e instanceof Error) {
			return json({ error: e.message }, { status: 400 });
		}
		return json({ error: 'Unknown error' }, { status: 500 });
	}

	/*
	// To jest poprawny kod, ale my musimy w POST zwrócic odpowiedz na return,
	// A body rozpakujemy dopiero w innym scope -> w srodku then callbacka.
	request.json().then((b) => {
		console.log('Body is', b);
		json({ recievedBody: b });
	});
	*/
}

/*
// Przykład promise:

	Promise.resolve(123)
		.then((value) => {
			console.log('Promise resolved', value); // Promise resolved 123
			return Promise.resolve(20);
		})
		.then((value) => {
			console.log('Promise resolved', value); // Promise resolved 20
			throw new Error('OOPS')
		})
		.catch((err) => {
			console.log('something went wrong...', err.message); // something went wrong... OOPS 
		});

*/

// magia async / await w JS:

/*
function computeNumber() {
	return 10;
}

async function computeNumberAsync() {
	return 10;
}

*/
