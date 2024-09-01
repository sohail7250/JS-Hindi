let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());   // day , date & time GMT
// console.log(myDate.toDateString());  // day & date
// console.log(myDate.toISOString());  
// console.log(myDate.toJSON());  
// console.log(myDate.toLocaleString()); //  date & time
// console.log(myDate.toLocaleTimeString());  // local time but...
// console.log(myDate.toTimeString()); 
// console.log(myDate.toUTCString()); 
// console.log(myDate.getTimezoneOffset());   // 0

// console.log(typeof myDate);     // object

// let myCreatedDate = new Date(2024, 0, 1);   // in 'JS' month start with 0
// let myCreatedDate = new Date("2024-09-01"); // yy-mm-dd   // single digit 0 se and double digit 1 se.


/*  ************  NOTE  ***********************
 // single digit me value dene se month 0 se start hota hai aur double digit me value dene se month 1 se start hota hai.     */

let myCreatedDate = new Date("01-14-2024");   // mm-dd-yy
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();   //very imp. whwn we designed quizez and polls who is fatest to winner.
// console.log(myTimeStamp);   // in millisecond

// console.log(myCreatedDate.getTime());  // when we use hotel project then we compare time.
// console.log(Date.now()); 
// console.log(Date.now()/1000); 
// console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getTime());
// console.log(newDate.getMinutes());
// console.log(newDate.getHours());

newDate.toLocaleString('default', {
    weekday: "long",
   
})


