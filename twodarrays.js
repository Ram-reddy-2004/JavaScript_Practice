//2d arrays
arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i=0;i<arr.length;i++){
    for(let j =0;j<arr[i].length;j++){
        console.log(arr[i][j]);
    }
}
console.log();
// 3d arrays

let arr1 = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
]

for(let i=0;i<arr1.length;i++){
    for(let j =0;j<arr1[i].length;j++){
        for(let k =0;k< arr1[i][j].length;k++){
            console.log(arr1[i][j][k]);
        }
    }
}
