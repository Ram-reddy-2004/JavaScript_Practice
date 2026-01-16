const prm = new Promise(
    function executerfunc(resolve,reject){
        console.log("promise started....");

        setTimeout(() =>{
            console.log("asynchronus function inside ...");
            reject();
        },3000);
    }
);

prm.then(() =>{
    console.log("When resolve called it is executed...");
} )
.catch(() =>  console.log("When reject called it is executed..."));

setTimeout(() => console.log("Another asynchronous fumction..."),3000);