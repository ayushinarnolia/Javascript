
var c = 50
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30//this is the issue with var in scopes
    // var c = 30 and c = 30 work the same in scope
    console.log("INNER: ",a);
    
}

console.log(a);
// console.log(b);
console.log(c);