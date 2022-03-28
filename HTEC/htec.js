//1.
var person;
console.log(person);
person = "Marko";

//2.
var person;
console.log(person);

let person2;
console.log(person2);

const person3;
console.log(person3);

//3.
var person = "Marko";
{
    console.log(person);
}

//4.
var person = "Marko";
{
    console.log(person);
    var person = "Peter";
}

//5.
var person = "Marko";
{
    console.log(person);
    let person = "Peter";
}

//6.

var person = "Marko";
function test() {
    console.log(person);
    let person = "Peter";
}
test();

//7.
function test() {
    let person = "Marko";
}
console.log(test());

//8.
test();
function test() {
    console.log("Marko");
}

//9.
test();
const test = () => {
    console.log("Marko");
}
//10.
console.log(this.obj);
console.log(this);

//11.
const obj = {
    test: "Marko",
    handler: function () {
        console.log(this.test);
    }
}
obj.handler();

//12/
const obj = {
    test: "Marko",
    handler: () => {
        console.log(this.test)
    }
}
obj.handler();

//13.
const obj = {
    test: "Marko",
    handler: function () {
        console.log(this.test);
    }
}
const a = obj.handler;
a();

//14/
console.log(1 + 4 + "23");
console.log(1 + 4 * "2");
console.log(1 + 4 / "2");

//15.
const initialArray = [1, 3, 5];
const arr = [...initialArray, 2, 4, 6];
console.log(initialArray);
console.log(arr);

//16.
let person = ["Albert", "Einstein"];
let [firstName, lastName] = person;
console.log(firstName);
console.log(lastName);

//17.
var five = 5;
var fiveOneMoreTime = 5;
var fiveString = "5";
console.log(five == fiveOneMoreTime);
console.log(five === fiveOneMoreTime);
console.log(five == fiveString);
console.log(five === fiveString);