function fun(){
    return new Promise((resolve,reject) =>{
        console.log("Function started ...");
        setTimeout(() => {
            console.log("Function completed ...");
            reject();
        },2000);
    })
}
async function run(){
    try{
        await fun();
        console.log("After function call ...");
    }catch(error){
        console.log("Error caught ...");
    }
    
}

run();