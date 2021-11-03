let allGood = false;

let fetchSomeData = new Promise((resolve, reject) => {
    if (!allGood) {
        reject("error fetching data!")
    } else {
        resolve({
            id: 1,
            message: 'nice work!'
        })
    }
})

// Consuming a Promise
fetchSomeData.then(fetchedData => {
    console.log('then:', fetchedData);
}).catch(err => {
    console.error('catch:', err);
})