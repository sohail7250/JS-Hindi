const name = "sohail Rock"
const repoCount = 10

// console.log(name + repoCount + "value");

// console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);     // String interpolation

const gameName = new String('sohail-sa-.com');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());  // can't change the original string because of stack memory.

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf(t));   // Error because t is a charrecter use t in ''
// console.log(gameName.indexOf('a')); 


const newString = gameName.substring(0,4) // 0 to 3   last index not included. //it can't hold negetive value.
// console.log(newString);

// const anotherString = gameName.slice(0,4) 
// console.log(anotherString);

const anothString = gameName.slice(-8,4)  // it can hold negetive value. 
console.log(anothString);

const newStringOne = "  sohail  "
console.log(newStringOne);

console.log(newStringOne.trim());   // it not include extra space // trimstart() & trimend() methods bhi hota hai

const url = "https://sohail.com/sohail%20akhtar"

console.log(url.replace('%20', '-'))   // kya replace karna hai aur kiske sath karna hai.

console.log(url.includes('rock'))     // always gives  results in boolean true & false.

console.log(gameName.split('-'));     // kiske base pe split karna hai yaha '-' ke base pe huwa hai.


