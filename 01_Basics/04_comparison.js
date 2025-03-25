// console.log(2>1)
// console.log(2==5)
// console.log(5>=5)
// console.log(5>"empty")
// console.log("amar"=="amar")
// console.log("Amar" == "amar")
// console.log(5>"a")

console.log("3">2) //conversion is done in back ground
console.log("02">1)

console.log("3"==3)
console.log("3"===3) // dataType of both is also checked 

// console.log(null>0)//false
// console.log(null == 0)//false
// console.log(null>=0)//true

/* the reason is tha an equality check == and xomparisons >
< >= <= work differently .
Comparisons convert null to a number , treating it as 0.
that's why (3) null >= 0 is true and (1 ) null >0 is false.
*/

// console.log( undefined == 0)
// console.log( undefined <= 0)
// console.log(undefined >= 0)

// ===  checks strictly like also check the datatype

console.log("3"===3);
