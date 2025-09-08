const marvel=["ironman","spiderman","thor"]
const dc=["superman","batman","flash"]
// marvel.push(dc)//array ke andar array aa jata hai
// console.log((marvel));
// console.log(marvel[3][1]);

// const allHeros=marvel.concat(dc)
// console.log(allHeros);

// const all_new_heros=[...marvel,...dc]
// console.log(all_new_heros);

// const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const arr2=arr1.flat(Infinity)//mention depth
// console.log(arr2);

console.log(Array.isArray("ayushi"));
console.log(Array.from("Ayushi"));//converts to array
console.log(Array.from({name: "Ayushi"}));// gives empty array as we need to specify make array using keys or whatever

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
