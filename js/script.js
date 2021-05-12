$(document).ready(function () {
  $('.section-header-burger').click(function (event) {
    $('.section-header-burger, .section-header').toggleClass('active');
  });

  function resizeBlock() {
    if (window.matchMedia("screen and (max-width: 1919px)").matches) {
      $('.section-short_description-outer').appendTo($('.section-short_description-right'));
    } else if (window.matchMedia("screen and (min-width: 1920px)").matches) {
      $('.section-short_description-outer').appendTo($('.section-short_description'));
    }
  }

  $(window).resize(function () {
    resizeBlock();
  });

  $(document).ready(function () {
    resizeBlock();
  });


});