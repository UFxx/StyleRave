const addToCartButton = document.querySelector('.product-sizes button');
const addedToCartPopup = document.querySelector('.added-to-cart');

addToCartButton.addEventListener('click', () => {
    addedToCartPopup.style.display = 'block';

    setTimeout(() => {
        addedToCartPopup.style.right = '0';
        addedToCartPopup.style.opacity = 100;
    }, 0)

    setTimeout(() => {
        addedToCartPopup.style.right = '-15%';
        setTimeout(() => {
            addedToCartPopup.style.opacity = 0;
            addedToCartPopup.style.display = 'none';
        }, 300)
    }, 2000)
})