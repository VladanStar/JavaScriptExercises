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