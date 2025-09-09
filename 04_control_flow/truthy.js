const userEmail = "ayu@gmail.com"
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Dont have user email");
    
}

//falsy values include
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj={}
// if(Object.keys(emptyObj).length === 0)
// {
//     console.log("Obj is empty");
// }

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1=5 ?? 10 //5
//val1=null ?? 10 //10
//val1=undefined ?? 15 //15
val1= null ?? 10 ?? 20
console.log(val1);


//Ternary Operator
//conditon?true:false
