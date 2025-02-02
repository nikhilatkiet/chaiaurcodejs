//here array can have different datatypes
//shallow copy share same reference
const myArr= [0,1,2,3,4,5]
console.log(myArr[0])
const myHeros= ["shaktiman","naagraj"]

const myArr2= new Array(1,2,3,4,5)
const newarr= myArr.slice(1,3);
console.log(newarr)
console.log(myArr)

console.log(myArr.splice(1,3)) //makes changesin the original array also
console.log(myArr)