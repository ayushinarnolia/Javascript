function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   //.call is used to hold the reference of the username
    this.email = email
    this.password = password
}

const ayushi = new createUser("ayushi", "ayushi@fb.com", "123")
console.log(ayushi);