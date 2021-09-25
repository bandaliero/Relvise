let menu = document.getElementById('burger');
let links = document.getElementById('links');
let linkStyle = getComputedStyle(links);

menu.addEventListener("click", function () {
    if(linkStyle.display === 'none'){
        links.classList.add('active')
    } else {
        links.classList.remove('active')
    }
})
