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
