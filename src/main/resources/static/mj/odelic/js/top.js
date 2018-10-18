$(document).ready(function(){

  // slick slide setting
  var $breakPoint = 767;

  $('.visual').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 600,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        cssEase: 'linear',
        infinite: true,
  });
  $('.new-product-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    dots: false,
    responsive: [{
        breakpoint: $breakPoint,
        settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });
  $('.product-1-slide').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    responsive: [{
        breakpoint: $breakPoint,
        settings: {
        slidesToShow: 1,
        slidesPerRow: 1,
        slidesToScroll: 1,
      }
    }]
  });
  $('.product-2-slide').slick({
    dots: false,
    slidesToShow: 3,
    responsive: [{
        breakpoint: $breakPoint,
        settings: {
        dots: true,
        slidesToShow: 1,
        slidesPerRow: 1,
        slidesToScroll: 1,
      }
    }]
  });
  $('.project-slide').slick({
    dots: true,
    slidesToScroll: 3,
    infinite: true,
    slidesToShow: 4,
    responsive: [{
        breakpoint: $breakPoint,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      }
    }]
  });

  // scroll up down animation
  var position = $(window).scrollTop();
  var el = $('.js-scroll-fix')
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll == 0 || scroll > position ) {
      el
      .removeClass("head-fix")
      .css("left", 0);
    } else {
      el
      .addClass("head-fix")
      .css("left", -$(window).scrollLeft());
    }
    position = scroll;
  });

  //nav fixed
  $(function(){
    var $navBtn = $('.wrap-btn-menu .btn-menu');
    var $html = $('html');

    $navBtn.click(function(){
      $html.toggleClass('navOn');
    });
  });


});