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