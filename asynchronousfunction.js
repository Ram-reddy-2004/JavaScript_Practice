function fun1(){
    console.log("function1 started...");
    console.log("function1 ended...");

}
function fun2(){
    console.log("Function2 started...");
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;
    while(Date.now() <= end){

    } 

    console.log("Function2 ended....");
}

function fun3(){
    console.log("Function3 started...");
    let start = Date.now();
    let delay = 3000;
    let end = start + delay;
    while(Date.now() <= end){

    } 

    console.log("Function3 ended....");
}

function fun4(){
    console.log("Function4 started...");
    console.log("Function4 ended...");
}

fun1();
setTimeout(fun2,2000); // setTimeout() takes 2 parameters one is callback and next milliseconds 
setTimeout(fun3,1000);
fun4();

