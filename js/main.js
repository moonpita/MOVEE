
document.querySelector('.burger-menu__button').addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('burger-menu--active');
    if (this.classList.contains('is-active')){
        this.classList.remove('is-active');
        document.querySelector('.burger-menu__nav').classList.remove('nav-active');
        document.querySelector('.burger-menu__overlay').classList.remove('overlay-active')
        document.body.classList.remove('body-active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('.burger-menu__nav').classList.add('nav-active');
        document.querySelector('.burger-menu__overlay').classList.add('overlay-active')
        document.body.classList.add('body-active');
    }

})

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

const swiperPark = new Swiper('.swiper-container-park', {

    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next-first',
      prevEl: '.swiper-button-prev-first',
    },
    observeParents: true,
    observer: true,
    observeSlideChildren: true

});

const swiperReviews = new Swiper('.swiper-container-reviews', {

    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination-reviews',
    },

    observeParents: true,
    observer: true,
    observeSlideChildren: true
  });

  const swiperPrice = new Swiper('.swiper-container-price', {

    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination-price',
    },

    observeParents: true,
    observer: true,
    observeSlideChildren: true
  });


  let tab = function () {
    let tabNav = document.querySelectorAll('.park-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tab();


document.addEventListener("DOMContentLoaded", function() {
    ymaps.ready(init);
    function init(){
            // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.715449,37.709398],
            controls: ['geolocationControl'],
            zoom: 11
        });

            // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
            type: "Point", // тип геометрии - точка
                coordinates: [55.715449,37.709398] // координаты точки
                }
            });

                // Размещение геообъекта на карте.
            myMap.geoObjects.add(myGeoObject);
}
});