//singleton
//Object.create()

//object literals

const mySym=Symbol("key1")

const JsUser={
    name: "Ayushi",
    "full name": "Ayushi Narnolia",
    age: 20,
    [mySym]: "mykey1",
    location: "Mumbai",
    isLoggedIn: false,
    email: "ayushi@gmail.com",
    lastLoginDays: ["Mondy","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);//symbol can accessed using [] brackets only

JsUser.email="ayushi.05@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)//changes in the object wont be propagated

JsUser.email="ayushinarnolia.05@gmail.com"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting=function()
{
    console.log("Hello JS User");
}
JsUser.greetingTwo=function()
{
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());