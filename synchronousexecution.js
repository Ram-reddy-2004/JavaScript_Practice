function fun1(){
    console.log("Function 1 started");
    let start = Date.now();
    let delay = 3000;
    let end = start+delay;
    while(Date.now() < end){

    }
    console.log("Function 1 ended");
}
function fun2(){
    console.log("Function 2 started");
    let start = Date.now();
    let delay = 3000;
    let end = start+delay;
    while(Date.now() < end){

    }
    console.log("Function 2 ended");
}

fun1();
fun2();