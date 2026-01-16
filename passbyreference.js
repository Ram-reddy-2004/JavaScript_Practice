let person = {
    name : "Ram",age:24, height:5.9
}
function fun (obj){
    console.log(obj);
}
fun(person);
let emp = person;
emp.name = "Shyam";
console.log("Person Name is :",person.name);
console.log("Emp Name is : ",emp.name);