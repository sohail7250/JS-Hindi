const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (items) {        // forEach method is ask for callBack function.
//     console.log(items);                   //  callBack function me name nahi aata hai.
//                                           // agar hum 1 line me forEach function ka use karte hai to ok
//                                         //   agar hum () iska use karte hai to ok but agar hum {} scope use karte hai
// })                                       //   to hume return keyword likhna hi hoga


// coding.forEach( (items) => {
//     console.log(items);
    
// })


// function printMe (item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//      console.log(item, index, arr);
     
// })


const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    
    {

        languageName: "ruby",
        languageFileName: "ruby"
    },
    
    {

        languageName: "python",
        languageFileName: "python"
    },
    
    {

        languageName: "java",
        languageFileName: "java"
    },
]

myCoding.forEach((item) => {
     console.log(item.languageName);
     
});