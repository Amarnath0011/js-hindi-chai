// Dates

let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())//2025-03-26T13:49:33.094Z
// console.log(myDate.toJSON())//2025-03-26T13:49:33.094Z
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023 , 0,23)
// let myCreatedDate = new Date(2023 , 0,23,5,3)
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getDate())
// console.log(newDate.getFullYear())
// console.log(newDate.getDay())


// console.log(`${newDate.getDay()}and ${newDate.getTime()}`)


newDate.toLocaleString('default',{
    weekday: "long",
})
