const indexCategoriesContainer = document.querySelector('.categories');
const categoriesSliderCircle = document.querySelector('.slider-circles div:nth-child(2)');
const videoSliderCircle = document.querySelector('.slider-circles div:first-child');
const footerSliderCircle = document.querySelector('.slider-circles div:last-child');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {

    if (scrollY > 1) {
        indexCategoriesContainer.classList.remove('categories-hidden');
        console.log(scrollY);
    } else if (indexCategoriesContainer.classList.contains('categories-hidden') == false) {
        indexCategoriesContainer.classList.add('categories-hidden');
        videoSliderCircle.style.backgroundColor = 'black';
        categoriesSliderCircle.style.backgroundColor = 'white';
        footerSliderCircle.style.backgroundColor = 'white';
    }

    if (scrollY > 100) {
        console.log('aa');
        footer.classList.remove('footer-hidden');
        indexCategoriesContainer.classList.add('categories-footer-show');
    } else if (scrollY < 200) {
        indexCategoriesContainer.classList.remove('categories-footer-show');
        footer.classList.add('footer-hidden');
    }

    if (indexCategoriesContainer.classList.contains('categories-hidden') == false) {
        videoSliderCircle.style.backgroundColor = 'white';
        categoriesSliderCircle.style.backgroundColor = 'black';
        footerSliderCircle.style.backgroundColor = 'white';
    } 
    if (indexCategoriesContainer.classList.contains('categories-footer-show')) {
        videoSliderCircle.style.backgroundColor = 'white';
        categoriesSliderCircle.style.backgroundColor = 'white';
        footerSliderCircle.style.backgroundColor = 'black';
    }
})