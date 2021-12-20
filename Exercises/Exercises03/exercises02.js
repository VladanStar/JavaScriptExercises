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

class NumberBox {
  constructor(initialValue){
    this._value = initialValue;
  }
  get value(){
    return this._value;
  }
  set value(newValue){
    this._value = newValue
  }
  get increment(){
    this._value
  }
}
const box = new NumberBox(2);
box.increment;
console.log(box.value);
//2

//------- 8.-------
const kobe = {
  points:21,
  score:()=>{
    this.points++;
    this.points++;
    this.points++;
  }
}
kobe.score();
kobe.score();
kobe.score();
console.log(kobe.points);
//21


//--------- 9. -------------
const arr= [1,2,3];
const mappedArr = arr.map(i=>i **2);

let data ={};
data[arr]=arr;
data[mappedArr] =mappedArr;
console.log(data.arr, data[mappedArr]);
//undefined [ 1, 4, 9 ]


//---------10.----------
const basicData = {id:"333-222"};
const relatedId="wow";

let data={};
data[basicData] =basicData;
data[relatedId]=relatedId;
console.log(data);
//{ '[object Object]': { id: '333-222' }, wow: 'wow' }

//------------11.----------
const data = {a:3,b:4};
Object.freeze(data);
const otherData= {b:5,c:6};
Object.seal(otherData);

const completeData= Object.assign({}, data, otherData);
console.log(completeData.b);
//5

//--------- 12 ----------
function sum(a,b,c){
  let i =c;
  let res=0;
  for(let i=0; i<c;i++){
    res +=arguments[i];
  }
  res += arguments[i]
  return res;
}
console.log(sum(1,2,'3'));
//33undefined

//-----------13.--------
