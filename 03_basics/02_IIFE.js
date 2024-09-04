// Immediately Invoked Function Expressions  (IIFE)


(function coffee () {              //  Named IIFE
    console.log(`DB CONNECTED`);
})();

// coffee()


// ************************ N O T E  ********************************

//  (1) Global scope ke pollution se bachane ke liye IIFE ka use karte hai.  global scope ke  variables ko hatane ke liye use karte hai.                                                                                                                    (2)  IIFE envoked ho gaya hai magar isko pata nahi hota ki actually me contex rokna kaha hai aaisi situation ko handle karne ke liye js me 1st function ke just  baad semicolon ;  ka use kiya jata hai


// (  () => {                // UnNamed IIFE
//     console .log(`DB CONNECTED TWO`)
// } )()


// ( function with_sohail ()  {
//     console .log(`DB CONNECTED TWO`)
// } )()


(  (name) => {                     // Parameter passed IIFE
        console .log(`DB CONNECTED TWO ${name}`)
     } )("sohail")
    