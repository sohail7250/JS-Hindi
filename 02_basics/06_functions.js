
//  ******************** Shopping cart  ***********************************


// function calculateCartPrice(...num1){             //  ... rest perator or spread operator.
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

function calculateCartPrice(val1, val2,...num1){            
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "sohail",
    // prices: 1999
    price: 1999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
      username: "rock",
      price: 399

})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 500, 1000]));