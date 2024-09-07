const myObject = {
    js: "javaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key}  Shortcut is for ${ myObject[key]}`);
    
    
}

const program = ["js", "rb", "py", "java", "cpp"]  // Arrays ki keys by default no. hi hoti hai jo 0 se suru hoti hai

for (const key in program) {
    // console.log(key);
    // console.log(program[key]);
    
    
}


const map = new Map();   
map.set('IN', "India")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('CHINA', "China")
map.set('UK', "United Kingdom")


for (const key in map) {       //  map not iteratable on for in loops
    // console.log(key);
    // console.log(map [key])
    
}