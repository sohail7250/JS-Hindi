
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
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);



// *******************  intresting concept ******************************

function addone(num){
    return num + 1
}

addone(5)

