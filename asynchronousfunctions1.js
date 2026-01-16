function fun1(){
    console.log("Function1 started...");
    console.log("Function1 ended...");
}
let intervalId = setInterval(fun1,2000)
setTimeout(() => clearInterval(intervalId),10001);