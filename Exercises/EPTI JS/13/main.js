var counter = (function () {
    var myCounter=0;

    function changeBy(val){
        myCounter +=val;
    }  

    return {
        increment:function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        },
        value:function(){
            return myCounter;
        }

    }
})();
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
counter.changeBy(2);
console.log(counter.value());

/* 
0
2
1
*/