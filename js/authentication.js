// DOM Variables
const input = document.querySelector('.authentication__input')
const submitButton = document.querySelector('.authentication__submit');
const passWrong = document.querySelector('.authentication__content p');

/* An event listener that is listening for a click on the submit button. If the input is empty, it will
remove the class authentication__text--hidden from the paragraph tag. If the input is not empty, it
will set the name to the input value and redirect to the homescreen.html page. */
submitButton.addEventListener('click', () => {
    let name = input.value;

    if (name == '') {
        passWrong.classList.remove('authentication__text--hidden');
    } else {
        sessionStorage.setItem('name', name);
        window.location = '../homescreen.html';
    }
});
