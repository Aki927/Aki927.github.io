

window.onload = setForm;

function setForm() {
    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) alert("Data valid. Retaining data for testing.")
    }
}