const o1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Mapa je uspesno ucitana");
    }, 2000)
});
const o2 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("Podaci o igracu su uspesno ucitani");
    }, 750);
});
const o3 = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("Teksture za igru su uspesno preuzete i ucitane");
  }, 3500);
});
o1.then(rezultat => console.log(rezultat), greska => console.log("Doslo je do greske", greska));
o2.then(
  (rezultat) => console.log(rezultat),
  (greska) => console.log("Doslo je do greske", greska)
);
o3.then(
  (rezultat) => console.log(rezultat),
  (greska) => console.log("Doslo je do greske", greska)
);
Promise.all([o1, o2, o3]).then(rezultati=> {
    //console.log(rezultati);
    console.log("Igra pocinje")
},
greska => {
    console.log("Doslo je do neke grekse")
})