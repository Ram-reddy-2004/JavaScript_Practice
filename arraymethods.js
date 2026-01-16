//insert at end
let arr = [1, 2, 3];
arr.push(4);
console.log("After push: " + arr);

//remove from end
let removedEnd = arr.pop();
console.log("After pop: " + arr + ", Removed: " + removedEnd);

//insert at beginning
arr.unshift(0);
console.log("After unshift: " + arr);

//remove from beginning
let removestart =arr.shift();
console.log("After shift: " + arr + ", Removed: " + removestart);

// removing elements using splice

// remove 1 element at index 1
let spliced = arr.splice(1, 1); // first 1 represent index and next 1 represents delete count
console.log("After splice removal: " + arr);
console.log("Spliced elements: " + spliced);

// inserting elements using splice
arr.splice(1,0,10,20,3.5); // inserts 10,20,3.5 at index 1 o representd delete count
console.log("After splice insertion: " + arr);

// remove and insert using splice
arr.splice(2,2,15,25); // removes 2 elements at index 2 and inserts 15 and 25
console.log("After splice remove and insert: " + arr);

//slice to copy a portion of array
let newArr = arr.slice(1,4); // copies elements from index 1 to 3
console.log("Sliced array: " + newArr);
console.log("Original array after slice: " + arr);

//concat to merge arrays
let arr2 = [30, 40, 50];
let mergedArr = arr.concat(arr2);
console.log("Merged array: " + mergedArr);

//indexOf too find index of an element 
let index = mergedArr.indexOf(25);
console.log("Index of 25 in merged array: " + index);

//lastIndexOf to find last index of an element
mergedArr.push(15); // adding another 15 to demonstrate lastIndexOf
let lastIndex = mergedArr.lastIndexOf(15);
console.log("Last index of 15 in merged array: " + lastIndex);

//includes to check if an element exists
let exists = mergedArr.includes(15);
console.log("Does 15 exist in merged array? " + exists);

console.log();
//join to convert array to string
let arr1 = [1, 2, 3];
let str = arr1.join("-");
console.log("Joined string: " + str);

//reverse to reverse the array
arr1.reverse();
console.log("Reversed array: " + arr1);

//sort to sort the array
arr1.sort();
console.log("Sorted array: " + arr1);

//fill to fill array with a static value
arr1.fill(0);
console.log("Array after fill: " + arr1);



