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
