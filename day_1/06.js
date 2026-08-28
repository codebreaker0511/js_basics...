const nam = "prashant"
const repoCount = 30

// console.log(name + repoCount + "value")


console.log(`Hello my name is ${nam} and my repo count is ${repoCount}`)



//another way of initializing 

const gameName = new String('Prashant')
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('s'))


const newString = gameName.substring(1,4) // 4 is exclusive


const anotherString = gameName.slice(-8,4)

const newStr = "   hitesh   "
console.log(newStr.trim());

const Name = "Prashant0Kumar"
console.log(Name.replace("0u", " "))