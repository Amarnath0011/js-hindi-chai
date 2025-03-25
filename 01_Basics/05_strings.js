const name = "Amar"
const repoCount = 50
// console.log(name+ repoCount + "value"); outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 // this is string interpolation 

 const gameName = new String('Amar-nath')
 console.log(gameName[0],gameName[1])
//  console.log(gameName.__proto__);
 console.log(gameName.length)
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(6))
 console.log(gameName.indexOf('t'))
 console.log(gameName.slice(4,6))//can take negative value 
 console.log(gameName.substring(2,7))//it can print from (7,2) also but it cant be done with slice

 const newStringOne = "     hitesh     "
 console.log(newStringOne)
 console.log(newStringOne.trim())//Removes the space around the text


 const url = "https://www.google%20amrnath"
 console.log(url.replace('%20','-'))
 console.log(url.includes('mithun'))

 console.log(gameName.split('-'))