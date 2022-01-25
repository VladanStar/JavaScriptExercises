
// 40. What is the output of below code
function add(item, items = []) {
  items.push(item);
  return items;
}

console.log(add('Orange'));
console.log(add('Apple'));
// 1: ['Orange'], ['Orange', 'Apple']
// 2: ['Orange'], ['Apple']
// Answer
// Answer: 2
// Since the default argument is evaluated at call time, a new object is created each time the function is called. So in this case, the new array is created and an element pushed to the default empty array.

// 41. What is the output of below code
function greet(greeting, name, message = greeting + ' ' + name) {
  console.log([greeting, name, message]);
}

greet('Hello', 'John');
greet('Hello', 'John', 'Good morning!');
// 1: SyntaxError
// 2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']
// Answer
// Answer: 2
// Since parameters defined earlier are available to later default parameters, this code snippet doesn't throw any error.


// 42. What is the output of below code
function outer(f = inner()) {
  function inner() { return 'Inner' }
}
outer();
// 1: ReferenceError
// 2: Inner
// Answer
// Answer: 1
// The functions and variables declared in the function body cannot be referred from default value parameter initializers. If you still try to access, it throws a run-time ReferenceError(i.e, inner is not defined).

// 43. What is the output of below code
function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs)
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
const obj = {'key': 'value'};
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
var myGenObj = new myGenFunc;
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

var myGenObj = yieldAndReturn()
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
const myGenerator = (function *(){
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
function Person() { }

Person.prototype.walk = function() {
  return this;
}

Person.run = function() {
  return this;
}

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

const car = new Car('BMW');
console.log(car.start());
// 1: SyntaxError
// 2: BMW vehicle started, BMW car started
// 3: BMW car started, BMW vehicle started
// 4: BMW car started, BMW car started
// Answer
// Answer: 3
// The super keyword is used to call methods of a superclass. Unlike other languages the super invocation doesn't need to be a first statement. i.e, The statements will be executed in the same order of code.
// // 52. What is the output of below code
const USER = {'age': 30};
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
console.log('🙂' === '🙂');
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
    console.log(true && 'hi');
    console.log(true && 'hi' && 1);
    console.log(true && '' && 0);
    Answer
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

