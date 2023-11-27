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