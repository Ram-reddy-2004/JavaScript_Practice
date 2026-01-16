let val =5;
switch(val){
    case 1:
        console.log("Value is 1");
        break;
    case 2:{
        console.log("Value is 2");
        break;
    }
    case 3 : 
        console.log("Value is 3");
        break;
    case 4 :
    case 5 :
        console.log("Value is 4 or 5");
        break;
    default:
            console.log("Value is not 1,2,3,4 or 5");
}
