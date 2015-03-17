$(function() {

	$('nav a').click( function(e) {
		var page = $(this).attr('href');
		var speed = 500;
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
		e.preventDefault();
	});

});