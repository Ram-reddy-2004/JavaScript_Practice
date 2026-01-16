// function is a fist class object in javascript
// firsy class object means that functions can be treated like any other variable
// functions can be assigned to a variable
// functions can be passed as an argument to another function
// functions can be returned from another function

// Example 1: Function assigned to a variable
function fun(a,b ){
    console.log(a+b);
}
let add = fun;
add(10,20);
fun(10,20);
// Example 2: Function passed as an argument to another function
function fun1(func){
    func(30,40);
}
fun1(fun);  // 
// Example 3: Function returned from another function
function fun2(func){
    return func(10,20);
}
fun2(fun); // call back function