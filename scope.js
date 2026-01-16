// // Global scope
// let a = 10;
// function test() {
//     let b = 20; // Local Scope or function scope
//     var c = 30; // Function Scope
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test();
// console.log(a);
// //console.log(b);
// //console.log(c);

//Block Scope
let a =30;
if (a >25) {
    let x = 100; // Block Scope
    var y = 200; // Function Scope
    console.log(x);
    console.log(y);
}
console.log(a);
//console.log(x);
console.log(y);

// for(var i =0;i<5;i++){
//     console.log(i);
// }
// console.log(i);


// let i=2;
// if(i >0 ){
//     var j=20;
// }
// console.log(j);