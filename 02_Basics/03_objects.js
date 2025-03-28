let myFriend = {
    friend1 : "Amarnath",
    friend2 : "Mithun"
}
console.table(myFriend)

//Singleton : when we create object using constructor it will always be a singelton
//Object .create()//this is object method

//object   literals 

const mySym = Symbol("key1")

const jsUser = {
    name : "Amarnath",//by default name is taken as string 
    "full name" : "Amarnath Sharma",
    age : 22,
    [mySym] : "key1",
    location : "jamshedpur",
    email:"amarnathkumar@gmail.com",
    isLoggedin: true,
     lastLoggingDay: ["Monday","Saturday"]
     
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]) //Square bracket is used for symbol 

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)//After using freeze we can not change in object elements
// console.table(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")
}
jsUser.greeting()

jsUser.greeting2 = function(){
    console.log(`Hello js user ${jsUser.name}`)
}
jsUser.greeting2()