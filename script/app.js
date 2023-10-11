// app.js script file for the Flexbox Froggy made by luka khokhashvili( Disclaimer: I dont own the idea. The real creator of the game is Flexbox Froggy at https://flexboxfroggy.com/)

// button element
const buttonElement = document.querySelector('button');

// function to add properties taken from textarea element to the css forefront element
function addCss() {
    const textAreaElement = document.querySelector('#textarea');
    const css = textAreaElement.value;
    const foreFront = document.querySelector('#forefront');
    foreFront.style.cssText = css;
}

// clivk event listener for button
buttonElement.addEventListener('click', addCss);
