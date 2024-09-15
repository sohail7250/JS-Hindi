let myfirstName = "sohail     "
let mylastName = "akhtar     "

// console.log(myName.length);
// console.log(myfirstName.truelength);
// console.log(myName.trim().length);


let myHeros = ["Thor","Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.Spiderman}`);
        
    }
}

Object.prototype.sohail = function(){
    console.log(`sohail is present in all objects`);
    
}

Array.prototype.heySohail = function(){
    console.log(`sohail says hello`);
    
}

// heroPower.sohail()
// myHeros.sohail()
// myHeros.heySohail()
// heroPower.heySohail()     // error


// inheritance

const user = {
    name: "coffee",
    email: "coffee@example.com"
}

const Teacher = {
    makeVideo: "True"
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= user

//  ******************************  modern syntax *********************************

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "CodeWithSohail       "

String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);   // old method
    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUsername.truelength()
"sohail".truelength()
"iceTea".truelength()
