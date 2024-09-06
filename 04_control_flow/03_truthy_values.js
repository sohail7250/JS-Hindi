// const userEmail = "h@sohail.com"       // truthy values

// if (userEmail) {

//     console.log("Got user email")
    
// } else { 
//     console.log("Don't have user email")
// }


const userEmail = ""   //falsy value

// if (userEmail) {

//     console.log("Got user email")
    
// } else { 
 
//     console.log("Don't have user email")
// }


// const userEmail = []    // truthy values

// if (userEmail) {

//     console.log("Got user email")
    
// } else { 
//     console.log("Don't have user email")
// }


// ******************* N O T E **********************************

// Falsy Values    0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy values   "0", "false", " ", [], {}, function(){}, 


// if (userEmail.length === 0) {

//     console.log("Array is empty")
    
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {

//     console.log("object is empty")
// }


// ************** Nullish Coalescing Operator  ******************************

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10                    // NCO operator only for null & undefined.
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15                 //  only assign first value

console.log(val1)


// ******************  Ternary Operator ****************************

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
