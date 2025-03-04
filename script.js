const responsiveMenuButton = document.getElementById('responsiveMenuToggleButton')

const navBarLinks = document.querySelector('.navbar-links')

responsiveMenuButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('open')
    responsiveMenuButton.classList.toggle('open')
})