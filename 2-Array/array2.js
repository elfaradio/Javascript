const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros) // dont merge but push array as a element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // flash

// const allHeros = marvel_heros.concat(dc_heros) //merge two arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // same way for >=2

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // another way
console.log(real_another_array); // type object

console.log(Array.isArray("g"));
console.log(Array.from("g")); // convert array
console.log(Array.from({ name: "h" })); // interesting [] return kore

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
