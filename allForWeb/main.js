const button = document.getElementById('sendMessage');
const textArea = document.getElementById('textArea');

let timeoutId;

button.addEventListener('click', () => {
    textArea.value = '';
    button.value = 'Message sent!';

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
        button.value = 'Send';
    }, 2000);
})

