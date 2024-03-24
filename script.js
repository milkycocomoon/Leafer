// Navbar
let pathway = './';
function newPathway() {
    if(document.title == 'Leafer - Starting Seeds' || document.title == 'Leafer - Propagation' || document.title == 'Leafer - Pests and Deseases' || document.title == 'Leafer - Basic Care') {
    return pathway = '../';
    } else {
        return;
    }
}
newPathway();

const nav = document.querySelector('nav');
nav.innerHTML = `
                <ul class="flex paddings-0 logo">
                    <li><a href="${pathway}index.html"><img src="${pathway}assets/icons/Leafer-logo.svg" alt="Logo"></a></li>
                </ul>
                <ul id='menu' class="paddings-0 flex menu">
                    <li><a href="${pathway}index.html#encyclopedia">Encyclopedia</a></li>
                    <li><a href="${pathway}index.html#blog">Blog</a></li>
                    <li><a href="${pathway}auth-singin.html">My Plants</a></li>
                    <li><a href="${pathway}auth-singin.html">My Calendar</a></li>
                </ul>
                <ul class="paddings-0 flex auth">
                    <li><a href="${pathway}auth-singup.html" class="button">Sign up</a></li>
                    <li><a href="${pathway}auth-singin.html" class="button accent">Sign in</a></li>
                </ul>
                <ul id='burger-menu' class="burger-menu">
                    <li class="button-abc"><img src="${pathway}assets/icons/Burger-menu.svg" alt="Burger menu icon"></li>
                </ul>
                `;

// Mobile menu
const burgerMenu = document.querySelector('#burger-menu');
const menu = document.querySelector('#menu');
burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('menu-active');
});

menu.addEventListener('click', function() {
    if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        menu.classList.remove('menu-active');
    }
});

// Footer
const footer = document.querySelector('footer');
footer.innerHTML = `
                    <ul class="flex width">
                        <li>©2024 Milkycocomoon, All rights reserved</li>
                        <li><a href="https://github.com/milkycocomoon">Github</a></li>
                        <li><a href="https://www.behance.net/cocomoon">Behance</a></li>
                        <li>This is front-end prototype designed and made by me for demonstration</li>
                    </ul>
                    `;