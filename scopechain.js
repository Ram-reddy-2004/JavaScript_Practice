let outervar =10;
function outerfunction(){
    let innervar =20;
    function innerfunction(){
        let innerinnervar =30;
        console.log("Accessing outervar: ",outervar);
        console.log("Accessing innervar: ",innervar);
        console.log("Accessing innerinnervar: ",innerinnervar);
    }
    innerfunction();
}
outerfunction();
console.log("Accessing outervar from global scope: ",outervar);
console.log(`Accessing innervar from global scope: ${outerfunction.innervar}`); //undefined

let temp = 20;
if(temp > 10){
    if(temp < 30){
        let a = 40;
        console.log("Accessing a inside nested if block: ",a);
    }
    else{
        letc = 50; 
        console.log("Accessing a inside else block of nested if: ",a); //error
    }
    let blockvar = 50;
    console.log("Accessing blockvar inside if block: ",blockvar);
}else{
    console.log("Accessing blockvar inside else block: ",blockvar); //error
}
