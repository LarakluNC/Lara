
jQuery(document).ready(function($) {
	var counter = 1;
	$(".allSlides").hide();	
	$(".slide" + counter).css("z-index","2");
	$(".slide" + counter).show();

	$('.wiper-load').addClass('load-wipe');
	$('.inner, .overflow, .overflow2').addClass('load-swipe');	
	setTimeout(function(){ 
		$('.b4').addClass('b4-animate');	
	}, 700);	

	$('.next').on('click', function(){ 
		counter += 1;
		$('.inner, .overflow, .overflow2').addClass('next-swipe');
		setTimeout(function(){ 
				$('.wiper-next').addClass('next-wipe');
			}, 500);
			setTimeout(function(){ 
				$('.slide1').addClass('hide-slide');
				$('.inner, .overflow, .overflow2').removeClass('next-swipe');
				$('.wiper-next').removeClass('next-wipe');
				$(".allSlides").hide();	
				$(".slide" + counter).css("z-index","2");
			$(".slide" + counter).show();
			}, 2000);	
			console.log(counter);
	});

	
	$('.previous').on('click', function(){ 
		counter -= 1;
		$('.inner, .overflow, .overflow2').addClass('previous-swipe');
		setTimeout(function(){ 
			$('.wiper-previous').addClass('previous-wipe');
			}, 500);
			setTimeout(function(){ 
				$('.slide1').addClass('hide-slide');
				$('.inner, .overflow, .overflow2').removeClass('previous-swipe');
				$('.wiper-previous').removeClass('previous-wipe');
				$(".allSlides").hide();	
				$(".slide" + counter).css("z-index","2");
			$(".slide" + counter).show();
			}, 2000);	
			console.log(counter);

	});
	
});


