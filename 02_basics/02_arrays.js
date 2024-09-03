const marvel_heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = ["Batman", "Superman", "Flash"];

// marvel_heros.push(dc_heros);     // Array kisi bhi tarah ke koi bhi data le leta hai.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros)   // concat() method, returns the result , but push() method can't
// console.log(allHeros);


// const all_new_heros = [...marvel_heros, ...dc_heros]  
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], [ 6, 5]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("sohail"));
// console.log(Array.from("sohail"));
// console.log(Array.from({name: "sohail"}))     // intresting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




