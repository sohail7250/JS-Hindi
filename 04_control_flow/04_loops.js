//  for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 3) {
        // console.log("3 is best number")
    }
    // console.log(element)
    
}

// console.log(element)           //  error scope related issue




// for (let i = 2; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 2; j <= 10; j++) {
// //    console.log(`Inner loop value ${j} and inner loop ${i}`);

// console.log(i + ' * ' + j + ' = ' + i*j)
    
//    }
// }

let myArray = ["flash", "batman", "superman"]

// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue

// for (let i = 0; i < 20; i++) {
//     if (i == 5) {

//         console.log(`Detected 5`);
//         // break;
        
//     }
//  console.log(`value of i is ${i}`)
    
// }


for (let i = 0; i <= 20; i++) {
    if (i == 5) {

        console.log(`Detected 5`);
        continue;
        
    }
 console.log(`value of i is ${i}`)
    
}

