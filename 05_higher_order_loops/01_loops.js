// for of loop                // It works on only key value principle.


//  ["", "", ""]
//  [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
  
//     console.log(`Each char is ${greet}`);
    
// }


// *********************  M A P S  ****************************


 const map = new Map();   // object form ans   // works on key, value principles, same order and "unique"
map.set('IN', "India")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('CHINA', "China")
map.set('UK', "United Kingdom")

  // console.log(map);

  // for (const key of map) {        // Array form ans
  //   console.log(key);
    
  // }

    
   for (const [key, value] of map) {        // without arrays & object form
    // console.log(key, ':-',  value);
    
  }


  const myObject = {
    'game1': 'NFS',         // not iteratable with json without json
    'game2': 'Spiderman'
  }

  for (const [key, value] of myObject) {  //  Object not iteratable both with array form and without arrays form.
    // console.log(key, ':-', value);            // error 
    
 }
    
  // *****************  N O T E  *********************************

  //  for of loop objects pe kaam nahi karta hai uske liye for in loop use karte hai.
