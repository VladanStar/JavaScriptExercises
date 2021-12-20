const { async } = require("regenerator-runtime");

//--------1 . -------------
Object.prototype.value = 2;
Object.prototype.increaseValue = function () {
  this.value++;
};
const objA = {};
objA.increaseValue();

const objB = {};
Object.prototype.increaseValue();

const objC = { value: 10 };
objC.increaseValue();

console.log(objA.value, objB.value, objC.value);
//

//------2.-----

const later = (fn, ...args) =>fn(...args);
console.log(later(x=>x,3));
// 3

// ---------3.-----
const then = async ()=>{
    console.log(await Promise.resolve(3))
};
then()

//----------4 -------------
Promise.resolve(3)
.then(()=>Promise.resolve(4))
.then(x=>console.log(x));
//  4

//-----------5.-------
const personOne = {
  name:"Boban",
  age:30
};
let boban=personOne;
boban.age=28;
console.log("boban.age");
// boban,age

//-------6.-----------
console.log([1,2,3]
.map(x=> x ** 3)
.filter(x=> x>1)
.map(x=> x+1)
.reduce((a,b)=>a+b,0));
//37

//-------7.------------
