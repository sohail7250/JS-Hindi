// There are multiple ways for clonning but some of the 3 ways are following:-
//(1)  spread operator   ...  
//(2)  assign method   Object.assign({}, src)
//(3) iteration


let src = {
    age: 26,
    weight: 70,
    height: 180
};

let src2 = {
    value: 101,
    name: "Sohail Rock"
}

// let dest = {...src};  //  clonning

// let dest = src;  // It's  not clonning it's refferencing, src and dest is reffereing same object.

// src.age = 30

// console.log("src: ", src);
// console.log("dest: ", dest);

// ***************  N O T E ********************************

// src me change hone pe dest me koi fark na pade to hum man lete hai ki succsessfull clonning huwi hai. 

//             (2)  second method 

//  let dest = Object.assign({}, src,src2);

//  src.age = 90;

//  console.log("src: ", src);
//  console.log("dest: ", dest);


 //      Third method

 let dest = {}
//  clonning using iteration
 for(let key in src){
    console.log(key);

    let newKey = key;
    let newValue = src[key];
    
    // insert newKey and value in dest and create a clone
    
    dest[newKey] = newValue;
    
 }
 src.age = 90;

 console.log("src: ", src);
  console.log("dest: ", dest);
 


 