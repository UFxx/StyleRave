const productSizes = document.querySelectorAll('.product-size');

productSizes.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('product-size-choosing');
    })
})