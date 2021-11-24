//-----------  1. --------------
var r;
r = (function (a,b) {
    return a+b;
    
})(2,11);
console.log(r);
//--------- 2.---------------
var input =12;
function f() {
    input =15;
    
}
console.log(input);
 //----------- 3.--------------
 var input =12;
 function f() {
     input =15;
 }
 f;
 console.log(input);
//-------- 4.-------------------
var input =12;
function f() {
    input=15;    
}
f();
console.log(input);
//--------- 5.--------------
'use strict';
var x=1;
function f() {
return x*2;    
}
f(4);
console.log(x);
//------- 6. -----------
'use strict';
var x =1;
function f() {
    y=3;
    return x*y;    
}
f(4);
console.log(x);
//------------ 7. -------------
function calculate(a,b) {
    var rb = b%10;
    var ra = a%10;
    a =a -ra +rb;
    b = b-rb +ra;
    console.log(a,b);
    
}
calculate(123,45);
//--------- 8.------------
var a,b;
function calculate(a,b) {
    var rb = b%10;
    var ra = a%10;
    a =a -ra +rb;
    b=b-rb + ra;
}
calculate(123,45);
console.log(a,b);
//------------ 9.-------------
var a = [3,4,1,2];
function addOne(array) {
    for(var i=0;i<array.length; i++){
        array[i] +=1;
    }
}
addOne(a);
console.log(a);
// ------------- 10. -------
function f(a,b) {
    var result = a+b;
}
console.log(f(2,1));
//---------- 11.----------
function f(a,b) {
    var result =a+b;
    
}
console.log(f(2,1));
//------------- 12. ----------
console.log(console.log('JS'));
//------------- 13. ------------
function transform(a,b,f) {
    var result;
    result = f(a) + f(b);
    console.log(result);
}
transform(2,4,function (x) {return x+1;
    
});
//-------------- 14.--------------
var result;
function add(a,b) {
    return a+b;
}
result = add(2);
console.log(add);
//------------- 15. -------------
var result;
function add(a,b) {
    return a+b;
}
result = add(2);
console.log(result);
//---------------- 16. ------------
var a = 12;
var b=3;
var result;
function add(a,b) {
    return a+b;
}
result = add();
console.log(result);