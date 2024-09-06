// if 




// if ( 2 == "2") {

//     console.log("Executed")   
// }

// if ( 2 === "2") {

//     console.log("Executed")   
// }

// if ( 2 != "2") {

//     console.log("Executed")   
// }

// *********************** N O T E  ******************************

//  conditional operators:-    <, >, <=, >=, ==, !=, ===, !==


const isUserloggedIn = true
const temperature = 38

// if (temperature < 50) {

//     console.log("less than 50");

// } else {
//     console.log("temperature is greater than 50");

// }

// console.log("Executed")

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`user power:${power}`)
    
// }

// console.log(`user power: ${power}`);       // Error 


// const balance = 1000

// if (balance > 500) console.log("test")  // implicit scope // executed in one line we can use multiples line seperated with commas ,
    
// if (balance < 500) {

// console.log("less than")
    
// } else if (balance < 750){

//     console.log("less than 750")
// } else if (balance < 900) {

//     console.log("less than 900")
    
// } else {
//     console.log("balance is 1000")
// }

const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserloggedIn && debitCard && 2==2) {
    console.log("Allow to buy course")

}

if (loggedInFromGoogle || loggedInFromEmail) {
   console.log("user logged in");
    
}