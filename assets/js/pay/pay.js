const payButton = document.querySelector('#pay-button');
const payFailedModalWindow = document.querySelector('.pay-failed-modal-window');

payButton.addEventListener('click', () => {
    setTimeout(() => {
        payFailedModalWindow.style.right = 0;
    }, 300)

    setTimeout(() => {
        payFailedModalWindow.style.right = '-300px';
    }, 2300)
})