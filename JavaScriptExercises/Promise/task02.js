const obecenje2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let broj = (Math.random() * 5).toFixed(0);

    if (broj <= 2) {
      reject("Dobijen je nedozvoljeni broj");
    }
    resolve(broj);
  }, 5000);
});

obecenje2.then(
    broj => {
    console.log("Vracen je odogvarajuci broj: ", broj)
},
    greska => {
    console.log("doslo je do greske: ", greska)
});
