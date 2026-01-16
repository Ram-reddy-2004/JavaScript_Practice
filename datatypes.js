let a = 10; // Number data type
let b = 3.14; // Floating point number this is also of type Number
let c = 1/0 ; // Infinity this is also of type Number
let d = -1/0 ; // -Infinity this is also of type Number
let e = "Hello" / 3; // Not a Number this is also of type Number
console.log(typeof a); // number
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

let big =12326262888646486486864846848464846484n;
console.log(big);
console.log(typeof big); // BigInt data type


let str1 = "Hello, World!"; // String data type
let str2 = 'JavaScript is fun!';
console.log(typeof str1); // string
console.log(typeof str2); // string

let isTrue = true;
let isFalse = false;
console.log(typeof isTrue); // boolean data type
console.log(typeof isFalse); // boolean

let undef; //when variable is declared but not assigned any value   undefined data type 
console.log(typeof undef); // undefined

let n = null; // null data type
console.log(typeof n); // object (this is a known quirk in JavaScript)

let sym = Symbol("unique"); // Symbol data type
console.log(typeof sym); // symbol

let obj = {name: "John", age: 30}; // Object data type
console.log(typeof obj); // object  

let func = function() { // Function data type
    return "I am a function";
}
console.log(typeof func); // function

arr = [1, 2, 3]; // Array data type (which is a type of object)
console.log(arr);
console.log(typeof arr); // object

