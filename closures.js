function Counter(){
    let count = 0 ;
    return function(){
        count++;
        console.log(count);
    }
}
let counter1 = Counter();
counter1(); //1
counter1();
let counter2 = Counter();
counter2(); //1
counter2(); //2

function Multiplier(factor){ // lexical scope for factor and closure created for factor inner function
    function mul (x){
       console.log(factor * x);
    }
    return mul;
}

let double = Multiplier(2);
let triple = Multiplier(3);
double(5); //10
triple(5); //15