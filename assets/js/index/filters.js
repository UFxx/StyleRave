const toggleFiltersButton = document.querySelector('.hide-filter-button');
const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');

toggleFiltersButton.addEventListener('click', () => {
    categoriesContainer.classList.toggle('categories-hidden');
    productsContainer.classList.toggle('products__categories-hidden');
})