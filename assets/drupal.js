/**
 * Abbreviated version of drupal.js to simulate attaching behaviors.
 * Original file: http://cgit.drupalcode.org/drupal/tree/misc/drupal.js?h=7.x
 */
var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'locale': {} };

(function( $ ) {

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || Drupal.settings;
    // Execute all of them.
    $.each(Drupal.behaviors, function () {
      if ($.isFunction(this.attach)) {
        this.attach(context, settings);
      }
    });
  };

  $(document).ready(function() {
    Drupal.attachBehaviors(document, Drupal.settings);
  });

})(jQuery);
