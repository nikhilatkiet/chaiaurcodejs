const marvel_heroes=["thor","Ironman","spiderman"]
const dc_heroes= ["suprman","flash","batman"]

//marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) //returns array in rray
// console.log(marvel_heroes[3][1]) ///access flash

//push actually pushes values to the same array but concat wants you to create
//a new array so this doesnt work unlesss we store it in a new array
marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes) //

const newarray= marvel_heroes.concat(dc_heroes)
console.log(newarray)

//spread
const all_new= [...marvel_heroes,...dc_heroes] // makes each element individually
console.log(all_new)

const arr2d= [1,2,3,[4,5,6],[6,7,[4,5]]]
//flat
const arr1d= arr2d.flat(Infinity)
console.log(arr1d)

//creating array form objects and strings
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) //empty array as it cannot directly convert tell it to convert what like key or value

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3))