const openFiltersMobile = document.querySelector('.open-filters__mobile-button');
const closeFiltersMobile = document.querySelector('.close-mobile-filters');
const categories = document.querySelector('.categories');
const body = document.querySelector('body');

openFiltersMobile.addEventListener('click', () => {
    filtersContainer.classList.remove('filters-hidden');
    categoriesContainer.classList.remove('categories-hidden');
    openFiltersMobile.classList.add('filters__opened');
    categories.classList.add('categories-mobile');
    body.classList.add('no-scroll');
})

closeFiltersMobile.addEventListener('click', () => {
    filtersContainer.classList.add('filters-hidden');
    categoriesContainer.classList.add('categories-hidden');
    openFiltersMobile.classList.remove('filters__opened');
    categories.classList.remove('categories-mobile');
    body.classList.remove('no-scroll'); 
})