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

    get password(){
        return `${this._password}sohail`
    }

    set password(value){
        this._password = value
    }
}

const sohail = new User("so@hail.ai", "abc")
console.log(sohail.email);