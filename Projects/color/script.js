const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let clr = '#';
    for(let i = 0; i < 6; i++){
        clr += hex[Math.floor(Math.random() * 16)];
    }
    return clr; 
}

// console.log(randomColor());

const strt = document.querySelector("#start");
const stp = document.querySelector("#stop")

let intervalID; 

const startChangingColor = () => {
    if(!intervalID){
        intervalID = setInterval(startChanging, 1000);
    }
    
}

const startChanging = () => {
    document.body.style.backgroundColor = randomColor();
}

const stopChangingColor = () => {
    clearInterval(intervalID);
    intervalID = null;
}

strt.addEventListener('click',startChangingColor);
stp.addEventListener('click',stopChangingColor);