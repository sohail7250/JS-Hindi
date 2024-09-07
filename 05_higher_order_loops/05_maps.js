
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums =  myNumbers.map( (num) => num + 10)


// const newNums =  myNumbers.map( (num) => { num + 10})    //  undefined  {}  we have to use return keyword

// const newNums =  myNumbers.map( (num) => {return num + 10})


const newNums = myNumbers                         
                       
                        .map( (num) => num * 10)    // chainning
                        .map(  (num) => num + 1)    // chainning
                        .filter( (num) => num >= 40)

console.log(newNums);
