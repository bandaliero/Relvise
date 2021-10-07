let links = document.querySelector('.nav-links')
let menu = document.querySelector('.nav-menu')
let navBg = document.querySelector('.header-nav')
let rootBg = document.querySelector('.root-bg_switcher')
let logo = document.querySelector('.nav-logo_link')

menu.addEventListener('click', function () {
    links.classList.toggle('active')
    rootBg.classList.toggle('activeDisplay')
})

window.addEventListener('scroll', function () {

    navBg.classList.add('activeBg')
    // logo.style.color = '#000';

    let check = window.scrollY

    if(check <= 0) {
        navBg.classList.remove('activeBg')
        // logo.style.color = '#fff'
    }


})


