var person = new Object();
person.FirstName= "John";
person.LastName = "Galt";
console.log(person);
console.log(typeof person);
//true
//-------------
var person = new Object(FirstName = "John", LastName ="Galt");
console.log(person);
console.log(typeof person);
//false
//--------------
var person = {FirstName = "John", LastName= "Galt"};
console.log(person);
console.log(typeof person);
//false
//----------------------
var person = {FirstName :"John", LastName:"Galt"};
console.log(person);
console.log(typeof person);
//true
//-----------------------
var person = new {FirstName = "Jonh", LastName="Galt"};
console.log(person);
//false
//-------------------
var person = {"FirstName":"John", "LastName":"Galt"};
console.log(person);
console.log(typeof person);
//true
//------------------------------
/* 
which of the following techniques can be used to increase performance of JavaScript code

Reduce DOM access
Reduce activity in loops
Reduce DOM size
*/