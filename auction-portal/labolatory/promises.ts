// PROVIDER:
Promise.resolve(123)

              // CONSUMER:      
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


// Factory fn:
// PROVIDER:
function makeMePromise() {
    return Promise.resolve(200)
}

// CONSUMER 1:   
makeMePromise().then(() => {})
// CONSUMER 2:  
makeMePromise().then(() => {})
// CONSUMER 3:  
makeMePromise().then(() => {})
// CONSUMER 4:  
makeMePromise().then(() => {})
