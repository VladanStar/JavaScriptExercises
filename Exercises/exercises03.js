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
a()(); //izvrsava obe funkcije