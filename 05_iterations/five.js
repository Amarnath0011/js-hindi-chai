const coding = ["js", "rb","py","java","cpp"]

// programming.forEach( function (item){
//     console.log(item)
// } )

// programming.forEach(()=>{console.log(item)})


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{console.log(item,index,arr)})

const myCoding = [

    {
        languageName: "javascript",
        languageFileName : "js"
    }
    ,
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "c language",
        languageFileName : "c"
    }
]

myCoding.forEach((item)=>{console.log(item.languageFileName)})
myCoding.forEach((item)=>{console.log(item.languageName)})
