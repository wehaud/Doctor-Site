$(document).ready(function() {
  function checkWidth() {
    var width = $('body').innerWidth(),
      project__slider = $('.slider'),
      project__slide = $('.slider__card'),
      project__wrapper = $('.slider__wrapper'),
      product__slider = $('.products__cards'),
      product__slide = $('.products__card'),
      product__wrapper = $('.products__wrapper');

      if(width < 1000) {
        project__slider.addClass('swiper');
        project__wrapper.addClass('swiper-wrapper');
        project__slide.addClass('swiper-slide');

        product__slider.addClass('swiper');
        product__wrapper.addClass('swiper-wrapper');
        product__slide.addClass('swiper-slide');
      }
      else {
        project__slider.removeClass('swiper');
        project__wrapper.removeClass('swiper-wrapper');
        project__slide.removeClass('swiper-slide');

        product__slider.removeClass('swiper');
        product__wrapper.removeClass('swiper-wrapper');
        product__slide.removeClass('swiper-slide');
      }
  }

  
  checkWidth();

  jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
});

  $("form").validate({
    rules:{
       name:{
         required: true,
         minlength: 4,
       },
       tel:{
         required: true,
         checkMask: true,
       },
    },
    messages:{
			name: "поле не заполнено или заполнено не верно",
			tel: "поле не заполнено или заполнено не верно",
		},
 });
 $('#tel').mask("+7(999)999-9999");

  $(window).resize(function(){
    checkWidth();
  });

  const swiper__products = new Swiper('.products__cards', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
  });

  const swiper__projects = new Swiper('.slider', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto'
  });
});