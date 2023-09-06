const daysEle = document.getElementById("days-p");
const hoursEle = document.getElementById("hours-p");
const minutesEle = document.getElementById("minutes-p");
const secondsEle = document.getElementById("seconds-p");

let currDate = new Date();
let countDownDate = new Date(`Aug 4, ${currDate.getFullYear()} 00:00:01`);

const timer = setInterval(() => {
    let dateDiff = countDownDate.getTime() - new Date().getTime();

    if (dateDiff <= 0) {
        countDownDate = new Date(`Aug 4, ${currDate.getFullYear() + 1} 00:00:01`);
    }

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    daysEle.innerHTML = days < 10 ? `0${days}` : days;
    hoursEle.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutesEle.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsEle.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

}, 1000);
