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
//---------------- 17. ------------
var a = 12;
var b=3;
var result;
function add(a,b) {
    return a+b;
}
result = add(2,11);
console.log(result);
//---------- 18. --------------
function transform(a,b,f) {
    var result;
    result = f(a) + f(b);
    console.log(result);
}
function double(x) {
    return 2*x;
}
transform(2,4,double);
//------------- 19. --------------
transform (2,4, square);
function transform(a,b,f) {
    var result;
    result = f(a) + f(b);
    console.log(result);
}
var square = function (x) {
    return x*x;
}
//-------------- 20. --------------
(function (a,b ,condition) {
    if(condition (a,b)){
        console.log(a)
    } else {
        console.log(b);
    }  
})(2,6, function (x,y) {
    return x>y;
})
//------------------- 21. -----------
var a = 20;
function f(n) {
    var result = a+n;
    var a = 30;
    return result;   
}
console.log(f(5));
//------------------- 22. -----------
var a = 20;
function f(n) {
    var result = a+n;
    a = 30;
    return result;   
}
console.log(f(5));
//------------- 23. --------------
function solve(weight0, weight1, weoght2) {
    
    return 0;
}
//------------- 24. -----------
console.log(typeof arguments) 
//object
//-------------25, -----------
var petternClass = (function () {
    var instance;
    function createInstance() {
        var object = new Object("This is instance");
        return object;
        
    }
    return {
        getInstance: function (){
            if(!instance){
                instance  = createInstance();
            }
            return instance;
        }
    }
    
})();
//--------------26. --------------
console.log(true== 1)
//------------ 27.------------
var i =3;
function chaange(j) {
    j=4;
    
}
chaange(i);
console.log(i);
// -----------------28. ----------------
const customer = {
    id:'123',
    phone:'1-98-98765'
};
customer._proto_zipcode = '98765';
const {zipCode} = customer;
console.log(customer);
//--------------------29. --------------
function a(i,j) {
    if(i==1 || j==1 || (i+j)==1){
        return true
    }
    else {
        return false;
    }
} 
console.log(a(1,5));
console.log(a(2,3));

console.log(a(-3,4));
//-----------------30. --------------
console.log(sum(2,3));
function  sum(x,y) {
    return x+y +1;
    
}
//-----------------31.-----------
console.log(mul(2,3));
var mul = function (x,y) {
    return x*y;
    
}
//------------- 32. -----------
var a = 10;
function f(a,b) {
    a++;
    b--;
    
}
f(a,2);
console.log(a);
//-------------- 33.-------------
function f() {
return function (a,b) {
    return a+b;
    
}    }
var result = f();
console.log(result);
//-------------- 34.-------------
function f() {
    return function (a,b) {
        return a+b;
        
    }    }
    var result = f()(1,3);
    console.log(result);
    //-------------35.-----------
    function outer(x) {
        function inner(y) {
            return y+1
            
        }
        return x+ inner(x);
        
    }
    var result = outer(5)
    console.log(result);
    //--------------- 36. ---------------
    (function () {
        console.log('spring time')
        
    })();
    //---------37.-----------
    (function (s) {
        console.log(s);
        
    })('JS');
    //------------ 38.------------
    
