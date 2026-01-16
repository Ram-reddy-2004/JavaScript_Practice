// shallow copy 

// 1d array

let arr1 = [1,2,3,4,5];
let arr2 = [...arr1]; // spread operator

console.log(arr1);
console.log(arr2);

let arr3 = [1,3,45,5,6];
let arr4 = arr3.slice();
console.log(arr3);
console.log(arr4);


// deep copy

let arr5 = [1,2,3,4,5];
let arr6 = structuredClone(arr5)
console.log(arr5);
console.log(arr6);


// 2d arrays

let arr2d1 = [
    [1,3,4],
    [3,4,5]
]
let arr2d2 = [...arr2d1]; // shallow copy change in one array effects another
//arr2d1.slice();
arr2d1[1].push(10);

console.log(arr2d1);
console.log(arr2d2);


// deep copy

let arr2d3= [
    [1,2,3],
    [4,5,6]
]
let arr2d4 = structuredClone(arr2d3);

arr2d3[1][2] = 10;

console.log(arr2d3);
console.log(arr2d4);

let arr2d=[
    {name : "ram"},
    {age: 21}
]

let arr2dob = structuredClone(arr2d);
arr2d[0].name = "Rai";
console.log(arr2d);
console.log(arr2dob);