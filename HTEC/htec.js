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
//18.
var first = [1, 2, 3, 4, 5];
var second = [1, 2, 3, 4, 5];
console.log(first == second);
console.log(first === second);

//18.
const person = {
    name: "Vladan",
    age: 49,
    address: {
        city: "Kragujevac",
        street: "Kopaonicka",
        number: 48
    }
}
const secondPerson = { ...person };
secondPerson.address.number = 7;
console.log(person.address.number, secondPerson.address.number);

//19.
const arr = [1, 2, 3];
const mapArr = arr.map(i => i ** 2);

let data = {};
data[arr] = arr;
data[mapArr] = mapArr;
console.log(data.arr, data[mapArr]); 

//20.

const basicData = { id: "333-222" };
const relatedId = "wow";
let data = {};
data[basicData] = basicData;
data[relatedId] = relatedId;

//21.
const kobe = {
    points: 21,
    score: () => {
        this.points++;
        this.points++;
        this.points++;
    }
};
kobe.score();
kobe.score();
kobe.score();
console.log(kobe.points);

//22.
const getItemData = () =>( {
    name: "Desk",
        
})
console.log(getItemData().name);

//23.
const later = (fn, ...args) => fn(...args);
console.log(later(x=>x,3))


//24.

const data = { a: 3, b: 4};
Object.freeze(data);
const otherData = { c: 5, d: 6 };
Object.seal(otherData);
const completeData = Object.assign({}, data, otherData);
console.log(completeData.b)

//25.

// const arr = []
// arr.x = 3;

//26.

class NumberBox {
    constructor(initialValue) {
        this._value = initialValue;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
    get increment() {
        this.value++;
    }

}
const box = new NumberBox(2);
box.increment;
console.log(box.value)

//27.
const tech = async () => {
    console.log(await Promise.resolve(3));

}
tech();

//28.
const then = async () => {
    then().tech(x=>console.log(x));

}
then();

//29.
console.log(typeof ("x" instanceof Function));

//30.
Promise.resolve(3)
    .then(() => Promise.resolve(4))
    .then(x => console.log(x));

    //31.

Promise.resolve(3)
    .then(() => {
        new Error();
    })
    .then(() => Promise.resolve(4))
    .then(() => Promise.reject(5))
    .then(x => console.log(x))
    .catch (err => console.log(err));

//32.
[1, 2, 3].map(x => x ** 3)
    .filter(x => x > 1)
    .map(x => x + 1)
    .reduce((a, b) => a + b, 0)

    //33.
const arr = [1, 4, 9];
const sqrtSum = arr.forEach(Math.sqrt).reduce((a, b) => a + b, 0);
console.log(sqrtSum)