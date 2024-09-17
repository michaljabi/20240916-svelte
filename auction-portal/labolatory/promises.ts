// PROVIDER:
Promise.resolve(123)

	// CONSUMER:
	.then((value) => {
		console.log('Promise resolved', value); // Promise resolved 123
		return Promise.resolve(20);
	})
	.then((value) => {
		console.log('Promise resolved', value); // Promise resolved 20
		throw new Error('OOPS');
	})
	.catch((err) => {
		console.log('something went wrong...', err.message); // something went wrong... OOPS
	});

// ---- podsumowanie asynchronicznosci

// LEVEL 1: Callback
button.addEventListener('click', () => {
	// CONSUMER....
});

// LEVEL 2: Promise

// 1 PROVIDER:
const numberPromise = Promise.resolve(200);

// 1 CONSUMER:
numberPromise.then(() => {}).catch(() => {});

// LEVEL 3: Stream

// 3rd level of async
// Streams / Observables (potrzebujesz biblioteki np. RxJS !!!)

// npm install rxjs
// 1 PROVIDER
const numbers = new Subject<number>();

// 1st CONSUMER:
number.subscribe((v) => {
	console.log(v) //1 ...19.....12......56
});

// 2st CONSUMER:
number.subscribe(() => {});

// 3st CONSUMER:
number.subscribe(() => {});

// Nth... CONSUMER:
number.subscribe(() => {});

// Emit value on stram
numbers.next(1);
numbers.next(19);
numbers.next(12);
numbers.next(56);
