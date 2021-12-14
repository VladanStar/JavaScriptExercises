var x =1;
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
// 1 4