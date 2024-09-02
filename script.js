document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Burger menu toggle logic
    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Show/Hide sections based on clicked link
    navLinkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior

            // Remove 'active' class from all sections
            sections.forEach(section => section.classList.remove('active'));

            // Get the target section ID from data attribute
            const targetSection = e.target.getAttribute('data-target');
            document.getElementById(targetSection).classList.add('active');
        });
    });
});
