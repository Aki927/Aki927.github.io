"use strict";

/*
    COMP 2681, Assignment 4
    Javascript for birthday.html Current Time and
    Countdown feature. Shows real-time clock and
    a days, hours, minutes, seconds countdown to July 27, 2025

    Author: Jerome Laranang, T00635622
    Date:   September 2, 2024

    Filename: birthdayCountdown.js
*/

showCountdown();
setInterval("showCountdown()", 1000);

function showCountdown() {
    let currentDay = new Date();
    let dateString = currentDay.toLocaleDateString();
    let timeString = currentDay.toLocaleTimeString();

    document.getElementById("dateToday").innerHTML =
        dateString + "<br />" + timeString;

    let bDate = new Date("July 27, 2025");
    let nextYear = currentDay.getFullYear() + 1;
    bDate.setFullYear(nextYear);

    let remDays = (bDate - currentDay)/(1000 * 60 * 60 * 24);
    let remHrs = (remDays - Math.floor(remDays)) * 24;

    let remMin = (remHrs - Math.floor(remHrs)) * 60;
    let remSecs = (remMin - Math.floor(remMin)) * 60;

    document.getElementById("rDays").textContent = Math.floor(remDays).toString();
    document.getElementById("rHrs").textContent = Math.floor(remHrs).toString();
    document.getElementById("rMin").textContent = Math.floor(remMin).toString();
    document.getElementById("rSec").textContent = Math.floor(remSecs).toString();

}
