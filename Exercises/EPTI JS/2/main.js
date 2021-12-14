var x=2;
var y=4;
if((y>x || y++ === 4) && ++y ===5){
    x=1;
}
else {
    x=4;
}
console.log(x)
console.log(y);
// x=1, y=5