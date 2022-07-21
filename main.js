const hamburger = document.getElementsByClassName("menu-btn");
const hoverMenu = document.getElementById('nav-menu-hover');
const closeMenu = document.getElementById('nav-menu-hover-close');
console.log(hamburger[0]);
console.log(hoverMenu);
console.log(closeMenu);

hamburger[0].addEventListener("click", () => {
    hoverMenu.classList.toggle('nav-menu-hover-active');


})
closeMenu.addEventListener("click", () => {
    hoverMenu.classList.toggle('nav-menu-hover-active');
console.log('clicked');

})
