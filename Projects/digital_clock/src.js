const clock = document.querySelector("#clock"); 


setInterval(() =>{
    let date = new Date(); 
    clock.innerHTML = date.toLocaleString();
}, 1000)