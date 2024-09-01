const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.9864

// console.log(otherNumber.toPrecision(3));

const otherNums = 1123.8966   // exponential value


// console.log(otherNums.toPrecision(3));   //exponential value because of line no. 15

const hundreds = 1000000

// console.log(hundreds.toLocaleString());  //by default US standard // after 3 digit ,
// console.log(hundreds.toLocaleString('en-IN'));   // INDIAN standard



//  ****************************  maths  *********************************


// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.7));

// console.log(Math.min(4, 3, 5, 8, 9));
// console.log(Math.max(4, 3, 5, 8, 9));

// console.log(Math.random());   // Math.random() values always occour from 0 to 1
// console.log(Math.random()*10+1);  // for bodmas rule it conflict 
console.log((Math.random()*10) + 1);   
console.log(Math.floor(Math.random()*10) + 1);   

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))
console.log(Math.floor(Math.random() * (max - min + 1)) + min)





