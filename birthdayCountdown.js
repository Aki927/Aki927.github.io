"use strict";

/*
    COMP 2681, Assignment 5
    Javascript for birthday.html Current Time and
    Countdown feature. Shows real-time clock and
    a days, hours, minutes, seconds countdown to July 27, 2025.
    Message dynamically changes colours based on difference in days or months

    Author: Jerome Laranang, T00635622
    Date:   September 14, 2024

    Filename: birthdayCountdown.js
*/

// Display a countdown with one second intervals
showCountdown();
setInterval("showCountdown()", 1000);

// Displays a countdown to July 27, 2025, and dynamically updates the message colours
function showCountdown() {
    let currentDay = new Date();
    let dateString = currentDay.toLocaleDateString();
    let timeString = currentDay.toLocaleTimeString();

    document.getElementById("dateToday").innerHTML =
        dateString + " " + timeString;

    // Defines a variable for my birthday: July 27, 2025
    let bDate = new Date("January 27, 2024");
    let nextYear = currentDay.getFullYear() + 1;
    //let nextYear = currentDay.getFullYear(); Comment out. For testing only.
    bDate.setFullYear(nextYear);

    // Calculate the months, days, hours, minutes and second left until July 27, 2025
    let remMonth = getMonthsRemaining(nextYear, bDate.getMonth());
    let remDays = (bDate - currentDay)/(1000 * 60 * 60 * 24);
    let remHrs = (remDays - Math.floor(remDays)) * 24;
    let remMin = (remHrs - Math.floor(remHrs)) * 60;
    let remSecs = (remMin - Math.floor(remMin)) * 60;

    document.getElementById("rDays").textContent = Math.floor(remDays).toString();
    document.getElementById("rHrs").textContent = Math.floor(remHrs).toString();
    document.getElementById("rMin").textContent = Math.floor(remMin).toString();
    document.getElementById("rSec").textContent = Math.floor(remSecs).toString();

    // Make the message red if difference is less than 30 days, green if 2-6 months, blue otherwise
    let color;
    if (remDays < 30) {
        color = "red";
    } else if (remMonth >= 2 && remMonth <= 6) {
        color = "green";
    } else {
        color = "blue";
    }

    // Apply color to all countdown elements
    document.getElementById("rDays").style.color = color;
    document.getElementById("rHrs").style.color = color;
    document.getElementById("rMin").style.color = color;
    document.getElementById("rSec").style.color = color;
}

function getMonthsRemaining(targetYear, targetMonth) {
    // Get the current date
    const dateToday = new Date();

    // Create a date for the target month and year (July is month 6)
    const targetDate = new Date(targetYear, targetMonth - 1);

    // Generate the difference in years and months
    let diffInYears = targetDate.getFullYear() - dateToday.getFullYear();
    let diffInMonths = targetDate.getMonth() - dateToday.getMonth();

    // Return the total number of months
    return diffInYears * 12 + diffInMonths;
}

