const obecenje2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let broj = (Math.random() * 5).toFixed(0);

    if (broj <= 2) {
      reject("Dobijen je nedozvoljeni broj");
    }
    resolve(broj);
  }, 5000);
});

obecenje2
  .then((broj) => console.log("Dobijen je trazeni broj ", broj))

    .catch((greska) => console.log("Doslo je do greske ", greska));
  
obecenje2.then((broj) => console.log("Dobijeni broj uvecan za 1 je:", Number(broj) + 1));
