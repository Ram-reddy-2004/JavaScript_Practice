let str =  "  Hello World!  ramkumar  how are you   "; // string with spaces;
console.log(str.trim()); // removes spaces from start and end
console.log(str.toUpperCase()); // converts to upper case
console.log(str.toLowerCase()); // converts to lower case 
console.log(str.slice(2,10)); // extracts a section of string from index 2 to 9
console.log(str.replace("ramkumar", "Rai")); // replaces ramkumar with Rai
console.log(str.split(" ")); // splits the string into array of substrings based on space delimiter
console.log(str.indexOf("ramkumar")); // returns the index of first occurrence of ramkumar
console.log(str.lastIndexOf("o"));

console.log(str.includes("World")); // returns true if World is found in the string else false
console.log(str.startsWith("  He")); // returns true if string starts with "  He"
console.log(str.endsWith("you   ")); // returns true if string ends with "you   "
console.log(str.repeat(3)); // repeats the string 3 times
console.log(str.charAt(6)); // returns the character at index 6
console.log(str.charCodeAt(6)); // returns the unicode of character at index 6
console.log(String.fromCharCode(87)); // returns the character for the unicode 87
console.log(str.length); // returns the length of the string

let str2 = "Hello";
console.log(str2.concat(" Ram", " How are you?")); // concatenates multiple strings
console.log(str2[1]); // access character at index 1 using bracket notation

console.log("-".repeat(20));

let name = "Ramkumar";
let age =21;
let college = "SVPCET";
let branch = "CSE";
let year = "final year";

console.log(`
    Student Details:
    ${'-'.repeat(20)}

    Name: \t${name}
    Age: \t${age}
    College: \t${college}
    Branch: \t${branch}
    Year: \t${year}

    ${'-'.repeat(20)}
`)