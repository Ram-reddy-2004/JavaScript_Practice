//Pattern 7

//  * * * * * 
//   * * * * 
//    * * *
//     * *
//      *
let n =5;

for(let i =n-1;i>=0;i--){
    let row="";
    for(let j = n-i-1;j>=0;j--){
        row+=" ";
    }
    for(let j = 0;j<=i;j++){
        row+="* ";
    }
    console.log(row);
}