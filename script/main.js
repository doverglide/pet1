document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.header__burger-menu');
    const closeBtn = document.querySelector('.header__close-btn');
    const menu = document.querySelector('.header__nav');
    const mainSection = document.querySelector('.main-section');

    openBtn.addEventListener('click', function() {
        openBtn.classList.toggle('disabled');
        closeBtn.classList.toggle('active');
        menu.classList.toggle('activeMenu');
        mainSection.classList.toggle('marginMainSection');
    });

    closeBtn.addEventListener('click', function() {
        closeBtn.classList.toggle('active');
        openBtn.classList.toggle('disabled');
        menu.classList.toggle('activeMenu');
        mainSection.classList.toggle('marginMainSection');
    })
});
