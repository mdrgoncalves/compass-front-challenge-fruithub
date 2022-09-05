// DOM Variables
const welcome = document.querySelector('.intro__title');

/* This is an event listener that is listening for the window to load. When the window loads, it will
grab the name from the session storage and display it in the welcome message. */
window.addEventListener('load', () => {
    let name = sessionStorage.getItem('name');
    welcome.innerText = `Welcome, ${name}`;
});
