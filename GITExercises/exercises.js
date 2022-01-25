
// 30. What is the output of below code
const sym1 = Symbol('one');
const sym2 = Symbol('one');

const sym3 = Symbol.for('two');
const sym4 = Symbol.for('two');

cnsooe.log(sym1 === sym2, sym3 === sym4);
// 1: true, true
// 2: true, false
// 3: false, true
// 4: false, false

// Answer
// Answer: 3
// Symbol follows below conventions,

// Every symbol value returned from Symbol() is unique irrespective of the optional string.
// Symbol.for() function creates a symbol in a global symbol registry list. But it doesn't necessarily create a new symbol on every call, it checks first if a symbol with the given key is already present in the registry and returns the symbol if it is found. Otherwise a new symbol created in the registry.
// Note: The symbol description is just useful for debugging purposes.

// 31. What is the output of below code
const sym1 = new Symbol('one');
console.log(sym1);
// 1: SyntaxError
// 2: one
// 3: Symbol('one')
// 4: Symbol
// Answer
// Answer: 1
// Symbol is a just a standard function and not an object constructor(unlike other primitives new Boolean, new String and new Number). So if you try to call it with the new operator will result in a TypeError

// 32. What is the output of below code
let myNumber = 100;
let myString = '100';

if (!typeof myNumber === "string") {
   console.log("It is not a string!");
} else {
    console.log("It is a string!");
}

if (!typeof myString === "number"){
   console.log("It is not a number!")
} else {
   console.log("It is a number!");
}
// 1: SyntaxError
// 2: It is not a string!, It is not a number!
// 3: It is not a string!, It is a number!
// 4: It is a string!, It is a number!
// Answer
// Answer: 4
// The return value of typeof myNumber (OR) typeof myString is always the truthy value (either "number" or "string"). Since ! operator converts the value to a boolean value, the value of both !typeof myNumber or !typeof myString is always false. Hence the if condition fails and control goes to else block.



// 33. What is the output of below code
console.log(JSON.stringify({ myArray: ['one', undefined, function(){}, Symbol('')] }));
console.log(JSON.stringify({ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]));
// 1: {"myArray":['one', undefined, {}, Symbol]}, {}
// 2: {"myArray":['one', null,null,null]}, {}
// 3: {"myArray":['one', null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"
// 4: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}
// Answer
// Answer: 2
// The symbols has below constraints,

// The undefined, Functions, and Symbols are not valid JSON values. So those values are either omitted (in an object) or changed to null (in an array). Hence, it returns null values for the value array.
// All Symbol-keyed properties will be completely ignored. Hence it returns an empty object({}).

// 34. What is the output of below code
class A {
  constructor() {
    console.log(new.target.name)
  }
}

class B extends A { constructor() { super() } }

new A();
new B();
// 1: A, A
// 2: A, B
// Answer
// Answer: 2
// Using constructors, new.target refers to the constructor (points to the class definition of class which is initialized) that was directly invoked by new. This also applies to the case if the constructor is in a parent class and was delegated from a child constructor.

// 35. What is the output of below code
const [x, ...y,] = [1, 2, 3, 4];
console.log(x, y);
// 1: 1, [2, 3, 4]
// 2: 1, [2, 3]
// 3: 1, [2]
// 4: SyntaxError
// Answer
// Answer: 4
// It throws a syntax error because the rest element should not have a trailing comma. You should always consider using a rest operator as the last element.

// 36. What is the output of below code
const {a: x = 10, b: y = 20} = {a: 30};

console.log(x);
console.log(y);
// 1: 30, 20
// 2: 10, 20
// 3: 10, undefined
// 4: 30, undefined
// Answer
// Answer: 1
// The object property follows below rules,

// The object properties can be retrieved and assigned to a variable with a different name
// The property assigned a default value when the retrieved value is undefined

// 37. What is the output of below code
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area();
// 1: 200
// 2: Error
// 3: undefined
// 4: 0
// Answer
// Answer: 2
// If you leave out the right-hand side assignment for the destructuring object, the function will look for at least one argument to be supplied when invoked. Otherwise you will receive an error Error: Cannot read property 'length' of undefined as mentioned above.

// You can avoid the error with either of the below changes,

// Pass at least an empty object:
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area({});
// Assign default empty object:
function area({ length = 10, width = 20 } = {}) {
  console.log(length * width);
}

area();

// 38. What is the output of below code
const props = [
  { id: 1, name: "John" },
  { id: 2, name: "Jack" },
  { id: 3, name: "Tom" },
];

const [, , { name }] = props;
console.log(name);
// 1: Tom
// 2: Error
// 3: undefined
// 4: John
// Answer
// Answer: 1
// It is possible to combine Array and Object destructuring. In this case, the third element in the array props accessed first followed by name property in the object.

// 39. What is the output of below code
function checkType(num = 1) {
  console.log(typeof num);
}

checkType();
checkType(undefined);
checkType("");
checkType(null);
// 1: number, undefined, string, object
// 2: undefined, undefined, string, object
// 3: number, number, string, object
// 4: number, number, number, number
// Answer
// Answer: 3
// If the function argument is set implicitly(not passing argument) or explicitly to undefined, the value of the argument is the default parameter. Whereas for other falsy values('' or null), the value of the argument is passed as a parameter.

// Hence, the result of function calls categorized as below,

// The first two function calls logs number type since the type of default value is number
// The type of '' and null values are string and object type respectively.

// 40. What is the output of below code
function add(item, items = []) {
  items.push(item);
  return items;
}

console.log(add("Orange"));
console.log(add("Apple"));
// 1: ['Orange'], ['Orange', 'Apple']
// 2: ['Orange'], ['Apple']
// Answer
// Answer: 2
// Since the default argument is evaluated at call time, a new object is created each time the function is called. So in this case, the new array is created and an element pushed to the default empty array.

// 41. What is the output of below code
function greet(greeting, name, message = greeting + " " + name) {
  console.log([greeting, name, message]);
}

greet("Hello", "John");
greet("Hello", "John", "Good morning!");
// 1: SyntaxError
// 2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']
// Answer
// Answer: 2
// Since parameters defined earlier are available to later default parameters, this code snippet doesn't throw any error.

// 42. What is the output of below code
function outer(f = inner()) {
  function inner() {
    return "Inner";
  }
}
outer();
// 1: ReferenceError
// 2: Inner
// Answer
// Answer: 1
// The functions and variables declared in the function body cannot be referred from default value parameter initializers. If you still try to access, it throws a run-time ReferenceError(i.e, inner is not defined).

// 43. What is the output of below code
function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);
myFun(1, 2);
// 1: [3, 4, 5], undefined
// 2: SyntaxError
// 3: [3, 4, 5], []
// 4: [3, 4, 5], [undefined]
// Answer
// Answer: 3
// The rest parameter is used to hold the remaining parameters of a function and it becomes an empty array if the argument is not provided.

// 44. What is the output of below code
const obj = { key: "value" };
const array = [...obj];
console.log(array);
// 1: ['key', 'value']
// 2: TypeError
// 3: []
// 4: ['key']
// Answer
// Answer: 2
// Spread syntax can be applied only to iterable objects. By default, Objects are not iterable, but they become iterable when used in an Array, or with iterating functions such as map(), reduce(), and assign(). If you still try to do it, it still throws TypeError: obj is not iterable.

// 45. What is the output of below code
function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
var myGenObj = new myGenFunc();
console.log(myGenObj.next().value);
// 1: 1
// 2: undefined
// 3: SyntaxError
// 4: TypeError
// Answer
// Answer: 4
// Generators are not constructible type. But if you still proceed to do, there will be an error saying "TypeError: myGenFunc is not a constructor"

// 46. What is the output of below code
function* yieldAndReturn() {
  yield 1;
  return 2;
  yield 3;
}

var myGenObj = yieldAndReturn();
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());
// 1: { value: 1, done: false }, { value: 2, done: true }, { value: undefined, done: true }
// 2: { value: 1, done: false }, { value: 2, done: false }, { value: undefined, done: true }
// 3: { value: 1, done: false }, { value: 2, done: true }, { value: 3, done: true }
// 4: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }
// Answer
// Answer: 1
// A return statement in a generator function will make the generator finish. If a value is returned, it will be set as the value property of the object and done property to true. When a generator is finished, subsequent next() calls return an object of this form: {value: undefined, done: true}.

// 47. What is the output of below code
const myGenerator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}
// 1: 1,2,3 and 1,2,3
// 2: 1,2,3 and 4,5,6
// 3: 1 and 1
// 4: 1
// Answer
// Answer: 4
// The generator should not be re-used once the iterator is closed. i.e, Upon exiting a loop(on completion or using break & return), the generator is closed and trying to iterate over it again does not yield any more results. Hence, the second loop doesn't print any value.

// 48. What is the output of below code
//const num = 0o38;
console.log(num);
// 1: SyntaxError
// 2: 38
// Answer
// Answer: 1
// If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.

// 49. What is the output of below code
const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}
// 1: 100
// 2: ReferenceError
// Answer
// Answer: 2
// Unlike function declarations, class declarations are not hoisted. i.e, First You need to declare your class and then access it, otherwise it will throw a ReferenceError "Uncaught ReferenceError: Square is not defined".

// Note: Class expressions also applies to the same hoisting restrictions of class declarations.

// 50. What is the output of below code
function Person() {}

Person.prototype.walk = function () {
  return this;
};

Person.run = function () {
  return this;
};

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());
// 1: undefined, undefined
// 2: Person, Person
// 3: SyntaxError
// 4: Window, Window
// Answer
// Answer: 4
// When a regular or prototype method is called without a value for this, the methods return an initial this value if the value is not undefined. Otherwise global window object will be returned. In our case, the initial this value is undefined so both methods return window objects.

// 51. What is the output of below code
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);
    super.start();
  }
}

const car = new Car("BMW");
console.log(car.start());
// 1: SyntaxError
// 2: BMW vehicle started, BMW car started
// 3: BMW car started, BMW vehicle started
// 4: BMW car started, BMW car started
// Answer
// Answer: 3
// The super keyword is used to call methods of a superclass. Unlike other languages the super invocation doesn't need to be a first statement. i.e, The statements will be executed in the same order of code.
// // 52. What is the output of below code
const USER = { age: 30 };
USER.age = 25;
console.log(USER.age);
// 1: 30
// 2: 25
// 3: Uncaught TypeError
// 4: SyntaxError
// Answer
// Answer: 2
// Even though we used constant variables, the content of it is an object and the object's contents (e.g properties) can be altered. Hence, the change is going to be valid in this case.
// 53. What is the output of below code
console.log("🙂" === "🙂");
// 1: false
// 2: true
// Answer
// Answer: 2
// Emojis are unicodes and the unicode for smile symbol is "U+1F642". The unicode comparision of same emojies is equivalent to string comparison. Hence, the output is always true.
// 54. What is the output of below code?
console.log(typeof typeof typeof true);
// 1: string
// 2: boolean
// 3: NaN
// 4: number
// Answer
// Answer: 1
// The typeof operator on any primitive returns a string value. So even if you apply the chain of typeof operators on the return value, it is always string.

// 55. What is the output of below code?
let zero = new Number(0);

if (zero) {
  console.log("If");
} else {
  console.log("Else");
}
// 1: If
// 2: Else
// 3: NaN
// 4: SyntaxError
// Answer
// Answer: 1
// The type of operator on new Number always returns object. i.e, typeof new Number(0) --> object.
// Objects are always truthy in if block
// Hence the above code block always goes to if section.

// 55. What is the output of below code in non strict mode?
let msg = "Good morning!!";

msg.name = "John";

console.log(msg.name);
// 1: ""
// 2: Error
// 3: John
// 4: Undefined
// Answer
// Answer: 4
// It returns undefined for non-strict mode and returns Error for strict mode. In non-strict mode, the wrapper object is going to be created and get the mentioned property. But the object get disappeared after accessing the property in next line.

// 56. What is the output of below code?
let count = 10;

(function innerFunc() {
  if (count === 10) {
    let count = 11;
    console.log(count);
  }
  console.log(count);
})();
// 1: 11, 10
// 2: 11, 11
// 3: 10, 11
// 4: 10, 10
// Answer
// Answer: 1
// 11 and 10 is logged to the console.

// The innerFunc is a closure which captures the count variable from the outerscope. i.e, 10. But the conditional has another local variable count which overwrites the ourter count variable. So the first console.log displays value 11. Whereas the second console.log logs 10 by capturing the count variable from outerscope.

// 57. What is the output of below code ?
console.log(true && "hi");
console.log(true && "hi" && 1);
console.log(true && "" && 0);
Answer;
// 1: hi
// 2: 1
// 3: ''

// 58. What is the output of below code ?
let arr = [1, 2, 3];
let str = "1,2,3";

console.log(arr == str);
// 1: false
// 2: Error
// 3: true
// // Answer
// // Answer: 3
// // Arrays have their own implementation of toString method that returns a comma-separated list of elements. So the above code snippet returns true. In order to avoid conversion of array type, we should use === for comparison.
