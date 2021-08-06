// // Promise : obavlja neki proces
// // -stanje : pending
// // - povoljnio stanje: resolve
// // - nepovoljno stanje: rejected

// // const obecanje1 = new Promise((resolve, reject) =>{
// // let suma =0;
// // for(let i =0; i<100000000;i++){
// //     suma +=i;
// // }
// // //?
// // resolve(suma);
// // });
// // obecanje1.then(rezultat =>{
// //     console.log("Stigao je rezultat obecanja: ", rezultat);
// // });
// // console.log("Stigli smo do ovog dela!");
// // //...

// const obecanje2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let broj = (Math.random() * 5).toFixed(0);
//     //
//     if (broj < 2) {
//       reject("Dobijen je nedozvoljen broj!");
//     }
//     resolve(broj);
//   }, 5000);
// });

// /*obecanje2.then(
//   (broj) => {

//     console.log("Vracen je obecani broj i on je: ",broj)
//   },
//   (greska) => {
//       console.log("Doslo je do greske");
//   }
// );*/
// obecanje2
// .then(broj=> console.log(broj))
// .catch(greska => console.log("Doslo je do greske"));

// obecanje2
// .then(broj =>console.log("Ovo je broj uvecan za 1", Number(broj)+1));

const obecanje1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Mapa je ucitana");
    },2000)
});
const obecanje2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Podaci o igracu su ucitani")
    },3500);
});

const obecanje3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Teksture zza igru su preuzete i ucitane")
    },760);
    setTimeout(()=>{
        reject("API je diskonentovan")
    },500)
});
 obecanje1.then(result =>console.log(result), greska => console.log("Doslo je do greske: " + greska));
 obecanje2.then(result =>console.log(result), greska => console.log("Doslo je do greske: " + greska));
 obecanje3.then(result =>console.log(result), greska => console.log("Doslo je do greske: " + greska));

// console.log("Pocinje igra");

Promise.all([obecanje1,obecanje2,obecanje3]).then(rezultati =>{
    console.log(rezultati);
    console.log("Igra pocinje");
});