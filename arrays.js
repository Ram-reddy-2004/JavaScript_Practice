arr = [1,2.3,"ram",true,"a"];
console.log(arr);
console.log("Length of array: " + arr.length);
console.log("Element at index 2: " + arr[2]);
arr[1] = 3.5;
console.log("Modified array: " + arr);
arr.push("new element");

arr1 = new Array(5,7,"shyam",false);
console.log("New array: " + arr1);
let arr2 = arr.concat(arr1);
console.log("Concatenated array: " + arr2);

for(let i of arr2){
    console.log(i);

}
console.log("Index of 'shyam': " + arr2.indexOf("shyam"));
console.log("Sliced array from index 2 to 5: " + arr2.slice(2,5));
console.log("Popped element: " + arr2.pop());
console.log("Array after pop: " + arr2);
arr2.splice(3,2,"inserted1","inserted2");
console.log("Array after splice: " + arr2);

arr3 = [5,2,8,1,4];
arr3.sort();
console.log("Sorted array: " + arr3);
console.log("Reversed array: " + arr3.reverse());

arr4 =["a",'A',"b",'B',"c",'C'];
arr4.sort();
console.log("Case sensitive sorted array: " + arr4);

console.log("Joined array elements: " + arr4.join("-"));

console.log("Lower case all array elements: " +arr4.toString().toLowerCase());
console.log("Upper case all array elements: " +arr4.toString().toUpperCase());
let str = "hello world";

let strArr = str.split("");
console.log("String to array: " + strArr);  