const body = document.querySelector("body");

const hours = document.querySelector(".clock_hours");
const minutes = document.querySelector(".clock_minutes");
const seconds = document.querySelector(".clock_seconds");
const period = document.querySelector(".clock_period");

body.style.background = `hsl(${Math.floor(Math.random() * 361)}, 100%, 40%)`;

body.addEventListener('click', () => {
    body.style.background = `hsl(${Math.floor(Math.random() * 361)}, 100%, 40%)`;
})

function getTime() {
    let currentTime = new Date();
    let hrs = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();

    period.textContent = hrs >= 12 ? "PM" : "AM";

    if (hrs > 12) hrs -= 12;
    if (hrs < 10) hrs = `0${hrs}`;
    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;


    hours.textContent = hrs;
    minutes.textContent = min;
    seconds.textContent = sec;

}
setInterval(getTime, 1000);