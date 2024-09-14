"use strict";

/*
    COMP 2681, Assignment 5
    Javascript for index.html.
    Displays a date and time div on the top of the page.
    Dynamically changes the background color after regular intervals

    Author: Jerome Laranang, T00635622
    Date:   September 14, 2024

    Filename: background_animation.js
*/

// Generate dynamic background colors and a current date and time display upon page load
window.addEventListener("load", setupBackgroundColor);
window.addEventListener("load", setSystemDateTime);

// Set an interval for page to update the time every second
setInterval("setSystemDateTime()", 1000);

// Create a global variable for a Note Tree. Adds a child style element to the parent head element
const styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

// Sets up the html background color of index.html
function setupBackgroundColor() {
    // Insert a style rule for different background colours
    styleSheet.sheet.insertRule(
        "html { \
        background: linear-gradient(-45deg, #0B485B, #F56217, #2196F3, #F44336); \
        background-size: 400% 400%; \
        animation: gradient 20s linear infinite; \
        }", 0
    );
    // Insert a style rule for a gradient animation
    styleSheet.sheet.insertRule(
        "@keyframes gradient { \
        0% { background-position: 0% 50%; } \
        50% { background-position: 100% 50%; } \
        100% { background-position: 0% 50%; \
        }", 1
    );
}

// Creates a style sheet for styling the date and time div
function setSystemDateTime() {
    let currentDay = new Date();
    let dateString = currentDay.toLocaleDateString();
    let timeString = currentDay.toLocaleTimeString();

    // Set the content of the div with current date and time
    document.getElementById("currentDateTime-div").innerHTML =
        "<h3>" + dateString + " " + timeString + "</h3>";

    // Style for the div container to ensure it's visible and scrollable
    styleSheet.sheet.insertRule(
        "div#currentDateTime-div { \
            width: 100%; \
            height: 50px; \
            box-sizing: border-box; \
            display: flex; \
            display: -webkit-flex; \
            justify-content: flex-end; \
            margin: 0; \
            background-color: grey; \
            padding: 10px; \
        }", 2
    );

    // Style for the h3 element to make it scrollable
    styleSheet.sheet.insertRule(
        "div#currentDateTime-div h3 { \
            color: white; \
            font-size: 2em; \
            padding-right: 30px; \
        }", 3
    );

}