/*
COMP 2681, Assignment 3
CGI script for a personal website
Author: Jerome Laranang
Date:   August 18, 2024

Purpose:    The purpose of this Javascript is to report on a
            successful completion of form.html.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that the
            user does not have to continually retype test values
            in the survey form.

Filename: formSubmit.html
Link: https://aki927.github.io/
*/

window.onload = setForm;

function setForm() {
    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) alert("Data valid. Retaining data for testing.")
    }
}