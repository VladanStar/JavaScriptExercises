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

let x = "van"
const f1 = function () {
  let x = 'unutar f1';
}
f1();
console.log(x);

const f2 = function () {
  x = 'unutar f2';
  console.log(x);
}
f2();
console.log(x);

let obj = {
    ime: "Miki",
    length: 4
};

console.log(obj.length);
console.log(obj.ime);

console.log(obj.duzina);

console.log(obj["ime"]);
console.log(obj[ String.fromCharCode(105) + "me"]);

console.log(null.length);
console.log(null.duzina);
console.log(undefined.length);
console.log(undefined.duzina);

let nizBrojeva = [1, 2, 3, "mika", "zika"];

function prikaziSvaki(niz) {
    for (let i = 0; i < niz.length; i++)
        console.log(niz[i]);
}

prikaziSvaki(nizBrojeva);

let nizBrojeva = [1, 2, 3, 4, "mika", "zika"];

function zaSvaki(niz, akcija) {
  for (let x of niz) akcija(x);
}

prikazNaKonzolu = function (x) {
  console.log(x);
};
zaSvaki(nizBrojeva, prikazNaKonzolu);
console.log("---");

prikazNaKonzolu2 = (x) => console.log(x);
zaSvaki(nizBrojeva, prikazNaKonzolu2);
console.log("---");

zaSvaki(nizBrojeva, function (x) {
  console.log(x);
});
console.log("---");

zaSvaki(nizBrojeva, (x) => console.log(x));

function filter(array, test) {
  let rez = [];
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) rez.push(array[i]);
  }
  return rez;
}

var opis = `[{"name":"Emma de Milliano","sex":"f",
"born":1876,"died":1956,
"father":"Petrus de Milliano","
mother":"Sophia van Damme"},
{"name": "Maria de Rycke", "sex": "f", 
"born": 1683, "died": 1724, 
"father": "Frederik de Rycke", "
mother": "Laurentia van Vlaenderen"},
{"name": "Jan van Brussel", "sex": "m", 
"born": 1714, "died": 1748, 
"father": "Jacobus van Brussel", 
"mother": "Joanna van Rooten"},
{"name": "Philibert Haverbeke", "sex": "m", 
"born": 1907, "died": 1997, 
"father": "Emile Haverbeke", 
"mother": "Emma de Milliano"}, 
{"name": "Jan Frans van Brussel", "sex": "m", 
"born": 1761, "died": 1833, 
"father": "Jacobus Bernardus van Brussel", 
"mother":null}, 
{"name": "Pauwels van Haverbeke", "sex": "m", 
"born": 1535, "died": 1582, 
"father": "N. van Haverbeke", 
"mother":null}, 
{"name": "Clara Aernoudts", "sex": "f", 
"born": 1918, "died": 2012, 
"father": "Henry Aernoudts", 
"mother": "Sidonie Coene"}, 
{"name": "Emile Haverbeke", "sex": "m", 
"born": 1877, "died": 1968, 
"father": "Carolus Haverbeke", 
"mother": "Maria Sturm"}, 
{"name": "Lieven de Causmaecker", "sex": "m", 
"born": 1696, "died": 1724, 
"father": "Carel de Causmaecker", 
"mother": "Joanna Claes"}, 
{"name": "Pieter Haverbeke", "sex": "m", 
"born": 1602, "died": 1642, 
"father": "Lieven van Haverbeke", 
"mother":null}, 
{"name": "Livina Haverbeke", "sex": "f", 
"born": 1692, "died": 1743, 
"father": "Daniel Haverbeke", 
"mother": "Joanna de Pape"}, 
{"name": "Pieter Bernard Haverbeke", "sex": "m",
 "born": 1695, "died": 1762, 
 "father": "Willem Haverbeke", 
 "mother": "Petronella Wauters"}, 
{"name": "Lieven van Haverbeke", "sex": "m", 
"born": 1570, "died": 1636, 
"father": "Pauwels van Haverbeke", 
"mother": "Lievijne Jans"}, 
{"name": "Joanna de Causmaecker", "sex": "f", 
"born": 1762, "died": 1807, 
"father": "Bernardus de Causmaecker", 
"mother":null}, 
{"name": "Willem Haverbeke", "sex": "m", 
"born": 1668, "died": 1731, 
"father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}, 
{"name": "Pieter Antone Haverbeke", "sex": "m", 
"born": 1753, "died": 1798, 
"father": "Jan Francies Haverbeke", 
"mother": "Petronella de Decker"}, 
{"name": "Maria van Brussel", "sex": "f", 
"born": 1801, "died": 1834, 
"father": "Jan Frans van Brussel", 
"mother": "Joanna de Causmaecker"}, 
{"name": "Angela Haverbeke", "sex": "f", 
"born": 1728, "died": 1734, 
"father": "Pieter Bernard Haverbeke", 
"mother": "Livina de Vrieze"}, 
{"name": "Elisabeth Haverbeke", "sex": "f", 
"born": 1711, "died": 1754, 
"father": "Jan Haverbeke", 
"mother": "Maria de Rycke"}, 
{"name": "Lievijne Jans", "sex": "f", 
"born": 1542, "died": 1582, 
"father":null, "mother":null}, 
{"name": "Bernardus de Causmaecker", "sex": "m", 
"born": 1721, "died": 1789, 
"father": "Lieven de Causmaecker", 
"mother": "Livina Haverbeke"}, 
{"name": "Jacoba Lammens", "sex": "f", 
"born": 1699, "died": 1740, 
"father": "Lieven Lammens", 
"mother": "Livina de Vrieze"}, 
{"name": "Pieter de Decker", "sex": "m", 
"born": 1705, "died": 1780, 
"father": "Joos de Decker", 
"mother": "Petronella van de Steene"}, 
{"name": "Joanna de Pape", "sex": "f", 
"born": 1654, "died": 1723, 
"father": "Vincent de Pape", 
"mother": "Petronella Wauters"}, 
{"name": "Daniel Haverbeke", "sex": "m", 
"born": 1652, "died": 1723, 
"father": "Lieven Haverbeke", 
"mother": "Elisabeth Hercke"}, 
{\"name\": \"Lieven Haverbeke\", \"sex\": \"m\", 
\"born\": 1631, \"died\": 1676, 
\"father\": \"Pieter Haverbeke\", 
\"mother\": \"Anna van Hecke\"},
{"name":"Carolus Haverbeke","sex":"m",
"born":1832,"died":1905,
"father":"Carel Haverbeke",
"mother":"Maria van Brussel"}]`;

let family = JSON.parse(opis);

// prikaz ljudi rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(
  filter(family, function (person) {
    return person.born > 1900 && person.born < 1925;
  })
);

// prikaz ljudi rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(
  filter(family, (person) => person.born > 1900 && person.born < 1925)
);

// prikaz rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(family.filter((x) => x.born > 1900 && x.born < 1925));

// prikaz muskaraca rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(
  filter(family, function (person) {
    return person.sex == "m" && person.born > 1900 && person.born < 1925;
  })
);

// prikaz muskaraca rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(
  family.filter(
    (person) => person.sex == "m" && person.born > 1900 && person.born < 1925
  )
);

// prikaz muskaraca rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(
  family
    .filter((person) => person.sex == "m")
    .filter(person.born > 1900 && person.born < 1925)
);


let niz = [2,4,3,1,-5,12,7];
// console.log(niz);

console.log(niz.reduce((a,b)=>a+b,0));

console.log(niz.filter((a) => a>=0).reduce((a,b) =>a+b,0 ));


console.log(niz.reduce((a,b) =>(a>b)?a:b));
console.log(niz.reduce((a,b) =>(a<b)?a:b));

function prikaziNisku(niska) {
  return new Promise((razresi, odbij) => {
      setTimeout(
          () => {
              console.log(niska);
              razresi();
          },
          Math.floor(Math.random() * 50) + 1
      );
  });
}

function prikaziSve() {
  prikaziNisku("A");
  prikaziNisku("Б");
  prikaziNisku("В");
  prikaziNisku("Г");
  prikaziNisku("Д");
}

prikaziSve();

function prikaziNisku(niska) {
  return new Promise((razresi, odbij) => {
      setTimeout(
          () => {
              console.log(niska);
              razresi();
          },
          Math.floor(Math.random() * 50) + 1
      );
  });
}

async function prikaziDvaRedom() {
  await prikaziNisku("А");
  await prikaziNisku("Б");
  prikaziNisku("В");
  prikaziNisku("Г");
  prikaziNisku("Д");
}

prikaziDvaRedom();


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