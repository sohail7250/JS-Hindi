

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["ironman","batman","superman"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr2);
// console.log(myArr[1]);
// console.log(myArr);



// *****************  Array Methods  ************************************

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()  // it bind array and changed the aaray into string.
// console.log(myArr);
// console.log(typeof newArr);  // string

// console.log(myArr);

console.log("A", myArr);

const myn1 = myArr.slice(1,3);   // last range not included.

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,4);   // last range included and, it manipulate original array.
console.log("C", myArr);
console.log(myn2);











