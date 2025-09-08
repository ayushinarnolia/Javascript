//Datesss
//Date Type is Object

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

// let newDate = new Date(2025,11,23)
// let newDate = new Date(2025,11,23,5,3)
let newDate = new Date("2025-9-18")
// console.log(newDate);
// console.log(newDate.toString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(newDate.getTime());

console.log(Math.floor(Date.now()/1000));

let todayDate = new Date()

console.log(todayDate);
console.log(todayDate.getMonth()+1);
console.log(todayDate.getDay());

console.log(todayDate.toLocaleString('default',{
    weekday: "long"
}))
