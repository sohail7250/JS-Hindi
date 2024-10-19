// const user = {
//     username: "sohail",
//     loginCount: 8,
//     signesIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//         console.log(`username: ${this.username}`);
//         // console.log(this);
        
        
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);       // {} empty 

// // ********************  N O T E ***************************

// // Node environment ke ander jub hum global contex me console.log(this) print karate hai tab hame {} empty object milta hai.
// // lekin jab hum Browser ke ander global contex me console.log(this) ko print karate hai tab hume "windows object" milta hai. 


// const user2 = {
//     username: "sohail",
//     loginCount: 8,
//     signesIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//         console.log(`username: ${this.username}`);
//         console.log(this);
        
        
//     }
// }


// // const promiseOne = new Promise()   // new keyword means constructor function
// // const date = new Date()           //  ye allow karta hai ki 1 hi object literals se multiples intances bana sako.
//                             // naya contex banane ke kaam aata hai, or isi ko hum constructor function kahte hai.


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

// const userOne =  User("Sohail",12, true)
// const userTwo =  User("CodeWithSohail", 11 , false)

const userOne = new User("Sohail",12, true)
const userTwo = new User("CodeWithSohail", 11 , false)
console.log(userOne.constructor);   //  contructor property 1 reference hoti hai khud hi ke bare me.
console.log(userOne);
// console.log(userTwo);

//******************** N O T E *******************************

// new keyword
// jab bhi hum new keyword use karte hai to sab se pahle 1 empty object create hota hai jise hum instance kahte hai.
// jaise humne node environment ke unde dekha ki kaise this print karne pe empty object print ho raha tha.

// 1:-  new  keyword ke wajah se  1 naya object create hota hai.
// 2:-  1 contructor function call hota hai new keyword ke wajah se. 
//       ye kya karta hai ki jitne bhi arguments hote hai un sabko pack karta hai aur hame de deta hai.
// 3:-  this keyword ke ander sare arguments inject ho jate hai
// 4:-  hame sab 1 function ke ander mil jate hai.
