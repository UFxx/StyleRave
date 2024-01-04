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
})

// Search on click
const headerSearch = document.querySelector('.header-search input[type="search"]');
const headerSearchIcon = document.querySelector('.header-search i');
const headerSearchContainer = document.querySelector('.header-search');
headerSearchContainer.addEventListener('click', () => {
    headerSearch.style.width = '150px';
    headerSearch.style.backgroundColor = 'white';
    headerSearchIcon.style.marginLeft = '-150px';
    headerSearch.style.marginLeft = '-150px';
    headerSearchContainer.style.backgroundColor = 'transparent'
})