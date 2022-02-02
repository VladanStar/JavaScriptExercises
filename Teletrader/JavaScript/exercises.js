
//12.


//13.

var x =21;
var test = function(){
    console.log(x);
    var x = 20;
}
test();
//undefined

//14.

var niz = [1, "test",true];
console.log(niz+12);
//1,test,true12

//15.

var niz =[1,2,3,4,5];
delete niz[2];

niz.forEach((item,i )=>{
    console.log(item + " " + i)
})
// 1 0
// 2 1
// 4 3
// 5 4
//16.
for(var i=1; i<=5;i++){
    setTimeout(function timer(){
        console.log(i);
    },i*1000)
}
// 6 6 6 6 6 
//17.
const a = [1,2,3];
const func1 = ()=>{
     a[10] =99;
     print();
}
function print(){
    console.log(a[6]);
}
func1();
//undefined

//19.
const func1 =(x,y=null) =>{
    xy(y)
}
function xy(){
    console.log(counter1);
    console.log(counter2);
    var counter1 = 1;
    var counter2 = 2;
}
func1();
//undefined
//undefined

//20.
 (function(){
    console.log("A");
    setTimeout(function(){console.log("B");},1000);
    setTimeout(function(){console.log("C")},0);
    console.log("D");

    
})();
//A D C B
