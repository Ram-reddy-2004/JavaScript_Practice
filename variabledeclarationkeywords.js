console.log(a); // hoisted but a assigned with undefined
var a = 10;
console.log(a); // now a has value 10
var a = 15; // re-declaration allowed with var
console.log(a); // now a has value 15

let b; // when declared first it assigns undefined now b has undefined
b=20; // assigning value to b
console.log(b); // hoisted but b  does not have any value
let b1 = 20; // correct way to assign value to let variable
//let b1 = 25; // re-declaration not allowed with let gives SyntaxError: Identifier 'b1' has already been declared
console.log(b1); // now b1 has value 20

//const c ;    // when declared first it gives SyntaxError: Missing initializer in const declaration

//console.log(c); // hoisted but c does not have any value throws ReferenceError
const c = 30; // const must be initialized while declaration
console.log(c); // now c has value 30