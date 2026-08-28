//objects... Lets' study objects..

//singleton  .... what is this ?? 


//object literals..

const mySym = Symbol('key')
const JSUser = {
    //key: value.. 
    name: "Prashant",
    [mySym]: "key1",
    isLoggedIn: true,
    location: "Jaipur",
    lastLoginDays: ["Monday","Saturday"]
}

//console.log(JSUser.lastLoginDays[1])

JSUser.greeting = function(){
    console.log(`Hello!.. How are you ${this.name}`)
}

console.log(JSUser.greeting())

console.log(JSUser[mySym]) // JSUser.mySym won't work.. 

Object.freeze(JSUser) //After this you can't change anything... 