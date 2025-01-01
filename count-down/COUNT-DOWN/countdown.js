const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decemeber",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
];

const celebrate = document.querySelector(".celebrate");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2025, 5 ,15 , 12 , 0, 750);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date= futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
celebrate.textContent = `Celebrates on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am 🌼`;

//in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    // console.log(t);

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    let days = t/ oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes,seconds];
    function format(item){
        if(item < 10){
            return (item = `0${item}`);
        }
        return item;
    }
    items.forEach(function (item, index) {
        item.innerHTML = format(values [index]);
    });
    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Birthday has been celebrated 😄</h4>`
    }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();