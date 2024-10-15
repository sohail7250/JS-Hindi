// let firstPromise = new Promise( (resolve, reject) => {
//     console.log("Sohail Rock");
//     resolve(1001);
//    });

// let firstPromise = new Promise( (resolve, reject) => {
//     console.log("Sohail Rock");
//    reject(new Error("Internal Server Error"));
//    });

// function sayMyName(){
//     console.log("My Name is Sohail Rock");
    
// }
// setTimeout(sayMyName,5000);


// setTimeout(function sayMyName(){
//     console.log("My Name is Sohail Rock");
    
// },5000);


//  let firstPromise = new Promise( (resolve, reject) => {
//     setTimeout(function sayMyName(){
//         console.log("My Name is Sohail Rock");
        
//     },5000);
//        });

//  let firstPromise = new Promise( (resolve, reject) => {
//     setTimeout(function sayMyName(){
//         console.log("My Name is Sohail Rock");
        
//     },5000);

//     resolve(1)
//        });
        

// let Promise1 = new Promise( (resolve,reject) => {
//    let success = true;
//    if(success){
//     resolve("Promises Fulfilled");
//    }
//    else{
//     reject("Promises Rejected")
//    }
// });


// //             Promise Chainning

// Promise1.then((message) => {
//    console.log("first msg:" + message);
//    return "Promise fullfilled second message";
   
// }).then( (message) => {
//     console.log("second msg:" + message);
//     return "Promise fullfilled third message";
    
// }).then( (message) => {
//     console.log("Third msg:" + message);
    
// })

// Promise1.then((message) => {
//    console.log("This message" + message);
//    }).catch((error)=> {
//     console.log("Error:" + error);
    
// })


// let Promise1 = new Promise( (resolve,reject) => {
//     let success = true;
//     if(success){
//      resolve(10);
//     }
//     else{
//      reject(-1)
//     }
//  });
 
// let Promise1 = new Promise( (resolve,reject) => {
//     let success = false;
//     if(success){
//      resolve(10);
//     }
//     else{
//      reject("Internal Server Error")
//     }
//  });
 
 
//  //             Promise Chainning
 
//  Promise1.then((message) => {
//     console.log("first msg:" + message);
//     return 20;
    
//  }).then( (message) => {
//      console.log("second msg:" + message);
//      return 30;
     
//  }).then( (message) => {
//      console.log("Third msg:" + message);
     
//  }).catch((error) => {
//     console.log(error);
    
//  }).finally( (message) =>{
//     console.log("Mai to chalunga hi pakka hai");
    
//  })
 

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "first");
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "second");
})

let promise4 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "Third");
})

Promise.all([promise2,promise3,promise4])
.then( (values)=>{
    console.log(values);
    
}).catch((error)=>{
    console.log("error:" + error);
    
})