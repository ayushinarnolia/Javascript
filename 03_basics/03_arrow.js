const user = {
    username: "ayushi",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this);

// function fun()
// {
//     let username = "ayushi"
//     console.log(this.username);
// }
//can use this keyword in a object only

// const fun=function(){
//     let username = "ayushi"
//     console.log(this.username);
// }

// const fun=()=>{
//     let username = "ayushi"
//     console.log(this.username);
// }
// fun()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

//const addTwo = (num1, num2) => (num1+num2)
//use return in {} and no need to use return in ()

const addTwo = (num1, num2) =>( {username: "ayushi"})
//object needs to wrapped in () braces when not using {}
console.log(addTwo(3,4));
