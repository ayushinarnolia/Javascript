class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    //if you have defined getter then you HAVE to define the setter also
    get password(){
        return `${this._password}ayushi`
    }

    set password(value){
        this._password = value //new var
    }
}

const ayushi = new User("ayushi@05.ai", "abc")
console.log(ayushi.email);