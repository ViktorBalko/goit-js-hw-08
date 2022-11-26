import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const inputMail = document.querySelector("input[name = 'email']");
const inputMessage = document.querySelector("textarea[name = 'message']");
const buttonSubmit = document.querySelector('button[type = "submit"]');

feedbackForm.addEventListener('input', throttle(onTyping, 500));
feedbackForm.addEventListener('submit', onSubmit);
dataRecovery();

function onTyping() {
    const data = { email: inputMail.value, message: inputMessage.value };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function dataRecovery() {
    const data = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(data);
    if (data) {
        inputMail.value = parsedData.email;
        inputMessage.value = parsedData.message;
    }
}

function onSubmit(e) {
    e.preventDefault();
    console.log({ email: inputMail.value, message: inputMessage.value });
    e.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}
