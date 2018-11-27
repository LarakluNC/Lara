
jQuery(document).ready(function($) {

	var middlebox = $('.main').height();
	var middleboxhalf = ($(window).height() / 2) - (middlebox / 2);
	$(".main").css('padding-top', middleboxhalf);

	$('.burger').click(function(){
		$('.top-nav, .burger, .list').toggleClass('transform-menu');
	});
	

	$('.slider').slick({
	    dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        cssEase: 'linear'


	});	
	$('.cropped-slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        fade: false,
        cssEase: 'linear'
	});

	$('.expand-contract').click(function(){
		$(this).prev().slideToggle();
		$('div:eq(1)', $(this)).toggleClass('no-x');
	});

	//Magic scroll 

	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#Trigger1"})
	// trigger animation by adding a css class
	.setClassToggle(".Trigger-1-scroll", "Trigger-1-scroll-animate")

	.addTo(controller);

	// Set Trigger 2
	//$('.Trigger-1-scroll p').last().attr('id', 'Trigger2');

	// build scene
	var scene2 = new ScrollMagic.Scene({triggerElement: "#Trigger2"})
	// trigger animation by adding a css class
	.setClassToggle(".Trigger-2-scroll", "Trigger-2-scroll-animate")

	.addTo(controller);

	// Set Trigger 3
	//$('.Trigger-2-scroll p').last().attr('id', 'Trigger3');

	// build scene
	var scene3 = new ScrollMagic.Scene({triggerElement: "#Trigger3"})
	// trigger animation by adding a css class
	.setClassToggle(".Trigger-3-scroll", "Trigger-3-scroll-animate")

	.addTo(controller);

	// build scene
	var scene4 = new ScrollMagic.Scene({triggerElement: "#Trigger4"})
	// trigger animation by adding a css class
	.setClassToggle(".Trigger-4-scroll", "Trigger-4-scroll-animate")

	.addTo(controller);

	// build scene
	var scene5 = new ScrollMagic.Scene({triggerElement: "#Trigger5"})
	// trigger animation by adding a css class
	.setClassToggle(".Trigger-5-scroll", "Trigger-5-scroll-animate")

	.addTo(controller);

	// build scene
	var scene6 = new ScrollMagic.Scene({triggerElement: "#Trigger6"})
	// trigger animation by adding a css class
	.setClassToggle(".Trigger-6-scroll", "Trigger-6-scroll-animate")
	
	.addTo(controller);



});
