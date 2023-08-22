const container = document.querySelector('.container');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const footer = document.querySelector('footer');

open.addEventListener('click', () => {
    container.classList.add('show-nav');
    open.classList.add('hidden');
    close.classList.remove('hidden');
    footer.classList.add('hidden');

})

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
    close.classList.add('hidden');
    open.classList.remove('hidden');
    footer.classList.remove('hidden');
})