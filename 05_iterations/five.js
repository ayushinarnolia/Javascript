const coding = ["js", "cpp", "python", "ruby", "java"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
// })

//objs in array
const myCoding = [
    {
    langName: "javascript",
    langFileName: "js"
    },
    {
    langName: "C++",
    langFileName: "cpp"
    },
    {
    langName: "python",
    langFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})