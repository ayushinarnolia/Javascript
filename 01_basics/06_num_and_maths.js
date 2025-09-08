//**************************************  NUMBERS ************************************
const score = 400
// console.log(score);
const balance = new Number(100.256)
// console.log(typeof balance);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const otherNum=2274.549
// console.log(otherNum.toPrecision(6));

const hundred=1000000
// console.log(hundred.toLocaleString('en-IN'));

//**************************************  MATHS  ************************************

//math lib comes by defualt w js
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.min(1,2,3,4));
// console.log(Math.max(1,2,3,4));

console.log(Math.random());//always between1 0-1
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 5
const max = 50
console.log(Math.floor(Math.random() * (max-min+1) ) + min);
