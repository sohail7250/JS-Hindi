const marvel_heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = ["Batman", "Superman", "Flash"];

//marvel_heros.push(dc_heros);     // Array kisi bhi tarah ke koi bhi deta le leta hai.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros)   // concat() method returne the result , but push() method can't
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]  // it can't return the result.
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7[7,[ 6, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("sohail"));
// console.log(Array.from("sohail"));
// console.log(Array.from({name: "sohail"}))



