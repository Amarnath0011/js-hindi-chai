// const coding = ["js", "rb","py","java","cpp"]

// const values = coding.forEach((item)=>{console.log(item)
//     return item
// })
// console.log(values)
//for each doesnot return any value 

//****** FILTER ***********

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num > 4 )

// console.log(newNums)
 
// const newNums = []
// myNums.forEach((num) =>{
//     if(num>5){
//         newNums.push(num)
//     }
//  })

//  console.log(newNums)

const books =[ 
    {title: 'Book One', genre: 'Fiction',publish : 1981,edition : 2004},
    {title: 'Book Two', genre: 'Non-Fiction',publish : 1992,edition : 2008},
    {title: 'Book Three', genre: 'History',publish : 1999,edition : 2007},
    {title: 'Book four', genre: 'Non-Fiction',publish : 1989,edition : 2010},
    {title: 'Book five', genre: 'Science',publish : 2009,edition : 2014},
    {title: 'Book six', genre: 'Fiction',publish : 1987,edition : 2010},
    {title: 'Book seven', genre: 'History',publish : 1986,edition : 1996},
    {title: 'Book Eight', genre: 'Science',publish : 2011,edition : 2016},
    {title: 'Book Nine', genre: 'Non-Fiction',publish : 1983,edition : 1989},
    ];

    const userBooks = books.filter((bk)=>bk.genre==="History")

    // console.log(userBooks)

    const newUserBooks = books.filter((bk)=>bk.publish>=2000)

    // console.log(newUserBooks)

    const BookChoice = books.filter((bk)=> bk.publish >= 1995 && bk.genre === "History")
    // console.log(BookChoice)

