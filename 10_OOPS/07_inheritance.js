class User {
    constructor(username){
        this.username = username
    }


LogMe(){
    console.log(`USERNAME is ${this.username}`);
    
   }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }


addCourse(){
    console.log(`A new course was added by ${this.username}`);
   }
}


const coffee = new Teacher("chai", "coffee@teacher.com", "123")

coffee.LogMe()
const masalaChai = new User("masalaChai")

masalaChai.LogMe()

console.log(coffee instanceof User);
