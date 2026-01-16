
let n =10;
for(let i=0;i<=n;i++){
    let row = "";
    for(let j =0;j<=n;j++){
        if((i==0)||(i==n)||(j==0)||(j==n) || (i==j) || (j==n-i) || (j == Math.floor(n/2)) || (i == Math.floor(n/2)) ||
        (i+j) == (Math.floor(n/2)) || (i-j) == Math.floor(n/2) || (i+j) ==(n + Math.floor(n/2)) || (j -i) == Math.floor(n/2)){
            row += "* ";
        }  else{
            row += "  ";
        }
        
    }
    console.log(row);
}


 