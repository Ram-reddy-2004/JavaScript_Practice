console.log("Value of a is: ", a); // This will Hoisted as undefined
var a = 10;
test()
function test(){
    console.log(a);
}
