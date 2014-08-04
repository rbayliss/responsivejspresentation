
(function( $ ) {

  /**
   * window.resize and window.matchmedia().addListener
   * handler needs to live outside of Drupal.behaviors
   * to avoid being attached multiple times.
   */
  var resizeHandler = function() {
    alert('Hey!  Stop that!');
  }
  $(window).resize(resizeHandler);


  Drupal.behaviors.myResponsiveJS = {
    attach: function(context) {
      // If you need your resizeHandler to run
      // on new content, call it explicitly here.
      // Keep in mind this happens each time
      // Drupal.attachBehaviors is called (ie: initial load
      // and all ajax loads)
      resizeHandler();

      // A potentially buggy alternative in case
      // you absolutely NEED your resizeHandler to
      // live inside your behavior.
      $('body', context).once(function() {
        $(window).resize(resizeHandler);
      });
    }
  }

})(jQuery);
