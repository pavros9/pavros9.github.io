$(document).ready(function () {

  $('.section-header-burger').click(function (event) {
    $('.section-header-burger, .section-header').toggleClass('active');
    // $(".section-header").removeClass('active');
    if ($('.section-header-burger').hasClass('active')) {
        $('.section-header-burger').appendTo($('.menu_close'));
     
    } else {
        $('.section-header-burger').appendTo($('.menu_open')); 
    }
  });

  function resizeBlock() {
    if (window.matchMedia("screen and (max-width: 1919px)").matches) {
      $('.section-inner-short_description').appendTo($('.section-short_description-right'));
    } else if (window.matchMedia("screen and (min-width: 1920px)").matches) {
      $('.section-inner-short_description').appendTo($('.section-short_description'));
    }
  }

  $(window).resize(function () {
    resizeBlock();
  });

  $(document).ready(function () {
    resizeBlock();
  });

 
  const slider = document.querySelector(".slider input")
  const img = document.querySelector(".images .img-2")
  const dragLine = document.querySelector(".slider .drag-line")
  slider.oninput = ()=> {
    let sliderVal = slider.value
    dragLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
  }
});