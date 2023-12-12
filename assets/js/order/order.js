const orderSum = document.querySelector('.order-sum');
const productsPrices = document.querySelectorAll('.product-sum');

let sum = 0;
productsPrices.forEach(el => {
    const getElementPrice = el.textContent.split('$')[1];
    sum += parseInt(getElementPrice);
})
orderSum.textContent = sum;