
// console.log("S");
// console.log("O");
// console.log("H");
// console.log("A");
// console.log("I");
// console.log("L");

// function sayMyName(){
//      console.log("S");
//      console.log("O");
//      console.log("H");
//      console.log("A");
//      console.log("I");
//      console.log("L");
    
// }

//  sayMyName      // reference

//   sayMyName()        // execute  

//   function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

//     addTwoNumbers(3, 5);

//     addTwoNumbers(3,"5");

//     addTwoNumbers(3, "a");

//     addTwoNumbers(3, null);    // null 0

    // const results = addTwoNumbers(3, 5)

    // console.log("Result: ", results);
    



  function addTwoNumbers(number1, number2){
    let result = number1 + number2
    console.log("sohail");
    return result
    // console.log("sohail");

    return number1 + number2
    
     }

     const result = addTwoNumbers(3, 5)

    //  console.log("Result: ", result)

   function loginUserMessage(username  = "Rock"){
    if(username === undefined){
        console.log("please enter a username");

        return
    }

    return `${username} just logged in`

   }

   console.log(loginUserMessage("sohail"))
   console.log(loginUserMessage(""))
   console.log(loginUserMessage())   // undefined

