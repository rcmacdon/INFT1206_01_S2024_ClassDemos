/*******************************************
    Title:  INFT1206-01 Week 12 Demo (JavaScript File)
    Author: Clint MacDonald
    Date:   July 31, 2024
    Purpose: Forms Validation using JavaScript
*******************************************/
var err = document.getElementById('errorMessage');
err.style.visibility = 'hidden';


function validateForm() {

    var name = document.forms['contactForm']['name'].value.trim();
    var email = document.forms['contactForm']['email'].value.trim();
    var phone = document.forms['contactForm']['phone'].value.trim();
    var desc = document.forms['contactForm']['desc'].value.trim();

    // run validation - test for failures (innocent until proven guilty)

    var isValid = true;
    var strErrMsg = '-----------<br>';
    // TEST 1 - all fields are required
    if (isRequired(name)) {
        strErrMsg += 'Name is a required field!<br>';
        isValid = false;
    }
    if (isRequired(email)) {
        strErrMsg += 'Email is a required field!<br>';
        isValid = false;
    }
    if (isRequired(phone)) {
        strErrMsg += 'Phone is a required field!<br>';
        isValid = false;
    }
    if (isRequired(desc)) {
        strErrMsg += 'Description is a required field!<br>';
        isValid = false;
    }

    // TEST 2 - Email is a proper format
    // console.log("Clint 1");
    if (!isEmailProper(email)) {
        // console.log("Clint 4");
        strErrMsg += 'A properly formatted email is required!<br>';
        isValid = false;
    }
    
    // TEST 3 - Properly formatted phone number
    if (isNaN(phone) || phone.length != 10 ) {
        strErrMsg += 'A properly formatted phone is required! (no symbols or spaces)<br>';
        isValid = false;
    }
        
    // alert('Form submitted successfully!');
    if (!isValid) {
        err.innerHTML = strErrMsg;
        err.style.visibility = 'visible';
    }
    return isValid;
};

function isRequired(str) {
    return str == '';
}

function isEmailProper(strEmail) {
    // console.log("Clint 2");
    var atPosition = strEmail.indexOf('@');
    var dotPosition = strEmail.lastIndexOf('.');

    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= strEmail.length) {
        // console.log("Clint 3");
        return false;
    } else return true;
}






