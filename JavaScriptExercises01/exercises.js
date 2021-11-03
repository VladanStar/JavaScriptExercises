function f(x){
    x+=1;
}
function g(x){
    x.value*=5;
}
var a;
var b=1;
var c= {value:2};
var d= c;
f(a);
f(b);
g(d);
console.log(a,b,c.value, d.value)
//-------------------------------

function copyContents(from,to){
    for(var i=0; i<from.childNodes.length;i++){
        to.appendChild(from.childNodes[i]);
    }
}
var referenceBox = document.createElement('div');
var link = document.createElement('a');
link.href = "https://www.example.com/";
link.textContent = "A link";

referenceBox.appendChild(newBox);
for(var i=0; i<5; i++){
    copyContents(referenceBox, newBox);
    document.body.appendChild(newBox);
}
//-------------------------------------------

var Person = function(firstName, lastName, dateOfBirts,measurame){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirts = dateOfBirts;
    this.measurame = measurame;
}
person = new Person("Jim","Perice",new Date(2013,2,12), {weight:'70kg'});
personClone = JSON.parse(JSON.stringify(person))

console.log(person=== personClone);
//-------------------------------------------------
var counter = (function(){
    var myCounter=0;
    function changeBy(val){
        myCounter +=val;
    }
    return {
        increment:function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        },
        value:function(){
            return myCounter;
        }

    }
})();
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
//counter.changeBy(2)
console.log(counter.value());

//------------------------------------

var x=2;
var y=4;
if((y>x || y++ ===4)&& ++y===5){
    x=1;
}
else {
    x=4;
}
console.log(x,y)
//--------------------------------------

console.log([1,2,3]==[1,2,3])
//-------------------------------------

function foo(a,b,c){
    a++;
    b='new string';
    c["key"] = 'new value';
}
var a =1;
b='old string',
c={"key":"old value"};

(foo(a,b,c));
console.log(a,b,c);

//------------------------------------

var x=1;
function foo(){
    var x=3;
}
foo();
console.log(x);
function bar(){
    x=4;
}
bar();
console.log(x);

//------------------------------

console.log(typeof a);
console.log(typeof b);
function a(){
}
var b= function(){
}
//---------------------
function f(x){
    x+= 1
}
function g(x){
    x.value *=5;
}
var a;
var b= 1;
var c= {value:2};
var d=c;
f(a);
f(b);
g(d);
console.log(a,b,c.value, d.value);
//--------------------------------------

var a =['apple','banana','cocnut'];
var b=a;
var c=a.slice();
a.push('date');
console.log(a);
console.log(b)
console.log(c);

//--------------------------------

node.addEventListener('click', myFunction, false)

var person = new Object();
person.firstName = "John";
person.lastName = "Galt";
console.log(person[firstName]);

// var person =  new Object { FistName ="John",LastName = "Galt"}
// console.log(person);


const countNumberOfOccurrences = obj =>
  Object.values(obj).reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {})
  //ostaje pitanje sta je to a[b]
console.log(countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
})) // ➞ { moron: 2, scumbag: 1, idiot: 2 }

console.log([1,2,3] == [1,2,3])