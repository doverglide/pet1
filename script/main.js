document.addEventListener('DOMContentLoaded', () => {
    const checkBox = document.getElementById("header__burger");
    const nav = document.querySelector(".header__nav");
    const header = document.querySelector(".header");

    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.marginLeft = '3.47vw';
            nav.style.marginTop = '28.65vw';
            header.style.marginBottom = '22.5vw';
        } else {
            nav.style.display = 'none';
            header.style.marginBottom = '0';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'row';
            nav.style.marginLeft = '0';
            nav.style.marginTop = '0';
            header.style.marginBottom = '0';
        } else {
            nav.style.display = checkBox.checked ? 'flex' : 'none';
        }
    });
});
