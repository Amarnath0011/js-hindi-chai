// for of loop(Array specific loop )

["","",""]
[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {// this object is not object of js
    console.log(num);
    
}
const greeting = "Hellow world!"
for (const greet of greeting) {
    if(greet==" "){
        continue;
    }
    // console.log( `Each char is ${greet}`)
}

//Maps(Object containing as key and value pair , remember insertion order of the key , it is unique in the maps collection)

const map = new Map()
map.set('IN',"india")
map.set('US',"United state of America")
map.set('Uk',"United Kingdom")
map.set('IN',"india")//this will not add as it contains only unique value


console.log(map)
// for (const key of map) {
//     console.log(key)
// }

for(const [key,value] of map){
    console.log(key,':-' , value);
}

const myObj = {
    game1 : "NFS",
    game2 : "BGMI",
    game3 : "valorant"
 } //Object is not iterable}
for (const element of myObj) {
    console.log(myObj)//output: myObj is not iterable using this loop
}