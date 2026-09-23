// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async Task is completed');
//         resolve();
//     }, 1000);
// })

// promiseOne.then(() => {
//     console.log('Promise 1 is consumed');
// })

// //we could also write promise without setting in a variable..

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('async task2 is completed..')
//         resolve();
//     }, 4000);
// }).then(()=>{
//     console.log('promise 2 is completed')
// })


// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({
//             username: "Chai",
//             email: "chai@example.com"
//         });
//     }, 1000);
// })

// promise3.then((user)=>{
//     console.log(user)
// })

const promisefour = new Promise((resolve,reject)=>{
    let error = false; 
    if(!error){
        resolve({
            username: 'Prashant',
            email: 'prashant610106@gmail.com'
        })
    }
    else{
        reject('ERROR!!! Something went wrong...')
    }
})


promisefour.then((user) => {
    console.log(user);
    return user.username; 
}).then((username) => {
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('This promise is either resovled or rejected....')
})