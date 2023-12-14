const productSizes = document.querySelectorAll('.product-size');

productSizes.forEach(el => {
    el.addEventListener('click', () => {
        if (el.classList.contains('product-size-disabled')) {
            return;
        }

        el.classList.toggle('product-size-choosing');
    })
})