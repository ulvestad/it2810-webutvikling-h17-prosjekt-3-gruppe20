(function ($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('body').on('click', '.nav-link', function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').on('click', '.navbar-brand', function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({target: '#mainNav', offset: 54});

})(jQuery); // End of use strict
