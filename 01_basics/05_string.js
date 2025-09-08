const name="ayushi"
const repoCount=15

//console.log(name+repoCount+" wow");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('ayushiii-hc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);//this gives object. better view in inspect

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString= gameName.slice(-8,4)//can give neg values also here //it starts counting from back
console.log(anotherString);

const newStringOne = "          ayushi   "
console.log(newStringOne.trim());//trims both starting and ending spaces

const url="https://ayush%20i.com"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('ayush'));

console.log(gameName.split('-'));
