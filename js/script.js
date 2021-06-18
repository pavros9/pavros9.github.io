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
});


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


=======
 
  const slider = document.querySelector(".slider input")
  const img = document.querySelector(".images .img-2")
  const dragLine = document.querySelector(".slider .drag-line")
  slider.oninput = ()=> {
    let sliderVal = slider.value
    dragLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
  }
});
>>>>>>> d3d5d5e4d9985a7f54db68d09a41c9032101f268
