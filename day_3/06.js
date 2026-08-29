//const coding = ["js","ruby", "java", "python", "cpp"]

const arr = [1,2,3,4,5,6,7,8,9,10]

const res = arr.filter( (val) =>  val > 4 )
console.log(res);


// You can use chaining like use map then filter ...

//This is called chaining....
const res2 = arr
                .map( (val) => val + 10 )
                .map((num) => num + 1)
                .filter((val) => val > 15)

console.log(res2)


//reduce..
const sm = arr.reduce( (acc , curr ) => acc + curr, 0)
console.log(sm)

//we are done with the basics now now let's start dom.. 
