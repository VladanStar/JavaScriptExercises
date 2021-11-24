//-----------  1. --------------
var r;
r = (function (a,b) {
    return a+b;
    
})(2,11);
console.log(r);
//---------2.---------------
var input =12;
function f() {
    input =15;
    
}
console.log(input);
 //-----------3.--------------
 var input =12;
 function f() {
     input =15;
 }
 f;
 console.log(input);
//--------4.-------------------
var input =12;
function f() {
    input=15;    
}
f();
console.log(input);


