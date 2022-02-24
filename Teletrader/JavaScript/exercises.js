

console.log(typeof typeof 1)
// 14.

function foo(x,y){
    x=x || 11;
    y=y || 31;
    console.log(x+y);
}
foo(0,42);

//53

//16.

console.log(1+ "2" + "2");
console.log(1+ + "2" + "2");
console.log(1+ - "1" + "2");
console.log( + 1+ "1" + "2");
console.log("A" -"B" + "2");
console.log("A"- "2" + 2);


// 122
// 32
// 02
// 112
// NaN2
// NaN

//6.

for(let j=0; j<5;j++){

}
console.log(j)

//ReferenceError: j is not defined

// 5.

const func1 = (a=2)=>{
    a=0 || 1;
    console.log(a);
    console.log(1 || 2);
    console.log(0 && 1);
    console.log(1  && 2);
}
func1();

// 1 1 0 2

//2.
function initArray(){
    var arr =[];
    for(var i=0;i<3;i++){
        arr.push(function(){
            return i
        })
    }
    return arr;
}
var arr = initArray();
const [first, second, third] =arr;
console.log(first());
console.log(second());
console.log(third());

// 3 3 3

//8.

function print(){
    console.log(arguments[0]);
}
print("Hello World")

//12.

(function(){
    var a = {};
    b={key:'b'};
    c= {key:'c'};
    let d;
    a[b]=123;
    a[c]=456
    console.log(a[b])
})();

//456

// 13.

console.log(typeof(null)) 

//object 

//2.

function fun1(x){
    x.firstName = "John";
}
let x = {
    firstName:"Peter",
    lastName:"Smith"
}
fun1(x);
console.log(`${x.firstName} ${x.lastName}`)

//John Smith

//3. 

for(var i=0; i<=5; i++){
    setTimeout(function test(){
        console.log(i);
    }, i*1000)
}

//nakon jedne sekune  6 6 6 6 6 

//4. 

function first(){
    var a =2;
  second();
    function second(){
        console.log(a)
    }
}
first();

//2

//5. 
var myArr = [1,2,3,4,5];
myArr.forEach(function(item){})
console.log(myArr)


//6.

for(var i= 0; i<5; i++){
    console.log(i);
}
console.log(i);

// 0 1 2 3 4 5

//7.

let A = {
    name:'Object A',
    update: function(){
        let updateObjectA = function(){
            this.name ='updated Object A';
        }
        updateObjectA()
    }
}
A.update();
console.log(A.name);
console.log(this.name);

// Object A
// undefined

//8.

(function(x=3){
    return (function(y=4){
        let a =10;
        console.log(x);
    })(2);
})(1);

//1

//9.

let x =4;
function func(x){
    x+=7;
    --x;
    function func2(x=2){
        x=x*4;
    }
}
func(x);
console.log(x);

//4


//13.

var x =21;
var test = function(){
    console.log(x);
    var x = 20;
}
test();

//undefined

//14.

var niz = [1, "test",true];
console.log(niz+12);

//1,test,true12

//15.

var niz =[1,2,3,4,5];
delete niz[2];

niz.forEach((item,i )=>{
    console.log(item + " " + i)
})

// 1 0
// 2 1
// 4 3
// 5 4

//16.

for(var i=1; i<=5;i++){
    setTimeout(function timer(){
        console.log(i);
    },i*1000)
}

// 6 6 6 6 6 

//17.

const a = [1,2,3];
const func1 = ()=>{
     a[10] =99;
     print();
}
function print(){
    console.log(a[6]);
}
func1();

//undefined

//19.

const func1 =(x,y=null) =>{
    xy(y)
}
function xy(){
    console.log(counter1);
    console.log(counter2);
    var counter1 = 1;
    var counter2 = 2;
}
func1();

//undefined
//undefined

//20.

 (function(){
    console.log("A");
    setTimeout(function(){console.log("B");},1000);
    setTimeout(function(){console.log("C")},0);
    console.log("D");

    
})();

//A D C B


//21.

Promise.then(function () {
    promises.then(function () {
        console.log("B")
    });
    console.log("A");
})
Promise.then(function () {
    console.log("C")
})

//22.
console.log(0 == null);
console.log("0" == '');
console.log(false == {});
console.log(0 == []);
console.log("" == null)

false
false
false
true
false

var vladan = 23;
console.log(vladan)
 var vladan = 34
console.log(vladan)

let vladan = 23;
console.log(vladan)
let vladan = 34; // ne moze
 vladan = 34 //moze
console.log(vladan)

const vladan = 23;
console.log(vladan)
//const vladan = 34; // ne moze
 vladan = 34 // ne moze
console.log(vladan)


// spread && rest operator
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
//Here's the spread operator used on an object:

const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};
//newObject  would then be

// {
//     name: 'Max',
//     age: 28
// }

const person = {
    name:"Vladan"
}
const secondPerson = person;
console.log(secondPerson);
console.log(person == secondPerson)
console.log(person === secondPerson)