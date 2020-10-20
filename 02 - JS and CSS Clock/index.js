const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;

    const minutes = now.getMinutes(); 
    const minutesDegrees = ((minutes / 60) * 360) + 90;


    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if (seconds === 0) {
        secondHand.style.setProperty('transition', 'null')
        console.log(secondsDegrees)
    } else if (seconds === 1) {
         secondHand.style.setProperty('transition', 'all 0.05s cubic-bezier(.02,.7,.1,1.67)');
     }
}

setInterval(setDate, 1000);

