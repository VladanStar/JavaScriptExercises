function f(x) {
    x+=1;
    
}
function g(x) {
    x.value *=5;
    
}
var a;
var b=1;
var c={value:2};
var d =c;
f(a);
f(b);
g(d);
console.log(a,b,c.value, d.value);

// undefined 1 10 10