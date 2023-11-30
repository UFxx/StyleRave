// Sticky filters
const filtersContainer = document.querySelector('.filters');
const headerCategoriesContainer = document.querySelector('.header-categories');
window.addEventListener('scroll', () => {
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

// Toggle filters
const toggleFiltersButton = document.querySelector('.hide-filter-button');
const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
toggleFiltersButton.addEventListener('click', () => {
    categoriesContainer.classList.toggle('categories-hidden');
    productsContainer.classList.toggle('products__categories-hidden');
    categoriesContainer.classList.contains('categories-hidden') ? toggleFiltersButton.textContent = 'show filters' : toggleFiltersButton.textContent = 'hide filters';
})