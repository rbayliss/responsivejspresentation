
(function( $ ) {

  function breakPointHandler(e) {
    if(e.matches) {
      $('#promo').appendTo('#content');
    }
    else {
      $('#promo').appendTo('#sidebar');
    }
  }

  // Attach the listener to the breakpoint.
  var mql = window.matchMedia('(max-width: 600px)');
  mql.addListener(breakPointHandler);


  // Trigger the breakpoint handler on initial pageload:
  $(document).ready(function() {
    breakPointHandler(mql);
  });


})(jQuery);
