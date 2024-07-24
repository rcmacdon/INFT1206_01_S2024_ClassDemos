/*******************************************
* Title:   INFT1206-01 Week 11 Demo
* Author:  Clint MacDonald
* Date:    July 24, 2024
* Purpose: Linking JavaScript to the web - Client Side
*******************************************/

var changeTime = 0;
var rndBut;

function onL() {

    rndBut = document.getElementById('btnCodyColour');

    if (rndBut) {
        rndBut.style.color = 'red';

        // create a listener on the randomize button
        //rndBut.addEventListener('click', changeColor);

        rndBut.addEventListener('click', () => {
            var r = randomValue(255);
            var g = randomValue(255);
            var b = randomValue(255);
        
            document.getElementById('cr').innerText = r;
            document.getElementById('cg').innerText = g;
            document.getElementById('cb').innerText = b;
        
            var body = document.querySelector('body');
            body.style = 'background-color: rgb(' + r + ', ' + g + ', ' + b + ');';
        });

    }
}














function changeMainHeading() {
    var mh = document.getElementById('MainHeading');
    
    switch (changeTime) {
        case 0:
            mh.innerText = 'Clint Was Here!';
            mh.style = 'color: red;'
            changeTime++;
            break;
        case 1:
            mh.innerText = 'Third time is a charm!';
            mh.style = 'background-color: black; color: blue;'
            changeTime++;
            break;
        default:
            mh.innerText = 'Main Heading';
            mh.style = 'background-color: white; color: black;'
            changeTime = 0;
            break;
    }; // end of switch
}; // end of function

// Function to perform the calculations based on button clicked
function calc(symbol) {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    var a = document.getElementById('answer');

    switch (symbol) {
        case 'plus':
            a.innerHTML = '<strong style="color: blue;">' + (Number(n1.value) + Number(n2.value)) + '</strong>';
            break;
        case 'minus':
            a.innerHTML = '<strong style="color: blue;">' + (Number(n1.value) - Number(n2.value)) + '</strong>';
            break;
        case 'divide':
            a.innerHTML = '<strong style="color: blue;">' + (Number(n1.value) / Number(n2.value)) + '</strong>';
            break;
        case 'multiply':  
        a.innerHTML = '<strong style="color: blue;">' + (Number(n1.value) * Number(n2.value)) + '</strong>';
            break;  
    }

}

// function to change the background color using randomization
function changeColor() {


    var r = randomValue(255);
    var g = randomValue(255);
    var b = randomValue(255);

    document.getElementById('cr').innerText = r;
    document.getElementById('cg').innerText = g;
    document.getElementById('cb').innerText = b;

    var body = document.querySelector('body');
    body.style = 'background-color: rgb(' + r + ', ' + g + ', ' + b + ');';

    // background-color: rgb(255,255,255);

}

function randomValue(maxVal) {
    return Math.floor(Math.random()*(maxVal + 1));
}



