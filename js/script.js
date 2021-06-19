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
  


<<<<<<< HEAD
=======

>>>>>>> 6a78e1035cb926ba4ef211657b06e7650f5935c7


(function($) {
    var $dragMe = $(".dragme"),
    $container = $(".sl-container"),
    $viewBefore = $(".view-before");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewBefore.css({
                width : parseFloat($(this).css('left')) + 2
            });
        }
    });
    $container.on("click", function(event) {
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
<<<<<<< HEAD

});
=======
});

>>>>>>> 6a78e1035cb926ba4ef211657b06e7650f5935c7
