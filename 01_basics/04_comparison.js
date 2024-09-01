// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);    //false
// console.log(null == 0);   //false
// console.log(null >= 0);   //true

          //******** NOTE *********               

//  the reason is that an equality check == and comparisons >, <, >=, <= work differently,
//  comparisons convert null to a number, treating it as 0.  that's why (line no.13) null >= 0 is true,
 //  (line no.11) null > 0 is false.  



console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


console.log("2" === 2);


