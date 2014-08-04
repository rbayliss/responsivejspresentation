
(function( $ ) {

  function resizeHandler() {
    // Do stuff every single time the window changes size.
    // This handler might be called hundreds of times for
    // every time the window is resizing.
    $('#output').append("<div>I'm a little teapot!</div>");
  }

  $(window).resize(resizeHandler);

})(jQuery);
