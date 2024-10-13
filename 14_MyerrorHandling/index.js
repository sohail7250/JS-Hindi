//complie-time error

// syntax error
// console.log(1;


//Runtime error

//console.log(x);

// try {
//     console.log(x);
//     console.log("Try block start here");
//     console.log("Try block ends here");
    
    
//     //a
//     //b
//     //c
// } catch (error) {
//     // define karte hai ki error ke sath hum kya karna chahte hai
//     // retry logic
//     // fallback mechanism
//     // logging
//     //custom error
//     console.log(" I AM INSIDE CATCH BLOCK");
    
// }

// finally{
//     console.log("I am run every time");
    
// }



// let's create a custom error

// try{
//     //Reference error
//     console.log(x);
//     let errorCode = 100;
    
// }
// catch(err) {
//     throw new Error("Bhai pahle declre karo,fir print karna ");
    
// }

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid Json")
}