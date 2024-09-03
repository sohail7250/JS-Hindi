
// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30

    // console.log("INNER:", a);
    
    
}

// console.log(a);
// // console.log(b);
// console.log(c);


// **************  Nested Scopes  *******************


function one(){
    const username = "sohail"

    function two(){
        const website = "youtube"
        console.log(username);

    } 
    // console.log(website);
     two()
    
}

// one()


if (true) {
    const username = "sohail"
    if (username ==="sohail") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);      //  error
    
}

// console.log(username);      //  error



// *******************  intresting concept ******************************
console.log(addone(5))

function addone(num){                      //  function
    return num + 1
}

//  console.log(addone(5))


// console.log(addTwo(5))    //  Not allowed cannot access addTwo before initialisation.

const addTwo = function(num){               //  function or expression
    return num + 2
}

// console.log(addTwo(5))

