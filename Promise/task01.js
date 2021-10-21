const obecanje1 = new Promise((resolve, reject) => {
    let suma = 0;
    for (let i = 0; i < 10000000; i++){
        suma += i;
    }
    resolve(suma)
})

obecanje1.then(rezultat => {
    console.log("Stigao je rezultat", rezultat);
})
console.log("Stigli smo do ovog dela programa");
    

