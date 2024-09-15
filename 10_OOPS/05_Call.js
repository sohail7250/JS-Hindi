function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function CreateUser(username, email, password){

    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const coffee = new CreateUser("coffee", "coffee@gmail.com", "123")
console.log(coffee);


// **********************  N O T E *******************************


//  Call ho kya raha hai ??

// call hamara current execution contex kisi aur function ko pass kar deta hai.

