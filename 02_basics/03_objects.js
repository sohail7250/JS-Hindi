// object literals    jab bhi hum literals ki tarah object declare karte hai tab singleton nahi banega.
// singleton      // constructor se jab bhi object banega to wo hamesha singleton banega.

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "sohail",
    "full name": "Sohail Akhtar",
    // mySym: "mykey1",
    [mySym]: "mykey1",     //  symbol
    age: 26,
    location: "siwan",
    email: "sohail@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["monday", "sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);     // symbol access
// console.log(typeof jsUser.mySym);

// jsUser.email = "sohail@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "sohail@microsoft.com"
// console.log(jsUser);


jsUser.greetings = function(){
    console.log("hello js user");
    
}
console.log(jsUser.greetings);   //  [function (anonymous)]
console.log(jsUser.greetings());   //  [function (anonymous)]

jsUser.greetingsTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
 }

console.log(jsUser.greetings());   
console.log(jsUser.greetingsTwo());





