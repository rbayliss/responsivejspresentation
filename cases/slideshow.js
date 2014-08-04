
(function( $ ) {

  $(document).ready(function() {

    // Initialize the slideshow.
    window.cyc = $('#slideshow').cycle();


    $(window).resize(function() {
      var $slideshow = $('#slideshow');

      // Destroy the slideshow so we can reset the size.
      $slideshow.cycle('destroy');

      // Remove the explicit inline styles Cycle adds.
      $('#slideshow, .slide').css({
        'position': '',
        'width': '',
        'height': '',
        'z-index': '',
        'top': '',
        'left': '',
        'display': ''
      });

      // Recreate the slideshow.
      $slideshow.cycle();

    });

  });

})(jQuery);
