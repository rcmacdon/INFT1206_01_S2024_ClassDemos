/*******************************************
    Title:  INFT1206-01 Week 12 Demo (JavaScript File)
    Author: Clint MacDonald
    Date:   July 31, 2024
    Purpose: Forms Validation using JavaScript
*******************************************/

function validateForm() {

    var name = document.forms['contactForm']['name'].value.trim();
    var email = document.forms['contactForm']['email'].value.trim();
    var phone = document.forms['contactForm']['phone'].value.trim();
    var desc = document.forms['contactForm']['desc'].value.trim();

    // run validation - test for failures (innocent until proven guilty)

    // TEST 1 - all fields are required
    if (isRequired(name)) {
        alert('Name is a required field!');
        return false;
    }
    if (isRequired(email)) {
        alert('Email is a required field!');
        return false;
    }
    if (isRequired(phone)) {
        alert('Phone is a required field!');
        return false;
    }
    if (isRequired(desc)) {
        alert('Description is a required field!');
        return false;
    }

    // TEST 2 - Email is a proper format
    // console.log("Clint 1");
    if (!isEmailProper(email)) {
        // console.log("Clint 4");
        alert('A properly formatted email is required!');
        return false;
    }
    
    // TEST 3 - Properly formatted phone number
    if (isNaN(phone) || phone.length != 10 ) {
        alert('A properly formatted phone is required! (no symbols or spaces)');
        return false;
    }
        
    alert('Form submitted successfully!');
    return true;
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






