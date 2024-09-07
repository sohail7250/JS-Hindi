// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item             //     undefined     //  forEach loop  koi  bhi values return nahi karta hai
    
// })                                               // return karwane ke liye hame filter loop use karte hai.

// console.log(values);



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums =  myNums.filter( (num) => num > 4)        // filter method 1 condition mangta hai 
const newNums =  myNums.filter( (num) => {

//    num > 4              //  []  empty array because, //  we use {} scope so hame return keywordlikhna hi padega

return num > 4

}) 


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },

    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },

    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },

    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },

    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },

    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },

    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },

    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },

    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   let userBooks = books.filter( (bk) => {bk.publish >= 2000})   //  []  because we use {} so we have to use return keyword 


//   let userBooks = books.filter( (bk) => {return bk.publish >= 2000}) 

  let userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"}) 

  console.log(userBooks);
