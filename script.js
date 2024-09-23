// toggle hamburger menu
const toggleMenu = document.getElementById('hamburger-menu');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
    toggleMenu.classList.toggle('show');
})
