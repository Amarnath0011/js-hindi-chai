// const tinderUser = new Object().  //Singelton Object

const tinderUser = {}

tinderUser.id = "123ABC"
tinderUser.name = "Mithun"
tinderUser.isLoggedIn = true

// console.table(tinderUser)

const regularUser = {
    email : "amarnathkumar0234@gmail.com",
    fullName : {
        userfullName : {
            firstName: "Amarnath",
            lastNamr: "Sharma"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstName)

//combining of two or more objects


const obj1 = {1: "a",2: "b"  }

const obj2 = {  3: "c", 4: "d"}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const users = [
    {
        id: 1,
        email: "amarna@gmail.com"
    }
    ,
    {
        id: 1,
        email: "amarna@gmail.com"
    }
    ,
    {
        id: 1,
        email: "amarna@gmail.com"
    }
    ,
    {
        id: 1,
        email: "amarna@gmail.com"
    }
    ,
    {
        id: 1,
        email: "amarna@gmail.com"
    }
]
// console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))//this will give a array of all keys
console.log(Object.values(tinderUser))//this will give a array of all values

console.log(tinderUser.hasOwnProperty('isLoggedIn'))// it will check wether a data is present in tiderUser or not 

