// Pattern 4

//         * 
//       * * * 
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

let n =5;

for(let i=0;i<n;i++){
    let row = "";
    for(let j = n-i-1;j>0;j--){
        row+="  ";
    }
    for(let j=0;j<=2*i;j++){
        row+="* ";
    }
    console.log(row);
}




