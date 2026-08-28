//stack and heap.. 


//in non primitive datatypes, like array, objects,
//when we do y = x then we are essentially referencing it to the same obj so changing it in 
//y will autmotically change x.. 
//this is called heap
let a = {
    name : "prashant",
    age: 21,
}

let b = a
b.age = 12; 
console.log(a.age); 



//for primitive data types like int, string, bool, null, undefined, symbol, BigInt
//when we do y = x then we are essentially copying the value to y not referencing it
//this is called stack.
let x = 12; 
let y = x; 
y = 10;
console.log(x);