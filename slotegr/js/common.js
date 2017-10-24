$(function() {

	$('.reviews').owlCarousel({
	loop: true,
	items: 1,
	smartSpeed: 700,
	autoHeight: true
});

$('.owl-carousel').owlCarousel({
	loop: true,
	smartSpeed: 300,
	animateIn: 'fadeIn',
	dots: false,
	nav: false,
	autoplay: true,
	autoplayTimeout: 4000,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 1
		},
		992: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
});

	var owl = $('.owl-carousel');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn').click(function() {
			owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn').click(function() {
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			owl.trigger('prev.owl.carousel', [300]);
	});

	var link = $('.callback');
	var popap = $('.popap');
	var close = $('.popup-close');
	var overlay = $('.overlay');

	link.click(function(){
		overlay.show();
		popap.show();
	});
	close.click(function(){
		overlay.hide();
		popap.hide();
	});

});
