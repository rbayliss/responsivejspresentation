
(function( $ ) {

  function breakPointHandler(e) {
    // Do stuff every single time the window changes size.
    // This handler might be called hundreds of times for
    // every time the window is resizing.
    var matchesTxt = e.matches ? 'matches.' : 'does not match.';
    $('#output').append('<div>Media query ' + matchesTxt + '</div>');
  }

  // Attach a listener that fires only when the window changes size
  // above or below a certain width.
  var mediaQueryList = window.matchMedia('(min-width: 500px)');
  mediaQueryList.addListener(breakPointHandler);

})(jQuery);
