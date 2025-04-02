const myObj = {
    js: 'javaScript',
    cpp :'c++',
    rb : 'ruby',
    swift:'swify by apple '

}

for(const key in myObj){
    console.log(`${key} shortcut for ${myObj[key]}`)
}

const programming = ["js", "rb","py","java","cpp"]

for (const key in programming) {
        console.log(programming[key])
    }
 