function fun1(){
    return new Promise((resolve,reject) =>{
        console.log("Function1 started....");
        setTimeout(() => {
            console.log("Function1 ended....");
            resolve();
        },2000);
        
    });
}
function fun2(){
    return new Promise((resolve, reject) =>{
        console.log("Function2 started...");
        setTimeout(() =>{
            console.log("Function2 ended...");
            resolve();
        },3000);
    });
}
function fun3(){
    return new Promise((resolve, reject) =>{
        console.log("Function3 started...");
        setTimeout(() => {
            console.log("Function3 ended...");
            resolve();
        },4000);

    });
}
async function run(){
    try{
        await fun1();
        await fun2();
        await fun3();
        console.log("All functions are successfully completed...");
    }
    catch(error){
        console.log("Error caught during function execution...");
    }
}
run();