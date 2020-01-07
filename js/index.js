'use strict';


(function ($) {
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});
	$(".default-header").sticky({
		topSpacing: 0
	});
})(jQuery);