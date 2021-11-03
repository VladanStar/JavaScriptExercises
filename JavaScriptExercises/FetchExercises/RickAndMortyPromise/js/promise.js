export const promiseData = (url, onSuccess) => {
    promise(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            onSuccess(data)
        })
        .catch((error) => {
            console.log(error)
            alert("No more pages, you have to go back!")
        })
}


const url = "https://rickandmortyapi.com/api";

function makeRequest (onSuccess, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(onSuccess, url);
    xhr.onload =  function() {
            if (xhr.status === 200) {
                resolve(promiseData(url,onSuccess));
            } else {
                reject(new Error(xhr.statusText));
            }
    };
    xhr.onerror = () => reject(new Error("Network error"));
    xhr.send();
  });
}

 
// II deo - izvan asinhrone funkcije:
makeRequest('GET', 'http://example.com')
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error('Uhh imamo problem!', err);
});
