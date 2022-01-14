//1.
var a = 123;
function f() {
  console.log(a);
  var a = 1;
  console.log(a);
}
f();
//2.
var global = 1;
function f() {
  var local = 2;
  global++;
  return global;
}
console.log(f());
//3.
function f() {
  local = 2;
  return local * 2;
}
f();
console.log(f());

function a() {
  console.log("A!");
  return function ()
  {
    console.log("B!");
  }
}
var newFunc = a(); // izvrsava funkciju a()
newFunc();// izvrsava vracenu funkciju
a()(); //izvrsava obe funkcije

console.log(parseInt('1e1'));
var outher = function (param) {
  var inner = function (theinput) {
    return theinput * 2;
  };
  return "The result is: " + inner(param)
};
console.log(outher(2));


var obj1= {} 
obj1.name= "Alice";
obj1["surname"] = "Cooper";
console.log(obj1)

var array =[3,6,9,12,15];
var filterNew = array.filter(v=>v%3===0);
console.log(filterNew);
var sumNew = array.reduce((total, amount)=> total+amount);
console.log(sumNew)

function Hero(name){
  this.name = name;
}
var h = Hero('Vladan');
console.log(name);
console.log(window.name)


var a = 1;
console.log(this.a);

NaN = 42;
console.log(NaN);


// zapis vrednosti true
console.log(true);

// zapis vrednosti false
console.log(false);

// poređenje brojeva
console.log(33 > 5.5);

// poređenje brojeva
console.log(33 < 5.5);

// poređenje niski
console.log("Ananas" > 'Banana');

// poređenje niski
console.log('33' < '5.5');

// poređenje niski
console.log('auto' < 'automobil');

// poređenje niski
console.log('auto' < 'Automobil');

// poređenje specijalnih brojeva
console.log(-Infinity < -100e40);

// poređenje specijalnih brojeva
console.log(-Infinity == -Infinity);

// poređenje specijalnih brojeva
console.log(NaN == NaN);

// operator i
console.log(true && false);

// operator i
console.log(true && true);

// operator ili
console.log(false || false);

// operator ili
console.log(false || true);

// prioritet operacija
console.log(1 + 1 == 2 && 10 * 10 > 50);

// operator uslovnog izraza
console.log(true ? "prvi" : "drugi");

// operator uslovnog izraza
console.log(false ? 1 : "drugi");

let buka = function() {
  console.log(" Tras !");
};

buka();
buka();
// broj argumenata moze biti veci
// od broja parametara funkcije
buka("Petar");

const stepen = function(osnova, izlozilac) {
  let ret = 1;
  for (let i = 0; i < izlozilac; i++)
      ret *= osnova;
  return ret;
};

console.log(stepen(3, 4));
console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen());

let stepen = function (osnova, izlozilac) {
  if (osnova == undefined)
      osnova = 10;
  if (izlozilac == undefined)
      izlozilac = 2;
  let ret = 1;
  for (let i = 0; i < izlozilac; i++)
      ret *= osnova;
  return ret;
};

console.log(stepen(3, 4));
console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen());

const stepen = function (osnova = 10, izlozilac = 2) {
  let ret = 1;
  for (let i = 0; i < izlozilac; i++)
      ret *= osnova;
  return ret;
};

console.log(stepen(3, 4));
console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen());

let test = "globalna vrednost";
function testirajOpsegDefinisanosti() {
  test = "lokalna vrednost";
  console.log(test);
}
console.log(test);
testirajOpsegDefinisanosti();
console.log(test);

function kokoska() {
  return jaje();
};

function jaje() {
  return kokoska();
}
console.log("Starija je ", kokoska());

function paran(broj) {
  if (broj == 0)
      return true;
  if(broj == 1)
      return false;
  return neparan(broj - 1);
}

function neparan(broj) {
  if (broj == 0)
      return false;
  if (broj == 1)
      return true;
  return paran(broj-1);
}

console.log(paran(6));
console.log(neparan(50));
console.log(paran(75));
console.log(neparan(75));

function omotajVrednost(n) {
  let lokalnaPromenljiva = n;
  return () => lokalnaPromenljiva;
}

let omotacZa1 = omotajVrednost(1);
let omotacZa2 = omotajVrednost(2);

console.log(omotacZa1());
console.log(omotacZa2());

function uvecajBrojac() {
  let brojac = 0;
  return function () {
      return brojac++;
  };
}

const izbroj = uvecajBrojac();

console.log(izbroj());
console.log(izbroj());
console.log(izbroj());

let uvecaj = () => {
  let brojac = 0;
  return () => brojac++;
}

const izbroj2 = uvecaj();

console.log(izbroj2());
console.log(izbroj2());
console.log(izbroj2());

let mojeIme = 'Dragoljub';
const pozdrav = (ime) =>
    () => console.log('Zdravo, ' + ime + '!');

let pozdravSaImenom = pozdrav(mojeIme);
mojeIme = 'Marko';

console.log(x);
let x = 5;

console.log(x);
var x = 5;

console.log(x);
x = 5;

console.log("buducnost vraće:", buducnost());

function buducnost() {
    return "Još uvek ne postoje leteći automobili";
};



var test = function (){
  console.log("prikaz iz funkcijskog izraza");
}

function test(){
  console.log("prikaz iz deklarisane funkcije");
}

test(); 

// prvo se diže cela funkcija
function test(){
  console.log("iz deklarisane funkcije");
}  
 // zatim se diže deklaracija promenjive
// promenljiva je "pregazila" deklarisanu funkciju
var test;
// dodela funkcijskog izraza promenljivoj
// je ostala na istom mestu u kodu
var test = function (){
  console.log("iz function expression");
}
// poziv funkcije je osto na istom mestu
test();

var a = [1,2,3];
var b =a;
console.log(a==b)
console.log(a===b)

test();  


NaN = 42;
console.log(NaN)

// operatori i operandi
console.log(100 + 4 * 11);

// zagrade utiču na prioritet
console.log((100 + 4) * 11);

// operatori istog prioriteta se izvršavaju sdesna ulevo
console.log(1 - 2 + 1);

// operator za računanje ostatka pri deljenju
console.log(314 % 100);

// specijalna vrednost +beskonačno
console.log(Infinity);

// dobijanje specijalne vrednosti +beskonačno
console.log(47 / 0);

// specijalna vrednost -beskonačno
console.log(-Infinity);

// dobijanje specijalne vrednosti -beskonačno
console.log((47 - 50) / (500 - 500));

// specijalna vrednost NaN
console.log(NaN);

// dobijanje specijalne vrednosti NaN
console.log((47 / 47 - 1) / (500 - 500));

// dobijanje specijalne vrednosti NaN
console.log((47 / 0) - (500 / 0));

// dobijanje specijalne vrednosti NaN
console.log((47 / 0) / (500 / 0));

/* automatska konveryija tipova pri izvršenju aritmetičkih operacija */
console.log(8 * null);
// prikazaće 0

console.log("5" - 1);
// prikazaće 4

console.log("5" + 1);
// prikazaće 51

console.log("pet" * 2);
// prikazaće NaN

/* automatska konverzija tipova pri izvršenju operacija poređenja */
console.log(false == 0);
// prikazaće true

/* poređenje jednakosti za vrednosti null i/ili undefined se
   realizuje na pomalo specifičan način  */
console.log(null == undefined);
// prikazaće true

console.log(null == 0);
// prikazaće false

/* logički operatori se "skraćeno" izvršavaju */
console.log(undefined || "Karlo");
// prikazaće Karlo

console.log("Karlo" || "Korisnik");
// prikazaće Karlo

// pozivaju se funkcije Math.random i console.log
let x = 6 * Math.random()-3
console.log(x);
x = 6 * Math.random()-3
console.log(x);
x = 6 * Math.random()-3
console.log(x);
x = 6 * Math.random()-3
console.log(x);

function bezArgumenata() {}

// Ovo je OK
bezArgumenata(1, 2, 3);

function triArgumenta(a, b, c) {
  console.log("---\n" + a);
  console.log(b);
  console.log(c);
}

// I ovo je OK
triArgumenta(1, 2, "tri");
triArgumenta(1, 2);
triArgumenta(1);
triArgumenta();

function triArgumentaPodrazumenvano(a = "a", b = "b", c = null) {
  console.log("---\n" + a);
  console.log(b);
  console.log(c);
}

triArgumentaPodrazumenvano(1, 2, "tri");
triArgumentaPodrazumenvano(1, 2);
triArgumentaPodrazumenvano(1);
triArgumentaPodrazumenvano();

let test = "globalna vrednost";
function testirajOpsegDefinisanosti() {
  test = "lokalna vrednost";
  console.log(test);
}
console.log(test);
testirajOpsegDefinisanosti();
console.log(test);
//globalna vrednost
//lokalna vrednost
//lokalna vrednost

function uvecajBrojac() {
  let brojac = 0;
  return function () {
    return brojac++;
  };
}

const izbroj = uvecajBrojac();

console.log(izbroj());
console.log(izbroj());
console.log(izbroj());

let uvecaj = () => {
  let brojac = 0;
  return () => brojac++;
};

const izbroj2 = uvecaj();

console.log(izbroj2());
console.log(izbroj2());
console.log(izbroj2());

console.log(x);
let x = 5;

console.log(x);
var x = 5;

console.log(x);
x = 5;

console.log("buducnost vraće:", buducnost());

function buducnost() {
    return "Još uvek ne postoje leteći automobili";
};

let  object1 = {
    value: 10
};

let object2 = object1;

let object3 = {
    value: 10
};

console.log(object1 == object2);
// Prikazuje true

console.log(object1 == object3);
// Prikazuje false

object1.value = 15;
console.log(object2.value);
// Prikazuje 15

object2.value = 17;
console.log(object1.value);
// Prikazuje 17

console.log(object3.value);
// Prikazuje 10

let obj = {
  ime: "Miki",
  length: 4,
};

console.log(obj.length);
console.log(obj.ime);

console.log(obj.duzina);

console.log(obj["ime"]);
console.log(obj[String.fromCharCode(105) + "me"]);

console.log(null.length);
console.log(null.duzina);
console.log(undefined.length);
console.log(undefined.duzina);

let nizBrojeva = [2, 3, 5, 7, 11];

console.log(nizBrojeva[1]);
console.log(nizBrojeva[1 - 1]);

console.log(nizBrojeva[17 - 1]);
console.log(nizBrojeva[-1]);

let niz = [1, 3, "Mika", "pera", false];

console.log("---");
for (let i = 0; i < niz.length; i++) console.log(niz[i]);

console.log("---");
for (let i in niz) console.log(niz[i]);

console.log("---");
for (let x of niz) console.log(x);

var podsetnik = [];

function podsetiMe(zadatak) {
  podsetnik.push(zadatak);
}

function staJeSledece() {
  return podsetnik.shift();
}

function hitnoMePodseti(zadatak) {
  podsetnik.unshift(zadatak);
}

podsetiMe("priprema slajdova za predavanja");
podsetiMe("priprema zadataka");
hitnoMePodseti("odgovoriti na pisma");
podsetiMe("kupovina knjige");

while (podsetnik.length != 0) {
  console.log(staJeSledece());
}

let zecPrototip = {
    tip: "непознат",

    boja: "непознатa",

    predstaviSe: function () {
        console.log("Зец: " + this.tip + " боја: " + this.boja + "." + "'\n");
    },

    govori: function (tekst) {
        console.log("Овај зец " + this.tip + " боје " + this.boja
            + " каже '" + tekst + "'" + "\n");
    }
};

let zec = Object.create(zecPrototip);
zec.predstaviSe();
zec.govori("Ко сам ја?");

let zecIzFikcijePrototip = Object.create(zecPrototip);

zecIzFikcijePrototip.tip = "непознат";
zecIzFikcijePrototip.boja = "непозната";

zecIzFikcijePrototip.predstaviSe = function () {
    console.log("Зец: " + this.tip + ", боја: " + this.boja + ", име: " + this.ime + "\n"
        + "креатор: " + this.kreator.ime + " " + this.kreator.prezime + "\n"
        + "дело: " + this.delo + "\n"
        + "узречица: '" + this.uzrecica + "'\n");
}

let duskoDugousko = Object.create(zecIzFikcijePrototip);
duskoDugousko.tip = "паметан";
duskoDugousko.boja = "сива";
duskoDugousko.ime = "Душко Дугоушко";
duskoDugousko.kreator = { "ime": "Tex", "prezime": "Avery" };
duskoDugousko.delo = "A Wild Hare";
duskoDugousko.uzrecica = "Шефе, који ти је враг?";
duskoDugousko.predstaviSe();
let plaviZec = Object.create(zecIzFikcijePrototip);
plaviZec.tip = "веома паметан";
plaviZec.boja = "плава";
plaviZec.ime =  "Плави зец";
plaviZec.kreator = { "ime": "Душко", "prezime": "Радовић" };
plaviZec.delo = "Плави зец";
plaviZec.uzrecica = "Плав";
plaviZec.uzrecica = "Плави, зец, чудни зец, једини на свету.";
plaviZec.predstaviSe();




const vrednost = function () {
  // ovo je privatan podatak
  let podatakKojiSeCuva = '';

  // funkcija za postavljanje vrednosti
  function setPodatak(noviPodatak) {
      podatakKojiSeCuva = noviPodatak;
  }

  // funkcija za ocitavanje vrednosti
  function getPodatak() {
      return podatakKojiSeCuva;
  }

  // publikovanje "javnih "funkcija
  return {
      setPodatak: setPodatak,
      getPodatak: getPodatak
  };
}();


const Dogadjaj = require('events');

class EmiterDogadjaja extends Dogadjaj {}

const emiter = new EmiterDogadjaja();

emiter.on('dogadjaj', function(a, b) {
  console.log(`--- rukovalac dogadjajem je funkcija ---`);
  console.log(a, b, this, this === emiter);
});

emiter.on('dogadjaj', (a, b) =>{
  console.log(`--- rukovalac dogadjajem je lambda-izraz ---`);
  console.log(a, b, this, this === emiter);
});

emiter.emit('dogadjaj', 'a', 6);
emiter.emit('dogadjaj', 'mika');
emiter.emit('dogadjaj');

let povratniPoziv = () => {
  console.log(`Ziv sam!`)
}

console.log(`Pokrenuto...`)
setTimeout(povratniPoziv, 2000)
console.log(`Zavrsava...`);

function prikaziNisku(niska){
  setTimeout(
    () => {
      console.log(niska)
    },
    Math.floor(Math.random() * 50) + 1
  );
}

function prikaziSve(){
  prikaziNisku("А");
  prikaziNisku("Б");
  prikaziNisku("В");
  prikaziNisku("Г");
  prikaziNisku("Д");
}

prikaziSve();

function prikaziNisku(niska, povratniPoziv){
  setTimeout(
    () => {
      console.log(niska);
      povratniPoziv();
    },
    Math.floor(Math.random() * 50) + 1
  );
}

function prikaziSve(){
  prikaziNisku("А", ()=>{});
  prikaziNisku("Б", ()=>{});
  prikaziNisku("В", ()=>{prikaziNisku("Г", ()=>{})});
  prikaziNisku("Д", ()=>{});
}

prikaziSve();

let x = false;
let y= 3+x;
console.log(y);
let z = 'Miki ' + x;
console.log(z)

x = true;
y = 3 + x;
console.log(y);
z = 'Miki' + x;
console.log(z)

x = 0;
y = x ? 'nije nula' : 'nula';
console.log(y)

console.log(8 * null);
console.log('5' - 1);

console.log('5' + 1)
console.log('pet' * 2);

console.log(false == 0);
console.log(null == undefined)
console.log(null == 0);


console.log(undefined || 'Karlo');

console.log('Karlo' || 'Korisnik');

console.log(2 != 1 && 4 !=3 && 0== 4 && 2 !=3)