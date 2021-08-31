$(document).ready(function () {
  /// --- menu-burger
  $('.section-header-burger').click(function (event) {
    $('.section-header-burger, .section-header').toggleClass('active');
  });
  /// --- menu-burger ---

  /// --- moves section-inner-short_description in other block ---
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
  /// --- moves ---

  /// --- slider ---
  (function ($) {
    var $dragMe = $(".dragme"),
      $container = $(".sl-container"),
      $viewBefore = $(".view-before");
    $dragMe.draggable({
      containment: "parent",
      drag: function () {
        $viewBefore.css({
          width: parseFloat($(this).css('left')) + 2
        });
      }
    });
    $container.on("click", function (event) {
      var eventLeft = event.pageX - $container.offset().left - 15;
      animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
      $dragMe.animate({
        left: _left
      }, 'slow', 'linear');
      $viewBefore.animate({
        width: _left
      }, 'slow', 'linear');
    }
  })(jQuery);
  /// --- slider ---
});
