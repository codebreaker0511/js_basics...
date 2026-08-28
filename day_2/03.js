//const tinderUser = new Object() // singleton obj..

const tinderUser = {};

tinderUser.name = "1234"
tinderUser.isLoggedin = false; 

const obj1 = {}
const obj2 = {}


const obj3 = Object.assign({},obj1,obj2) // target,source,,,

//but we will use most of the time spread operator,.

const obj4 = {...obj1, ...obj3}

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))