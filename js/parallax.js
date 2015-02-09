$(function() {

	var $window = $(window);

	$window.on('scroll', function() {
		var elements = _.chain($('[data-parallax]'))
			.filter(function(el) {
				return $(el).position().top < ($(window).scrollTop() + $(window).height());
			})
			.map(function(el){
				return $(el).find('[data-parallax-scroll]').toArray();
			})
			.flatten()
			.each(function(el) {
				var factor = parseFloat($(el).data('parallaxScroll'));
				console.log($(el), $(el).closest('[data-parallax]').offset().top);
				$(el).css('top', (-factor * ($(window).scrollTop() - $(el).closest('[data-parallax]').offset().top)) + 'px');
			})
			.value();
	});

	$('nav a').click( function(e) {
		var page = $(this).attr('href');
		var speed = 750;
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
		e.preventDefault();
	});

});