const counterPlus = document.querySelectorAll('.fa-plus');
const counterMinus = document.querySelectorAll('.fa-minus');

counterPlus.forEach(el => {
    let itemPrice = el.parentElement.nextElementSibling.parentElement.nextElementSibling.children[0].textContent / 1;
    el.addEventListener('click', () => {
        let counterText = el.parentElement.parentElement.textContent.split(':')[1]/1;
        totalSum.textContent = totalSum.textContent / 1 + (el.parentElement.nextElementSibling.parentElement.nextElementSibling.children[0].textContent / 1)/counterText;
        counterText++;
        el.parentElement.parentElement.nextElementSibling.children[0].textContent = itemPrice * counterText;
        el.parentElement.parentElement.children[1].textContent = counterText;
        
    })
})

counterMinus.forEach(el => {
    let itemPrice = el.parentElement.parentElement.nextElementSibling.children[0].textContent / 1
    el.addEventListener('click', () => {
        let counterText = el.parentElement.parentElement.textContent.split(':')[1]/1;
        totalSum.textContent = totalSum.textContent/1 - (el.parentElement.parentElement.nextElementSibling.children[0].textContent / 1)/counterText;
        if (counterText < 2) {
            counterText = 2;
            totalSum.textContent = standartSum;
        }
        counterText--;
        el.parentElement.parentElement.nextElementSibling.children[0].textContent = itemPrice * counterText;
        el.parentElement.parentElement.children[1].textContent = counterText;
    })
})