
(function( $ ) {

  Modernizr.load([
    {
      test: Modernizr.csscolumns,
      nope: '../assets/polyfills/CSS3MultiColumn/css3-multi-column.min.js'
    },
    // More polyfills could be conditionally loaded here.
  ]);


})(jQuery);
