//drawerjs
$('.drawer').drawer();


//swiper
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  speed: 200,
  //with: 400,
  spaceBetween: 40,
  slidesPerView: 'auto',
  initialSlide: 0,

  //if (window.matchMedia("(max-width: 767px)").matches) //{
    //spaceBetween: 20
  //} else {

  //}

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
    }
  }
})

//スムースクロール
jQuery('a[href^="#"]').on('click',function(){
  var header = jQuery('.header').innerHeight();
  var id =jQuery(this).attr('href');
  var position = 0;
  if (id != '#') {
    position = jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
    scrollTop: position
  },
  300);
});

//アコーディオン
jQuery('.qa-q').on('click', function(){
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-icon').toggleClass('is-open');
});
