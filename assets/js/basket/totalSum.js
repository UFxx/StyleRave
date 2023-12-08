let standartSum = 0;
const getItemPrice = document.querySelectorAll('.item-price');
const totalSum = document.querySelector('.total-price');

getItemPrice.forEach(el => {
    standartSum += el.textContent/1;
})
totalSum.textContent = standartSum;