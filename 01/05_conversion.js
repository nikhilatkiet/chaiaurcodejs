console.log(null > 0)
console.log(null >= 0)
console.log(null == 0)
//comparison operators except == convert null to 0 and so >= returns true whille == return false
console.log("undefined")
console.log(undefined > 0)
console.log(undefined >= 0)
console.log(undefined >= 0)
//in undefined all are false
// these also change their datatype
console.log("2">1)// returns true

// use === for strict checking also checks dataype
console.log("1"===1)// returns true
console.log(1===1)// returns true

//use of symbol datatype is to make uniqueness
const id=Symbol('121')
const id2=Symbol('121')
console.log("Use of Symbol")
console.log(id===id2)// gives false even though they have same number