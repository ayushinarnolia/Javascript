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


//***********************************  Memory  **************************************

//2 types:
//Stack(Primitive)
//Heap(Non Primitive)

let myYoutubeName="ayushidotcom"
let anotherName=myYoutubeName//here you get copy
anotherName="chai aur code"

console.log(myYoutubeName);
console.log(anotherName);

let userOne={
    email: "user@gmail.com",
    upi: "upi@ybl"
}

let userTwo=userOne//reference of same thing is sent so changes are reflected in original values as well

userTwo.email="ayushi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

