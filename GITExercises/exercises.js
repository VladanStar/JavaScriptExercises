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

