const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (items) {
//     console.log(items);
    
// })


// coding.forEach( (items) => {
//     console.log(items);
    
// })


// function printMe(item){
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