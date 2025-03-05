const responsiveMenuButton = document.getElementById('responsiveMenuToggleButton')

const navBarLinks = document.querySelector('.navbar-links')

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