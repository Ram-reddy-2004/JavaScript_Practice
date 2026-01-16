function areaCircle(radius){
    return Math.PI * radius * radius;
}
function areaSquare(side){
    return side * side;
}
function equilaTriangle(side){
    return Math.sqrt(3)/4 * side * side;
}
function calculator(value,callback){
    return callback(value);
}

console.log("Area of Circle with radius 5: " + calculator(5,areaCircle));
console.log("Area of Square with side 4: " + calculator(4,areaSquare));
console.log("Area of Equilateral Triangle with side 6: " + calculator(6,equilaTriangle));