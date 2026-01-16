let student = {name : "Ram",
    age : 21,
    grade : "A",
    coding : function(){
        console.log("Student is coding...");
    },
    study : function(){
        console.log("Student is studying...");
    },
    play : function(){
        console.log("Student is palying....");
    }
    };

console.log("Student Name : " , student.name);
console.log("Student Age : "+ student.age)
student.coding();
student.study();

let student2 = {name : "Shyam",
    age : 22,
    grade : "B",
    dance : function(){
        console.log("Student is dancing...");
    },
    chill : function(){
        console.log("Student is chilling...");
    }
};
console.log("Student Name : " , student2.name);
console.log("Student Age : "+ student2.age)
student2.dance();
student2.chill();