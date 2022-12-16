// function to validate hourly price field if checked radio button is hiring 
function submitform() {
    var aboutwhat = document.querySelector('input[name="aboutwhat"]:checked').value;
    var hourly_price = document.getElementById("hourly_price").value;

    if (aboutwhat == "Hiring" && hourly_price == "") {
        // alert("Hourly price is required")
        document.getElementById("error_message").innerHTML = "Hourly price is required";
        return false;
    } else {
        return true;
    }
}

// function to validate canadian postal code
function postalcodecheck() {

    var pattern = (/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i);
    var postalcode = document.getElementById("postalcode").value;
    var testresult = pattern.test(postalcode);
    // if (postalcode.length > 5) {
    if (testresult === false) {
        document.getElementById("error_message").innerHTML = "Invalid Postal Code";
        document.getElementById("error_message").style.padding = "10px 0px 10px 0px";
        document.getElementById("submit").disabled = true;
        return false;
    }
    else {
        document.getElementById("error_message").innerHTML = "";
        document.getElementById("error_message").style.padding = "0px";
        document.getElementById("submit").disabled = false;
        return true;
    }
    // }
    // else {
    //     document.getElementById("error_message").innerHTML = "";
    //     document.getElementById("error_message").style.padding = "0px";
    //     document.getElementById("submit").disabled = true;
    //     return false;
    // }
}

// hide show hourly price as per selection of radio button
function checkhiring(value) {
    if (value == "yes") {
        document.getElementById("hourly_price_div").style.display = "block";
    }
    else {
        document.getElementById("hourly_price_div").style.display = "none";
    }
}
