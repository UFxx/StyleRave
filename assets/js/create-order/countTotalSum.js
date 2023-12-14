const productPrice = document.querySelectorAll('.product-price');
const orderTotalSum = document.querySelector('.total-sum-price');

let totalSum = 0;
productPrice.forEach(el => {
    totalSum += parseInt(el.textContent);
})
orderTotalSum.textContent = totalSum;