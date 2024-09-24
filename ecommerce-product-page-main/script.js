// toggle hamburger menu
const toggleMenu = document.getElementById('hamburger-menu');
const toggle = document.getElementById('toggle');
const closeMenu = document.getElementById('close');

toggle.addEventListener('click', () => {
    toggleMenu.classList.toggle('show');
})

closeMenu.addEventListener('click', () => {
    toggleMenu.classList.remove('show');
});