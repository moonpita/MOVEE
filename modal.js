var modalHero = document.getElementById('hero-modal');
var btnHero = document.getElementById("hero-btn");
var spanHero = document.getElementsByClassName("hero-modal__close")[0];


btnHero.onclick = function() {
    modalHero.style.display = "block";
}
spanHero.onclick = function() {
    modalHero.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalHero) {
        modalHero.style.display = "none";
    }
}




var modalPrice = document.getElementById('price-modal');
var btnPrice = document.getElementById("price__btn");
var spanPrice = document.getElementsByClassName("price-modal__close")[0];


btnPrice.onclick = function() {
    modalPrice.style.display = "block";
}
spanPrice.onclick = function() {
    modalPrice.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalPrice) {
        modalPrice.style.display = "none";
    }
}