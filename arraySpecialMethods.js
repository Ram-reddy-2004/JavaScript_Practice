let arr = [1,2,3,4,5];

//1. map() // converts array based on the expession
// function callback(x) { 
//     return  x*x;
// }
// let res = arr.map(callback); // callback passing function as input..

// let res = arr.map(function(x) { // function expression
//     return x*x;
// });

//let res = arr.map((x) => x*x); // arrow function
// console.log(arr);
// console.log(res);

// 2. filter() returns array based on the expression

// function even(x){ // callback function
//     if(x%2 == 0) return true;
//     else return false;
// }

// let evens = arr.filter(function(x){  // function expression
//     if(x%2 ===0) return true;
//     else return false;
// });

// let evens = arr.filter((x) => (x%2 == 0) ? true : false);   // Arrow function
//console.log(evens);


//3. reduce() 

// function sum(total,x){
//     return total + x;
// }
// let sumofelements = arr.reduce(function(total,x) {
//     return total+x;
// });
let sumofelements = arr.reduce((total,x) => total+x,0); // arraw function 
console.log(sumofelements);

arr1 = [10,20,15,5,30];
// 4. some()
let haselement = arr1.some((x)=> x >10); // any element which is greater than 10 or not
console.log(haselement);

// 5. every() every element satisfies the condition or not

let haselement1 = arr1.every((x)=> x >= 5);
console.log(haselement1);

// 6. find() // found the first occurance element based on the condition and return the element

let arr2 = [10,20,15,5,30];

let element = arr2.find((x) => x > 10);
console.log(element);

// findIndex() return first occurance element index based on the condition
let elementindex = arr2.findIndex((x) => x <= 5);
console.log(elementindex);