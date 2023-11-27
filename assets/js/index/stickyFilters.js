const filtersContainer = document.querySelector('.filters');
const headerCategoriesContainer = document.querySelector('.header-categories');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 110) {
        filtersContainer.classList.add('filters-sticky');
        categoriesContainer.classList.add('categories-sticky');
        productsContainer.classList.add('products__categories-hidden');
        headerCategoriesContainer.classList.add('header-categories-sticky');
    } else {
        filtersContainer.classList.remove('filters-sticky');
        categoriesContainer.classList.remove('categories-sticky');
        productsContainer.classList.remove('products__categories-hidden');
        headerCategoriesContainer.classList.remove('header-categories-sticky');
    }
})