const sliderLine = document.querySelector('.product-slider-line');
const arrowDown = document.querySelector('.fa-chevron-down');
const arrowUp = document.querySelector('.fa-chevron-up');
const sliderLineItem = document.querySelectorAll('.product-slider-item');

let offset = 0;
let maxOffset = (sliderLineItem.length - 5) * 70;

function sliderOffset(arrow) {
    arrow.addEventListener('click', () => {
        if (arrow == arrowDown) {
            offset -= 70;
            if (offset < -maxOffset) {
                offset = 0;
            }
            sliderLine.style.marginTop = offset + 'px';
        } else if (arrow == arrowUp) {
            offset += 70;
            if (offset === 70) {
                offset = -maxOffset;
            }
            sliderLine.style.marginTop = offset + 'px';
        }
    })
}
sliderOffset(arrowDown);
sliderOffset(arrowUp);

const productPhoto = document.querySelector('.product-img img')
sliderLineItem.forEach(el => {
    el.addEventListener('click', () => {

        for (i = 0; i < sliderLineItem.length; i++) {
            sliderLineItem[i].classList.remove('product-slider-item__active')
        }
        el.classList.add('product-slider-item__active');
        const elImg = el.children[0].getAttribute('src', '');
        productPhoto.setAttribute('src', elImg);

    })
})