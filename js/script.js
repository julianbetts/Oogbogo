const responsiveMenuButton = document.getElementById('responsiveMenuToggleButton')
const navBarLinks = document.querySelector('.navbar-links')
const streamToggleButton = document.getElementById('stream-toggle-button')
const streamNavBar = document.querySelector('.stream-navbar')

responsiveMenuButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('open')
    responsiveMenuButton.classList.toggle('open')
})

const allNavLinks = document.querySelectorAll('.navbar-links li')

allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBarLinks.classList.remove('open')
        responsiveMenuButton.classList.remove('open')
    })
})

streamToggleButton.addEventListener('click', () => {
    streamNavBar.classList.toggle('open')
})