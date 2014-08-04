


(function( $ ) {

  function breakPointHandler(e) {
    if(e.matches) {
      $('.column').matchHeight();
    }
    else {
      $('.column').matchHeight('remove');
    }
  }

  // Attach the listener to the breakpoint.
  var mql = window.matchMedia('(min-width: 600px)');
  mql.addListener(breakPointHandler);


  // Trigger the breakpoint handler on initial pageload:
  $(document).ready(function() {
    breakPointHandler(mql);
  });

})(jQuery);
