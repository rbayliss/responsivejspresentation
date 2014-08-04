
(function( $ ) {

  $(document).ready(function() {

    // Use a timeout so we can see the change happen
    window.setTimeout(function() {
      // Notify that detection has happened.
      $('#detecting').text('Detection complete.');

      // Detect touch capable devices
      if(Modernizr.touch) {
        $('#touch .indicator').text('supports');
      }

      // Detect devices with localStorages.s
      if(Modernizr.localstorage) {
        $('#localStorage .indicator').text('supports');
      }

      // Detect devices that can use CSS Columns.
      if(Modernizr.csscolumns) {
        $('#csscolumns .indicator').text('supports');
      }

    }, 3000);



  });

})(jQuery);
