
(function( $ ) {

  $(document).ready(function() {

    // Create the media query here so we don't need to recreate
    // it for every click.
    var mql = window.matchMedia('(min-width: 600px)');

    // Handle clicks on links with this class.
    $('a.responsive-modal').click(function(e) {

      // Open the link in a modal if the screen is > 600px wide
      if(mql.matches) {

        // Don't allow the link to open as normal.
        e.preventDefault();
        $.fancybox.open(this, {
          type: 'iframe',
        });
      }
    });

  });




})(jQuery);
