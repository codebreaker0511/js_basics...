const students1 = ['Prashant','Aditya'];
// console.log(students1);


const st2 = ['Balajee','Pratyush'];
// students1.push(st2);
// console.log(students1);


//use concat methode.. 
// const res = students1.concat(st2);
// console.log(res);


//spread operator.. (... is the spread operator..)
const res = [...students1, ...st2];
console.log(res)
console.log(typeof res)


// const another_array = [1,2,3,[4,[5,6,7]]];

// let real = another_array.flat(1);
// console.log(real);


// console.log(Array.isArray(["prashant"]));
// console.log(Array.from("Prashant"))