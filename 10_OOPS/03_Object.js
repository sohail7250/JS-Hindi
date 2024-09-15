//  JavaScript default behaviour is protopyple behaiviour.
// js haar nahi manti hai jab tak ki usko null value nahi mil jaye.Isi behaiviour se link hoke this keyword kaam karta hai
// Arrow function ke ander this keyword ka access nahi hota wo is liye nahi hota hai ki waha prototype aa jata hai.
// Protype hi hai jo new keyword ka access deta hai,ya working uski humko mili hai.
//Classes bhi hame isi ke through mili hai. this bhi isi ki wajah se kaam kar raha hai.
// prototypal inheritance/inheritance bhi isi ki wajah se aa raha hai.


function multipleBy5(num){
    return num*5
}

// multipleBy5(5)
 multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)

console.log(multipleBy5.prototype)


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}

// const Tea = createUser("Tea", 25)
const Tea = new createUser("Tea", 25)

const coffee = createUser("coffee", 250)

Tea.printMe()




//  javaScript classes ke through constructor function nahi deti hai balki js new keyword ke through constructor function deti hai.

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
