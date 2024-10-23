// JS for hamberger icon 
const hamberger = document.querySelector("#hamberger-icon");
//  Js for mobile menu 
const mobileMenu = document.querySelector("#mobileMenu");
hamberger.addEventListener('click', function(){
hamberger.classList.toggle('iconopen');
mobileMenu.classList.toggle('trans');
})