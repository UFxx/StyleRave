const indexCategoriesContainer = document.querySelector('.categories');
const categoriesSliderCircle = document.querySelector('.slider-circles div:last-child');
const videoSliderCircle = document.querySelector('.slider-circles div:first-child');
window.addEventListener('scroll', () => {
        if (scrollY > 1) {
            indexCategoriesContainer.classList.remove('categories-hidden');
            categoriesSliderCircle.style.backgroundColor = 'black';
            videoSliderCircle.style.backgroundColor = 'white';
        } else if (scrollY == 0) {
            indexCategoriesContainer.classList.add('categories-hidden');
            categoriesSliderCircle.style.backgroundColor = 'white';
            videoSliderCircle.style.backgroundColor = 'black';
        }
        // console.log(scrollY);
})