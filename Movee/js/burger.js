// function burger(selector) {
//     let menu = $(selector);
//     let button = menu.find('.burger-menu__button');
//     let links = menu.find('.list__item-link');
//     let overlay = menu.find('.burger-menu__overlay');
    
//     button.on('click', (e) => {
//         e.preventDefault();
//         toggleMenu();
//     });
    
//     links.on('click', () => toggleMenu());
//     overlay.on('click', () => toggleMenu());
    
//     function toggleMenu() {
//         menu.toggleClass('burger-menu--active');
    
//         if (menu.hasClass('burger-menu--active')) {
//             $('body').css('overflow', 'hidden');
//         } else {
//             $('body').css('overflow', 'visible');
//         }
//     }
    
// }
// burger('#burger-menu');

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