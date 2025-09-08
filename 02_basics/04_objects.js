//const tinderUser=new Object() //singleton object
const tinderUser={} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "deepika"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "ayushi",
            lastname: "narnolia"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//key valaue pair not used frequently

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//before using property check if it exists or not


//************************  Destructuring  **************************

const course={
    coursename: "chai aur js",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);


//JSON AND API
//  {
//     name: "ayushi",
//     coursename: "jss",
//     price: "free"
//  }

