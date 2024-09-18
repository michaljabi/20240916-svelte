// To się nada w momencie, gdy np.
// Request do back-endu jest JAWNY
// nie wymaga API-KEY

// albo NIE korzystamy z danych z DB / serwera.

// Czyli to nie zadziała bo mamy import z $lib/server !
// import { getAllAuctions } from "$lib/server/auction.service";

// To NIE JEST dobry pomysł: ... te dane i kod idą do CLIENT SIDE!!!
const mySuperSicretAPIKEy = '?REALLy-pages-API-key-8881';

export async function load() {
	console.log(mySuperSicretAPIKEy);
	return {
		mySuperSicretAPIKEy,
		auctions: [] //getAllAuctions()
	};
}
