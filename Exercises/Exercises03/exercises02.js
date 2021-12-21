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
let a ='a';
const b= 'd';
try{
  a='b';
  b='c';
  var c= 'd'
}
catch {
  a='c';
  let b= 'd'
}
finally {
  a='f';
  var d='g'
}
console.log(a,'b',c,d)
// f b undefined g

//--------14.------------
const then = async()=>3;
then().then(x=>console.log(x));
//3

//---------15.---------------
const arr = [1,4,9];
const sqrtSum = arr.forEach(Math.sqrt).reduce((a,b)=>a+b,0)
//TypeError: Cannot read property 'reduce' of undefined
 
//--------------16.--------
const func= (x,y)=>{
  console.log(Date.now()=x**y);
}


//----------17.--------------
Promise.resolve(3)
.then(()=>{
  throw new Error();
})
.then(()=>Promise.resolve(4))
.catch(()=>Promise.reject(5))
.then(x=>console.log(x))
.catch(err=>console.log(err));
//5

//----------18.------------
const arr = [1,4,0];
const sqrtSum = arr.forEach(Math.sqrt).reduce((a,b)=>a+b,0)
//TypeError: Cannot read property 'reduce' of undefined

//-----------19.----------------
console.log(typeof('x' instanceof Function))
//boolean

//-----------20.----------
const func=(x,y)=>{
  console.log(Date.now()-x**y);
}

//----------21.------------
Promise.resolve(3)
.then(()=>{
  throw new Error();
})
.then(()=>Promise.resolve(4))
.catch(()=>Promise.reject(5))
.then(x=>console.log(x))
.catch(err=>console.log(err))
//5

//----------22.------------
const a='0';
const b=2.02362;
const c='5.82';
const d ='false';
const e=true;
const f=null;
const g=NaN;
//
console.log(b.toFixed(2))// true
console.log(parseInt(c,10))// true
console.log(f=='null')
console.log(g==parseFloat("true"))
console.log(!!a===false);
console.log(`${e}`===true)
console.log(Boolean(d)===false)

//----------23.------------
const person = {
  name:"Ljubica",
  age:26,
  address: {
    city:"Pripyat",
    street:"Vulutsaya Zhdanova",
    number:5
  }
};
const secondPerson = {...person};
secondPerson.address.number=7;
console.log(person.address.number, secondPerson.address.number);