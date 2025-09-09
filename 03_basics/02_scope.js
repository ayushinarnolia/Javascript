var c = 50
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30//this is the issue with var in scopes
    // var c = 30 and c = 30 work the same in scope
    // console.log("INNER: ",a);
    
}

// console.log(a);
// // console.log(b);
// console.log(c);

function one(){
    const username = "ayushi"

    function two(){
        const website = "instagram"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true)
{
    const username = "ayushii"
    if(username === "ayushii")
    {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


//**********************  Interesting  **************************
console.log(addone(5));

function addone(num){
    return num+1
}

//addTwo(5)// when we decalre var and hold it in some variable, it gives error if we call it fore defining the function
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5));
