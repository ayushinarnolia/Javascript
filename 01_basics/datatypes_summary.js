//Primitive
//they are call by value
//7 types:  String, number, boolean, null, undefined, symbol, BigInt, 

const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId);

const bigNumber= 256321452456524525


//Reference or Non Primitive
// Array, Objects, Functions

const heros=["shktiman", "naggraj", "doga"]

let obj={
    name: "ayushi",
    age: 20,
}

//data type is function
const myFunction= function (){
    console.log("Hello World");
    
}

console.log(typeof obj);
