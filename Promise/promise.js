const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task is completed');
        resolve();
    }, 1000);
})

promiseOne.then(() => {
    console.log('Promise 1 is consumed');
})

//we could also write promise without setting in a variable..

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('async task2 is completed..')
        resolve();
    }, 4000);
}).then(()=>{
    console.log('promise 2 is completed')
})


const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({
            username: "Chai",
            email: "chai@example.com"
        });
    }, 1000);
})

promise3.then((user)=>{
    console.log(user)
})