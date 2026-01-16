// normal functions
function add(x,y){
    console.log("Addition of ",x,"and",y,"is: ",x+y);
}
add(10, 20)

// function expression
let sub = function(x,y){
    console.log("Subtraction of ",x,"and",y,"is: ",x-y);
}
sub(20,10);

// arrow function
let mul =(x,y) =>{
    console.log("Multiplication of ",x," and ",y, " is: ",x*y);
}
mul(10,5);

// IIFE - Immediately Invoked Function Expression
(function(x,y){
    console.log("Division of ",x," and ",y," is: ",x/y);
})(20,5);

// Anonymous function
setTimeout(function(){
    console.log("This is an anonymous function executed after 2 seconds");
},2000);
