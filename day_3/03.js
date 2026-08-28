/*
    this in node runtime returns an empty object,
    but when you run in chrome we get an object which will le later used in DOM..




*/
function c(){
    console.log(this);
}
c();
const chai = () =>{
    let username = "hitesh"
    console.log(this);
}
chai();

const add = (n1,n2) => (n1 + n2)

//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})()


// switch(key){
//     case 1:
//         //
//         break;
//     default: 
//         break;
// }


//null coalesciing operator


const name = null; 
console.log(name ?? "Prashant")

//null coalescing op is differnt from tertianary operator..