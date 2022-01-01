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

//
var userAge = "Please enter your age";
if (userAge = 0){   console.log("So you're a baby!'")} 
else if ( userAge < 0 | userAge > 200) { 
 console.log("I think you may be lying about your age")}
else{   
  console.log("That's a good age");}