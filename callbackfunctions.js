function add(a,b){
    return a + b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function calculator(a,b,callback){
    return callback(a,b);
}
console.log("Addition: " + calculator(10,20,add));
console.log("Subtraction: " + calculator(10,3,sub));
console.log("Multiplication: " + calculator(10,3,mul));
console.log("Anonymous Function Division: " + calculator(10,2,function(a,b){
    return a/b;
}));
console.log("Arrow Function Modulus: " + calculator(10,3,(a,b) => a % b));