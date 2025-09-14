const user = {
    username: "ayushi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this//this is implicitely defined only
}

const userOne = new User("ayushi", 12, true)
const userTwo = new User("javascript", 11, false)
//if you dont use new then userTwo values overwrite the ones in userOne
console.log(userOne.constructor);
//console.log(userTwo);