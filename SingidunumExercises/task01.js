var fruits = ["apple", "kiwi", "pineapple", "wotermelone", "melone"];
console.log(fruits.length);
var first = fruits[0];
var last = fruits[fruits.length - 1];
for (var fruit of fruits) {
    console.log(fruits);
}
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});
var first = fruits.shift();
var newLength = fruits.unshift("Strowberry");
var newLength = fruits.push("Orange");
var last = fruits.pop();
var pos = fruits.indexOf("Banana");
console.log(fruits);
var vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
var pos = 1, n = 2;
var removedItems = vegetables.splice(pos, n);
console.log(vegetables);
console.log(removedItems);
var array1 = [1,2,3,4,5,6,7,8];
var array2 = array1;
var array3 = array1.slice();
var array4 = array1.map(elem => elem);
var array2 = [];
array1.forEach(elem => {
    array2.push(elem)
});
console.log(array4);
console.log(array2);

var o = { count: 0 };
o.increment = function (amount) {
    if (amount == undefined) {
        amount = 1;
    }

    this.count += amount;
    return this.count;
}
console.log(o.increment());
console.log(o.increment(3));