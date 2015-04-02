/* globals $ */
(function() {
  'use strict'; 
  $(function() {

    $('nav a').click( function(e) {
      var page = $(this).attr('href');
      var speed = 500;
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
      e.preventDefault();
    });

    $(document).ready(function() {
      $('.fancybox').fancybox();
    });

  });
})();
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));