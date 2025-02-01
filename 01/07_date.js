let myDate= new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate= new Date(2023,0,23)
let myCreatedDate1= new Date(2023,0,23,5,3)
let myCreatedDate2= new Date("2023-01-14")
let myCreatedDate3= new Date("01-14-2023")
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate1.toLocaleString())
console.log(myCreatedDate2.toLocaleString())
console.log(myCreatedDate3.toLocaleString())
//month start from 0
let myTimeStamp= Date.now() //dte from 1970 to noow
console.log(myTimeStamp) //time from 1970 to now
console.log(myCreatedDate.getTime()) // returns time from 1970 to mycreated date
//these values ate in minisecond
console.log(Math.floor(Date.now()/1000)) //to get date in seconds

console.log(newDate)
console.log(myDate.getMonth())

//in to local string we define an object
myDate.toLocaleString("default",
    {
        weekday: "long"
    }
)