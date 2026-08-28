// const arr = [3,4,5,8]

for(const num of arr){
    console.log(num)
}



//Maps 
const map = new Map()
map.set('IN','India');
map.set('KRW','Korean');

// for(const [key,value] of map){
//     console.log(key)
// }

//0bject is not iteratable for of but we can iterate it using forin..

const myObj = {
    js: "Javascript",
    rb: "Ruby",
    cpp: "C++",
    py: "Python"
}

for (const key in myObj) {
    console.log(key)
}

//callback..
const add = (a,b) =>{
    return a + b;
}
const mul = (a,b) =>{
    return a*b; 
}

const calculate = (a,b,operator) => {
    return operator(a,b);
}

console.log(calculate(3,4,add));
console.log(calculate(3,4,mul));





const arr = [1,2,3,4,5];
arr.forEach( (num) => {
    console.log(num);  //This right here is a callback function .. 
} )

const printme = (val) => {
    console.log(val)
}
arr.forEach(printme) // here we have to just give the reference to the function not call the function itself..