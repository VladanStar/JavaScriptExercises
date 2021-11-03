let a = 'a';
const b = 'd';
try{
    a='b';
    b='c'
    var c= 'd'
}
catch {
    a ='c';
    let b ='d'
}
finally {
    a ='f'
    var d='g'
}
console.log(a,'b',c,d);

const person = {
    name: "Ljubica",
    age:26,
    address:{
        city:"Pripyat",
        street:"Vulutsaya Zhdanova",
        number:5
    }
}
const secondPerson = {...person};
secondPerson.address.number =7;
console.log(person.address.number,secondPerson.address.number);

const personOne = {
    name:"Boban",
    age:30
};
let boban = personOne;
boban.age = 28;
console.log("boban.age");

const later = (func)=>{
    return new Promise((resolve, reject)=>{
        if(later){
            resolve(fun(4));
        }
        else{
            reject(new Error("leter is not defined"))
        }
    })
}
later(x=> Promise.resolve(12+x))
.then(console.log)
.catch(console.log)

const arr =[1,2,3];
const mappedArr = arr.map(i=>i**2);
let data ={};
data[arr]=arr;
data[mappedArr]= mappedArr;
console.log(data.arr,data[mappedArr]);

const getItemData = ()=>({
name:"Desk"
});
console.log(getItemData().name);

const kobe = {
    points:21,
    score:()=>{
        this.points++;
        this.points++;
        this.points++
    }
};
kobe.score();
kobe.score();
kobe.score();
console.log(kobe.points);

console.log(typeof("x" instanceof Function));

class NumberBox {
    constructor(initialValue){
        this._value= initialValue;
    }
    get value(){
        return this._value;
    }
    set value(newValue){
        this._value = newValue;
    }
    get increment(){
        this.value++;
    }
}
const box = new NumberBox(2);
box.increment;
console.log(box.value);

const arr = [];
arr.x=3;
console.log(arr);

Promise.resolve(3)
.then(()=>{
    throw new Error();
})
.then(() => Promise.resolve(4))
.catch(()=>Promise.reject(5))
.then(x=>console.log(x))
.catch(err => console.log(err));

const then = async()=>3;
then().then(x=>console.log(x));

const data = {a:3, b:4};
Object.freeze(data);

const otherData = {b:5, c:6}
Object.seal(otherData);

const completeData = Object.assign({},data,otherData);
console.log(completeData.b);

[1,2,3]
.map(x=> x**3)
.filter(x=> x>1)
.map(x=>  x+1)
.reduce((a,b)=> a+b,0)

let a =0;
let b=0;
var c;

function count(a){
    a++;
    c=a;
    if(b){
        let c=0;
        c++;
    }
    b+=c;
}
count(a);
count(1)
count(2);
console.log(a,b,c);

const arr =[1,4,9];
const sqrtSum = arr.forEach(Math.sqrt).reduce((a,b)=> a+b,0);

const func = (x,y) =>{
    console.log(Date.now()- x**y)
}

Promise.resolve(3)
.then(()=> Promise.resolve(4))
.then(x=> console.log(x));

const then = async()=>{
    console.log(await Promise.resolve(3))
};
then();

function sum(a,b,c){
    let i =c;
    let res =0;
    for (let i =0; i<c;i++){
        res+=arguments[i];
    }
    res+=arguments[i];
    return res;
}
console.log(sum(1,2,"3"));


const later = (fn, ...args) => ()=>fn(...args);
console.log(later(x=> x,3))