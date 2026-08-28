/*
    Primitive..
    7types: String, Number, Boolearn, null, undefined, symbol, BigInt

    //Reference(non primitive)
        Array, Objects, Functions


    JS is a dynamically typed language.
    Why ?
        because at the runtime the type of variable is decided..
*/

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id == anotherId)

//array
const subs = ["maths", "english", "hindi"]
console.log(subs[2])

//obj.. 
let myObj = {
    "name": "Prashant",
    "age": 22,
}

console.log(myObj["age"]);


const myfunc = (a,b) => {
    return a + b
}

console.log(myfunc(3,4))
console.log(typeof myfunc)


//stack(primitive we get a copy), Heap(non primitive) we get a reference..
let name = "Prashant"

