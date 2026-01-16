function step1(){
    return new Promise(
        (resolve,reject) => {
            console.log("step1 started...");
            setTimeout(() =>{
                console.log("step1 finished...");
                resolve();
            },3000);
        }
    )
}
function step2(){
    return new Promise(
        (resolve,reject) =>{
            console.log("step 2 started...");
            setTimeout(()=> {
                console.log("Step 2 is finished...");
                resolve();
            },2000);
        }
    )
}
function step3(){
    return new Promise(
        (resolve,reject) =>{
            console.log("step 3 started...");
            setTimeout(() =>{
                console.log("step 3 completed...");
                resolve();
            },3000); 
        }
    )

}
function step4(){
    return new Promise(
        (resolve,reject) => {
            console.log("step 4 started...");
            setTimeout(() =>{
                console.log("Step 4 completed...");
                resolve();
            },1000); 
        }
    )
}

step1()
.then(step2)
.then(step3)
.then(step4)
.catch(()=> "All steps are successfully completed....")
.catch(() => "failed at this current step...");