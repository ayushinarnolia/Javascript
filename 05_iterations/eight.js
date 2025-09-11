//using reduce

const myNums = [1,2,3,4]
// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval: ${currval}`);
//     return acc+currval
// }, 0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemname: "py",
        price: 1000
    },
    {
        itemname: "js",
        price: 5000
    },
    {
        itemname: "java",
        price: 2599
    }
]

const totalCart = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(totalCart)