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

