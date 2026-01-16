//pattern 9 

//    * 
//   * * 
//  *   *
// *     *
//  *   *
//   * *
//    *

let n =5;
for(let i=0;i<n;i++){
    let row = "";
    for(let j=n-i-1;j>0;j--){
        row+=" ";
    }
    for(let j=0;j<=i;j++){
        if(j==0 || j==i){
            row+="* ";
        }else{
            row+="  ";
        }
        
    }
    console.log(row);
}
for(let i = n-2;i>=0;i--){
    let row ="";
    for(let j=n-i-1;j>0;j--){
        row+=" ";
    }
    for(let j = 0;j<=i;j++){
        if(j==0 || j==i){
            row+="* ";
        }else{
            row+="  ";
        }
    }
    console.log(row);
}