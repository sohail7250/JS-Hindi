
const user = {
    username: "sohail",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);       // ****"NOTE"****  jo bhi abhi current contex me hai uske username ko print karo.
        // console.log(this);
        
    }  

}

// user.welcomeMessage()
// user.username = "Rock"
// user.welcomeMessage()

// console.log(this);   //  {}   empty object because we are using node environment.but in brower,the global object is Window object.

// function chai(){
//     let username = "sohail"
//     // console.log(this)           //   jab kisi function ke andar this ka print karte hai node environment me to bahut se values aate hai like, global  value,  micro task, idial time , fetch etc.

//     console.log(this.username)    // this contex only works in object, but not works in function.     //    undefined
// }

// chai()



// const chai = function () {
//     let username = "sohail"
//     console.log(this.username);        //  undefined
// }

// chai()



// *****************  Arrow function  *********************

// const chai = () => {
//     let username = "sohail"
//     console.log(this.username);        //  undefined
//     // console.log(this);        //   {}
// }

// chai()


// const addTwo = (num1, num2) => {         // explicit return
//      return num1 + num2
// }

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) =>    num1 + num2         // Implicit return   // REMOVE {} & return keyword. 
     


// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) =>    (num1 + num2)     // very heavily use in React js

// console.log(addTwo(3, 4));



//  *****************************  N O T E  ********************************


/*   jab bhi hum arrow function use karenge tab agar hum curly braces {}, use kiya hai tab return keyword ka use karenenge aur jab parenthises (),  ka use karenge tab hum return keyword nahi use karenge.  yahi single line me likhana hai to return keyword nahi likhenge.
*/
   

// const addTwo = (num1, num2) => {username: "sohail"} // undefined    

const addTwo = (num1, num2) => ({username: "sohail"})  // object return karane ke liye parentheises () use karna hi padega.

    console.log(addTwo(3, 4))