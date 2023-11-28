// Set random phrase
const headerPhrase = document.querySelector('.header-text');
const phrases = [
    'style... style - this everything',
    'stylish but boring is better than dangerous but not stylish',
    'fashion passes, style is eternal',
    'the difference between style and fashion is quality',
    'fashion is what we make ourselves out of every day',
    'style is a way to tell about yourself without saying a word',
    'fashion is not about labels. And not about brands. It\'s about something else that\'s going on inside of us'
];

window.addEventListener('load', () => {
    const randomNumber = Math.round(Math.random() * phrases.length - 1);
    headerPhrase.children[0].textContent = phrases[randomNumber];
    headerPhrase.style.top = '35px';
})

// Search on click
const headerSearch = document.querySelector('.header-search input[type="search"]');
const headerSearchIcon = document.querySelector('.header-search i');
const headerSearchContainer = document.querySelector('.header-search');
headerSearchIcon.addEventListener('click', () => {
    headerSearch.style.width = '150px';
    headerSearch.style.backgroundColor = 'white';
    headerSearchIcon.style.marginLeft = '-150px';
    headerSearch.style.marginLeft = '-150px';
    headerSearchContainer.style.backgroundColor = 'transparent'
})

// Sticky filters
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

// Toggle filters
const toggleFiltersButton = document.querySelector('.hide-filter-button');
const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
toggleFiltersButton.addEventListener('click', () => {
    categoriesContainer.classList.toggle('categories-hidden');
    productsContainer.classList.toggle('products__categories-hidden');
    categoriesContainer.classList.contains('categories-hidden') ? toggleFiltersButton.textContent = 'show filters' : toggleFiltersButton.textContent = 'hide filters';
})