import router from './routes/index';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
};

const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Dark Mode';
darkModeButton.addEventListener('click', toggleDarkMode);

document.querySelector('body').insertBefore(darkModeButton, document.querySelector('body').firstChild);