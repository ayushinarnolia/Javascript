function myName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}
// myName()


// function addNumbers(num1, num2){//in function def we say parameters
//     console.log(num1 + num2);//doest mean its returning value
// }

// const result = addNumbers(5,null)//call- arguments

// console.log(result);

function addNumbers(num1, num2){
   let result = num1 + num2
   return result
//    return num1 + num2
}

const result = addNumbers(5,4)
// console.log(`Result : ${result}`);

function loginUser(username = "user"){
    if(!username)
    {
        console.log("Please enter a username");
        return    
    }
    return `${username} just logged in`
}

// console.log(loginUser("ayushi"))
// console.log(loginUser())// undefined just logged in


function calcCartPrice(val1, val2, ...num1){//spread/rest operator- pack it in a bundle and return
    return num1
}
// console.log(calcCartPrice(200,300,400));

const user = {
    username: "ayushi",
    price: 999
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
handleObject(user)
//if we change price to prices then it will return undefined, so  we need to check the types using if else
//in js it becomes lengthy but in typescript we need not check as it does so automatically

handleObject({
    username: "sam",
    price: 600
})

const myNewArray = [200,300,400,700]
function returnSecondVal(getArray){
    return getArray[1]
}
console.log(returnSecondVal(myNewArray));
